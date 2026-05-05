"use client";

import { FadeImage } from "@/components/fade-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Personal info */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-full md:w-64 aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <FadeImage
                  src="/images/md-profile.jpg" // Note: User needs to add this image
                  alt="Sushant Chand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-3xl font-medium text-primary">
                    Sushant Chand
                  </h3>
                  <p className="text-foreground font-medium italic">
                    Managing Director
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  I am Sushant Chand, Managing Director of Shree Motors Pvt.
                  Ltd. With a passion for innovation and sustainability, I'm
                  committed to bringing practical and eco-friendly electric
                  vehicle solutions to Nepal.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="text-xl font-medium text-primary hover:text-primary/80 transition-colors">
                    <a href="tel:+9779851408883">+977 9851408883</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="text-xl font-medium text-primary hover:text-primary/80 transition-colors">
                    <a href="mailto:MD@shreemotorsnp.com">
                      MD@shreemotorsnp.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="text-xl font-medium text-primary hover:text-primary/80 transition-colors">
                    <a
                      href="https://maps.app.goo.gl/HdS1VDwAhhXugy357"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ravi Bhawan Kalimati, Kathmandu, Nepal
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-secondary/30 p-8 md:p-12 lg:p-16 rounded-[2rem] border border-border">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                For Inquiry
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-primary">
                CONTACT <span className="font-light italic">US</span>
              </h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <Input
                  placeholder="Full Name"
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 h-14 text-lg focus-visible:ring-0 focus-visible:border-primary transition-all"
                />
              </div>
              <div className="space-y-1">
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 h-14 text-lg focus-visible:ring-0 focus-visible:border-primary transition-all"
                />
              </div>
              <div className="space-y-1 pt-4">
                <Textarea
                  placeholder="Message"
                  className="bg-transparent border border-border rounded-xl p-4 min-h-[150px] text-lg focus-visible:ring-0 focus-visible:border-primary transition-all"
                />
              </div>
              <Button
                size="lg"
                className="w-full md:w-auto px-12 py-7 text-lg rounded-xl mt-4"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
