"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919334294300";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/23°21'14.5\"N+85°17'58.2\"E/@23.354023,85.2994919,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.354023!4d85.2994919";

const CATEGORIES = [
  "Interior Paints",
  "Exterior Paints",
  "Waterproofing Solutions",
  "Wood Finishes",
  "CERA Bathroom Fittings",
  "Faucets & Taps",
  "Sanitaryware",
  "Hardware Accessories",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  category: string;
  message: string;
}

interface ErrorState {
  name?: string;
  phone?: string;
  category?: string;
}

function buildWhatsAppUrl(form: FormState): string {
  const text = [
    "Hello Hi-Life Paints,",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Category: ${form.category}`,
    "",
    "Requirement:",
    form.message,
  ].join("\n");

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

// Shared input class to match existing design
const inputClass =
  "bg-transparent border-b border-[#D1D5DB] py-3 text-[#111111] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#2F5D50] transition-colors duration-300 text-sm w-full";

const labelClass =
  "text-[10px] tracking-[0.25em] uppercase text-[#6B7280] font-medium";

const errorClass = "text-[10px] tracking-[0.15em] text-red-500 mt-1 font-medium";

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ErrorState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: ErrorState = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!form.category) newErrors.category = "Please select a category.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const url = buildWhatsAppUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* ── Contact Section ───────────────────────────────────────────── */}
      <section id="contact" className="bg-[#FAFAF8] border-t border-[#D1D5DB]">
        {/* Header */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#2F5D50]" />
                <span className="text-[#2F5D50] text-xs tracking-[0.3em] uppercase font-medium">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-[1.05] tracking-tight">
                Building something{" "}
                <em className="not-italic text-[#4B5563]">new?</em>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[#4B5563] text-base leading-relaxed">
                Visit our store or speak with our team. We&apos;ll help you find
                the right finish, the right fitting, and the right approach for
                your project.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="border-t border-[#D1D5DB]">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <div className="space-y-14">
              {/* Location */}
              <div>
                <p className="text-[#6B7280] text-xs tracking-[0.25em] uppercase font-medium mb-4">
                  Location
                </p>
                <p className="font-serif text-2xl text-[#111111] mb-2">
                  Hi-Life Paints
                </p>
                <p className="text-[#4B5563] text-base leading-relaxed">
                  Deendayal Upadhyay Chowk,
                  <br />
                  Opposite V-Mart, Harmu Road,
                  <br />
                  Ranchi – 834001, Jharkhand
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[#2F5D50] text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
                >
                  <span>View on Google Maps</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="w-full h-[1px] bg-[#D1D5DB]" />

              {/* Hours */}
              <div>
                <p className="text-[#6B7280] text-xs tracking-[0.25em] uppercase font-medium mb-4">
                  Store Hours
                </p>
                <div className="space-y-2 text-sm text-[#111111]">
                  <div className="flex justify-between max-w-xs">
                    <span className="text-[#4B5563]">Monday – Saturday</span>
                    <span>10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-[#4B5563]">Sunday</span>
                    <span>10:30 AM – 12:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#D1D5DB]" />

              {/* Direct Contact */}
              <div>
                <p className="text-[#6B7280] text-xs tracking-[0.25em] uppercase font-medium mb-4">
                  Direct Contact
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919334294300"
                    className="block text-[#111111] text-base hover:text-[#2F5D50] transition-colors"
                  >
                    +91 93342 94300
                  </a>
                  <a
                    href={WHATSAPP_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#111111] text-base hover:text-[#2F5D50] transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:abhishek.rnc2778@gmail.com"
                    className="block text-[#111111] text-base hover:text-[#2F5D50] transition-colors"
                  >
                    abhishek.rnc2778@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: WhatsApp Inquiry Form */}
            <div>
              <p className="text-[#6B7280] text-xs tracking-[0.25em] uppercase font-medium mb-10">
                Send an Inquiry
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-name" className={labelClass}>
                    Name <span className="text-[#2F5D50]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className={errorClass}>{errors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone Number <span className="text-[#2F5D50]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 xxxxx xxxxx"
                    className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <span className={errorClass}>{errors.phone}</span>
                  )}
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-category" className={labelClass}>
                    Category <span className="text-[#2F5D50]">*</span>
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer appearance-none pr-6 ${
                      errors.category ? "border-red-400" : ""
                    } ${form.category === "" ? "text-[#D1D5DB]" : "text-[#111111]"}`}
                  >
                    <option value="" disabled hidden>
                      Select a category
                    </option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="text-[#111111]">
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <span className={errorClass}>{errors.category}</span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, what you're looking for, or any questions you have."
                    className={`${inputClass} resize-none leading-relaxed`}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-4 bg-[#111111] text-[#FAFAF8] px-8 py-4 hover:bg-[#2F5D50] transition-all duration-400"
                >
                  <span className="text-xs font-medium tracking-[0.2em] uppercase">
                    Get a Quote on WhatsApp
                  </span>
                  <span className="transform group-hover:translate-x-1 transition-transform text-sm">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Floating WhatsApp Button ───────────────────────────────────── */}
      <a
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hi-Life Paints on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111111] text-[#FAFAF8] px-5 py-3 shadow-lg hover:bg-[#2F5D50] transition-colors duration-300 group"
        style={{ borderLeft: "2px solid #2F5D50" }}
      >
        {/* WhatsApp icon (inline SVG — no extra dependency) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 shrink-0 text-[#2F5D50] group-hover:text-[#FAFAF8] transition-colors duration-300"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.454a.5.5 0 0 0 .612.612l5.608-1.471A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.878 9.878 0 0 1-5.031-1.374l-.36-.214-3.733.979.997-3.648-.235-.374A9.845 9.845 0 0 1 2.118 12C2.118 6.54 6.54 2.118 12 2.118S21.882 6.54 21.882 12 17.46 21.882 12 21.882z" />
        </svg>
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium whitespace-nowrap">
          Need Help? WhatsApp Us
        </span>
      </a>
    </>
  );
}
