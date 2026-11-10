"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import {
  Rocket,
  Zap,
  Globe,
  Users,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Layers,
  Store,
  Check,
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

type CategoryId = "programs" | "talent" | "systems";

interface SolutionItem {
  id: string;
  title: string;
  timelineOrRole: string;
  stageOrFocus: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  href: string;
  accentColor: string;
  glowColor: string;
  borderHover: string;
  buttonGradient: string;
  icon: typeof Rocket;
}

interface CategoryNav {
  id: CategoryId;
  title: string;
  subtitle: string;
  stagePill: string;
  icon: typeof Rocket;
  accentColor: string;
  glowColor: string;
  buttonGradient: string;
  badges: string[];
  items: SolutionItem[];
}

const CATEGORIES: CategoryNav[] = [
  {
    id: "programs",
    title: "Programs",
    subtitle: "Ignite, SuperNova, NovaX",
    stagePill: "Milestone-Driven Sprints",
    icon: Rocket,
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.2)",
    buttonGradient: "from-[#008BF8] to-[#0066CC]",
    badges: ["Ignite", "SuperNova", "NovaX"],
    items: [
      {
        id: "ignite",
        title: "Ignite",
        timelineOrRole: "1 Month Sprint",
        stageOrFocus: "Cloud GTM Activation",
        description:
          "Fast-track marketplace launch for ISVs needing live activation or listed with zero traction.",
        deliverables: [
          "Optimized AWS, Azure & GCP listings",
          "Hyperscaler taxonomy & messaging",
          "Portal verification & CPPO readiness",
        ],
        ctaText: "View Ignite Details",
        href: "/solutions/growth-programs#ignite",
        accentColor: "#008BF8",
        glowColor: "rgba(0, 139, 248, 0.2)",
        borderHover: "hover:border-[#008BF8]",
        buttonGradient:
          "from-[#008BF8] to-[#0066CC] hover:from-[#0077D4] hover:to-[#0055AA] shadow-blue-500/20",
        icon: Rocket,
      },
      {
        id: "supernova",
        title: "SuperNova",
        timelineOrRole: "4 Months Execution",
        stageOrFocus: "US Market Entry",
        description:
          "Direct field co-sell alignment and US enterprise pipeline acceleration with dedicated operators.",
        deliverables: [
          "Automated weekly ACE co-sell pipeline",
          "$300K+ MDF grants & field battlecards",
          "PRM implementation & private offer velocity",
        ],
        ctaText: "View SuperNova Details",
        href: "/solutions/growth-programs#supernova",
        accentColor: "#FA0F9C",
        glowColor: "rgba(250, 15, 156, 0.25)",
        borderHover: "hover:border-pink-400",
        buttonGradient:
          "from-[#FA0F9C] to-[#E00A8B] hover:from-[#E00A8B] hover:to-[#C20875] shadow-pink-500/25",
        icon: Zap,
      },
      {
        id: "novax",
        title: "NovaX",
        timelineOrRole: "6 Months Scale",
        stageOrFocus: "Global Multi-Cloud Scale",
        description:
          "Simultaneous multi-cloud revenue acceleration across AWS, Microsoft Azure, and Google Cloud.",
        deliverables: [
          "Multi-cloud co-sell orchestration",
          "3-Hyperscaler PRM hygiene & attribution",
          "SI / GSI co-sell & enterprise drawdowns",
        ],
        ctaText: "View NovaX Details",
        href: "/solutions/growth-programs#novax",
        accentColor: "#008BF8",
        glowColor: "rgba(0, 139, 248, 0.2)",
        borderHover: "hover:border-[#008BF8]",
        buttonGradient:
          "from-[#008BF8] to-[#0066CC] hover:from-[#0077D4] hover:to-[#0055AA] shadow-blue-500/20",
        icon: Globe,
      },
    ],
  },
  {
    id: "talent",
    title: "Services",
    subtitle: "PDMaaS, PMMaaS, PALaaS",
    stagePill: "Embedded Fractional Talent",
    icon: Users,
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.2)",
    buttonGradient: "from-[#008BF8] to-[#0066CC]",
    badges: ["PDMaaS", "PMMaaS", "PALaaS"],
    items: [
      {
        id: "pdmaas",
        title: "PDMaaS",
        timelineOrRole: "Fractional PDM",
        stageOrFocus: "Pipeline Execution",
        description:
          "We run your weekly partner development motions, portal submissions, and cloud rep cadences.",
        deliverables: [
          "Weekly ACE registration & status hygiene",
          "Direct alignment with cloud field reps",
          "Custom Private Offer & CPPO deal packaging",
        ],
        ctaText: "View PDMaaS Details",
        href: "/solutions/fractional-operators#pdmaas",
        accentColor: "#008BF8",
        glowColor: "rgba(0, 139, 248, 0.2)",
        borderHover: "hover:border-[#008BF8]",
        buttonGradient:
          "from-[#008BF8] to-[#0066CC] hover:from-[#0077D4] hover:to-[#0055AA] shadow-blue-500/20",
        icon: Users,
      },
      {
        id: "pmmaas",
        title: "PMMaaS",
        timelineOrRole: "Fractional PMM",
        stageOrFocus: "Cloud Messaging",
        description:
          "Translates technical product capabilities into cloud field narratives and unlocks non-dilutive MDF.",
        deliverables: [
          "$300K+ cloud MDF grant applications",
          "Field seller 'Better-Together' battlecards",
          "Joint webinars & co-branded assets",
        ],
        ctaText: "View PMMaaS Details",
        href: "/solutions/fractional-operators#pmmaas",
        accentColor: "#FA0F9C",
        glowColor: "rgba(250, 15, 156, 0.25)",
        borderHover: "hover:border-pink-400",
        buttonGradient:
          "from-[#FA0F9C] to-[#E00A8B] hover:from-[#E00A8B] hover:to-[#C20875] shadow-pink-500/25",
        icon: Sparkles,
      },
      {
        id: "palaas",
        title: "PALaaS",
        timelineOrRole: "Fractional PAL",
        stageOrFocus: "Alliance Operations",
        description:
          "Executive-tier alliance management driving tier promotions, multi-cloud strategy, and large MACCs.",
        deliverables: [
          "Hyperscaler VP & Director relationships",
          "Enterprise MACC commit drawdowns",
          "Premier & Competency tier progression",
        ],
        ctaText: "View PALaaS Details",
        href: "/solutions/fractional-operators#palaas",
        accentColor: "#008BF8",
        glowColor: "rgba(0, 139, 248, 0.2)",
        borderHover: "hover:border-[#008BF8]",
        buttonGradient:
          "from-[#008BF8] to-[#0066CC] hover:from-[#0077D4] hover:to-[#0055AA] shadow-blue-500/20",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "systems",
    title: "GTM Ops & Infra",
    subtitle: "PRMaaS, PCMaaS",
    stagePill: "Attribution & Portals",
    icon: Layers,
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.2)",
    buttonGradient: "from-[#008BF8] to-[#0066CC]",
    badges: ["PRMaaS", "PCMaaS"],
    items: [
      {
        id: "prmaas",
        title: "PRMaaS",
        timelineOrRole: "Telemetry System",
        stageOrFocus: "Attribution Infrastructure",
        description:
          "Zero-leakage revenue tracking connecting CRM to AWS ACE, Azure Partner Center, and GCP.",
        deliverables: [
          "100% deal attribution & tagging hygiene",
          "Automated bidirectional CRM-to-Cloud sync",
          "Audit-ready co-sell compliance logs",
        ],
        ctaText: "View PRMaaS Details",
        href: "/solutions/systems-ops#prmaas",
        accentColor: "#008BF8",
        glowColor: "rgba(0, 139, 248, 0.2)",
        borderHover: "hover:border-[#008BF8]",
        buttonGradient:
          "from-[#008BF8] to-[#0066CC] hover:from-[#0077D4] hover:to-[#0055AA] shadow-blue-500/20",
        icon: BarChart3,
      },
      {
        id: "pcmaas",
        title: "PCMaaS",
        timelineOrRole: "Workflow Engine",
        stageOrFocus: "Portal Migration Readiness",
        description:
          "Frictionless migration and synchronization across fragmented cloud portals without dev lag.",
        deliverables: [
          "Automated deal registration pipelines",
          "Real-time event notification hooks in Slack",
          "Partner ecosystem portal readiness",
        ],
        ctaText: "View PCMaaS Details",
        href: "/solutions/systems-ops#pcmaas",
        accentColor: "#FA0F9C",
        glowColor: "rgba(250, 15, 156, 0.25)",
        borderHover: "hover:border-pink-400",
        buttonGradient:
          "from-[#FA0F9C] to-[#E00A8B] hover:from-[#E00A8B] hover:to-[#C20875] shadow-pink-500/25",
        icon: Layers,
      },
    ],
  },
];

export default function SolutionsHub() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("programs");

  const currentCategory =
    CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="relative mx-auto max-w-7xl">
      {/* ─── 1. SECTION HEADER (Lean & Balanced) ─── */}
      <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-[1.15]">
          Pick Your Model.{" "}
          <span className="text-gradient">We Execute 100%.</span>
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-3.5">
          Select a category on the left to inspect deliverables, timelines, and execution models.
        </p>

        {/* Multi-Cloud Execution Strip with Clean Logos */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-600">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Multi-Cloud Execution:
          </span>
          <div title="AWS Partner Network & ACE" className="icon-3d inline-flex items-center justify-center h-8 px-3 rounded-xl">
            <Image
              src="/aws-logo.png"
              alt="AWS"
              width={20}
              height={20}
              className="h-3.5 w-auto object-contain"
            />
          </div>
          <div title="Microsoft Azure Partner Center" className="icon-3d inline-flex items-center justify-center h-8 px-3 rounded-xl">
            <Image
              src="/azure-logo.png"
              alt="Azure"
              width={20}
              height={20}
              className="h-3.5 w-auto object-contain"
            />
          </div>
          <div title="Google Cloud Partner Advantage" className="icon-3d inline-flex items-center justify-center h-8 px-3 rounded-xl">
            <Image
              src="/gcp-logo.png"
              alt="GCP"
              width={20}
              height={20}
              className="h-3.5 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ─── 2. SPLIT LAYOUT: SIDE NAVIGATOR (Left) + CARDS CANVAS (Right) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        
        {/* ─── LEFT COLUMN: 3 MAIN SECTIONS (Navigator) ─── */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3 sm:gap-3.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-1 hidden lg:block">
            Choose Execution Model:
          </div>

          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                className={`relative rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "p-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] shadow-[0_1px_0_#a855f7,0_2px_0_#9333ea,0_3px_0_#7e22ce,0_4px_0_#6b21a8,0_5px_0_#581c87,0_18px_36px_-6px_rgba(250,15,156,0.38)] -translate-y-0.5 scale-[1.01]"
                    : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full group relative text-left p-4 sm:p-5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "rounded-[13.5px] bg-gradient-to-br from-white via-white to-slate-50 text-slate-900 shadow-[inset_0_2px_1px_rgba(255,255,255,1)]"
                      : "rounded-2xl card-3d text-slate-700"
                  }`}
                >
                  {/* Active Left Accent Bar (Signature Pink to Blue Gradient) */}
                  {isActive && (
                    <div className="absolute left-0 inset-y-0 w-2 rounded-r-full bg-gradient-to-b from-[#FA0F9C] via-[#7C3AED] to-[#008BF8]" />
                  )}

                  {/* Top Subtle Prismatic Glow */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#FA0F9C] to-[#008BF8] opacity-80" />
                  )}

                  {/* Top Row: Icon + Title */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-white shadow-[0_3px_0_rgba(109,40,217,0.8),0_8px_16px_rgba(250,15,156,0.3)] scale-105 bg-gradient-to-br from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] border border-white/50"
                            : "icon-3d text-slate-600 group-hover:scale-105 group-hover:text-slate-900"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3
                          className={`text-base sm:text-lg font-bold tracking-tight leading-tight transition-colors ${
                            isActive ? "text-slate-900 font-extrabold" : "text-slate-700 group-hover:text-slate-900"
                          }`}
                        >
                          {cat.title}
                        </h3>
                        <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Indicator Arrow Pod */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#FA0F9C] to-[#008BF8] text-white shadow-[0_2px_0_rgba(109,40,217,0.7),0_6px_12px_rgba(250,15,156,0.28)] scale-105"
                          : "bg-slate-100 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1] text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"
                      }`}
                    >
                      {isActive ? (
                        <ArrowRight className="h-4 w-4 text-white" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Row: Offerings Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2 pt-2.5 border-t border-slate-100">
                    {cat.badges.map((b) => (
                      <span
                        key={b}
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full transition-colors border ${
                          isActive
                            ? "bg-slate-100 border-slate-200 text-slate-800 font-extrabold shadow-2xs"
                            : "bg-slate-50 border-slate-200/60 text-slate-500"
                        }`}
                      >
                        {b}
                      </span>
                    ))}
                    {isActive && (
                      <span className="ml-auto inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full text-white shadow-[0_2px_0_rgba(109,40,217,0.7)] bg-gradient-to-r from-[#FA0F9C] to-[#008BF8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Viewing
                      </span>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* ─── RIGHT COLUMN: RECESSED TRAY HOLDING 3D EXTRUDED & TILTING CARDS ─── */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="well-recessed rounded-3xl p-4 sm:p-5 lg:p-6">
            <div
              key={activeCategory}
              className={`grid grid-cols-1 ${
                currentCategory.items.length === 2
                  ? "sm:grid-cols-2 max-w-2xl mx-auto"
                  : "sm:grid-cols-3"
              } gap-4 lg:gap-5 items-stretch animate-rise w-full`}
            >
              {currentCategory.items.map((item) => {
                const IconComponent = item.icon;

                return (
                  <TiltCard
                    key={item.id}
                    variant="light"
                    intensity={10}
                    className="p-5 sm:p-5.5 flex flex-col justify-between"
                  >
                    {/* Card Top: Icon, Title & Meta */}
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        {/* 3D Keycap Icon */}
                        <Link
                          href={item.href}
                          className="icon-3d flex h-11 w-11 items-center justify-center rounded-xl text-[#008BF8] transition-transform duration-300 hover:scale-105 cursor-pointer"
                        >
                          <IconComponent className="h-5 w-5" />
                        </Link>

                        {/* Stage or Role Capsule */}
                        <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-0.5 text-[10.5px] font-bold text-slate-700 shadow-[0_2px_0_#e2e8f0]">
                          {item.timelineOrRole}
                        </span>
                      </div>

                      {/* Title & Stage */}
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        <Link href={item.href} className="hover:text-[#008BF8] transition-colors">
                          {item.title}
                        </Link>
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 mb-2 mt-0.5">
                        {item.stageOrFocus}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2 pt-3 border-t border-slate-200/70 mb-5">
                        {item.deliverables.map((deliv, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                          >
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-[0_1.5px_0_#a7f3d0]">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug text-[11.5px]">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom 3D Tactile CTA Button */}
                    <div className="pt-1">
                      <Link
                        href={item.href}
                        className={`btn-3d group inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer bg-gradient-to-r ${item.buttonGradient}`}
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-white/90" />
                      </Link>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
