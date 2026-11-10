"use client";

import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { ArrowRight, Calendar, Check, ExternalLink, Sparkles, Store, ShieldCheck, Award } from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

export default function StorefrontSection() {
  return (
    <div className="relative">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-b from-[#008BF8]/10 via-[#FA0F9C]/8 to-transparent blur-3xl" />

      {/* Main Stadium Glass Card with 3D Raised Depth */}
      <div className="card-3d-master relative z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/90 bg-white/80 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl">
        {/* Prismatic Top Highlight Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#008BF8]/70 via-[#FA0F9C]/60 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Context & Proof (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Launch Partner Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-200/80 bg-sky-50/90 px-4 py-1.5 text-xs font-extrabold text-sky-800 shadow-2xs backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#008BF8] animate-pulse" />
              <div className="flex items-center gap-1.5">
                <Image src="/aws-logo.png" alt="AWS" width={18} height={18} className="h-3.5 w-auto object-contain" />
                <span>OFFICIAL LAUNCH PARTNER · AWS MARKETPLACE STOREFRONT</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.14]">
              Pioneering Cloud GTM with <br />
              <span className="text-gradient">AWS Marketplace Storefront.</span>
            </h2>

            {/* Supporting Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              As an official launch partner for AWS Marketplace Storefront, SaaSNova helped pioneer branded seller experiences, bringing operator-level cloud GTM and streamlined discovery to global technology companies.
            </p>

            {/* 3 Core Architecture Pillars with 3D Extruded Depth & Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <TiltCard variant="light" intensity={8} className="p-4 rounded-2xl space-y-2">
                <div className="icon-3d w-9 h-9 rounded-xl text-[#008BF8] flex items-center justify-center">
                  <Store className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-slate-900">Branded Seller Architecture</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Unified scattered product listings into cohesive, branded enterprise hubs.
                </p>
              </TiltCard>

              <TiltCard variant="light" intensity={8} className="p-4 rounded-2xl space-y-2">
                <div className="icon-3d w-9 h-9 rounded-xl text-[#FA0F9C] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-slate-900">ISV Ecosystem Enablement</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Smooth listing readiness, taxonomy alignment, and enterprise onboarding.
                </p>
              </TiltCard>

              <TiltCard variant="light" intensity={8} className="p-4 rounded-2xl space-y-2">
                <div className="icon-3d w-9 h-9 rounded-xl text-[#7C3AED] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-slate-900">Real-World Cloud Co-Selling</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Opportunity registration, Private Offers, and AWS field sales alignment.
                </p>
              </TiltCard>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href="/solutions/storefront"
                className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-bold w-full sm:w-auto cursor-pointer"
              >
                <span>Explore Storefront Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-xs sm:text-sm font-bold w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-[#008BF8]" />
                <span>Book a 30-min Session</span>
              </Link>
            </div>
          </div>

          {/* Right Column: AWS Product Leader 3D Testimonial Card (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <TiltCard variant="light" intensity={8} className="rounded-3xl p-6 sm:p-7 space-y-5">
              
              {/* Top Header inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#070D1E] p-1.5 flex items-center justify-center shadow-[0_3px_0_#1e293b]">
                    <Image src="/logo-favicon.png" alt="SaaSNova" width={22} height={22} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900">AWS Marketplace Storefront</div>
                    <div className="text-[10.5px] text-slate-500 font-mono">OFFICIAL VALIDATION</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-[0_2px_0_#a7f3d0] text-[10.5px] font-bold">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>Day-1 Partner</span>
                </div>
              </div>

              {/* Verified Quote from Hussein Khazaal */}
              <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;We&apos;re excited to have SaaSNova as a launch partner for AWS Marketplace Storefront. Their hands-on experience supporting ISVs and channel partners, combined with their ability to operationalize cloud GTM motions, makes them a strong partner for helping organizations adopt Storefront quickly and effectively.&rdquo;
              </blockquote>

              {/* Author Attribution */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#008BF8] to-[#FA0F9C] text-white flex items-center justify-center font-bold text-xs shadow-[0_3px_0_#7c3aed]">
                  HK
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Hussein Khazaal</div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Sr. Manager of Product, AWS Marketplace Storefront
                  </div>
                </div>
              </div>

              {/* Second Customer Micro-Proof: PharmacoEvidence */}
              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-semibold text-slate-800">
                  Global ISV Customer: <strong className="font-bold">PharmacoEvidence</strong>
                </span>
                <span className="font-mono text-[#008BF8] font-bold">Verified Launch</span>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </div>
  );
}

