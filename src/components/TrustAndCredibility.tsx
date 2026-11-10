"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TiltCard from "@/components/TiltCard";
import {
  Quote,
  CheckCircle2,
  Award,
  TrendingUp,
  ShieldCheck,
  Shield,
  Check,
  Layers,
  Network,
} from "lucide-react";

const CLIENT_LOGOS = [
  { name: "New Relic", src: "/newrelic.svg" },
  { name: "Druva", src: "/Druva_Logo_tagline_Color.svg" },
  { name: "Freshworks", src: "/freshworks-logo-png.png" },
  { name: "Postman", src: "/Postman--Streamline-Svg-Logos.svg" },
  { name: "HashiCorp", src: "/hashicorp-ar21.svg" },
  { name: "Arctic Wolf", src: "/arcticwolf.png" },
  { name: "ClickHouse", src: "/clickhouse-1.svg" },
  { name: "ZoomInfo", src: "/zoominfo.svg" },
  { name: "Safe", src: "/safe.svg" },
  { name: "Denodo", src: "/denodo.svg" },
  { name: "Jamf", src: "/jamf.png" },
];

interface BrandStory {
  id: string;
  company: string;
  shortName: string;
  name: string;
  role: string;
  initials: string;
  statNumber: string;
  statLabel: string;
  quote: string;
  verifiedBadge: string;
  ecosystem: string;
  logoSrc?: string;
  customLogoType?: "guarddog" | "nexla" | "workspan" | "postman";
  glowColor: string;
  pingColor: string;
  statColor: string;
}

const ALL_STORIES: BrandStory[] = [
  {
    id: "guarddog",
    company: "GuardDog.ai",
    shortName: "GuardDog",
    name: "Kelly Ryan",
    role: "Chief Commercial Officer",
    initials: "KR",
    statNumber: "7 Days",
    statLabel: "SOW to Live AWS Listing",
    quote:
      "SaaSNova helped us launch our first SaaS listing on AWS Marketplace in just one week, after nearly two years of trying to navigate the process on our own. Their hands-on operator guidance made an otherwise complex transition feel simple.",
    verifiedBadge: "Verified AWS Marketplace Launch",
    ecosystem: "AWS Marketplace",
    customLogoType: "guarddog",
    glowColor: "from-sky-400/30 to-indigo-500/20",
    pingColor: "bg-sky-400/25",
    statColor: "text-sky-600",
  },
  {
    id: "arcticwolf",
    company: "Arctic Wolf",
    shortName: "Arctic Wolf",
    name: "Megan Flanagan & Odin Olson",
    role: "VP Marketing & Partnerships",
    initials: "AW",
    statNumber: "9X ROI",
    statLabel: "Attributable Cloud Yield",
    quote:
      "The structure of the pilot program exceeded all expectations. The data-driven full funnel planning model and co-sell scoring discussion challenged us to think in ways we haven't thought of before.",
    verifiedBadge: "Verified Field Co-Sell Traction",
    ecosystem: "AWS & Azure Co-Sell",
    logoSrc: "/arcticwolf.png",
    glowColor: "from-emerald-400/30 to-teal-500/20",
    pingColor: "bg-emerald-400/25",
    statColor: "text-emerald-600",
  },
  {
    id: "pharmacoevidence",
    company: "Pharmacoevidence",
    shortName: "Pharmacoevidence",
    name: "Rajdeep Kaur",
    role: "Associate Director & Lead, AI Sciences",
    initials: "RK",
    statNumber: "Weeks",
    statLabel: "To AWS GenAI Competency",
    quote:
      "SaaSNova brought a level of clarity and execution we had never experienced before. Jen helped us navigate AWS Marketplace listings, modernize our architecture, and build a precise path toward the AWS GenAI Competency in just a few weeks.",
    verifiedBadge: "Verified AWS GenAI Competency",
    ecosystem: "AWS GenAI Competency",
    logoSrc: "/pharmocoevidence-logo.png",
    glowColor: "from-purple-400/30 to-pink-500/20",
    pingColor: "bg-purple-400/25",
    statColor: "text-purple-600",
  },
  {
    id: "safe",
    company: "SAFE Security",
    shortName: "SAFE Security",
    name: "Nicola Sanna",
    role: "President",
    initials: "NS",
    statNumber: "< 4 Wks",
    statLabel: "Enterprise TPRM Launch",
    quote:
      "SaaSNova was instrumental in accelerating SAFE's AWS Marketplace strategy. They helped us compress months of internal effort into weeks, sharpen our enterprise positioning, and launch TPRM with a procurement-ready workflow.",
    verifiedBadge: "Verified Enterprise TPRM Launch",
    ecosystem: "AWS Marketplace & ACE",
    logoSrc: "/safe.svg",
    glowColor: "from-blue-400/30 to-cyan-500/20",
    pingColor: "bg-blue-400/25",
    statColor: "text-blue-600",
  },
  {
    id: "freshworks",
    company: "Freshworks",
    shortName: "Freshworks",
    name: "Abhishek GP",
    role: "VP Growth Atlan (ex-Head of Growth Freshworks)",
    initials: "AG",
    statNumber: "3-Year",
    statLabel: "Strategic AWS Deal",
    quote:
      "Jen built the alignment and relationships needed to secure a three-year strategic collaboration with AWS and set the foundation for a scalable co-sell motion. She consistently turns challenges into opportunities.",
    verifiedBadge: "Verified Strategic AWS Deal",
    ecosystem: "AWS Strategic Collaboration",
    logoSrc: "/freshworks-logo-png.png",
    glowColor: "from-rose-400/30 to-pink-500/20",
    pingColor: "bg-rose-400/25",
    statColor: "text-rose-600",
  },
  {
    id: "nexla",
    company: "Nexla",
    shortName: "Nexla",
    name: "Jayashree Rajan",
    role: "Chief Marketing Officer",
    initials: "JR",
    statNumber: "100%",
    statLabel: "Unblocked ACE Deals",
    quote:
      "SaaSNova didn't just clarify our AWS GTM motion, they exposed issues we didn't even know were blocking us. Their operator-level mastery of Marketplace, ACE, co-sell, and partner programs is unmatched.",
    verifiedBadge: "Verified AWS Co-Sell Pipeline",
    ecosystem: "AWS ACE & Co-Sell",
    customLogoType: "nexla",
    glowColor: "from-amber-400/30 to-orange-500/20",
    pingColor: "bg-amber-400/25",
    statColor: "text-amber-600",
  },
  {
    id: "workspan",
    company: "WorkSpan",
    shortName: "WorkSpan",
    name: "Amit Sinha",
    role: "President",
    initials: "AS",
    statNumber: "Proven",
    statLabel: "Alliance Operations Discipline",
    quote:
      "Across Freshworks, Postman, and Workspan, Jen brought a level of clarity, structure, and execution discipline that consistently moved our AWS partner motions forward. Her impact is immediate and repeatable.",
    verifiedBadge: "Verified Alliance Operations",
    ecosystem: "Multi-Cloud Alliances",
    customLogoType: "workspan",
    glowColor: "from-indigo-400/30 to-violet-500/20",
    pingColor: "bg-indigo-400/25",
    statColor: "text-indigo-600",
  },
  {
    id: "aws",
    company: "AWS Ecosystem",
    shortName: "AWS Field",
    name: "Gunjan Ramketa & John McElhone",
    role: "Partner Development Managers, AWS",
    initials: "APN",
    statNumber: "Field-Ready",
    statLabel: "Hyperscaler Seller Confidence",
    quote:
      "Jen's GTM architecture fundamentally changed how partners engage with AWS. The structure, clarity, and seller confidence she brings creates a level of field alignment we rarely see with ISVs.",
    verifiedBadge: "Verified AWS Field Alignment",
    ecosystem: "AWS Partner Network",
    logoSrc: "/aws-logo.png",
    glowColor: "from-amber-400/30 to-yellow-500/20",
    pingColor: "bg-amber-400/25",
    statColor: "text-amber-600",
  },
  {
    id: "postman",
    company: "Postman",
    shortName: "Postman",
    name: "Enterprise Alliance Team",
    role: "Global Partner Operations",
    initials: "PM",
    statNumber: "Standardized",
    statLabel: "Private Offer Velocity",
    quote:
      "With SaaSNova, Postman aligned internal seller incentives with AWS field account teams, standardizing private offers and accelerating enterprise deal turnaround across the marketplace.",
    verifiedBadge: "Verified Cloud Marketplace Co-Sell",
    ecosystem: "AWS Marketplace & Co-Sell",
    customLogoType: "postman",
    glowColor: "from-orange-400/30 to-red-500/20",
    pingColor: "bg-orange-400/25",
    statColor: "text-orange-600",
  },
  {
    id: "druva",
    company: "Druva",
    shortName: "Druva",
    name: "Cloud GTM Leadership",
    role: "Hyperscaler Alliances",
    initials: "DV",
    statNumber: "Active",
    statLabel: "Enterprise Co-Sell Pipeline",
    quote:
      "SaaSNova brought operational clarity across hyperscaler listings, transforming passive marketplace presence into an active, high-velocity pipeline channel for enterprise cloud backup.",
    verifiedBadge: "Verified Cloud Co-Sell Revenue",
    ecosystem: "AWS & Azure Data Protection",
    logoSrc: "/Druva_Logo_tagline_Color.svg",
    glowColor: "from-teal-400/30 to-cyan-500/20",
    pingColor: "bg-teal-400/25",
    statColor: "text-teal-600",
  },
  {
    id: "clickhouse",
    company: "ClickHouse",
    shortName: "ClickHouse",
    name: "Cloud GTM Operations",
    role: "Strategic Cloud Alliances",
    initials: "CH",
    statNumber: "Direct",
    statLabel: "Marketplace Contract Velocity",
    quote:
      "SaaSNova's deep operator insights on hyperscaler procurement allowed our teams to structure complex enterprise contracts directly through cloud marketplaces with streamlined contracting.",
    verifiedBadge: "Verified Marketplace Contracting",
    ecosystem: "AWS & GCP Marketplace",
    logoSrc: "/clickhouse-1.svg",
    glowColor: "from-yellow-400/30 to-amber-500/20",
    pingColor: "bg-yellow-400/25",
    statColor: "text-amber-600",
  },
];

// 4 duplicate sets to guarantee seamless infinite wrap-around across any screen size
const REPEATED_LOGOS = [
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
];

export default function TrustAndCredibility() {
  // Infinite Carousel Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const isHoveredRef = useRef(false);

  // Interactive Testimonial State
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeStory = ALL_STORIES[currentIndex];

  // Infinite Marquee animation with Gaussian center magnification (full unclipped circles)
  useEffect(() => {
    let animationFrameId: number;
    const ITEM_WIDTH = 170;
    const LOOP_WIDTH = CLIENT_LOGOS.length * ITEM_WIDTH;
    const BASE_SPEED = 0.8;

    const updateMarquee = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const center = containerWidth / 2;
      const sigma = containerWidth * 0.22;

      if (!isHoveredRef.current) {
        offsetRef.current += BASE_SPEED;
        if (offsetRef.current >= LOOP_WIDTH) {
          offsetRef.current -= LOOP_WIDTH;
        }
      }

      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        const x = index * ITEM_WIDTH - offsetRef.current;
        const itemCenter = x + ITEM_WIDTH / 2;
        const distFromCenter = Math.abs(itemCenter - center);

        const g = Math.exp(-Math.pow(distFromCenter / sigma, 2));
        const scale = 0.95 + g * 0.05;
        const opacity = 0.75 + g * 0.25;

        el.style.transform = `translate3d(${x}px, -50%, 0) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = Math.round(g * 20).toString();
      });

      animationFrameId = requestAnimationFrame(updateMarquee);
    };

    animationFrameId = requestAnimationFrame(updateMarquee);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Smooth auto-advancing testimonial rotation every 7 seconds
  useEffect(() => {
    const INTERVAL_DURATION = 7000;
    const timer = setInterval(() => {
      setCurrentIndex((curr) => (curr + 1) % ALL_STORIES.length);
    }, INTERVAL_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card-3d-master-dark relative max-w-7xl mx-auto w-full p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] select-none">
      {/* ── INTERIOR DARK BLUE CONTRAST CARD ── */}
      <div className="relative bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] px-4 pt-8 pb-12 sm:px-7 sm:pt-9 sm:pb-14 lg:px-9 lg:pt-9 lg:pb-14 overflow-hidden space-y-4 sm:space-y-5 text-center text-white backdrop-blur-2xl">
        {/* Dynamic Prismatic Top Highlight Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 via-pink-400/80 to-transparent" />

        {/* Ambient Glow Orbs inside Dark Card */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#008BF8]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FA0F9C]/18 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-60 rounded-full bg-[#7C3AED]/12 blur-[120px]" />

        {/* ── TIER 1: AUTHORITY HEADLINE & 3 KEY METRICS ── */}
        <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PROVEN TRACK RECORD</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-white leading-tight">
            Trusted by 100+ SaaS ISVs Scaling with Hyperscalers
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Former AWS &amp; hyperscaler leaders driving tangible co-sell revenue and accelerated marketplace listings.
          </p>

          {/* 3 Bold, Punchy Inline Trust Metrics with 3D Extruded Depth */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
            <div className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-slate-800/95 to-slate-900 border border-white/15 px-4 py-2 shadow-[0_3px_0_#020617,0_8px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm hover:-translate-y-0.5 transition-transform">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-display font-black text-white text-sm sm:text-base font-mono">100+</span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">ISVs Activated</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-slate-800/95 to-slate-900 border border-white/15 px-4 py-2 shadow-[0_3px_0_#020617,0_8px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm hover:-translate-y-0.5 transition-transform">
              <Award className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="font-display font-black text-white text-sm sm:text-base font-mono">25+ Years</span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">Cloud GTM</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-slate-800/95 to-slate-900 border border-white/15 px-4 py-2 shadow-[0_3px_0_#020617,0_8px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm hover:-translate-y-0.5 transition-transform">
              <TrendingUp className="h-4 w-4 text-[#FA0F9C] shrink-0" />
              <span className="font-display font-black text-white text-sm sm:text-base font-mono">$100M+</span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">Co-Sell Pipeline</span>
            </div>
          </div>
        </div>

        {/* ── TIER 2: CONTINUOUS LOGO SCROLL INSIDE A RECESSED 3D TRACK ── */}
        <div className="max-w-5xl mx-auto px-2 relative z-10 pt-4 pb-2">
          <div
            className="well-recessed-dark relative rounded-2xl h-18 sm:h-20 flex items-center px-6 overflow-hidden backdrop-blur-md"
            onMouseEnter={() => {
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
            }}
          >
            {/* Left Edge Vignette Blur */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#040814] via-[#040814]/90 to-transparent z-20" />
            
            {/* Right Edge Vignette Blur */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#040814] via-[#040814]/90 to-transparent z-20" />

            {/* Scrolling Stage inside Large Pill */}
            <div
              ref={containerRef}
              className="relative w-full h-14 sm:h-16 overflow-hidden select-none"
            >
              {REPEATED_LOGOS.map((client, idx) => (
                <div
                  key={`logo-${client.name}-${idx}`}
                  ref={(el) => {
                    itemsRef.current[idx] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: 170,
                    willChange: "transform, filter, opacity",
                  }}
                  className="flex items-center justify-center"
                >
                  {/* Crisp 3D extruded tile */}
                  <div className="flex items-center justify-center w-32 h-11 rounded-xl bg-gradient-to-b from-white to-slate-100 border border-slate-200/90 shadow-[0_1px_0_#cbd5e1,0_2px_0_#94a3b8,0_3px_0_#64748b,0_8px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,1)] px-3 py-1.5 transition-all">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={100}
                      height={28}
                      className="max-h-6 max-w-[90%] w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TIER 3: EXECUTIVE BENTO STAGE (CLEAN & VIEWPORT-PROPORTIONED) ── */}
        <div className="max-w-5xl mx-auto w-full relative z-10 pt-2">
          {/* Story Selector 3D Push Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {ALL_STORIES.map((story, idx) => (
              <button
                key={story.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "bg-gradient-to-b from-white to-slate-200 text-slate-950 border border-white/80 shadow-[0_3px_0_#94a3b8,0_6px_18px_rgba(255,255,255,0.22),inset_0_1px_0_#ffffff] font-bold -translate-y-0.5"
                    : "bg-slate-800/80 text-slate-300 border border-white/15 shadow-[0_2px_0_#020617,inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-slate-800 hover:-translate-y-0.5"
                }`}
              >
                {story.shortName}
              </button>
            ))}
          </div>

          {/* ── 3D EXTRUDED & TILTING BENTO CARD ── */}
          <TiltCard variant="dark" intensity={6} className="rounded-3xl overflow-hidden text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch text-left">
              
              {/* Left Chamber: Brand Pod & Stat Callout */}
              <div className="md:col-span-5 lg:col-span-4 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90 p-6 sm:p-7 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Brand Content */}
                <div className="relative z-10 flex flex-col items-center w-full space-y-3.5">
                  
                  {/* Brand Logo Presentation */}
                  <div className="h-11 sm:h-12 flex items-center justify-center">
                    {activeStory.customLogoType === "postman" ? (
                      <div className="flex items-center gap-2">
                        <Image
                          src="/Postman--Streamline-Svg-Logos.svg"
                          alt="Postman"
                          width={32}
                          height={32}
                          className="h-7 w-7 object-contain"
                        />
                        <span className="font-display font-black text-white text-lg tracking-tight">
                          POSTMAN
                        </span>
                      </div>
                    ) : activeStory.logoSrc ? (
                      <div className="bg-white/95 px-3.5 py-1.5 rounded-xl border border-white/20 shadow-2xs">
                        <Image
                          src={activeStory.logoSrc}
                          alt={activeStory.company}
                          width={130}
                          height={36}
                          className="max-h-7 sm:max-h-8 w-auto object-contain"
                        />
                      </div>
                    ) : activeStory.customLogoType === "guarddog" ? (
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#008BF8] to-[#7C3AED] text-white shadow-xs">
                          <Shield className="h-4 w-4" />
                        </div>
                        <span className="font-display font-black text-white text-lg tracking-tight">
                          guard<span className="text-[#38BDF8]">dog</span>.ai
                        </span>
                      </div>
                    ) : activeStory.customLogoType === "nexla" ? (
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-xs">
                          <Network className="h-4 w-4" />
                        </div>
                        <span className="font-display font-black text-white text-lg tracking-tight">
                          nex<span className="text-amber-400">la</span>
                        </span>
                      </div>
                    ) : activeStory.customLogoType === "workspan" ? (
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-xs">
                          <Layers className="h-4 w-4" />
                        </div>
                        <span className="font-display font-black text-white text-lg tracking-tight">
                          Work<span className="text-indigo-400">Span</span>
                        </span>
                      </div>
                    ) : (
                      <span className="font-display font-black text-white text-lg">
                        {activeStory.company}
                      </span>
                    )}
                  </div>

                  {/* Hero Stat Callout */}
                  <div className="space-y-0.5">
                    <div className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
                      {activeStory.statNumber}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                      {activeStory.statLabel}
                    </div>
                  </div>

                  {/* Ecosystem Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-slate-200 shadow-2xs">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                    {activeStory.ecosystem}
                  </span>

                </div>
              </div>

              {/* Right Chamber: Full Editorial Quote with Readable Typography */}
              <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 mb-3">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    {activeStory.verifiedBadge}
                  </div>

                  {/* Pull Quote */}
                  <p className="text-base sm:text-[17px] text-slate-200 leading-relaxed font-normal mb-3">
                    &ldquo;{activeStory.quote}&rdquo;
                  </p>

                </div>

                {/* Author Attribution Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs border border-white/10">
                      {activeStory.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base leading-snug">
                        {activeStory.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        {activeStory.role},{" "}
                        <strong className="text-white font-semibold">{activeStory.company}</strong>
                      </div>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Operator Verified
                  </span>
                </div>

              </div>

            </div>
          </TiltCard>

        </div>
      </div>
    </div>
  );
}
