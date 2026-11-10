"use client";

import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import {
  Rocket,
  Users,
  TrendingUp,
  ShieldCheck,
  ArrowDown,
  FileText,
  AlertTriangle,
  Clock,
  Sparkles,
} from "lucide-react";

interface ExecutionPillar {
  number: string;
  title: string;
  badge: string;
  description: string;
  accentColor: string;
  glowColor: string;
  icon: typeof Rocket;
}

const EXECUTION_PILLARS: ExecutionPillar[] = [
  {
    number: "01",
    title: "Operator-Led Execution",
    badge: "Zero Dev Homework",
    description:
      "We write portal forms, audit taxonomy, and deploy live CPPOs directly in your Slack.",
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.15)",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Direct Field Alliances",
    badge: "Warm Rep Rolodex",
    description:
      "Warm introductions to active AWS, Azure & GCP partner managers and enterprise field AEs.",
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.15)",
    icon: Users,
  },
  {
    number: "03",
    title: "Co-Sell & ACE Velocity",
    badge: "Zero Deal Leakage",
    description:
      "Weekly deal registration in ACE, automated CRM sync, and CPPO enterprise packaging.",
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.15)",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Audit-Ready Revenue",
    badge: "$300K+ MDF Grants",
    description:
      "Unlocking non-dilutive hyperscaler cash funding and board-ready revenue attribution telemetry.",
    accentColor: "#008BF8",
    glowColor: "rgba(0, 139, 248, 0.15)",
    icon: ShieldCheck,
  },
];

export default function TheResourceGap() {
  return (
    <div className="relative mx-auto max-w-7xl w-full">
      {/* ─── 1. SECTION HEADER (Tight, Narrative-Driven · Strictly NO CTA) ─── */}
      <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight text-slate-900 leading-tight">
          So, your marketplace listing is live.{" "}
          <span className="text-gradient">What happens next decides your revenue.</span>
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl mx-auto">
          Compare the two divergent trajectories: why traditional advisory leads to dormant listings, and how hands-off operator execution builds a 9X ROI cloud channel.
        </p>
      </div>

      {/* ─── 2. SPLIT STAGE: LEAN CARDS (Left) + PROMINENT A/B HIGHWAY (Right) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-4 items-stretch">
        
        {/* ─── LEFT COLUMN: 4 COMPACT EXECUTION CARDS (Cols 1-4) ─── */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-2">
          <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1 hidden lg:block">
            What SaaSNova Executes:
          </div>

          {EXECUTION_PILLARS.map((item) => {
            const Icon = item.icon;

            return (
              <TiltCard
                key={item.number}
                variant="light"
                intensity={8}
                className="group rounded-xl p-2.5 sm:p-3 flex flex-col justify-between overflow-hidden"
              >
                {/* Left Colored Accent Bar */}
                <div
                  className="absolute left-0 inset-y-0 w-1.5 rounded-l-xl bg-gradient-to-b from-[#FA0F9C] via-[#7C3AED] to-[#008BF8]"
                />

                <div className="pl-1.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-md border"
                        style={{
                          backgroundColor: `${item.accentColor}15`,
                          borderColor: `${item.accentColor}40`,
                          color: item.accentColor,
                        }}
                      >
                        <Icon className="h-3 w-3" />
                      </div>
                      <h4 className="text-xs sm:text-[12.5px] font-black text-slate-900 tracking-tight leading-tight">
                        {item.title}
                      </h4>
                    </div>

                    <span
                      className="font-mono text-[8.5px] font-bold px-1.5 py-0.2 rounded border"
                      style={{
                        backgroundColor: `${item.accentColor}10`,
                        borderColor: `${item.accentColor}30`,
                        color: item.accentColor,
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <p className="text-[10.5px] text-slate-600 leading-snug my-1 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                    <span
                      className="inline-flex items-center gap-1 text-[9px] font-extrabold px-2 py-0.2 rounded-full"
                      style={{
                        backgroundColor: `${item.accentColor}12`,
                        color: item.accentColor,
                      }}
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>{item.badge}</span>
                    </span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* ─── RIGHT COLUMN: BIG & PROMINENT ROUTE A/B HIGHWAY IN RECESSED 3D WELL (Cols 5-12) ─── */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1 mb-1.5 hidden lg:block">
            Architectural Pipeline Schematic:
          </div>

          <div className="well-recessed relative rounded-2xl p-3 sm:p-4 flex flex-col justify-between h-full overflow-hidden gap-2">
            
            {/* Ambient Prismatic Top Glow Line */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#008BF8]/60 via-[#FA0F9C]/60 to-transparent" />

            {/* Top: Origin Node Inline Header */}
            <div className="card-3d flex items-center justify-between gap-2 px-3 py-2 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-[#008BF8] to-[#7C3AED] text-white shadow-[0_2px_0_#5b21b6]">
                  <Rocket className="h-3 w-3" />
                </div>
                <span className="text-xs font-black text-slate-900 leading-tight">
                  Your SaaS Business
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-800 text-[9px] font-mono font-bold border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Listing Live</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="icon-3d flex h-6 w-6 items-center justify-center rounded-lg p-1" title="AWS">
                  <Image
                    src="/aws-logo.png"
                    alt="AWS"
                    width={16}
                    height={16}
                    className="h-3.5 w-auto object-contain"
                  />
                </div>
                <div className="icon-3d flex h-6 w-6 items-center justify-center rounded-lg p-1" title="Microsoft Azure">
                  <Image
                    src="/azure-logo.png"
                    alt="Azure"
                    width={16}
                    height={16}
                    className="h-3.5 w-auto object-contain"
                  />
                </div>
                <div className="icon-3d flex h-6 w-6 items-center justify-center rounded-lg p-1" title="Google Cloud Platform">
                  <Image
                    src="/gcp-logo.png"
                    alt="GCP"
                    width={16}
                    height={16}
                    className="h-3.5 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════════════════════════
                ROUTE A: THE NORMAL DETOUR (3D Raised Rose Slab)
               ════════════════════════════════════════════════════════════ */}
            <div className="card-3d rounded-xl p-2.5 sm:p-3 mb-0.5">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-rose-100">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-100 text-rose-700 text-[9px] font-black">
                    ✕
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 font-mono">
                    Route A · The Status Quo Detour
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[9.5px] font-mono font-extrabold">
                  <Clock className="w-2.5 h-2.5 text-rose-500" />
                  <span>18+ Mos Stalled</span>
                </span>
              </div>

              {/* Connected 3 Stations */}
              <div className="grid grid-cols-12 gap-2 items-stretch">
                {/* Station 01 */}
                <div className="col-span-4 p-2 rounded-lg bg-slate-50 border border-slate-200/80 border-b-2 border-b-slate-300/70 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[8.5px] font-mono font-extrabold text-slate-400 mb-0.5">
                      <span>01 · APPROACH</span>
                      <FileText className="h-2.5 w-2.5 text-rose-400" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">
                      Traditional Advisors
                    </div>
                    <p className="text-[9.5px] text-slate-500 mt-0.5 leading-snug">
                      $20K/mo slide decks. Won&apos;t log into cloud portals or fill forms.
                    </p>
                  </div>
                  <div className="text-[8.5px] font-bold text-rose-600 font-mono mt-1 pt-0.5 border-t border-slate-200/60">
                    Advice only · No execution
                  </div>
                </div>

                {/* Station 02 */}
                <div className="col-span-4 p-2 rounded-lg bg-slate-50 border border-slate-200/80 border-b-2 border-b-slate-300/70 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[8.5px] font-mono font-extrabold text-rose-600 mb-0.5">
                      <span>02 · WHAT HAPPENS</span>
                      <AlertTriangle className="h-2.5 w-2.5 text-rose-500" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">
                      Portal Maze &amp; Dev Drain
                    </div>
                    <p className="text-[9.5px] text-slate-500 mt-0.5 leading-snug">
                      Engineers waste 15h/wk on forms. $300K MDF budget expires unclaimed.
                    </p>
                  </div>
                  <div className="text-[8.5px] font-bold text-rose-600 font-mono mt-1 pt-0.5 border-t border-slate-200/60">
                    Devs diverted from product
                  </div>
                </div>

                {/* Station 03: Small Cards */}
                <div className="col-span-4 p-2 rounded-lg bg-rose-50 border border-rose-200 border-b-2 border-b-rose-300 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[8.5px] font-mono font-black text-rose-700 mb-0.5">
                    <span>03 · OUTCOME</span>
                    <span>Dormant</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 my-auto">
                    <div className="p-0.5 rounded bg-white/90 border border-rose-200 text-center">
                      <div className="font-mono text-[10px] font-black text-rose-700">$0 ARR</div>
                      <div className="text-[7.5px] text-slate-500">Zero Sales</div>
                    </div>
                    <div className="p-0.5 rounded bg-white/90 border border-rose-200 text-center">
                      <div className="font-mono text-[10px] font-black text-rose-700">0 PSQLs</div>
                      <div className="text-[7.5px] text-slate-500">No Co-Sell</div>
                    </div>
                    <div className="p-0.5 rounded bg-white/90 border border-rose-200 text-center">
                      <div className="font-mono text-[10px] font-black text-rose-700">$0 MDF</div>
                      <div className="text-[7.5px] text-slate-500">$300K Lost</div>
                    </div>
                    <div className="p-0.5 rounded bg-white/90 border border-rose-200 text-center">
                      <div className="font-mono text-[10px] font-black text-rose-700">18+ Mo</div>
                      <div className="text-[7.5px] text-slate-500">Lost Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Transition Bridge */}
            <div className="flex items-center justify-center my-0.5">
              <span className="inline-flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200/90 shadow-2xs px-2.5 py-0.2 rounded-full">
                <ArrowDown className="h-2.5 w-2.5 text-[#008BF8]" />
                <span>Replaced by SaaSNova Embedded Execution</span>
              </span>
            </div>

            {/* ════════════════════════════════════════════════════════════
                ROUTE B: THE SAASNOVA DIRECT HIGHWAY (Dark 3D Extruded Navy)
               ════════════════════════════════════════════════════════════ */}
            <div className="rounded-xl border border-emerald-400/80 border-t-emerald-300/90 bg-gradient-to-br from-[#0d1936] via-[#060B18] to-[#03060e] text-white p-2.5 sm:p-3 shadow-[inset_0_2px_1px_rgba(255,255,255,0.22),0_1px_0_#34d399,0_2px_0_#10b981,0_3px_0_#059669,0_4px_0_#047857,0_5px_0_#065f46,0_6px_0_#064e3b,0_20px_42px_-6px_rgba(16,185,129,0.35),0_12px_24px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400 text-slate-950 text-[9px] font-black">
                    ✓
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 font-mono">
                    Route B · SaaSNova Embedded Highway
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[9.5px] font-mono font-extrabold border border-emerald-500/30">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-300" />
                  <span>Live in 7 Days</span>
                </span>
              </div>

              {/* Connected 3 Stations */}
              <div className="grid grid-cols-12 gap-2 items-stretch">
                {/* Station 01 */}
                <div className="col-span-4 p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[8.5px] font-mono font-extrabold text-sky-400 mb-0.5">
                      <span>01 · APPROACH</span>
                      <Users className="h-2.5 w-2.5 text-sky-400" />
                    </div>
                    <div className="text-[11px] font-bold text-white leading-tight">
                      Operators In Your Slack
                    </div>
                    <p className="text-[9.5px] text-slate-300 mt-0.5 leading-snug">
                      Fractional PDM, PMM &amp; PAL embed Day 1. We write listings &amp; file forms.
                    </p>
                  </div>
                  <div className="text-[8.5px] font-bold text-sky-300 font-mono mt-1 pt-0.5 border-t border-white/10">
                    100% hands-off execution
                  </div>
                </div>

                {/* Station 02 */}
                <div className="col-span-4 p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[8.5px] font-mono font-extrabold text-emerald-400 mb-0.5">
                      <span>02 · WHAT HAPPENS</span>
                      <TrendingUp className="h-2.5 w-2.5 text-emerald-400" />
                    </div>
                    <div className="text-[11px] font-bold text-white leading-tight">
                      Full-Funnel Co-Sell
                    </div>
                    <p className="text-[9.5px] text-slate-300 mt-0.5 leading-snug">
                      Weekly ACE deals, direct rep alignment, and $300K+ MDF claimed.
                    </p>
                  </div>
                  <div className="text-[8.5px] font-bold text-emerald-300 font-mono mt-1 pt-0.5 border-t border-white/10">
                    Zero engineering drag
                  </div>
                </div>

                {/* Station 03: Small Cards with Real Stats */}
                <div className="col-span-4 p-2 rounded-lg bg-gradient-to-b from-emerald-950/90 via-slate-900 to-slate-950 border border-emerald-400/50 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between text-[8.5px] font-mono font-black text-emerald-400 mb-0.5">
                    <span>03 · OUTCOME</span>
                    <span>Operational</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 my-auto">
                    <div className="p-0.5 rounded bg-white/10 border border-white/15 text-center">
                      <div className="font-mono text-[10.5px] font-black text-white">2K+ PSQLs</div>
                      <div className="text-[7.5px] text-slate-300">Arctic Wolf</div>
                    </div>
                    <div className="p-0.5 rounded bg-white/10 border border-white/15 text-center">
                      <div className="font-mono text-[10.5px] font-black text-sky-400">$300K MDF</div>
                      <div className="text-[7.5px] text-slate-300">Dataminr</div>
                    </div>
                    <div className="p-0.5 rounded bg-white/10 border border-white/15 text-center">
                      <div className="font-mono text-[10.5px] font-black text-pink-400">9X ROI</div>
                      <div className="text-[7.5px] text-slate-300">Arctic Wolf</div>
                    </div>
                    <div className="p-0.5 rounded bg-white/10 border border-white/15 text-center">
                      <div className="font-mono text-[10.5px] font-black text-emerald-400">100+ ISVs</div>
                      <div className="text-[7.5px] text-slate-300">Across Clouds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
