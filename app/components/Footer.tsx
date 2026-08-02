import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white overflow-hidden border-t border-zinc-100">
      {/* Giant wordmark */}
      <p
        className="text-[clamp(120px,20vw,260px)] font-bold leading-[0.85] tracking-[-0.04em] text-zinc-100 hover:text-blue-100 transition-colors duration-300 select-none whitespace-nowrap pt-10 pb-10 text-center cursor-default"
        aria-hidden="true"
      >
        GARNISH
      </p>

      {/* Etalas credit — below wordmark, centered */}
      <a
        href="https://etalas.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 no-underline group pb-10"
      >
        <span className="text-[13px] text-zinc-400 group-hover:text-zinc-600 transition-colors">
          product by
        </span>
        <Image
          src="/etalas-logo.png"
          alt="Etalas"
          width={80}
          height={80}
          className="opacity-50 group-hover:opacity-80 transition-opacity object-contain"
        />
      </a>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 px-5 md:px-8 py-4 flex items-center justify-end">
        <p className="text-[13px] text-zinc-400">
          © 2026 Garnish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
