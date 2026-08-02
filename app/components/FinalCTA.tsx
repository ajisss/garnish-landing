export default function FinalCTA() {
  return (
    <section className="relative py-32 text-center overflow-hidden bg-white">
      {/* Gradient blobs */}
      <div
        className="absolute bottom-0 left-0 w-[480px] h-[320px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(251,113,133,0.45) 0%, rgba(253,186,116,0.25) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[480px] h-[320px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(99,102,241,0.45) 0%, rgba(147,197,253,0.25) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto px-8">
        <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-5">
          Audit landing page pertamamu,<br />gratis sekarang juga.
        </h2>
        <p className="text-[16px] text-zinc-500 leading-[1.75] mb-10">
          Landing page kamu mungkin punya masalah yang belum kamu tahu.<br />Garnish temukan semuanya dalam hitungan detik, gratis.
        </p>
        <a
          href="https://github.com/ajisss/garnish-plugin"
          className="btn-primary"
        >
          Install Gratis Sekarang
        </a>
      </div>
    </section>
  );
}
