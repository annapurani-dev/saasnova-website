"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Rocket,
  Zap,
  Globe,
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
  ShieldCheck,
  Clock,
  Target,
  Award,
  Users,
  Compass,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

type ProgramTab = "ignite" | "supernova" | "novax";

export default function GrowthProgramsPage() {
  const [activeTab, setActiveTab] = useState<ProgramTab>("ignite");

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "").replace("-details", "").toLowerCase();
        if (hash === "ignite" || hash === "supernova" || hash === "novax") {
          setActiveTab(hash as ProgramTab);
          const target = document.getElementById(hash) || document.getElementById(`${hash}-details`);
          if (target) {
            setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="relative text-slate-900 overflow-x-clip pb-16">
      {/* ══════════════════════════════════════════════════════════════
          01 · HERO — GROWTH PROGRAMS INTRODUCTION
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="growth-hero"
        data-nav-title="Growth Programs"
        data-nav-subtitle="Packaged Cloud GTM"
        className="relative px-3 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 scroll-mt-28"
      >
        <div className="card-3d-master relative z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/90 bg-white/80 p-6 sm:p-10 lg:p-14 backdrop-blur-2xl">
          {/* Prismatic top border */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#008BF8]/60 via-[#FA0F9C]/60 to-transparent" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/solutions" className="hover:text-[#008BF8] transition-colors">
                Solutions
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#008BF8]">Programs</span>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-3.5 py-1 text-xs font-bold text-sky-800 shadow-2xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#008BF8] animate-pulse" />
              <span>STAGE-BASED CLOUD GTM PROGRAMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Structured Programs.{" "}
              <span className="text-gradient">Predictable Pipeline.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Transform dormant marketplace listings into high-converting cloud co-sell revenue channels. Three fixed-scope, milestone-driven execution programs tailored to your growth stage.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold shadow-[0_12px_28px_rgba(250,15,156,0.3)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Program Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#program-selection"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold shadow-2xs transition-all w-full sm:w-auto"
              >
                <span>Select a Program ↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · PROGRAM SELECTION (IGNITE · SUPERNOVA · NOVAX)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="program-selection"
        data-nav-title="Program Selection"
        data-nav-subtitle="Ignite, SuperNova & NovaX"
        className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Pick By Company Stage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Select Your Execution Velocity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From day 1 listing readiness to international multi-cloud co-sell, select the exact operational scope you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Ignite */}
            <div
              onClick={() => setActiveTab("ignite")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "ignite"
                  ? "border-2 border-[#008BF8] border-b-4 border-b-[#0066CC] bg-white ring-4 ring-sky-100 scale-102 shadow-[0_20px_50px_-10px_rgba(0,139,248,0.25)]"
                  : "border border-sky-200/90 border-b-[3.5px] border-b-sky-300 bg-gradient-to-b from-sky-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/10 text-[#008BF8] flex items-center justify-center font-bold shadow-2xs">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-100 text-[#008BF8] shadow-2xs">
                    STAGE 1 · 7-30 DAYS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Ignite</h3>
                  <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                    Cloud GTM Activation &amp; Listing
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Go from zero to live marketplace listing in 7 days. Complete seller onboarding, CPQ pricing structure, and first transacting offer validation.
                </p>
                <div className="pt-2 border-t border-sky-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>AWS / Azure / GCP transacting listing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Private Offers &amp; CPQ dimensions ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% compliant seller verification</span>
                  </div>
                </div>
              </div>
              <a
                href="#ignite-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View Ignite Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: SuperNova (Featured) */}
            <div
              onClick={() => setActiveTab("supernova")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "supernova"
                  ? "border-2 border-[#FA0F9C] border-b-4 border-b-[#E00A8B] bg-white ring-4 ring-pink-100 scale-103 shadow-[0_22px_55px_-10px_rgba(250,15,156,0.3)]"
                  : "border-2 border-[#FA0F9C]/60 border-b-4 border-b-[#FA0F9C]/80 bg-gradient-to-b from-pink-50/70 via-purple-50/40 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] text-white text-[10px] font-mono font-black tracking-wider uppercase shadow-md">
                MOST POPULAR FOR SCALE
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-pink-500/10 text-[#FA0F9C] flex items-center justify-center font-bold shadow-2xs">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-100 text-[#FA0F9C] shadow-2xs">
                    STAGE 2 · 4 MONTHS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">SuperNova</h3>
                  <p className="text-xs font-semibold text-[#FA0F9C] mt-0.5">
                    US Market Entry &amp; Pipeline Creation
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Establish an active co-sell sales rhythm, connect with hyperscaler field sales reps, register opportunities in ACE, and generate your first $1M+ pipeline.
                </p>
                <div className="pt-2 border-t border-pink-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dedicated PDM co-sell cadence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Hyperscaler field battlecards &amp; one-pagers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Target $300k+ co-sell deal pipeline</span>
                  </div>
                </div>
              </div>
              <a
                href="#supernova-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-r from-[#FA0F9C] to-[#7C3AED] hover:opacity-95 text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View SuperNova Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: NovaX */}
            <div
              onClick={() => setActiveTab("novax")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "novax"
                  ? "border-2 border-[#7C3AED] border-b-4 border-b-[#6D28D9] bg-white ring-4 ring-purple-100 scale-102 shadow-[0_20px_50px_-10px_rgba(124,58,237,0.25)]"
                  : "border border-purple-200/90 border-b-[3.5px] border-b-purple-300 bg-gradient-to-b from-purple-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-[#7C3AED] flex items-center justify-center font-bold">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED]">
                    STAGE 3 · 6 MONTHS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">NovaX</h3>
                  <p className="text-xs font-semibold text-[#7C3AED] mt-0.5">
                    Global Multi-Cloud Scale &amp; MACC
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Full multi-cloud orchestration across AWS, Microsoft Azure, and GCP. Capture committed customer enterprise spend (EDP/MACC) and secure executive tier status.
                </p>
                <div className="pt-2 border-t border-purple-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Multi-cloud co-sell: AWS + Azure + GCP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>$50k - $300k+ MDF capture pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Executive QBRs &amp; Premier Tier elevation</span>
                  </div>
                </div>
              </div>
              <a
                href="#novax-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <span>View NovaX Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · PROGRAM DETAILS (DELIVERABLES, ACTIVITIES, TIMELINE & OUTCOMES)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="program-details"
        data-nav-title="Program Details"
        data-nav-subtitle="Deliverables & Milestones"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          {/* ── PROGRAM 1: IGNITE DETAIL CARD ── */}
          <div id="ignite" className="scroll-mt-28">
            <div id="ignite-details" className="rounded-[2.5rem] border border-sky-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#008BF8] text-xs font-mono font-bold">
                  PROGRAM 01 · ACTIVATION
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Ignite: Cloud GTM Launch in 7 Days
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Go from unlisted or dormant to live transacting status on AWS Marketplace, Microsoft Azure Marketplace, or Google Cloud Marketplace.
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Duration</span>
                    <span className="text-sm font-bold text-slate-900">7 to 30 Days</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target Stage</span>
                    <span className="text-sm font-bold text-slate-900">Seed to Series A</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Timeline</span>
                    <span className="text-sm font-bold text-slate-900">Week 1-4 Sprint</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Outcome</span>
                    <span className="text-sm font-bold text-emerald-600">100% Live Listing</span>
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Launch With Ignite</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Ignite Deliverables &amp; Activities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">01</span>
                    <div className="font-bold text-sm text-slate-900">Seller Onboarding &amp; Banking</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Complete registration across AWS Partner Network, Microsoft Partner Center, or GCP including tax and disbursement verification.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">02</span>
                    <div className="font-bold text-sm text-slate-900">Listing Asset Architecture</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Co-sell approved product descriptions, architecture diagrams, video embeds, and customer support URLs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">03</span>
                    <div className="font-bold text-sm text-slate-900">CPQ &amp; Private Offer Setup</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Configuring SaaS pricing dimensions (user-based, usage-based, tiered) and testing Private Offer generation in sandbox.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">04</span>
                    <div className="font-bold text-sm text-slate-900">Transacting Validation Run</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Executing a live test purchase with zero friction to confirm webhook notification handling, provisioning, and payout pipelines.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Zero Technical Distraction:</span> We handle portal configuration and listing review so your core developers stay focused on product features.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* ── PROGRAM 2: SUPERNOVA DETAIL CARD ── */}
          <div id="supernova" className="scroll-mt-28">
            <div id="supernova-details" className="rounded-[2.5rem] border-2 border-[#FA0F9C]/50 bg-white/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#FA0F9C] text-xs font-mono font-bold">
                  PROGRAM 02 · US MARKET ENTRY &amp; PIPELINE
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  SuperNova: The $1M+ Co-Sell Acceleration Engine
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Establish an active co-sell sales rhythm, connect directly with hyperscaler field sales reps, register opportunities in ACE, and generate qualified enterprise pipeline.
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Duration</span>
                    <span className="text-sm font-bold text-slate-900">4 Months</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target Stage</span>
                    <span className="text-sm font-bold text-slate-900">Series A to Series B</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Timeline</span>
                    <span className="text-sm font-bold text-slate-900">Month 1-4 Sprint</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target ARR</span>
                    <span className="text-sm font-bold text-[#FA0F9C]">$300K - $1M+</span>
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FA0F9C] to-[#7C3AED] hover:opacity-95 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Zap className="w-4 h-4" />
                  <span>Apply for SuperNova</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  SuperNova Deliverables &amp; Activities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">01</span>
                    <div className="font-bold text-sm text-slate-900">Embedded Fractional PDM</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      A dedicated Partner Development Manager in your Slack, managing weekly co-sell syncs, AE introductions, and territory mapping.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">02</span>
                    <div className="font-bold text-sm text-slate-900">ACE &amp; MACC Opportunity Logging</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Systematic deal registration in AWS ACE or Partner Center, connecting your sales opportunities with cloud field reps to earn quota credit.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">03</span>
                    <div className="font-bold text-sm text-slate-900">AE Joint Battlecards</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      High-impact one-pagers showing hyperscaler reps how your SaaS accelerates cloud consumption and helps them hit annual quotas.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">04</span>
                    <div className="font-bold text-sm text-slate-900">Differentiated Tier Advancement</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Fast-tracking tier progression (AWS Differentiated / IP Co-Sell Ready) to unlock reduced marketplace listing fees (from 3% down to 1.5%).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-pink-50/60 border border-pink-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Direct Hyperscaler AE Alignment:</span> We introduce your solution directly to vertical leaders across Security, FinTech, DevOps, and Healthcare cloud teams.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* ── PROGRAM 3: NOVAX DETAIL CARD ── */}
          <div id="novax" className="scroll-mt-28">
            <div id="novax-details" className="rounded-[2.5rem] border border-purple-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-mono font-bold">
                  PROGRAM 03 · GLOBAL MULTI-CLOUD SCALE
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  NovaX: Enterprise Co-Sell &amp; Multi-Cloud Dominance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For established SaaS organizations scaling across AWS, Azure, and Google Cloud simultaneously. Capture committed customer enterprise spend (EDP/MACC/CUD) and secure MDF funding.
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Duration</span>
                    <span className="text-sm font-bold text-slate-900">6 Months</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target Stage</span>
                    <span className="text-sm font-bold text-slate-900">Series B to Pre-IPO</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Timeline</span>
                    <span className="text-sm font-bold text-slate-900">Month 1-6 Sprint</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">MDF Capture</span>
                    <span className="text-sm font-bold text-purple-700">$50K - $300K+</span>
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Globe className="w-4 h-4" />
                  <span>Consult on NovaX</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  NovaX Deliverables &amp; Activities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">01</span>
                    <div className="font-bold text-sm text-slate-900">Tri-Cloud Co-Sell Engine</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Simultaneous orchestration across AWS ACE, Microsoft Partner Center, and Google Cloud Partner Advantage with unified pipeline reporting.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">02</span>
                    <div className="font-bold text-sm text-slate-900">EDP &amp; MACC Drawdowns</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Custom enterprise private offer agreements drafted to qualify for 100% cloud committed spend drawdowns, accelerating six-figure sales cycles.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">03</span>
                    <div className="font-bold text-sm text-slate-900">MDF Grant Applications</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Drafting and securing non-dilutive Market Development Funds from hyperscalers to fund co-branded webinars, events, and lead generation campaigns.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">04</span>
                    <div className="font-bold text-sm text-slate-900">Executive QBRs &amp; Tier Elevation</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Quarterly business reviews with hyperscaler partner executives, driving nomination into invite-only tier programs (AWS Premier / ISV Accelerate).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Enterprise Private Offers:</span> We structure complex multi-year enterprise contracts, custom EULAs, flexible milestone payment schedules, and third-party reseller pass-through terms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          04 · FINAL CTA — BOOK A PROGRAM BRIEFING
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="growth-cta"
        data-nav-title="Book Briefing"
        data-nav-subtitle="Schedule Program Call"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#070D1E] p-8 sm:p-12 text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8]" />
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#008BF8]/15 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#FA0F9C]/15 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-mono font-bold text-sky-300">
                READY TO SCALE YOUR CLOUD PIPELINE?
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Schedule Your Program Briefing With Jen Dawson
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Walk away with a customized Cloud GTM roadmap and find out whether Ignite, SuperNova, or NovaX is the right fit for your revenue goals.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="btn-gradient inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white text-sm font-bold shadow-[0_12px_32px_rgba(250,15,156,0.35)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your 30-Min Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all w-full sm:w-auto"
                >
                  <span>Back to Solutions Overview</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
