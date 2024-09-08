import { ReactNode } from "react";
import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  // title: "Home \\ PAIA", TODO: Make this custom for each page
  description: "Working towards a safe future in AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} subpixel-antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
