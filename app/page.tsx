import Image from "next/image";

export default function Home() {
  
  const handleFeatures = [
    {
      title: "MICROWAVE SAFE FOR EASY WARMING",
      description:
        " These microwave-safe meal prep containers make meal times more  efficient and convenient.",
      image: "/removeBG.png",
    },
    {
      title: "DISHWASHER AND FREEZER SAFE",
      description: `These food containers with lids ensure that your prepared, cooked
            meals retain flavor and color. NOTE: When freezing, do not try to
            squeeze it into a narrow space; otherwise, it will break.`,
      image: "/fridgefood.png",
    },
    {
      title: "BPA-FREE AND RECYCLABLE",
      description: `These heightened-to-go containers are made from food-grade safe PP
            material and perfect for carrying healthy meals anywhere.`,
      image: "/saladbpa.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {/* header */}

      <header className="w-full bg-[#333] p-4 flex md:flex-row  flex-col justify-center  gap-4 mb-10">
        <div className="w-full md:w-[50%] flex flex-col gap-4 justify-center">
          <h1 className="text-2xl font-bold">
            Get yourself a leak proof and air tight
          </h1>
          <p className="text-sm">
            Get yourself started making pre packages meals and get ahead on your
            day.
          </p>
          <a className="text-md bg-[#222] p-3 " href="/shop">
            View more
          </a>
        </div>

        <div className="w-[300px] h-[300px] relative mx-auto">
          <Image src="/lnading.jpg" alt="packing" fill />
        </div>
      </header>

      <section className="flex flex-col w-full h-[800px] overflow-auto mb-10 gap-4">
        {handleFeatures.map((item, i) => (
          <div
            key={crypto.randomUUID()}
            className={`w-[100%] p-4 bg-[#222] h-[fit] md:h-[300px] flex flex-col md:flex-row items-center justify-between rounded-lg drop-shadow-lg  gap-10 ${
              i % 2 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <header className="w-[100%] md:w-[50%] ">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
            </header>

            <div className="w-[300px] h-[300px] relative">
              <Image src={item.image} alt="image of feature" fill />
            </div>
          </div>
        ))}
      </section>

      <div className="w-full h-[340px] relative">
        <Image src="/lnading.jpg" alt="landing image" fill />
      </div>

    </main>
  );
}
