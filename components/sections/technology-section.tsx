"use client";

import { useEffect, useRef, useState } from "react";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Slower animation - more viewport range
      const startOffset = windowHeight * 0.9;
      const endOffset = windowHeight * 0.1;

      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;

      const newProgress = Math.max(
        0,
        Math.min(1, currentPosition / totalDistance),
      );
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-3xl font-semibold leading-snug md:text-4xl lg:text-5xl"
    >
      {words.map((word, index) => {
        const wordProgress = index / words.length;
        const isRevealed = progress > wordProgress;

        return (
          <span
            key={index}
            className="transition-colors duration-150"
            style={{
              color: isRevealed ? "var(--foreground)" : "#e4e4e7",
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

// const sideImages = [
//   {
//     src: "/images/meet-kama.jpeg",
//     alt: "Public city bus",
//     position: "left",
//     span: 1,
//   },
//   {
//     src: "/images/meet-kama.jpeg",
//     alt: "Sleek passenger van",
//     position: "left",
//     span: 1,
//   },
//   {
//     src: "/images/meet-kama.jpeg",
//     alt: "Modern SUV",
//     position: "right",
//     span: 1,
//   },
//   {
//     src: "/images/meet-kama.jpeg",
//     alt: "Heavy logistics truck",
//     position: "right",
//     span: 1,
//   },
// ];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textProgress, setTextProgress] = useState(0);

  const businessCases = [
    {
      title: "For Farmers",
      description:
        "EW1 is ideal with its 10ft cargo bed — perfect for long tools and bulk produce.",
    },
    {
      title: "For Delivery Services",
      description:
        "EW2’s longer range (280km) supports city-to-city transport on a single charge.",
    },
    {
      title: "For Shop Owners",
      description:
        "Both are cost-effective, but EW2 offers better value if your deliveries are frequent and range matters.",
    },
  ];

  const technicalComparison = [
    { label: "Price", ew1: "NPR 25.90 Lakhs", ew2: "NPR 25.70 Lakhs" },
    { label: "Driving Range", ew1: "260 KM", ew2: "280 KM" },
    { label: "Cargo Bed Size", ew1: "10 Feet", ew2: "8.5 Feet" },
    { label: "Payload Capacity", ew1: "1.5 Tons", ew2: "1.5 Tons" },
    {
      label: "Charging Type",
      ew1: "AC/DC Fast & Standard",
      ew2: "AC/DC Fast & Standard",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);

      // Text scroll progress
      if (textSectionRef.current) {
        const textRect = textSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const startOffset = windowHeight * 0.9;
        const endOffset = windowHeight * 0.1;

        const totalDistance = startOffset - endOffset;
        const currentPosition = startOffset - textRect.top;

        const newTextProgress = Math.max(
          0,
          Math.min(1, currentPosition / totalDistance),
        );
        setTextProgress(newTextProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Title fades out first (0 to 0.2)
  const titleOpacity = Math.max(0, 1 - scrollProgress / 0.2);

  // Image transforms start after title fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - imageProgress * 0; // 100% to 42%
  const centerHeight = 100 - imageProgress * 30; // 100% to 70%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 50; // -100% to 0%
  const sideTranslateRight = 100 - imageProgress * 50; // 100% to 0%
  const borderRadius = imageProgress * 0; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  // Calculate grayscale for text section based on textProgress
  const grayscaleAmount = Math.round((1 - textProgress) * 100);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
          >
            {/* Main Center Image */}
            <div
              className="relative bg-background rounded-3xl overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <div className="absolute" />

              {/* Title Text - Fades out word by word with blur */}
              <div className="absolute inset-0 flex flex-col items-center bg-foreground/10 justify-center px-6 text-center">
                <h2 className="max-w-4xl font-medium leading-tight tracking-tight text-primary md:text-5xl lg:text-8xl text-5xl">
                  {[
                    "Precision",
                    "Engineering",
                    "for",
                    "Modern",
                    "Logistics.",
                  ].map((word, index) => {
                    // Each word fades out sequentially based on scrollProgress
                    const wordFadeStart = index * 0.04;
                    const wordFadeEnd = wordFadeStart + 0.05;
                    const wordProgress = Math.max(
                      0,
                      Math.min(
                        1,
                        (scrollProgress - wordFadeStart) /
                          (wordFadeEnd - wordFadeStart),
                      ),
                    );
                    const wordOpacity = 1 - wordProgress;
                    const wordBlur = wordProgress * 10; // 0px to 10px blur

                    return (
                      <span
                        key={index}
                        className="inline-block"
                        style={{
                          opacity: wordOpacity,
                          filter: `blur(${wordBlur}px)`,
                          transition: "opacity 0.1s linear, filter 0.1s linear",
                          marginRight: index < 2 ? "0.3em" : "0",
                        }}
                      >
                        {word}
                        {index === 1 && <br />}
                      </span>
                    );
                  })}
                </h2>
              </div>
            </div>

            {/* Right Column */}
            {/* <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%)`,
                opacity: sideOpacity,
              }}
            > */}
            {/* {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))} */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />

      {/* Description Section with Background Image and Scroll Reveal */}
      <div
        ref={textSectionRef}
        className="relative overflow-hidden bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
      >
        <div className="relative z-10 mx-auto max-w-6xl" id="compare">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-medium tracking-tight text-primary md:text-4xl lg:text-5xl mb-6">
              Which Kama EV Pickup Fits Your Business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {businessCases.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-border bg-secondary/30 text-left"
                >
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-32 ">
            <h3 className="text-2xl font-medium text-center mb-12">
              Kama EV EW1 vs EW2 – Full Technical Comparison
            </h3>
            <div className="overflow-x-auto rounded-3xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="p-6 font-medium text-muted-foreground border-b border-border">
                      Feature
                    </th>
                    <th className="p-6 font-semibold text-primary border-b border-border text-center">
                      Kama EV EW1
                    </th>
                    <th className="p-6 font-semibold text-primary border-b border-border text-center">
                      Kama EV EW2
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {technicalComparison.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-secondary/20 transition-colors"
                    >
                      <td className="p-6 text-muted-foreground font-medium">
                        {row.label}
                      </td>
                      <td className="p-6 text-primary text-center font-medium">
                        {row.ew1}
                      </td>
                      <td className="p-6 text-primary text-center font-medium">
                        {row.ew2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-sm text-center text-muted-foreground lowercase tracking-widest uppercase">
              * prices and specifications subject to change based on local
              conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
