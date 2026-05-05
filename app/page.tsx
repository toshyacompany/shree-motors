import { Header } from "@/components/header";
import { AboutVehicle } from "@/components/sections/about-vehicle";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SpecsAndCollection } from "@/components/sections/specs-and-collection";
import { TechnologySection } from "@/components/sections/technology-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { VehicleHighlights } from "@/components/sections/vehicle-highlights";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutVehicle />
      <VehicleHighlights />
      <SpecsAndCollection />
      <TechnologySection />
      {/* <PhilosophySection /> */}
      {/* <FeaturedProductsSection /> */}
      {/* <GallerySection /> */}
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
