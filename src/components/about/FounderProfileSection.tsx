"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function FounderProfileSection() {
  return (
    <section
      id="founder"
      data-nav-title="CEO & Founder"
      data-nav-subtitle="Jen Dawson Story"
      style={{
        background: "linear-gradient(180deg, #070D1E 0%, #0A1228 50%, #050A16 100%)",
      }}
      className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 lg:pb-36 text-white scroll-mt-24 select-none overflow-hidden"
    >
      {/* ── Top Horizon Boundary Divider ── */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none z-20" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008BF8]/60 via-[#FA0F9C]/50 to-transparent opacity-90" />
      </div>

      {/* ── Central Radial Ambient Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1200px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.2)_0%,rgba(250,15,156,0.08)_40%,transparent_70%)] blur-[110px]"
      />

      <ScrollReveal once={false} variant="up" className="mx-auto max-w-6xl w-full relative z-10">
        
        {/* ════════════════════════════════════════════════════════════════════════════
            INTEGRATED 2-COLUMN SPREAD (STORY ARC)
            Left: Jen Dawson Cutout (jen-dp-cutout.png) with Ambient Gradient Aura
            Right:
              1. Title ("Meet Jen Dawson" - no dot, no line) & Subtitle
              2. Story Arc (3 High-End Cards):
                 - Who She Is Now
                 - Her Experience
                 - Her Philosophy
              3. The Quote (Authentic Founder Statement)
            ════════════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column (4 cols): Cutout Image with Luminous Back-Aura + Identity + Role ── */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative flex items-center justify-center">
              {/* Vibrant ambient gradient aura glow directly behind cutout */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-tr from-[#FA0F9C]/35 via-[#008BF8]/40 to-cyan-400/30 blur-3xl opacity-90"
              />
              
              {/* Transparent Cutout of Jen Dawson (jen-dp-cutout.png) */}
              <div className="relative z-10 w-56 sm:w-64 lg:w-72">
                <Image
                  src="/jen-dp-cutout.png"
                  alt="Jen Dawson, Founder and CEO of SaaSNova"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>

            {/* Direct Name, Byline, & Current Role Under Image */}
            <div className="space-y-1.5 max-w-[300px]">
              <h3 className="text-2xl sm:text-[26px] font-black text-white tracking-tight">
                Jen Dawson
              </h3>
              <p className="text-sm sm:text-[15px] font-bold text-[#008BF8]">
                Founder &amp; CEO, SaaSNova
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-normal pt-0.5">
                Leading multi-cloud GTM operations across AWS, Azure, and Google Cloud
              </p>
            </div>
          </div>

          {/* ── Right Column (8 cols): Headline + Manifesto Quote with Top-Right " + 2-Column Console ── */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Clean Headline (No Period, No Line Below) */}
            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.12]">
                Meet Jen Dawson
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-medium">
                A visionary leader driving SaaSNova&apos;s growth and impact
              </p>
            </div>

            {/* Prominent Manifesto Quote with Brand Blue Accent Line & Transparent Top-Right Quotation Mark */}
            <div className="relative pl-6 sm:pl-7 border-l-[3px] border-[#008BF8]">
              {/* Subtle transparent quotation watermark at top-right */}
              <div
                aria-hidden="true"
                className="absolute -top-4 right-0 sm:right-2 text-6xl sm:text-7xl lg:text-8xl font-serif text-white/10 pointer-events-none select-none leading-none"
              >
                &rdquo;
              </div>

              <blockquote className="relative z-10 text-lg sm:text-xl lg:text-[22px] text-slate-100 font-medium leading-[1.6] tracking-tight italic font-sans pr-6 sm:pr-10">
                &ldquo;Every ISV I worked with faced the same pattern: listed on AWS, Azure, or GCP; submissions filed; cloud field teams unresponsive; and nothing visible about our work at the board level. I fell in love with this challenge.&rdquo;
              </blockquote>
            </div>

            {/* ── 2-Section Linear Story Console (Her Experience & Her Philosophy) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10 pt-6 border-t border-white/10">
              
              {/* Console 01: Her Experience */}
              <div className="sm:pr-8 py-4 sm:py-0 space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Her Experience
                </h4>
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
                  25+ years in cloud GTM · Former AWS Principal GTM Lead scaling 100+ marketplace ISVs
                </p>
              </div>

              {/* Console 02: Her Philosophy */}
              <div className="sm:pl-8 py-4 sm:py-0 space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Her Philosophy
                </h4>
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
                  Execution over advice · Hands-on field deliverables instead of theoretical slide decks
                </p>
              </div>

            </div>

          </div>

        </div>

      </ScrollReveal>

      {/* ── Signature Downward Curved Arc Wave Transition (Matching Live Site Hero Bottom) ── */}
      <div className="absolute -bottom-[1px] inset-x-0 w-full pointer-events-none z-20">
        <svg
          className="w-full h-10 sm:h-14 lg:h-20 text-white fill-current block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C360,65 1080,65 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
