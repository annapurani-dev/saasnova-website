"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Zap,
  ArrowRight,
  FileText,
  XCircle,
  CheckCircle2,
  Cpu,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Clock,
  Activity,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function ExecutionPipelineArt() {
  const [activeEngine, setActiveEngine] = useState<"pdm" | "pmm" | "pal">("pdm");

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Ultra-Lean Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-sky-700 mb-2.5 shadow-xs">
          <Sparkles className="h-3 w-3 text-sky-600" />
          The Execution Architecture
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
          Not Advice. Not Theory. <br className="hidden sm:inline" />
          <span className="text-gradient">The Direct Execution Highway.</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          Bypass the 60-page slide-deck detour. Route directly into hyperscaler revenue.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════
          VISUAL INFOGRAPHIC CANVAS
         ══════════════════════════════════════════════════════════ */}
      <div className="relative rounded-[2.5rem] border border-slate-200/90 bg-white/95 p-5 sm:p-8 lg:p-10 shadow-[0_25px_80px_rgba(15,23,42,0.07)] backdrop-blur-xl overflow-hidden">
        {/* Prismatic Top Highlight Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-pink-400 to-transparent" />
        
        {/* Subtle Ambient Glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-[90px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-400/10 blur-[90px]" />

        {/* ─── 1. TOP GRAPHICAL DETOUR: THE CONSULTANT ROADBLOCK (Bypassed) ─── */}
        <div className="mb-8 relative rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/25 p-3.5 sm:p-4 overflow-hidden">
          {/* Watermark Stamp */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-[-6deg] rounded-lg border-2 border-rose-500/40 bg-rose-100/60 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-rose-600 select-none shadow-xs">
            🚫 Bypassed by SaaSNova
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-rose-700 shrink-0">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white text-[10px]">✕</span>
              The Advisory Detour:
            </span>

            {/* 3 Graphical Roadblocks */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-rose-200/80 px-3 py-1.5 shadow-xs">
                <FileText className="h-4 w-4 text-rose-500" />
                <span className="font-bold text-slate-800">60-Page PDF Deck</span>
                <span className="text-[10px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">No Execution</span>
              </div>

              <span className="text-rose-300 hidden sm:inline">➔</span>

              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-rose-200/80 px-3 py-1.5 shadow-xs">
                <Clock className="h-4 w-4 text-rose-500" />
                <span className="font-bold text-slate-800">15h/wk Team Drain</span>
                <span className="text-[10px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">Form Paralysis</span>
              </div>

              <span className="text-rose-300 hidden sm:inline">➔</span>

              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-rose-200/80 px-3 py-1.5 shadow-xs">
                <XCircle className="h-4 w-4 text-rose-500" />
                <span className="font-bold text-slate-800">Stalled ACE Registration</span>
                <span className="text-[10px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">0 Revenue</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. MAIN EXECUTION HIGHWAY (Visual Circuit) ─── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* NODE A: YOUR PRODUCT (Origin) */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-5 shadow-sm text-center flex flex-col items-center justify-between min-h-[220px]">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md mb-3">
                <Rocket className="h-8 w-8" />
              </div>
              <div className="font-display text-base font-extrabold text-slate-900">
                Your SaaS Product
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Core Engineering &amp; Sales</div>
            </div>

            <div className="w-full mt-4 pt-3 border-t border-slate-200/80">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-extrabold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                0 hrs Alliance Drain
              </div>
            </div>
          </div>

          {/* NODE B: THE SAASNOVA OPERATOR CORE (The Processor Engine) */}
          <div className="lg:col-span-6 rounded-3xl border border-sky-400/40 bg-[#070D1E] bg-grid-checks-dark text-white p-5 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            {/* Glowing Accent Orbs */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-500/25 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-pink-500/20 blur-2xl" />

            <div className="relative z-10">
              {/* Core Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-sm">
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-display text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-white">
                    SaaSNova Operator Core
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Embedded in Slack
                </div>
              </div>

              {/* 3 Interactive Microchips */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* Chip 1: PDM */}
                <button
                  type="button"
                  onClick={() => setActiveEngine("pdm")}
                  className={`rounded-2xl p-3 text-center transition-all border ${
                    activeEngine === "pdm"
                      ? "bg-sky-500/30 border-sky-400 text-white shadow-[0_0_25px_rgba(0,139,248,0.4)] scale-[1.03]"
                      : "bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 mb-2">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div className="font-display text-xs font-extrabold text-white">PDMaaS</div>
                  <div className="text-[10px] font-semibold text-sky-400 mt-0.5">ACE &amp; Listings</div>
                </button>

                {/* Chip 2: PMM */}
                <button
                  type="button"
                  onClick={() => setActiveEngine("pmm")}
                  className={`rounded-2xl p-3 text-center transition-all border ${
                    activeEngine === "pmm"
                      ? "bg-pink-500/30 border-pink-400 text-white shadow-[0_0_25px_rgba(250,15,156,0.4)] scale-[1.03]"
                      : "bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-xl bg-pink-500/20 border border-pink-400/40 text-pink-300 mb-2">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="font-display text-xs font-extrabold text-white">PMMaaS</div>
                  <div className="text-[10px] font-semibold text-pink-400 mt-0.5">MDF &amp; Co-Mktg</div>
                </button>

                {/* Chip 3: PAL */}
                <button
                  type="button"
                  onClick={() => setActiveEngine("pal")}
                  className={`rounded-2xl p-3 text-center transition-all border ${
                    activeEngine === "pal"
                      ? "bg-purple-500/30 border-purple-400 text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] scale-[1.03]"
                      : "bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300 mb-2">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="font-display text-xs font-extrabold text-white">PALaaS</div>
                  <div className="text-[10px] font-semibold text-purple-400 mt-0.5">Alliance VP</div>
                </button>
              </div>
            </div>

            {/* Chip Action Readout */}
            <div className="relative z-10 mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-mono text-[10px] uppercase">Active Motion:</span>
              <span className="font-bold text-sky-300 text-right">
                {activeEngine === "pdm" && "Portal form execution, catalog launch & private offer config"}
                {activeEngine === "pmm" && "Securing $300K+ cloud MDF grants & field rep collateral"}
                {activeEngine === "pal" && "Executive tier status, enterprise MACC contract drawdowns"}
              </span>
            </div>
          </div>

          {/* NODE C: HYPERSCALERS & REVENUE (Destination Pods) */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-5 shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Cloud Gateways
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Live
                </span>
              </div>

              {/* 3 Graphical Cloud Pods */}
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Image src="/aws-logo.png" alt="AWS" width={18} height={18} className="h-4 w-auto object-contain" />
                    <span className="text-xs font-bold text-slate-800">AWS Marketplace</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Image src="/azure-logo.png" alt="Azure" width={18} height={18} className="h-4 w-auto object-contain" />
                    <span className="text-xs font-bold text-slate-800">Microsoft Azure</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Image src="/gcp-logo.png" alt="GCP" width={18} height={18} className="h-4 w-auto object-contain" />
                    <span className="text-xs font-bold text-slate-800">Google Cloud</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-center">
              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 inline-block">
                Attributable Cloud ARR
              </span>
            </div>
          </div>

        </div>

        {/* ─── 3. BOTTOM GRAPHICAL TELEMETRY GAUGES (Minimalist Metrics) ─── */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3.5 rounded-2xl bg-sky-50/60 p-3.5 border border-sky-200/70">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-2xl font-black text-slate-900 font-[family-name:var(--font-mono)]">
                7 Days
              </div>
              <div className="text-xs font-bold text-slate-700">SOW to Live Listing</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl bg-pink-50/60 p-3.5 border border-pink-200/70">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FA0F9C] text-white shadow-sm">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-2xl font-black text-slate-900 font-[family-name:var(--font-mono)]">
                $100M+
              </div>
              <div className="text-xs font-bold text-slate-700">Cloud Pipeline Influenced</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl bg-emerald-50/60 p-3.5 border border-emerald-200/70">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-2xl font-black text-slate-900 font-[family-name:var(--font-mono)]">
                9X ROI
              </div>
              <div className="text-xs font-bold text-slate-700">Direct Co-Sell Yield</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
