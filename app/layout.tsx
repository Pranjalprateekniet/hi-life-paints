import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HI LIFE | Authorized Nerolac Paints & CERA Hardware Dealer in Ranchi",
  description: "HI LIFE is Ranchi's trusted destination for Nerolac paints, CERA hardware, waterproofing solutions, wood finishes, and premium building materials. Hi Living – Low Budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased selection:bg-foreground selection:text-background`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground pt-20">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
