"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import VehicleImage from "./VehicleImage";
import { BRAND, TIER_A_FLEET, TIER_B_FLEET, OTHER_FLEET } from "@/lib/data";
import { ASSETS } from "@/lib/assets";
import { WhatsAppIcon } from "./icons/ServiceIcons";

function rentCarHref(vehicleName: string) {
  return `${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hi, I'd like to rent the ${vehicleName} from Top Fast Rent a Car.`
  )}`;
}

export default function FleetSection() {
  return (
    <section
      id="fleet"
      style={{ backgroundImage: `url(${ASSETS.backgrounds.services})` }}
      className="services-still-bg section-padding relative overflow-hidden border-t border-white/5 bg-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/66" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/52 to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-display text-sm font-bold text-white">
            Tier A
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[#b19540] sm:text-4xl lg:text-5xl">
            Duration-Based Daily Rates
          </h2>
          <p className="mt-4 text-zinc-300">Rent a car in Cochin / Self Drive</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TIER_A_FLEET.map((vehicle, i) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard className="flex h-full flex-col p-6">
                <VehicleImage src={vehicle.image} alt={vehicle.name} />
                <h3 className="font-display text-2xl font-bold text-white">
                  {vehicle.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  {vehicle.category}
                </p>

                <ul className="mt-5 space-y-3 border-t border-white/5 pt-5">
                  {vehicle.rates.map((rate) => (
                    <li
                      key={rate.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-zinc-300">{rate.label}</span>
                      <span className="font-semibold text-[#c69e63]">{rate.value}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={rentCarHref(vehicle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-solid mt-6 inline-flex w-full items-center gap-2 !px-5 !py-3"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Rent Car
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <SpotlightCard className="p-6">
            <h3 className="font-display text-2xl font-bold text-white">
              Other Fleet Options
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {OTHER_FLEET.map((car) => (
                <a
                  key={car}
                  href={rentCarHref(car)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-[#c69e63]/50 hover:text-[#c69e63]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  {car}
                </a>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 mt-20"
        >
          <p className="font-display text-sm font-bold text-white">
            Tier B
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[#b19540] sm:text-4xl lg:text-5xl">
            KM-Packaged Luxury Fleet
          </h2>
          <p className="mt-4 text-zinc-300">Rent a car in Cochin</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIER_B_FLEET.map((vehicle, i) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard className="flex h-full flex-col p-6">
                <VehicleImage src={vehicle.image} alt={vehicle.name} luxury />
                <h3 className="font-display text-2xl font-bold text-white">
                  {vehicle.name}
                </h3>

                <div className="mt-5 space-y-3 border-t border-white/5 pt-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-300">Package</span>
                    <span className="font-semibold text-[#c69e63]">
                      {vehicle.packageKm} KM for {vehicle.packagePrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-300">Extra KM Rate</span>
                    <span className="font-semibold text-white">
                      {vehicle.extraKmRate}
                    </span>
                  </div>
                </div>

                <a
                  href={rentCarHref(vehicle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-solid mt-6 inline-flex w-full items-center gap-2 !px-5 !py-3"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Rent Car
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
