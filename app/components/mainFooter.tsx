import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="w-full bg-[#222] p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between">

      <div className="md:w-[50%]">
        <h2 className="text-3xl font-bold mb-2">MealPrepEase</h2>

        <p className="text-sm text-gray-500">
          Get your self into healthy habits with just a few containers and a
          meal plan if you sign up for out mailing list.
        </p>
      </div>

      <nav className="md:w-[20%] flex flex-row md:flex-col gap-4 text-center bg-[#111] p-4">
        <Link href="/about" className="bg-[#222] p-2 font-bold uppercase">about</Link>
        <Link href="/contact" className="bg-[#222] p-2 font-bold uppercase">contact</Link>
        <Link href="/shop" className="bg-[#222] p-2 font-bold uppercase">shop</Link>
      </nav>

    </footer>
  );
};

export default MainFooter;
