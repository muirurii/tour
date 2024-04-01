import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./header/page";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata: Metadata = {
  title: "My App",
  description: "Generated by My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} overflow-x-hidden text-black bg-slate-100 text-lg`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
