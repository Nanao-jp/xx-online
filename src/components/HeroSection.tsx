"use client";

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
  // アニメーション設定
  const fadeUpTransition = { duration: 0.5 };

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[60vh] sm:aspect-video overflow-hidden bg-gray-900">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-gray-900">
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

      {/* Content */}
      <div className="absolute inset-0 z-10 grid grid-rows-[1fr_auto_1fr] justify-items-center">
        {/* Title */}
        <motion.div
          className="row-start-2 text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fadeUpTransition, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-[48px] md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight break-words sm:break-normal">
            <span className="block sm:inline sm:whitespace-nowrap">
              {title.line1}
            </span>
            <span className="block sm:inline sm:whitespace-nowrap">
              <span className="text-orange-500">{title.line2.highlight}</span>
              <span>{title.line2.normal}</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="row-start-3 mt-1 sm:mt-4 pb-4 sm:pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fadeUpTransition, delay: 0.7 }}
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
