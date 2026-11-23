"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Handshake,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  FileCheck2,
  Cloud,
  Cpu,
  Building2,
  Users,
  Compass,
  Mic,
  Presentation,
  Network,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useSolutionHashNavigation } from "@/lib/scrollNavigation";
import PartnerDrawer from "@/components/partners/PartnerDrawer";
import {
  PARTNERS_REGISTRY,
  PARTNERS_LIST,
  PartnerDossier,
} from "@/components/partners/partnersData";

const CALENDLY_URL =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const CLOUD_HASH_IDS = [
  "cloud-hero",
  "cloud-nexus",
  "cloud-cta",
] as const;

const ALLIANCE_HASH_IDS = [
  "alliance-hero",
  "three-pi-partners",
  "si-gsi-partners",
  "alliance-cta",
] as const;

// Commitment Pills for Hyperscaler Field SMEs
const CLOUD_PILLS = [
  "L5+ AWS Leaders & Partner-Aligned Amazonians",
  "Microsoft Azure Enterprise Field Specialists",
  "Google Cloud Partner Advantage Experts",
];

// Authentic Hyperscaler SME Cards from Live Website
const HYPERSCALER_SME_CARDS = [
  {
    id: "aws",
    cloudParam: "AWS",
    name: "AWS Partner GTM",
    tag: "AMAZONIANS & SMEs",
    tagColor: "bg-amber-50 text-[#C87000] border-amber-200/80",
    borderTopColor: "border-t-[3px] border-t-[#FF9900]",
    logo: "/aws-logo.png",
    briefDesc: "AWS Leaders & SMEs (L5+) and Partner-aligned Amazonians.",
    description:
      "AWS Leaders & SMEs (L5+) and Partner-aligned Amazonians. Register for speaking opportunities, co-sell enablement sessions, ISV advisory panels, and AWS ecosystem events.",
    bullets: [
      "GTM Speaking Opportunities",
      "Co-Sell Enablement Sessions",
      "ISV Advisory Panels",
      "Marketplace GTM Workshops",
    ],
    buttonText: "Register as AWS SME",
  },
  {
    id: "azure",
    cloudParam: "Azure",
    name: "Azure Partner GTM",
    tag: "MICROSOFT FIELD & SMEs",
    tagColor: "bg-blue-50 text-[#0055A0] border-blue-200/80",
    borderTopColor: "border-t-[3px] border-t-[#0078D4]",
    logo: "/azure-logo.png",
    briefDesc: "Microsoft field leaders and Azure enterprise SMEs.",
    description:
      "Microsoft field leaders and Azure SMEs. Register for co-sell enablement, ISV activation workshops, Marketplace GTM sessions, and Microsoft ecosystem networking events.",
    bullets: [
      "GTM Speaking Opportunities",
      "ISV Co-Sell Enablement",
      "Marketplace GTM Workshops",
      "Microsoft Ecosystem Events",
    ],
    buttonText: "Register as Azure SME",
  },
  {
    id: "gcp",
    cloudParam: "Google Cloud",
    name: "GCP Partner GTM",
    tag: "GOOGLE CLOUD FIELD",
    tagColor: "bg-emerald-50 text-[#1A5CB8] border-emerald-200/80",
    borderTopColor: "border-t-[3px] border-t-[#4285F4]",
    logo: "/gcp-logo.png",
    briefDesc: "Google Cloud field leaders and Partner Advantage SMEs.",
    description:
      "Google Cloud field leaders and GCP SMEs. Register for Partner Advantage GTM sessions, ISV advisory events, co-sell workshops, and Google Cloud ecosystem networking.",
    bullets: [
      "GTM Speaking Opportunities",
      "ISV Co-Sell Enablement",
      "Co-Sell Workshops",
      "Google Cloud Ecosystem Events",
    ],
    buttonText: "Register as GCP SME",
  },
];

// Shared Engagement Tracks Common across All Clouds
const SHARED_ENGAGEMENT_TRACKS = [
  { icon: Mic, label: "GTM Speaking Opportunities" },
  { icon: Users, label: "Co-Sell Enablement Sessions" },
  { icon: Compass, label: "ISV Advisory Panels" },
  { icon: Presentation, label: "Marketplace GTM Workshops" },
];

const CLOUD_DOSSIER_KEYS = {
  AWS: "aws-gtm",
  Azure: "azure-gtm",
  "Google Cloud": "gcp-gtm",
} as const;

type CloudType = keyof typeof CLOUD_DOSSIER_KEYS;

const INVITATION_OPTIONS = [
  "GTM Speaking Opportunities",
  "ISV Advisory Panels",
  "Co-Sell Deal Desk & Enablement",
  "Marketplace Activation Workshops",
  "Ecosystem Networking Events",
];

// Authentic "Why Cloud Leaders Partner with SaaSNova" from Live Website
const WHY_PARTNER_BENEFITS = [
  {
    icon: Users,
    title: "Direct ISV Advisory Access",
    desc: "Connect directly with pre-vetted, high-growth B2B software founders actively scaling their cloud marketplace co-sell motions.",
  },
  {
    icon: Mic,
    title: "Executive Thought Leadership",
    desc: "Featured speaking spots on The Jen GTM Show, live LinkedIn Audio masterclasses, and executive roundtables with cloud leaders.",
  },
  {
    icon: Network,
    title: "Frictionless Co-Sell Velocity",
    desc: "Collaborate on qualified enterprise customer accounts to unlock ACE, Partner Center, and Partner Advantage pipeline credit.",
  },
];

const ALLIANCE_PILLARS = [
  {
    step: "01",
    title: "Turnkey Listing Automation",
    desc: "SaaSify's software engine integrates AWS & Azure billing APIs, customer webhook onboarding, and metering with zero custom engineering required from your team.",
  },
  {
    step: "02",
    title: "500+ Engineers on Demand",
    desc: "When enterprise cloud migration, legacy modernization, or custom multi-cloud microservices are required to close a deal, Pronix engineers execute the build.",
  },
  {
    step: "03",
    title: "Pre-Competed Federal Contracts",
    desc: "Carahsoft holds pre-negotiated government contract vehicles (NASA SEWP V, GSA Schedule 70, NASPO) allowing public sector agencies to buy software without multi-month procurement cycles.",
  },
];

const ALLIANCE_BADGES: Record<string, { badge: string; color: string; buttonText: string }> = {
  saasify: {
    badge: "3PI Partner · Listing Infrastructure",
    color: "bg-sky-50 text-[#008BF8] border-sky-200/80",
    buttonText: "View Joint Starter Bundle",
  },
  workspan: {
    badge: "3PI Partner · Co-Sell Automation",
    color: "bg-sky-50 text-[#008BF8] border-sky-200/80",
    buttonText: "View Co-Sell Sync Dossier",
  },
  pronix: {
    badge: "SI / GSI · Enterprise Deployment",
    color: "bg-pink-50 text-[#FA0F9C] border-pink-200/80",
    buttonText: "View SI Delivery Dossier",
  },
  carahsoft: {
    badge: "SI / GSI · Distribution & Public Sector",
    color: "bg-pink-50 text-[#FA0F9C] border-pink-200/80",
    buttonText: "View Gov Contracts Dossier",
  },
};

function PartnersContent() {
  const searchParams = useSearchParams();
  const rawView = searchParams.get("view");
  const isAllianceView = rawView === "strategic-alliances";

  const [selectedPartner, setSelectedPartner] = useState<PartnerDossier | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Active Hyperscaler Cloud Selection
  const [selectedCloud, setSelectedCloud] = useState<CloudType>("AWS");
  const selectedDossier = PARTNERS_REGISTRY[CLOUD_DOSSIER_KEYS[selectedCloud]];

  // Hash navigation hook
  const handleSectionSelect = useCallback(() => { }, []);
  useSolutionHashNavigation(
    isAllianceView ? ALLIANCE_HASH_IDS : CLOUD_HASH_IDS,
    handleSectionSelect
  );

  // Check query param for drawer opening e.g. ?partner=saasify
  useEffect(() => {
    const partnerQuery = searchParams.get("partner");
    if (partnerQuery && PARTNERS_REGISTRY[partnerQuery]) {
      setSelectedPartner(PARTNERS_REGISTRY[partnerQuery]);
      setDrawerOpen(true);
    }
  }, [searchParams]);

  const handleOpenDrawer = (partner: PartnerDossier) => {
    setSelectedPartner(partner);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const strategicAlliances = PARTNERS_LIST.filter((p) => p.category !== "cloud-gtm");

  return (
    <div className="relative text-slate-900 overflow-x-clip min-h-screen select-none">
      {/* ════════════════════════════════════════════════════════════════════════
          VIEW 1: HYPERSCALER FIELD SMES (FOR AMAZONIANS, MICROSOFTIES & GOOGLERS)
          Rendered when view is "cloud-marketplaces" or default.
          Zero cross-bleed from alliances.
          ════════════════════════════════════════════════════════════════════════ */}
      {!isAllianceView ? (
        <div className="space-y-16 animate-in fade-in duration-200">
          {/* 1. CLOUD HERO STAGE */}
          <section
            id="cloud-hero"
            data-nav-title="Cloud Overview"
            data-nav-subtitle="For Amazonians, Microsofties & Googlers"
            className="relative px-4 sm:px-6 lg:px-8 min-h-[580px] lg:min-h-[620px] flex flex-col justify-center -mt-[60px] sm:-mt-[62px] pt-[86px] sm:pt-[96px] pb-10 sm:pb-12 overflow-hidden scroll-mt-28 lg:scroll-mt-32 select-none"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[950px] lg:w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.18)_0%,rgba(186,230,253,0.25)_35%,rgba(0,139,248,0.06)_65%,transparent_80%)] blur-[90px]"
            />

            <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto w-full max-w-6xl">
              <div className="relative mx-auto w-full">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
                    boxShadow:
                      "0 35px 75px -15px rgba(15, 23, 42, 0.18), 0 18px 38px -10px rgba(0, 139, 248, 0.22), 0 4px 12px rgba(15, 23, 42, 0.06), inset 0 2px 1px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(0, 139, 248, 0.12)",
                  }}
                  className="relative overflow-hidden rounded-tl-[68px] sm:rounded-tl-[80px] rounded-br-[68px] sm:rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 flex flex-col justify-center space-y-7 sm:space-y-9"
                >
                  <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[260px] rounded-full bg-white/60 blur-[70px]" />
                  <div className="pointer-events-none absolute bottom-0 left-0 w-[460px] h-[300px] rounded-full bg-[#008BF8]/20 blur-[100px]" />

                  {/* Headline & Intro */}
                  <div className="relative z-10 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-sky-300/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8] shadow-[0_0_8px_#008BF8]" />
                      <Cloud className="w-3.5 h-3.5 text-[#008BF8]" />
                      <span>Cloud GTM Partners</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12]">
                      For Amazonians, Microsofties &amp;{" "}
                      <span className="text-gradient">Googlers.</span>
                    </h1>

                    <p className="text-[14px] text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
                      SaaSNova works directly with AWS, Azure, and Google Cloud field leaders and SMEs. Register to participate in co-sell enablement sessions, ISV advisory panels, and marketplace GTM workshops.
                    </p>
                  </div>

                  {/* 3 Stadium Commitment Pills */}
                  <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto w-full pt-1">
                    {CLOUD_PILLS.map((pill, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 border border-sky-200/90 shadow-[0_4px_12px_rgba(0,139,248,0.1),inset_0_1px_0_#fff] text-xs sm:text-[12.5px] font-semibold text-slate-800 backdrop-blur-xs transition hover:bg-white hover:border-sky-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008BF8] shrink-0" />
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Precision Horizon Gradient Line Connecting to Tracks ── */}
            <div className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none z-30" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA0F9C]/50 via-[#008BF8]/60 to-transparent opacity-90" />
            </div>
          </section>

          {/* 2. CLOUD PARTNER GTM TRACKS & WHY PARTNER HUB */}
          <section
            id="cloud-nexus"
            data-nav-title="Co-Sell Nexus"
            data-nav-subtitle="Clouds ➔ Advantages ➔ CTA"
            className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 max-w-7xl mx-auto space-y-6 scroll-mt-24 lg:scroll-mt-28"
          >
            <ScrollReveal once={false} variant="up" className="space-y-6">
              {/* Authentic Section Header */}
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Cloud Partner GTM Tracks
                </h2>
                <p className="mt-1 text-[14px] text-slate-600 font-normal max-w-3xl leading-relaxed">
                  Select your cloud organization to join SaaSNova&apos;s co-sell deal desks, speaking panels, and executive advisor community.
                </p>
              </div>

              {/* ══════════════════════════════════════════════════════════════════
                  HORIZONTAL FLOW: (LEFT: 3 PILLS ➔ PATH ➔ RIGHT: CLEAN BOX)
                  ══════════════════════════════════════════════════════════════════ */}
              <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">

                {/* LEFT: 3 CLOUDS AS SLEEK PILLS (CHOOSING CLOUD PLATFORM) */}
                <div className="w-full lg:w-[38%] flex flex-col justify-center gap-4 py-2">
                  {HYPERSCALER_SME_CARDS.map((card) => {
                    const isSelected = selectedCloud === card.cloudParam;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => setSelectedCloud(card.cloudParam as CloudType)}
                        className={`w-full rounded-full transition-all px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3.5 text-left cursor-pointer group ${
                          isSelected
                            ? "border border-[#008BF8] ring-2 ring-[#008BF8]/25 shadow-[0_4px_18px_rgba(0,139,248,0.16),0_2px_0_#cbd5e1] bg-gradient-to-r from-sky-50/80 via-white to-pink-50/30"
                            : "bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_0_#e2e8f0,0_4px_10px_rgba(15,23,42,0.03)]"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 p-2 flex items-center justify-center shrink-0 shadow-[0_1px_0_#e2e8f0] group-hover:scale-105 transition-transform">
                            <Image
                              src={card.logo}
                              alt={card.name}
                              width={28}
                              height={28}
                              className="max-h-6 max-w-6 object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[13.5px] font-bold text-slate-900">
                                {card.name}
                              </span>
                              <span
                                className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${card.tagColor} shrink-0`}
                              >
                                {card.tag}
                              </span>
                            </div>
                            <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5">
                              {card.briefDesc}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? "bg-gradient-to-r from-[#FA0F9C] to-[#008BF8] text-white shadow-xs"
                              : "border-2 border-slate-200 group-hover:border-slate-300"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* CONNECTOR PATH: FROM ALL 3 PILLS INTO NEXT BOX (BRAND GRADIENT) */}
                <div className="hidden lg:flex w-[5%] flex-col items-center justify-center relative select-none pointer-events-none self-center">
                  <svg viewBox="0 0 50 160" className="w-full h-44 overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="brandPillPathGrad" gradientUnits="userSpaceOnUse" x1="2" y1="0" x2="44" y2="0">
                        <stop offset="0%" stopColor="#008BF8" />
                        <stop offset="100%" stopColor="#FA0F9C" />
                      </linearGradient>
                      <marker id="arrowPillPath" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#FA0F9C" />
                      </marker>
                    </defs>
                    {/* Origin connection dots for all 3 pills */}
                    <circle cx="2" cy="24" r="3.5" fill="#008BF8" />
                    <circle cx="2" cy="80" r="3.5" fill="#008BF8" />
                    <circle cx="2" cy="136" r="3.5" fill="#008BF8" />
                    {/* 3 Converging dashed paths in brand gradient */}
                    {/* 1. Top pill path */}
                    <path d="M 2 24 C 28 24, 28 80, 44 80" fill="none" stroke="url(#brandPillPathGrad)" strokeWidth="2.5" strokeDasharray="4 4" />
                    {/* 2. CENTER PILL PATH (Guaranteed bounding box + userSpaceOnUse) */}
                    <path d="M 2 80 C 16 80.2, 30 79.8, 44 80" fill="none" stroke="url(#brandPillPathGrad)" strokeWidth="2.5" strokeDasharray="4 4" markerEnd="url(#arrowPillPath)" />
                    {/* 3. Bottom pill path */}
                    <path d="M 2 136 C 28 136, 28 80, 44 80" fill="none" stroke="url(#brandPillPathGrad)" strokeWidth="2.5" strokeDasharray="4 4" />
                    {/* Target destination point */}
                    <circle cx="44" cy="80" r="4" fill="#FA0F9C" />
                  </svg>
                </div>

                {/* Mobile Divider Arrow */}
                <div className="lg:hidden flex items-center justify-center py-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-sky-50 to-pink-50 border border-sky-200 text-[#008BF8] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                  </div>
                </div>

                {/* RIGHT: NEXT BOX (SOLID WHITE, BRAND ACCENT, TACTILE 3D DEPTH) */}
                <div className="w-full lg:w-[57%] flex flex-col">
                  <div className="relative overflow-hidden h-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_1px_0_#e2e8f0,0_2px_0_#d5dee9,0_16px_40px_-8px_rgba(15,23,42,0.08)] p-6 sm:p-7 flex flex-col justify-between space-y-6">
                    {/* Subtle Brand Horizon Rim */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#008BF8]/70 via-[#FA0F9C]/70 to-transparent" />

                    {/* TOP: WHAT FIELD LEADERS & SMES UNLOCK */}
                    <div className="space-y-3.5">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                        What Field Leaders &amp; SMEs Unlock
                      </h3>

                      {/* 4 Authentic Engagement Opportunities */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        {SHARED_ENGAGEMENT_TRACKS.map((track, i) => {
                          const TrackIcon = track.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-sky-50/30 hover:border-sky-200/80 transition-colors shadow-2xs"
                            >
                              <div className="w-6 h-6 rounded-lg bg-white text-[#008BF8] border border-slate-200/60 flex items-center justify-center shrink-0 shadow-2xs">
                                <TrackIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[11.5px] font-semibold text-slate-800 leading-snug">
                                {track.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* MIDDLE: WHY CLOUD LEADERS PARTNER (3 CLEAN COLUMNS) */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Why Cloud Leaders Partner with SaaSNova
                        </h4>
                        <p className="text-xs text-slate-500 font-normal">
                          How our executive alliance programs support field sellers, solution architects, and cloud leaders.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {WHY_PARTNER_BENEFITS.map((b, i) => {
                          const Icon = b.icon;
                          return (
                            <div
                              key={i}
                              className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 shadow-2xs space-y-1.5 hover:border-slate-300 transition-all"
                            >
                              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-100 to-pink-100 text-[#008BF8] border border-sky-200/50 flex items-center justify-center shadow-2xs">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h5 className="text-[13px] font-bold text-slate-900 leading-snug">
                                {b.title}
                              </h5>
                              <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                                {b.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* BOTTOM: ACTION BUTTON (OPENS SIDE DOSSIER DRAWER) */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => handleOpenDrawer(selectedDossier)}
                        className="w-full sm:w-[240px] h-[48px] rounded-xl font-extrabold text-xs sm:text-[13px] text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-[0_1px_0_#9d006c,0_3px_0_#85005b,0_10px_25px_rgba(250,15,156,0.38)] active:translate-y-0.5 transition-all flex items-center justify-center cursor-pointer shrink-0 select-none"
                      >
                        <span className="truncate">
                          Register as {selectedCloud === "Google Cloud" ? "GCP" : selectedCloud} SME
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </section>

          {/* 3. CLOSING CALL TO ACTION (MATCHING SITE-WIDE CTA ARCHITECTURE: bg-[#F0F7FF]) */}
          <section
            id="cloud-cta"
            data-nav-title="Strategy Session"
            data-nav-subtitle="Book Discovery Call"
            className="relative w-full bg-[#F0F7FF] border-t-2 border-sky-200/90 overflow-hidden"
          >
            {/* Prismatic Top Highlight Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#008BF8]/80 via-[#FA0F9C]/80 to-transparent" />

            {/* Ambient Soft Lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[280px] bg-gradient-to-b from-[#008BF8]/[0.1] via-[#FA0F9C]/[0.05] to-transparent blur-3xl -z-10"
            />

            {/* Compact Full-Width Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-tight max-w-2xl mx-auto mb-3">
                Ready to execute across the cloud ecosystem together?
              </h2>

              <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mb-7">
                Book a 30-min Execution Strategy Session with Jen Dawson to explore how SaaSNova and your cloud team can accelerate ISV co-sell and cloud marketplace pipeline.
              </p>

              {/* Action Button */}
              <div className="flex justify-center">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full font-extrabold text-sm sm:text-[15px] text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-[0_4px_20px_rgba(250,15,156,0.42)] active:scale-[0.98] transition-all cursor-pointer select-none"
                >
                  Book a 30-min Execution Strategy Session
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* ════════════════════════════════════════════════════════════════════════
            VIEW 2: STRATEGIC ALLIANCES ONLY (NO CROSS-BLEED)
            Rendered when view is "strategic-alliances".
           ════════════════════════════════════════════════════════════════════════ */
        <div className="space-y-16 animate-in fade-in duration-200">
          {/* 1. ALLIANCES HERO STAGE */}
          <section
            id="alliance-hero"
            data-nav-title="Strategic Alliances"
            data-nav-subtitle="Tools & Delivery Network"
            className="relative px-4 sm:px-6 lg:px-8 min-h-[640px] lg:min-h-[700px] flex flex-col justify-center -mt-[60px] sm:-mt-[62px] pt-[86px] sm:pt-[96px] pb-12 sm:pb-16 overflow-hidden scroll-mt-28 lg:scroll-mt-32 select-none"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[950px] lg:w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.18)_0%,rgba(186,230,253,0.25)_35%,rgba(250,15,156,0.06)_65%,transparent_80%)] blur-[90px]"
            />

            <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto w-full max-w-6xl">
              <div className="relative mx-auto w-full">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
                    boxShadow:
                      "0 35px 75px -15px rgba(15, 23, 42, 0.18), 0 18px 38px -10px rgba(0, 139, 248, 0.22), 0 4px 12px rgba(15, 23, 42, 0.06), inset 0 2px 1px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(0, 139, 248, 0.12)",
                  }}
                  className="relative overflow-hidden rounded-tl-[68px] sm:rounded-tl-[80px] rounded-br-[68px] sm:rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] px-6 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16 min-h-[480px] lg:min-h-[510px] flex flex-col justify-center space-y-7 sm:space-y-9"
                >
                  <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[260px] rounded-full bg-white/60 blur-[70px]" />
                  <div className="pointer-events-none absolute bottom-0 left-0 w-[460px] h-[300px] rounded-full bg-[#008BF8]/20 blur-[100px]" />

                  {/* Headline & Intro */}
                  <div className="relative z-10 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-sky-300/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8] shadow-[0_0_8px_#008BF8]" />
                      <Layers className="w-3.5 h-3.5 text-[#008BF8]" />
                      <span>Strategic Alliances Network</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.12]">
                      Integrated Software Tools,{" "}
                      <span className="text-gradient">Engineering &amp; Gov Contracts.</span>
                    </h1>

                    <p className="text-[14px] text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
                      SaaSNova collaborates with specialized technology platforms, systems integrators, and government distributors to provide complete end-to-end execution.
                    </p>
                  </div>

                  {/* Detailed Delivery Pillars Integrated Inside Hero Stage */}
                  <div className="relative z-10 pt-2 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 max-w-5xl mx-auto w-full">
                    {ALLIANCE_PILLARS.map((item) => (
                      <div
                        key={item.step}
                        style={{
                          boxShadow:
                            "0 10px 25px -4px rgba(0, 139, 248, 0.12), 0 4px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1)",
                        }}
                        className="flex flex-col p-4.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200/90 hover:border-sky-400 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#008BF8] to-[#0066CC] text-white text-xs font-mono font-bold flex items-center justify-center shadow-xs">
                            {item.step}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-[#008BF8]/40 group-hover:bg-[#FA0F9C] transition-colors" />
                        </div>
                        <h3 className="text-sm sm:text-[14.5px] font-bold text-slate-900 group-hover:text-[#008BF8] transition-colors leading-snug mb-1.5 text-left">
                          {item.title}
                        </h3>
                        <p className="text-[12.5px] text-slate-600 font-normal leading-relaxed text-left">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Precision Horizon Gradient Line Connecting to Alliances ── */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] pointer-events-none z-30" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA0F9C]/50 via-[#008BF8]/60 to-transparent opacity-95" />
            </div>
          </section>

          {/* 2. 3PI PARTNERS */}
          <section
            id="three-pi-partners"
            data-nav-title="3PI Partners"
            data-nav-subtitle="Listing & Automation"
            className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24 lg:scroll-mt-28 pt-10 sm:pt-12 pb-6 sm:pb-8"
          >
            <ScrollReveal once={false} variant="up" className="space-y-6">
              {/* Proper Section Title (No Eyebrow Pill) */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  3PI Partners · What ISVs Need to Scale
                </h2>
                <p className="text-[15px] sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
                  The foundational marketplace infrastructure, co-sell tooling, and automation required to actively capture cloud revenue.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl pt-2">
                {/* SaaSify Card */}
                <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#008BF8] to-[#FA0F9C]" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 p-2.5">
                        <Image
                          src="/images/saasify-logo.png"
                          alt="SaaSify"
                          width={56}
                          height={56}
                          className="max-h-12 max-w-12 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          SaaSify
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-[#008BF8] border border-sky-200/80">
                          LISTING INFRASTRUCTURE
                        </span>
                      </div>
                    </div>
                    <p className="text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
                      Marketplace operations and automation paired with SaaSNova&apos;s cloud field alignment to accelerate your GTM readiness.
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleOpenDrawer(PARTNERS_REGISTRY["saasify"])}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-[13px] text-[#008BF8] bg-sky-50 border border-sky-200/90 hover:bg-[#008BF8] hover:text-white transition-all cursor-pointer select-none"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* WorkSpan Card */}
                <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#008BF8] to-[#FA0F9C]" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 p-2.5">
                        <Image
                          src="/images/workspan-logo.jpeg"
                          alt="WorkSpan"
                          width={56}
                          height={56}
                          className="max-h-12 max-w-12 object-contain rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          WorkSpan
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-[#008BF8] border border-sky-200/80">
                          INTEGRATION AND AUTOMATION
                        </span>
                      </div>
                    </div>
                    <p className="text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
                      Partner opportunity management and co-sell workflow alignment ensuring unified execution with cloud field teams.
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleOpenDrawer(PARTNERS_REGISTRY["workspan"])}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-[13px] text-[#008BF8] bg-sky-50 border border-sky-200/90 hover:bg-[#008BF8] hover:text-white transition-all cursor-pointer select-none"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Radiant Horizon Gradient Separation Line */}
          <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6" aria-hidden="true">
            <div className="relative h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#008BF8] via-[#FA0F9C] to-transparent rounded-full shadow-[0_0_16px_rgba(250,15,156,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008BF8] via-[#FA0F9C] to-transparent blur-[2px] opacity-85" />
            </div>
          </div>

          {/* 3. SI / GSI PARTNERS */}
          <section
            id="si-gsi-partners"
            data-nav-title="SI / GSI Partners"
            data-nav-subtitle="Global Integrators"
            className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24 lg:scroll-mt-28 pt-6 sm:pt-8 pb-10 sm:pb-12"
          >
            <ScrollReveal once={false} variant="up" className="space-y-6">
              {/* Proper Section Title (No Eyebrow Pill) */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  SI / GSI Partners · Systems Integrators &amp; Distribution
                </h2>
                <p className="text-[15px] sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
                  SaaSNova partners with select SI and GSI firms that co-execute cloud marketplace GTM alongside ISVs, extending reach into enterprise accounts and regional markets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl pt-2">
                {/* Pronix Card */}
                <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#008BF8] to-[#FA0F9C]" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 p-2.5">
                        <Image
                          src="/images/pronix_inc_logo.jpeg"
                          alt="Pronix"
                          width={56}
                          height={56}
                          className="max-h-12 max-w-12 object-contain rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          Pronix
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-[#008BF8] border border-sky-200/80">
                          ENTERPRISE DEPLOYMENT
                        </span>
                      </div>
                    </div>
                    <p className="text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
                      Pronix brings deep systems integration expertise and enterprise client relationships to SaaSNova&apos;s cloud marketplace execution programs, extending ISV reach into enterprise accounts across AWS, Azure, and GCP.
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleOpenDrawer(PARTNERS_REGISTRY["pronix"])}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-[13px] text-[#008BF8] bg-sky-50 border border-sky-200/90 hover:bg-[#008BF8] hover:text-white transition-all cursor-pointer select-none"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Carahsoft Card */}
                <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#008BF8] to-[#FA0F9C]" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 p-2.5">
                        <Image
                          src="/carahsoft.svg"
                          alt="Carahsoft"
                          width={56}
                          height={56}
                          className="max-h-12 max-w-12 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          Carahsoft
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-[#008BF8] border border-sky-200/80">
                          DISTRIBUTION &amp; PUBLIC SECTOR
                        </span>
                      </div>
                    </div>
                    <p className="text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
                      Carahsoft delivers pre-competed public sector contract vehicles and master government distribution, accelerating software procurement across federal, state, and local agencies.
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleOpenDrawer(PARTNERS_REGISTRY["carahsoft"])}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-[13px] text-[#008BF8] bg-sky-50 border border-sky-200/90 hover:bg-[#008BF8] hover:text-white transition-all cursor-pointer select-none"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* 4. ALLIANCES CLOSING CALL TO ACTION (MATCHING SITE-WIDE CTA ARCHITECTURE: bg-[#F0F7FF]) */}
          <section
            id="alliance-cta"
            data-nav-title="Partner Inquiries"
            data-nav-subtitle="Get in Touch"
            className="relative w-full bg-[#F0F7FF] border-t-2 border-sky-200/90 overflow-hidden"
          >
            {/* Prismatic Top Highlight Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#008BF8]/80 via-[#FA0F9C]/80 to-transparent" />

            {/* Ambient Soft Lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[280px] bg-gradient-to-b from-[#008BF8]/[0.1] via-[#FA0F9C]/[0.05] to-transparent blur-3xl -z-10"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-tight max-w-2xl mx-auto mb-3">
                Interested in becoming a partner?
              </h2>

              <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mb-7">
                Reach out to explore how your organization can collaborate with SaaSNova to empower ISVs across cloud marketplaces.
              </p>

              {/* Action Button */}
              <div className="flex justify-center">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full font-extrabold text-sm sm:text-[15px] text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-[0_4px_20px_rgba(250,15,156,0.42)] active:scale-[0.98] transition-all cursor-pointer select-none"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* GLOBAL PARTNER DOSSIER FLYOUT DRAWER (FOR BOTH HYPERSCALERS & ALLIANCES) */}
      <PartnerDrawer
        partner={selectedPartner}
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
}

export default function PartnersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <PartnersContent />
    </Suspense>
  );
}
