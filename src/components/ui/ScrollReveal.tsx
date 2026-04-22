"use client";

import * as React from "react";
import { m as motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
}: ScrollRevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40, x: 0 };
      case "down":
        return { y: -40, x: 0 };
      case "left":
        return { x: 40, y: 0 };
      case "right":
        return { x: -40, y: 0 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const initial = { opacity: 0, ...getDirectionOffset() };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
