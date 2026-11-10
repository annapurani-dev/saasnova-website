"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  Users,
  Cpu,
  Check,
  ArrowRight,
  Calendar,
  Compass,
  Mail,
  ChevronDown,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function SolutionsPage() {
  return (
    <div className="relative text-slate-900 overflow-x-clip pb-16">
      {/* ══════════════════════════════════════════════════════════════
          01 · HERO — CLEAN MASTER CARD
          Background: Dark Blue (#070D1E) with Down Semi-Circle Arc
          Fits screen cleanly without overflow · No table · 3 Brand Icons
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="solutions-hero"
        data-nav-title="Pick Your Model"
        data-nav-subtitle="We Execute 100%"
        className="relative px-3 pt-4 pb-8 sm:px-6 sm:pt-6 sm:pb-10 lg:px-8 scroll-mt-28 lg:scroll-mt-32"
      >
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl h-[360px] bg-gradient-to-b from-[#008BF8]/15 via-[#7C3AED]/10 to-transparent blur-3xl" />

        {/* Master Dark Blue Cockpit Card with Gradient Rim & 3D Depth */}
        <div className="card-3d-master-dark relative z-10 mx-auto w-full max-w-6xl p-[2.5px] rounded-[2.25rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] select-none">
          <div className="relative overflow-hidden rounded-[calc(2.25rem-2.5px)] bg-[#070D1E] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-18 text-center text-white backdrop-blur-2xl">
            {/* Prismatic Top Highlight Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 via-pink-400/90 to-transparent" />

            {/* Ambient Internal Glow Orbs */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-[#008BF8]/25 via-[#7C3AED]/20 to-[#FA0F9C]/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-60 bg-[#7C3AED]/25 blur-[100px]" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {/* Trust / Category Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-[0_3px_0_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>THE OPERATOR-LED CLOUD GTM SUITE · 3 MODELS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.12]">
                Pick Your Model. <br className="hidden sm:inline" />
                <span className="text-gradient">We Execute 100%.</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Scale your SaaS across AWS, Azure, and Google Cloud with dedicated fractional operators, packaged milestone programs, and automated co-sell infrastructure.
              </p>

              {/* Just Logos for the 3 Brands (3D Extruded Keycaps) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div title="Amazon Web Services (AWS)" className="icon-3d flex items-center justify-center h-11 px-4 rounded-2xl hover:-translate-y-0.5 transition-all">
                  <Image src="/aws-logo.png" alt="AWS" width={26} height={26} className="h-5 w-auto object-contain" />
                </div>
                <div title="Microsoft Azure" className="icon-3d flex items-center justify-center h-11 px-4 rounded-2xl hover:-translate-y-0.5 transition-all">
                  <Image src="/azure-logo.png" alt="Azure" width={24} height={24} className="h-5 w-auto object-contain" />
                </div>
                <div title="Google Cloud Platform (GCP)" className="icon-3d flex items-center justify-center h-11 px-4 rounded-2xl hover:-translate-y-0.5 transition-all">
                  <Image src="/gcp-logo.png" alt="GCP" width={24} height={24} className="h-5 w-auto object-contain" />
                </div>
              </div>

              {/* Prominent 3D CTA Button */}
              <div className="flex items-center justify-center pt-3">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="btn-gradient btn-3d inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-white text-sm sm:text-base font-bold w-full sm:w-auto cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Execution Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · DETAILED DESCRIPTION IN GENERAL
          3 comprehensive cards explaining the models in general
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="solutions-description"
        data-nav-title="Detailed Overview"
        data-nav-subtitle="3 Execution Models"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#008BF8] bg-sky-50 border border-sky-200">
              <Compass className="w-3.5 h-3.5" />
              <span>DETAILED BREAKDOWN · 3 ENGAGEMENT PATHS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              How Each Execution Model Operates
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every B2B SaaS company faces different stage constraints. Whether you need turnkey milestone sprints, embedded fractional operators in your Slack, or automated co-sell infrastructure, here is how each model delivers 100% execution:
            </p>
          </div>

          <div className="space-y-8">
            {/* ── CARD 1: PACKAGED GROWTH PROGRAMS ── */}
            <div className="card-3d-master rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-3d p-3 rounded-2xl text-[#008BF8]">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                        Model 01 · Milestone-Driven Sprints
                      </span>
                      <h3 className="text-2xl font-black text-slate-900">
                        Programs
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Designed for founders and revenue leaders who want clear, fixed-scope results without hiring delays. Rather than billing by the hour or leaving strategy in slide decks, SaaSNova assumes 100% operational accountability for bringing your solution live, verified, and co-selling across cloud marketplaces.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <Link
                      href="/solutions/growth-programs#ignite"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">STAGE 1</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors">
                        Ignite
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Cloud GTM Activation: Live listing, CPQ validation &amp; first private offer readiness.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/growth-programs#supernova"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#FA0F9C] block">STAGE 2</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FA0F9C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#FA0F9C] block transition-colors">
                        SuperNova
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        US Market Entry: ACE lead flow, field AE alignment &amp; ISV Accelerate.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/growth-programs#novax"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#7C3AED] block">STAGE 3</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#7C3AED] block transition-colors">
                        NovaX
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Global Multi-Cloud Scale: AWS, Azure &amp; GCP scale with automated ops.
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="well-recessed lg:col-span-5 p-6 rounded-2xl space-y-4">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Key Model Highlights
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Fixed Timeline &amp; Cost:</strong> Guaranteed delivery milestones with zero open-ended billing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Hands-Off Listing:</strong> We draft architecture diagrams, pricing CPQ, legal terms, and submit to hyperscalers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Ideal For:</strong> Seed to Series B teams needing quick market entry or expansion without hiring alliance execs.</span>
                    </li>
                  </ul>

                  <div className="pt-3">
                    <Link
                      href="/solutions/growth-programs"
                      className="btn-3d inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#008BF8] hover:bg-[#0070c7] text-white font-bold text-xs transition-all group"
                    >
                      <span>View Programs Subpage (Ignite, SuperNova, NovaX)</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 2: FRACTIONAL OPERATORS ── */}
            <div className="card-3d-master rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-3d p-3 rounded-2xl text-[#7C3AED]">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7C3AED]">
                        Model 02 · Embedded MaaS Talent
                      </span>
                      <h3 className="text-2xl font-black text-slate-900">
                        Services
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Designed for companies that already have an active listing but lack dedicated alliance managers to build relationships with AWS, Azure, and GCP sales teams. Instead of spending $350K+ and 6 months searching for full-time VP of Alliances talent, get certified former cloud operators inside your Slack within 48 to 72 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <Link
                      href="/solutions/fractional-operators#pdmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">ROLE 1</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors">
                        PDMaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Pipeline Execution: Deal registration, rep mapping &amp; pipeline progression.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/fractional-operators#pmmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#FA0F9C] block">ROLE 2</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FA0F9C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#FA0F9C] block transition-colors">
                        PMMaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Cloud Messaging: Battlecards, collateral, case studies &amp; MDF co-funding.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/fractional-operators#palaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#7C3AED] block">ROLE 3</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#7C3AED] block transition-colors">
                        PALaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Alliance Operations: Executive sponsor mapping, tier progression &amp; cloud QBRs.
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="well-recessed lg:col-span-5 p-6 rounded-2xl space-y-4">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Key Model Highlights
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span><strong>Direct Slack &amp; Standup Integration:</strong> Our operators work directly inside your daily workflows and CRM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span><strong>Day-1 Cloud Rolodex:</strong> Immediate access to active cloud partner managers across enterprise accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span><strong>Ideal For:</strong> Series A to Growth-stage SaaS wanting senior alliance leadership without permanent payroll liability.</span>
                    </li>
                  </ul>

                  <div className="pt-3">
                    <Link
                      href="/solutions/fractional-operators"
                      className="btn-3d inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-bold text-xs transition-all group"
                    >
                      <span>View Services Subpage (PDMaaS, PMMaaS, PALaaS)</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 3: GTM OPS & INFRA ── */}
            <div className="card-3d-master rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-pink-100/50 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-3d p-3 rounded-2xl text-[#FA0F9C]">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FA0F9C]">
                        Model 03 · Automated GTM Infrastructure
                      </span>
                      <h3 className="text-2xl font-black text-slate-900">
                        GTM Ops &amp; Infra
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Designed for enterprise SaaS teams running multi-rep co-sell motions who suffer from manual spreadsheet tracking and lost deal attribution. We build automated bridges connecting Salesforce or HubSpot directly into AWS ACE, Microsoft Partner Center, and Google Cloud Marketplace.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <Link
                      href="/solutions/systems-ops#prmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">SYSTEM 1</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors">
                        PRMaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Attribution Infrastructure: Telemetry, custom partner directory &amp; deal tracking.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/systems-ops#pcmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#FA0F9C] block">SYSTEM 2</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FA0F9C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#FA0F9C] block transition-colors">
                        PCMaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Portal Migration Readiness: 2-way CRM ↔ ACE/Partner Center syncing &amp; attribution.
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="well-recessed lg:col-span-5 p-6 rounded-2xl space-y-4">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Key Model Highlights
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                      <span><strong>100% Deal Attribution:</strong> Eliminates dropped commissions, uncredited deals, and manual double-entry.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                      <span><strong>Instant Private Offers:</strong> Generate custom contract terms, multi-year tiers, and decrement MACC/CUD commits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                      <span><strong>Ideal For:</strong> Scale-ups with high co-sell volume needing seamless CRM integration and automated ops.</span>
                    </li>
                  </ul>

                  <div className="pt-3">
                    <Link
                      href="/solutions/systems-ops"
                      className="btn-3d inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#FA0F9C] hover:bg-[#d90d86] text-white font-bold text-xs transition-all group"
                    >
                      <span>View GTM Ops &amp; Infra Subpage (PRMaaS, PCMaaS)</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · FINAL CTA — BOOK AN EXECUTION STRATEGY SESSION
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="solutions-cta"
        data-nav-title="Book Strategy"
        data-nav-subtitle="Execution Session"
        className="relative px-3 pt-8 pb-12 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div
          className="card-3d-master-dark relative max-w-4xl mx-auto w-full p-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] select-none rounded-[2.5rem]"
        >
          {/* Interior Dark Cockpit Stage */}
          <div className="relative bg-[#070D1E] px-6 py-10 sm:px-12 sm:py-14 rounded-[calc(2.5rem-2.5px)] overflow-hidden text-center space-y-6">
            {/* Ambient Radial Glows */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#008BF8]/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#FA0F9C]/20 blur-[100px]" />

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-2xs backdrop-blur-sm relative z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Operator-Led Diagnostic · Booking Open</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight relative z-10 max-w-2xl mx-auto">
              Ready to Choose Your Model and Turn Cloud Marketplaces into Your{" "}
              <span className="text-gradient">Primary Growth Engine?</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto relative z-10 leading-relaxed">
              Book a 30-minute execution strategy session with Jen Dawson (former AWS Global GTM Lead). We review your listings, assess co-sell readiness, and map the right model.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-[0_12px_28px_rgba(250,15,156,0.35)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a 30-Min Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:jen@saasnova.ai?subject=Solutions%20Model%20Inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Email Jen Directly</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 relative z-10">
              <span>✓ No long commitments</span>
              <span>•</span>
              <span>✓ 100% operator-led</span>
              <span>•</span>
              <span>✓ Active across AWS, Azure &amp; GCP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}