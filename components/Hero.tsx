"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionTemplate,
} from "framer-motion";
import { BRAND } from "@/lib/data";
import { ASSETS } from "@/lib/assets";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", prefersReducedMotion ? "0%" : "18%"]
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 1.08]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", prefersReducedMotion ? "0%" : "12%"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, prefersReducedMotion ? 1 : 0.35]
  );

  const spotlightX = useSpring(spotlight.x, { stiffness: 120, damping: 22 });
  const spotlightY = useSpring(spotlight.y, { stiffness: 120, damping: 22 });

  const goldSpotlight = useMotionTemplate`radial-gradient(680px circle at ${spotlightX}% ${spotlightY}%, rgba(198,158,99,0.34), transparent 44%)`;
  const amberSpotlight = useMotionTemplate`radial-gradient(520px circle at ${spotlightX}% ${spotlightY}%, rgba(177,149,64,0.24), transparent 48%)`;

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={ASSETS.brand.heroSlider}
          alt="Premium car rental fleet in Kochi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${ASSETS.backgrounds.services})` }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-zinc-950/30" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen"
        style={{ background: goldSpotlight }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: amberSpotlight }}
      />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c69e63]/60 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c69e63]/90"
          >
            Kochi, Kerala
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-[1.12] text-[#c69e63]"
          >
            Welcome to {BRAND.name}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 h-px w-24 origin-left bg-[#b19540]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            {BRAND.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link href="/#fleet" className="btn-gold-solid">
              Explore Fleet
            </Link>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline"
            >
              Rent Online
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 text-xs uppercase tracking-widest text-zinc-500"
          >
            Or call us at{" "}
            <a href={BRAND.phoneHref} className="text-[#c69e63] transition hover:text-white">
              {BRAND.phone}
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
