"use client";

import Image from "next/image";
import { Zap, CheckCircle2, Bot } from "lucide-react";

export default function WhatSaaSNovaDoes() {
  return (
    <div className="rounded-3xl border border-sky-400/40 bg-[#070D1E] p-5 sm:p-5.5 text-white shadow-xl flex flex-col justify-between relative overflow-hidden h-full">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/20 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-pink-500/15 blur-2xl" />

      <div>
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider">
            <Zap className="h-3 w-3 text-sky-400 shrink-0" />
            02 · The Engine
          </span>
          <span className="text-[10px] font-bold text-sky-400">Embedded Ops</span>
        </div>

        <h3 className="font-display text-lg font-extrabold text-white leading-snug">
          What SaaSNova Does to Make It Simpler
        </h3>
        <p className="text-[11px] text-slate-300 mb-3.5 leading-relaxed">
          We embed in your Slack and execute every portal form, listing audit, and co-sell workflow.
        </p>

        {/* Mini Slack Injection Card */}
        <div className="rounded-xl bg-slate-900/90 border border-sky-500/30 p-2.5 mb-3 shadow-inner">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-tr from-sky-400 to-indigo-500 text-[9px] font-black">
                <Bot className="h-2.5 w-2.5 text-white" />
              </div>
              <span className="text-[10px] font-extrabold text-sky-300">SaaSNova Operator</span>
              <span className="text-[9px] text-slate-500">in #cloud-gtm</span>
            </div>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-[10.5px] text-slate-200 pl-5 leading-tight font-mono">
            &ldquo;✅ ACE Deal #941 approved ($240K) &amp; $50K MDF grant claimed.&rdquo;
          </div>
        </div>

        {/* 3 Compact Embedded Roles */}
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          <div className="rounded-lg bg-white/5 border border-white/10 p-1.5 text-center">
            <div className="text-[10px] font-black text-sky-400">PDMaaS</div>
            <div className="text-[9px] text-slate-400 leading-tight">Listings &amp; ACE</div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-1.5 text-center">
            <div className="text-[10px] font-black text-pink-400">PMMaaS</div>
            <div className="text-[9px] text-slate-400 leading-tight">MDF Grants</div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-1.5 text-center">
            <div className="text-[10px] font-black text-emerald-400">PALaaS</div>
            <div className="text-[9px] text-slate-400 leading-tight">VP Co-Sell</div>
          </div>
        </div>

        {/* Multi-Cloud Ecosystem Icons & Active Progress Bar */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-2 text-[10px]">
          <div className="flex justify-between items-center text-slate-300 font-semibold mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[9.5px] text-slate-400">Hyperscalers:</span>
              <div className="flex items-center gap-1.5">
                <Image src="/aws-logo.png" alt="AWS" width={14} height={14} className="h-3 w-auto object-contain" />
                <Image src="/azure-logo.png" alt="Azure" width={14} height={14} className="h-3 w-auto object-contain" />
                <Image src="/gcp-logo.png" alt="GCP" width={14} height={14} className="h-3 w-auto object-contain" />
              </div>
            </div>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> 100% Hands-off
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-full" />
          </div>
        </div>
      </div>

      {/* Compact Outcome Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 font-semibold">Execution</span>
        <span className="font-extrabold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/40">
          Zero homework · We do the work
        </span>
      </div>
    </div>
  );
}
