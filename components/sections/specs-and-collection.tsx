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

const accessories = [
  {
    id: 1,
    name: "Luxury Sedan",
    description: "Premium comfort for your daily commute",
    price: "$45,000",
    image: "images/meet-kama.jpeg",
  },
  {
    id: 2,
    name: "Trekking Van",
    description: "Spacious and reliable for long journeys",
    price: "$35,000",
    image: "images/meet-kama.jpeg",
  },
  {
    id: 3,
    name: "Commercial Truck",
    description: "Powerful performance for heavy-duty tasks",
    price: "$65,000",
    image: "images/meet-kama.jpeg",
  },
];

export function SpecsAndCollection() {
  return (
    <section id="specification" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-12 text-center md:px-12 lg:px-20 shrink-0 z-10">
        <h2 className="text-4xl font-medium tracking-tight text-primary md:text-5xl lg:text-7xl">
          Vehicle Specifications.
        </h2>
      </div>

      <div className="border-t border-border mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-6">
          {[...cabinSpecs, ...buildSpecs].map((spec, index) => (
            <div
              key={spec.label}
              className={`p-10 text-center border border-border
                ${(index + 1) % 2 !== 0 ? "border-r" : ""} 
                lg:${(index + 1) % 6 !== 0 ? "border-r" : "border-r-0"}
              `}
            >
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-foreground">
                {spec.label}
              </p>
              <p className="font-medium text-primary text-3xl">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group flex-shrink-0 w-[75vw] snap-center"
            >
              {/* Image */}
              <div className="relative aspect-[2/2] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-primary">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 gap-4 px-6 md:grid-cols-3 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-primary text-2xl">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
