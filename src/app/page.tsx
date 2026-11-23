"use client";

import HeroSection from "@/components/HeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ExecutiveTestimonials from "@/components/ExecutiveTestimonials";
import ExecutionEngineSection from "@/components/ExecutionEngineSection";
import SolutionsHub from "@/components/SolutionsHub";
import StorefrontSection from "@/components/StorefrontSection";
import FinalCTA from "@/components/FinalCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* ══════════════════════════════════════════════════════════════
          SECTION 01: HERO (Operator-Led Cloud GTM Execution Engine)
         ══════════════════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 02: CLIENT LOGOS & AUTHORITY PROOF
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-3 py-5 sm:px-6 sm:py-6 lg:px-8 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32"
        id="trust"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <ClientLogosSection />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 03: HOW WE EXECUTE (The Operator Timeline & Roadmap)
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-3 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32"
        id="how-we-execute"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <ExecutionEngineSection />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 04: SOLUTIONS & PROGRAMS (Editorial Cockpit)
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-3 py-12 sm:px-6 sm:py-16 lg:px-8 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32"
        id="solutions"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full relative z-10">
          <SolutionsHub />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 05: EXECUTIVE TESTIMONIALS & PROVEN OUTCOMES
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-3 py-12 sm:px-6 sm:py-16 lg:px-8 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32"
        id="testimonials"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <ExecutiveTestimonials />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 06: STOREFRONT (Official Launch Partner for AWS Marketplace)
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-3 py-8 sm:px-6 sm:py-12 lg:px-8 border-t border-slate-200/60 scroll-mt-28 lg:scroll-mt-32"
        id="storefront"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
          <StorefrontSection />
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 07: FINAL EXECUTIVE CONVERSION CTA
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full scroll-mt-28 lg:scroll-mt-32"
        id="contact"
      >
        <FinalCTA />
      </section>
    </div>
  );
}
