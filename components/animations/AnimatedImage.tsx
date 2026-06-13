"use client";

import { motion, useReducedMotion } from "framer-motion";
import { imageReveal, reducedFadeUp, defaultViewport } from "@/lib/animations";

interface AnimatedImageProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  /** Optional delay in seconds */
  delay?: number;
}

/**
 * AnimatedImage
 *
 * Wraps an image container with a viewport-triggered reveal:
 * opacity 0→1 + scale 1.05→1.
 *
 * Respects `prefers-reduced-motion` — falls back to a plain fade.
 *
 * @example
 * <AnimatedImage className="relative overflow-hidden">
 *   <Image src="..." fill />
 * </AnimatedImage>
 */
export function AnimatedImage({
  className,
  style,
  children,
  delay = 0,
}: AnimatedImageProps) {
  const shouldReduceMotion = useReducedMotion();

  const variant = shouldReduceMotion ? reducedFadeUp : imageReveal;

  const variantWithDelay = {
    hidden: variant.hidden,
    visible: {
      ...(variant.visible as object),
      transition: {
        ...((variant.visible as { transition?: object })?.transition ?? {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={variantWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </motion.div>
  );
}
