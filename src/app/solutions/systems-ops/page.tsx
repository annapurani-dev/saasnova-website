
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cpu,
  Store,
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
  ShieldCheck,
  Database,
  RefreshCw,
  GitBranch,
  Server,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

type ServiceTab = "prmaas" | "pcmaas" | "sfaas";

export default function SystemsOpsPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("prmaas");

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "").replace("-details", "").toLowerCase();
        if (hash === "prmaas" || hash === "pcmaas" || hash === "sfaas") {
          setActiveTab(hash as ServiceTab);
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
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
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
              Eliminate manual spreadsheets, broken portal webhooks, and slow deal registration. Deploy turnkey marketplace storefronts, CRM-to-ACE synchronization, and partner management infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold shadow-[0_12px_28px_rgba(250,15,156,0.3)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Systems &amp; Ops Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#service-selection"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold shadow-2xs transition-all w-full sm:w-auto"
              >
                <span>Select a System Solution ↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · SERVICE SELECTION (PRMAAS · PCMAAS · SFAAS)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="service-selection"
        data-nav-title="Service Selection"
        data-nav-subtitle="PRM, PCM & SFaaS"
        className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Three Core Infrastructure Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Select Your Operational Tooling
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From transacting marketplace listings to bidirectional CRM sync, our systems remove operational friction from every deal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* System 1: PRMaaS */}
            <div
              onClick={() => setActiveTab("prmaas")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "prmaas"
                  ? "border-2 border-[#008BF8] border-b-4 border-b-[#0066CC] bg-white ring-4 ring-sky-100 scale-102 shadow-[0_20px_50px_-10px_rgba(0,139,248,0.25)]"
                  : "border border-sky-200/90 border-b-[3.5px] border-b-sky-300 bg-gradient-to-b from-sky-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/10 text-[#008BF8] flex items-center justify-center font-bold shadow-2xs">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-100 text-[#008BF8] shadow-2xs">
                    SYSTEM 1 · ATTRIBUTION INFRA
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PRMaaS</h3>
                  <p className="text-xs font-semibold text-[#008BF8] mt-0.5">
                    Partner Relationship Management as a Service
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Turnkey partner ecosystem portal setup, referral registration, partner directory management, and multi-tier channel attribution tracking.
                </p>
                <div className="pt-2 border-t border-sky-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Branded self-service partner portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Referral link &amp; deal attribution tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated partner tier validation</span>
                  </div>
                </div>
              </div>
              <a
                href="#prmaas-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View PRMaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* System 2: PCMaaS */}
            <div
              onClick={() => setActiveTab("pcmaas")}
              className={`card-3d relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                activeTab === "pcmaas"
                  ? "border-2 border-[#FA0F9C] border-b-4 border-b-[#E00A8B] bg-white ring-4 ring-pink-100 scale-102 shadow-[0_20px_50px_-10px_rgba(250,15,156,0.25)]"
                  : "border border-pink-200/90 border-b-[3.5px] border-b-pink-300 bg-gradient-to-b from-pink-50/70 to-white/95 hover:-translate-y-1.5"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-pink-500/10 text-[#FA0F9C] flex items-center justify-center font-bold">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-100 text-[#FA0F9C]">
                    SYSTEM 2 · CO-SELL SYNC
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PCMaaS</h3>
                  <p className="text-xs font-semibold text-[#FA0F9C] mt-0.5">
                    Partner Co-Sell Management as a Service
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bidirectional pipeline automation connecting Salesforce or HubSpot with AWS ACE and Microsoft Partner Center for instant deal sync.
                </p>
                <div className="pt-2 border-t border-pink-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bidirectional CRM ↔ ACE synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated duplicate &amp; collision prevention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Real-time cloud rep status notifications</span>
                  </div>
                </div>
              </div>
              <a
                href="#pcmaas-details"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#FA0F9C] hover:bg-pink-600 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <span>View PCMaaS Breakdown ↓</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · SERVICE DETAILS (CAPABILITIES, FEATURES & DELIVERABLES)
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="service-details"
        data-nav-title="Service Details"
        data-nav-subtitle="Capabilities & Features"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          {/* ── SERVICE 1: PRMAAS DETAIL CARD ── */}
          <div id="prmaas" className="rounded-[2.5rem] border border-sky-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl scroll-mt-28">
            <span id="prmaas-details" className="scroll-mt-28 block" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#008BF8] text-xs font-mono font-bold">
                  INFRASTRUCTURE 01 · PRMAAS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  PRMaaS: Partner Relationship Management Infrastructure
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Stop managing ecosystem partners via disconnected email threads. PRMaaS deploys an institutional-grade partner portal where resellers, system integrators (SIs), and MSPs register deals and track payouts.
                </p>

                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-[#008BF8]">Primary Capability</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Full lifecycle partner onboarding, tier progression gating, and automated attribution.
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Database className="w-4 h-4" />
                  <span>Configure PRMaaS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Capabilities &amp; Features
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">01</span>
                    <div className="font-bold text-sm text-slate-900">Branded Self-Service Portal</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Custom domain partner portal with role-based access control, allowing external partners to submit deals and access enablement resources securely.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">02</span>
                    <div className="font-bold text-sm text-slate-900">Deal Registration Rules Engine</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automated 90-day deal exclusivity windows, conflicting lead detection, and multi-tier approval workflows for channel managers.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">03</span>
                    <div className="font-bold text-sm text-slate-900">Tier Management &amp; Scoring</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automated partner level qualification (Registered, Silver, Gold, Premier) based on closed ARR, certified staff count, and deal volume.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#008BF8]">04</span>
                    <div className="font-bold text-sm text-slate-900">Commission &amp; Referral Payouts</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Accurate margin calculation, commission scheduling, and automated statements for channel partners and referrers.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Zero Administrative Overhead:</span> We handle portal architecture, SSO authentication, email triggers, and partner documentation templates.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SERVICE 2: PCMAAS DETAIL CARD ── */}
          <div id="pcmaas" className="rounded-[2.5rem] border border-pink-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl scroll-mt-28">
            <span id="pcmaas-details" className="scroll-mt-28 block" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#FA0F9C] text-xs font-mono font-bold">
                  INFRASTRUCTURE 02 · PCMAAS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  PCMaaS: Automated Multi-Cloud Co-Sell Synchronization
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dual-entry is where co-sell deals get delayed. Sales reps should never log deals once in Salesforce and then re-enter the exact same data into AWS ACE or Microsoft Partner Center. PCMaaS automates the entire bridge.
                </p>

                <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-[#FA0F9C]">Primary Capability</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Real-time bidirectional sync between CRM and cloud partner portals with zero manual intervention.
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FA0F9C] hover:bg-pink-600 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Automate Co-Sell Sync</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Capabilities &amp; Features
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">01</span>
                    <div className="font-bold text-sm text-slate-900">CRM-to-ACE Auto-Registration</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      When an opportunity reaches &ldquo;Qualified&rdquo; in Salesforce or HubSpot, PCMaaS maps the fields and submits the ACE registration automatically.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">02</span>
                    <div className="font-bold text-sm text-slate-900">Real-Time Cloud Stage Sync</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      When an AWS or Azure territory manager approves an opportunity or updates contact notes, your CRM record updates automatically.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">03</span>
                    <div className="font-bold text-sm text-slate-900">Duplicate Collision Prevention</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Intelligent fuzzy matching prevents duplicate registrations across reseller partners or multiple internal sales territories.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FA0F9C]">04</span>
                    <div className="font-bold text-sm text-slate-900">Instant Slack / Teams Alerts</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your sales team receives real-time notifications in Slack whenever a cloud rep attaches to a deal or requests an intro call.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-pink-50/60 border border-pink-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <GitBranch className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Compatible With All Major CRMs:</span> Native support for Salesforce Sales Cloud, HubSpot Enterprise, and Microsoft Dynamics 365.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SERVICE 3: SFAAS DETAIL CARD ── */}
          <div id="sfaas" className="rounded-[2.5rem] border border-purple-200 bg-white/85 p-6 sm:p-10 shadow-xl backdrop-blur-xl scroll-mt-28">
            <span id="sfaas-details" className="scroll-mt-28 block" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-mono font-bold">
                  INFRASTRUCTURE 03 · SFAAS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  SFaaS: Marketplace Storefront as a Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your turnkey transacting storefront across AWS Marketplace, Azure Marketplace, and Google Cloud Marketplace. We handle listing creation, CPQ pricing, private offer templates, and billing webhooks.
                </p>

                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-[#7C3AED]">Primary Capability</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Deploy, transact, and automate custom private offers with zero technical debt for your core engineering team.
                  </div>
                </div>

                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-all shadow-md w-full sm:w-auto"
                >
                  <Store className="w-4 h-4" />
                  <span>Deploy Storefront as a Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Capabilities &amp; Features
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">01</span>
                    <div className="font-bold text-sm text-slate-900">Multi-Cloud Listing Deployment</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      End-to-end publishing across AWS, Azure, and Google Cloud with optimized SEO descriptions, categorized tags, and compliance approvals.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">02</span>
                    <div className="font-bold text-sm text-slate-900">Custom Private Offer Engine</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Instant generation of bespoke enterprise private quotes with custom payment schedules, negotiated EULA terms, and multi-year renewals.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">03</span>
                    <div className="font-bold text-sm text-slate-900">CPQ Pricing Dimensions</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Complex billing models configured cleanly: user-seat pricing, monthly/annual contract commitments, and dimension-metered usage billing.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#7C3AED]">04</span>
                    <div className="font-bold text-sm text-slate-900">Automated Provisioning Webhooks</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Robust, hardened API endpoints that handle buyer registration tokens, subscription entitlement grants, and instant SaaS account provisioning.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Contract Parity:</span> Buyers transact through their existing cloud consolidated billing invoice while your organization retains full commercial terms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          04 · IMPLEMENTATION — PROCESS & PLATFORMS
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="implementation"
        data-nav-title="Implementation"
        data-nav-subtitle="4 Steps & Platforms"
        className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Deployment Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              How Implementation &amp; Deployment Work
            </h2>
            <p className="text-sm text-slate-600">
              A structured 4-step engineering rollout that guarantees zero downtime and 100% compliance.
            </p>
          </div>

          {/* 4 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white/85 border border-slate-200/80 shadow-md">
              <div className="text-xs font-mono font-bold text-[#008BF8] mb-2">STEP 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Audit &amp; Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review of your CRM schema, cloud partner registrations, existing pricing plans, and security authorization requirements.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/85 border border-slate-200/80 shadow-md">
              <div className="text-xs font-mono font-bold text-[#FA0F9C] mb-2">STEP 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Configuration &amp; Schema</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Configuring custom fields in Salesforce/HubSpot, structuring marketplace CPQ dimensions, and setting up PRM portal permissions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/85 border border-slate-200/80 shadow-md">
              <div className="text-xs font-mono font-bold text-[#7C3AED] mb-2">STEP 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Integration &amp; Sandbox</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Testing webhook payloads in sandbox, validating mock Private Offers, and verifying bidirectional deal status synchronization.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/85 border border-slate-200/80 shadow-md">
              <div className="text-xs font-mono font-bold text-emerald-600 mb-2">STEP 04</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Deployment &amp; Ops</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Production go-live with active transacting listings, live CRM sync, and continuous webhook health monitoring.
              </p>
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#008BF8]">HYPERSCALERS</span>
              <h4 className="font-bold text-slate-900 text-sm">Cloud Marketplaces</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• AWS Marketplace &amp; APN ACE</li>
                <li>• Microsoft Commercial Marketplace &amp; Partner Center</li>
                <li>• Google Cloud Marketplace &amp; Partner Advantage</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#FA0F9C]">CRM &amp; PIPELINE</span>
              <h4 className="font-bold text-slate-900 text-sm">Sales Systems</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Salesforce Sales Cloud (Native AppExchange)</li>
                <li>• HubSpot CRM (Webhooks &amp; Custom Objects)</li>
                <li>• Microsoft Dynamics 365</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#7C3AED]">PARTNER TECH</span>
              <h4 className="font-bold text-slate-900 text-sm">Ecosystem Tooling</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• WorkSpan &amp; Suger Integration</li>
                <li>• PartnerStack &amp; Allbound</li>
                <li>• Crossbeam &amp; Reveal Account Mapping</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#070D1E] p-8 sm:p-12 text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8]" />
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#008BF8]/15 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#FA0F9C]/15 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-mono font-bold text-sky-300">
                READY TO MODERNIZE YOUR GTM INFRASTRUCTURE?
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Discuss Systems &amp; Operations Requirements
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Connect with our technical architects to scope your CRM, Marketplace Storefront, and PRM integration timeline.
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
