"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import { scrollToSectionId, useSolutionHashNavigation } from "@/lib/scrollNavigation";
import {
  Rocket,
  Users,
  Cpu,
  Check,
  ArrowRight,
  Calendar,
  Compass,
  Mail,
  Layers,
  HelpCircle,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const SOLUTIONS_HASH_IDS = [
  "solutions-hero",
  "solutions-description",
  "compare-matrix",
  "faq",
  "solutions-cta",
] as const;

const PROGRAMS_MATRIX = [
  {
    capability: "Timeline",
    ignite: "1 Month",
    supernova: "4 Months",
    novax: "6 Months",
  },
  {
    capability: "Target Stage",
    ignite: "Unlisted or No Pipeline",
    supernova: "Series A → Series B",
    novax: "Series B → Series C",
  },
  {
    capability: "Cloud Mix",
    ignite: "AWS, Azure, GCP",
    supernova: "Any Cloud",
    novax: "Any Cloud",
  },
  {
    capability: "Primary Goal",
    ignite: "Marketplace Activation",
    supernova: "US Market Penetration",
    novax: "Global Scale & Automation",
  },
  {
    capability: "Channel & SI/GSI",
    ignite: "Partner Central Readiness",
    supernova: "US Partner Mapping including CPPO",
    novax: "Global SI/GSI Pipeline Scale",
  },
  {
    capability: "Field Enablement",
    ignite: "Early Co-Sell Activation",
    supernova: "Targeted US Field Activation",
    novax: "Sustained Multi-Cloud Execution",
  },
];

const SERVICES_MATRIX = [
  {
    capability: "Core Focus",
    pdmaas: "Co-Sell Pipeline Execution",
    pmmaas: "Cloud Messaging & Optimization",
    palaas: "Alliance Coordination & QBRs",
  },
  {
    capability: "Cloud Mix",
    pdmaas: "AWS, Azure, GCP",
    pmmaas: "AWS, Azure, GCP",
    palaas: "AWS, Azure, GCP",
  },
  {
    capability: "Primary Output",
    pdmaas: "Validated Pipeline & MDF",
    pmmaas: "Pitch Decks & Marketplace Copy",
    palaas: "Partnership Plan & Exec Syncs",
  },
  {
    capability: "Engagement Model",
    pdmaas: "Weekly Field Syncs",
    pmmaas: "Continuous Asset Creation",
    palaas: "Executive Mapping & Syncs",
  },
];

const OPS_MATRIX = [
  {
    capability: "Core Focus",
    prmaas: "Revenue Attribution & IaC Tagging",
    pcmaas: "Portal Migration & IAM Readiness",
  },
  {
    capability: "Cloud Mix",
    prmaas: "AWS, Azure, GCP",
    pcmaas: "AWS, Azure, GCP",
  },
  {
    capability: "Primary Output",
    prmaas: "Compliant PRM Implementation",
    pcmaas: "Verified Partner Console Access",
  },
  {
    capability: "Engagement Model",
    prmaas: "Technical Deployment",
    pcmaas: "Readiness Validation (Free)",
  },
];

const COMMON_QUESTIONS = [
  {
    number: "01",
    question: "How do I know if I need a Program or a Managed Service?",
    answer:
      "Programs (Ignite, SuperNova, NovaX) are 1- to 6-month sprints designed to hit a specific milestone, such as activating your first Marketplace listing or breaking into the US market. Managed Services (PDMaaS, PMMaaS, PALaaS) provide an ongoing, fractional execution team to run your day-to-day multi-cloud alliance operations without the overhead of full-time headcount.",
  },
  {
    number: "02",
    question: "Do you actually talk to AWS, Microsoft Azure and GCP field sellers?",
    answer:
      "Yes. We are not an advisory firm that just hands you a strategy deck. We actively map your target accounts, pitch your solution to cloud field sellers, run weekly co-sell syncs, and manage your opportunity pipeline directly in portals like AWS ACE, Microsoft Partner Center, and Google Cloud Platform.",
  },
  {
    number: "03",
    question: "Are Marketplace listings and MDF applications included?",
    answer:
      "Absolutely. Listing optimization and portal readiness are foundational to every engagement. We also identify, apply for, and manage hyperscaler funding programs (like MDF and MAP) on your behalf to help offset your GTM costs and accelerate deal closures.",
  },
  {
    number: "04",
    question: "Do you support multi-cloud strategies (AWS, Azure, GCP)?",
    answer:
      "Yes. Our execution frameworks natively support AWS, Microsoft Azure, and Google Cloud. Depending on your current stage and market traction, we can either focus deeply on activating a single cloud or run a high-volume, multi-cloud co-sell engine simultaneously.",
  },
];

export default function SolutionsPage() {
  const handleSectionSelect = useCallback(() => {}, []);
  useSolutionHashNavigation(SOLUTIONS_HASH_IDS, handleSectionSelect);

  return (
    <div className="relative text-slate-900 overflow-x-clip pb-16">
      {/* ══════════════════════════════════════════════════════════════
          01 · HERO — CLEAN MASTER CARD
          Background: Dark Blue (#070D1E) · 3 Brand Icons · 3 Intro Pillars
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
          <div className="relative overflow-hidden rounded-[calc(2.25rem-2.5px)] bg-[#070D1E] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-center text-white backdrop-blur-2xl space-y-10">
            {/* Prismatic Top Highlight Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 via-pink-400/90 to-transparent" />

            {/* Ambient Internal Glow Orbs */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-[#008BF8]/25 via-[#7C3AED]/20 to-[#FA0F9C]/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-60 bg-[#7C3AED]/25 blur-[100px]" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {/* Trust / Category Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-[0_3px_0_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>PROGRAMS &amp; SERVICES · WE EXECUTE 100%</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.12]">
                Stop planning your cloud GTM.{" "}
                <span className="text-gradient">Let us execute it.</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We run the partner development, partner marketing, and alliance operations motions that accelerate pipeline across hyperscalers. Delivered through Managed Services, timeline-driven Programs, or automated Ops &amp; Infrastructure.
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

              {/* Prominent 3D CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="btn-gradient btn-3d inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white text-sm sm:text-base font-bold w-full sm:w-auto cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 30-min Execution Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#compare-matrix"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionId("compare-matrix", { updateHash: true });
                  }}
                  className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold w-full sm:w-auto transition-all cursor-pointer"
                >
                  <span>View Solutions Matrix ↓</span>
                </a>
              </div>
            </div>

            {/* 3 Core Principles Strip */}
            <div className="relative z-10 well-recessed-dark rounded-[1.75rem] p-4 sm:p-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card-3d-dark p-5 rounded-2xl space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono font-bold text-slate-200">
                    01 · EXECUTION, NOT ADVISORY
                  </span>
                  <h2 className="text-base font-bold text-white">Execution, Not Advisory</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Consultants deliver slide decks. We act as your embedded alliance team, handling pipeline progression, funding workflows, and actual field alignment.
                  </p>
                </div>

                <div className="card-3d-dark-active p-5 rounded-2xl space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-slate-950 text-[10px] font-mono font-bold shadow-[0_2px_0_#cbd5e1]">
                    02 · HYPERSCALER DNA
                  </span>
                  <h2 className="text-base font-bold text-white">Native Hyperscaler DNA</h2>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    We don&apos;t guess what the field wants; we build messaging and pipeline structures mapped exactly to how AWS, Azure and GCP teams operate.
                  </p>
                </div>

                <div className="card-3d-dark p-5 rounded-2xl space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono font-bold text-slate-200">
                    03 · FRACTIONAL ECONOMICS
                  </span>
                  <h2 className="text-base font-bold text-white">Fractional Cost, Enterprise Scale</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Get the rigorous output of an experienced Alliance Director, PDM, and PMM without the risk or overhead of hiring three full-time internal roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · DETAILED DESCRIPTION IN GENERAL
          3 comprehensive cards explaining Programs, Services, GTM Ops
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="solutions-description"
        data-nav-title="Execution Models"
        data-nav-subtitle="3 Engagement Paths"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#008BF8] bg-sky-50 border border-sky-200">
              <Compass className="w-3.5 h-3.5" />
              <span>DETAILED BREAKDOWN · 3 ENGAGEMENT PATHS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Pick Your Execution Model
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Structured programs for defined milestones, embedded fractional operators for continuous co-sell execution, or technical GTM infrastructure for measurement and portal readiness.
            </p>
          </div>

          <div className="space-y-8">
            {/* ── CARD 1: PACKAGED GROWTH PROGRAMS ── */}
            <div className="card-3d-master rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                      Model 01 · Milestone-Driven Sprints
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      GTM Execution Programs
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Structured, timeline-driven programs designed to build, scale, and operationalize your multi-cloud pipeline based on your specific funding stage—with clear deliverables named from day one.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <Link
                      href="/solutions/growth-programs#ignite"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">STAGE 1 · 1 MONTH</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors mt-1">
                        Ignite
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Marketplace activation, Better Together messaging &amp; early co-sell in 1 month.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/growth-programs#supernova"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#FA0F9C] block">STAGE 2 · 4 MONTHS</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FA0F9C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#FA0F9C] block transition-colors mt-1">
                        SuperNova
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Designed for APAC &amp; EMEA ISVs entering the US market with CPPO &amp; channel GTM.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/growth-programs#novax"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">STAGE 3 · 6 MONTHS</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors mt-1">
                        NovaX
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Repeatable multi-cloud co-sell, PRM lifecycle automation &amp; SI/GSI pipeline scale.
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
                      <span><strong>Fixed Timeline &amp; Scope:</strong> 1-month Ignite, 4-month SuperNova, or 6-month NovaX with concrete outputs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Investor-Grade GTM Evidence:</strong> Clean co-sell attribution, 2–4× US field engagement, and executive scorecards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Ideal For:</strong> Pre-Series A through Series C SaaS ISVs activating listings, entering the US, or scaling multi-cloud.</span>
                    </li>
                  </ul>

                  <div className="pt-3">
                    <Link
                      href="/solutions/growth-programs"
                      className="btn-gradient btn-3d inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-white font-bold text-xs transition-all group"
                    >
                      <span>View Programs Subpage (Ignite, SuperNova, NovaX)</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 2: EMBEDDED GTM OPERATIONS / SERVICES ── */}
            <div className="card-3d-master rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-100/40 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                      Model 02 · Embedded GTM Operations
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Managed Services (PDMaaS, PMMaaS, PALaaS)
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Flexible execution for ISVs who have a motion but need a fractional execution team to bridge internal resource gaps month-over-month across AWS, Azure, and GCP.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <Link
                      href="/solutions/fractional-operators#pdmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">PDM</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors mt-1">
                        PDMaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Co-Sell Operations: weekly field alignment, ACE progression &amp; MDF workflows.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/fractional-operators#pmmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#FA0F9C] block">PMM</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FA0F9C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#FA0F9C] block transition-colors mt-1">
                        PMMaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Asset &amp; Campaign Engine: Better-Together stories, decks, battlecards &amp; listings.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/fractional-operators#palaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">PAL</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors mt-1">
                        PALaaS
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Strategic Alliance Management: executive alignment, GenAI competencies &amp; QBRs.
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
                      <span><strong>Zero 6-Month Hiring Delay:</strong> Immediate cloud-native PDMs, PMMs, and Alliance Leads in your Slack and CRM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Hands-On Portal &amp; Field Execution:</strong> Active deal registrations, GenAI competencies, and MDF capture.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                      <span><strong>Ideal For:</strong> Teams needing continuous co-sell cadence, messaging, or executive QBR leadership without headcount bloat.</span>
                    </li>
                  </ul>

                  <div className="pt-3">
                    <Link
                      href="/solutions/fractional-operators"
                      className="btn-gradient btn-3d inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-white font-bold text-xs transition-all group"
                    >
                      <span>View Services Subpage (PDMaaS, PMMaaS, PALaaS)</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 3: GTM OPS & INFRASTRUCTURE ── */}
            <div className="card-3d-master rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-pink-100/50 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FA0F9C]">
                      Model 03 · Technical Implementations &amp; Readiness
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      GTM Operations &amp; Infrastructure
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Technical implementations and migration readiness ensuring your infrastructure and partner portals are measurable, compliant, and co-sell ready. Both PRM Revenue Measurement and PCM Portal Migration Readiness are offered as 100% free engagements for eligible AWS partners.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <Link
                      href="/solutions/systems-ops#prmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#008BF8] block">FREE ENGAGEMENT</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#008BF8] block transition-colors mt-1">
                        PRMaaS · Revenue Measurement
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Architecture-aware AWS resource tagging, Terraform/CloudFormation/CDK IaC &amp; attribution compliance.
                      </span>
                    </Link>

                    <Link
                      href="/solutions/systems-ops#pcmaas"
                      className="card-3d group p-3.5 rounded-xl cursor-pointer block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#FA0F9C] block">FREE ENGAGEMENT</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FA0F9C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#FA0F9C] block transition-colors mt-1">
                        PCMaaS · Portal Migration
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5 leading-snug">
                        Unified AWS Partner Central readiness: IAM, SSO, Entra ID permissions &amp; zero duplicate registration risk.
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
                      <span><strong>Architecture-Aware &amp; IaC Native:</strong> Mapped to Partner, Customer, or Hybrid models via Terraform, CloudFormation &amp; CDK.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                      <span><strong>IAM, SSO &amp; Entra ID Alignment:</strong> Verified unified AWS Partner Central access with zero duplicate registrations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                      <span><strong>100% Free Eligible Engagements:</strong> Backed by hyperscaler-aligned readiness programs with zero internal engineering overload.</span>
                    </li>
                  </ul>

                  <div className="pt-3">
                    <Link
                      href="/solutions/systems-ops"
                      className="btn-gradient btn-3d inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-white font-bold text-xs transition-all group"
                    >
                      <span>View GTM Ops &amp; Infra Subpage (PRMaaS, PCMaaS)</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · COMPARISON MATRIX — FIND YOUR EXACT PROGRAM FIT
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="compare-matrix"
        data-nav-title="Compare Fit"
        data-nav-subtitle="Solutions Matrix"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="card-3d-master-dark relative p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] text-white">
            <div className="relative bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] px-5 py-9 sm:p-10 lg:p-12 overflow-hidden space-y-8 backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-pink-400/70 to-transparent" />
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[560px] h-56 rounded-full bg-gradient-to-r from-[#FA0F9C]/18 via-[#7C3AED]/22 to-[#008BF8]/18 blur-[100px]" />

              <div className="text-center max-w-2xl mx-auto space-y-2 relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
                  <Layers className="w-3.5 h-3.5 text-slate-200" />
                  <span>Solutions Matrix</span>
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-2">
                  Find your <span className="text-gradient">exact program fit.</span>
                </h2>
                <p className="text-sm text-slate-300">
                  Compare the timeline, focus, and operational outputs of our Solutions.
                </p>
              </div>

              <div className="well-recessed-dark rounded-[2rem] p-4 sm:p-6 space-y-6 relative z-10">
                {/* Table 1: GTM Execution Programs */}
                <div className="card-3d-dark rounded-3xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      GTM Execution Programs
                    </h3>
                    <Link
                      href="/solutions/growth-programs"
                      className="text-xs font-semibold text-slate-200 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Programs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.04]">
                          <th className="py-3.5 px-5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                            Capability / Focus
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/growth-programs#ignite" className="hover:underline">
                              Ignite
                            </Link>
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white bg-white/[0.06]">
                            <Link href="/solutions/growth-programs#supernova" className="inline-flex items-center gap-2 hover:underline">
                              <span>SuperNova</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-slate-950 font-black">
                                POPULAR
                              </span>
                            </Link>
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/growth-programs#novax" className="hover:underline">
                              NovaX
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {PROGRAMS_MATRIX.map((row) => (
                          <tr key={row.capability} className="hover:bg-white/[0.03] transition-colors">
                            <td className="py-3 px-5 font-semibold text-slate-300 whitespace-nowrap">
                              {row.capability}
                            </td>
                            <td className="py-3 px-5 text-slate-300">{row.ignite}</td>
                            <td className="py-3 px-5 text-white font-medium bg-white/[0.03]">{row.supernova}</td>
                            <td className="py-3 px-5 text-slate-300">{row.novax}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table 2: GTM Execution Services */}
                <div className="card-3d-dark rounded-3xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      GTM Execution Services
                    </h3>
                    <Link
                      href="/solutions/fractional-operators"
                      className="text-xs font-semibold text-slate-200 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.04]">
                          <th className="py-3.5 px-5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                            Capability / Focus
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/fractional-operators#pdmaas" className="hover:underline">
                              PDMaaS
                            </Link>
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/fractional-operators#pmmaas" className="hover:underline">
                              PMMaaS
                            </Link>
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/fractional-operators#palaas" className="hover:underline">
                              PALaaS
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {SERVICES_MATRIX.map((row) => (
                          <tr key={row.capability} className="hover:bg-white/[0.03] transition-colors">
                            <td className="py-3 px-5 font-semibold text-slate-300 whitespace-nowrap">
                              {row.capability}
                            </td>
                            <td className="py-3 px-5 text-slate-300">{row.pdmaas}</td>
                            <td className="py-3 px-5 text-slate-300">{row.pmmaas}</td>
                            <td className="py-3 px-5 text-slate-300">{row.palaas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table 3: GTM Operations & Infrastructure */}
                <div className="card-3d-dark rounded-3xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      GTM Operations &amp; Infrastructure
                    </h3>
                    <Link
                      href="/solutions/systems-ops"
                      className="text-xs font-semibold text-slate-200 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore GTM Ops</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.04]">
                          <th className="py-3.5 px-5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                            Capability / Focus
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/systems-ops#prmaas" className="hover:underline">
                              PRMaaS
                            </Link>
                          </th>
                          <th className="py-3.5 px-5 font-bold text-white">
                            <Link href="/solutions/systems-ops#pcmaas" className="hover:underline">
                              PCMaaS
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {OPS_MATRIX.map((row) => (
                          <tr key={row.capability} className="hover:bg-white/[0.03] transition-colors">
                            <td className="py-3 px-5 font-semibold text-slate-300 whitespace-nowrap">
                              {row.capability}
                            </td>
                            <td className="py-3 px-5 text-slate-300">{row.prmaas}</td>
                            <td className="py-3 px-5 text-slate-300">{row.pcmaas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          04 · COMMON QUESTIONS (FAQ)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        data-nav-title="Common Questions"
        data-nav-subtitle="4 Key Answers"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#008BF8] bg-sky-50 border border-sky-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>COMMON QUESTIONS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Common Questions
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers on how our Programs, Managed Services, and Infrastructure engagements operate.
            </p>
          </div>

          <div className="well-recessed rounded-[2rem] p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COMMON_QUESTIONS.map((item) => (
                <TiltCard
                  key={item.number}
                  variant="light"
                  intensity={6}
                  className="p-6 sm:p-7 rounded-3xl space-y-3"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-[10px] font-mono font-bold text-slate-700">
                    Q{item.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </TiltCard>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05 · FINAL CTA — BOOK AN EXECUTION STRATEGY SESSION
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="solutions-cta"
        data-nav-title="Book Strategy"
        data-nav-subtitle="Execution Session"
        className="relative px-3 pt-8 pb-12 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <ScrollReveal once={false} variant="up">
          <div
            className="card-3d-master-dark relative max-w-4xl mx-auto w-full p-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] select-none rounded-[2.5rem]"
          >
            {/* Interior Dark Cockpit Stage */}
            <div className="relative bg-[#070D1E] px-6 py-10 sm:px-12 sm:py-14 rounded-[calc(2.5rem-2.5px)] overflow-hidden text-center space-y-6">
              {/* Ambient Radial Glows */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#008BF8]/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#FA0F9C]/20 blur-[100px]" />

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold text-slate-200 shadow-2xs backdrop-blur-sm relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Operator-Led Diagnostic · Booking Open</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight relative z-10 max-w-2xl mx-auto">
                Not sure which{" "}
                <span className="text-gradient">solution fits?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto relative z-10 leading-relaxed">
                Book a 30-min Execution Strategy Session. Jen Dawson reviews every submission and confirms the right execution framework for your ISV.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 30-min Execution Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:jen@saasnova.ai?subject=Solutions%20Model%20Inquiry"
                  className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-all w-full sm:w-auto"
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
                <span className="inline-flex items-center gap-2">
                  <span>✓ Active across</span>
                  <span title="AWS" className="icon-3d inline-flex items-center justify-center h-6 px-2 rounded-lg">
                    <Image src="/aws-logo.png" alt="AWS" width={16} height={16} className="h-3 w-auto object-contain" />
                  </span>
                  <span title="Azure" className="icon-3d inline-flex items-center justify-center h-6 px-2 rounded-lg">
                    <Image src="/azure-logo.png" alt="Azure" width={16} height={16} className="h-3 w-auto object-contain" />
                  </span>
                  <span title="GCP" className="icon-3d inline-flex items-center justify-center h-6 px-2 rounded-lg">
                    <Image src="/gcp-logo.png" alt="GCP" width={16} height={16} className="h-3 w-auto object-contain" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
