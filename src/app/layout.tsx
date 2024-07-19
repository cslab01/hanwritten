import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/css/globals.css";
import { NAV_BTN } from "../../public/static/static_data";
import NavButton from "./(components)/NavButton";

const navBtns = NAV_BTN.map((btn) => <NavButton key={btn.code} prop={btn} />);
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hanwritten",
  description: "Hi, Nice to meet you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-20 py-10 flex-col justify-content-center">
        <header className="flex justify-center">{navBtns}</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
