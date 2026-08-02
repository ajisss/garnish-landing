import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-[60px] pb-24 overflow-hidden bg-white">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Fade edges */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 50% 50%, transparent 20%, white 85%)",
        }}
      />

      <div className="relative z-10 max-w-[760px] mx-auto px-5 md:px-8">
        {/* Headline */}
        <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-[1.18] tracking-[-0.03em] text-zinc-900 mb-6">
          Audit Landing Page,{" "}
          <span className="inline-flex items-center gap-3">
            Otomatis
            <span
              className="inline-flex items-center justify-center w-[56px] h-[56px] md:w-[68px] md:h-[68px] rounded-[16px] text-white flex-shrink-0 align-middle relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #60a5fa 0%, #3b82f6 60%, #2563eb 100%)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.35) inset, 0 4px 16px rgba(37,99,235,0.4)",
              }}
            >
              {/* Glass highlight */}
              <span
                className="absolute inset-0 rounded-[16px] pointer-events-none"
                style={{
                  background: "linear-gradient(160deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
                }}
              />
              <Sparkles size={28} strokeWidth={1.5} className="relative z-10" />
            </span>
          </span>{" "}
          dari Terminal.
        </h1>

        {/* Sub */}
        <p className="text-[17px] text-zinc-500 max-w-[520px] mx-auto mb-10 leading-[1.75]">
          Plugin Claude Code yang mendeteksi masalah desain &amp; konten yang benar-benar menghambat konversi. Bukan checklist panjang yang gak actionable.
        </p>

        {/* CTA */}
        <a
          href="https://github.com/ajisss/garnish-plugin"
          className="btn-primary"
        >
          Mulai Sekarang
        </a>

      </div>
    </section>
  );
}
