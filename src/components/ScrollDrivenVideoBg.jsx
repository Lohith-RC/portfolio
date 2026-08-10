import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ScrollDrivenVideoBg() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Scroll-triggered dynamic video transforms
  const videoScale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.05, 1.14, 1.20, 1.12, 1.05]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const videoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.0, 0]);
  const videoFilter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      'brightness(108%) contrast(105%) saturate(105%)',
      'brightness(115%) contrast(110%) saturate(125%)',
      'brightness(105%) contrast(105%) saturate(105%)'
    ]
  );

  // Dynamic Liquid Overlay Intensity — raised floor to 0.65 for high WCAG AA contrast
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.65, 0.78, 0.85, 0.92]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.video
        style={shouldReduceMotion ? {} : {
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

      {/* High-Contrast Evolving Liquid Overlay Backdrop */}
      <motion.div 
        style={shouldReduceMotion ? { opacity: 0.8 } : { opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#080C14]/65 via-[#080C14]/80 to-[#080C14]/95 pointer-events-none"
      />
    </div>
  );
}
