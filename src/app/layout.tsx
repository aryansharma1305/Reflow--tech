import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Reflow Tech - AI-Powered Manufacturing Solutions",
  description: "ReFlow Technologies - Industrial IoT Solutions",
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
        className="antialiased"
        style={{ backgroundColor: "var(--color-background)" }}
        suppressHydrationWarning
      >
        <AuthProvider>
          <Header />
          <main
            className="pt-20"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            {children}
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 5000 }}
            />
          </main>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
