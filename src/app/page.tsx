"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Check, ChevronRight } from "lucide-react";
import HeroFloat from "@/components/HeroFloat";
import TrustAndCredibility from "@/components/TrustAndCredibility";
import TheResourceGap from "@/components/TheResourceGap";
import HowWeExecute from "@/components/HowWeExecute";
import SolutionsHub from "@/components/SolutionsHub";
import StorefrontSection from "@/components/StorefrontSection";
import FinalCTA from "@/components/FinalCTA";
import ScrollReveal from "@/components/ScrollReveal";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* ══════════════════════════════════════════════════════════════
          SECTION 01: HERO (The World's First Operator-Led GTM Execution Engine)
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 pt-4 pb-12 sm:px-6 lg:px-8 scroll-mt-28 lg:scroll-mt-32" id="hero">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl h-[420px] bg-gradient-to-b from-[#008BF8]/15 via-[#7C3AED]/10 to-transparent blur-3xl" />

        {/* Master Glassmorphic Hero Card with 3D Raised Depth */}
        <div className="card-3d-master relative z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/90 bg-white/80 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl">
          {/* Prismatic Top Highlight Line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 via-pink-400/90 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Description & Actions (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)] border-b-2 border-b-slate-200 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Trusted by 100+ SaaS ISVs scaling with Hyperscalers</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight text-slate-900 leading-[1.12]">
                The World&apos;s First <br />
                <span className="text-gradient">Operator-Led GTM Execution Engine</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Scale your SaaS across AWS, Azure, and Google Cloud with dedicated fractional operators — we run co-sell, partner development, and marketplace motions so your listing becomes real pipeline and revenue.
              </p>

              {/* Hyperscaler 3D Raised Logo Keycaps */}
              <div className="flex items-center gap-3 pt-1">
                <div title="Amazon Web Services (AWS)" className="icon-3d flex items-center justify-center h-10 px-3.5 rounded-xl hover:-translate-y-0.5 transition-transform">
                  <Image src="/aws-logo.png" alt="AWS" width={24} height={24} className="h-4.5 w-auto object-contain" />
                </div>
                <div title="Microsoft Azure" className="icon-3d flex items-center justify-center h-10 px-3.5 rounded-xl hover:-translate-y-0.5 transition-transform">
                  <Image src="/azure-logo.png" alt="Azure" width={22} height={22} className="h-4.5 w-auto object-contain" />
                </div>
                <div title="Google Cloud Platform (GCP)" className="icon-3d flex items-center justify-center h-10 px-3.5 rounded-xl hover:-translate-y-0.5 transition-transform">
                  <Image src="/gcp-logo.png" alt="GCP" width={22} height={22} className="h-4.5 w-auto object-contain" />
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="group btn-gradient btn-3d inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-white text-sm font-bold cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 30-min Strategy Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="#solutions"
                  className="btn-3d inline-flex items-center justify-center gap-2 px-5 py-3.5 text-slate-700 rounded-2xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

            </div>

            {/* Right Column: Hero Video Player (Cols 8-12) */}
            <div className="lg:col-span-5">
              <HeroFloat />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 02: TRUST & CREDIBILITY (Unified Proof Engine)
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:min-h-[calc(100vh-4.75rem)] lg:flex lg:flex-col lg:justify-center border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32" id="trust">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <TrustAndCredibility />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 03: THE GTM CHALLENGE & TRANSFORMATION
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 lg:min-h-[calc(100vh-4.75rem)] lg:flex lg:flex-col lg:justify-center border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32" id="challenge">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <TheResourceGap />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 04: HOW SAASNOVA EXECUTES (The 4-Pillar Pipeline)
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:min-h-[calc(100vh-4.75rem)] lg:flex lg:flex-col lg:justify-center border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32" id="how-we-execute">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <HowWeExecute />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 05: SOLUTIONS & PROGRAMS (Unified Command Hub)
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:min-h-[calc(100vh-4.75rem)] lg:flex lg:flex-col lg:justify-center border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32" id="solutions">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <SolutionsHub />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 06: STOREFRONT (Official Launch Partner for AWS Marketplace)
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 py-8 sm:px-6 sm:py-12 lg:px-8 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32" id="storefront">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <StorefrontSection />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 07: FINAL EXECUTIVE CONVERSION CTA
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-12 sm:py-16 lg:py-20 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32" id="contact">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-4xl w-full">
          <FinalCTA />
        </ScrollReveal>
      </section>
    </div>
  );
}
