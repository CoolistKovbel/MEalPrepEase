import React from "react";


import WaitListForm from "./waitlist-form";

export function EmailList() {
  return (
    <div className="h-[20rem] w-full rounded-md bg-[#000] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-[2.4rem] md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Subscribe for latest updates
        </h1>

        <WaitListForm />
      </div>

    </div>
  );
}
