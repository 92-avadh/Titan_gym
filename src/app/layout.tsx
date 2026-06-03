import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titan Fitness Club | Premium Luxury Gym & Athletic Training",
  description: "Experience the ultimate luxury training sanctuary. Titan Fitness Club features elite coaching, custom periodized workouts, a full recovery suite, and 24/7 access.",
  openGraph: {
    title: "Titan Fitness Club | Premium Gym",
    description: "Experience the ultimate luxury training sanctuary. Certified coaching, premium recovery suite, 24/7 access.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-titan-black text-white selection:bg-titan-red selection:text-white font-sans">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
