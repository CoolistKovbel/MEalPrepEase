import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen p-4">
      <header className="w-full p-4 bg-[#222]">
        <h1 className="text-4xl font-bold">About page</h1>
      </header>

      <section className="p-10 bg-[#222] w-full flex flex-col gap-4 ">
        <h2 className="text-2xl md:text-4xl font-bold ">New to mealprepease</h2>

        <p>
          Get yourself started on a heslthy diet. We all know it may be
          difficult to cook a nice home cook meal constantly. At the same time
          keep it fresh may be difficult as well. These containers are perfect
          for the job and thought it would be awesome to share it with you.
        </p>

        <p>
          We are here to allow you to save your meals and share it with friends.
          Learn to cook a great meal where maybe later you may use these
          containers to dispense your own meals. Take this as a steping stone
          towards achieving a better diet and make your money back on the side.
        </p>

        <p>
          Join our mailing list to be able to make your own meals by getting
          weekly recipeces sent right to your mail. Share with us your meals on
          the social medias by giving us a small{" "}
          <strong className="text-yellow-500">#mealprepease</strong>
        </p>
      </section>
    </main>
  );
};

export default Page;
