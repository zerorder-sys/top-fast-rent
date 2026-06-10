"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/data";
import { WhatsAppIcon } from "./icons/ServiceIcons";

export default function FloatingWhatsApp() {
  const defaultMessage = "Could I get more details about this?";
  const whatsappWithText = `${BRAND.whatsapp}${BRAND.whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(
    defaultMessage
  )}`;
  return (
    <>
      <motion.a
        href={whatsappWithText}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instant WhatsApp reservation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(37,211,102,0.25)] backdrop-blur-xl transition-shadow hover:shadow-[0_0_40px_rgba(37,211,102,0.45)] sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
        Instant WhatsApp Reservation
      </motion.a>

      <motion.a
        href={whatsappWithText}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.35)] transition-shadow hover:shadow-[0_0_42px_rgba(37,211,102,0.55)] sm:bottom-6 sm:left-6 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-5 w-5 sm:h-7 sm:w-7" />
      </motion.a>
    </>
  );
}
