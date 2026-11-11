"use client";

import { Store, ShieldCheck, Sparkles, Check } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function StorefrontLaunchSection() {
  return (
    <section id="what-we-built" className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28">
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
            OUR ROLE &amp; IMPACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            What We Built as an Official AWS Launch Partner
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            When AWS introduced Storefronts, SaaSNova worked closely alongside AWS product teams and enterprise ISVs to validate, launch, and prove the power of branded seller destinations.
          </p>
        </div>

        <div className="well-recessed rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <TiltCard variant="light" intensity={8} className="rounded-3xl p-8 space-y-4">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                DIGITAL BRAND PRESENCE
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Branded Seller Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Helped design and establish branded storefront hubs inside AWS Marketplace. Unified scattered listings into single, cohesive brand experiences that enterprise buyers can browse with confidence.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200/70">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Custom brand hub &amp; unified seller banner</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Consolidated multi-product catalog layout</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Enterprise buyer trust badges &amp; security links</span>
                </li>
              </ul>
            </TiltCard>

            {/* Pillar 2 */}
            <TiltCard variant="light" intensity={8} className="rounded-3xl p-8 space-y-4">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FA0F9C]">
                ECOSYSTEM ONBOARDING
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                ISV &amp; Ecosystem Enablement
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Assisted global software companies and emerging innovators through listing readiness, taxonomy alignment, and storefront launch, turning complex technical hurdles into smooth operational rollouts.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200/70">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hyperscaler taxonomy &amp; categorization alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tiered SaaS contract &amp; dimension pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Live transacting test purchase validation</span>
                </li>
              </ul>
            </TiltCard>

            {/* Pillar 3 */}
            <TiltCard variant="light" intensity={8} className="rounded-3xl p-8 space-y-4">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                OPERATOR-LED GTM
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Real-World Cloud Co-Selling
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connected marketplace storefronts with practical field execution—aligning opportunity registration, private offers, and AWS field sales teaming to build repeatable revenue momentum.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200/70">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Instant Private Offer generation engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>AWS ACE deal registration &amp; rep notification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Enterprise committed spend (EDP) drawdown readiness</span>
                </li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

