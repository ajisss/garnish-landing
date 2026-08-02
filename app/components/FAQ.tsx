"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Butuh Claude Code untuk pakai Garnish?",
    a: "Ya. Garnish adalah plugin untuk Claude Code. Bukan standalone app. Kalau kamu belum pakai Claude Code, install dulu dari claude.ai/code. Garnish bekerja di atas infrastruktur plugin Claude Code yang ada.",
  },
  {
    q: "Apakah ini bisa audit halaman yang butuh login?",
    a: "Untuk sekarang, Garnish dioptimasi untuk halaman publik: landing page, homepage, halaman marketing. Halaman yang butuh autentikasi belum di-support secara resmi di versi ini.",
  },
  {
    q: "Seberapa akurat deteksinya?",
    a: "Temuan terukur (kontras, ukuran tap target, line-length) akurat karena dihitung dari computed CSS nyata. Bukan tebakan dari screenshot. Temuan judgment (value proposition, tone of voice) dilabeli eksplisit sebagai penilaian AI, bukan fakta.",
  },
  {
    q: "Apakah data halaman yang saya audit disimpan di server?",
    a: "Tidak. Semua state Garnish disimpan lokal di folder .garnish/registry/ di project kamu. Tidak ada data yang dikirim ke server Garnish. Kamu yang pegang penuh.",
  },
  {
    q: "Gimana cara install-nya?",
    a: "Untuk install, cukup ketik command ini di Claude Code:\n\n/plugin marketplace add ajisss/garnish-plugin\n/plugin install garnish@garnish-marketplace\n/reload-plugins",
    isCode: true,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900">
            Ada pertanyaan?
          </h2>
          <p className="text-[clamp(24px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.03em] text-zinc-300">
            Semua sudah terjawab di sini.
          </p>
        </div>

        {/* List */}
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-dashed border-zinc-200 last:border-b">
              <button
                className="w-full flex items-start gap-6 py-5 bg-transparent border-none cursor-pointer text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Number badge */}
                <span className="flex-shrink-0 w-12 h-7 rounded-md bg-zinc-100 text-[12px] font-medium text-zinc-400 flex items-center justify-center mt-0.5">
                  {String(i + 1)}.0
                </span>

                {/* Question */}
                <span className={`flex-1 text-[16px] font-medium transition-colors ${open === i ? "text-zinc-900" : "text-zinc-700"}`}>
                  {faq.q}
                </span>

                {/* Toggle */}
                <span className="flex-shrink-0 text-zinc-400 text-[20px] leading-none mt-0.5">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-[72px] pb-5">
                  <p className="text-[14px] text-zinc-400 leading-[1.75] whitespace-pre-line">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
