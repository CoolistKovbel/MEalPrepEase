"use client";

import { useModal } from "../hooks/use-modal-store";

const ProfileUpdateToggle = () => {
    
  const { onOpen } = useModal();

  const handleProfileUpdate = async () => {
    try {

      onOpen("updateAccount");
      
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <button
      className="bg-[#444] p-3  absolute top-0 right-0 hover:bg-[#222]"
      onClick={handleProfileUpdate}
    >
      🔔
    </button>
  );
};

export default ProfileUpdateToggle;
