"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/animations";
import { lineReveal } from "@/lib/animations";

const credentials = [
  {
    num: "01",
    title: "Authorized Nerolac Dealer",
    body: "We are an official Kansai Nerolac dealer — one of the few in Ranchi authorized to supply, specify, and tint the complete architectural range.",
  },
  {
    num: "02",
    title: "Authorized CERA Dealer",
    body: "CERA products stocked at HI LIFE are genuine, warranted, and supplied through the official CERA distribution network.",
  },
  {
    num: "03",
    title: "Expert Product Guidance",
    body: "Choosing a finish is not a transaction. Our team provides detailed guidance on application, compatibility, durability, and color — so you specify with confidence.",
  },
  {
    num: "04",
    title: "Curated Product Selection",
    body: "We do not stock everything. We stock what performs. Every product in our range has been evaluated for quality, suitability to local conditions, and design relevance.",
  },
  {
    num: "05",
    title: "Trusted Presence in Ranchi",
    body: "Built over two decades of consistent service to architects, contractors, and homeowners across Jharkhand. Our reputation is our product.",
  },
];

export function WhyHiLifeSection() {
  return (
    <section className="bg-white border-t border-[#D1D5DB]">
      {/* Section header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <AnimatedSection variant="sectionReveal" className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-8 h-[1px] bg-[#2F5D50]"
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              />
              <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
                Why HI LIFE
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-[1.05] tracking-tight">
              The standard we hold{" "}
              <em className="not-italic text-[#4B5563]">ourselves to.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[#4B5563] text-base leading-relaxed">
              Five commitments that define how we operate — and why professionals
              and homeowners return to us project after project.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Numbered rows */}
      <div className="border-t border-[#D1D5DB]">
        {credentials.map((c, i) => (
          <AnimatedSection
            key={c.num}
            variant="fadeUp"
            className={`max-w-screen-2xl mx-auto px-6 lg:px-16 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start ${
              i < credentials.length - 1 ? "border-b border-[#D1D5DB]" : ""
            } group`}
          >
            {/* Number */}
            <div className="lg:col-span-1 flex items-center gap-4 lg:block">
              <span className="font-serif text-[#D1D5DB] text-2xl group-hover:text-[#2F5D50] transition-colors duration-400">
                {c.num}
              </span>
              <div className="h-[1px] w-6 bg-[#D1D5DB] lg:hidden" />
            </div>

            {/* Title */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl lg:text-3xl text-[#111111] leading-snug">
                {c.title}
              </h3>
            </div>

            {/* Body */}
            <div className="lg:col-span-6 lg:col-start-6">
              <p className="text-[#4B5563] text-base leading-relaxed">{c.body}</p>
            </div>

            {/* Accent rule */}
            <div className="lg:col-span-1 hidden lg:flex justify-end items-start pt-1.5">
              <div className="w-[1px] h-6 bg-[#D1D5DB] group-hover:bg-[#2F5D50] transition-colors duration-400" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
