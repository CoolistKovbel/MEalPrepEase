import EthereumProvider from "@/app/components/userclient";
import { getSession } from "@/app/lib/action";


const Page = async () => {
  const user = await getSession();

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center flex-col gap-10">
      <div className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">PRofile PAge</h2>

        <p className="text-lg mb-6">
          This user existed in a void not so different then this
        </p>
      </div>

      {/* <div className="flex items-center justify-center gap-4 w-[80%] h-[400px] bg-[#222] p-4 relative">
        <div className="w-[300px] h-[300px] relative">
          <Image
            src={user.image ? user.image : "/sadboy.jpg"}
            alt="user profile image"
            fill
          />
        </div>

        <header className="bg-[#111] w-[50%] p-4 h-[82%]">
          <h2 className="text-2xl font-bold">Name: {user.username}</h2>
          <div className="flex items-center gap-4">
            <p>Bal: {userBal.toString()}</p>
            <p>account: {userAccount.toString()}</p>
          </div>
          <p className="text-sm">Email: {user.email ? user.email : "null"}</p>
          <p className="text-sm">Role: {user.role}</p>
        </header>

        <ProfileUpdateToggle />
      </div> */}


    <EthereumProvider user={user} />



    </main>
  );
};

export default Page;
