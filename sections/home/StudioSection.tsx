"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/animations";
import { lineReveal } from "@/lib/animations";
import { motion } from "framer-motion";

const statements = [
  {
    num: "01",
    heading: "Quality that doesn't demand a premium budget.",
    body: "HI LIFE was built on a single belief: that high-quality living should be accessible. We bring together Nerolac's proven paint technology and CERA's precision hardware so every project — large or small — gets the finish it deserves.",
  },
  {
    num: "02",
    heading: "A complete finishing-materials partner.",
    body: "From the first coat of primer to the final fitting, we supply everything in between. Interior paints, exterior protection, waterproofing, wood finishes, bathroom fittings, sanitaryware, and hardware accessories — all under one roof.",
  },
  {
    num: "03",
    heading: "Ranchi's trusted destination for builders and homeowners.",
    body: "We work with architects, contractors, interior designers, and discerning homeowners. Whether it's a single room renovation or a full commercial build, we bring the same expertise and the same commitment to quality at every budget.",
  },
];

export function StudioSection() {
  return (
    <section id="studio" className="bg-[#FAFAF8] border-t border-[#D1D5DB]">
      {/* Opening Editorial Block */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: sticky label */}
          <AnimatedSection
            className="lg:col-span-4 lg:sticky lg:top-28"
            variant="sectionReveal"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="w-8 h-[1px] bg-[#2F5D50]"
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              />
              <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
                The Studio
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.1] tracking-tight mb-6">
              Hi Living &ndash; Low Budget.
            </h2>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-8">
              Because quality homes should not require excessive budgets.
            </p>
            <div className="w-12 h-[1px] bg-[#D1D5DB]" />
          </AnimatedSection>

          {/* Right: body copy */}
          <AnimatedStagger
            className="lg:col-span-7 lg:col-start-6 space-y-8 text-[#4B5563] text-lg leading-relaxed"
          >
            <StaggerItem as="p">
              HI LIFE was founded on a simple conviction: that building
              materials should never be an afterthought. The colour on your walls,
              the finish on your doors, the fitting your hand reaches for a hundred
              times a day — these are not afterthoughts. They are the experience of
              a space. And no one should have to overpay to get them right.
            </StaggerItem>
            <StaggerItem as="p">
              As an authorized dealer for Kansai Nerolac, we bring advanced
              paint technology to every project in Ranchi — engineered to
              withstand India's demanding climate without sacrificing the color
              depth and finish quality that designers specify. As a CERA hardware
              supplier, we offer precision-crafted fittings and sanitaryware for
              every scale of project.
            </StaggerItem>
            <StaggerItem as="p">
              We serve architects, interior designers, contractors, and homeowners
              — across residential, renovation, and commercial projects. What they
              all share is a standard. We exist to meet it, at a price that makes
              sense.
            </StaggerItem>
          </AnimatedStagger>
        </div>
      </div>

      {/* Three Philosophy Statements */}
      <div className="border-t border-[#D1D5DB]">
        {statements.map((s, i) => (
          <AnimatedSection
            key={s.num}
            delay={0}
            variant="fadeUp"
            className={`max-w-screen-2xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
              i < statements.length - 1 ? "border-b border-[#D1D5DB]" : ""
            }`}
          >
            {/* Number */}
            <div className="lg:col-span-1">
              <span className="font-serif text-[#D1D5DB] text-3xl">{s.num}</span>
            </div>
            {/* Heading */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl lg:text-3xl text-[#111111] leading-snug">
                {s.heading}
              </h3>
            </div>
            {/* Body */}
            <div className="lg:col-span-6 lg:col-start-6">
              <p className="text-[#4B5563] text-base leading-relaxed">{s.body}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
