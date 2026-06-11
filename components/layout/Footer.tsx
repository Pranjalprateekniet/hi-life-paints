import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "The Studio", href: "/#studio" },
    { label: "Paints", href: "/#paints" },
    { label: "Hardware", href: "/#hardware" },
    { label: "Visit Us", href: "/#visit-us" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#D1D5DB]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-[#D1D5DB]">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl text-[#111111] tracking-widest uppercase mb-2">
              HI LIFE
            </p>
            <p className="text-[#2F5D50] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
              Hi Living – Low Budget
            </p>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Ranchi's trusted destination for Nerolac paints, CERA hardware,
              and premium building materials for residential and commercial spaces.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#6B7280] text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Explore
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#111111]/80 text-sm hover:text-[#2F5D50] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#6B7280] text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Reach Us
            </p>
            <ul className="space-y-3 text-sm text-[#111111]/80">
              <li>Ranchi, Jharkhand</li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#2F5D50] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2F5D50] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>Mon–Sat: 10 AM – 8 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B7280]">
          <p>&copy; {year} HI LIFE. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#2F5D50]" />
            <span className="tracking-widest uppercase">
              Authorized Nerolac &amp; CERA Dealer · Ranchi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
