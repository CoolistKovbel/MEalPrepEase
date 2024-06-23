import mongoose, { Model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  signature: string;
  address: string;
  homeAddress: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  profileImage: string;
  role: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
    },
    signature: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
      unique: true,
    },
    homeAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    profileImage: {
      type: String,
    },
    role: {
        default: "USER",
        type: String
      },
  },
  { timestamps: true }
);

let UserModel: Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", userSchema);
}

export const User = UserModel;
