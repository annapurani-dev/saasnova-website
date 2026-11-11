"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CAREERS_QUOTE, OPERATOR_PILLARS } from "./careersData";

const PILLAR_NUM_ACCENT = {
  sky: "text-[#008BF8] bg-sky-50 border-sky-200",
  pink: "text-[#FA0F9C] bg-pink-50 border-pink-200",
  slate: "text-slate-700 bg-slate-100 border-slate-200",
} as const;

const PILLAR_TOP_LINE = {
  sky: "from-[#008BF8]/80 via-cyan-300/60 to-transparent",
  pink: "from-[#FA0F9C]/80 via-pink-300/60 to-transparent",
  slate: "from-slate-400/70 via-slate-300/50 to-transparent",
} as const;

export default function CareersCultureSection() {
  return (
    <section
      id="culture"
      data-nav-title="Why Build Here"
      data-nav-subtitle="Culture & The Bar"
      className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
        <div className="card-3d-master relative rounded-[2.25rem] p-5 sm:p-8 lg:p-9 overflow-hidden select-none space-y-6">
          {/* Ambient Light Glows */}
          <div className="pointer-events-none absolute -top-24 right-1/4 w-80 h-56 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 w-80 h-56 rounded-full bg-pink-200/30 blur-3xl" />

          {/* Centered Header */}
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8] bg-sky-50 border border-sky-200">
              OPERATOR CULTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Why operators{" "}
              <span className="text-gradient">build here.</span>
            </h2>
          </div>

          {/* ROW 1: 3 Horizontal 3D Pillar Pills inside Recessed Tray */}
          <div className="relative z-10 well-recessed rounded-[1.75rem] p-3.5 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              {OPERATOR_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_0_#e2e8f0,0_4px_0_#cbd5e1,0_10px_18px_-4px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,1)] p-5 flex flex-col gap-3 relative overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r ${
                      PILLAR_TOP_LINE[pillar.accent]
                    }`}
                  />

                  <div className="flex items-center gap-2.5 pt-0.5">
                    <span
                      className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-black shrink-0 ${
                        PILLAR_NUM_ACCENT[pillar.accent]
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Jen Dawson's "THE BAR" Quote Banner Below All 3 Pills */}
          <div className="relative z-10 rounded-[1.75rem] bg-white border border-slate-200/90 shadow-[0_2px_0_#e2e8f0,0_4px_0_#cbd5e1,0_14px_28px_-6px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,1)] p-5 sm:p-6 lg:px-8 lg:py-6 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#FA0F9C]" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pt-1">
              {/* Quote Text */}
              <div className="space-y-2.5 flex-1">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                    {CAREERS_QUOTE.eyebrow}
                  </span>
                </div>
                <blockquote className="text-sm sm:text-base lg:text-[17px] italic font-medium text-slate-800 leading-relaxed">
                  {CAREERS_QUOTE.quote}
                </blockquote>
              </div>

              {/* Jen Attribution Divider & Card */}
              <div className="lg:border-l lg:border-slate-200/80 lg:pl-7 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-200/80 flex items-center gap-3.5 shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-[0_4px_12px_rgba(15,23,42,0.16)] shrink-0">
                  <Image
                    src="/jen-dp.jpg"
                    alt={CAREERS_QUOTE.author}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">
                    {CAREERS_QUOTE.author}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {CAREERS_QUOTE.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
