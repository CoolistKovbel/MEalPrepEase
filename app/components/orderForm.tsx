"use client";

import { ethers } from "ethers";
import { useState } from "react";
import { handleUserTrnasaction, userAddressCheck } from "../lib/action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const OrderForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<any>(false);

  const handleOrder = async (e: any) => {
    e.preventDefault();

    try {
      console.log("ordering meal", e.target.orderNow.value);

      setIsLoading(true);

      // Check if user has address
      const check = await userAddressCheck();

      if (
        check?.startsWith("please update address settings") ||
        check === "sorry ther is error"
      ) {
        alert("sorry but you need to update your user account settings");
        router.push("/profile");
        return;
      }

      const total = 49.99 * e.target.orderNow.value;
      const valueEth = ethers.utils.parseEther((total / 3590).toString());

      const gg = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await gg.getSigner();

      const sendMessage = `Hi, you are purchasing the container correct a total of ${total}`;
      const sign = await signer.signMessage(sendMessage);

      const basictranasction = await signer.sendTransaction({
        value: valueEth,
        gasLimit: 600000,
        to: "0x1C352E8F3e035c524F2385818b44859906d3c705", // dev wallet
      });

      toast(`Your current trasnaction hash ${basictranasction.hash} pending`);
      await basictranasction.wait();
      toast(`Your current trasnaction hash ${basictranasction.hash} completed`);

      setIsLoading(false);
      // const gg = await handleSub(valueEth)

      const payload = {
        amount: e.target.orderNow.value,
        price: total,
        tokenAmount: valueEth,
        signature: sign,
        transactionHash: basictranasction.hash,
      };

      const userHandle = handleUserTrnasaction(payload);

      const res = await userHandle;

      if (res?.startsWith("Please update mailing address")) {
        router.push("/profile");
      } else if (res?.startsWith("success")) {
        toast(res);
      }
    } catch (error) {

      
      console.log(error);
    }
  };

  return (
    <form
      className="flex items-center flex-col gap-4 bg-[#444] p-4 rounded-lg"
      onSubmit={handleOrder}
    >
      <label htmlFor="orderNow" className="flex items-center gap-5">
        <span className="text-xl">Order Now</span>
        <input
          type="number"
          placeholder="order now"
          id="orderNow"
          name="orderNow"
          className="p-2 bg-[#222] text-white"
          disabled={isLoading}
        />
      </label>

      <button className="bg-[#222] p-2 rounded-lg hover:bg-[#444] ">
        {isLoading ? "....loading" : "submit"}
      </button>
    </form>
  );
};

export default OrderForm;
