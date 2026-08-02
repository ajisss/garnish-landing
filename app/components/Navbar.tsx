"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Apa itu Garnish", href: "#what-is-garnish" },
  { label: "Untuk Siapa", href: "#for-who" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Fitur", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-[22px]"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px) saturate(140%)",
          WebkitBackdropFilter: "blur(16px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,0.6) inset",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline px-2 py-1 rounded-[14px] flex-shrink-0">
          <div className="w-7 h-7 rounded-[8px] bg-blue-500 flex items-center justify-center text-white text-[13px] font-bold">
            G
          </div>
          <span className="text-[14px] font-semibold text-zinc-900 tracking-tight">Garnish</span>
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-zinc-200 mx-1" />

        {/* Links */}
        <ul className="hidden md:flex items-center gap-0.5 list-none">
          {navLinks.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-[13px] px-3 py-1.5 rounded-xl transition-all no-underline ${
                    isActive
                      ? "text-zinc-900 font-medium bg-white/70"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="w-px h-4 bg-zinc-200 mx-1" />

        {/* CTA */}
        <a
          href="https://github.com/ajisss/garnish-plugin"
          className="btn-primary !text-[13px] !px-4 !py-2 flex-shrink-0"
        >
          Install gratis
        </a>
      </nav>
    </div>
  );
}
