import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import PageLoader from "./components/PageLoader";
import Header from "./components/Header";
import { AuthProvider } from "@/contexts/AuthContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppinsBold = Poppins({
  weight: "700",
  variable: "--font-poppins-bold",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://reflowtech.in"),
  title:
    "Reflow Tech - AI-Powered Manufacturing Performance Solutions for Pharma Industries",
  description:
    "Achieve Zero Downtime, Zero Injuries, and Zero Financial Losses with Reflow's Cutting-Edge AI Control Systems for Pharmaceutical Manufacturing. Advanced AI devices for increasing manufacturing performance.",
  keywords: [
    "AI manufacturing solutions",
    "pharmaceutical industry AI",
    "manufacturing performance optimization",
    "zero downtime manufacturing",
    "AI control systems",
    "pharma industry automation",
    "manufacturing AI devices",
    "industrial AI solutions",
    "pharmaceutical manufacturing AI",
    "smart manufacturing",
  ],
  authors: [{ name: "Reflow Tech" }],
  creator: "Reflow Tech",
  publisher: "Reflow Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reflowtech.in",
    title: "Reflow Tech - AI-Powered Manufacturing Performance Solutions",
    description:
      "Achieve Zero Downtime, Zero Injuries, and Zero Financial Losses with Reflow's Cutting-Edge AI Control Systems for Pharmaceutical Manufacturing.",
    siteName: "Reflow Tech",
    images: [
      {
        url: "/translogo.png",
        width: 1200,
        height: 630,
        alt: "Reflow Tech - AI Manufacturing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflow Tech - AI-Powered Manufacturing Performance Solutions",
    description:
      "Achieve Zero Downtime, Zero Injuries, and Zero Financial Losses with Reflow's Cutting-Edge AI Control Systems for Pharmaceutical Manufacturing.",
    images: ["/translogo.png"],
  },
  alternates: {
    canonical: "https://reflowtech.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${poppinsBold.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "var(--color-background)" }}
        suppressHydrationWarning
      >
        <AuthProvider>
          <PageLoader />
          <Header />
          <main
            className="pt-20"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
