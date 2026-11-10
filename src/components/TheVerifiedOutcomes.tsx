"use client";

import { CheckCircle2, TrendingUp, Clock, ShieldCheck } from "lucide-react";

export default function TheVerifiedOutcomes() {
  return (
    <div className="rounded-3xl border border-emerald-200/90 bg-gradient-to-b from-white via-emerald-50/15 to-emerald-50/30 p-5 sm:p-5.5 shadow-xs flex flex-col justify-between relative overflow-hidden h-full">
      {/* Ambient Emerald Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/30 blur-2xl" />

      <div>
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider">
            <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
            03 · The Outcome
          </span>
          <span className="text-[10px] font-bold text-emerald-600">Board-Ready ARR</span>
        </div>

        <h3 className="font-display text-lg font-extrabold text-slate-900 leading-snug">
          The Verified Board-Ready Outcomes
        </h3>
        <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
          From dormant listings to live transacting revenue across AWS, Azure, and Google Cloud.
        </p>

        {/* 3 Graphical Metric Cards */}
        <div className="space-y-2 mb-4">
          {/* Metric 1 */}
          <div className="flex items-center justify-between rounded-xl bg-white border border-emerald-200/80 p-2.5 shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <Clock className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-slate-800 text-[11.5px] leading-tight">SOW to Live Listing</div>
                <div className="text-[10px] text-slate-400">GuardDog live in 1 week</div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-black text-slate-900 font-mono">7 Days</div>
              <span className="text-[9px] font-extrabold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.2 rounded">
                Speed
              </span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center justify-between rounded-xl bg-white border border-emerald-200/80 p-2.5 shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-600">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-slate-800 text-[11.5px] leading-tight">Influenced Pipeline</div>
                <div className="text-[10px] text-slate-400">AWS, Azure &amp; GCP co-sell</div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-black text-slate-900 font-mono">$100M+</div>
              <span className="text-[9px] font-extrabold text-pink-700 bg-pink-50 border border-pink-200 px-1.5 py-0.2 rounded">
                Scale
              </span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex items-center justify-between rounded-xl bg-white border border-emerald-200/80 p-2.5 shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-slate-800 text-[11.5px] leading-tight">Co-Sell Yield</div>
                <div className="text-[10px] text-slate-400">Direct ARR multiplier</div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-black text-slate-900 font-mono">9X ROI</div>
              <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded">
                Yield
              </span>
            </div>
          </div>
        </div>

        {/* Visual Progress Bar: Verified ARR */}
        <div className="rounded-xl bg-emerald-50/70 border border-emerald-200/60 p-2 text-[10px]">
          <div className="flex justify-between items-center text-slate-600 font-semibold mb-1">
            <span>Board Attribution</span>
            <span className="text-emerald-700 font-bold">100% · Attributable ARR</span>
          </div>
          <div className="h-1.5 w-full bg-emerald-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-full" />
          </div>
        </div>
      </div>

      {/* Compact Outcome Footer */}
      <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 font-semibold">Impact</span>
        <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Repeatable, predictable cloud ARR
        </span>
      </div>
    </div>
  );
}
