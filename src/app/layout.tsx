import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';  // ✅ npm install geist
import "./globals.css";

export const metadata: Metadata = {
  title: "New Year Countdown",
  description: "Tech countdown timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
