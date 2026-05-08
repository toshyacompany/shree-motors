"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[70%] transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl" : "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl"}`}
      style={{
        boxShadow:
          isScrolled || isMenuOpen
            ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
            : "none",
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-6 md:px-8 py-3">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2 relative z-50">
          <Image
            src="/logo.png"
            alt="Shree Motors Logo"
            width={60}
            height={60}
            className="object-contain scale-110 md:scale-140 mr-2"
          />
          <div className="hidden md:flex flex-col items-center">
            <h1
              className={`text-xl ${isScrolled ? "text-primary" : "text-background"}`}
            >
              {" "}
              Shree Motors
            </h1>
            <span
              className={`text-sm ${isScrolled ? "text-primary" : "text-background"}`}
            >
              Private Limited
            </span>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex text-lg">
          <Link
            href="#about"
            className={` transition-colors ${isScrolled ? "text-primary hover:text-white" : "text-background hover:text-primary"}`}
          >
            About
          </Link>
          <Link
            href="#highlights"
            className={` transition-colors ${isScrolled ? "text-primary hover:text-white" : "text-background hover:text-primary"}`}
          >
            Highlights
          </Link>
          <Link
            href="#specifications"
            className={` transition-colors ${isScrolled ? "text-primary hover:text-white" : "text-background hover:text-primary"}`}
          >
            Specifications
          </Link>
          <Link
            href="#compare"
            className={` transition-colors ${isScrolled ? "text-primary hover:text-white" : "text-background hover:text-primary"}`}
          >
            Compare
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#reserve"
            className={`px-6 py-4 transition-all rounded-2xl ${isScrolled ? "bg-primary text-background hover:opacity-80" : "bg-background text-foreground"}`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden relative z-50 ${isScrolled || isMenuOpen ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="#products"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#technology"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="#gallery"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#accessories"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              href="#reserve"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
