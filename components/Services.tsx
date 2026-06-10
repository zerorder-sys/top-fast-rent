"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceIcon, ArrowRightIcon } from "./icons/ServiceIcons";
import { SERVICES, SERVICES_INTRO } from "@/lib/data";
import { ASSETS } from "@/lib/assets";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{ backgroundImage: `url(${ASSETS.backgrounds.services})` }}
      className="services-still-bg relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-zinc-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/58" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/82 via-zinc-950/46 to-zinc-950/88" />

      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <p className="font-display text-sm font-bold text-white">Our Services</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[#b19540] sm:text-4xl lg:text-5xl">
              We offer renting services for special occasions.
            </h2>
            <p className="mt-4 text-zinc-300">{SERVICES_INTRO}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-0 md:grid-cols-2 xl:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <motion.article
                key={service.id}
                variants={item}
                className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:last:border-r-0 xl:px-10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c69e63]/35 bg-white/[0.06] text-[#c69e63]">
                    <ServiceIcon id={service.id} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-300">{service.teaser}</p>

                <Link
                  href={`/services#${service.id}`}
                  className="group mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c69e63] transition hover:text-white"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
