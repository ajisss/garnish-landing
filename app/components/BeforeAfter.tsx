const before = [
  "Audit manual 2–4 jam per halaman",
  "Temuan subjektif, susah diprioritaskan",
  "Kontras dicek pakai mata, bukan angka",
  "Tidak ada tracking. Audit ulang dari nol",
  "Laporan panjang, tidak ada rekomendasi konkret",
];

const after = [
  "Audit selesai dalam menit, langsung di Claude Code",
  "Temuan dikategorikan P0/P1/P2. Jelas mana yang duluan",
  "Kontras rasio dihitung dari computed CSS, bukan estimasi",
  "Health Score 0–100, bisa di-track setiap re-audit",
  "Delta tracking: lihat apa yang regres setelah fix",
];

function BeforeVisual() {
  return (
    <div className="rounded-xl bg-white border border-red-100 p-5 font-mono text-[12px] shadow-sm">
      <p className="text-zinc-400 mb-3 font-sans text-[11px] uppercase tracking-[0.1em] font-semibold">Audit notes.txt</p>
      <div className="flex flex-col gap-2">
        {["warna terlalu terang?", "font terlalu kecil mungkin", "CTA kurang menonjol (kayaknya)", "spacing aneh di mobile"].map((note) => (
          <div key={note} className="flex gap-2 items-start">
            <span className="text-red-300 mt-0.5">—</span>
            <span className="text-zinc-400">{note}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-red-50 text-zinc-300 text-[11px]">
        Dibuat: 3 minggu lalu · Revisi: tidak ada
      </div>
    </div>
  );
}

function AfterVisual() {
  return (
    <div className="rounded-xl bg-white border border-green-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-[11px] uppercase tracking-[0.1em] font-semibold">Garnish Report</p>
        <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Health: 81</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { sev: "P0", label: "Contrast ratio 2.1:1 (min 4.5:1)", color: "bg-red-100 text-red-600" },
          { sev: "P1", label: "CTA tap target 32px (min 44px)", color: "bg-orange-100 text-orange-600" },
          { sev: "P2", label: "Line length 95ch (max 75ch)", color: "bg-yellow-100 text-yellow-600" },
          { sev: "P3", label: "Missing alt text on 2 images", color: "bg-zinc-100 text-zinc-500" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.color} flex-shrink-0`}>{item.sev}</span>
            <span className="text-[12px] text-zinc-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-indigo-500 mb-3.5 block">Sebelum vs Sesudah</span>
        <h2 className="text-[clamp(24px,3.5vw,40px)] font-bold leading-[1.15] tracking-[-0.025em] text-zinc-900 mb-12">
          Dari &ldquo;kayaknya ada yang salah&rdquo;<br />jadi &ldquo;ini yang harus difix, ini caranya.&rdquo;
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-zinc-100">
          {/* Before */}
          <div className="p-8 bg-red-50/40 border-b md:border-b-0 md:border-r border-zinc-100">
            <div className="mb-6">
              <BeforeVisual />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-red-500 mb-5">Sebelum Garnish</p>
            <ul className="space-y-0">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2.5 py-2.5 border-b border-black/4 last:border-0 text-[13px] text-zinc-500">
                  <span className="text-red-400 mt-0.5 text-[12px]">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-8 bg-green-50/30">
            <div className="mb-6">
              <AfterVisual />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-green-600 mb-5">Dengan Garnish</p>
            <ul className="space-y-0">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2.5 py-2.5 border-b border-black/4 last:border-0 text-[13px] text-zinc-500">
                  <span className="text-green-500 mt-0.5 text-[12px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
