"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };

  const onTouchMove = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX); };

  return (
    <section id="before-after" className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 mb-4">
            Sebelum dan sesudah Garnish,<br />satu geseran.
          </h2>
          <p className="text-[15px] text-zinc-400 max-w-[480px] mx-auto leading-[1.75]">
            Geser untuk lihat langsung bedanya. Dari landing page yang belum diaudit ke versi yang sudah lewat Garnish.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-lg select-none cursor-col-resize"
          style={{ aspectRatio: "16/9" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchMove={onTouchMove}
        >
          {/* After (full width, behind) */}
          <Image src="/after.png" alt="Setelah Garnish" fill className="object-cover object-top" draggable={false} />

          {/* Before (clipped to left of slider) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <div className="relative w-full h-full" style={{ width: `${100 / (sliderPos / 100)}%` }}>
              <Image src="/before.png" alt="Sebelum Garnish" fill className="object-cover object-top" draggable={false} />
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center gap-1 z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 4L1 8L5 12" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 4L15 8L11 12" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            Sebelum
          </div>
          <div className="absolute top-4 right-4 bg-black/50 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            Sesudah
          </div>
        </div>
      </div>
    </section>
  );
}
