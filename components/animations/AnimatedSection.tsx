"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  fadeUp,
  sectionReveal,
  fadeIn,
  reducedFadeUp,
  defaultViewport,
} from "@/lib/animations";

type VariantKey = "fadeUp" | "sectionReveal" | "fadeIn";

const VARIANTS: Record<VariantKey, Variants> = {
  fadeUp,
  sectionReveal,
  fadeIn,
};

interface AnimatedSectionProps {
  /** Animation variant to apply. Defaults to "fadeUp". */
  variant?: VariantKey;
  /** Optional delay in seconds added to the transition */
  delay?: number;
  /** HTML element to render as. Defaults to "div". */
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
  className?: string;
  children: React.ReactNode;
  id?: string;
}

/**
 * AnimatedSection
 *
 * A lightweight wrapper that applies a viewport-triggered entrance animation.
 * Respects `prefers-reduced-motion` — falls back to a simple fade with no
 * movement when the user has requested reduced motion.
 *
 * @example
 * <AnimatedSection variant="sectionReveal" delay={0.1}>
 *   <h2>Section heading</h2>
 * </AnimatedSection>
 */
export function AnimatedSection({
  variant = "fadeUp",
  delay = 0,
  as = "div",
  className,
  children,
  id,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const selectedVariant = shouldReduceMotion ? reducedFadeUp : VARIANTS[variant];

  // Clone the transition to inject the delay
  const variantWithDelay: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...(selectedVariant.visible as object),
      transition: {
        ...((selectedVariant.visible as { transition?: object })?.transition ?? {}),
        delay,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variantWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </MotionTag>
  );
}
