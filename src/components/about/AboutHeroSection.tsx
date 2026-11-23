"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const OPERATING_FOUNDATIONS = [
  {
    number: "01",
    title: "Execution, not advisory.",
    description: "Named deliverables and active field motion—never theoretical slide decks.",
    accent: "sky" as const,
  },
  {
    number: "02",
    title: "True multi-cloud depth.",
    description: "Equal operational depth across AWS, Azure, and Google Cloud ecosystems.",
    accent: "pink" as const,
  },
  {
    number: "03",
    title: "Board-visible output.",
    description: "Verifiable co-sell pipeline, partner alignment, and closed revenue.",
    accent: "sky" as const,
  },
];

export default function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      data-nav-title="About & Cloud"
      data-nav-subtitle="Execution Over Advice"
      className="relative px-4 sm:px-6 lg:px-8 min-h-[640px] lg:min-h-[700px] flex flex-col justify-center -mt-[60px] sm:-mt-[62px] pt-[86px] sm:pt-[96px] pb-12 sm:pb-16 overflow-hidden scroll-mt-28 lg:scroll-mt-32 select-none"
    >
      {/* ── Atmospheric Radial Floor Light beneath the Floating Stage ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[950px] lg:w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.18)_0%,rgba(186,230,253,0.25)_35%,rgba(250,15,156,0.06)_65%,transparent_80%)] blur-[90px]"
      />

      <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="relative mx-auto w-full">

          {/* ════════════════════════════════════════════════════════════════════════════
              SIGNATURE 3D ELEVATED ASYMMETRICAL STAGE (THE FIXED HERO BACKGROUND)
              Unified signature backdrop across all non-homepage hero sections:
              - 80px Top-Left & Bottom-Right / 24px Top-Right & Bottom-Left
              - Luminous sky-tint gradient (#BAE6FD -> #F2F8FE)
              - 3D top specular gleam + deep multi-tier elevation drop shadow
              ════════════════════════════════════════════════════════════════════════════ */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
              boxShadow:
                "0 35px 75px -15px rgba(15, 23, 42, 0.18), 0 18px 38px -10px rgba(0, 139, 248, 0.22), 0 4px 12px rgba(15, 23, 42, 0.06), inset 0 2px 1px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(0, 139, 248, 0.12)",
            }}
            className="relative overflow-hidden rounded-tl-[68px] sm:rounded-tl-[80px] rounded-br-[68px] sm:rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] px-6 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-12"
          >
            {/* Specular Ambient Glow inside Stage */}
            <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[260px] rounded-full bg-white/60 blur-[70px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-[460px] h-[300px] rounded-full bg-[#008BF8]/20 blur-[100px]" />

            <div className="relative z-10">
              {/* ── APPROACH 1: DYNAMIC 2-COLUMN SPLIT INSIDE THE SIGNATURE STAGE ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                {/* ── LEFT COLUMN (7 cols): Eyebrow, Left-Aligned Headline, Narrative & Cloud Badges ── */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                  {/* Eyebrow Pill — strictly "About SaaSNova" */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-sky-300/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8]" />
                    <span>About SaaSNova</span>
                  </div>

                  {/* Bold Left-Aligned Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.12]">
                    Why execution, not advice, is the only thing that{" "}
                    <span className="text-gradient">produces pipeline.</span>
                  </h1>

                  {/* Founding Thesis Narrative (Word-for-Word, Zero Additions) */}
                  <p className="text-sm sm:text-base lg:text-[16px] text-slate-700 leading-relaxed font-normal max-w-xl">
                    SaaSNova was founded to bridge the gap between passive listing software and high-level consultancies. We embed directly with B2B SaaS teams as boots-on-the-ground operators across AWS, Azure, and Google Cloud.
                  </p>

                  {/* 3 Hyperscaler Cloud Badges */}
                  <div className="pt-1 flex items-center">
                    <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/90 border border-sky-200/90 shadow-xs backdrop-blur-sm">
                      <span
                        title="Amazon Web Services"
                        className="inline-flex items-center justify-center h-8 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100"
                      >
                        <Image
                          src="/aws-logo.png"
                          alt="AWS"
                          width={18}
                          height={18}
                          className="h-4 w-auto object-contain"
                        />
                      </span>
                      <span
                        title="Microsoft Azure"
                        className="inline-flex items-center justify-center h-8 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100"
                      >
                        <Image
                          src="/azure-logo.png"
                          alt="Azure"
                          width={18}
                          height={18}
                          className="h-4 w-auto object-contain"
                        />
                      </span>
                      <span
                        title="Google Cloud"
                        className="inline-flex items-center justify-center h-8 px-2.5 rounded-lg bg-pink-50/70 border border-pink-100"
                      >
                        <Image
                          src="/gcp-logo.png"
                          alt="GCP"
                          width={18}
                          height={18}
                          className="h-4 w-auto object-contain"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT COLUMN (5 cols): The 3 Operating Foundations Vertical Deck ── */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
                  {OPERATING_FOUNDATIONS.map((pillar) => {
                    const isPink = pillar.accent === "pink";
                    const badgeCls = isPink
                      ? "text-[#FA0F9C] bg-pink-50 border-pink-200 shadow-2xs"
                      : "text-[#008BF8] bg-sky-50 border-sky-200 shadow-2xs";
                    const hoverBg = isPink ? "hover:bg-pink-50/50" : "hover:bg-sky-50/50";

                    return (
                      <div
                        key={pillar.number}
                        style={{
                          boxShadow:
                            "0 10px 25px -4px rgba(0, 139, 248, 0.12), 0 4px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1)",
                        }}
                        className={`rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 p-4.5 sm:p-5 ${hoverBg} transition-all duration-300 cursor-default`}
                      >
                        <div className="flex items-start gap-3.5">
                          <span
                            className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-mono font-black tracking-wide border shrink-0 mt-0.5 ${badgeCls}`}
                          >
                            {pillar.number}
                          </span>
                          <div className="space-y-1">
                            <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                              {pillar.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>

      {/* ── Precision Horizon Gradient Line Connecting to Journey Section ── */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none z-30" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA0F9C]/50 via-[#008BF8]/60 to-transparent opacity-90" />
      </div>
    </section>
  );
}