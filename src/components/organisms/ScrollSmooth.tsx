"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SmoothScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll({
    container: scrollRef,
  });

  const y = useTransform(scrollY, [0, 1000], [0, -200], { clamp: false });

  return (
    <div ref={scrollRef} className="overflow-y-scroll h-screen">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
