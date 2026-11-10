"use client";

import { X, Check, ShieldCheck, Zap } from "lucide-react";

export default function OperatorCockpit() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Clean Minimal Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="inline-block rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-2.5">
          Why SaaSNova
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Not Advice. Not Theory. Execution.
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
          Consultants give you frameworks and homework. We embed seasoned cloud operators directly alongside your team and execute the co-sell motion with you.
        </p>
      </div>

      {/* Clean 2-Column Split Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left: The Traditional Advisory Trap */}
        <div className="rounded-3xl border border-rose-200/80 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-[11px] font-bold text-rose-700 mb-4">
              Traditional Consulting
            </div>

            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              They give you homework.
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              Advisors leave you with 60-page slide decks, leaving your lean engineering and sales teams to wrestle with complex cloud portals alone.
            </p>

            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <X className="h-3 w-3 stroke-[3]" />
                </span>
                <span>60-page PDF strategy decks with no hands-on execution</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <X className="h-3 w-3 stroke-[3]" />
                </span>
                <span>Unresolved Partner Central forms, ACE delays &amp; portal rejections</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <X className="h-3 w-3 stroke-[3]" />
                </span>
                <span>15+ hours/week wasted by your internal engineers &amp; sellers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <X className="h-3 w-3 stroke-[3]" />
                </span>
                <span>Hourly retainers with zero accountability to closed cloud revenue</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Outcome</span>
            <span className="font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
              Dormant listings &amp; lost quarters
            </span>
          </div>
        </div>

        {/* Right: The SaaSNova Operator Engine */}
        <div className="rounded-3xl border border-sky-500/30 bg-[#070D1E] bg-grid-checks-dark text-white p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between">
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-pink-500/15 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-[11px] font-bold text-sky-300 mb-4">
              <Zap className="h-3 w-3 text-sky-400" />
              The SaaSNova Motion
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">
              We do the work.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              We embed seasoned Partner Development Managers (PDM), Marketers (PMM), and Alliance Leaders (PAL) directly in your tools to run the entire motion.
            </p>

            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span>Fractional PDM, PMM &amp; PAL operators embedded in your Slack</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span>From SOW to live marketplace listing in <strong>7 Days</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span>Active co-sell deal registration &amp; hyperscaler field rep activation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span>Board-ready evidence: co-sell logs, private offers &amp; 9X direct ROI</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Outcome</span>
            <span className="font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              Repeatable, attributable cloud ARR
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
