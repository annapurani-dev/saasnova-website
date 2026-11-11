"use client";

import { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import IgniteSection from "@/components/solutions/IgniteSection";
import SuperNovaSection from "@/components/solutions/SuperNovaSection";
import NovaXSection from "@/components/solutions/NovaXSection";
import { scrollToSectionId, useSolutionHashNavigation } from "@/lib/scrollNavigation";
import {
  Rocket,
  Zap,
  Globe,
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const PROGRAM_TABS = ["ignite", "supernova", "novax"] as const;
type ProgramTab = (typeof PROGRAM_TABS)[number];

export default function GrowthProgramsPage() {
  const [activeTab, setActiveTab] = useState<ProgramTab>("ignite");

  useSolutionHashNavigation(PROGRAM_TABS, setActiveTab);

  const handleJumpToProgram = (tab: ProgramTab) => {
    setActiveTab(tab);
    scrollToSectionId(tab, { updateHash: true });
  };

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
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
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
                className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Program Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#program-selection"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionId("program-selection", { updateHash: true });
                }}
                className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold transition-all w-full sm:w-auto"
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
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
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

          <div className="well-recessed rounded-[2rem] p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Ignite */}
            <TiltCard
              onClick={() => setActiveTab("ignite")}
              variant="light"
              intensity={7}
              className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "ignite"
                  ? "border-2 border-slate-900/20 ring-2 ring-slate-900/10 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.18)]"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200/80 shadow-[0_2px_0_#e2e8f0]">
                    STAGE 1 · 1 MONTH
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Ignite</h3>
                  <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                    Cloud Marketplace GTM Activation
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pre-Series A → Series A · Unlisted or listed with no traction. A focused 1-month sprint to establish Marketplace fundamentals, portal readiness, and early co-sell activation.
                </p>
                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Optimized Marketplace listing &amp; portal readiness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Foundational Better Together field messaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Early co-sell activation &amp; initial pipeline</span>
                  </div>
                </div>
              </div>
              <a
                href="#ignite"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleJumpToProgram("ignite");
                }}
                className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
              >
                <span>View Ignite Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </TiltCard>

            {/* Card 2: SuperNova (Featured) */}
            <TiltCard
              onClick={() => setActiveTab("supernova")}
              variant="light"
              intensity={7}
              className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 overflow-visible ${
                activeTab === "supernova"
                  ? "border-2 border-[#FA0F9C]/60 ring-2 ring-[#FA0F9C]/15 -translate-y-1 shadow-[0_22px_50px_-10px_rgba(250,15,156,0.22)]"
                  : "border border-[#FA0F9C]/35"
              }`}
            >
              <div className="btn-gradient absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full text-white text-[10px] font-mono font-black tracking-wider uppercase shadow-md whitespace-nowrap">
                MOST POPULAR FOR SCALE
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-start">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-200/80 shadow-[0_2px_0_#fbcfe8]">
                    STAGE 2 · 4 MONTHS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">SuperNova</h3>
                  <p className="text-xs font-semibold text-[#FA0F9C] mt-0.5">
                    US Market Entry &amp; Validation
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Series A → Series B · Built for APAC and EMEA ISVs entering the US market to establish channel &amp; CPPO mechanisms and cloud-attributed US pipeline.
                </p>
                <div className="pt-2 border-t border-pink-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>US channel partner, SI/GSI &amp; CPPO activation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>2–4× higher US hyperscaler field engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Fractional alliance leadership &amp; attribution</span>
                  </div>
                </div>
              </div>
              <a
                href="#supernova"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleJumpToProgram("supernova");
                }}
                className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
              >
                <span>View SuperNova Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </TiltCard>

            {/* Card 3: NovaX */}
            <TiltCard
              onClick={() => setActiveTab("novax")}
              variant="light"
              intensity={7}
              className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "novax"
                  ? "border-2 border-[#008BF8]/50 ring-2 ring-[#008BF8]/15 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(0,139,248,0.2)]"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-50 text-[#008BF8] border border-sky-200/80 shadow-[0_2px_0_#bae6fd]">
                    STAGE 3 · 6 MONTHS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">NovaX</h3>
                  <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                    Multi-Cloud GTM Acceleration &amp; Scale
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Series A → Series C · For ISVs expanding beyond early traction into repeatable, attributable multi-cloud revenue across AWS, Azure, and GCP.
                </p>
                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Multi-cloud co-sell across AWS, Azure &amp; GCP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>PRM lifecycle automation &amp; clean tagging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>SI / GSI pipeline &amp; board-level GTM reporting</span>
                  </div>
                </div>
              </div>
              <a
                href="#novax"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleJumpToProgram("novax");
                }}
                className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
              >
                <span>View NovaX Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </TiltCard>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · IGNITE PROGRAM COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <IgniteSection />

      {/* ══════════════════════════════════════════════════════════════
          04 · SUPERNOVA PROGRAM COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <SuperNovaSection />

      {/* ══════════════════════════════════════════════════════════════
          05 · NOVAX PROGRAM COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <NovaXSection />

      {/* ══════════════════════════════════════════════════════════════
          06 · FINAL CTA — BOOK A PROGRAM BRIEFING
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="growth-cta"
        data-nav-title="Book Briefing"
        data-nav-subtitle="Schedule Program Call"
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
