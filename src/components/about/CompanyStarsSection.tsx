"use client";

import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface CompanyStar {
  id: string;
  name: string;
  role: string;
  bottomLine1: string;
  bottomLine2: string;
  region: string;
  shortTag: string;
  bio: string;
  initials: string;
  badgeColor: "sky" | "pink";
  image?: string;
}

const COMPANY_STARS: CompanyStar[] = [
  {
    id: "silas",
    name: "Silas",
    role: "CHIEF GROWTH OFFICER",
    bottomLine1: "GROWTH",
    bottomLine2: "LEAD",
    region: "Global Growth",
    shortTag: "GROWTH",
    initials: "S",
    badgeColor: "pink",
    bio: "Designs and runs co-sell and marketplace pipeline systems. Converts listings into qualified pipeline and revenue.",
  },
  {
    id: "jocelyn",
    name: "Jocelyn",
    role: "BUSINESS DEVELOPMENT MANAGER",
    bottomLine1: "BDM",
    bottomLine2: "LEAD",
    region: "Field Alliances",
    shortTag: "ALLIANCES",
    initials: "J",
    badgeColor: "sky",
    bio: "Activates ISVs hyperscaler field relationships. Drives partner engagement and meeting flow into pipeline.",
  },
  {
    id: "ram",
    name: "Ram",
    role: "GLOBAL PARTNER DEVELOPMENT MANAGER",
    bottomLine1: "GLOBAL",
    bottomLine2: "PDM",
    region: "Global PDM",
    shortTag: "GLOBAL",
    initials: "R",
    badgeColor: "pink",
    bio: "Leads global hyperscaler partner motions to accelerate co-sell pipeline, Marketplace adoption, and ISV revenue growth.",
  },
  {
    id: "gino",
    name: "Gino",
    role: "PARTNER PIPELINE EXECUTIVE (US)",
    bottomLine1: "PIPELINE",
    bottomLine2: "LEAD",
    region: "United States",
    shortTag: "US",
    initials: "G",
    badgeColor: "sky",
    bio: "Leads US partner pipeline, sourcing, qualifying, and closing ISV clients into our Marketplace GTM and resourcing services.",
  },
  {
    id: "avadhoot",
    name: "Avadhoot",
    role: "PARTNER PIPELINE EXECUTIVE (INDIA & SEA)",
    bottomLine1: "PIPELINE",
    bottomLine2: "LEAD",
    region: "India & South East Asia",
    shortTag: "INDIA & SEA",
    initials: "A",
    badgeColor: "pink",
    bio: "Leads India and South East Asia partner pipeline, sourcing, qualifying, and closing ISV clients into our Marketplace GTM and resourcing services.",
  },
  {
    id: "colleen",
    name: "Colleen",
    role: "PARTNER PIPELINE EXECUTIVE (LATAM)",
    bottomLine1: "PIPELINE",
    bottomLine2: "LEAD",
    region: "LATAM",
    shortTag: "LATAM",
    initials: "C",
    badgeColor: "sky",
    bio: "Leads LATAM partner pipeline, sourcing, qualifying, and closing ISV clients into our Marketplace GTM and resourcing services.",
  },
  {
    id: "megha",
    name: "Megha",
    role: "PARTNER PIPELINE EXECUTIVE (MEA REGION)",
    bottomLine1: "PIPELINE",
    bottomLine2: "LEAD",
    region: "MEA Region",
    shortTag: "MEA",
    initials: "M",
    badgeColor: "pink",
    bio: "Leads MEA Region partner pipeline, sourcing, qualifying, and closing ISV clients into our Marketplace GTM and resourcing services.",
  },
  {
    id: "jeni",
    name: "Jeni",
    role: "CLOUD MARKETPLACE OPERATIONS",
    bottomLine1: "MARKET",
    bottomLine2: "OPS",
    region: "Operations",
    shortTag: "OPS",
    initials: "J",
    badgeColor: "sky",
    bio: "Owns listing execution, submissions, and field coordination. Ensures marketplace readiness and operational throughput.",
  },
  {
    id: "krishna",
    name: "Krishna",
    role: "DIGITAL MARKETING MANAGER",
    bottomLine1: "DIGITAL",
    bottomLine2: "MKTG",
    region: "Demand & Content",
    shortTag: "MARKETING",
    initials: "K",
    badgeColor: "pink",
    bio: "Builds positioning and demand systems for marketplace GTM. Converts technical capability into pipeline-driving narratives.",
  },
  {
    id: "rohith",
    name: "Rohith",
    role: "VIDEO EDITOR & VIDEOGRAPHER",
    bottomLine1: "FIELD",
    bottomLine2: "MEDIA",
    region: "Field Media",
    shortTag: "MEDIA",
    initials: "R",
    badgeColor: "sky",
    bio: "Captures and produces GTM content from field activity. Converts execution into visual proof and distribution assets.",
  },
];

const BADGE_STYLE_LIGHT = {
  sky: "bg-sky-50 text-[#008BF8] border-sky-200/90 shadow-[0_1px_2px_rgba(0,139,248,0.08)]",
  pink: "bg-sky-50 text-[#008BF8] border-sky-200/90 shadow-[0_1px_2px_rgba(0,139,248,0.08)]",
} as const;

export default function CompanyStarsSection() {
  // Default to rohith open as in the original layout
  const [activeId, setActiveId] = useState<string>("rohith");
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setActiveId(id);
    }, 75);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  };

  const handleClick = (id: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setActiveId(id);
  };

  return (
    <section
      id="stars"
      data-nav-title="Our Team"
      data-nav-subtitle="Operating Bench"
      className="relative px-4 sm:px-6 lg:px-8 py-20 bg-transparent border-b border-slate-200/60 scroll-mt-24 select-none overflow-hidden"
    >
      {/* ── Soft Ambient Glows (Crisp SaaSNova Brand Blue) ── */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[540px] h-[540px] rounded-full bg-[#008BF8]/8 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[540px] h-[540px] rounded-full bg-sky-400/8 blur-[140px]" />

      <ScrollReveal once={true} variant="up" className="mx-auto max-w-7xl w-full relative z-10 space-y-10">

        {/* ── Section Header (Solid Typography, No Gradient) ── */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.14]">
            Meet the Team
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            No advisors. No theorists. Practitioners with deep hyperscaler roots, executing the GTM motions that drive attributable cloud revenue.
          </p>
        </div>

        {/* ── Master 3D Platform with Blue Accent Outer Card Border ── */}
        <div className="p-[1.5px] rounded-[2.25rem] sm:rounded-[2.5rem] bg-gradient-to-r from-[#008BF8] via-sky-400 to-[#008BF8] shadow-[0_24px_70px_rgba(0,139,248,0.18),0_4px_0_#cbd5e1]">
          <div className="relative rounded-[calc(2.25rem-1.5px)] sm:rounded-[calc(2.5rem-1.5px)] bg-gradient-to-b from-[#EDF5FE] via-[#E4F0FD] to-[#EDF5FE] p-4 sm:p-6 lg:p-7 overflow-hidden border-t-2 border-white/80">

            {/* Specular top rim light */}
            <div className="pointer-events-none absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Recessed Interior Bed for Cards */}
            <div className="rounded-[1.75rem] bg-slate-50 p-3 sm:p-4 shadow-[inset_0_2px_6px_rgba(15,23,42,0.04)] border border-slate-200/70">

              {/* ── Desktop: Single Row of 10 Smooth 3D Vertical Cards (Zero Jitter, Zero Text Jump) ── */}
              <div
                data-stars-desktop-container
                onMouseLeave={handleMouseLeave}
                className="hidden lg:flex gap-2 sm:gap-2.5 h-[390px] xl:h-[410px] w-full items-stretch"
              >
                {COMPANY_STARS.map((star) => {
                  const isActive = star.id === activeId;

                  const cardBg = isActive
                    ? "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 45%, rgba(0, 139, 248, 0.12) 100%)"
                    : "#FFFFFF";

                  return (
                    <div
                      key={star.id}
                      data-star-desktop-id={star.id}
                      onMouseEnter={() => handleMouseEnter(star.id)}
                      onClick={() => handleClick(star.id)}
                      style={{
                        flex: isActive ? "5.5" : "1",
                        background: cardBg,
                        transition: "flex 420ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease-out, border-color 300ms ease-out, background 300ms ease-out",
                      }}
                      className={`relative rounded-2xl border cursor-pointer select-none overflow-hidden ${isActive
                        ? "border-[#008BF8] shadow-[0_16px_36px_rgba(0,139,248,0.14),0_2px_0_#93c5fd] p-5 sm:p-6"
                        : "border-slate-200/90 shadow-[0_2px_4px_rgba(15,23,42,0.03)] hover:border-[#008BF8]/50 p-2 sm:p-2.5 hover:shadow-xs"
                        }`}
                    >
                      {/* Top specular reflection rim */}
                      <div className="pointer-events-none absolute top-0 inset-x-3 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />

                      {/* ── EXPANDED STATE (Generous width ensures role & region pills are 100% visible) ── */}
                      <div
                        className={`star-open-view h-full w-full flex-col justify-between overflow-hidden transition-opacity duration-300 ${isActive ? "flex opacity-100" : "hidden opacity-0 pointer-events-none"
                          }`}
                      >
                        <div className="w-full h-full flex flex-col justify-between">
                          {/* Top Row: Circular Monogram (Same Blue Around Circle) + Region Badge */}
                          <div className="flex items-start justify-between gap-3">
                            <div
                              className="w-16 h-16 rounded-full p-[2px] shrink-0 shadow-md bg-gradient-to-tr from-[#008BF8] via-sky-400 to-[#008BF8]"
                            >
                              <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-display font-black text-2xl shadow-inner">
                                {star.image ? (
                                  <img
                                    src={star.image}
                                    alt={star.name}
                                    className="w-full h-full object-cover rounded-full"
                                  />
                                ) : (
                                  <span className="text-[#008BF8]">
                                    {star.initials}
                                  </span>
                                )}
                              </div>
                            </div>

                            <span
                              className={`text-[9.5px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border shrink-0 whitespace-nowrap ${BADGE_STYLE_LIGHT[star.badgeColor]
                                }`}
                            >
                              {star.region}
                            </span>
                          </div>

                          {/* Middle Content: Role, Name, Bio */}
                          <div className="space-y-2 pt-2">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border whitespace-nowrap ${BADGE_STYLE_LIGHT[star.badgeColor]
                                }`}
                            >
                              {star.role}
                            </span>

                            <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                              {star.name}
                            </h3>

                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                              {star.bio}
                            </p>
                          </div>

                          <div className="h-1" />
                        </div>
                      </div>

                      {/* ── COLLAPSED STATE (Vertically centered text with whitespace-nowrap — immune to jitter) ── */}
                      <div
                        className={`star-closed-view h-full w-full flex-col justify-between items-center transition-opacity duration-300 ${isActive ? "hidden opacity-0 pointer-events-none" : "flex opacity-100"
                          }`}
                      >
                        {/* Top: Circular Keycap */}
                        <div className="w-7 h-7 rounded-full bg-gradient-to-b from-white to-slate-100 flex items-center justify-center font-display font-black text-[11px] text-slate-700 shadow-xs border border-slate-200/80 shrink-0">
                          {star.initials}
                        </div>

                        {/* Middle: Vertically Sculpted Name */}
                        <div className="flex-1 w-full flex items-center justify-center select-none overflow-hidden my-1">
                          <span
                            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                            className="text-[11.5px] font-black tracking-widest text-slate-700 uppercase rotate-180 whitespace-nowrap"
                          >
                            {star.name}
                          </span>
                        </div>

                        {/* Bottom: Exact 2-Line Role Tag (Non-wrapping, never clips) */}
                        <div className="w-full flex flex-col items-center justify-center pb-2 select-none shrink-0 leading-[1.2]">
                          <span className="text-[7.5px] sm:text-[8px] font-mono font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap block text-center">
                            {star.bottomLine1}
                          </span>
                          <span className="text-[7.5px] sm:text-[8px] font-mono font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap block text-center">
                            {star.bottomLine2}
                          </span>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* ── Mobile / Tablet Grid View (Below lg screen size) ── */}
              <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {COMPANY_STARS.map((star) => {
                  const isMobileOpen = star.id === activeId;

                  return (
                    <div
                      key={`mob-${star.id}`}
                      data-star-mobile-id={star.id}
                      onClick={() => setActiveId(isMobileOpen ? "" : star.id)}
                      className={`card-3d rounded-xl bg-white p-4 border border-slate-200/80 shadow-2xs transition-all duration-300 cursor-pointer ${isMobileOpen ? "border-[#008BF8] shadow-md ring-1 ring-[#008BF8]/20" : ""
                        }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full p-[1.5px] shrink-0 bg-gradient-to-tr from-[#008BF8] via-sky-400 to-[#008BF8]"
                          >
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-display font-black text-sm text-[#008BF8]">
                              {star.initials}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{star.name}</h4>
                            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase">{star.role}</p>
                          </div>
                        </div>

                        <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${BADGE_STYLE_LIGHT[star.badgeColor]}`}>
                          {star.shortTag}
                        </span>
                      </div>

                      {isMobileOpen && (
                        <p className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-normal">
                          {star.bio}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </ScrollReveal>
    </section>
  );
}
