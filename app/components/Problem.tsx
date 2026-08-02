import { Clock, Shuffle, ListChecks, Lightbulb, RefreshCw } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Audit Manual Makan Waktu",
    desc: "Cek kontras satu per satu, scan copy, cari komponen yang tidak konsisten. Semua manual, semua membosankan.",
  },
  {
    icon: Shuffle,
    title: "Hasil Terlalu Subjektif",
    desc: "Tiap orang punya standar beda. Audit yang sama bisa kasih hasil beda tergantung siapa yang ngerjain.",
    featured: true,
  },
  {
    icon: ListChecks,
    title: "Checklist Panjang, Gak Fokus",
    desc: "100 poin checklist tapi tidak ada yang bilang mana yang harus difix sekarang dan mana yang bisa besok.",
  },
  {
    icon: Lightbulb,
    title: "Temuan Tidak Actionable",
    desc: "Laporan audit isinya panjang tapi tidak ada langkah konkret. Developer bingung, desainer frustasi.",
  },
  {
    icon: RefreshCw,
    title: "Tidak Konsisten Antar Run",
    desc: "Audit minggu ini beda hasilnya dari minggu lalu. Padahal halamannya sama. Tidak ada standar yang bisa diulang.",
  },
];

export default function Problem() {
  const top = items.slice(0, 3);
  const bottom = items.slice(3);

  return (
    <section id="problem" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-12">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-5">
            Audit Otomatis,<br />dengan Standar yang Konsisten
          </h2>
          <p className="text-[16px] text-zinc-400 max-w-[500px] mx-auto leading-[1.75]">
            Garnish mendeteksi masalah yang benar-benar menghambat konversi. Bukan checklist panjang yang tidak actionable.
          </p>
        </div>

        {/* Top row — 3 col, dividers only */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {top.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-8 py-12 relative ${
                  item.featured ? "bg-zinc-50" : "bg-white"
                } ${i > 0 ? "border-t md:border-t-0 md:border-l border-zinc-200" : ""}`}
              >
                {item.featured && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.09) 1.5px, transparent 1.5px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}
                <div className="relative z-10 w-[68px] h-[68px] rounded-full bg-blue-500 flex items-center justify-center mb-6">
                  <Icon size={26} color="white" strokeWidth={1.75} />
                </div>
                <h3 className="relative z-10 text-[17px] font-semibold text-zinc-900 mb-3 leading-snug">{item.title}</h3>
                <p className="relative z-10 text-[13px] text-zinc-500 leading-[1.75]">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-zinc-200" />

        {/* Bottom row — 2 col, divider only */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {bottom.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-8 py-12 bg-white ${
                  i > 0 ? "border-t md:border-t-0 md:border-l border-zinc-200" : ""
                }`}
              >
                <div className="w-[68px] h-[68px] rounded-full bg-blue-500 flex items-center justify-center mb-6">
                  <Icon size={26} color="white" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold text-zinc-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-[1.75]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
