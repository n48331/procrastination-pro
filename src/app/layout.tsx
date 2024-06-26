import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar, Topbar } from "./components/common/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Procastination Pro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      <Topbar />
         <div className="flex overflow-hidden bg-white pt-16">
            <Sidebar />
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 text-black">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 ">
        {children}
        </div>
            </div>
         </div>
        
        </div>
        </body>
    </html>
  );
}
