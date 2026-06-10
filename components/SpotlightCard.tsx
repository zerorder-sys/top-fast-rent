"use client";

import { useRef, useState, type ReactNode, type MouseEvent, type CSSProperties } from "react";
import { motion } from "framer-motion";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl ${className}`}
      style={
        {
          "--mouse-x": `${position.x}%`,
          "--mouse-y": `${position.y}%`,
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${position.x}% ${position.y}%, rgba(198,158,99,0.2), transparent 45%)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: isHovered
            ? "inset 0 0 0 1px rgba(198,158,99,0.35), 0 0 40px -10px rgba(198,158,99,0.25)"
            : "none",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
