import { InfiniteMovingCardsDemo } from "@/app/components/InfitintSc";
import OrderForm from "@/app/components/orderForm";
import ReviewForm from "@/app/components/review-form";
import { getSession, grabAllUserReviews } from "@/app/lib/action";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const user = await getSession();

  const allReviews: any = await grabAllUserReviews();

  const userLogg = user.isLoggedIn;

  return (
    <main className="w-full min-h-screen bg-[#222]">
      <header className="w-full p-5">
        <h2 className="text-2xl font-bold">MealPreEase</h2>
        <p className="text-sm">
          Get yourself your very own set of containers to hold your next meal.
        </p>
      </header>

      <section className="p-5 flex items-center gap-10 md:flex-row flex-col md:h-[450px] bg-[#444]">
        <div className="md:w-[50%] text-center md:text-left h-full flex flex-col gap-5">
          <h2 className="text-2xl font-bold mb-2">
            Meal Prep Containers - 50 Pack
          </h2>

          <div className="md:w-[80%] h-[300px]">
            <InfiniteMovingCardsDemo />
          </div>

          <h3 className="text-sm text-gray-500 font-bold">Only: $49.99</h3>
        </div>

        <div className="md:w-[50%] h-full bg-[#111] mt-10 md:mt-0  p-5 flex flex-col justify-around rounded-lg drop-shadow-lg">
          <h2 className="text-2xl font-bold">Description 🔔</h2>
          <p className="text-sm">
            Perfect for individuals with hetic scheduals and very sutable for
            those who are always on the go. These containers not only save you
            time but the hastel to come up with an idea to eat something when
            you are hungry.
          </p>

          <OrderForm />
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Reviews:</h2>

        <div className="flex flex-col gap-4 h-[800px] overflow-auto">
          {allReviews.map((item: any, i:any) => (
            <div
              key={crypto.randomUUID()}
              className={`bg-[#444] w-full p-4 flex-col md:flex-row  justify-between flex items-center gap-5 ${
                i % 2 ? "flex-row-reverse" : "flex-row"
              } rounded-lg drop-shadow-lg`}
            >
              <div className="md:w-[60%]">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-sm">{item.review}</p>
              </div>

              <div className="md:w-[30%] flex flex-col items-center bg-[#222] p-4 rounded-lg drop-shadow-lg">
                <div className="w-32 h-32 relative">
                  <Image
                    src={item.image ? item.image : "/sadboy.jpg"}
                    alt="profile image"
                    fill
                  />
                </div>
                <h3 className="text-sm">User: {item.username}</h3>
              </div>
            </div>
          ))}
        </div>

        {userLogg && <ReviewForm handlingUser={JSON.stringify(user)} />}
      </section>
    </main>
  );
};

export default Page;
