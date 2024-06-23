"use client"

import { whiteList } from "../../lib/action";

const WaitListForm = () => {
  return (
    <form action={whiteList}>
      <input
        type="email"
        placeholder="enter email here"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-4 bg-neutral-950 placeholder:text-neutral-700"
        name="email"
        id="email"
      />
       <button className="text-[13px] bg-[#222] p-2 hover:text-yellow-500 mt-1 rounded-lg float-right mt-4 w-full font-bold uppercase">Subscribe</button>
    </form>
  );
};

export default WaitListForm;
