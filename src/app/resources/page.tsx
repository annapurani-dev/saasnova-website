"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FinalCTA from "@/components/FinalCTA";
import ResourceStudioSwitcher from "@/components/resources/ResourceStudioSwitcher";
import BlogStage from "@/components/resources/BlogStage";
import TvShowStage from "@/components/resources/TvShowStage";
import CaseStudiesStage from "@/components/resources/CaseStudiesStage";
import WebinarsStage from "@/components/resources/WebinarsStage";
import EventsStage from "@/components/resources/EventsStage";
import NewsStage from "@/components/resources/NewsStage";
import NewsletterStage from "@/components/resources/NewsletterStage";
import {
  ResourceView,
  BLOG_POSTS,
  SHOW_EPISODES,
  CASE_STUDIES,
  WEBINARS,
  EVENTS,
  NEWS_ITEMS,
} from "@/components/resources/resourcesData";

const RESOURCE_PILLS = [
  "Practitioner Playbooks",
  "The Jen GTM Show",
  "Attributable Case Evidence",
  "Field Masterclasses",
];

function ResourcesHubContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const viewParam = searchParams.get("view") as ResourceView | null;
  const articleParam = searchParams.get("article") || undefined;
  const caseParam = searchParams.get("case") || undefined;

  const validViews: ResourceView[] = [
    "blog",
    "show",
    "case-studies",
    "webinars",
    "events",
    "news",
    "newsletter",
  ];

  const isWebinarsRoute = viewParam === "webinars";

  const [activeView, setActiveView] = useState<ResourceView>(() => {
    if (viewParam === "webinars") return "show";
    if (viewParam && validViews.includes(viewParam)) {
      return viewParam;
    }
    return "blog";
  });

  useEffect(() => {
    if (viewParam === "webinars") {
      setActiveView("show");
    } else if (viewParam && validViews.includes(viewParam)) {
      setActiveView(viewParam);
    }
  }, [viewParam]);

  const handleViewChange = (view: ResourceView) => {
    setActiveView(view);
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", view);
    params.delete("article");
    params.delete("case");
    router.replace(`/resources?${params.toString()}`, { scroll: false });
  };

  const counts: Record<ResourceView, number> = {
    blog: BLOG_POSTS.length,
    show: SHOW_EPISODES.length,
    "case-studies": CASE_STUDIES.length,
    webinars: WEBINARS.length,
    events: EVENTS.length,
    news: NEWS_ITEMS.length,
    newsletter: 0,
  };

  return (
    <main className="relative min-h-screen text-slate-900 pb-0 overflow-x-clip">
      {/* ── ATMOSPHERIC SITE BACKDROP ── */}
      <div className="absolute inset-0 bg-white -z-20" />
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#008BF8]/15 via-[#008BF8]/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-[8%] w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-[#FA0F9C]/12 via-[#FA0F9C]/4 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[5%] w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#008BF8]/12 via-[#008BF8]/4 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] right-[5%] w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/12 via-[#FA0F9C]/4 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-checks opacity-65 pointer-events-none -z-10" />

      {/* ════════════════════════════════════════════════════════════════════════════
          1. SIGNATURE 3D ELEVATED ASYMMETRICAL BRAND HERO STAGE
          Unified signature backdrop matching About, Partners, and Careers hero sections:
          - 80px Top-Left & Bottom-Right / 24px Top-Right & Bottom-Left
          - Luminous sky-tint gradient (#BAE6FD -> #F2F8FE)
          - 3D top specular gleam + deep multi-tier elevation drop shadow
          ════════════════════════════════════════════════════════════════════════════ */}
      <section
        id="resources-hero"
        className="relative px-4 sm:px-6 lg:px-8 min-h-[560px] lg:min-h-[600px] flex flex-col justify-center -mt-[60px] sm:-mt-[62px] pt-[86px] sm:pt-[96px] pb-10 sm:pb-12 overflow-hidden scroll-mt-28 lg:scroll-mt-32 select-none"
      >
        {/* Radial Floor Light beneath Stage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[950px] lg:w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.18)_0%,rgba(186,230,253,0.25)_35%,rgba(250,15,156,0.06)_65%,transparent_80%)] blur-[90px]"
        />

        <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="relative mx-auto w-full">
            <div
              style={{
                background:
                  "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
                boxShadow:
                  "0 35px 75px -15px rgba(15, 23, 42, 0.18), 0 18px 38px -10px rgba(0, 139, 248, 0.22), 0 4px 12px rgba(15, 23, 42, 0.06), inset 0 2px 1px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(0, 139, 248, 0.12)",
              }}
              className="relative overflow-hidden rounded-tl-[68px] sm:rounded-tl-[80px] rounded-br-[68px] sm:rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-16 flex flex-col justify-center space-y-7 sm:space-y-8"
            >
              {/* Specular Ambient Glows inside Stage */}
              <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[260px] rounded-full bg-white/60 blur-[70px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-[460px] h-[300px] rounded-full bg-[#008BF8]/20 blur-[100px]" />

              {/* Headline & Narrative */}
              <div className="relative z-10 space-y-4 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-sky-300/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8] shadow-[0_0_8px_#008BF8]" />
                  <Sparkles className="w-3.5 h-3.5 text-[#008BF8]" />
                  <span>SaaSNova Knowledge Base</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12]">
                  Cloud GTM intelligence,{" "}
                  <span className="text-gradient">written by practitioners.</span>
                </h1>

                <p className="text-[14.5px] sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
                  Unfiltered field tactics, executive interviews, and co-sell frameworks across AWS, Microsoft Azure, and Google Cloud.
                </p>
              </div>

              {/* 4 Brand Commitment / Media Pills */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto w-full pt-1">
                {RESOURCE_PILLS.map((pill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 border border-sky-200/90 shadow-[0_4px_12px_rgba(0,139,248,0.1),inset_0_1px_0_#fff] text-xs sm:text-[12.5px] font-semibold text-slate-800 backdrop-blur-xs transition hover:bg-white hover:border-sky-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008BF8] shrink-0" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Precision Horizon Gradient Line Connecting to Switcher ── */}
        <div className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none z-30" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA0F9C]/50 via-[#008BF8]/60 to-transparent opacity-90" />
        </div>
      </section>

      {/* 2. MAIN DYNAMIC WORKSPACE (STICKY STUDIO SIDEBAR + STAGE) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 sm:pt-8 pb-16">
        {/* Mobile Horizontal Switcher (< lg) */}
        <div className="lg:hidden sticky top-16 z-30 mb-8 py-2 -mx-4 px-4 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <ResourceStudioSwitcher
            variant="horizontal"
            activeView={activeView}
            onViewChange={handleViewChange}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Desktop Sticky Studio Console Sidebar (lg+) */}
          <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-24 self-start">
            <ResourceStudioSwitcher
              variant="sidebar"
              activeView={activeView}
              onViewChange={handleViewChange}
            />
          </aside>

          {/* Active Dynamic Content Stage */}
          <div className="flex-1 min-w-0 w-full min-h-[500px]">
            {activeView === "blog" && <BlogStage initialArticleSlug={articleParam} />}
            {activeView === "show" && (
              <TvShowStage initialFilter={isWebinarsRoute ? "webinars" : undefined} />
            )}
            {activeView === "case-studies" && <CaseStudiesStage initialCaseId={caseParam} />}
            {activeView === "events" && <EventsStage />}
            {activeView === "news" && <NewsStage />}
            {activeView === "newsletter" && <NewsletterStage />}
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL BRAND FINAL CTA SECTION */}
      <section className="mt-24 sm:mt-28">
        <FinalCTA />
      </section>
    </main>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-slate-500 font-mono text-xs">
          Loading Resources Hub...
        </div>
      }
    >
      <ResourcesHubContent />
    </Suspense>
  );
}
