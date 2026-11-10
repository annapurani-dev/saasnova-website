"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  FileText,
  AlertTriangle,
  XCircle,
  Zap,
  CheckCircle2,
  Rocket,
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Layers,
  Sparkles,
} from "lucide-react";

type FilterId = "all" | "listing" | "cosell" | "mdf";

interface FlowItem {
  id: "listing" | "cosell" | "mdf";
  badge: string;
  title: string;
  tagline: string;
  regular: {
    title: string;
    sub: string;
    icon: typeof FileText;
  };
  blockage: {
    title: string;
    sub: string;
    icon: typeof AlertTriangle;
  };
  blockedOutcome: {
    title: string;
    sub: string;
    icon: typeof XCircle;
  };
  support: {
    title: string;
    sub: string;
    icon: typeof Zap;
  };
  execution: {
    title: string;
    sub: string;
    icon: typeof CheckCircle2;
  };
  unlockedOutcome: {
    title: string;
    sub: string;
    icon: typeof Rocket;
  };
}

const FLOW_ITEMS: FlowItem[] = [
  {
    id: "listing",
    badge: "01 · Marketplace Launch",
    title: "Marketplace Listing & Catalog",
    tagline: "From stalled portal paperwork to live transacting catalog",
    regular: {
      title: "60-Page Strategy PDF",
      sub: "Homework left for your team",
      icon: FileText,
    },
    blockage: {
      title: "Portal Form Fatigue",
      sub: "Engineers wrestle AWS console",
      icon: AlertTriangle,
    },
    blockedOutcome: {
      title: "9+ Months Stalled",
      sub: "Dormant listing, $0 sales",
      icon: XCircle,
    },
    support: {
      title: "Embedded PDM in Slack",
      sub: "Integrated in your channel",
      icon: Zap,
    },
    execution: {
      title: "100% Hands-Off Ops",
      sub: "We write, audit & file forms",
      icon: CheckCircle2,
    },
    unlockedOutcome: {
      title: "Live in 7 Days",
      sub: "GuardDog live in 1 week",
      icon: Rocket,
    },
  },
  {
    id: "cosell",
    badge: "02 · Hyperscaler Co-Sell",
    title: "Cloud Co-Sell & ACE Pipeline",
    tagline: "From ignored partner queues to direct cloud rep alignment",
    regular: {
      title: "Generic Sales Decks",
      sub: "Theoretical advisory calls",
      icon: FileText,
    },
    blockage: {
      title: "Lost in Partner Queues",
      sub: "Cloud sales reps ignore outreach",
      icon: AlertTriangle,
    },
    blockedOutcome: {
      title: "$0 Co-Sell Revenue",
      sub: "Missed enterprise cloud commits",
      icon: XCircle,
    },
    support: {
      title: "Embedded PAL Operator",
      sub: "Executive partner alliance leader",
      icon: ShieldCheck,
    },
    execution: {
      title: "Direct Cloud Rep Mapping",
      sub: "Account matching into AWS/Azure",
      icon: CheckCircle2,
    },
    unlockedOutcome: {
      title: "$100M+ Influenced ARR",
      sub: "Repeatable co-sell pipeline",
      icon: TrendingUp,
    },
  },
  {
    id: "mdf",
    badge: "03 · MDF Marketing Funds",
    title: "Cloud Marketing Cash Grants",
    tagline: "From unclaimed budget to secured hyperscaler funding",
    regular: {
      title: "DIY Claim Paperwork",
      sub: "Manual proof-of-performance PDFs",
      icon: FileText,
    },
    blockage: {
      title: "Lapsed Deadlines",
      sub: "Complex compliance rules",
      icon: AlertTriangle,
    },
    blockedOutcome: {
      title: "$50K+ Left on Table",
      sub: "Lost non-dilutive budget",
      icon: XCircle,
    },
    support: {
      title: "Embedded PMM Operator",
      sub: "Partner marketing specialist",
      icon: Sparkles,
    },
    execution: {
      title: "Full Claim & Audit Filing",
      sub: "Zero effort from your team",
      icon: CheckCircle2,
    },
    unlockedOutcome: {
      title: "$50K–$100K Cash Secured",
      sub: "Non-dilutive hyperscaler funding",
      icon: DollarSign,
    },
  },
];

export default function WhySaaSNovaFlow() {
  const [filter, setFilter] = useState<FilterId>("all");

  const visibleItems =
    filter === "all"
      ? FLOW_ITEMS
      : FLOW_ITEMS.filter((item) => item.id === filter);

  return (
    <div className="space-y-4">
      {/* Interactive Quick-Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold transition-all cursor-pointer ${
            filter === "all"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          <Layers className="h-3 w-3" />
          All 3 Pillars at a Glance
        </button>

        <button
          type="button"
          onClick={() => setFilter("listing")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold transition-all cursor-pointer ${
            filter === "listing"
              ? "bg-sky-600 text-white shadow-xs"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          🚀 1. Marketplace Listing
        </button>

        <button
          type="button"
          onClick={() => setFilter("cosell")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold transition-all cursor-pointer ${
            filter === "cosell"
              ? "bg-indigo-600 text-white shadow-xs"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          🤝 2. Hyperscaler Co-Sell
        </button>

        <button
          type="button"
          onClick={() => setFilter("mdf")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold transition-all cursor-pointer ${
            filter === "mdf"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          💰 3. Cloud Cash (MDF)
        </button>
      </div>

      {/* Visual Comparison Flow Cards */}
      <div className="space-y-4">
        {visibleItems.map((item) => {
          const RegularIcon = item.regular.icon;
          const BlockageIcon = item.blockage.icon;
          const BlockedOutcomeIcon = item.blockedOutcome.icon;
          const SupportIcon = item.support.icon;
          const ExecutionIcon = item.execution.icon;
          const UnlockedOutcomeIcon = item.unlockedOutcome.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-5 shadow-xs transition-all hover:shadow-sm"
            >
              {/* Item Header Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-slate-900 text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-wider font-mono">
                    {item.badge}
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-extrabold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block">
                  {item.tagline}
                </span>
              </div>

              {/* ── TRACK 1: THE REGULAR ROADBLOCK (Red / Rose) ── */}
              <div className="rounded-xl border border-rose-200/80 bg-rose-50/20 p-2.5 sm:p-3 mb-2">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-rose-700">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-200 text-rose-800 text-[9px] font-black">
                      ✕
                    </span>
                    The Regular Way: Advisory Friction
                  </div>
                  <span className="text-[9.5px] font-bold text-rose-500">
                    Why It Fails
                  </span>
                </div>

                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
                  {/* Step 1: Regular */}
                  <div className="flex-1 min-w-0 flex items-center gap-2.5 rounded-lg bg-white border border-rose-200/70 p-2 shadow-2xs">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-rose-50 text-rose-600">
                      <RegularIcon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-extrabold uppercase tracking-wide text-slate-400">
                        Regular Approach
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 truncate">
                        {item.regular.title}
                      </div>
                      <div className="text-[9.5px] text-slate-400 truncate">
                        {item.regular.sub}
                      </div>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="hidden md:flex items-center justify-center shrink-0 px-0.5">
                    <ArrowRight className="h-4 w-4 text-rose-400" />
                  </div>
                  <div className="md:hidden flex justify-center py-0.5">
                    <ArrowDown className="h-3 w-3 text-rose-400" />
                  </div>

                  {/* Step 2: Blockage */}
                  <div className="flex-1 min-w-0 flex items-center gap-2.5 rounded-lg bg-white border border-rose-200/70 p-2 shadow-2xs">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-rose-50 text-rose-600">
                      <BlockageIcon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-extrabold uppercase tracking-wide text-rose-600">
                        The Roadblock
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 truncate">
                        {item.blockage.title}
                      </div>
                      <div className="text-[9.5px] text-slate-400 truncate">
                        {item.blockage.sub}
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="hidden md:flex items-center justify-center shrink-0 px-0.5">
                    <ArrowRight className="h-4 w-4 text-rose-400" />
                  </div>
                  <div className="md:hidden flex justify-center py-0.5">
                    <ArrowDown className="h-3 w-3 text-rose-400" />
                  </div>

                  {/* Step 3: Blocked Outcome */}
                  <div className="flex-1 min-w-0 flex items-center gap-2.5 rounded-lg bg-rose-100/70 border border-rose-300/80 p-2 shadow-2xs">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-rose-200 text-rose-700">
                      <BlockedOutcomeIcon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-extrabold uppercase tracking-wide text-rose-700">
                        Blocked Outcome
                      </div>
                      <div className="text-[11px] font-black text-rose-900 truncate">
                        {item.blockedOutcome.title}
                      </div>
                      <div className="text-[9.5px] text-rose-700/80 truncate">
                        {item.blockedOutcome.sub}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── VERTICAL CONNECTOR BRIDGE ── */}
              <div className="flex items-center justify-center my-1.5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200/90 px-3 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider text-slate-600 shadow-2xs">
                  <ArrowDown className="h-2.5 w-2.5 text-sky-600" />
                  <span>Replaced by SaaSNova Embedded Execution</span>
                  <ArrowDown className="h-2.5 w-2.5 text-sky-600" />
                </div>
              </div>

              {/* ── TRACK 2: THE SAASNOVA ENGINE (Navy / Emerald) ── */}
              <div className="rounded-xl border border-sky-500/30 bg-[#070D1E] text-white p-2.5 sm:p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-sky-300">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sky-500 text-white text-[9px] font-black">
                      ✓
                    </span>
                    The SaaSNova Way: Embedded Execution
                  </div>
                  <span className="text-[9.5px] font-bold text-emerald-400">
                    Zero Homework · 100% Hands-off
                  </span>
                </div>

                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
                  {/* Step 1: SaaSNova Support */}
                  <div className="flex-1 min-w-0 flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 p-2 shadow-inner">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-500/20 text-sky-400">
                      <SupportIcon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-extrabold uppercase tracking-wide text-sky-400">
                        SaaSNova Support
                      </div>
                      <div className="text-[11px] font-bold text-white truncate">
                        {item.support.title}
                      </div>
                      <div className="text-[9.5px] text-slate-400 truncate">
                        {item.support.sub}
                      </div>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="hidden md:flex items-center justify-center shrink-0 px-0.5">
                    <ArrowRight className="h-4 w-4 text-sky-400" />
                  </div>
                  <div className="md:hidden flex justify-center py-0.5">
                    <ArrowDown className="h-3 w-3 text-sky-400" />
                  </div>

                  {/* Step 2: Execution */}
                  <div className="flex-1 min-w-0 flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 p-2 shadow-inner">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400">
                      <ExecutionIcon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-extrabold uppercase tracking-wide text-emerald-400">
                        Its Execution
                      </div>
                      <div className="text-[11px] font-bold text-white truncate">
                        {item.execution.title}
                      </div>
                      <div className="text-[9.5px] text-slate-400 truncate">
                        {item.execution.sub}
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="hidden md:flex items-center justify-center shrink-0 px-0.5">
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="md:hidden flex justify-center py-0.5">
                    <ArrowDown className="h-3 w-3 text-emerald-400" />
                  </div>

                  {/* Step 3: Unlocked Outcome */}
                  <div className="flex-1 min-w-0 flex items-center gap-2.5 rounded-lg bg-emerald-500/20 border border-emerald-400/40 p-2 shadow-inner">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-500 text-white">
                      <UnlockedOutcomeIcon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-extrabold uppercase tracking-wide text-emerald-300">
                        Board-Ready Outcome
                      </div>
                      <div className="text-[11.5px] font-black text-emerald-300 truncate font-mono">
                        {item.unlockedOutcome.title}
                      </div>
                      <div className="text-[9.5px] text-emerald-200/80 truncate">
                        {item.unlockedOutcome.sub}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
