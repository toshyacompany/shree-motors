"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    title: "Motor Power",
    description:
      "Delivers strong, efficient torque ideal for heavy loads and Nepali roads.",
    specs: [
      { label: "Torque", value: "High torque" },
      { label: "Voltage", value: "72V motor" },
      { label: "Drive Feel", value: "Smooth drive" },
      { label: "Support", value: "Hill support" },
      { label: "Care", value: "Low maintenance" },
      { label: "Durability", value: "Long-lasting" },
    ],
  },
  {
    title: "Wheels & Tires",
    description:
      "Fitted with radial tires for stability, grip, and long-lasting performance.",
    specs: [
      { label: "Tire", value: "Radial tires" },
      { label: "Grip", value: "Strong grip" },
      { label: "Life", value: "Long life" },
      { label: "Material", value: "Steel rims" },
      { label: "Traction", value: "Wet traction" },
      { label: "Condition", value: "Nepal-ready" },
    ],
  },
  {
    title: "Ground Clearance",
    description:
      "190 mm clearance gives you confidence on uneven roads and off-road tracks.",
    specs: [
      { label: "Clearance", value: "190 mm" },
      { label: "Terrain", value: "Off-road ready" },
      { label: "Bottoming", value: "No scraping" },
      { label: "Obstacles", value: "Road bumps? No" },
      { label: "Control", value: "Stable handling" },
      { label: "Adaptability", value: "Extra height" },
    ],
  },
  {
    title: "Suspension",
    description:
      "Durable suspension system designed for rough terrains and city bumps alike.",
    specs: [
      { label: "Type", value: "Leaf spring" },
      { label: "Comfort", value: "Smooth ride" },
      { label: "Support", value: "Load stability" },
      { label: "Terrain", value: "Rugged roads" },
      { label: "Cabin Feel", value: "Vibration control" },
      { label: "Build", value: "Durable build" },
    ],
  },
  {
    title: "Load Space",
    description:
      "EW1 offers 10 ft, EW2 offers 8.5 ft bed—both built for serious hauling.",
    specs: [
      { label: "Capacity", value: "1.5 tons" },
      { label: "EW1", value: "10 ft" },
      { label: "EW2", value: "8.5 ft" },
      { label: "Platform", value: "Steel bed" },
      { label: "Hooks", value: "Tie hooks" },
      { label: "Access", value: "Easy load" },
    ],
  },
  {
    title: "Charging",
    description:
      "Supports both AC and DC charging—full charge in just 8–10 hours.",
    specs: [
      { label: "Port", value: "AC/DC support" },
      { label: "Time", value: "Fast charging" },
      { label: "Plug-in", value: "Home socket" },
      { label: "Efficiency", value: "Energy saving" },
      { label: "Fuel", value: "Fuel-free" },
      { label: "Safety", value: "Safe battery" },
    ],
  },
  {
    title: "Turning Radius",
    description:
      "Tight 5.2-meter turning radius ensures easy maneuvering in narrow streets.",
    specs: [
      { label: "Radius", value: "5.2 meters" },
      { label: "Turning", value: "Easy U-turn" },
      { label: "Access", value: "Narrow lanes" },
      { label: "Mobility", value: "Tight spots" },
      { label: "Reverse", value: "Smooth reverse" },
      { label: "Steering", value: "Agile turning" },
    ],
  },
];

export function VehicleHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the total horizontal scroll distance.
  // We have N items each taking 100vw.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(highlights.length - 1) * 100}vw`],
  );

  return (
    <section
      ref={containerRef}
      // h-[calc(highlights.length*100vh)] ensures the scroll duration matches the number of items.
      className="relative bg-background"
      style={{ height: `${highlights.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Section Title - Fixed at top of sticky container */}
        <div className="px-6 py-12 text-center md:px-12 lg:px-20 shrink-0 z-10">
          <h2 className="text-4xl font-medium tracking-tight text-primary md:text-5xl lg:text-7xl">
            Vehicle Highlights.
          </h2>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex-1 relative">
          <motion.div style={{ x }} className="flex h-[70vh] w-fit">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="w-screen h-full flex items-center justify-center shrink-0 px-6 md:px-12 lg:px-20"
              >
                <HighlightItem highlight={highlight} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HighlightItem({
  highlight,
  index,
}: {
  highlight: (typeof highlights)[0];
  index: number;
}) {
  return (
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col space-y-16 text-center"
      >
        <div className="space-y-6">
          <h3 className="text-4xl font-medium text-primary md:text-6xl lg:text-8xl">
            {highlight.title}
          </h3>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {highlight.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-border pt-16">
          {highlight.specs.map((spec) => (
            <div key={spec.label} className="group flex flex-col items-center">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 group-hover:text-primary transition-colors">
                {spec.label}
              </p>
              <p className="text-2xl md:text-3xl font-medium text-primary">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
