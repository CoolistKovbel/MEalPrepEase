import { ethers } from "ethers";

export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const isClientSide = () => {
  return (
    typeof window !== "undefined" && typeof window.ethereum !== "undefined"
  );
};

export const handleSub = async (transactions: any) => {
  try {
    console.log("slow");

    const gg = new ethers.providers.Web3Provider(window.ethereum);

    const signer = await gg.getSigner();

    const basictranasction = await signer.sendTransaction({
      value: transactions,
      gasLimit: 900000,
      to: "0x1C352E8F3e035c524F2385818b44859906d3c705",
    });

    await basictranasction.wait();

    console.log(basictranasction);
  } catch (error) {
    console.log(error);
  }
};
