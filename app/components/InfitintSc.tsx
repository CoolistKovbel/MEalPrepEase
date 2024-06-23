"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {

  const deCol = [
    "/package2.jpg",
    "/packages.jpg",
    "/lnading.jpg"
  ]

  return (
    <div className="w-full rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={deCol} direction="left" speed="fast" />
    </div>
  );
}
