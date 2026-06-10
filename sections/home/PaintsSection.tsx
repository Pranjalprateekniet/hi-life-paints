import Image from "next/image";

const categories = [
  {
    index: "01",
    title: "Interior Paints",
    subtitle: "Living Spaces",
    description:
      "Curated emulsions and distempers that transform walls into quiet architectural statements. From chalky mattes to silken sheens — every finish matched to the light and life of the room.",
    imageSrc: "/interior-paints.png",
    href: "/#contact",
  },
  {
    index: "02",
    title: "Exterior Paints",
    subtitle: "Façade & Structure",
    description:
      "Weather-resistant formulations engineered for India's climate. Long-lasting protection against heat, rain, and humidity — without sacrificing the richness of colour.",
    imageSrc: "/exterior-paints.png",
    href: "/#contact",
  },
  {
    index: "03",
    title: "Wood Finishes",
    subtitle: "Timber & Joinery",
    description:
      "Lacquers, varnishes, and stains that honour the natural grain. Protective finishes for doors, furniture, and bespoke millwork that age beautifully.",
    imageSrc: "/wood-finishes.png",
    href: "/#contact",
  },
  {
    index: "04",
    title: "Waterproofing-solutions",
    subtitle: "Foundation & Wet Areas",
    description:
      "Advanced waterproofing systems for terraces, bathrooms, and basements. Nerolac's proven chemistry keeps structures dry and protected from within.",
    imageSrc: "/waterproofing-solutions.png",
    href: "/#contact",
  },
];

function EditorialPlaceholder({ label, index }: { label: string; index: string }) {
  return (
    <div className="absolute inset-0 bg-[#1C1C1A] flex flex-col items-center justify-center">
      <span className="font-serif text-[#FAFAF8]/8 text-[9rem] absolute bottom-4 right-6 leading-none select-none">
        {index}
      </span>
      <div className="w-10 h-[1px] bg-[#2F5D50] mb-8" />
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-20 mb-5">
        <rect x="4" y="4" width="40" height="40" stroke="#FAFAF8" strokeWidth="0.75" />
        <rect x="12" y="12" width="24" height="24" stroke="#FAFAF8" strokeWidth="0.75" />
        <line x1="4" y1="24" x2="12" y2="24" stroke="#FAFAF8" strokeWidth="0.75" />
        <line x1="36" y1="24" x2="44" y2="24" stroke="#FAFAF8" strokeWidth="0.75" />
        <line x1="24" y1="4" x2="24" y2="12" stroke="#FAFAF8" strokeWidth="0.75" />
        <line x1="24" y1="36" x2="24" y2="44" stroke="#FAFAF8" strokeWidth="0.75" />
      </svg>
      <span className="text-[#FAFAF8]/25 text-[10px] tracking-[0.35em] uppercase font-medium">
        {label}
      </span>
      <div className="w-10 h-[1px] bg-[#2F5D50] mt-8" />
    </div>
  );
}

export function PaintsSection() {
  return (
    <section id="paints" className="bg-white border-t border-[#D1D5DB]">
      {/* Section Header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#2F5D50]" />
              <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
                Authorized Nerolac Dealer
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-[1.05] tracking-tight max-w-xl">
              Kansai Nerolac Paints.
            </h2>
          </div>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-xs lg:mb-2">
            Japanese paint technology, supplied locally. A complete range of
            architectural finishes for every surface and intent.
          </p>
        </div>
      </div>

      {/* Alternating Editorial Rows */}
      <div className="border-t border-[#D1D5DB]">
        {categories.map((cat, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <div
              key={cat.index}
              className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#D1D5DB]"
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden bg-[#111111]/5 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
                style={{ minHeight: "520px" }}
              >
                {cat.imageSrc ? (
                  <Image
                    src={cat.imageSrc}
                    alt={cat.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <EditorialPlaceholder label={cat.title} index={cat.index} />
                )}
                {/* Index watermark (only on real images) */}
                {cat.imageSrc && (
                  <div className="absolute top-6 left-6 font-serif text-[#FAFAF8]/20 text-7xl leading-none select-none pointer-events-none">
                    {cat.index}
                  </div>
                )}
                {/* Subtle top vignette */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#111111]/10 to-transparent pointer-events-none" />
              </div>

              {/* Text */}
              <a
                href={cat.href}
                className={`group flex flex-col justify-center px-10 lg:px-20 py-20 bg-white hover:bg-[#FAFAF8] transition-colors duration-500 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <p className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium mb-5">
                  {cat.subtitle}
                </p>
                <div className="w-8 h-[1px] bg-[#D1D5DB] mb-8" />
                <h3 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.1] mb-7 tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-[#4B5563] text-base leading-relaxed max-w-sm mb-12">
                  {cat.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs tracking-[0.25em] uppercase font-medium text-[#111111] group-hover:text-[#2F5D50] transition-colors duration-300">
                    Enquire Now
                  </span>
                  <svg
                    width="28"
                    height="10"
                    viewBox="0 0 28 10"
                    fill="none"
                    className="text-[#111111] group-hover:text-[#2F5D50] group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path
                      d="M1 5h26M22 1l5 4-5 4"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
