import type { Metadata } from "next";
import { Hanken_Grotesk,Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
})
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "B.R Collins",
  description: "Brandon Collins Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
