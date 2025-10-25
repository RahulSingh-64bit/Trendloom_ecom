import type { Metadata } from "next";
import { Lobster_Two, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

// Heading font
const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"], // Lobster Two has 400 & 700
  variable: "--font-lobster-two",
});

// Body font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights you need
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TRENDLOOM - Best Clothes",
  description: "Trendloom is the best place to buy the best clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Rajdhani globally */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${lobsterTwo.variable} ${roboto.variable} antialiased`}>
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ToastContainer position="bottom-right"/>
      </body>
    </html>
  );
}
