import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 max-w-4xl">
            The Studio.
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            Hi-Life Paints is more than a hardware supplier. We are a resource for architects, designers, and homeowners seeking uncompromising quality in Ranchi.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] bg-contrast border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                [ Studio Exterior / Interior ]
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 md:col-start-7 pt-12">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-6">Our Philosophy</h2>
            <h3 className="font-serif text-4xl mb-8 leading-[1.2]">
              We believe that the smallest details define the grandest spaces.
            </h3>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-sans">
              <p>
                Founded on the principle that building materials should not be an afterthought, Hi-Life Paints curates products that stand the test of time, both functionally and aesthetically.
              </p>
              <p>
                As an authorized dealer for Kansai Nerolac, we bring advanced Japanese paint technology to local projects, ensuring durability against the harsh Indian climate without compromising on color vibrancy.
              </p>
              <p>
                Beyond paints, our premium hardware selection is carefully sourced to provide tactile perfection. From solid brass door handles to silent concealed hinges, we understand that hardware is the interface between you and your architecture.
              </p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-architectural grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-serif mb-2 text-accent">20+</span>
                <span className="text-sm font-medium tracking-widest uppercase text-muted">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-serif mb-2 text-accent">2k+</span>
                <span className="text-sm font-medium tracking-widest uppercase text-muted">Precise Shades</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
