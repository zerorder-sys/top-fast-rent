"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/data";
import { ASSETS } from "@/lib/assets";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/contact#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#212631]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-[#212631]/85 backdrop-blur-md"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="relative block h-11 w-28 shrink-0 sm:h-12 sm:w-32">
            <Image
              src={ASSETS.brand.logo}
              alt=""
              fill
              sizes="128px"
              className="object-contain object-left"
              priority
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate font-display text-sm font-bold text-[#c69e63] sm:text-base">
              Top Fast Rent a Car
            </span>
            <span className="truncate text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              Kochi, Kerala
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-white transition-colors hover:text-[#c69e63] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#c69e63] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={BRAND.phoneHref}
          className="hidden text-sm font-semibold text-[#c69e63] transition hover:text-white sm:block"
        >
          {BRAND.phone}
        </a>

        <a
          href={BRAND.phoneHref}
          className="text-xs font-semibold text-[#c69e63] sm:hidden"
        >
          Call
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#c69e63]/60 hover:text-[#c69e63] md:hidden"
        >
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-4 top-full mt-3 rounded-lg border border-white/10 bg-[#212631]/98 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-[#c69e63]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
