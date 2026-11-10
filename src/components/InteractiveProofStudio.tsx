"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Sparkles, Building2, CheckCircle2, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  tag: string;
  quote: string;
  metric?: string;
  avatarInitials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "nexla",
    company: "Nexla",
    name: "Jayashree Rajan",
    role: "Chief Marketing Officer",
    tag: "AWS Marketplace & ACE",
    avatarInitials: "JR",
    quote:
      "SaaSNova didn't just clarify our AWS GTM motion, they exposed issues we didn't even know were blocking us. Their operator-level mastery of Marketplace, ACE, co-sell, and partner programs is unmatched.",
    metric: "Unblocked ACE & Co-Sell Deals",
  },
  {
    id: "guarddog",
    company: "GuardDog",
    name: "Kelly Ryan",
    role: "Chief Commercial Officer",
    tag: "1-Week Listing Acceleration",
    avatarInitials: "KR",
    quote:
      "SaaSNova helped us launch our first SaaS listing on AWS Marketplace in just one week, after nearly two years of trying to navigate the process on our own. Their expertise, clarity, and hands-on guidance made an otherwise complex transition feel simple.",
    metric: "1 Week vs 2 Years on AWS",
  },
  {
    id: "pharmacoevidence",
    company: "Pharmacoevidence",
    name: "Rajdeep Kaur",
    role: "Associate Director & Lead, AI Sciences",
    tag: "AWS GenAI Competency",
    avatarInitials: "RK",
    quote:
      "SaaSNova brought a level of clarity and execution we had never experienced before. Jen helped us navigate AWS Marketplace listings, modernize our architecture, and build a precise path toward the AWS GenAI Competency in just a few weeks.",
    metric: "Weeks to GenAI Competency",
  },
  {
    id: "arcticwolf",
    company: "Arctic Wolf",
    name: "Megan Flanagan & Odin Olson",
    role: "VP Marketing & VP Partnerships",
    tag: "9X Co-Sell ROI",
    avatarInitials: "AW",
    quote:
      "The structure of the pilot program exceeded all expectations. The data-driven full funnel planning model and co-sell scoring discussion challenged us to think in ways we haven't thought of before.",
    metric: "9X Attributable Cloud ROI",
  },
  {
    id: "workspan",
    company: "WorkSpan",
    name: "Amit Sinha",
    role: "President, WorkSpan",
    tag: "Alliance Operations",
    avatarInitials: "AS",
    quote:
      "Across Freshworks, Postman, and Workspan, Jen brought a level of clarity, structure, and execution discipline that consistently moved our AWS partner motions forward. Her impact is immediate and repeatable.",
    metric: "Immediate Repeatable Execution",
  },
  {
    id: "safe",
    company: "SAFE Security",
    name: "Nicola Sanna",
    role: "President, SAFE Security",
    tag: "Enterprise Marketplace GTM",
    avatarInitials: "NS",
    quote:
      "SaaSNova was instrumental in accelerating SAFE's AWS Marketplace strategy. They helped us compress months of internal effort into weeks, sharpen our enterprise positioning, and launch TPRM with a procurement-ready workflow.",
    metric: "Months Compressed to Weeks",
  },
  {
    id: "freshworks",
    company: "Freshworks",
    name: "Abhishek GP",
    role: "VP Growth Atlan (ex-Head of Growth Freshworks)",
    tag: "Strategic Hyperscaler Deal",
    avatarInitials: "AG",
    quote:
      "Jen built the alignment and relationships needed to secure a three-year strategic collaboration with AWS and set the foundation for a scalable co-sell motion. She consistently turns challenges into opportunities.",
    metric: "3-Year Strategic AWS Deal",
  },
  {
    id: "aws",
    company: "AWS Ecosystem",
    name: "Gunjan Ramketa & John McElhone",
    role: "Partner Development Managers, AWS",
    tag: "Field Alignment",
    avatarInitials: "APN",
    quote:
      "Jen's GTM architecture fundamentally changed how partners engage with AWS. The structure, clarity, and seller confidence she brings creates a level of field alignment we rarely see with ISVs.",
    metric: "Hyperscaler Field Confidence",
  },
];

export default function InteractiveProofStudio() {
  const [selectedId, setSelectedId] = useState(TESTIMONIALS[0].id);
  const active = TESTIMONIALS.find((t) => t.id === selectedId) || TESTIMONIALS[0];

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-lg shadow-slate-900/5">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-pink-600 block mb-1">
            Operator-Led Evidence Matrix
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            What ISV Leaders &amp; Field Teams Say
          </h3>
        </div>

        <div className="text-xs font-semibold text-slate-500">
          Select a partner to inspect their verified outcome:
        </div>
      </div>

      {/* Modern 2-Column Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive Pill Grid (Company Selectors) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {TESTIMONIALS.map((t) => {
            const isCurrent = t.id === selectedId;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedId(t.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                  isCurrent
                    ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20 translate-x-1"
                    : "bg-slate-50/80 hover:bg-slate-100 border-slate-200/80 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs font-mono transition ${
                      isCurrent
                        ? "bg-gradient-to-tr from-pink-500 to-sky-400 text-white"
                        : "bg-white border border-slate-200 text-slate-700 group-hover:border-slate-300"
                    }`}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div className="font-bold text-sm tracking-tight leading-snug">
                      {t.company}
                    </div>
                    <div
                      className={`text-[11px] font-medium leading-none mt-0.5 ${
                        isCurrent ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {t.name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      isCurrent
                        ? "bg-white/10 text-sky-300"
                        : "bg-white text-slate-600 border border-slate-200/60"
                    }`}
                  >
                    {t.tag}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition ${
                      isCurrent ? "text-pink-400 translate-x-0.5" : "text-slate-300 group-hover:text-slate-500"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Executive Showcase Card */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative flex-1 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-xl bg-gradient-to-br from-[#0A1224] via-[#0E1A36] to-[#1E0E38] text-white border border-white/10">
            
            {/* Luminous Glow Orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-500/20 via-sky-500/15 to-transparent blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sky-500/15 via-purple-500/15 to-transparent blur-[70px] pointer-events-none" />

            <div className="relative z-10">
              {/* Badge & Impact Metric */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  {active.tag}
                </span>

                {active.metric && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
                    ✓ {active.metric}
                  </span>
                )}
              </div>

              {/* Giant Stylized Quote Icon */}
              <Quote className="w-10 h-10 text-pink-400/40 mb-4" />

              {/* The Dynamic Quote Text */}
              <blockquote className="text-lg sm:text-xl font-normal leading-relaxed text-slate-100 mb-8 italic tracking-tight">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Footer */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-sky-500 to-indigo-500 p-[1.5px] shadow-lg">
                  <div className="w-full h-full rounded-[14px] bg-[#0A1224] flex items-center justify-center font-bold text-sm text-white">
                    {active.avatarInitials}
                  </div>
                </div>
                <div>
                  <div className="font-display text-base font-extrabold text-white">
                    {active.name}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {active.role} · <strong className="text-white">{active.company}</strong>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Operator ROI
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
