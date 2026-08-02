import { ScanSearch, Layers, Ruler, Tag, TrendingUp, FileText } from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "Multi-scope audit",
    desc: "Pilih scope: Konten, UI/UX, WCAG, Komponen. Atau semua sekaligus. Health Score per scope + overall.",
    featured: false,
  },
  {
    icon: Layers,
    title: "Severity P0–P3",
    desc: "P0 = blocks task, fix sekarang. P1 = significant friction. P2 = polish. Jelas mana yang duluan.",
    featured: true,
  },
  {
    icon: Ruler,
    title: "Metric konkret",
    desc: "Kontras rasio aktual (mis. 2.1:1 vs 4.5:1). Tap target dalam px. Line length dalam ch. Bukan estimasi.",
    featured: false,
  },
  {
    icon: Tag,
    title: "Brand context",
    desc: "Isi .garnish/brand.md sekali. Nama produk, audience, tone of voice. Audit jadi lebih presisi.",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Delta tracking",
    desc: "Re-audit kapanpun. Garnish otomatis compare dengan audit terakhir. Mana yang regres, mana yang fix-nya bertahan.",
    featured: false,
  },
  {
    icon: FileText,
    title: "HTML artifact siap share",
    desc: "Laporan visual lengkap dengan health score card, finding cards, positive findings. Export PDF dari browser.",
    featured: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-4">
            Semua yang kamu butuhkan<br />untuk audit yang serius.
          </h2>
          <p className="text-[15px] text-zinc-400 max-w-[480px] mx-auto leading-[1.75]">
            Dari analisis multi-scope sampai laporan siap share. Garnish kasih semuanya dalam satu command.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`rounded-2xl p-7 flex flex-col ${
                  f.featured
                    ? "text-white"
                    : "bg-zinc-50 border border-zinc-100"
                }`}
                style={
                  f.featured
                    ? {
                        background:
                          "linear-gradient(145deg, #60a5fa 0%, #3b82f6 40%, #2563eb 100%)",
                      }
                    : undefined
                }
              >
                {/* Icon circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-auto ${
                    f.featured ? "bg-white/20" : "bg-zinc-200/60"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className={f.featured ? "text-white" : "text-zinc-600"}
                  />
                </div>

                {/* Text — pushed to bottom */}
                <div className="mt-16">
                  <h3
                    className={`text-[17px] font-semibold mb-2 leading-snug ${
                      f.featured ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`text-[13px] leading-[1.7] ${
                      f.featured ? "text-blue-100" : "text-zinc-500"
                    }`}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
