import Image from "next/image";

const categories = [
  {
    title: "Bathroom Fittings",
    descriptor: "Complete ranges for premium wet areas",
  },
  {
    title: "Faucets & Taps",
    descriptor: "Single-lever, sensor, and thermostatic collections",
  },
  {
    title: "Sanitaryware",
    descriptor: "Wall-hung, floor-mounted, and concealed cistern suites",
  },
  {
    title: "Accessories",
    descriptor: "Towel rails, robe hooks, soap dispensers, and more",
  },
  {
    title: "Premium Hardware Solutions",
    descriptor: "Handles, locks, hinges, and precision architectural fittings",
  },
];

function HardwarePlaceholder() {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#1A1917] flex flex-col items-end justify-end p-10 lg:p-16">
      {/* Geometric composition */}
      <div className="absolute top-10 left-10 w-[1px] h-32 bg-[#2F5D50]/40" />
      <div className="absolute top-10 left-10 w-32 h-[1px] bg-[#2F5D50]/40" />
      <div className="absolute bottom-10 right-10 w-[1px] h-32 bg-[#2F5D50]/40" />
      <div className="absolute bottom-10 right-10 w-32 h-[1px] bg-[#2F5D50]/40" />

      <svg
        viewBox="0 0 160 160"
        fill="none"
        className="w-40 h-40 opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <circle cx="80" cy="80" r="72" stroke="#FAFAF8" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="48" stroke="#FAFAF8" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="8" stroke="#FAFAF8" strokeWidth="0.5" />
        <line x1="80" y1="8" x2="80" y2="32" stroke="#FAFAF8" strokeWidth="0.5" />
        <line x1="80" y1="128" x2="80" y2="152" stroke="#FAFAF8" strokeWidth="0.5" />
        <line x1="8" y1="80" x2="32" y2="80" stroke="#FAFAF8" strokeWidth="0.5" />
        <line x1="128" y1="80" x2="152" y2="80" stroke="#FAFAF8" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 text-right">
        <div className="w-10 h-[1px] bg-[#2F5D50] ml-auto mb-6" />
        <span className="text-[#FAFAF8]/20 text-[10px] tracking-[0.35em] uppercase font-medium block">
          CERA Hardware
        </span>
        <span className="text-[#FAFAF8]/20 text-[10px] tracking-[0.35em] uppercase font-medium block mt-1">
          Authorized Dealer
        </span>
      </div>
    </div>
  );
}

export function HardwareSection() {
  return (
    <section id="hardware" className="bg-[#FAFAF8] border-t border-[#D1D5DB]">
      {/* Full-bleed editorial layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[780px]">
        {/* Left: Image / Dark editorial panel */}
        <div className="relative bg-[#1A1917] min-h-[480px] lg:min-h-full overflow-hidden">
          <Image
  src="/interior-hardware.png"
  alt="Luxury CERA bathroom fittings"
  fill
  priority
  className="object-cover"
/>

<div className="absolute inset-0 bg-black/15" />
          {/* Large serif watermark */}
          <span className="absolute bottom-6 left-8 font-serif text-[#FAFAF8]/5 text-[8rem] leading-none select-none pointer-events-none">
            CERA
          </span>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-10 lg:px-20 py-24">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2F5D50]" />
            <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
              Authorized CERA Dealer
            </span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-[#111111] leading-[1.05] tracking-tight mb-6">
            CERA Hardware.
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-sm mb-16">
            Precision-crafted bathroom fittings, faucets, and sanitaryware.
            CERA products are specified by architects across India for their
            exacting standards and enduring design language.
          </p>

          {/* Catalog list */}
          <div className="space-y-0">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="flex items-start gap-6 py-5 border-b border-[#D1D5DB] group cursor-default"
              >
                <span className="text-[#D1D5DB] font-serif text-sm mt-0.5 w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-xl text-[#111111] leading-snug group-hover:text-[#2F5D50] transition-colors duration-300">
                    {cat.title}
                  </p>
                  <p className="text-[#6B7280] text-xs tracking-wide mt-1 italic">
                    {cat.descriptor}
                  </p>
                </div>
                <span className="text-[#D1D5DB] group-hover:text-[#2F5D50] transition-colors duration-300 mt-0.5 flex-shrink-0">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-4 bg-[#111111] text-[#FAFAF8] px-8 py-4 hover:bg-[#2F5D50] transition-all duration-400"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase">
                Enquire About CERA
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform text-sm">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
