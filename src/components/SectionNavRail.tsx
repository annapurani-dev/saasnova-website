"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SectionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
}

const HOME_SECTIONS: SectionItem[] = [
  {
    id: "hero",
    number: "01",
    title: "Overview",
    subtitle: "Operator-Led Engine",
  },
  {
    id: "trust",
    number: "02",
    title: "Proof & Credibility",
    subtitle: "$150M+ ARR & Case Studies",
  },
  {
    id: "challenge",
    number: "03",
    title: "The GTM Gap",
    subtitle: "Route A vs Route B",
  },
  {
    id: "how-we-execute",
    number: "04",
    title: "Execution Engine",
    subtitle: "Activate ➔ Drive ➔ Convert ➔ Prove",
  },
  {
    id: "solutions",
    number: "05",
    title: "Solutions Hub",
    subtitle: "Programs & Parity",
  },
  {
    id: "storefront",
    number: "06",
    title: "Storefront",
    subtitle: "AWS Launch Partner",
  },
  {
    id: "contact",
    number: "07",
    title: "Book Strategy",
    subtitle: "30-Min Session",
  },
];

const SOLUTIONS_SECTIONS: SectionItem[] = [
  {
    id: "solutions-hero",
    number: "01",
    title: "Pick Your Model",
    subtitle: "We Execute 100%",
  },
  {
    id: "solutions-description",
    number: "02",
    title: "Detailed Overview",
    subtitle: "3 Execution Models",
  },
  {
    id: "solutions-cta",
    number: "03",
    title: "Book Strategy",
    subtitle: "Execution Session",
  },
];

const GROWTH_PROGRAMS_SECTIONS: SectionItem[] = [
  { id: "growth-hero", number: "01", title: "Growth Programs", subtitle: "Packaged Cloud GTM" },
  { id: "program-selection", number: "02", title: "Program Selection", subtitle: "Ignite, SuperNova & NovaX" },
  { id: "program-details", number: "03", title: "Program Details", subtitle: "Deliverables & Milestones" },
  { id: "growth-cta", number: "04", title: "Book Briefing", subtitle: "Schedule Program Call" },
];

const FRACTIONAL_SECTIONS: SectionItem[] = [
  { id: "fractional-hero", number: "01", title: "Fractional Talent", subtitle: "Embedded MaaS Operators" },
  { id: "operator-selection", number: "02", title: "Operator Selection", subtitle: "PDM, PMM & PAL" },
  { id: "role-details", number: "03", title: "Role Details", subtitle: "Responsibilities & Outputs" },
  { id: "working-model", number: "04", title: "Working Model", subtitle: "Embedded Slack Cadence" },
  { id: "fractional-cta", number: "05", title: "Book Operator", subtitle: "Schedule Discovery" },
];

const SYSTEMS_OPS_SECTIONS: SectionItem[] = [
  { id: "systems-hero", number: "01", title: "Systems & Ops", subtitle: "Infrastructure & Tooling" },
  { id: "service-selection", number: "02", title: "Service Selection", subtitle: "PRM, PCM & SFaaS" },
  { id: "service-details", number: "03", title: "Service Details", subtitle: "Capabilities & Features" },
  { id: "implementation", number: "04", title: "Implementation", subtitle: "4 Steps & Platforms" },
  { id: "systems-cta", number: "05", title: "Book Scoping", subtitle: "Schedule Architecture" },
];

export default function SectionNavRail() {
  const pathname = usePathname();

  let sections = HOME_SECTIONS;
  if (pathname === "/solutions") {
    sections = SOLUTIONS_SECTIONS;
  } else if (pathname === "/solutions/growth-programs") {
    sections = GROWTH_PROGRAMS_SECTIONS;
  } else if (pathname === "/solutions/fractional-operators") {
    sections = FRACTIONAL_SECTIONS;
  } else if (pathname === "/solutions/systems-ops") {
    sections = SYSTEMS_OPS_SECTIONS;
  }

  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "hero");

  useEffect(() => {
    setActiveId(sections[0]?.id || "hero");
  }, [pathname, sections]);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 100;
      const viewportMid = scrollY + headerHeight + window.innerHeight * 0.25;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const innerEl =
            (el.querySelector(":scope > div > div") as HTMLElement) ||
            (el.firstElementChild as HTMLElement) ||
            el;
          const top = innerEl.getBoundingClientRect().top + scrollY;
          if (viewportMid >= top) {
            setActiveId(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [sections]);

  const scrollTo = (id: string) => {
    if (id === sections[0]?.id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId(id);
      return;
    }

    const sectionEl = document.getElementById(id);
    if (!sectionEl) return;

    // Target the inner component root element directly so the entire section card,
    // including its top curve, eyebrow pill, and main headline, is 100% visible
    const innerEl =
      (sectionEl.querySelector(":scope > div > div") as HTMLElement) ||
      (sectionEl.firstElementChild as HTMLElement) ||
      sectionEl;

    // Measure exact sticky header height dynamically (announcement strip + navbar)
    const headerEl = document.querySelector("header");
    const headerHeight = headerEl ? headerEl.offsetHeight : 110;

    // Position target cleanly 18px below sticky header
    const currentScrollY =
      window.pageYOffset || document.documentElement.scrollTop || 0;
    const targetRect = innerEl.getBoundingClientRect();
    const targetY = Math.max(
      0,
      Math.round(targetRect.top + currentScrollY - headerHeight - 18)
    );

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setActiveId(id);
  };

  return (
    <aside
      aria-label="Section quick navigation"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-2.5 select-none pointer-events-auto"
    >
      {/* Floating subtle background pill to give clean contrast over light/dark content */}
      <div className="flex flex-col items-center gap-2 py-3 px-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;

          return (
            <div
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="relative flex items-center group cursor-pointer p-0.5"
            >
              {/* ── HOVER SLIDE-OUT GLASSMORPHIC TOOLTIP (CLICKABLE AS WELL) ── */}
              <div className="absolute right-7 flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_25px_rgba(15,23,42,0.14)] opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                <span className="font-mono text-[10px] font-black text-slate-400">
                  {sec.number}
                </span>
                <span className="h-3 w-[1px] bg-slate-200" />
                <div className="flex flex-col text-left pr-1">
                  <span className="text-xs font-bold text-slate-800 leading-tight whitespace-nowrap">
                    {sec.title}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">
                    {sec.subtitle}
                  </span>
                </div>
              </div>

              {/* ── GENEROUS HIT-TARGET BUTTON (28x28px clickable area) ── */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollTo(sec.id);
                }}
                aria-label={`Jump to section ${sec.number}: ${sec.title}`}
                className="relative flex items-center justify-center w-7 h-7 cursor-pointer focus:outline-hidden"
              >
                <div
                  className={`rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "w-2 h-7 bg-gradient-to-b from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] shadow-[0_0_14px_rgba(250,15,156,0.55)] scale-105"
                      : "w-1.5 h-4.5 bg-slate-300/85 group-hover:bg-slate-500 group-hover:h-6"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
