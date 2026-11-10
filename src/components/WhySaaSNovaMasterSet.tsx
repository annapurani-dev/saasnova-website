"use client";

import {
  ArrowRight,
  ArrowDown,
  FileText,
  AlertTriangle,
  XCircle,
  Zap,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Compass,
  Bot,
} from "lucide-react";

export default function WhySaaSNovaMasterSet() {
  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-xs">
      
      {/* ══════════════════════════════════════════════════════════════
          TRACK 1: THE REGULAR ROADBLOCK (Red / Rose)
         ══════════════════════════════════════════════════════════════ */}
      <div className="rounded-2xl border border-rose-200/80 bg-rose-50/20 p-3.5 sm:p-5">
        
        {/* Track 1 Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2.5 border-b border-rose-100">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-200 text-rose-800 text-[11px] font-black">
              ✕
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-700 font-mono">
              The Regular Way: Advisory Friction &amp; Homework
            </span>
          </div>
          <span className="rounded-full bg-rose-100/80 border border-rose-200 px-2.5 py-0.5 text-[10px] font-bold text-rose-700">
            High Eng Drain · 9+ Months Lost
          </span>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
          
          {/* Step 1: The Goal / Item */}
          <div className="rounded-xl bg-white border border-rose-200/70 p-3 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                  01 · The Goal
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-600">
                  <Compass className="h-3.5 w-3.5" />
                </div>
              </div>
              <h5 className="font-display text-xs sm:text-[13px] font-extrabold text-slate-900 leading-snug">
                Expand to Cloud
              </h5>
              <p className="mt-1 text-[10.5px] text-slate-500 leading-relaxed">
                You want to sell on AWS, Azure &amp; GCP to tap enterprise pre-committed cloud budgets.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 text-[9.5px] font-bold text-slate-600">
              Needs portal activation
            </div>
          </div>

          {/* Step 2: Regular Approach */}
          <div className="rounded-xl bg-white border border-rose-200/70 p-3 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-rose-600">
                  02 · Regular Approach
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-50 text-rose-600">
                  <FileText className="h-3.5 w-3.5" />
                </div>
              </div>
              <h5 className="font-display text-xs sm:text-[13px] font-extrabold text-slate-900 leading-snug">
                60-Page Strategy PDF
              </h5>
              <p className="mt-1 text-[10.5px] text-slate-500 leading-relaxed">
                Consultants charge $20K/mo to hand you slides and advice — but refuse to touch the portals.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-rose-100 text-[9.5px] font-bold text-rose-600">
              Advice only · Zero execution
            </div>
          </div>

          {/* Step 3: The Blockage */}
          <div className="rounded-xl bg-white border border-rose-200/70 p-3 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-rose-600">
                  03 · The Blockage
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-50 text-rose-600">
                  <AlertTriangle className="h-3.5 w-3.5" />
                </div>
              </div>
              <h5 className="font-display text-xs sm:text-[13px] font-extrabold text-slate-900 leading-snug">
                Engineers in Portal Maze
              </h5>
              <p className="mt-1 text-[10.5px] text-slate-500 leading-relaxed">
                Your dev team wastes 15+ hrs/wk wrestling Partner Central errors, taxonomy tags &amp; forms.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-rose-100 text-[9.5px] font-bold text-rose-600">
              Devs diverted from product
            </div>
          </div>

          {/* Step 4: Blocked Outcome */}
          <div className="rounded-xl bg-rose-100/70 border border-rose-300/80 p-3 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-rose-700">
                  04 · Blocked Outcome
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-200 text-rose-800">
                  <XCircle className="h-3.5 w-3.5" />
                </div>
              </div>
              <h5 className="font-display text-xs sm:text-[13px] font-black text-rose-950 leading-snug">
                9+ Mos Stalled · $0 ARR
              </h5>
              <p className="mt-1 text-[10.5px] text-rose-800/90 leading-relaxed">
                Listings sit rejected or dormant, partner reps ignore you, and $50K MDF funds expire unused.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-rose-300 text-[9.5px] font-black text-rose-900">
              Wasted budget &amp; lost quarters
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          THE TRANSFORMATION BRIDGE CONNECTOR
         ══════════════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-center my-3 sm:my-3.5">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
          <Zap className="h-3 w-3 text-sky-400" />
          <span>The SaaSNova Shift: From Homework to Hands-Off Execution</span>
          <ArrowDown className="h-3 w-3 text-sky-400" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          TRACK 2: THE SAASNOVA ENGINE (Navy & Emerald)
         ══════════════════════════════════════════════════════════════ */}
      <div className="rounded-2xl border border-sky-400/35 bg-[#070D1E] text-white p-3.5 sm:p-5 shadow-xl relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative z-10">
          {/* Track 2 Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[11px] font-black">
                ✓
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-300 font-mono">
                The SaaSNova Way: Embedded Operators In Your Slack
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-300">
              Zero Homework · Live in 7 Days
            </span>
          </div>

          {/* 4 Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            {/* Step 1: SaaSNova In Slack */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 shadow-inner flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-sky-400">
                    01 · Embedded In Slack
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/20 text-sky-400">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h5 className="font-display text-xs sm:text-[13px] font-extrabold text-white leading-snug">
                  Operators in #cloud-gtm
                </h5>
                <p className="mt-1 text-[10.5px] text-slate-300 leading-relaxed">
                  Fractional PDM, PMM &amp; PAL join your Slack channel as embedded team members on Day 1.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/10 text-[9.5px] font-bold text-sky-300">
                Direct Slack integration
              </div>
            </div>

            {/* Step 2: Hands-Off Support */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 shadow-inner flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-sky-400">
                    02 · Hands-Off Support
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/20 text-sky-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h5 className="font-display text-xs sm:text-[13px] font-extrabold text-white leading-snug">
                  We Do 100% of the Work
                </h5>
                <p className="mt-1 text-[10.5px] text-slate-300 leading-relaxed">
                  We audit catalogs, fill every portal form, claim $50K+ MDF cash &amp; map cloud sales reps.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/10 text-[9.5px] font-bold text-sky-300">
                Done-for-you execution
              </div>
            </div>

            {/* Step 3: Zero Team Homework */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 shadow-inner flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-400">
                    03 · Zero Homework
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h5 className="font-display text-xs sm:text-[13px] font-extrabold text-white leading-snug">
                  0 Hours of Eng Drain
                </h5>
                <p className="mt-1 text-[10.5px] text-slate-300 leading-relaxed">
                  Your engineers build product. Your sales team closes. We handle all hyperscaler bureaucracy.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/10 text-[9.5px] font-bold text-emerald-300">
                100% bandwidth preserved
              </div>
            </div>

            {/* Step 4: Board-Ready Outcome */}
            <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-3 shadow-inner flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-300">
                    04 · Verified Outcome
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-slate-950">
                    <Rocket className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h5 className="font-display text-xs sm:text-[13px] font-black text-emerald-300 leading-snug font-mono">
                  Live in 7 Days &amp; Scaling
                </h5>
                <p className="mt-1 text-[10.5px] text-emerald-100/90 leading-relaxed">
                  GuardDog live in 1 week, $100M+ co-sell pipeline, and predictable, board-ready Cloud ARR.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-emerald-400/30 text-[9.5px] font-black text-emerald-300">
                Repeatable cloud ARR
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          THE 3 PROOFS SUMMARY BAR (1 Set Completeness)
         ══════════════════════════════════════════════════════════════ */}
      <div className="mt-3.5 pt-3.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/70 p-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
            <Rocket className="h-3.5 w-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] text-slate-400 uppercase font-extrabold">Marketplace Launch</div>
            <div className="font-extrabold text-slate-900 text-[11.5px]">Live in 7 Days</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/70 p-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
            <TrendingUp className="h-3.5 w-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] text-slate-400 uppercase font-extrabold">Hyperscaler Co-Sell</div>
            <div className="font-extrabold text-slate-900 text-[11.5px]">$100M+ Influenced Deals</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/70 p-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <DollarSign className="h-3.5 w-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] text-slate-400 uppercase font-extrabold">Marketing Funds (MDF)</div>
            <div className="font-extrabold text-slate-900 text-[11.5px]">$50K–$100K Cash Grants</div>
          </div>
        </div>

      </div>

    </div>
  );
}

