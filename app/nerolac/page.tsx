import Image from "next/image";
import Link from "next/link";

export default function NerolacPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-architectural relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-accent/20 text-accent border border-accent/30 mb-8 text-xs tracking-widest uppercase font-medium">
            Authorized Dealer
          </div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 max-w-4xl">
            Kansai Nerolac Paints.
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            As Ranchi's trusted authorized dealer, we provide the complete range of Nerolac architectural finishes, combining Japanese technology with Indian resilience.
          </p>
        </div>
        
        {/* Subtle decorative accent */}
        <div className="absolute right-0 top-0 w-1/4 h-full bg-accent/10 -z-10"></div>
      </section>

      {/* Product Categories */}
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Category 1 */}
            <div className="flex flex-col">
              <div className="aspect-square bg-contrast border border-white/10 mb-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                  [ Interior Emulsion ]
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-4">Interior Emulsions</h3>
              <p className="text-muted leading-relaxed mb-6">
                Premium washable finishes like Impressions 24 Carat and Excel Mica Marble. Engineered for flawless, smooth walls with high sheen and durability.
              </p>
              <span className="text-sm font-medium tracking-widest uppercase text-accent mt-auto pt-4 border-t border-architectural">
                View Specs
              </span>
            </div>

            {/* Category 2 */}
            <div className="flex flex-col lg:mt-16">
              <div className="aspect-square bg-contrast border border-white/10 mb-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                  [ Exterior Protection ]
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-4">Exterior Protection</h3>
              <p className="text-muted leading-relaxed mb-6">
                Weather-defying exterior paints including Excel Total and Suraksha Plus. Formulated to withstand extreme heat and monsoon rains.
              </p>
              <span className="text-sm font-medium tracking-widest uppercase text-accent mt-auto pt-4 border-t border-architectural">
                View Specs
              </span>
            </div>

            {/* Category 3 */}
            <div className="flex flex-col lg:mt-32">
              <div className="aspect-square bg-contrast border border-white/10 mb-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                  [ Enamels & Wood ]
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-4">Enamels & Wood Finishes</h3>
              <p className="text-muted leading-relaxed mb-6">
                High-gloss synthetic enamels and premium wood coatings (Wonderwood) to protect and enhance metal and timber surfaces.
              </p>
              <span className="text-sm font-medium tracking-widest uppercase text-accent mt-auto pt-4 border-t border-architectural">
                View Specs
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-32 px-6 bg-accent/20 border-y border-architectural">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Precision Color Matching</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
            Bring your fabric, tile, or inspiration image. Our advanced Nerolac tinting system can match over 2,000+ precise architectural shades in minutes.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-none hover:bg-contrast transition-colors"
          >
            <span className="text-sm font-medium tracking-widest uppercase">Visit the Store</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
