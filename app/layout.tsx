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
  metadataBase: new URL("https://www.hi-life.shop"),

  title: "HI LIFE | Paint Shop, Authorized Nerolac Paints & CERA Hardware Dealer in Ranchi",

  description:
    "HI LIFE is Ranchi's trusted destination for Nerolac paints, CERA hardware, waterproofing solutions, wood finishes, and premium building materials. Hi Living – Low Budget.",

  applicationName: "HI LIFE",
  creator: "HI LIFE",
  publisher: "HI LIFE",

  keywords: [
    "HI LIFE Ranchi",
    "Hi Life Ranchi",
    "Paint Shop Ranchi",
    "Paint Shops in Ranchi",
    "Best Paint Shop in Ranchi",
    "Paint Dealer Ranchi",
    "Paint Dealers in Ranchi",
    "Nerolac Paints Ranchi",
    "Nerolac Paint Dealer Ranchi",
    "Authorized Nerolac Dealer Ranchi",
    "Nerolac Paint Shop Ranchi",
    "CERA Dealer Ranchi",
    "CERA Hardware Ranchi",
    "CERA Sanitaryware Ranchi",
    "Building Materials Ranchi",
    "Building Material Supplier Ranchi",
    "Hardware Store Ranchi",
    "Hardware Shop Ranchi",
    "Waterproofing Solutions Ranchi",
    "Waterproofing Products Ranchi",
    "Wood Finishes Ranchi",
    "Premium Paints Ranchi",
    "Home Improvement Store Ranchi",
    "Construction Materials Ranchi",
    "Deendayal Upadhyay Chowk Ranchi",
    "Harmu Road Ranchi",
    "Hi Living Low Budget",
  ],

  alternates: {
    canonical: "https://www.hi-life.shop",
  },

  openGraph: {
    title:
      "HI LIFE | Authorized Nerolac Paints & CERA Hardware Dealer in Ranchi",
    description:
      "Ranchi's trusted destination for Nerolac paints, CERA hardware, waterproofing solutions, wood finishes, and premium building materials.",
    url: "https://www.hi-life.shop",
    siteName: "HI LIFE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/showroomfronthd.png",
        width: 1200,
        height: 630,
        alt: "HI LIFE Showroom Ranchi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "HI LIFE | Authorized Nerolac Paints & CERA Hardware Dealer in Ranchi",
    description:
      "Ranchi's trusted destination for paints, hardware, waterproofing solutions, and building materials.",
    images: ["/showroomfronthd.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Business",
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