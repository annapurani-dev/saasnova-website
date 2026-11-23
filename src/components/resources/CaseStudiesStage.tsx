"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  X,
  TrendingUp,
  Clock,
  Handshake,
  Target,
  Lightbulb,
  Check,
  ArrowRight,
} from "lucide-react";
import { CASE_STUDIES, CaseStudyItem } from "./resourcesData";

interface CaseStudiesStageProps {
  initialCaseId?: string;
}

export default function CaseStudiesStage({ initialCaseId }: CaseStudiesStageProps) {
  const [activeCase, setActiveCase] = useState<CaseStudyItem | null>(() => {
    if (initialCaseId) {
      return CASE_STUDIES.find((c) => c.id === initialCaseId) || null;
    }
    return null;
  });

  const nextCase = activeCase
    ? CASE_STUDIES.find((c) => c.id !== activeCase.id) || CASE_STUDIES[0]
    : null;

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 1: THE CUSTOMER SUCCESS DOSSIER (Matching Reference Image Exactly)
  // ══════════════════════════════════════════════════════════════════════════
  if (activeCase) {
    return (
      <div className="space-y-6 animate-fadeIn pb-12">
        {/* Dossier Container (Matching Reference Image Layout) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden text-slate-900">
          {/* 1. Header Bar: Icon + Case Study / Customer Success Stories + Close X */}
          <div className="px-6 sm:px-8 py-4 border-b border-slate-200/90 bg-white flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm leading-tight">
                  Case Study
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  Customer Success Stories
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveCase(null)}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-full hover:bg-slate-100 border border-slate-200/70 cursor-pointer"
              aria-label="Close case study"
            >
              <span>Close</span>
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* 2. Centered Case Study Masthead (Same Serif Style as Blog, Centered) */}
            <div className="border-b border-slate-200/90 pb-6 space-y-3 text-center">
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-serif">
                  SaaSNova Case Study
                </h2>
                <div className="text-xs sm:text-sm font-serif italic text-slate-500">
                  Attributable. Audited. Engineered.
                </div>
              </div>

              {/* Centered Metadata & Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-slate-500 border-t border-slate-100">
                <div className="font-semibold">
                  Case #{activeCase.id === "arcticwolf" ? "01" : "02"}{" "}
                  <span className="text-slate-300">|</span> {activeCase.client}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-slate-100 text-slate-700">
                    {activeCase.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-sky-50 text-[#008BF8]">
                    Hyperscaler Co-Sell
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-700">
                    Verified ROI
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Hero Architectural Cut Banner (Deep Navy + Diagonal Cut + Pink Ribbon) */}
            <div className="relative rounded-3xl bg-gradient-to-r from-[#070D1E] via-[#0B1530] to-[#0A1B3B] text-white overflow-hidden shadow-lg border border-slate-800">
              {/* Right Side: Modern Glass Architecture Graphic with Diagonal Cut */}
              <div
                className="absolute right-0 top-0 bottom-0 w-full sm:w-[46%] lg:w-[42%] hidden sm:block pointer-events-none"
                style={{
                  clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(7, 13, 30, 0.4) 0%, rgba(0, 139, 248, 0.25) 100%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 28px), linear-gradient(120deg, #0d2757 0%, #081630 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E]/90 via-transparent to-transparent" />
              </div>

              {/* Angled Brand Pink Accent Ribbon Along Diagonal Slash */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[4px] sm:w-[6px] bg-[#FA0F9C] hidden sm:block pointer-events-none"
                style={{
                  right: "calc(46% - 3px)",
                  transform: "skewX(-10deg)",
                  boxShadow: "0 0 20px rgba(250, 15, 156, 0.6)",
                }}
              />

              {/* Left Side Content */}
              <div className="relative p-6 sm:p-10 space-y-4 max-w-xl z-10">
                {/* Client Logo on Clean White Plinth + Serial Label */}
                <div className="flex items-center gap-3">
                  <div className="h-9 px-3 py-1 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs shrink-0">
                    <img
                      src={activeCase.logo}
                      alt={activeCase.client}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <span className="text-slate-400">·</span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                    CASE STUDY • {activeCase.id === "arcticwolf" ? "SN-AW-01" : "SN-DM-02"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white leading-[1.2] tracking-tight">
                  {activeCase.title}
                </h2>

                {/* Subhead */}
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {activeCase.subtitle}
                </p>
              </div>
            </div>

            {/* 3. Three-Column Metrics Bar (Matching Reference Image) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              {/* Metric 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight font-mono tracking-tight">
                    {activeCase.results[1]?.num || "9X"}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {activeCase.results[1]?.label || "ROI Validated"}
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-4 sm:border-l sm:border-slate-100 sm:pl-6">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight font-mono tracking-tight">
                    {activeCase.id === "arcticwolf" ? "6 Months" : "<12mo"}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {activeCase.id === "arcticwolf" ? "Time to Managed Status" : "Rising Star Grad"}
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-4 sm:border-l sm:border-slate-100 sm:pl-6">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight font-mono tracking-tight">
                    {activeCase.id === "arcticwolf" ? "2,000+" : "$300K"}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {activeCase.id === "arcticwolf" ? "PSQLs Generated" : "MDF Funding Secured"}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Lower Two-Column Section (Playbook Left + Executive Testimonial Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 Cols): The Challenge, Our Approach, The Results */}
              <div className="lg:col-span-7 space-y-6">
                {/* The Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-100 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      The Challenge
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                    {activeCase.challenge}
                  </p>
                </div>

                {/* Our Approach */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      Our Approach
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                    {activeCase.solution}
                  </p>
                </div>

                {/* The Results */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      The Results
                    </h4>
                  </div>
                  <ul className="space-y-2.5 pl-9">
                    {activeCase.id === "arcticwolf" ? (
                      <>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>2,000+ PSQLs generated through structured AWS field alignment</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>9X validated ROI across enterprise contracts and CPPO velocity</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Graduated from Unmanaged to Official AWS Managed Partner in 6 months</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>300%+ pipeline quota attainment</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Secured $300K in AWS MDF co-marketing funding</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Graduated from Rising Star to Managed Partner in under 12 months</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>9X validated ROI on cloud revenue and investor-grade proof</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Direct drawdown from enterprise pre-committed cloud budgets</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Right Column (5 Cols): Testimonial Quote Card (Matching Reference Image) */}
              <div className="lg:col-span-5">
                <div className="p-7 rounded-3xl bg-sky-50/50 border border-sky-100 space-y-4 shadow-2xs">
                  <div className="text-4xl font-black text-[#FA0F9C] leading-none select-none font-serif">
                    &ldquo;
                  </div>
                  <p className="text-sm font-medium text-slate-800 italic leading-relaxed">
                    {activeCase.id === "arcticwolf"
                      ? "The structure of the pilot program exceeded all expectations. The data-driven full funnel planning model and co-sell scoring discussion challenged us to think in ways we haven't thought of before."
                      : "Building investor-grade proof and repeatable hyperscaler co-sell velocity in under a year was made possible through SaaSNova's hands-on execution."}
                  </p>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-sky-200/50">
                    <div className="w-11 h-11 rounded-full bg-[#008BF8] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                      {activeCase.id === "arcticwolf" ? "MF" : "DM"}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 leading-tight">
                        {activeCase.id === "arcticwolf" ? "Megan Flanagan" : "Enterprise Alliances Leadership"}
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">
                        {activeCase.id === "arcticwolf" ? "VP Marketing & Global Cloud Alliances, Arctic Wolf" : "Dataminr Cloud Ecosystems"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Footer Actions (Brand Pink Button + Pure White Text) */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-bold text-xs !text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Book an Execution Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Hot-swap Switcher */}
              {nextCase && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCase(nextCase);
                    window.scrollTo({ top: 380, behavior: "smooth" });
                  }}
                  className="text-xs font-bold text-slate-600 hover:text-[#FA0F9C] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Explore {nextCase.client} Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 2: SIMPLE CLEAN CARDS ON STAGE (No Unwanted Noise, Brand Pink Pill Buttons)
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="space-y-10">
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/90 pb-5 max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-[#008BF8] bg-sky-50 border border-sky-100 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8]" />
              ATTRIBUTABLE ROI &amp; EVIDENCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Case Studies &amp; Customer Proof
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-normal leading-relaxed">
            Named, documented, attributable cloud revenue outcomes from real engagements across AWS, Azure, and Google Cloud.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>2 Verified Engagements</span>
        </div>
      </div>

      {/* ── Simple, Elegant Light Cards Grid ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {CASE_STUDIES.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-pink-200 transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-5">
              {/* Header: Client Logo & Badge */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-auto px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs">
                    <img
                      src={item.logo}
                      alt={item.client}
                      className="h-7 w-auto object-contain filter contrast-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-tight">
                      {item.client}
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-[#008BF8]">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtitle & Title */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 leading-snug">
                  {item.subtitle}
                </div>
                <h4 className="font-black text-slate-900 text-base sm:text-lg leading-snug">
                  {item.title}
                </h4>
              </div>

              {/* 3 Metric Chips */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {item.results.slice(0, 3).map((res, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center"
                  >
                    <div className="text-base sm:text-lg font-black text-slate-900 font-mono tracking-tight">
                      {res.num}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 font-bold uppercase truncate mt-0.5">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action with Signature Brand Pink Pill Button */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 font-mono">
                Attributable Evidence
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveCase(item);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold !text-white bg-[#FA0F9C] hover:bg-[#E60085] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02]"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
