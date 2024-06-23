import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/mainHeader";
import MainFooter from "./components/mainFooter";
import { ModalProvider } from "./components/providers/model-provider";
import { getSession } from "./lib/action";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MealPrepEase",
  description: "The site to get your food containers and meal deals",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSession = await getSession();



  return (
    <html lang="en">
      <body className={inter.className}>
       <MainHeader userSession={JSON.stringify(userSession)} />
        {children}
        <ModalProvider />
        <MainFooter />
        <ToastContainer />
      </body>
    </html>
  );
}
