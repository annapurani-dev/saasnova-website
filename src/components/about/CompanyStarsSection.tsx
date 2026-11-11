"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface CompanyStar {
  id: string;
  name: string;
  role: string;
  region: string;
  shortTag: string;
  bio: string;
  initials: string;
  badgeColor: "sky" | "pink" | "slate";
}

const COMPANY_STARS: CompanyStar[] = [
  {
    id: "silas",
    name: "Silas",
    role: "CHIEF GROWTH OFFICER",
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
    region: "Field Media",
    shortTag: "MEDIA",
    initials: "R",
    badgeColor: "slate",
    bio: "Captures and produces GTM content from field activity. Converts execution into visual proof and distribution assets.",
  },
];

const BADGE_STYLE_DARK = {
  sky: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  pink: "bg-pink-500/15 text-pink-300 border-pink-400/30",
  slate: "bg-white/10 text-slate-200 border-white/20",
} as const;

const TOTAL = COMPANY_STARS.length;

function getSignedCircularOffset(index: number, centerPos: number): number {
  const half = TOTAL / 2;
  return ((((index - centerPos) % TOTAL) + TOTAL + half) % TOTAL) - half;
}

function getFisheyeMetrics(diff: number, spreadPx: number) {
  const absDiff = Math.abs(diff);
  const sign = diff === 0 ? 0 : diff > 0 ? 1 : -1;

  const x =
    sign * (absDiff * spreadPx + (1 - Math.exp(-absDiff * 1.35)) * (spreadPx * 0.16));
  const y = Math.min(30, absDiff * absDiff * 4.4);
  const scale = 0.52 + 0.72 * Math.exp(-(absDiff * absDiff) / 1.45);
  const rotateY = Math.max(-22, Math.min(22, -diff * 7.5));
  const opacity = absDiff > 3.4 ? 0 : Math.max(0.22, 1 - Math.pow(absDiff / 3.55, 1.5));
  const zIndex = Math.round(40 - absDiff * 8);

  return { x, y, scale, rotateY, opacity, zIndex };
}

export default function CompanyStarsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const currentPosRef = useRef(0);
  const targetPosRef = useRef(0);
  const spreadRef = useRef(152);
  const rafRef = useRef<number | null>(null);
  const pointerStartXRef = useRef<number | null>(null);

  const applyFisheyeFrame = useCallback((pos: number) => {
    const spread = spreadRef.current;
    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const diff = getSignedCircularOffset(idx, pos);
      const { x, y, scale, rotateY, opacity, zIndex } = getFisheyeMetrics(diff, spread);

      el.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), ${y.toFixed(1)}px, 0) perspective(900px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      el.style.opacity = opacity.toFixed(3);
      el.style.zIndex = String(zIndex);
      el.style.pointerEvents = Math.abs(diff) > 3.15 ? "none" : "auto";
    });
  }, []);

  const stepTarget = useCallback((delta: number) => {
    if (delta === 0) return;
    targetPosRef.current += delta;
    const nextIdx = ((Math.round(targetPosRef.current) % TOTAL) + TOTAL) % TOTAL;
    setActiveIndex(nextIdx);
  }, []);

  const focusOperator = useCallback(
    (targetIdx: number) => {
      const currentMod = ((Math.round(targetPosRef.current) % TOTAL) + TOTAL) % TOTAL;
      let delta = targetIdx - currentMod;
      if (delta > TOTAL / 2) delta -= TOTAL;
      if (delta < -TOTAL / 2) delta += TOTAL;
      stepTarget(delta);
    },
    [stepTarget]
  );

  // Responsive horizontal spread + continuous 60fps fisheye glide
  useEffect(() => {
    const updateSpread = () => {
      const w = stageRef.current?.offsetWidth || 1100;
      spreadRef.current = w < 520 ? 108 : w < 860 ? 132 : 154;
      applyFisheyeFrame(currentPosRef.current);
    };

    updateSpread();
    window.addEventListener("resize", updateSpread);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let running = true;

    const tick = () => {
      if (!running) return;
      const diff = targetPosRef.current - currentPosRef.current;
      if (reducedMotion || Math.abs(diff) < 0.002) {
        currentPosRef.current = targetPosRef.current;
      } else {
        currentPosRef.current += diff * 0.14;
      }
      applyFisheyeFrame(currentPosRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener("resize", updateSpread);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyFisheyeFrame]);

  // Smooth auto-rotation (pauses on hover, focus, or reduced-motion)
  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      stepTarget(1);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [isPaused, stepTarget]);

  const activeStar = COMPANY_STARS[activeIndex] || COMPANY_STARS[0];

  return (
    <section
      id="stars"
      data-nav-title="Company Stars"
      data-nav-subtitle="Meet the 10 Operators"
      className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
        {/* ── DARK #070D1E THEATRE STAGE CARD ── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onPointerDown={(e) => {
            pointerStartXRef.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (pointerStartXRef.current === null) return;
            const dx = e.clientX - pointerStartXRef.current;
            pointerStartXRef.current = null;
            if (Math.abs(dx) > 42) {
              stepTarget(dx < 0 ? 1 : -1);
            }
          }}
          className="card-3d-master-dark relative p-[2.5px] rounded-[2.25rem] bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#FA0F9C] text-white select-none"
        >
          <div className="relative bg-[#070D1E] rounded-[calc(2.25rem-2.5px)] px-4 pt-7 pb-7 sm:px-8 sm:pt-8 sm:pb-8 overflow-hidden backdrop-blur-2xl">
            {/* Specular Top Rim & Side Theatre Vignette */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 via-pink-400/75 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#070D1E] via-[#070D1E]/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#070D1E] via-[#070D1E]/80 to-transparent z-20" />

            {/* Centered Section Heading */}
            <div className="relative z-20 text-center max-w-2xl mx-auto space-y-2 pb-4">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/15 bg-white/10 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
                MEET THE STARS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Operator-led.{" "}
                <span className="text-gradient">Execution-native.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No advisors, No theorists. Practitioners with deep hyperscaler roots, executing the GTM motions that drive attributable cloud revenue.
              </p>
            </div>

            {/* ── SPOTLIGHT CAROUSEL THEATRE BAY ── */}
            <div className="relative mt-2 pt-3">
              {/* Overhead Lamp Fixture Aperture */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-28 h-2 rounded-full bg-gradient-to-r from-slate-700 via-white/90 to-slate-700 border border-white/30 shadow-[0_0_24px_rgba(56,189,248,0.65)] flex items-center justify-center">
                  <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#008BF8] via-white to-[#FA0F9C]" />
                </div>
                <div className="pointer-events-none -mt-1 w-44 h-8 rounded-full bg-sky-400/40 blur-xl" />
              </div>

              {/* Volumetric Falling Spotlight Cone */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 w-[540px] max-w-[92%] h-[330px] z-[5]"
                style={{
                  clipPath: "polygon(43% 0%, 57% 0%, 88% 100%, 12% 100%)",
                  background:
                    "linear-gradient(180deg, rgba(125, 211, 252, 0.36) 0%, rgba(0, 139, 248, 0.18) 38%, rgba(255, 255, 255, 0.10) 70%, rgba(250, 15, 156, 0.04) 86%, transparent 100%)",
                }}
              />
              {/* Bright Tight Core Beam */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 w-[300px] max-w-[65%] h-[290px] z-[6]"
                style={{
                  clipPath: "polygon(46% 0%, 54% 0%, 74% 100%, 26% 100%)",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(186, 230, 253, 0.22) 45%, rgba(255, 255, 255, 0.05) 85%, transparent 100%)",
                }}
              />

              {/* Fisheye Circle Ring */}
              <div
                ref={stageRef}
                className="relative z-10 h-[230px] sm:h-[246px] w-full flex items-center justify-center"
              >
                {/* Lit Spotlight Pool Beneath Center Circle */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 w-56 sm:w-64 h-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.42)_0%,rgba(0,139,248,0.16)_48%,transparent_76%)] blur-[3px] z-[8]"
                />

                {COMPANY_STARS.map((star, idx) => {
                  const isActive = idx === activeIndex;
                  const diff = getSignedCircularOffset(idx, 0);
                  const init = getFisheyeMetrics(diff, 154);

                  return (
                    <button
                      key={star.id}
                      ref={(el) => {
                        itemRefs.current[idx] = el;
                      }}
                      type="button"
                      onClick={() => focusOperator(idx)}
                      aria-label={`Spotlight ${star.name}, ${star.role}`}
                      aria-pressed={isActive}
                      style={{
                        transform: `translate3d(calc(-50% + ${init.x.toFixed(1)}px), ${init.y.toFixed(1)}px, 0) perspective(900px) rotateY(${init.rotateY.toFixed(2)}deg) scale(${init.scale.toFixed(3)})`,
                        opacity: init.opacity,
                        zIndex: init.zIndex,
                      }}
                      className="group absolute left-1/2 top-7 flex flex-col items-center gap-2.5 focus:outline-none cursor-pointer will-change-transform"
                    >
                      {/* Sculpted 3D Circular Medallion */}
                      <div
                        className={`relative w-[112px] h-[112px] sm:w-[122px] sm:h-[122px] rounded-full p-2 flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-white border-2 border-white ring-2 ring-cyan-300/75 shadow-[0_-12px_32px_rgba(56,189,248,0.45),0_4px_0_#cbd5e1,0_18px_36px_rgba(0,0,0,0.85)]"
                            : "bg-gradient-to-b from-slate-800 to-slate-950 border border-white/20 shadow-[0_3px_0_#020617,0_12px_24px_rgba(0,0,0,0.7)] group-hover:border-white/40"
                        }`}
                      >
                        {isActive && (
                          <div className="pointer-events-none absolute -top-[3px] inset-x-4 h-[3px] rounded-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent blur-[0.5px]" />
                        )}

                        {/* Inner Circular Monogram Emblem */}
                        <div
                          className={`w-full h-full rounded-full flex flex-col items-center justify-center relative overflow-hidden ${
                            isActive
                              ? "btn-gradient text-white shadow-inner"
                              : "bg-gradient-to-br from-slate-800/95 via-slate-900 to-slate-950 text-slate-200 border border-white/10"
                          }`}
                        >
                          <span className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-none">
                            {star.initials}
                          </span>
                          <span
                            className={`mt-1 text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-white/10 text-slate-300"
                            }`}
                          >
                            {star.shortTag}
                          </span>
                        </div>
                      </div>

                      {/* Name Tag Directly Under Each Circle */}
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold tracking-tight whitespace-nowrap transition-colors ${
                          isActive
                            ? "bg-white text-slate-900 shadow-[0_4px_14px_rgba(56,189,248,0.28)]"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {star.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ── CENTERED NAME, ROLE & DESCRIPTION UNDER THE SPOTLIGHT (NO ARROWS OR DOTS) ── */}
              <div className="relative z-20 pt-5 mt-1 border-t border-white/10">
                <div className="max-w-2xl mx-auto text-center space-y-2.5 min-h-[112px] flex flex-col justify-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                        BADGE_STYLE_DARK[activeStar.badgeColor]
                      }`}
                    >
                      {activeStar.role}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200">
                      {activeStar.region}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeStar.name}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed max-w-xl mx-auto">
                    {activeStar.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
