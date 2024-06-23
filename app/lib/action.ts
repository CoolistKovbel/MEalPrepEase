"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { ethers } from "ethers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import dbConnect from "./db";
import { sendMail } from "./mail";
import { User } from "../models/User";
import { hash } from "bcryptjs";
import { Transaction } from "../models/Transaction";
import { Review } from "../models/Review";

const sendMessage = `Hi, welcome to hell`;

// token and session actions
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

// Form actions

// handle  user logout
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());
  const content = data.content as string;

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: data.email as string,
      subject: data.subject as string,
      content: content.concat(` Message situated from ${data.email} `),
    });

    return {
      message: `${data.email} your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

// handle user register
export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  try {
    const { username, signature, address } = Object.fromEntries(formData);
    const session = await getSession();

    await dbConnect();

    const UsrExist: any = await User.findOne({ address });

    if (UsrExist) {
      if (UsrExist.signature === signature) {
        session.userId = UsrExist._id.toString();
        session.username = UsrExist.username;
        session.image = UsrExist.image;
        session.email = UsrExist.email;

        session.role = UsrExist.role;
        session.isLoggedIn = true;
        session.account = UsrExist.account;

        await session.save();

        return "noice";
      }
    }

    const newUser: any = new User({
      username: username as string,
      signature: signature as string,
      address: address as string,
      homeAddress: "null",
      city: "null",
      state: "null",
      zip: "null",
      email: "null",
      phone: "null",
      profileImage: "null",
    });

    await newUser.save();

    session.userId = newUser._id.toString();
    session.username = newUser.username;
    session.image = newUser.image;
    session.email = newUser.email;

    session.role = newUser.role;
    session.isLoggedIn = true;
    session.account = newUser.account;

    await session.save();

    return "noice";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};

const uploadFile = async (file: File) => {
  return "https://example.com/path/to/uploaded/file.jpg";
};

export const updateUserAccount = async (formData: FormData) => {
  const userObj: any = Object.fromEntries(formData);
  const user: any = await getSession();

  try {
    console.log("handleUpdate");

    await dbConnect(); // Ensure database connection

    const userExist: any = await User.findById(user.userId);

    if (!userExist) return "User not found";

    const userDocument = userExist;

    // Iterate through userObj and update userDocument accordingly
    for (let key in userObj) {
      console.log(user[key], "session suser");

      // Check if userObj[key] is defined and not null or undefined
      if (userObj.hasOwnProperty(key) && userObj[key] != null) {
        if (key === "profileImage" && userObj[key] instanceof File) {
          // Handle file upload for profileImage
          const file = userObj[key];

          if (file.size > 0) {
            const fileUrl = await uploadFile(file); // Upload the file and get URL/path
            userDocument[key] = fileUrl; // Update userDocument with file URL or path
          }
        } else {
          // Only update if the key exists in userDocument
          if (
            userObj[key] !== undefined &&
            userObj[key] !== "undefined" &&
            userObj[key] !== null &&
            userObj[key] !== ""
          ) {
            userDocument[key] = userObj[key];
            user[key] = userObj[key];
          }
        }
      }
    }

    await userDocument.save(); // Save updated userDocument
    await user.save(); // Save user session (if needed)

    revalidatePath("/profile"); // Revalidate profile path
  } catch (error) {
    console.log(error);
  }
};

export const handleUserTrnasaction = async (data: any) => {
  const user = await getSession();
  await dbConnect();

  try {
    console.log("handle transaction", data);

    const serverUser = await User.findById(user.userId);

    if (serverUser?.homeAddress.length === 0)
      return "Please update mailing address.";

    const transac = new Transaction({
      price: data.price,
      amount: data.amount,
      tokenAmount: data.tokenAmount.toString(),
      transactionsignature: data.signature,
      address: serverUser?.address,
      userId: user.userId,
    });

    await transac.save();

    return "success";
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

export const userAddressCheck = async () => {
  try {
    const userSession = await getSession();
    const userServer = await User.findById(userSession.userId);

    if (
      userServer?.homeAddress.length === 0 ||
      userServer?.homeAddress === "null"
    ) {
      return "please update address settings";
    }
  } catch (error) {
    console.log(error);
    return "sorry ther is error";
  }
};

export const handleUserReview = async (formData: FormData) => {
  const { createReview, titleReview } = Object.fromEntries(formData);
  const userSess = await getSession();
  try {
    await dbConnect();

    const rev = new Review({
      username: userSess.username,
      profileImage: userSess.image,
      title: titleReview,
      review: createReview,
    });

    await rev.save();

    revalidatePath("/shop");
  } catch (error) {
    console.log(error);
    console.log("error in de hreve");
  }
};

export const grabAllUserReviews = async () => {
  try {
    console.log("grabbing greviews");

    await dbConnect();

    const reve = await Review.find().lean();

    return reve;
  } catch (error) {
    console.log("error");
  }
};

export const grabAllTranasctions = async (userId: any) => {
  await dbConnect();

  try {
    console.log("grtabbing all transactions");

    const transaction = await Transaction.find({
      userId: userId,
    }).populate("userId");

    console.log(transaction);

    return transaction;
  } catch (error) {
    console.log("errror");
  }
};
