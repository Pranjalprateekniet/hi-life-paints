import Image from "next/image";

function ShowroomPlaceholder() {
  return (
    <div className="absolute inset-0 bg-[#1C1B18] overflow-hidden">
      {/* Architectural grid lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        {[...Array(8)].map((_, i) => (
          <div
            key={`v${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-[#FAFAF8]"
            style={{ left: `${(i + 1) * 11.1}%` }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`h${i}`}
            className="absolute left-0 right-0 h-[1px] bg-[#FAFAF8]"
            style={{ top: `${(i + 1) * 14.3}%` }}
          />
        ))}
      </div>
      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-[#2F5D50]/50" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-[#2F5D50]/50" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-[#2F5D50]/50" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-[#2F5D50]/50" />
      {/* Centre mark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-[1px] h-16 bg-[#FAFAF8]/10 mb-1" />
        <div className="w-16 h-[1px] bg-[#FAFAF8]/10" />
      </div>
      {/* Label */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center">
        <div className="w-6 h-[1px] bg-[#2F5D50] mb-4" />
        <span className="text-[#FAFAF8]/20 text-[9px] tracking-[0.4em] uppercase font-medium">
          HI LIFE Showroom
        </span>
      </div>
    </div>
  );
}

export function VisitUsSection() {
  return (
    <section id="visit-us" className="bg-[#FAFAF8] border-t border-[#D1D5DB]">
      {/* Asymmetric large layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Large image — 3/5 width */}
        <div className="relative lg:col-span-3 bg-[#F5F3EE] flex items-center justify-center p-8">
          <Image
            src="/showroomfronthd.png"
            alt="Hi-Life Showroom"
            width={1600}
            height={900}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content — 2/5 width */}
        <div className="lg:col-span-2 flex flex-col justify-center px-10 lg:px-16 py-24 bg-[#FAFAF8]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2F5D50]" />
            <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
              The Showroom
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.1] tracking-tight mb-6">
            Come and see it in person.
          </h2>

          <p className="text-[#4B5563] text-base leading-relaxed mb-12 max-w-xs">
            Paint colours on screens are approximations. Hardware finishes need
            to be held. Our showroom exists so you can make decisions with
            complete confidence.
          </p>

          {/* Details */}
          <div className="space-y-6 mb-14">
            <div>
              <p className="text-[#6B7280] text-xs tracking-[0.2em] uppercase font-medium mb-1">
                Hours
              </p>
              <p className="text-[#111111] text-sm leading-relaxed">
                Monday – Saturday: 10 AM – 7 PM
                <br />
                Sunday: 10:30am - 12:30pm
              </p>
            </div>
            <div>
              <p className="text-[#6B7280] text-xs tracking-[0.2em] uppercase font-medium mb-1">
                Location
              </p>
              <p className="text-[#111111] text-sm leading-relaxed">
                Deendayal Upadhyay Chowk,
                <br />
                Opposite V-Mart,
                <br />
                Harmu Road,
                <br />
                Ranchi – 834001,
                <br />
                Jharkhand
              </p>
            </div>
            <div>
              <p className="text-[#6B7280] text-xs tracking-[0.2em] uppercase font-medium mb-1">
                Phone
              </p>
              <a
                href="tel:+919334294300"
                className="text-[#111111] text-sm hover:text-[#2F5D50] transition-colors"
              >
                +91 9334294300
              </a>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 border border-[#111111] px-8 py-4 text-[#111111] hover:bg-[#111111] hover:text-[#FAFAF8] transition-all duration-400 w-fit"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase">
              Get Directions
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform text-sm">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Full-width bottom strip CTA */}
      <div className="border-t border-[#D1D5DB] bg-[#111111] px-6 lg:px-16 py-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-2xl text-[#FAFAF8]">
            Our doors are open. Come explore the range.
          </p>
          <a
            href="https://wa.me/919334294300"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[#FAFAF8] hover:text-[#2F5D50] transition-colors duration-300 flex-shrink-0"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase">
              WhatsApp Us
            </span>
            <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
