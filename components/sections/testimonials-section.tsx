"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl font-semibold leading-relaxed text-foreground/90 md:text-4xl  lg:leading-snug text-justify">
          श्री मोटर्स प्रा.लि. तपाईंको व्यापार र आवश्यकताहरूलाई ध्यानमा राखेर
          तयार पारिएको इलेक्ट्रिक लाइट कमर्सियल भेइकल (LCV) को विश्वसनीय वितरक
          हो। हामी Kama EV लाई नेपालका विभिन्न क्षेत्रहरू—जस्तै लजिस्टिक्स,
          स्वास्थ्य सेवा, खुद्रा, कृषि, निर्माण र पानी आपूर्ति—का लागि उपयुक्त
          विकल्पको रूपमा प्रस्तुत गर्छौं।
          <br /> <br /> At Shree Motors Pvt. Ltd., we are driven by the vision
          of transforming transportation in Nepal through sustainable,
          affordable, and high-performance electric vehicles. As the official
          distributor of Kama EV LCVs, we specialize in light commercial
          electric pickups that are built for Nepali roads—perfect for
          logistics, agriculture, water supply, healthcare, retail, and more.
          <br /> <br />
          With a strong commitment to innovation, after-sales support, and
          customer satisfaction, we empower businesses and individuals to make
          the smart shift to electric mobility.
          <br /> <br />
          Our mission is simple: to help Nepal drive into a cleaner,
          cost-effective future—one electric vehicle at a time. Join the EV
          revolution with Shree Motors — where power meets purpose.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="images/meet-kama.jpeg"
          alt="Mountain peaks at sunrise"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-background/10 to-transparent" />
      </div>
    </section>
  );
}
