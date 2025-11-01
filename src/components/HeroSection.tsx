"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  videoSrc?: string;
  videoSrcWebM?: string;
  title: {
    line1: string;
    line2: {
      highlight: string;
      normal: string;
    };
  };
  subtitle: string;
}

export default function HeroSection({
  videoSrc = "/video/hero.mp4",
  videoSrcWebM,
  title,
  subtitle,
}: HeroSectionProps) {
  // モバイル判定（640px未満）
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[60vh] sm:aspect-video overflow-hidden bg-gray-900">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {/* 背景ビデオ */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            {videoSrcWebM && <source src={videoSrcWebM} type="video/webm" />}
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Content: 見出しを縦中央、サブテキストをその直下に配置（重なり防止のためグリッド使用） */}
      <div className="absolute inset-0 z-10 grid grid-rows-[1fr_auto_1fr] justify-items-center">
        {/* モバイル: シンプルなフェードアップ、デスクトップ: 元のアニメーション */}
        <motion.div
          className="row-start-2 text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-0"
          initial={{ opacity: 0, y: isMobile ? 30 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: isMobile ? 0.6 : 0.8, 
            delay: isMobile ? 0.1 : 0.2
          }}
        >
          <motion.h1
            className="text-3xl sm:text-[48px] md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight break-words sm:break-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: isMobile ? 0.5 : 1,
              delay: isMobile ? 0.2 : 0.4
            }}
          >
            <motion.span
              className="block sm:inline sm:whitespace-nowrap"
              initial={{ opacity: 0, y: isMobile ? 20 : -20, x: isMobile ? 0 : -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: isMobile ? 0.5 : 0.6, 
                delay: isMobile ? 0.3 : 0.6
              }}
            >
              {title.line1}
            </motion.span>
            <motion.span
              className="block sm:inline sm:whitespace-nowrap"
              initial={{ opacity: 0, y: isMobile ? 20 : -20, x: isMobile ? 0 : -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: isMobile ? 0.5 : 0.6, 
                delay: isMobile ? 0.5 : 0.8
              }}
            >
              <span className="text-orange-500">{title.line2.highlight}</span>
              <span>{title.line2.normal}</span>
            </motion.span>
          </motion.h1>
        </motion.div>
        <motion.div
          className="row-start-3 mt-1 sm:mt-4 pb-4 sm:pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: isMobile ? 0.5 : 0.8, 
            delay: isMobile ? 0.7 : 1.2
          }}
        >
          <div className="inline-block">
            <p className="text-base sm:text-[22px] md:text-2xl text-gray-100 font-light tracking-wider border-b-2 border-orange-500 pb-1">
              {subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

