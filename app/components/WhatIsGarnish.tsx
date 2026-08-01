import { ScanSearch, FileText, Wrench } from "lucide-react";

const pillars = [
  {
    icon: ScanSearch,
    title: "Deteksi Otomatis",
    desc: "Screenshot halaman, ekstrak computed CSS pakai Playwright, analisa berdasarkan rubric yang konsisten tiap run.",
  },
  {
    icon: FileText,
    title: "Laporan Terstruktur",
    desc: "Temuan berprioritas dengan metric konkret, Health Score per scope, dan HTML artifact siap share ke tim.",
  },
  {
    icon: Wrench,
    title: "Fix Langsung",
    desc: "Pilih temuan yang mau dibenerin. Garnish orchestrate fix-nya: tulis ulang copy, rebuild komponen, atau QA otomatis.",
  },
];

export default function WhatIsGarnish() {
  return (
    <section id="what-is-garnish" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="flex gap-20 items-start">
          {/* Left — sticky label + headline */}
          <div className="w-[380px] flex-shrink-0 sticky top-28">
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.025em] text-zinc-900 mb-5">
              Plugin Claude Code untuk audit landing page.
            </h2>
            <p className="text-[15px] text-zinc-400 leading-[1.75]">
              Garnish bukan checklist manual. Dia screenshot halamanmu, tarik semua computed CSS, lalu kasih laporan dengan temuan konkret. Bukan opini.
            </p>
          </div>

          {/* Right — pillars */}
          <div className="flex-1 flex flex-col divide-y divide-zinc-100">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-5 py-8 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-[10px] bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-indigo-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-zinc-900 mb-1.5">{p.title}</h3>
                    <p className="text-[14px] text-zinc-500 leading-[1.75]">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
