import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Install plugin, kirim URL",
    desc: "Install Garnish sekali ke Claude Code. Setelah itu, kirim URL apapun dan minta audit. Garnish screenshot halaman, ekstrak computed CSS pakai Playwright, dan analisa hasilnya berdasarkan rubric yang konsisten tiap run.",
    bullets: [
      "Screenshot otomatis di setiap audit",
      "Computed CSS diekstrak langsung dari browser",
      "Rubric konsisten tiap run",
    ],
    stat: { value: "1 command", label: "untuk mulai audit pertamamu." },
    visualLeft: true,
    visual: (
      <div className="rounded-2xl overflow-hidden bg-zinc-900 p-5 font-mono text-[13px] leading-[1.8] shadow-xl">
        <div className="flex gap-1.5 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <p className="text-zinc-500">$ <span className="text-white">/garnish:check https://yoursite.com</span></p>
        <p className="text-zinc-500 mt-2">Fetching page... <span className="text-green-400">done</span></p>
        <p className="text-zinc-500">Extracting CSS... <span className="text-green-400">done</span></p>
        <p className="text-zinc-500">Running audit... <span className="text-green-400">done</span></p>
        <div className="mt-4 border-t border-zinc-700 pt-4">
          <p className="text-blue-400 font-semibold">Health Score: 61 / 100</p>
          <p className="text-zinc-400 text-[12px] mt-1">P0: 2 findings  ·  P1: 5 findings  ·  P2: 8 findings</p>
        </div>
      </div>
    ),
  },
  {
    title: "Laporan berprioritas, metric nyata",
    desc: "Bukan daftar saran. Temuan dikategorikan P0 sampai P3, disertai metric konkret: kontras rasio aktual, tap target dalam px, line length dalam ch. Health Score per scope dan overall.",
    bullets: [
      "Severity P0–P3 dengan konteks kenapa penting",
      "Metric terukur, bukan estimasi",
      "HTML artifact siap share ke tim",
    ],
    stat: { value: "4 scope", label: "UI/UX, Konten, WCAG, Komponen." },
    visualLeft: false,
    visual: (
      <div
        className="relative rounded-3xl p-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)" }}
      >
        {/* Card 1 — main */}
        <div className="bg-white rounded-2xl shadow-xl p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-semibold text-zinc-500">Health Score</span>
            <span className="text-[11px] text-zinc-300">···</span>
          </div>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-[40px] font-bold text-zinc-900 leading-none">61</span>
            <span className="text-[14px] text-zinc-400 mb-1">/ 100</span>
            <span className="text-[11px] text-red-400 bg-red-50 px-2 py-0.5 rounded-full mb-1 ml-1">−8 vs last</span>
          </div>
          <div className="flex gap-1.5">
            {[
              { w: "58%", color: "bg-red-400" },
              { w: "72%", color: "bg-yellow-400" },
              { w: "49%", color: "bg-red-300" },
              { w: "80%", color: "bg-green-400" },
            ].map((b, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${b.color}`} style={{ width: b.w }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-1.5">
            {["UI/UX", "Konten", "WCAG", "Komponen"].map((l) => (
              <span key={l} className="flex-1 text-[10px] text-zinc-400 text-center">{l}</span>
            ))}
          </div>
        </div>

        {/* Card 2 — findings */}
        <div className="bg-white rounded-2xl shadow-xl p-5 ml-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] font-semibold text-zinc-500">Top Findings</span>
            <span className="text-[11px] text-zinc-300">···</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { sev: "P0", label: "Contrast ratio 2.1:1", color: "bg-red-100 text-red-600" },
              { sev: "P1", label: "CTA tap target 32px", color: "bg-orange-100 text-orange-600" },
              { sev: "P2", label: "Line length 95ch", color: "bg-yellow-100 text-yellow-700" },
            ].map((f) => (
              <div key={f.sev} className="flex items-center gap-2.5">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${f.color}`}>{f.sev}</span>
                <span className="text-[12px] text-zinc-500">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Fix langsung dari laporan",
    desc: "Pilih mana yang mau dibenerin. Konten, desain, atau keduanya. Garnish orchestrate fix-nya: tulis ulang copy, rebuild komponen pakai design system pilihanmu, atau full rebuild. QA otomatis sebelum selesai.",
    bullets: [
      "Fix konten, desain, atau keduanya",
      "Pakai design system yang sudah ada",
      "QA otomatis sebelum selesai",
    ],
    stat: { value: "1 command", label: "dari temuan langsung ke fix." },
    visualLeft: true,
    visual: (
      <div className="rounded-2xl overflow-hidden bg-zinc-900 p-5 font-mono text-[13px] leading-[1.8] shadow-xl">
        <div className="flex gap-1.5 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <p className="text-zinc-500">$ <span className="text-white">/garnish:design-fix P0-001</span></p>
        <p className="text-zinc-500 mt-2">Analyzing finding... <span className="text-green-400">done</span></p>
        <p className="text-zinc-500">Applying fix... <span className="text-green-400">done</span></p>
        <p className="text-zinc-500">Running QA... <span className="text-green-400">passed</span></p>
        <div className="mt-4 border-t border-zinc-700 pt-4">
          <p className="text-green-400 font-semibold">Fix applied successfully.</p>
          <p className="text-zinc-400 text-[12px] mt-1">Contrast ratio: 2.1:1 → 5.3:1</p>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-4">
            Tiga langkah dari URL ke fix.
          </h2>
          <p className="text-[15px] text-zinc-400 max-w-[440px] mx-auto leading-[1.75]">
            Satu terminal. Satu plugin. Audit, laporan, dan fix dalam satu alur yang sama.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-center gap-8"
            >
              {step.visualLeft ? (
                <>
                  <div className="w-full">{step.visual}</div>
                  <TextBlock step={step} index={i} />
                </>
              ) : (
                <>
                  <div className="w-full md:hidden">{step.visual}</div>
                  <TextBlock step={step} index={i} />
                  <div className="w-full hidden md:block">{step.visual}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextBlock({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <div>
      <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-400 mb-3 block">
        Langkah {index + 1}
      </span>
      <h3 className="text-[clamp(20px,2.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em] text-zinc-900 mb-4">
        {step.title}
      </h3>
      <p className="text-[14px] text-zinc-500 leading-[1.8] mb-6">
        {step.desc}
      </p>
      <ul className="flex flex-col gap-2.5">
        {step.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5">
            <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" strokeWidth={2} />
            <span className="text-[13px] text-zinc-600">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
