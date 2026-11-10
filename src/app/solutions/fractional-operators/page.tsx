"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Award,
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
  Sparkles,
  Target,
  DollarSign,
  UserCheck,
  Building,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

type RoleTab = "pdmaas" | "pmmaas" | "palaas";

export default function FractionalOperatorsPage() {
  const [activeTab, setActiveTab] = useState<RoleTab>("pdmaas");

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "").replace("-details", "").toLowerCase();
        if (hash === "pdmaas" || hash === "pmmaas" || hash === "palaas") {
          setActiveTab(hash as RoleTab);
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
          01 · HERO — FRACTIONAL OPERATORS INTRODUCTION
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="fractional-hero"
        data-nav-title="Fractional Talent"
        data-nav-subtitle="Embedded MaaS Operators"
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
              <span className="text-[#008BF8]">Services</span>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-3.5 py-1 text-xs font-bold text-sky-800 shadow-2xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#008BF8] animate-pulse" />
              <span>EMBEDDED GTM OPERATORS · NOT ADVISORS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
              World-Class Alliance Leaders.{" "}
              <span className="text-gradient">Embedded in Your Slack.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Skip the 6-month recruiting cycle and $350K+ executive overhead. Deploy certified Partner Development Managers, Partner Marketing Specialists, and Alliance Leads directly into your team next week.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold shadow-[0_12px_28px_rgba(250,15,156,0.3)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Fractional Operator Needs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#operator-selection"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold shadow-2xs transition-all w-full sm:w-auto"
              >
                <span>Select an Operator Role ↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · OPERATOR SELECTION (PDMAAS · PMMAAS · PALAAS)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="operator-selection"
        data-nav-title="Operator Selection"
        data-nav-subtitle="PDM, PMM & PAL"
        className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Three Specialized Functions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Select Your Embedded Operator Role
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Deploy one dedicated operator or assemble an integrated GTM pod to cover pipeline, messaging, and partner tier strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Role 1: PDMaaS */}
            <div
              onClick={() => setActiveTab("pdmaas")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "pdmaas"
                  ? "border-2 border-[#008BF8] border-b-4 border-b-[#0066CC] bg-white ring-4 ring-sky-100 scale-102 shadow-[0_20px_50px_-10px_rgba(0,139,248,0.25)]"
                  : "border border-sky-200/90 border-b-[3.5px] border-b-sky-300 bg-gradient-to-b from-sky-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/10 text-[#008BF8] flex items-center justify-center font-bold shadow-2xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-100 text-[#008BF8] shadow-2xs">
                    CO-SELL &amp; PIPELINE
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PDMaaS</h3>
                  <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                    Partner Development Manager as a Service
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Drives day-to-day deal registrations, ACE opportunity management, field AE introductions, and weekly co-sell cadence to accelerate your active pipeline.
                </p>
                <div className="pt-2 border-t border-sky-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>ACE &amp; Partner Center opportunity logging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Hyperscaler territory AE mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Weekly co-sell pipeline reviews</span>
                  </div>
                </div>
              </div>
              <a
                href="#pdmaas-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View PDMaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Role 2: PMMaaS */}
            <div
              onClick={() => setActiveTab("pmmaas")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "pmmaas"
                  ? "border-2 border-[#FA0F9C] border-b-4 border-b-[#E00A8B] bg-white ring-4 ring-pink-100 scale-102 shadow-[0_20px_50px_-10px_rgba(250,15,156,0.25)]"
                  : "border border-pink-200/90 border-b-[3.5px] border-b-pink-300 bg-gradient-to-b from-pink-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-pink-500/10 text-[#FA0F9C] flex items-center justify-center font-bold shadow-2xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-100 text-[#FA0F9C] shadow-2xs">
                    MESSAGING &amp; MDF
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PMMaaS</h3>
                  <p className="text-xs font-semibold text-[#FA0F9C] mt-0.5">
                    Partner Marketing Manager as a Service
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Crafts cloud-aligned collateral, joint solution briefs, Marketplace listing copy, and writes non-dilutive MDF funding proposals to capture marketing budget.
                </p>
                <div className="pt-2 border-t border-pink-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cloud AE joint battlecards &amp; one-pagers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>MDF funding proposal applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Marketplace listing optimization</span>
                  </div>
                </div>
              </div>
              <a
                href="#pmmaas-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#FA0F9C] hover:bg-pink-600 text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View PMMaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Role 3: PALaaS */}
            <div
              onClick={() => setActiveTab("palaas")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "palaas"
                  ? "border-2 border-[#7C3AED] border-b-4 border-b-[#6D28D9] bg-white ring-4 ring-purple-100 scale-102 shadow-[0_20px_50px_-10px_rgba(124,58,237,0.25)]"
                  : "border border-purple-200/90 border-b-[3.5px] border-b-purple-300 bg-gradient-to-b from-purple-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-[#7C3AED] flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED]">
                    EXECUTIVE STRATEGY
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PALaaS</h3>
                  <p className="text-xs font-semibold text-[#7C3AED] mt-0.5">
                    Partner Alliance Lead as a Service
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provides VP-level alliance leadership. Owns hyperscaler executive relationships, leads quarterly business reviews (QBRs), and drives tier promotions to Premier status.
                </p>
                <div className="pt-2 border-t border-purple-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Executive sponsorship &amp; partner QBRs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Premier Tier elevation roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Multi-cloud alliance governance</span>
                  </div>
                </div>
              </div>
              <a
                href="#palaas-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <span>View PALaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · ROLE DETAILS (RESPONSIBILITIES, ACTIVITIES & DELIVERABLES)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="role-details"
        data-nav-title="Role Details"
        data-nav-subtitle="Responsibilities & Outputs"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          {/* ── ROLE 1: PDMAAS DETAIL CARD ── */}
          <div id="pdmaas" className="rounded-[2.5rem] border border-sky-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl scroll-mt-28">
            <span id="pdmaas-details" className="scroll-mt-28 block" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#008BF8] text-xs font-mono font-bold">
                  ROLE 01 · PIPELINE MOTOR
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  PDMaaS: Partner Development Manager as a Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your dedicated operational deal-maker in the cloud ecosystem. Your PDM operator logs opportunities, navigates complex ACE workflows, and maps cloud sales reps directly to your open deals.
                </p>

                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-[#008BF8]">Primary Focus</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Transforming your sales team into an accredited, high-velocity cloud co-sell engine.
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Hire a Fractional PDM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities, Activities &amp; Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">01</span>
                    <div className="font-bold text-sm text-slate-900">ACE &amp; MACC Deal Registration</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous entry and tracking of target enterprise accounts into AWS ACE and Microsoft Partner Center, ensuring 100% compliance with hyperscaler validation rules.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">02</span>
                    <div className="font-bold text-sm text-slate-900">Territory AE Mapping</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Identifying and connecting with the exact AWS, Azure, and GCP enterprise reps managing your target accounts, positioning your SaaS as a cloud spend catalyst.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">03</span>
                    <div className="font-bold text-sm text-slate-900">Weekly Co-Sell Pipeline Triage</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Leading weekly syncs with your direct sales reps to inspect open deals, verify customer committed spend (EDP/MACC), and accelerate closing timelines.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">04</span>
                    <div className="font-bold text-sm text-slate-900">Deal Escalation &amp; Unblocking</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Intervening when deals get stuck in hyperscaler validation queues, leveraging partner relationships to push opportunities through to completion.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Direct Slack Presence:</span> Your PDM is in your Slack `#alliances` channel every day, joining sales calls, briefing your account executives, and providing live deal updates.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROLE 2: PMMaaS DETAIL CARD ── */}
          <div id="pmmaas" className="rounded-[2.5rem] border border-pink-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl scroll-mt-28">
            <span id="pmmaas-details" className="scroll-mt-28 block" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#FA0F9C] text-xs font-mono font-bold">
                  ROLE 02 · MESSAGING &amp; GRANTS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  PMMaaS: Partner Marketing Manager as a Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cloud reps receive hundreds of pitch decks each month. Your PMM operator crafts razor-sharp collateral that speaks the hyperscaler language, highlighting cloud workload consumption and quota value.
                </p>

                <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-[#FA0F9C]">Primary Focus</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Arming cloud reps with irresistible joint stories and capturing thousands in non-dilutive MDF grants.
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FA0F9C] hover:bg-pink-600 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Hire a Fractional PMM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities, Activities &amp; Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">01</span>
                    <div className="font-bold text-sm text-slate-900">Cloud AE Battlecards</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Creating high-impact joint solution briefs showing cloud account executives why co-selling your SaaS helps them retire quota faster than competing software.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">02</span>
                    <div className="font-bold text-sm text-slate-900">MDF Grant Applications</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Drafting end-to-end Market Development Fund applications with ROI projections, managing fund approvals, and submitting proof-of-performance execution reports.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">03</span>
                    <div className="font-bold text-sm text-slate-900">Marketplace Listing Copy</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Auditing and optimizing product descriptions, search tags, categorization, and feature highlights on AWS, Azure, and GCP marketplaces to maximize buyer conversions.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">04</span>
                    <div className="font-bold text-sm text-slate-900">Joint Webinars &amp; Events</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Coordinating co-branded webinars, AWS re:Invent sessions, and regional cloud summits to generate qualified inbound enterprise leads.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-pink-50/60 border border-pink-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">MDF Self-Funding:</span> Many clients completely offset the cost of their SaaSNova engagement using the $50,000 to $300,000+ in cloud marketing funds our PMMs secure on their behalf.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROLE 3: PALAAS DETAIL CARD ── */}
          <div id="palaas" className="rounded-[2.5rem] border border-purple-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl scroll-mt-28">
            <span id="palaas-details" className="scroll-mt-28 block" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-mono font-bold">
                  ROLE 03 · EXECUTIVE LEADERSHIP
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  PALaaS: Partner Alliance Lead as a Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Seasoned VP-level cloud alliance leadership without the permanent executive salary. Your PAL operator leads high-level executive relationships, represents your company in Quarterly Business Reviews (QBRs), and navigates tier advancements.
                </p>

                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-[#7C3AED]">Primary Focus</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Positioning your organization as a top-priority strategic ISV in AWS, Microsoft, and Google Cloud partner ecosystems.
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Award className="w-4 h-4" />
                  <span>Hire a Fractional PAL</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities, Activities &amp; Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">01</span>
                    <div className="font-bold text-sm text-slate-900">Executive Partner QBRs</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Orchestrating and leading formal Quarterly Business Reviews with cloud alliance directors, presenting revenue metrics, customer logos, and roadmap milestones.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">02</span>
                    <div className="font-bold text-sm text-slate-900">Tier Advancement Roadmaps</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Managing the checklist for AWS Differentiated/Premier tier, Microsoft IP Co-Sell Ready, and GCP Premier status to unlock lower fees and dedicated partner managers.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">03</span>
                    <div className="font-bold text-sm text-slate-900">Multi-Cloud Alliance Governance</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Ensuring your partner strategy balances AWS, Microsoft Azure, and GCP without creating competitive conflicts or resource dilution.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">04</span>
                    <div className="font-bold text-sm text-slate-900">Executive Cloud Sponsorship</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Securing executive champions within hyperscaler vertical teams (e.g. Head of Financial Services or Head of AI) to advocate for your solution internally.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Board &amp; Leadership Reporting:</span> Your PAL prepares executive-ready pipeline slides, attribution metrics, and cloud ARR projections for your quarterly board meetings and leadership updates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          04 · WORKING MODEL — HOW OPERATORS WORK WITH CLIENT'S TEAM
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="working-model"
        data-nav-title="Working Model"
        data-nav-subtitle="Embedded Slack Cadence"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Frictionless Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              How Our Operators Work With Your Team
            </h2>
            <p className="text-sm text-slate-600">
              Embedded directly in your communication tools, operating on a structured weekly cadence with zero onboarding overhead.
            </p>
          </div>

          {/* Model comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-slate-500 space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-slate-400">Alternative 1</div>
              <h3 className="text-lg font-bold text-slate-700">Full-Time Executive Hire</h3>
              <ul className="text-xs space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>$350K+ salary, bonus &amp; equity package</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>4 to 6 months recruitment delay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Single cloud specialty (rarely tri-cloud)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-slate-500 space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-slate-400">Alternative 2</div>
              <h3 className="text-lg font-bold text-slate-700">Traditional Advisors / Agencies</h3>
              <ul className="text-xs space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Theoretical recommendations, zero portal work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Not in your Slack or daily sales syncs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>No accountability for registered deal pipeline</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-[#008BF8] shadow-xl text-slate-900 space-y-4 relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#008BF8] text-white text-[10px] font-mono font-bold">
                THE SAASNOVA WAY
              </div>
              <div className="text-xs font-mono font-bold uppercase text-[#008BF8]">SaaSNova Model</div>
              <h3 className="text-lg font-bold text-slate-900">Embedded Fractional MaaS</h3>
              <ul className="text-xs space-y-2.5 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold">70% lower cost than full-time executive hires</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold">Live in your Slack within 48 to 72 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold">Direct portal operation: ACE, Partner Center &amp; GCP</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Operating Cadence */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#008BF8]">MONDAYS</span>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Pipeline &amp; Prioritization</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Review active sales opportunities, assign co-sell registration actions, and inspect deal stages.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#FA0F9C]">WEDNESDAYS</span>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Hyperscaler AE Outreach</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Direct engagement with AWS/Azure territory reps, sharing battlecards, and aligning on mutual accounts.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#7C3AED]">FRIDAYS</span>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Portal Hygiene &amp; ACE Sync</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Logging customer referrals into cloud portals, updating deal stages, and clearing validation flags.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-1.5">
              <span className="text-xs font-mono font-bold text-emerald-600">MONTHLY</span>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Executive Attribution Report</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Delivering verified metrics: cloud-sourced pipeline, co-sell ARR, MDF secured, and fee reduction savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05 · FINAL CTA — DISCUSS OPERATOR REQUIREMENTS
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="fractional-cta"
        data-nav-title="Book Operator"
        data-nav-subtitle="Schedule Discovery"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#070D1E] p-8 sm:p-12 text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8]" />
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#008BF8]/15 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#FA0F9C]/15 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-mono font-bold text-sky-300">
                READY TO EMBED ELITE GTM TALENT?
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Discuss Your Fractional Operator Requirements
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Connect with Jen Dawson to scope your team&apos;s alliance gaps and map out an embedded operator deployment that starts within days.
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
