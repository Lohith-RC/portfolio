import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollDrivenVideoBg() {
  const { scrollYProgress } = useScroll();

  // Scroll-triggered dynamic video transforms (smooth parallax scale, shift & color shifts)
  const videoScale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.05, 1.16, 1.25, 1.15, 1.05]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const videoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.2, 0]);
  const videoFilter = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'brightness(112%) contrast(105%) saturate(105%) hue-rotate(0deg)',
      'brightness(120%) contrast(110%) saturate(135%) hue-rotate(12deg)',
      'brightness(115%) contrast(115%) saturate(150%) hue-rotate(-12deg)',
      'brightness(122%) contrast(108%) saturate(125%) hue-rotate(8deg)',
      'brightness(110%) contrast(105%) saturate(110%) hue-rotate(0deg)'
    ]
  );

  // Dynamic Liquid Overlay Intensity
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.45, 0.65, 0.75, 0.85]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.video
        style={{
          scale: videoScale,
          y: videoY,
          rotate: videoRotate,
          filter: videoFilter
        }}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-all duration-500 ease-out"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
      />

      {/* Seamless Evolving Liquid Overlay Backdrop */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#080C14]/30 via-[#080C14]/65 to-[#080C14]/92 pointer-events-none"
      />
    </div>
  );
}
