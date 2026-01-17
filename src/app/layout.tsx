import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css";

export const metadata: Metadata = {
  title: "New Year Countdown - Cyberpunk Timer",
  description: "Professional cyberpunk-style countdown to 2027 with neon animations & Framer Motion",
  openGraph: {
    title: "New Year Countdown - Cyberpunk Timer",
    description: "Tech countdown timer with smooth animations & auto-year switching",
    images: "/og-image.png",     // ✅ Your image!
    type: "website",
    siteName: "New Year Countdown",
    url: "https://your-app.vercel.app",  // Replace with Vercel URL
  },
  twitter: {
    card: "summary_large_image",
    title: "New Year Countdown - Cyberpunk Timer", 
    description: "Tech countdown timer with smooth animations & auto-year switching",
    images: ["/og-image.png"],   // ✅ Twitter preview
    creator: "@Babamosie333",    // Your handle!
  },
  icons: {
    icon: "/favicon.ico",
  },
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
