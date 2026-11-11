
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import PRMaaSSection from "@/components/solutions/PRMaaSSection";
import PCMaaSSection from "@/components/solutions/PCMaaSSection";
import { scrollToSectionId, useSolutionHashNavigation } from "@/lib/scrollNavigation";
import {
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
  Database,
  RefreshCw,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const SYSTEM_TABS = ["prmaas", "pcmaas"] as const;
type ServiceTab = (typeof SYSTEM_TABS)[number];

export default function SystemsOpsPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("prmaas");

  useSolutionHashNavigation(SYSTEM_TABS, setActiveTab);

  const handleJumpToSystem = (tab: ServiceTab) => {
    setActiveTab(tab);
    scrollToSectionId(tab, { updateHash: true });
  };

  return (
    <div className="relative text-slate-900 overflow-x-clip pb-16">
      {/* ══════════════════════════════════════════════════════════════
          01 · HERO — SYSTEMS & OPS INTRODUCTION
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="systems-hero"
        data-nav-title="Systems & Ops"
        data-nav-subtitle="Infrastructure & Tooling"
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
              <span className="text-[#008BF8]">GTM Ops &amp; Infra</span>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-3.5 py-1 text-xs font-bold text-sky-800 shadow-2xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#008BF8] animate-pulse" />
              <span>ENTERPRISE CLOUD GTM INFRASTRUCTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Automated Cloud Systems.{" "}
              <span className="text-gradient">Zero Operational Drag.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Technical implementations and migration readiness ensuring your AWS infrastructure and partner portals are measurable, compliant, and co-sell ready—100% free engagements for eligible partners.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Systems &amp; Ops Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#service-selection"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionId("service-selection", { updateHash: true });
                }}
                className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold transition-all w-full sm:w-auto"
              >
                <span>Select a System Solution ↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · SERVICE SELECTION (PRMAAS · PCMAAS)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="service-selection"
        data-nav-title="Service Selection"
        data-nav-subtitle="PRM & PCM"
        className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Two Core Infrastructure Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Select Your Infrastructure Engagement
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From architecture-aware IaC revenue tagging to unified AWS Partner Central portal migration readiness without engineering bottlenecks.
            </p>
          </div>

          <div className="well-recessed rounded-[2rem] p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System 1: PRMaaS */}
            <TiltCard
              onClick={() => setActiveTab("prmaas")}
              variant="light"
              intensity={7}
              className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "prmaas"
                  ? "border-2 border-slate-900/20 ring-2 ring-slate-900/10 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.18)]"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200/80 shadow-[0_2px_0_#e2e8f0]">
                    FREE ENGAGEMENT · PRM
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PRMaaS</h3>
                  <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                    Partner Revenue Measurement
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  End-to-end AWS Partner Revenue Measurement implementing resource tagging, Terraform/CloudFormation/CDK IaC integration, and ongoing attribution compliance.
                </p>
                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Architecture-aware (Partner, Customer, Hybrid)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Native Terraform, CloudFormation &amp; CDK tagging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero engineering disruption · Free engagement</span>
                  </div>
                </div>
              </div>
              <a
                href="#prmaas"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleJumpToSystem("prmaas");
                }}
                className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
              >
                <span>View PRMaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </TiltCard>

            {/* System 2: PCMaaS */}
            <TiltCard
              onClick={() => setActiveTab("pcmaas")}
              variant="light"
              intensity={7}
              className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "pcmaas"
                  ? "border-2 border-[#FA0F9C]/55 ring-2 ring-[#FA0F9C]/15 -translate-y-1 shadow-[0_20px_45px_-10px_rgba(250,15,156,0.2)]"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-200/80 shadow-[0_2px_0_#fbcfe8]">
                    FREE ENGAGEMENT · PCM
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PCMaaS</h3>
                  <p className="text-xs font-semibold text-[#FA0F9C] mt-0.5">
                    Partner Portal Migration Readiness
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Frictionless readiness for the unified AWS Partner Central and Marketplace console—aligning IAM, SSO, Entra ID permissions, and account linking.
                </p>
                <div className="pt-2 border-t border-pink-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>IAM, SSO &amp; Entra ID permission alignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero duplicate business registration risk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Partner &amp; Marketplace portal parity validation</span>
                  </div>
                </div>
              </div>
              <a
                href="#pcmaas"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleJumpToSystem("pcmaas");
                }}
                className="btn-gradient btn-3d mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold transition-all"
              >
                <span>View PCMaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </TiltCard>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · PRMAAS INFRASTRUCTURE COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <PRMaaSSection />

      {/* ══════════════════════════════════════════════════════════════
          04 · PCMAAS INFRASTRUCTURE COMPONENT
         ══════════════════════════════════════════════════════════════ */}
      <PCMaaSSection />

      {/* ══════════════════════════════════════════════════════════════
          05 · IMPLEMENTATION — PROCESS & PLATFORMS
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="implementation"
        data-nav-title="Implementation"
        data-nav-subtitle="4 Steps & Platforms"
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
                  Deployment Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  How Implementation &amp; <span className="text-gradient">Deployment Work</span>
                </h2>
                <p className="text-sm text-slate-300">
                  A structured 4-step readiness and technical rollout ensuring zero co-sell disruption and 100% attribution compliance.
                </p>
              </div>

              <div className="well-recessed-dark rounded-[2rem] p-4 sm:p-6 space-y-6 relative z-10">
                {/* 4 Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  <TiltCard variant="dark" intensity={6} className="p-6 rounded-3xl space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono font-bold text-slate-200">
                      STEP 01
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">Discovery &amp; Mapping</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Assess deployment architecture (Partner, Customer, Hybrid) alongside legacy Partner Portal IDs, roles, and account hierarchy.
                    </p>
                  </TiltCard>

                  <TiltCard variant="dark" intensity={6} className="p-6 rounded-3xl space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-pink-500/20 border border-pink-400/25 text-[10px] font-mono font-bold text-pink-200">
                      STEP 02
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">IaC &amp; IAM Blueprinting</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Design non-intrusive Terraform, CloudFormation, and CDK tagging schemas alongside IAM, SSO, and Entra ID permission structures.
                    </p>
                  </TiltCard>

                  <TiltCard variant="dark" intensity={6} className="p-6 rounded-3xl space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/25 text-[10px] font-mono font-bold text-sky-200">
                      STEP 03
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">Validation &amp; Dry Run</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Audit existing resource tags, consolidate legacy portal accounts, and eliminate duplicate registration risks before production cutover.
                    </p>
                  </TiltCard>

                  <TiltCard variant="dark-active" intensity={8} className="p-6 rounded-3xl space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-slate-950 shadow-[0_2px_0_#cbd5e1] text-[10px] font-mono font-bold">
                      STEP 04 · READY
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">Certified Readiness &amp; Go-Live</h3>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Deliver audit-ready documentation, verify ongoing PRM attribution signals, and ensure seamless unified AWS Partner Central access.
                    </p>
                  </TiltCard>
                </div>

                {/* Supported Platforms */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-300">HYPERSCALERS</span>
                      <div className="flex items-center gap-1.5">
                        <div title="AWS" className="icon-3d inline-flex items-center justify-center h-6 px-2 rounded-lg">
                          <Image src="/aws-logo.png" alt="AWS" width={16} height={16} className="h-3 w-auto object-contain" />
                        </div>
                        <div title="Azure" className="icon-3d inline-flex items-center justify-center h-6 px-2 rounded-lg">
                          <Image src="/azure-logo.png" alt="Azure" width={16} height={16} className="h-3 w-auto object-contain" />
                        </div>
                        <div title="GCP" className="icon-3d inline-flex items-center justify-center h-6 px-2 rounded-lg">
                          <Image src="/gcp-logo.png" alt="GCP" width={16} height={16} className="h-3 w-auto object-contain" />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm">Unified Co-Sell Systems</h4>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li>• AWS Partner Central &amp; ACE Pipeline</li>
                      <li>• AWS Marketplace Management Portal</li>
                      <li>• Multi-Cloud Readiness Alignment</li>
                    </ul>
                  </TiltCard>

                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-2">
                    <span className="text-xs font-mono font-bold text-pink-300">INFRASTRUCTURE AS CODE</span>
                    <h4 className="font-bold text-white text-sm">Resource Tagging &amp; IaC</h4>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li>• Terraform &amp; AWS CDK Modules</li>
                      <li>• AWS CloudFormation Templates</li>
                      <li>• Attribution Compliance &amp; Audit Signals</li>
                    </ul>
                  </TiltCard>

                  <TiltCard variant="dark" intensity={5} className="p-5 rounded-2xl space-y-2">
                    <span className="text-xs font-mono font-bold text-sky-300">IDENTITY &amp; GOVERNANCE</span>
                    <h4 className="font-bold text-white text-sm">IAM, SSO &amp; Account Linking</h4>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li>• IAM Role &amp; Permission Mapping</li>
                      <li>• Microsoft Entra ID &amp; SAML SSO</li>
                      <li>• Zero Duplicate Registration Consolidation</li>
                    </ul>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05 · FINAL CTA — DISCUSS SYSTEMS REQUIREMENTS
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="systems-cta"
        data-nav-title="Book Scoping"
        data-nav-subtitle="Schedule Architecture"
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
                  READY TO MODERNIZE YOUR GTM INFRASTRUCTURE?
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Discuss Systems &amp; Operations Requirements
                </h2>

                <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Connect with our cloud GTM architects to schedule your free PRM Revenue Measurement or PCM Partner Central Migration Readiness engagement.
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
