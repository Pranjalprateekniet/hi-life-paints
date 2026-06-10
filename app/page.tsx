import { HeroSection } from "@/sections/home/HeroSection";
import { StudioSection } from "@/sections/home/StudioSection";
import { PaintsSection } from "@/sections/home/PaintsSection";
import { HardwareSection } from "@/sections/home/HardwareSection";
import { WhyHiLifeSection } from "@/sections/home/WhyHiLifeSection";
import { VisitUsSection } from "@/sections/home/VisitUsSection";
import { ContactSection } from "@/sections/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <HeroSection />
      <StudioSection />
      <PaintsSection />
      <HardwareSection />
      <WhyHiLifeSection />
      <VisitUsSection />
      <ContactSection />
    </div>
  );
}
