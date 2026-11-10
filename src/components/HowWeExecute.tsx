"use client";

import { useState, useEffect } from "react";
import TiltCard from "@/components/TiltCard";
import {
  Rocket,
  TrendingUp,
  Zap,
  ShieldCheck,
  Bot,
  ArrowRight,
} from "lucide-react";

interface Pillar {
  step: string;
  name: string;
  action: string;
  subtext: string;
  proofMetric: string;
  proofContext: string;
  operator: string;
  gradient: string;
  glowColor: string;
  accentColor: string;
  icon: typeof Rocket;
}

const PILLARS: Pillar[] = [
  {
    step: "01",
    name: "Activate",
    action: "Marketplace Launch",
    subtext: "Listing audit, taxonomy tags, portal paperwork & CPPO packaging.",
    proofMetric: "Live in 7 Days",
    proofContext: "GuardDog.ai",
    operator: "Fractional PDM",
    gradient: "from-[#008BF8] to-[#38BDF8]",
    glowColor: "rgba(0, 139, 248, 0.25)",
    accentColor: "#008BF8",
    icon: Rocket,
  },
  {
    step: "02",
    name: "Drive",
    action: "Automated Co-Sell",
    subtext: "Weekly automated ACE registrations & direct cloud rep alignment.",
    proofMetric: "2K+ PSQLs",
    proofContext: "Arctic Wolf",
    operator: "Alliance PAL",
    gradient: "from-[#008BF8] to-[#2563EB]",
    glowColor: "rgba(0, 139, 248, 0.25)",
    accentColor: "#008BF8",
    icon: TrendingUp,
  },
  {
    step: "03",
    name: "Convert",
    action: "Private Offers",
    subtext: "Custom Private Offers drawing down customer committed cloud spend.",
    proofMetric: "14-Day Close",
    proofContext: "Enterprise Deals",
    operator: "Product PMM",
    gradient: "from-[#FA0F9C] to-[#E00A8B]",
    glowColor: "rgba(250, 15, 156, 0.25)",
    accentColor: "#FA0F9C",
    icon: Zap,
  },
  {
    step: "04",
    name: "Prove",
    action: "MDF & Cloud ARR",
    subtext: "100% MDF cash claimed & board-ready attribution reporting.",
    proofMetric: "9X ROI · $300K MDF",
    proofContext: "Dataminr & Arctic Wolf",
    operator: "Executive Ops",
    gradient: "from-[#008BF8] to-[#0284C7]",
    glowColor: "rgba(0, 139, 248, 0.25)",
    accentColor: "#008BF8",
    icon: ShieldCheck,
  },
];

export default function HowWeExecute() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Live continuous motion: Each card pops out for 2 seconds, then loops 1 -> 2 -> 3 -> 4 -> 1
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PILLARS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="card-3d-master-dark relative max-w-7xl mx-auto w-full p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── INTERIOR DARK BLUE CONTRAST CARD ── */}
      <div className="relative bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] px-4 pt-10 pb-8 sm:px-7 sm:pt-12 sm:pb-9 lg:px-9 lg:pt-12 lg:pb-10 overflow-hidden space-y-6 text-white backdrop-blur-2xl">
        {/* Dynamic Prismatic Top Highlight Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 via-pink-400/80 to-transparent" />

        {/* Ambient Glow Orbs inside Cockpit */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-60 rounded-full bg-gradient-to-r from-[#FA0F9C]/20 via-[#7C3AED]/25 to-[#008BF8]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FA0F9C]/18 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#008BF8]/20 blur-[100px]" />

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>OPERATOR-LED EXECUTION ENGINE</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-white leading-tight">
            How SaaSNova Executes:{" "}
            <span className="text-gradient">
              Activate ➔ Drive ➔ Convert ➔ Prove
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            A continuous, hands-off operator pipeline that turns cloud marketplace listings into predictable, closed revenue.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            LIVE SEQUENTIAL MOTION PIPELINE
            Sequential pop-out loop: 1 ➔ 2 ➔ 3 ➔ 4 ➔ 1
           ══════════════════════════════════════════════════════════════ */}
        <div className="well-recessed-dark relative rounded-3xl p-4 sm:p-6 lg:p-7 overflow-visible">
          
          {/* Flex Track with Dedicated Arrows between Cards */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-3 relative z-10 py-2">
            
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeStep === idx;

              return (
                <div key={pillar.step} className="w-full flex-1 flex items-center justify-between gap-2 lg:gap-3">
                  
                  {/* ── CARD (DARK 3D EXTRUDED MODULE WITH CURSOR TILT & GLARE) ── */}
                  <TiltCard
                    onClick={() => setActiveStep(idx)}
                    variant={isActive ? "dark-active" : "dark"}
                    intensity={10}
                    className={`w-full flex flex-col justify-between items-center text-center cursor-pointer p-5 ${
                      isActive ? "z-30 opacity-100" : "z-10 opacity-90 hover:opacity-100"
                    }`}
                  >
                    {/* Top: Step Badge & Live Pulse */}
                    <div className="flex flex-col items-center w-full relative z-10">
                      
                      {/* Stage Pill */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold mb-3 transition-colors duration-300 ${
                          isActive
                            ? "bg-white text-slate-950 shadow-[0_2px_0_#cbd5e1]"
                            : "bg-white/10 border border-white/15 text-slate-300 shadow-[0_2px_0_rgba(0,0,0,0.4)]"
                        }`}
                      >
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-ping" />}
                        <span>STAGE {pillar.step}</span>
                      </div>

                      {/* 3D Keycap Milestone Orb (Frosted Silver/White when Active) */}
                      <div
                        className={`flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl transition-all duration-500 mb-3 ${
                          isActive
                            ? "bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-950 scale-110 shadow-[0_4px_0_#94a3b8,0_10px_22px_rgba(255,255,255,0.22),inset_0_1.5px_0_#ffffff] ring-2 ring-white/40"
                            : "bg-gradient-to-b from-slate-700 to-slate-800 border border-white/15 text-slate-200 shadow-[0_4px_0_#0f172a,0_6px_12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]"
                        }`}
                      >
                        <Icon className="h-6 w-6 transition-transform duration-300" />
                      </div>

                      {/* Stage Name */}
                      <h3 className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                        {pillar.name}
                      </h3>

                      {/* Action Tag */}
                      <p
                        className={`text-[11px] font-bold uppercase tracking-wider font-mono mt-0.5 ${
                          isActive ? "text-slate-100" : "text-slate-400"
                        }`}
                      >
                        {pillar.action}
                      </p>

                      {/* 1-Line Description */}
                      <p className="text-xs text-slate-300 leading-relaxed mt-2 max-w-[185px]">
                        {pillar.subtext}
                      </p>
                    </div>

                    {/* Bottom: Outcome Pill & Operator Role */}
                    <div className="w-full mt-4 pt-3 border-t border-white/10 relative z-10 space-y-2">
                      
                      {/* 3D Sunken Outcome Well */}
                      <div
                        className={`py-1.5 px-2 rounded-xl text-center transition-all duration-300 ${
                          isActive
                            ? "bg-white/10 border border-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.45)]"
                            : "bg-slate-950/50 border border-white/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]"
                        }`}
                      >
                        <div
                          className={`font-mono text-xs sm:text-[13px] font-black leading-tight ${
                            isActive ? "text-white" : "text-slate-200"
                          }`}
                        >
                          {pillar.proofMetric}
                        </div>
                        <div className="text-[10px] font-medium text-slate-300 mt-0.5">
                          {pillar.proofContext}
                        </div>
                      </div>

                      {/* Embedded Operator Pill */}
                      <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-300">
                        <Bot className={`h-3 w-3 ${isActive ? "text-white" : "text-slate-400"}`} />
                        <span>{pillar.operator}</span>
                      </div>

                    </div>

                  </TiltCard>

                  {/* ── ARROW BETWEEN CARDS ── */}
                  {idx < PILLARS.length - 1 && (
                    <div className="hidden lg:flex shrink-0 items-center justify-center w-7 sm:w-8 z-20">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 shadow-2xs ${
                          activeStep === idx
                            ? "bg-white text-slate-950 border-white scale-110 shadow-[0_2px_0_#cbd5e1,0_0_16px_rgba(255,255,255,0.3)]"
                            : "bg-slate-800 border-white/10 text-slate-400"
                        }`}
                      >
                        <ArrowRight className={`h-3.5 w-3.5 ${activeStep === idx ? "animate-pulse" : ""}`} />
                      </div>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}
