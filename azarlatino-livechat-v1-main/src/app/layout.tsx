import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { FacebookPixel } from "./component/FacebookPixel";
import GoogleTagScript from "./component/GoogleTagScript/GoogleTagScript";
import ChatwootScript from "./component/ChatwootScript/ChatwootScript";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monsterrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Azar Latino",
  description: "Azar Latino es una plataforma de juegos de azar en línea",
  icons: "/AzarLatino_icono.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico.png" sizes="any" />
      </head>
      <body className={`${poppins.className} ${monsterrat.className}`}>
        {children}
        <ChatwootScript />
        <FacebookPixel />
        <Analytics />
      </body>
    </html>
  );
}
