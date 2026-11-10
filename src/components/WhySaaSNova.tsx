"use client";

import {
  Rocket,
  Users,
  TrendingUp,
  ShieldCheck,
  Check,
  X,
  Sparkles,
} from "lucide-react";

interface DifferentiatorPillar {
  number: string;
  title: string;
  tagline: string;
  whatHappensNext: string;
  theOldWay: string;
  theSaaSNovaWay: string;
  highlightBadge: string;
  accentColor: string;
  glowColor: string;
  icon: typeof Rocket;
}

const DIFFERENTIATORS: DifferentiatorPillar[] = [
  {
    number: "01",
    title: "Operator-Led Execution",
    tagline: "Zero Dev Homework",
    whatHappensNext:
      "We write portal forms, audit hyperscaler taxonomy, and configure your listings and CPPOs live — putting zero burden on your internal engineers.",
    theOldWay: "Consultants hand you 60-page PDF slides",
    theSaaSNovaWay: "We embed directly in your Slack and execute",
    highlightBadge: "Embedded in Slack Day 1",
    accentColor: "#F59E0B", // Sunset Flame
    glowColor: "rgba(245, 158, 11, 0.35)",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Direct Field Alliances",
    tagline: "Warm Cloud Rep Rolodex",
    whatHappensNext:
      "We don't submit portal tickets and wait in queues. We introduce you directly to active AWS, Azure, and GCP partner leads and enterprise field AEs.",
    theOldWay: "Tickets get lost in generic partner queues",
    theSaaSNovaWay: "Direct intros to active quota-carrying reps",
    highlightBadge: "Direct Hyperscaler Rolodex",
    accentColor: "#FA0F9C", // Electric Magenta
    glowColor: "rgba(250, 15, 156, 0.35)",
    icon: Users,
  },
  {
    number: "03",
    title: "Co-Sell & ACE Velocity",
    tagline: "Pipeline Engine aaS",
    whatHappensNext:
      "We run weekly deal registration hygiene in AWS ACE & Partner Center, package custom private offers, and unlock enterprise pre-committed cloud budgets.",
    theOldWay: "Deals stall due to missing tags and portal lag",
    theSaaSNovaWay: "Weekly ACE cadences with zero deal leakage",
    highlightBadge: "Zero Deal Leakage",
    accentColor: "#06B6D4", // Hyper Cyan
    glowColor: "rgba(6, 182, 212, 0.35)",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Audit-Ready Revenue",
    tagline: "Non-Dilutive Growth",
    whatHappensNext:
      "We recover $300K+ in hyperscaler cash MDF grants, align deal attribution with your CRM, and provide board-ready cloud revenue telemetry.",
    theOldWay: "Vanity awareness metrics with $0 attributable ARR",
    theSaaSNovaWay: "$300K+ MDF grants & board-ready telemetry",
    highlightBadge: "$300K+ MDF Grants Secured",
    accentColor: "#10B981", // Cyber Emerald
    glowColor: "rgba(16, 185, 129, 0.35)",
    icon: ShieldCheck,
  },
];

export default function WhySaaSNova() {
  return (
    <div className="relative mx-auto max-w-7xl">
      {/* ─── 1. SECTION HEADER (Punchy & Narrative-Driven) ─── */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-[1.15]">
          A Live Listing is Just 1%.{" "}
          <span className="text-gradient">What We Execute Next Decides Your Revenue.</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Traditional consultancies hand you 60-page decks and leave you to figure out cloud portals.
          We embed as hands-on operators to run the 4 critical post-listing revenue motions.
        </p>
      </div>

      {/* ─── 2. THE 4 STADIUM PILLARS HORIZON ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
        {DIFFERENTIATORS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.number}
              className="group relative rounded-[2rem] border bg-white p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              style={{
                borderColor: `${item.accentColor}40`,
                boxShadow: `0 18px 45px -15px ${item.glowColor}, 0 4px 16px rgba(15, 23, 42, 0.03)`,
                background: `linear-gradient(180deg, #ffffff 0%, #ffffff 70%, ${item.accentColor}0a 100%)`,
              }}
            >
              {/* Prismatic Top Highlight Accent */}
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-[3px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
                  boxShadow: `0 0 10px ${item.accentColor}60`,
                }}
              />

              {/* Pillar Top: Icon Orb + Number Tag */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.accentColor}15`,
                      borderColor: `${item.accentColor}50`,
                      color: item.accentColor,
                      boxShadow: `0 0 16px ${item.accentColor}25`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="font-mono text-xs font-black tracking-widest px-2.5 py-0.5 rounded-full border shadow-2xs"
                    style={{
                      backgroundColor: `${item.accentColor}10`,
                      borderColor: `${item.accentColor}35`,
                      color: item.accentColor,
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p
                  className="text-[11px] font-bold mt-0.5 mb-3"
                  style={{ color: item.accentColor }}
                >
                  {item.tagline}
                </p>

                {/* What Happens Next Description */}
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    What We Execute Next:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.whatHappensNext}
                  </p>
                </div>

                {/* Stark Contrast Block (Advisory vs Operator) */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {/* The Old Advisory Way */}
                  <div className="flex items-start gap-2 text-[11px] text-slate-500">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 mt-0.5 border border-rose-200">
                      <X className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight line-through opacity-85">
                      {item.theOldWay}
                    </span>
                  </div>

                  {/* The SaaSNova Way */}
                  <div className="flex items-start gap-2 text-[11px] font-bold text-slate-800">
                    <div
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 border"
                      style={{
                        backgroundColor: `${item.accentColor}20`,
                        borderColor: `${item.accentColor}50`,
                        color: item.accentColor,
                      }}
                    >
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">{item.theSaaSNovaWay}</span>
                  </div>
                </div>
              </div>

              {/* Pillar Bottom: Highlight Badge */}
              <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold px-3 py-1 rounded-full border shadow-2xs w-full justify-center"
                  style={{
                    backgroundColor: `${item.accentColor}12`,
                    borderColor: `${item.accentColor}40`,
                    color: item.accentColor,
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{item.highlightBadge}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

