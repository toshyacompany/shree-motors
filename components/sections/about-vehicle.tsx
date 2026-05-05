"use client";

import Image from "next/image";

const specs = [
  { label: "Model Year", value: "2024" },
  { label: "Seating Capacity", value: "2" },
  { label: "Charging Time", value: "8–10 hrs" },
  { label: "Cargo Bed Size", value: "10FT" },
  { label: "Motor Power", value: "70 KW" },
  { label: "Load Capacity", value: "1.5 Tons" },
];

export function AboutVehicle() {
  return (
    <section className="bg-background">
      {/* Newsletter Banner */}

      {/* Decorative Icons */}
      <div className="flex items-center justify-center gap-6 pb-20"></div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-3 lg:grid-cols-6">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0 lg:[&:nth-child(6)]:border-r-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-primary text-2xl md:text-4xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Video */}
      <div className="relative aspect-[16/12] w-full md:aspect-[21/9]">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/video.mp4"
        /> */}
        <Image
          src="/images/meet-kama.jpeg"
          alt="Kama EV electric vehicle in action"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>
    </section>
  );
}
