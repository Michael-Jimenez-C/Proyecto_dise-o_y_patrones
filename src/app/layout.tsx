import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {GlobalProvider} from '@/context/globalContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UraniumEx EntropyManager",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-0 bg-green-300">
        <GlobalProvider>
          <div className="z-10 w-full m-0">
            <div className="md:flex md:justify-between bg-white max-h-max">
              <img
                src="/logo.svg"
                className="h-16 relative md:mx-10 mx-auto my-auto select-none"
              ></img>
              <Navbar />
            </div>
          </div>
          {children}
          </GlobalProvider>
        </main>
      </body>
    </html>
  );
}
