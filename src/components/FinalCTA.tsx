"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Mail } from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

export default function FinalCTA() {
  return (
    <div className="relative w-full bg-[#F0F7FF] border-t-2 border-sky-200/90 overflow-hidden">
      {/* ── PRISMATIC TOP HIGHLIGHT LINE ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#008BF8]/80 via-[#FA0F9C]/80 to-transparent" />

      {/* ── AMBIENT SOFT LIGHTING ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[280px] bg-gradient-to-b from-[#008BF8]/[0.1] via-[#FA0F9C]/[0.05] to-transparent blur-3xl -z-10"
      />

      {/* ── COMPACT FULL-WIDTH BANNER CONTAINER (MINIMAL HEIGHT · ATTACHED TO FOOTER) ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-11 lg:py-12 text-center">
        
        {/* Clean, Direct Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-900 leading-[1.18] max-w-2xl mx-auto mb-2.5">
          Ready to turn your listing into pipeline?
        </h2>

        {/* High-Trust Direct Subhead */}
        <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal max-w-xl mx-auto mb-6 sm:mb-7">
          Book a 30-minute discovery call. Jen reviews every submission personally and responds within 24 hours.
        </p>

        {/* Hero-Matched Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md mx-auto mb-5 sm:mb-6">
          
          {/* Primary CTA (Vivid Pink Gradient — Identical to Hero Section) */}
          <Link
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 h-[48px] sm:h-[50px] text-sm sm:text-[15px] font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_18px_rgba(250,15,156,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_26px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto"
          >
            <Calendar className="h-4 w-4 shrink-0" />
            <span>Book a 30-min Strategy Session</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Secondary CTA (Brand Blue Tint on Crisp White — Identical to Hero System) */}
          <Link
            href="mailto:jen@saasnova.ai?subject=Cloud%20GTM%20Discovery%20Call"
            className="group inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#008BF8]/30 bg-white hover:bg-slate-50 px-5 h-[48px] sm:h-[50px] text-sm sm:text-[15px] font-bold text-[#008BF8] whitespace-nowrap shadow-[0_2px_10px_rgba(0,139,248,0.08)] hover:shadow-[0_4px_16px_rgba(0,139,248,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto"
          >
            <Mail className="h-4 w-4 text-[#008BF8] shrink-0" />
            <span>Send a Message</span>
          </Link>

        </div>

        {/* Direct Contact Details Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-medium text-slate-500 pt-3 border-t border-sky-200/80 max-w-sm mx-auto">
          <Link
            href="mailto:jen@saasnova.ai"
            className="hover:text-[#008BF8] hover:underline transition-colors"
          >
            jen@saasnova.ai
          </Link>
          <span className="text-slate-300">·</span>
          <Link
            href="tel:+12017555369"
            className="hover:text-[#008BF8] hover:underline transition-colors"
          >
            +1 (201) 755-5369
          </Link>
        </div>

      </div>
    </div>
  );
}
