/**
 * lib/animations.ts
 *
 * Central animation definitions for the HI LIFE website.
 * All Framer Motion variants live here — components import from this file
 * rather than defining variants inline.
 *
 * Performance notes:
 * - All scroll-triggered animations use `once: true` via viewport config in wrappers
 * - No layout-shifting properties (no width/height animations on block elements)
 * - reducedMotion variants resolve instantly for accessibility
 */

import type { Variants } from "framer-motion";

// ─── Shared timing tokens ──────────────────────────────────────────────────

const EASE_OUT = [0.16, 1, 0.3, 1] as const; // Expo ease-out — feels premium
const EASE_INOUT = [0.4, 0, 0.2, 1] as const; // Material standard
const DURATION_FAST = 0.35;
const DURATION_BASE = 0.55;
const DURATION_SLOW = 0.75;

// ─── Hero / page-load animations ──────────────────────────────────────────

/**
 * fadeUp — opacity 0→1, y 20→0
 * Used for: hero elements, section headings, general content reveals
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_BASE,
      ease: EASE_OUT,
    },
  },
};

/**
 * fadeIn — opacity 0→1 only (no movement)
 * Used for: overlays, subtle content that should not shift position
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION_BASE,
      ease: EASE_INOUT,
    },
  },
};

// ─── Section-level animations ──────────────────────────────────────────────

/**
 * sectionReveal — slightly more deliberate than fadeUp, for section headers
 * Fade + 16px upward motion with a softer ease
 */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_OUT,
    },
  },
};

/**
 * staggerContainer — parent variant that staggers children
 * Apply to the parent; children should use fadeUp or any child variant
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

/**
 * staggerContainerFast — tighter stagger for dense lists
 */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
};

// ─── Image animations ─────────────────────────────────────────────────────

/**
 * imageReveal — opacity 0→1 + subtle scale 1.05→1
 * Used for: editorial image panels, showroom image
 */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_OUT,
    },
  },
};

// ─── Navbar ───────────────────────────────────────────────────────────────

/**
 * navbarReveal — initial page-load entrance for the navbar
 * Fades in from slightly above
 */
export const navbarReveal: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_OUT,
    },
  },
};

// ─── Interactive elements ─────────────────────────────────────────────────

/**
 * buttonHover — smooth lift for CTA buttons
 * Use as whileHover on motion.a / motion.button
 */
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: EASE_INOUT,
  },
};

/**
 * buttonTap — slight press feedback
 */
export const buttonTap = {
  scale: 0.98,
};

/**
 * cardHover — very subtle lift for card-like elements
 * translateY(-2px) — per spec
 */
export const cardHover = {
  y: -2,
  transition: {
    duration: 0.25,
    ease: EASE_INOUT,
  },
};

// ─── Accent lines ─────────────────────────────────────────────────────────

/**
 * lineReveal — width animation from 0 → full
 * Used for: decorative horizontal accent lines (the w-8 h-[1px] dividers)
 * Apply on a div with a fixed width — this animates scaleX
 */
export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: DURATION_BASE,
      ease: EASE_OUT,
    },
  },
};

// ─── Mobile menu ──────────────────────────────────────────────────────────

/**
 * mobileMenuOverlay — for the full-screen mobile nav overlay
 */
export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_FAST, ease: EASE_INOUT },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION_FAST, ease: EASE_INOUT },
  },
};

/**
 * mobileNavItem — staggered entrance for mobile nav links
 */
export const mobileNavItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2, ease: EASE_INOUT },
  },
};

// ─── Reduced-motion safe variants ─────────────────────────────────────────

/**
 * reducedFadeUp — instant reveal, no movement
 * Used when prefers-reduced-motion is active
 */
export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15, ease: "linear" },
  },
};

/**
 * reducedInstant — zero duration, used for non-motion-sensitive elements
 */
export const reducedInstant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

// ─── Viewport config (used in wrapper components) ─────────────────────────

/** Standard viewport config for scroll-triggered animations */
export const defaultViewport = {
  once: true,
  margin: "-80px",
} as const;

/** Tighter margin for elements near the bottom of their section */
export const tightViewport = {
  once: true,
  margin: "-40px",
} as const;
