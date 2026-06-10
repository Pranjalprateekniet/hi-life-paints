import Image from "next/image";
import Link from "next/link";

export default function HardwarePage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-architectural relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-foreground text-background mb-8 text-xs tracking-widest uppercase font-medium">
            Curated Selection
          </div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 max-w-4xl">
            Luxury Hardware.
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            The tactile touchpoints of your space. We supply premium, precision-engineered hardware that elevates the ordinary to the extraordinary.
          </p>
        </div>
      </section>

      {/* Hardware Grid */}
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
            <div className="aspect-[4/3] bg-contrast border border-white/10 relative group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                [ Mortise Handle Image ]
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl mb-6">Mortise Handles & Locks</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Solid brass, zinc alloy, and stainless steel handle sets. Available in matte black, brushed nickel, rose gold, and antique brass finishes to complement any interior door profile.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-muted mb-10">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> High-security cylinders</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Silent latch mechanisms</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 10-year finish warranty</li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl mb-6">Cabinet & Drawer Pulls</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Minimalist edge pulls, knurled bar handles, and classic cup pulls. Designed to add the perfect finishing detail to custom cabinetry, wardrobes, and kitchen units.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-muted mb-10">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Concealed fixings</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Multiple lengths available</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Fingerprint resistant coatings</li>
              </ul>
            </div>
            <div className="aspect-[4/3] bg-contrast border border-white/10 relative group overflow-hidden order-1 md:order-2">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                [ Cabinet Pull Image ]
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="aspect-[4/3] bg-contrast border border-white/10 relative group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                [ Hinge Image ]
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl mb-6">Architectural Hinges & Fittings</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Heavy-duty concealed hinges, soft-close mechanisms, and pivot hardware. The invisible foundation that ensures doors and panels operate with flawless precision.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide uppercase text-muted mb-10">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 3D adjustable concealed hinges</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Heavy door capacity</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Smooth ball-bearing action</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brands section */}
      <section className="py-20 px-6 border-t border-architectural bg-background">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-muted mb-12">Sourcing from industry leading manufacturers</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Brand placeholders */}
             <span className="font-serif text-2xl">Brand One</span>
             <span className="font-serif text-2xl">Premium Co.</span>
             <span className="font-serif text-2xl">Studio Hdw</span>
             <span className="font-serif text-2xl">Forge & Co</span>
          </div>
        </div>
      </section>
    </div>
  );
}
