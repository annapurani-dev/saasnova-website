"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Mail } from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

export default function FinalCTA() {
  return (
    <div className="card-3d-master-dark relative max-w-4xl mx-auto w-full p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] select-none">
      {/* ── INTERIOR DARK BLUE CONTRAST CARD ── */}
      <div className="relative bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] p-8 sm:p-12 lg:p-14 overflow-hidden text-center text-white backdrop-blur-2xl">
        {/* Ambient Glow Orbs inside Dark Card */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-48 rounded-full bg-gradient-to-r from-[#FA0F9C]/20 via-[#008BF8]/20 to-transparent blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#FA0F9C]/15 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#008BF8]/15 blur-[90px]" />

      {/* Dynamic Prismatic Top Highlight Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#008BF8] via-[#FA0F9C] to-transparent" />

      {/* Status Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold text-cyan-300 shadow-2xs backdrop-blur-sm relative z-10 mb-4">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Executive Co-Sell Strategy Session · Booking Open</span>
      </div>

      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-[1.2] relative z-10 max-w-2xl mx-auto mb-3">
        Ready to Turn Cloud Marketplaces into Your{" "}
        <span className="text-gradient">Primary Growth Engine?</span>
      </h2>

      {/* Subhead */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto relative z-10 mb-6">
        Skip 9+ months of portal trial-and-error and dormant listings. Embed seasoned former AWS &amp; hyperscaler alliance operators into your team and start closing co-sell pipeline.
      </p>

      {/* Dual Compact Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md mx-auto relative z-10 mb-8">
        <Link
          href={CALENDLY}
          target="_blank"
          className="group btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-bold cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book 30-Min Strategy Session</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="mailto:jen@saasnova.ai?subject=Executive%20Cloud%20GTM%20Inquiry"
          className="btn-3d inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-slate-200 text-xs sm:text-sm font-semibold border border-white/15 bg-white/10 hover:bg-white/15 transition-colors cursor-pointer backdrop-blur-sm"
        >
          <Mail className="w-4 h-4 text-slate-300" />
          <span>Custom Enterprise Scope</span>
        </Link>
      </div>

      {/* Hyperscalers Certification Row (Logo-only Pods) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 relative z-10 pt-4 border-t border-white/10">
        <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 mr-1 font-mono">
          Certified Across:
        </span>

        <div title="AWS Partner Network" className="icon-3d inline-flex items-center justify-center h-8 px-3 rounded-xl">
          <Image
            src="/aws-logo.png"
            alt="AWS"
            width={18}
            height={18}
            className="h-3.5 w-auto object-contain"
          />
        </div>

        <div title="Microsoft Azure" className="icon-3d inline-flex items-center justify-center h-8 px-3 rounded-xl">
          <Image
            src="/azure-logo.png"
            alt="Azure"
            width={18}
            height={18}
            className="h-3.5 w-auto object-contain"
          />
        </div>

        <div title="Google Cloud" className="icon-3d inline-flex items-center justify-center h-8 px-3 rounded-xl">
          <Image
            src="/gcp-logo.png"
            alt="GCP"
            width={18}
            height={18}
            className="h-3.5 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);
}
