"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

export default function StorefrontSection() {
  return (
    <div className="relative mx-auto max-w-7xl w-full">
      {/* ── AMBIENT ATMOSPHERIC LIGHTING (NO ENCLOSING CARD) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-[#008BF8]/[0.06] via-[#FA0F9C]/[0.04] to-transparent blur-3xl -z-10"
      />

      {/* ── 2-COLUMN LAYOUT: BOTTOM-ALIGNED SO CTA MATCHES CARD 03 & TESTIMONIAL PUSHES DOWN ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        
        {/* ── LEFT COLUMN: HEADLINE, DESCRIPTION & 3D VALUE BULLETINS ── */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Headline (Solid Text · Zero Gradients · No Eyebrow Pill) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.14]">
            Pioneering Cloud GTM with AWS Marketplace Storefront.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            As an official launch partner for AWS Marketplace Storefront, SaaSNova helped pioneer branded seller experiences, bringing operator-level cloud GTM and streamlined discovery to global technology companies.
          </p>

          {/* Executive 3D Micro-Bulletins: 01, 02, 03 Badges (Extruded 3D Pedestal Depth) */}
          <div className="space-y-4 pt-1">
            
            {/* Bulletin 01 with 3D Depth */}
            <div className="card-3d p-5 sm:p-6 rounded-2xl flex items-start gap-4.5 cursor-default">
              <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-[#008BF8] border border-sky-200/90 font-mono text-xs font-extrabold shrink-0 mt-0.5 shadow-2xs">
                01
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  Branded Seller Architecture
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-0.5">
                  Unified, enterprise-grade storefronts built for high-velocity buyer discovery.
                </p>
              </div>
            </div>

            {/* Bulletin 02 with 3D Depth */}
            <div className="card-3d p-5 sm:p-6 rounded-2xl flex items-start gap-4.5 cursor-default">
              <span className="px-2.5 py-1 rounded-lg bg-pink-50 text-[#FA0F9C] border border-pink-200/90 font-mono text-xs font-extrabold shrink-0 mt-0.5 shadow-2xs">
                02
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  ISV Ecosystem Enablement
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-0.5">
                  Streamlined taxonomy, Day-1 AWS listing readiness, and enterprise onboarding.
                </p>
              </div>
            </div>

            {/* Bulletin 03 with 3D Depth */}
            <div className="card-3d p-5 sm:p-6 rounded-2xl flex items-start gap-4.5 cursor-default">
              <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-[#008BF8] border border-sky-200/90 font-mono text-xs font-extrabold shrink-0 mt-0.5 shadow-2xs">
                03
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  Real-World Cloud Co-Selling
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-0.5">
                  Accelerated Private Offers, CPPO workflows, and direct AWS field sales alignment.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── RIGHT COLUMN: PUSHED EQUALLY · 3D TESTIMONIAL + ACTION CTAS ALIGNED WITH CARD 03 ── */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Testimonial Card with Full 3D Extruded Depth */}
          <div className="card-3d relative rounded-3xl p-7 sm:p-8 space-y-5 overflow-hidden cursor-default">
            
            {/* Prismatic Top Highlight Accent Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#008BF8] via-[#FA0F9C] to-transparent" />

            {/* Exact Quotation Mark Symbol Watermark from Other Pages */}
            <div
              className="absolute -top-3 -right-2 pointer-events-none select-none text-slate-900/[0.05] w-28 h-28 sm:w-32 sm:h-32"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Brand Logo Header (Clean AWS Logo · No Blue Quote Icon · No Pill) */}
            <div className="relative z-10 flex items-center justify-between pb-0.5">
              <Image
                src="/aws-logo.png"
                alt="AWS"
                width={60}
                height={36}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>

            {/* Verified Quote from Hussein Khazaal */}
            <blockquote className="relative z-10 text-sm sm:text-base text-slate-700 leading-relaxed italic font-sans">
              &ldquo;We&apos;re excited to have SaaSNova as a launch partner for AWS Marketplace Storefront. Their hands-on experience supporting ISVs and channel partners, combined with their ability to operationalize cloud GTM motions, makes them a strong partner for helping organizations adopt Storefront quickly and effectively.&rdquo;
            </blockquote>

            {/* Author Attribution */}
            <div className="relative z-10 pt-4 flex items-center gap-3.5 border-t border-slate-200/70">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#008BF8] to-[#FA0F9C] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                HK
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  Hussein Khazaal
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-0.5">
                  Sr. Manager of Product, AWS Marketplace Storefront
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons: Positioned directly equal to Card 03 on the left */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            
            {/* Primary CTA (Vivid Pink Gradient — Exact Hero Section Colors & Shape) */}
            <Link
              href="/solutions/storefront"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full px-5 h-[50px] sm:h-[52px] text-sm sm:text-[15px] font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_18px_rgba(250,15,156,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_26px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex-1 text-center"
            >
              <span>Explore Storefront Solution</span>
              <ArrowRight className="h-4.5 w-4.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary CTA (Brand Blue Tint — Exact Hero Section Colors & Shape) */}
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#008BF8]/30 bg-[#008BF8]/[0.08] hover:bg-[#008BF8]/[0.14] hover:border-[#008BF8]/55 px-5 h-[50px] sm:h-[52px] text-sm sm:text-[15px] font-bold text-[#008BF8] whitespace-nowrap shadow-[0_2px_12px_rgba(0,139,248,0.08)] hover:shadow-[0_4px_18px_rgba(0,139,248,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex-1 text-center"
            >
              <Calendar className="h-4.5 w-4.5 text-[#008BF8] shrink-0" />
              <span>Book Strategy Session</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
