import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ModalAnimationWrapper } from "@/components/ModalAnimationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XX-online",
  description: "ITインフラを革新する",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <ModalAnimationWrapper>
          {modal}
        </ModalAnimationWrapper>
        <Analytics />
      </body>
    </html>
  );
}
