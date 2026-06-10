"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { ASSETS } from "@/lib/assets";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  comments: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  comments: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submittedForm, setSubmittedForm] = useState<FormState | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setSubmittedForm(form);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundImage: `url(${ASSETS.backgrounds.services})` }}
      className="services-still-bg section-padding relative scroll-mt-24 overflow-hidden bg-zinc-950 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/64" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/92 via-zinc-950/54 to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <p className="font-display text-sm font-bold text-white">Contact Us</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-[#b19540] sm:text-4xl lg:text-5xl">
            What&apos;s your special occasion?
          </h1>
          <p className="mt-4 text-zinc-300">
            Tell us about your event and we&apos;ll curate the perfect ride.
          </p>
        </motion.div>

        <SpotlightCard className="p-8">
          <form data-controls-data onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm leading-relaxed text-zinc-300">First Name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#c69e63]/60 focus:ring-1 focus:ring-[#c69e63]/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm leading-relaxed text-zinc-300">Last Name</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#c69e63]/60 focus:ring-1 focus:ring-[#c69e63]/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm leading-relaxed text-zinc-300">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#c69e63]/60 focus:ring-1 focus:ring-[#c69e63]/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm leading-relaxed text-zinc-300">Subject</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={handleChange("subject")}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#c69e63]/60 focus:ring-1 focus:ring-[#c69e63]/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm leading-relaxed text-zinc-300">
                Comments / Questions
              </label>
              <textarea
                rows={5}
                value={form.comments}
                onChange={handleChange("comments")}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#c69e63]/60 focus:ring-1 focus:ring-[#c69e63]/30"
              />
            </div>

            {error && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg border-2 border-[#b19540] bg-[#b19540] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-zinc-950 shadow-[0_0_30px_rgba(198,158,99,0.25)] transition hover:border-[#c69e63] hover:bg-[#c69e63] disabled:cursor-not-allowed disabled:border-[#777] disabled:bg-[#777] disabled:text-zinc-300"
            >
              {submitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>

          {submittedForm && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-lg border border-[#c69e63]/30 bg-white/[0.04] p-8"
            >
              <h3 className="font-display text-2xl font-bold text-[#b19540]">Enquiry Received</h3>
              <p className="mt-4 text-zinc-300">
                Thank you,{" "}
                <strong className="text-white">
                  {submittedForm.firstName} {submittedForm.lastName}
                </strong>
                . We&apos;ve received your enquiry and will respond shortly.
              </p>

              <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Email</dt>
                  <dd className="text-right text-white">{submittedForm.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Subject</dt>
                  <dd className="text-right text-white">{submittedForm.subject}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Comments</dt>
                  <dd className="text-right text-white">
                    {submittedForm.comments || "No comments"}
                  </dd>
                </div>
              </dl>
            </motion.div>
          )}
        </SpotlightCard>
      </div>
    </section>
  );
}
