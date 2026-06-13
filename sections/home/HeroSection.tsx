"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, lineReveal, staggerContainer, reducedFadeUp } from "@/lib/animations";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const f = shouldReduceMotion ? reducedFadeUp : fadeUp;

  // Stagger container — runs on page load (no whileInView needed for hero)
  const container = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer;

  return (
    <section className="min-h-[92vh] flex flex-col justify-center px-6 lg:px-16 py-24 relative overflow-hidden bg-[#FAFAF8]">
      <motion.div
        className="max-w-screen-2xl mx-auto w-full z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          variants={f}
        >
          <motion.div
            className="w-8 h-[1px] bg-[#2F5D50]"
            variants={shouldReduceMotion ? reducedFadeUp : lineReveal}
          />
          <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
            Ranchi · Jharkhand
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8 text-[#111111]"
            variants={f}
          >
            Materials for{" "}
            <em className="not-italic text-[#2F5D50]">better living.</em>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-6"
            variants={f}
          >
            Ranchi&apos;s trusted destination for Nerolac paints, CERA hardware,
            and quality building materials — for residential, renovation, and
            commercial spaces.
          </motion.p>

          <motion.p
            className="text-sm text-[#2F5D50] tracking-[0.2em] uppercase font-medium mb-10"
            variants={f}
          >
            Hi Living &ndash; Low Budget
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-8"
            variants={f}
          >
            <motion.a
              href="/#paints"
              className="group flex items-center gap-4 bg-[#111111] text-[#FAFAF8] px-8 py-4 hover:bg-[#2F5D50] transition-all duration-400"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase">
                Explore Paints
              </span>
              <span className="transform transition-transform group-hover:translate-x-1.5 text-sm">
                →
              </span>
            </motion.a>

            <motion.a
              href="/#hardware"
              className="group flex items-center gap-3 text-[#111111] hover:text-[#2F5D50] transition-colors duration-300"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase border-b border-[#111111] group-hover:border-[#2F5D50] pb-0.5 transition-colors duration-300">
                Discover Hardware
              </span>
              <span className="transform transition-transform group-hover:translate-x-1 text-sm">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Structural accent lines */}
      <div className="absolute left-6 lg:left-16 bottom-24 flex flex-col gap-1 hidden lg:flex">
        <div className="w-[1px] h-12 bg-[#D1D5DB]" />
        <div className="w-[1px] h-3 bg-[#2F5D50]" />
      </div>

      {/* Scroll indicator — kept as CSS for performant infinite loop */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-[#6B7280] text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[#D1D5DB] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#2F5D50]"
            style={{
              height: "40%",
              animation: "scrollDrop 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 1; }
          80%  { transform: translateY(280%); opacity: 1; }
          81%  { opacity: 0; }
          100% { transform: translateY(280%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
