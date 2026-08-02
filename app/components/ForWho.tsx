import { Code2, Paintbrush, Megaphone, Rocket } from "lucide-react";

const personas = [
  {
    icon: Code2,
    role: "Developer",
    desc: "Yang dapat feedback desain dari mana-mana tapi tidak tahu mana yang harus dibenerin duluan. Garnish kasih prioritas jelas.",
    iconBg: "bg-blue-500",
  },
  {
    icon: Paintbrush,
    role: "UI/UX Designer",
    desc: "Yang mau validasi desain sebelum handoff. Bukan nunggu user testing atau review manual yang subjektif.",
    iconBg: "bg-sky-400",
  },
  {
    icon: Megaphone,
    role: "Marketer",
    desc: "Yang landing page-nya sudah live tapi konversinya stagnan. Garnish deteksi apa yang secara konkret menghambat.",
    iconBg: "bg-orange-400",
  },
  {
    icon: Rocket,
    role: "Founder / Solo Builder",
    desc: "Yang build sendiri dan tidak punya tim desain. Garnish jadi pair reviewer yang paham standar UX dan konversi.",
    iconBg: "bg-emerald-500",
  },
];

export default function ForWho() {
  return (
    <section id="for-who" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-4">
            Garnish dibuat untuk siapa?
          </h2>
          <p className="text-[15px] text-zinc-400 max-w-[480px] mx-auto leading-[1.75]">
            Siapapun yang buat atau jaga landing page dan mau tahu apa yang sebenarnya menghambat konversi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-zinc-100 rounded-2xl overflow-hidden">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.role}
                className={`flex flex-col items-center text-center p-8 bg-white ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l lg:border-t-0 border-zinc-100" : ""
                } ${
                  i === 2 ? "sm:border-t border-zinc-100" : ""
                }`}
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-8 ${p.iconBg}`}>
                  <Icon size={18} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-[16px] font-semibold text-zinc-900 mb-2">{p.role}</h3>
                <p className="text-[13px] text-zinc-500 leading-[1.75] line-clamp-4">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
