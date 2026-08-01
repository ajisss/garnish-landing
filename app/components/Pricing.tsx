"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import WaitlistModal from "./WaitlistModal";

const plans = [
  {
    name: "Free",
    price: "Gratis",
    priceNote: "Selamanya",
    desc: "Untuk solo builder dan developer yang mau coba Garnish tanpa komitmen.",
    cta: "Install Sekarang",
    ctaHref: "https://github.com/ajisss/garnish-plugin",
    featured: false,
    features: [
      "5 audit per bulan",
      "Scope: UI/UX & Konten",
      "Health Score per scope",
      "Laporan teks di terminal",
      "Brand context (.garnish/brand.md)",
    ],
  },
  {
    name: "Pro",
    price: "Coming Soon",
    priceNote: "",
    desc: "Untuk tim dan founder yang butuh audit unlimited dengan semua scope dan artifact siap share.",
    cta: "Join Waitlist",
    ctaHref: "https://github.com/ajisss/garnish-plugin",
    featured: true,
    badge: "Paling Lengkap",
    features: [
      "Audit unlimited",
      "Semua scope (UI/UX, WCAG, Komponen, Konten)",
      "HTML artifact siap share",
      "Severity P0–P3 dengan prioritas jelas",
      "Multi-page audit",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "Coming Soon",
    priceNote: "",
    desc: "Untuk tim desain dan engineering yang butuh standar audit konsisten di seluruh project.",
    cta: "Join Waitlist",
    ctaHref: "https://github.com/ajisss/garnish-plugin",
    featured: false,
    features: [
      "Semua fitur Pro",
      "Shared registry antar anggota tim",
      "Audit scheduling otomatis",
      "Integrasi CI/CD",
      "Custom rubric per project",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  const [modalPlan, setModalPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-4">
            Mulai gratis, upgrade saat siap.
          </h2>
          <p className="text-[15px] text-zinc-400 max-w-[560px] mx-auto leading-[1.75]">
            Garnish gratis selama early access. Tidak ada kartu kredit, tidak ada setup, langsung bisa audit landing page pertamamu hari ini.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-transform duration-300 hover:scale-105 ${
                plan.featured
                  ? "bg-indigo-500 text-white"
                  : "bg-white border border-zinc-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-semibold px-3.5 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="min-h-[220px] flex flex-col">
                <p className={`text-[13px] font-semibold mb-4 ${plan.featured ? "text-indigo-200" : "text-zinc-500"}`}>
                  {plan.name}
                </p>

                <div className="mb-4">
                  <span className={`text-[36px] font-bold tracking-[-0.03em] leading-none ${plan.featured ? "text-white" : "text-zinc-900"}`}>
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className={`text-[13px] ml-2 ${plan.featured ? "text-indigo-200" : "text-zinc-400"}`}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <p className={`text-[13px] leading-[1.7] ${plan.featured ? "text-indigo-100" : "text-zinc-500"}`}>
                  {plan.desc}
                </p>
              </div>

              {plan.cta === "Join Waitlist" ? (
                <button
                  onClick={() => setModalPlan(plan.name)}
                  className={`block w-full text-center text-[14px] font-semibold py-3 rounded-[12px] mb-7 transition-all cursor-pointer border-0 ${
                    plan.featured
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-zinc-900 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </button>
              ) : (
                <a
                  href={plan.ctaHref}
                  className={`block text-center text-[14px] font-semibold py-3 rounded-[12px] mb-7 no-underline transition-all ${
                    plan.featured
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-zinc-900 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </a>
              )}

              <div className={`border-t mb-6 ${plan.featured ? "border-indigo-400" : "border-zinc-100"}`} />

              <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] mb-4 ${plan.featured ? "text-indigo-200" : "text-zinc-400"}`}>
                Yang kamu dapat
              </p>
              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className={`flex-shrink-0 mt-0.5 ${plan.featured ? "text-indigo-200" : "text-indigo-500"}`}
                    />
                    <span className={`text-[13px] leading-snug ${plan.featured ? "text-indigo-50" : "text-zinc-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {modalPlan && (
        <WaitlistModal plan={modalPlan} onClose={() => setModalPlan(null)} />
      )}
    </section>
  );
}
