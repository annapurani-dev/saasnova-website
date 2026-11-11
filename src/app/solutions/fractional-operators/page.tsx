"use client";

import { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import PDMaaSSection from "@/components/solutions/PDMaaSSection";
import PMMaaSSection from "@/components/solutions/PMMaaSSection";
import PALaaSSection from "@/components/solutions/PALaaSSection";
import { scrollToSectionId, useSolutionHashNavigation } from "@/lib/scrollNavigation";
import {
  Users,
  TrendingUp,
  Award,
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
  Sparkles,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const ROLE_TABS = ["pdmaas", "pmmaas", "palaas"] as const;
type RoleTab = (typeof ROLE_TABS)[number];

export default function FractionalOperatorsPage() {
  const [activeTab, setActiveTab] = useState<RoleTab>("pdmaas");

  useSolutionHashNavigation(ROLE_TABS, setActiveTab);

  const handleJumpToRole = (tab: RoleTab) => {
    setActiveTab(tab);
    scrollToSectionId(tab, { updateHash: true });
  };

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
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
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
              Stop letting cloud pipeline stall due to internal bandwidth gaps. Embed dedicated Partner Development Managers, Partner Marketing Managers, and Partner Alliance Leads directly into your weekly GTM cadence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Fractional Operator Needs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#operator-selection"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionId("operator-selection", { updateHash: true });
                }}
                className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold transition-all w-full sm:w-auto"
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
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
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

          <div className="well-recessed rounded-[2rem] p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Role 1: PDMaaS */}
              <TiltCard
                onClick={() => setActiveTab("pdmaas")}
                variant="light"
                intensity={7}
                className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${activeTab === "pdmaas"
                    ? "border-2 border-slate-900/20 ring-2 ring-slate-900/10 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.18)]"
                    : ""
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-start">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200/80 shadow-[0_2px_0_#e2e8f0]">
                      PARTNER DEVELOPMENT
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">PDMaaS</h3>
                    <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                      PDM as a Service
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We embed as your fractional PDM to run a disciplined, weekly co-sell motion—handling field alignment, opportunity progression, and portal hygiene.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Field Alignment: account mapping &amp; seller syncs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Pipeline Management: ACE &amp; Partner Center progression</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Funding Workflows: hyperscaler MDF &amp; MAP capture</span>
                    </div>
                  </div>
                </div>
                <a
                  href="#pdmaas"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleJumpToRole("pdmaas");
                  }}
                  className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
                >
                  <span>View PDMaaS Breakdown ↓</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </TiltCard>

              {/* Role 2: PMMaaS */}
              <TiltCard
                onClick={() => setActiveTab("pmmaas")}
                variant="light"
                intensity={7}
                className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${activeTab === "pmmaas"
                    ? "border-2 border-[#FA0F9C]/55 ring-2 ring-[#FA0F9C]/15 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(250,15,156,0.2)]"
                    : ""
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-start">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-200/80 shadow-[0_2px_0_#fbcfe8]">
                      PARTNER MARKETING
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">PMMaaS</h3>
                    <p className="text-xs font-semibold text-[#FA0F9C] mt-0.5">
                      PMM as a Service
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cloud-native PMM continuously delivering tailored “Better-Together” narratives, co-sell pitch decks, competitive battlecards, and Marketplace copy.
                  </p>
                  <div className="pt-2 border-t border-pink-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Cloud Narratives: Better-Together positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Field Readiness: decks, solution briefs &amp; battlecards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Marketplace Optimization: GenAI &amp; conversion copy</span>
                    </div>
                  </div>
                </div>
                <a
                  href="#pmmaas"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleJumpToRole("pmmaas");
                  }}
                  className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
                >
                  <span>View PMMaaS Breakdown ↓</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </TiltCard>

              {/* Role 3: PALaaS */}
              <TiltCard
                onClick={() => setActiveTab("palaas")}
                variant="light"
                intensity={7}
                className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${activeTab === "palaas"
                    ? "border-2 border-[#008BF8]/55 ring-2 ring-[#008BF8]/15 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(0,139,248,0.2)]"
                    : ""
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-start">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-sky-50 text-[#008BF8] border border-sky-200/80 shadow-[0_2px_0_#bae6fd]">
                      ALLIANCE LEAD
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">PALaaS</h3>
                    <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                      PAL as a Service
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Executive alignment, multi-cloud coordination, co-sell designation navigation, and structured QBRs across AWS, Azure, and GCP.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Executive Alignment: bridge strategy &amp; execution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Program Navigation: ISVA, MACC &amp; competencies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Structured QBRs: scorecards &amp; board ARR tracking</span>
                    </div>
                  </div>
                </div>
                <a
                  href="#palaas"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleJumpToRole("palaas");
                  }}
                  className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
                >
                  <span>View PALaaS Breakdown ↓</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </TiltCard>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · PDMAAS OPERATOR COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <PDMaaSSection />

      {/* ══════════════════════════════════════════════════════════════
          04 · PMMAAS OPERATOR COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <PMMaaSSection />

      {/* ══════════════════════════════════════════════════════════════
          05 · PALAAS OPERATOR COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <PALaaSSection />

      {/* ══════════════════════════════════════════════════════════════
          06 · WORKING MODEL — HOW OPERATORS WORK WITH CLIENT'S TEAM
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="working-model"
        data-nav-title="Working Model"
        data-nav-subtitle="Embedded Slack Cadence"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="card-3d-master-dark relative p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] text-white select-none">
            <div className="relative bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] px-5 py-9 sm:p-10 lg:p-12 overflow-hidden space-y-8 backdrop-blur-2xl">
              {/* Prismatic Top Line & Ambient Glows */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-pink-400/70 to-transparent" />
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[560px] h-56 rounded-full bg-gradient-to-r from-[#FA0F9C]/18 via-[#7C3AED]/22 to-[#008BF8]/18 blur-[100px]" />

              <div className="text-center max-w-2xl mx-auto space-y-2 relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
                  Frictionless Integration
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  How Our Operators Work <span className="text-gradient">With Your Team</span>
                </h2>
                <p className="text-sm text-slate-300">
                  Embedded directly in your communication tools, operating on a structured weekly cadence with zero onboarding overhead.
                </p>
              </div>

              <div className="well-recessed-dark rounded-[2rem] p-4 sm:p-6 space-y-6 relative z-10">
                {/* Model comparison cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <TiltCard variant="dark" intensity={6} className="p-6 rounded-3xl text-slate-300 space-y-4">
                    <div className="text-xs font-mono font-bold uppercase text-slate-400">Alternative 1</div>
                    <h3 className="text-lg font-bold text-white">Full-Time Executive Hire</h3>
                    <ul className="text-xs space-y-2.5 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">✕</span>
                        <span>$350K+ salary, bonus &amp; equity package</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">✕</span>
                        <span>4 to 6 months recruitment delay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">✕</span>
                        <span>Single cloud specialty (rarely tri-cloud)</span>
                      </li>
                    </ul>
                  </TiltCard>

                  <TiltCard variant="dark" intensity={6} className="p-6 rounded-3xl text-slate-300 space-y-4">
                    <div className="text-xs font-mono font-bold uppercase text-slate-400">Alternative 2</div>
                    <h3 className="text-lg font-bold text-white">Traditional Advisors / Agencies</h3>
                    <ul className="text-xs space-y-2.5 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">✕</span>
                        <span>Theoretical recommendations, zero portal work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">✕</span>
                        <span>Not in your Slack or daily sales syncs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">✕</span>
                        <span>No accountability for registered deal pipeline</span>
                      </li>
                    </ul>
                  </TiltCard>

                  <TiltCard variant="dark-active" intensity={8} className="p-6 rounded-3xl text-white space-y-4 relative overflow-visible">
                    <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-white text-slate-950 text-[10px] font-mono font-bold shadow-[0_2px_0_#cbd5e1]">
                      THE SAASNOVA WAY
                    </div>
                    <div className="text-xs font-mono font-bold uppercase text-slate-200">SaaSNova Model</div>
                    <h3 className="text-lg font-bold text-white">Embedded Fractional MaaS</h3>
                    <ul className="text-xs space-y-2.5 text-slate-100">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold">70% lower cost than full-time executive hires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold">Live in your Slack within 48 to 72 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold">Direct portal operation: ACE, Partner Center &amp; GCP</span>
                      </li>
                    </ul>
                  </TiltCard>
                </div>

                {/* Operating Cadence */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-1">
                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-white/10 text-[11px] font-mono font-bold text-slate-200">MONDAYS</span>
                    <h4 className="font-bold text-white text-xs sm:text-sm pt-1">Pipeline &amp; Prioritization</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Review active sales opportunities, assign co-sell registration actions, and inspect deal stages.
                    </p>
                  </TiltCard>
                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-pink-500/20 text-[11px] font-mono font-bold text-pink-200">WEDNESDAYS</span>
                    <h4 className="font-bold text-white text-xs sm:text-sm pt-1">Hyperscaler AE Outreach</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Direct engagement with AWS/Azure territory reps, sharing battlecards, and aligning on mutual accounts.
                    </p>
                  </TiltCard>
                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-sky-500/20 text-[11px] font-mono font-bold text-sky-200">FRIDAYS</span>
                    <h4 className="font-bold text-white text-xs sm:text-sm pt-1">Portal Hygiene &amp; ACE Sync</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Logging customer referrals into cloud portals, updating deal stages, and clearing validation flags.
                    </p>
                  </TiltCard>
                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-500/20 text-[11px] font-mono font-bold text-emerald-300">MONTHLY</span>
                    <h4 className="font-bold text-white text-xs sm:text-sm pt-1">Executive Attribution Report</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Delivering verified metrics: cloud-sourced pipeline, co-sell ARR, MDF secured, and fee reduction savings.
                    </p>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
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
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-4xl">
          <div className="card-3d-master-dark relative p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] text-white">
            <div className="relative overflow-hidden rounded-[calc(2.5rem-2.5px)] bg-[#070D1E] p-8 sm:p-12">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-pink-400/70 to-transparent" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#008BF8]/15 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#FA0F9C]/15 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-mono font-bold text-slate-200 backdrop-blur-sm">
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
                    className="btn-gradient btn-3d inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your 30-Min Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all w-full sm:w-auto"
                  >
                    <span>Back to Solutions Overview</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
