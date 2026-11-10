"use client";

import { AlertTriangle, FileX, Clock, Ban } from "lucide-react";

export default function WhatOthersDoBlocking() {
  return (
    <div className="rounded-3xl border border-rose-200/90 bg-gradient-to-b from-white via-rose-50/15 to-rose-50/30 p-5 sm:p-5.5 shadow-xs flex flex-col justify-between relative overflow-hidden h-full">
      {/* Ambient Red Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-200/30 blur-2xl" />

      <div>
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider">
            <AlertTriangle className="h-3 w-3 text-rose-600 shrink-0" />
            01 · The Blocker
          </span>
          <span className="text-[10px] font-bold text-rose-500">Traditional Advisory</span>
        </div>

        <h3 className="font-display text-lg font-extrabold text-slate-900 leading-snug">
          What Others Do That&apos;s Blocking
        </h3>
        <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
          Consultants give homework and leave your team to battle complex cloud portals alone.
        </p>

        {/* Visual Friction Flow */}
        <div className="space-y-2 mb-4">
          {/* Card 1 */}
          <div className="flex items-center gap-2.5 rounded-xl bg-white border border-rose-200/80 p-2.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100/70 text-rose-600">
              <FileX className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-slate-800 text-[11.5px] leading-tight">60-Page Strategy PDF</div>
              <div className="text-[10px] text-slate-400">Zero portal execution</div>
            </div>
            <span className="text-[9px] font-extrabold text-rose-600 bg-rose-50 border border-rose-200/60 px-1.5 py-0.5 rounded">
              Unused
            </span>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-2.5 rounded-xl bg-white border border-rose-200/80 p-2.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100/70 text-rose-600">
              <Clock className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-slate-800 text-[11.5px] leading-tight">15h/wk Team Drain</div>
              <div className="text-[10px] text-slate-400">Engineers filling forms</div>
            </div>
            <span className="text-[9px] font-extrabold text-rose-600 bg-rose-50 border border-rose-200/60 px-1.5 py-0.5 rounded">
              Friction
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-2.5 rounded-xl bg-white border border-rose-200/80 p-2.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100/70 text-rose-600">
              <Ban className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-slate-800 text-[11.5px] leading-tight">Portal Rejections</div>
              <div className="text-[10px] text-slate-400">Stalled ACE deals &amp; MDF</div>
            </div>
            <span className="text-[9px] font-extrabold text-rose-600 bg-rose-50 border border-rose-200/60 px-1.5 py-0.5 rounded">
              Stalled
            </span>
          </div>
        </div>

        {/* Visual Progress Bar: Blocked status */}
        <div className="rounded-xl bg-rose-50/70 border border-rose-200/60 p-2 text-[10px]">
          <div className="flex justify-between items-center text-slate-600 font-semibold mb-1">
            <span>Marketplace Progress</span>
            <span className="text-rose-600 font-bold">15% · Blocked</span>
          </div>
          <div className="h-1.5 w-full bg-rose-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-rose-500 rounded-full w-[15%]" />
          </div>
        </div>
      </div>

      {/* Compact Outcome Footer */}
      <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 font-semibold">Result</span>
        <span className="font-extrabold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
          Dormant listings &amp; lost quarters
        </span>
      </div>
    </div>
  );
}
