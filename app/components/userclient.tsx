"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import ProfileUpdateToggle from "./profileupdate-toggle";

interface EthereumProviderProps {
  user: any;
}

const EthereumProvider = ({ user }: EthereumProviderProps) => {
  const [userAccount, setUserAccount] = useState<any>(null);
  const [userBal, setUserBal] = useState<any>(null);

  useEffect(() => {
    const setupSigner = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        const balance = await signer.getBalance();
        setUserAccount(account);
        setUserBal(ethers.utils.formatEther(balance));
      }
    };

    setupSigner();
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 w-[80%] h-[400px] bg-[#222] p-4 relative">
      <div className="w-[300px] h-[300px] relative">
        <Image
          src={user.image ? user.image : "/sadboy.jpg"}
          alt="user profile image"
          fill
        />
      </div>

      <header className="bg-[#111] w-[50%] p-4 h-[82%]">
        <h2 className="text-2xl font-bold">Name: {user.username}</h2>
        <div className="flex items-center gap-4">
          <p>Bal: {userBal ? userBal : "Loading..."}</p>
          <p>Account: {userAccount ? userAccount.substring(0,8) : "Loading..."}</p>
        </div>
        <p className="text-sm">Email: {user.email ? user.email : "null"}</p>
        <p className="text-sm">Role: {user.role}</p>
      </header>

      <ProfileUpdateToggle />
    </div>
  );
};

export default EthereumProvider;
