"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/icons/ServiceIcons";
import { BRAND, SERVICES, SERVICES_INTRO } from "@/lib/data";
import { ASSETS } from "@/lib/assets";

export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="relative pt-28">
      <section
        style={{ backgroundImage: `url(${ASSETS.backgrounds.services})` }}
        className="services-still-bg relative overflow-hidden border-b border-white/5 bg-zinc-950 text-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-zinc-950/58" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/82 via-zinc-950/46 to-zinc-950/88" />

        <div className="section-padding relative z-10 pb-16 pt-0">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c69e63] transition hover:text-white mb-6"
            >
              <span>←</span> Back to Home
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-sm font-bold text-white"
            >
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-3 font-display text-4xl font-bold text-[#b19540] sm:text-5xl"
            >
              Premium rentals for every occasion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-5 max-w-2xl text-zinc-300"
            >
              {SERVICES_INTRO}
            </motion.p>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${ASSETS.backgrounds.services})` }}
        className="services-still-bg relative overflow-hidden bg-zinc-950 text-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-zinc-950/60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/86 via-zinc-950/48 to-zinc-950/90" />

        <div className="section-padding relative z-10 pt-12 pb-12">
          <div className="mx-auto flex max-w-4xl flex-col gap-8">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.04 }}
                className="scroll-mt-28 rounded-lg border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#c69e63]/35 bg-white/[0.06] text-[#c69e63]">
                    <ServiceIcon id={service.id} className="h-7 w-7" />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#c69e63]">{service.teaser}</p>
                    <p className="mt-4 leading-relaxed text-zinc-300">{service.description}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`${BRAND.whatsapp}?text=${encodeURIComponent(
                          `Hi, I'd like to know more about ${service.title} at Top Fast Rent a Car.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold-solid inline-flex items-center gap-2 !px-6 !py-3"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Book on WhatsApp
                      </a>
                      <Link
                        href="/contact"
                        className="btn-gold-outline inline-flex items-center gap-2 !px-6 !py-3"
                      >
                        Enquire
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Navigation Buttons at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/"
                className="btn-gold-outline inline-flex items-center justify-center gap-2 !px-8 !py-3"
              >
                <span>←</span> Back to Home
              </Link>
              <Link
                href="/#fleet"
                className="btn-gold-solid inline-flex items-center justify-center gap-2 !px-8 !py-3"
              >
                Rent Car
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
