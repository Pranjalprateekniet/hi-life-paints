const statements = [
  {
    num: "01",
    heading: "Curated, not collected.",
    body: "Every product on our shelves has been selected for a reason. We don't stock everything — we stock the right things. Nerolac's proven paint technology. CERA's precision hardware. Nothing more, nothing less.",
  },
  {
    num: "02",
    heading: "For people who care about the details.",
    body: "Our clients are architects, interior designers, builders, and homeowners who understand that the quality of materials is what separates a good space from a remarkable one. We serve that standard.",
  },
  {
    num: "03",
    heading: "Ranchi's specialist, not its generalist.",
    body: "We are not a paint shop. We are a material resource. When you need expert guidance on a finish, a color match, or the right fitting for a specific application — this is where you come.",
  },
];

export function StudioSection() {
  return (
    <section id="studio" className="bg-[#FAFAF8] border-t border-[#D1D5DB]">
      {/* Opening Editorial Block */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: sticky label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2F5D50]" />
              <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
                The Studio
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.1] tracking-tight mb-8">
              We believe the smallest details define the grandest spaces.
            </h2>
            <div className="w-12 h-[1px] bg-[#D1D5DB]" />
          </div>

          {/* Right: body copy */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-[#4B5563] text-lg leading-relaxed">
            <p>
              Hi-Life Paints was founded on a simple conviction: that building
              materials should never be an afterthought. The colour on your walls,
              the finish on your doors, the handle your hand reaches for a hundred
              times a day — these are not afterthoughts. They are the experience of
              a space.
            </p>
            <p>
              As an authorized dealer for Kansai Nerolac, we bring advanced
              paint technology to every project in Ranchi — engineered to
              withstand India's demanding climate without sacrificing the color
              depth and finish quality that designers specify. As a CERA hardware
              supplier, we offer precision-crafted fittings and sanitaryware that
              express intent in every touch.
            </p>
            <p>
              We work with architects, interior designers, contractors, and
              discerning homeowners. What they all share is a standard — and we
              exist to meet it.
            </p>
          </div>
        </div>
      </div>

      {/* Three Philosophy Statements */}
      <div className="border-t border-[#D1D5DB]">
        {statements.map((s, i) => (
          <div
            key={s.num}
            className={`max-w-screen-2xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
              i < statements.length - 1 ? "border-b border-[#D1D5DB]" : ""
            }`}
          >
            {/* Number */}
            <div className="lg:col-span-1">
              <span className="font-serif text-[#D1D5DB] text-3xl">{s.num}</span>
            </div>
            {/* Heading */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl lg:text-3xl text-[#111111] leading-snug">
                {s.heading}
              </h3>
            </div>
            {/* Body */}
            <div className="lg:col-span-6 lg:col-start-6">
              <p className="text-[#4B5563] text-base leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
