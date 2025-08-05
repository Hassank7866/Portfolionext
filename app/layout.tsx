import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import React from "react";
import Navbar from "@/components/main/NavBar";
import { Dancing_Script } from 'next/font/google';
import Footer from "@/components/main/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassaan Khan",
  description: "Hassaan's Personal Portfolio",
   icons: {
    icon: '/final.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="icon/png" href="/final.png" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className}  overflow-y-scroll overflow-x-hidden`}
      >
        <div className="bg-[#030014]">

          <StarsCanvas />
          <Navbar />
          
        {children}
        <Footer />
        </div>
      </body>
        
        
    </html>
  );
}
