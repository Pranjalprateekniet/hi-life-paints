"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainer,
  staggerContainerFast,
  fadeUp,
  reducedFadeUp,
  defaultViewport,
} from "@/lib/animations";

interface AnimatedStaggerProps {
  /** Use "fast" for dense lists (0.07s stagger), "normal" for standard (0.1s) */
  speed?: "normal" | "fast";
  className?: string;
  children: React.ReactNode;
}

/**
 * AnimatedStagger
 *
 * A parent container that staggers the entrance of its direct children.
 * Children must be wrapped in `<motion.div>` / `<motion.li>` etc. to participate
 * in the stagger, OR use the `StaggerItem` named export for convenience.
 *
 * Respects `prefers-reduced-motion`.
 *
 * @example
 * <AnimatedStagger>
 *   <StaggerItem>First item</StaggerItem>
 *   <StaggerItem>Second item</StaggerItem>
 * </AnimatedStagger>
 */
export function AnimatedStagger({
  speed = "normal",
  className,
  children,
}: AnimatedStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariant = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : speed === "fast"
    ? staggerContainerFast
    : staggerContainer;

  return (
    <motion.div
      className={className}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ──────────────────────────────────────────────────────────

interface StaggerItemProps {
  className?: string;
  children: React.ReactNode;
  /** Render as a different HTML element */
  as?: "div" | "li" | "article" | "section" | "p";
}

/**
 * StaggerItem
 *
 * A child item for use inside `AnimatedStagger`. Automatically picks up the
 * `fadeUp` variant from the parent's stagger cascade.
 *
 * @example
 * <AnimatedStagger>
 *   {items.map(item => (
 *     <StaggerItem key={item.id}>{item.content}</StaggerItem>
 *   ))}
 * </AnimatedStagger>
 */
export function StaggerItem({
  className,
  children,
  as = "div",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const variant = shouldReduceMotion ? reducedFadeUp : fadeUp;

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag className={className} variants={variant}>
      {children}
    </MotionTag>
  );
}
