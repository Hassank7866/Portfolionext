import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import React from "react";
import Navbar from "@/components/main/NavBar";
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
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>
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
