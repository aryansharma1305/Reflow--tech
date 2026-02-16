import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
    <html lang="en">
      <body className="antialiased" style={{ backgroundColor: "#ffffff" }}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
