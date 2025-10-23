import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ModalAnimationWrapper } from "@/components/ModalAnimationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starseeds Digital | AIデータセンターソリューション",
  description: "スターシーズデジタルは、AIデータセンター向けエンドツーエンドソリューションを提供します。GPUサーバー、ストレージ、液冷CDU、光モジュール、スイッチなど、E2E AIデータセンターソリューションで効率的かつ迅速な展開をサポートします。",
  keywords: ["AIデータセンター", "GPUサーバー", "液冷CDU", "光トランシーバー", "800G", "NVIDIA", "データセンターソリューション"],
  authors: [{ name: "Starseeds Digital Co., Ltd." }],
  openGraph: {
    title: "Starseeds Digital | AIデータセンターソリューション",
    description: "AIデータセンター向けエンドツーエンドソリューションを提供。GPUサーバー、液冷CDU、光モジュールなどのE2Eソリューション。",
    siteName: "Starseeds Digital",
    locale: "ja_JP",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
