import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { euclidCircular, gordita } from "./lib/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Launch Labs",
  description: "Launch Labs — AI-powered systems, automations, websites and ads to grow your business.",
  icons: {
    icon: "/Copy of L.zip - 2 1.png",
    shortcut: "/Copy of L.zip - 2 1.png",
    apple: "/Copy of L.zip - 2 1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${euclidCircular.variable} ${gordita.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
