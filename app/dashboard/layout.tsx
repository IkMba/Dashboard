import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../ui/dashboard/Navbar";
import Sidebar from "../ui/dashboard/Sidebar";
import Footer from "../ui/dashboard/Footer";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex text-text-color gap-5">
      <div className=" bg-bg-light fixed">
        <Sidebar />
      </div>
      <div className=" flex-1 ml-64 pl-4 pr-2 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}