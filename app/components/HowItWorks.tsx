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
          <p className="text-indigo-400 font-semibold">Health Score: 61 / 100</p>
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
      <div className="rounded-2xl bg-white border border-zinc-100 shadow-lg p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-4">Health Score</p>
        <div className="flex items-end gap-3 mb-6">
          <span className="text-[48px] font-bold text-zinc-900 leading-none">61</span>
          <span className="text-[16px] text-zinc-400 mb-2">/ 100</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {[
            { label: "UI/UX", score: 58, color: "bg-red-400" },
            { label: "Konten", score: 72, color: "bg-yellow-400" },
            { label: "WCAG", score: 49, color: "bg-red-400" },
            { label: "Komponen", score: 80, color: "bg-green-400" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-[12px] text-zinc-500 w-20 flex-shrink-0">{s.label}</span>
              <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }} />
              </div>
              <span className="text-[12px] font-semibold text-zinc-700 w-6 text-right">{s.score}</span>
            </div>
          ))}
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
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-4">
            Tiga langkah dari URL ke fix.
          </h2>
          <p className="text-[15px] text-zinc-400 max-w-[440px] mx-auto leading-[1.75]">
            Satu terminal. Satu plugin. Audit, laporan, dan fix dalam satu alur yang sama.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`grid grid-cols-2 gap-16 items-center ${!step.visualLeft ? "direction-reverse" : ""}`}
            >
              {step.visualLeft ? (
                <>
                  <div>{step.visual}</div>
                  <TextBlock step={step} index={i} />
                </>
              ) : (
                <>
                  <TextBlock step={step} index={i} />
                  <div>{step.visual}</div>
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
      <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-indigo-400 mb-3 block">
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
            <CheckCircle2 size={15} className="text-indigo-400 flex-shrink-0" strokeWidth={2} />
            <span className="text-[13px] text-zinc-600">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
