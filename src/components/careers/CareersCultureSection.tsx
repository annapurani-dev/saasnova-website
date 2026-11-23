"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PLUS_PILLS = [
  {
    number: "01",
    title: "Remote & Flexible",
    badgeCls: "text-[#008BF8] bg-[#008BF8]/10 border-[#008BF8]/30",
    hoverBorder: "hover:border-[#008BF8]",
    shadowHover: "hover:shadow-[0_8px_24px_rgba(0,139,248,0.12)]",
  },
  {
    number: "02",
    title: "Hyperscaler Access",
    badgeCls: "text-[#FA0F9C] bg-[#FA0F9C]/10 border-[#FA0F9C]/30",
    hoverBorder: "hover:border-[#FA0F9C]",
    shadowHover: "hover:shadow-[0_8px_24px_rgba(250,15,156,0.12)]",
  },
  {
    number: "03",
    title: "Execution > Decks",
    badgeCls: "text-[#008BF8] bg-[#008BF8]/10 border-[#008BF8]/30",
    hoverBorder: "hover:border-[#008BF8]",
    shadowHover: "hover:shadow-[0_8px_24px_rgba(0,139,248,0.12)]",
  },
];

export default function CareersCultureSection() {
  return (
    <section
      id="culture"
      data-nav-title="Why Build Here"
      data-nav-subtitle="Operator Culture"
      className="relative px-4 sm:px-6 lg:px-8 py-5 sm:py-6 bg-transparent scroll-mt-24 border-b border-slate-200/60 select-none"
    >
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-5xl">
        <div className="space-y-3.5 text-center">
          {/* Small Heading */}
          <h3 className="text-xs sm:text-sm font-bold text-slate-600 tracking-tight uppercase tracking-wider">
            Why operators build here
          </h3>

          {/* Generous Executive Stadium Pills - Raised to fit screen */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {PLUS_PILLS.map((pill) => (
              <div
                key={pill.number}
                className={`inline-flex items-center gap-3 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)] ${pill.hoverBorder} ${pill.shadowHover} transition-all duration-200 cursor-default`}
              >
                <span
                  className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full border text-xs font-mono font-black tracking-wide ${pill.badgeCls}`}
                >
                  {pill.number}
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight">
                  {pill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
