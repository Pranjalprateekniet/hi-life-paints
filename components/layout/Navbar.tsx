"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "The Studio", href: "/#studio" },
  { label: "Paints", href: "/#paints" },
  { label: "Hardware", href: "/#hardware" },
  { label: "Visit Us", href: "/#visit-us" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    const isHash = href.startsWith("/#");
    if (!isHash) return;

    const id = href.replace("/#", "");
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    // If not on homepage, let the href navigate naturally (browser will scroll on load)
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAFAF8]/98 shadow-[0_1px_0_0_#D1D5DB]"
            : "bg-[#FAFAF8]/95"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl tracking-widest text-[#111111] hover:text-[#2F5D50] transition-colors duration-300 uppercase"
          >
            Hi-Life Paints
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-xs font-medium tracking-[0.2em] uppercase text-[#111111] hover:text-[#2F5D50] transition-colors duration-300 group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2F5D50] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 relative z-60"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`w-6 h-[1px] bg-[#111111] block transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-[#111111] block transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-[#111111] block transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAFAF8] flex flex-col justify-center px-10 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-10" aria-label="Mobile primary">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-serif text-4xl text-[#111111] hover:text-[#2F5D50] transition-colors duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `color 0.3s, transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile footer */}
        <div className="absolute bottom-12 left-10 right-10">
          <div className="w-8 h-[1px] bg-[#2F5D50] mb-6" />
          <p className="text-[#4B5563] text-xs tracking-widest uppercase">
            Hi-Life Paints · Ranchi, Jharkhand
          </p>
        </div>
      </div>
    </>
  );
}
