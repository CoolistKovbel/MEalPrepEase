import { getSession, grabAllTranasctions } from "@/app/lib/action";

const Page = async () => {
  const user = await getSession();

  const grabTranascations: any = await grabAllTranasctions(user.userId);

  console.log(grabTranascations, "asll transactoin");

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <div className="p-4 flex flex-col  gap-4">

        <div className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
          <h2 className="text-3xl md:text-5xl font-bold mb-6"> 
            transaciont PAge
          </h2>
          <p className="text-lg mb-6">
            This user existed in a void not so different then this
          </p>
        </div>

        {grabTranascations.length > 0 ? (
          grabTranascations.map((item: any) => (
            <div
              key={crypto.randomUUID()}
              className="w-[800px] h-[300px] p-4 bg-[#444] rounded-lg drop-shadow-lg text-sm"
            >
              <div>
                <h2>
                  Created At:
                  <span className="bg-[#222] p-2 text-[10px] block">
                    {item.createdAt.toString()}
                  </span>
                </h2>
                {/* <h2 className="">
                  Transaction hash :
                  <span className="bg-[#222] p-2 text-[10px] block">
                    {item.transactionHash}
                  </span>
                </h2> */}
              </div>

              <div>
                <span className="bg-[#333] p-2 text-[10px] block flex flex-col">
                  Price: {`${item.price}`}
                </span>
                <span className="bg-[#333] p-2 text-[10px] block flex flex-col">
                  Amount: {`${item.amount}`}
                </span>

                <span className="bg-[#222] p-2 text-[10px] block flex flex-col">
                  <span>Transaction Signature:</span>
                  {item.transactionsignature.toString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 bg-[#222]">
            <h2 className="text-2xl">sorry no tranasctions</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
