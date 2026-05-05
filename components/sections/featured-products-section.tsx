"use client";

import { FadeImage } from "@/components/fade-image";

const cabinSpecs = [
  { label: "Steering", value: "Power Steering" },
  { label: "Seating Capacity", value: "2 Persons" },
  { label: "Dashboard", value: "Digital Meter Display" },
  { label: "Cabin Type", value: "Enclosed Ventilated" },
  { label: "USB Charging", value: "Available" },
  { label: "Interior", value: "Durable Plastic" },
];

const buildSpecs = [
  { label: "Body Type", value: "Flatbed Pickup" },
  { label: "Bed Length", value: "8.5 ft" },
  { label: "Ground Clearance", value: "190 mm" },
  { label: "Tire Type", value: "Radial" },
  { label: "Doors", value: "2" },
  { label: "Headlight", value: "Halogen" },
];

const features = [
  {
    title: "Smart Temperature Control",
    description: "Innovation",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000",
  },
  {
    title: "Ultra-Light Carbon Frame",
    description: "Performance",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000",
  },
  {
    title: "Weather-Resistant Design",
    description: "Durability",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000",
  },
  {
    title: "Integrated GPS Tracking",
    description: "Navigation",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000",
  },
  {
    title: "Built-In LED Flashlight",
    description: "Visibility",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000",
  },
  {
    title: "Self-Heating Technology",
    description: "Comfort",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Engineered for Excellence.
          <br />
          Designed for Adventure.
        </h2>
        <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-primary mt-4">
          Vehicle Specification
        </p>
      </div>

      <div className="border-t border-border mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-6">
          {cabinSpecs.map((spec, index) => (
            <div
              key={spec.label}
              className={`p-10 text-center border-b border-border
                ${(index + 1) % 2 !== 0 ? "border-r" : ""} 
                lg:${(index + 1) % 6 !== 0 ? "border-r" : "border-r-0"}
              `}
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {spec.label}
              </p>
              <p className="font-medium text-foreground text-3xl">
                {spec.value}
              </p>
            </div>
          ))}
          {buildSpecs.map((spec, index) => (
            <div
              key={spec.label}
              className={`p-10 text-center border-b border-border
                ${(index + 1) % 2 !== 0 ? "border-r" : ""} 
                lg:${(index + 1) % 6 !== 0 ? "border-r" : "border-r-0"}
              `}
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {spec.label}
              </p>
              <p className="font-medium text-foreground text-3xl">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
