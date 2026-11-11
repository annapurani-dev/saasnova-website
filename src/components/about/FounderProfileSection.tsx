"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FOUNDER_PILLARS = [
  {
    title: "Execution, not advisory.",
    body: "Every program has named, documented deliverables, not recommendations.",
  },
  {
    title: "True multi-cloud depth.",
    body: "AWS, Azure, and GCP are equally supported, not afterthoughts.",
  },
  {
    title: "Board-visible output.",
    body: "Every program produces a clear pipeline report boards and investors can present directly.",
  },
];

export default function FounderProfileSection() {
  return (
    <section
      id="founder"
      data-nav-title="CEO & Founder"
      data-nav-subtitle="Jen Dawson Story"
      className="relative px-3 py-5 sm:px-6 lg:px-8 lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center scroll-mt-28"
    >
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl w-full">
        <div className="card-3d-master relative rounded-[2.25rem] p-5 sm:p-7 lg:p-9 overflow-hidden">
          {/* Subtle top specular accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#008BF8]/70 via-[#FA0F9C]/70 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-center relative z-10">
            {/* ── LEFT COLUMN: COMPACT 3D PORTRAIT & PROOF CHIPS ── */}
            <div className="lg:col-span-5 space-y-3">
              <div className="well-recessed rounded-3xl p-2.5 sm:p-3 max-w-[380px] mx-auto lg:max-w-none relative">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-slate-100 border border-white/90 shadow-md">
                  <Image
                    src="/jen-headshot.png"
                    alt="Jen Dawson, Founder and CEO of SaaSNova"
                    width={800}
                    height={800}
                    priority
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[50%_15%]"
                  />

                  {/* Bottom-Right Floating 3D Experience Chip */}
                  <div className="card-3d absolute bottom-2.5 right-2.5 rounded-xl px-3.5 py-2 bg-white/95 backdrop-blur-md">
                    <div className="text-lg sm:text-xl font-black text-[#008BF8] leading-none">
                      25+
                    </div>
                    <div className="text-[10.5px] font-bold text-slate-600 mt-0.5">
                      Years Cloud GTM
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 Compact Raised Proof Keycaps Below Portrait */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-w-[380px] mx-auto lg:max-w-none">
                <div className="card-3d px-3.5 py-2.5 rounded-2xl flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">
                      AWS · Azure · GCP
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Multi-cloud execution
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span title="Amazon Web Services" className="icon-3d inline-flex items-center justify-center h-7 px-2 rounded-lg">
                      <Image src="/aws-logo.png" alt="AWS" width={16} height={16} className="h-3 w-auto object-contain" />
                    </span>
                    <span title="Microsoft Azure" className="icon-3d inline-flex items-center justify-center h-7 px-2 rounded-lg">
                      <Image src="/azure-logo.png" alt="Azure" width={16} height={16} className="h-3 w-auto object-contain" />
                    </span>
                    <span title="Google Cloud" className="icon-3d inline-flex items-center justify-center h-7 px-2 rounded-lg">
                      <Image src="/gcp-logo.png" alt="GCP" width={16} height={16} className="h-3 w-auto object-contain" />
                    </span>
                  </div>
                </div>

                <div className="card-3d px-3.5 py-2.5 rounded-2xl flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">
                      100+ ISVs Activated
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      New Relic, Druva, Freshworks &amp; more
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200/80 text-[10px] font-mono font-bold text-[#FA0F9C] shrink-0">
                    PROVEN SCALE
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: THE SAASNOVA STORY & EXECUTION PILLARS ── */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                  THE SAASNOVA STORY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[32px] font-black text-slate-900 tracking-tight leading-[1.15]">
                  Why execution, not advice, is the only thing that produces pipeline.
                </h2>
              </div>

              {/* Highlighted Pull Quote in 3D Card */}
              <div className="card-3d rounded-2xl p-4 sm:p-5 relative overflow-hidden">
                <div className="btn-gradient absolute left-0 inset-y-0 w-1.5 rounded-r-full" />
                <blockquote className="pl-3 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed italic">
                  &ldquo;Every ISV I worked with faced the same pattern: listed on AWS, Azure, or GCP; submissions filed; cloud field teams unresponsive; and nothing attributable showing up at the board level. I fell in love with this problem because it was universal and absolutely solvable. SaaSNova exists because this isn&apos;t a marketplace problem. It&apos;s an execution problem across the entire cloud GTM motion.&rdquo;
                </blockquote>
                <div className="pl-3 mt-2 text-xs font-bold text-slate-900">
                  Jen Dawson, <span className="text-slate-500 font-semibold">Founder &amp; CEO, SaaSNova</span>
                </div>
              </div>

              {/* Narrative Copy */}
              <div className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                <p>
                  After years embedded in cloud ecosystems, building marketplace programs on AWS, managing ISV Accelerate motions, and developing the field relationships that drive momentum on Azure and GCP, Jen founded SaaSNova to fill a gap no platform or consultancy was filling: operator-led execution.
                </p>
                <p>
                  Platforms give ISVs listing infrastructure. Consultancies give ISVs frameworks. Neither drives field enablement, activates partner programs, or unlocks marketplace momentum. SaaSNova does all of it, directly, as an embedded operator with clear deliverables in every program period.
                </p>
              </div>

              {/* 3 Proof Pillars Inside Recessed Well */}
              <div className="well-recessed rounded-2xl p-3.5 sm:p-4 space-y-2">
                {FOUNDER_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-2.5">
                    <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mt-0.5 shadow-[0_1.5px_0_#a7f3d0]">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                      <strong className="text-slate-900">{pillar.title}</strong> {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
