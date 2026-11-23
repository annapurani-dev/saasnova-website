"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { scrollToSectionId, normalizeSectionHash } from "@/lib/scrollNavigation";

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
    title: "Execution Models",
    subtitle: "3 Engagement Paths",
  },
  {
    id: "compare-matrix",
    number: "03",
    title: "Compare Fit",
    subtitle: "Solutions Matrix",
  },
  {
    id: "faq",
    number: "04",
    title: "Common Questions",
    subtitle: "4 Key Answers",
  },
  {
    id: "solutions-cta",
    number: "05",
    title: "Book Strategy",
    subtitle: "Execution Session",
  },
];

const GROWTH_PROGRAMS_SECTIONS: SectionItem[] = [
  { id: "growth-hero", number: "01", title: "Growth Programs", subtitle: "Packaged Cloud GTM" },
  { id: "program-selection", number: "02", title: "Program Selection", subtitle: "Ignite, SuperNova & NovaX" },
  { id: "ignite", number: "03", title: "Ignite", subtitle: "1 Month · Activation" },
  { id: "supernova", number: "04", title: "SuperNova", subtitle: "4 Months · US Entry" },
  { id: "novax", number: "05", title: "NovaX", subtitle: "6 Months · Multi-Cloud" },
  { id: "growth-cta", number: "06", title: "Book Briefing", subtitle: "Schedule Program Call" },
];

const FRACTIONAL_SECTIONS: SectionItem[] = [
  { id: "fractional-hero", number: "01", title: "Fractional Talent", subtitle: "Embedded MaaS Operators" },
  { id: "operator-selection", number: "02", title: "Operator Selection", subtitle: "PDM, PMM & PAL" },
  { id: "pdmaas", number: "03", title: "PDMaaS", subtitle: "Pipeline & Co-Sell" },
  { id: "pmmaas", number: "04", title: "PMMaaS", subtitle: "Messaging & MDF" },
  { id: "palaas", number: "05", title: "PALaaS", subtitle: "Executive Alliances" },
  { id: "working-model", number: "06", title: "Working Model", subtitle: "Embedded Slack Cadence" },
  { id: "fractional-cta", number: "07", title: "Book Operator", subtitle: "Schedule Discovery" },
];

const SYSTEMS_OPS_SECTIONS: SectionItem[] = [
  { id: "systems-hero", number: "01", title: "Systems & Ops", subtitle: "Infrastructure & Tooling" },
  { id: "service-selection", number: "02", title: "Service Selection", subtitle: "PRM & PCM" },
  { id: "prmaas", number: "03", title: "PRMaaS", subtitle: "Revenue Measurement" },
  { id: "pcmaas", number: "04", title: "PCMaaS", subtitle: "Portal Migration" },
  { id: "implementation", number: "05", title: "Implementation", subtitle: "4 Steps & Stack" },
  { id: "systems-cta", number: "06", title: "Book Scoping", subtitle: "Schedule Readiness" },
];

const STOREFRONT_SECTIONS: SectionItem[] = [
  { id: "storefront-hero", number: "01", title: "Storefront", subtitle: "AWS Launch Partner" },
  { id: "what-we-built", number: "02", title: "What We Built", subtitle: "Architecture & Impact" },
  { id: "sfaas", number: "03", title: "SFaaS", subtitle: "Storefront as a Service" },
  { id: "ecosystem-validation", number: "04", title: "Validation", subtitle: "AWS & ISV Voices" },
  { id: "milestone-timeline", number: "05", title: "Timeline", subtitle: "Launch Partner Journey" },
  { id: "storefront-cta", number: "06", title: "Connect", subtitle: "Explore Storefront" },
];

const ABOUT_SECTIONS: SectionItem[] = [
  { id: "about-hero", number: "01", title: "About & Cloud", subtitle: "Cloud-Execution-Native" },
  { id: "founder", number: "02", title: "CEO & Founder", subtitle: "Jen Dawson Story" },
  { id: "stars", number: "03", title: "Company Stars", subtitle: "Meet the 10 Operators" },
  { id: "clients", number: "04", title: "Our Trusted Clients", subtitle: "100+ ISVs Activated" },
];

const CAREERS_SECTIONS: SectionItem[] = [
  { id: "careers-hero", number: "01", title: "Careers", subtitle: "Real Pipeline Execution" },
  { id: "culture", number: "02", title: "Why Build Here", subtitle: "Culture & The Bar" },
  { id: "open-roles", number: "03", title: "Open Roles", subtitle: "4 Active Positions" },
  { id: "open-application", number: "04", title: "Open Application", subtitle: "Join the Team" },
];

const CONTACT_SECTIONS: SectionItem[] = [
  { id: "contact-hero", number: "01", title: "Strategy Session", subtitle: "Overview & Calendar" },
  { id: "send-message", number: "02", title: "Send Message", subtitle: "Inquiry Form" },
];

const SUPPORT_SECTIONS: SectionItem[] = [
  { id: "support-hero", number: "01", title: "Support Desk", subtitle: "Overview & Commitments" },
  { id: "support-ticket", number: "02", title: "Submit Ticket", subtitle: "Support Request Form" },
];

const CLOUD_MARKETPLACE_SECTIONS: SectionItem[] = [
  { id: "cloud-hero", number: "01", title: "Cloud Overview", subtitle: "Amazonians, Microsofties & Googlers" },
  { id: "cloud-nexus", number: "02", title: "Cloud Partner GTM", subtitle: "AWS, Azure & GCP" },
  { id: "sme-registration-form", number: "03", title: "SME Registration", subtitle: "Intake Form" },
];

const ALLIANCE_SECTIONS: SectionItem[] = [
  { id: "alliance-hero", number: "01", title: "Alliances Overview", subtitle: "Tools & Delivery Network" },
  { id: "alliance-network", number: "02", title: "Alliance Network", subtitle: "SaaSify, Workspan, Pronix, Carahsoft" },
  { id: "delivery-pillars", number: "03", title: "Delivery Pillars", subtitle: "How Alliances Execute" },
];

function SectionNavRailContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const partnerView = searchParams.get("view");

  let sections = HOME_SECTIONS;
  if (pathname === "/solutions") {
    sections = SOLUTIONS_SECTIONS;
  } else if (pathname === "/solutions/growth-programs") {
    sections = GROWTH_PROGRAMS_SECTIONS;
  } else if (pathname === "/solutions/fractional-operators") {
    sections = FRACTIONAL_SECTIONS;
  } else if (pathname === "/solutions/systems-ops") {
    sections = SYSTEMS_OPS_SECTIONS;
  } else if (pathname === "/solutions/storefront") {
    sections = STOREFRONT_SECTIONS;
  } else if (pathname === "/about") {
    sections = ABOUT_SECTIONS;
  } else if (pathname === "/careers") {
    sections = CAREERS_SECTIONS;
  } else if (pathname === "/contact") {
    sections = CONTACT_SECTIONS;
  } else if (pathname === "/support") {
    sections = SUPPORT_SECTIONS;
  } else if (pathname === "/partners") {
    sections = partnerView === "strategic-alliances" ? ALLIANCE_SECTIONS : CLOUD_MARKETPLACE_SECTIONS;
  }

  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "hero");

  useEffect(() => {
    const rawHash = typeof window !== "undefined" ? window.location.hash : "";
    const normalized = rawHash ? normalizeSectionHash(rawHash) : "";
    if (normalized && sections.some((s) => s.id === normalized)) {
      setActiveId(normalized);
    } else {
      setActiveId(sections[0]?.id || "hero");
    }
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
          const paddingTop = parseFloat(window.getComputedStyle(el).paddingTop) || 0;
          const top = el.getBoundingClientRect().top + scrollY + paddingTop;
          if (viewportMid >= top) {
            setActiveId(sec.id);
            break;
          }
        }
      }
    };

    const handleSectionSync = (e: Event) => {
      const id = (e as CustomEvent<{ id?: string }>).detail?.id;
      if (id && sections.some((s) => s.id === id)) {
        setActiveId(id);
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    window.addEventListener("solution-section-change", handleSectionSync);
    handleScrollSpy();
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("solution-section-change", handleSectionSync);
    };
  }, [sections]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const checkDrawer = () => {
      setIsDrawerOpen(document.body.getAttribute("data-drawer-open") === "true");
    };
    checkDrawer();
    const observer = new MutationObserver(checkDrawer);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-drawer-open"] });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    scrollToSectionId(id, {
      topIfFirst: true,
      firstSectionId: sections[0]?.id,
      updateHash: true,
      notifySelection: true,
    });
    setActiveId(id);
  };

  if (isDrawerOpen) return null;

  return (
    <aside
      aria-label="Section quick navigation"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-2.5 select-none pointer-events-auto transition-opacity duration-200"
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
                      ? "w-2 h-7 bg-gradient-to-b from-[#FA0F9C] via-[#c026d3] to-[#008BF8] shadow-[0_0_14px_rgba(250,15,156,0.55)] scale-105"
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

export default function SectionNavRail() {
  return (
    <Suspense fallback={null}>
      <SectionNavRailContent />
    </Suspense>
  );
}
