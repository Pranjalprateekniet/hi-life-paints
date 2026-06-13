import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-architectural relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 max-w-4xl">
            Contact.
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            Visit our studio in Ranchi to experience our premium paints and hardware collections firsthand, or reach out to discuss your architectural project.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info Side */}
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-12">Studio Details</h2>

            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-2xl mb-4 text-accent">Location</h3>
                <p className="text-lg leading-relaxed max-w-sm">
                  HI LIFE<br />
                  123 Architectural Road<br />
                  Ranchi, Jharkhand 834001<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-4 text-accent">Hours</h3>
                <div className="text-lg leading-relaxed space-y-2">
                  <div className="flex justify-between max-w-xs border-b border-architectural pb-2">
                    <span className="text-muted">Monday - Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs border-b border-architectural pb-2">
                    <span className="text-muted">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl mb-4 text-accent">Direct Contact</h3>
                <p className="text-lg leading-relaxed">
                  <a href="mailto: abhishek.rnc2778@gmail.com" className="block hover:text-accent transition-colors mb-2">hello@hilifepaints.com</a>
                  <a href="tel: +919334294300" className="block hover:text-accent transition-colors">+91 93342 94300</a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-contrast p-10 md:p-16 text-background">
            <h2 className="text-sm font-medium tracking-widest uppercase text-background/50 mb-12">Inquiry Form</h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs tracking-widest uppercase text-background/70">First Name</label>
                  <input type="text" id="firstName" className="bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs tracking-widest uppercase text-background/70">Last Name</label>
                  <input type="text" id="lastName" className="bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs tracking-widest uppercase text-background/70">Email Address</label>
                <input type="email" id="email" className="bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-xs tracking-widest uppercase text-background/70">Project Details / Inquiry</label>
                <textarea id="project" rows={4} className="bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="mt-8 bg-background text-foreground px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-accent transition-colors w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
