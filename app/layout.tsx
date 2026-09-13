import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLAM Unisex Salon & Spa | Vijayanagar, Bengaluru",
  description:
    "GLAM Unisex Salon & Spa in Vijayanagar, Bengaluru. Explore premium hair, beauty, grooming, spa and PMU services. Book your appointment today.",
  keywords: [
    "GLAM Unisex Salon",
    "GLAM Salon Vijayanagar",
    "Unisex Salon Vijayanagar",
    "Salon in Vijayanagar",
    "Salon in Bengaluru",
    "Spa in Vijayanagar",
    "Beauty Salon Bengaluru",
    "Hair Salon Vijayanagar",
    "PMU Vijayanagar",
  ],
  authors: [{ name: "GLAM Unisex Salon & Spa" }],
  openGraph: {
    title: "GLAM Unisex Salon & Spa | Vijayanagar, Bengaluru",
    description:
      "Premium hair, beauty, grooming, spa and PMU services in Vijayanagar, Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}