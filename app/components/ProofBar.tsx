export default function ProofBar() {
  const items = [
    "Dibangun di atas Claude Code",
    "Powered by Playwright · Computed CSS",
    "Grounded ke WCAG AA · Nielsen Heuristics · Laws of UX",
  ];

  return (
    <div className="border-t border-b border-black/8 py-4 z-10 relative bg-white">
      <div className="max-w-[1100px] mx-auto px-12 flex justify-center items-center gap-3 flex-wrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[12px] text-zinc-400" dangerouslySetInnerHTML={{ __html: item.replace(/(Claude Code|Playwright · Computed CSS|WCAG AA · Nielsen Heuristics · Laws of UX)/, '<strong class="text-zinc-500 font-semibold">$1</strong>') }} />
            {i < items.length - 1 && <span className="w-[3px] h-[3px] rounded-full bg-zinc-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}
