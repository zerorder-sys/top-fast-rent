import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">{BRAND.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{BRAND.tagline}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Kochi Office
            </h4>
            <div className="mt-2 flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
              <FiMapPin className="h-4 w-4 text-[#b19540]" />
              <a href="/contact#contact-map" className="transition hover:text-white">
                {BRAND.address}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Contact
            </h4>
            <div className="mt-2 flex items-center gap-3 text-sm text-zinc-400">
              <FiPhone className="h-4 w-4 text-[#b19540]" />
              <a href={BRAND.phoneHref} className="hover:text-white">
                {BRAND.phone}
              </a>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-zinc-400">
              <FiMail className="h-4 w-4 text-[#b19540]" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs text-zinc-500">
          powered by{' '}
          <a
            href="https://joelreji.space"
            target="_blank"
            rel="noreferrer"
            className="text-[#b19540] hover:text-white"
          >
            Zerorder
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
