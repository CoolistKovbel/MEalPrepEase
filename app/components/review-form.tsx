"use client";

import { handleUserReview } from "../lib/action";

interface ReviewFormProps {
  handlingUser: any;
}

const ReviewForm = ({ handlingUser }: ReviewFormProps) => {
  const paUse = JSON.parse(handlingUser);

  const handleReview = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      console.log("handling user review");

      handleUserReview(formData);

      console.log(paUse);
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <form
      className="flex gap-4 flex-col bg-[#444] p-4 drop-shadow-lg rounded-lg mt-5"
      onSubmit={handleReview}
    >

      <label htmlFor="titleReview">
        <span className="text-2xl font-bold ">title Review:</span>
        <input
          className="w-full  p-3 bg-[#111] text-white resize-none"
          id="titleReview"
          name="titleReview"
          type="text"
        />
      </label>

      <label htmlFor="createReview">
        <span className="text-2xl font-bold ">Submit Review:</span>
        <textarea
          className="w-full h-[300px] p-3 bg-[#111] text-white resize-none"
          id="createReview"
          name="createReview"
        />
      </label>
      <button className="font-bold bg-[#333] hover:bg-[#111] p-2 rounded-lg">
        submit
      </button>
    </form>
  );
};

export default ReviewForm;
