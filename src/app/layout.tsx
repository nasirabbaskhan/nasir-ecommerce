import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Views/NavBar";
import Wraper from "@/components/Views/Wraper";
import Footer from "@/components/Views/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BestClothes.com Online Shopping",
  description:
    "Discover the convenience of online shopping with BestClothes.com, where quality meets affordability. Whether you're searching for the perfect ensemble for a special event or upgrading your everyday wardrobe, our user-friendly platform ensures a seamless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wraper>
          <NavBar />
          {children}
        </Wraper>
        <Footer />
      </body>
    </html>
  );
}
