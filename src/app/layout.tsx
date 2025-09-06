import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XX-online | ITインフラソリューション",
  description: "XX-onlineは、企業のITインフラを革新し、ビジネス成長を支援するソリューションを提供します。",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        {modal}
        <Analytics />
      </body>
    </html>
  );
}
