"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Mail,
  Check,
  BookOpen,
  X,
} from "lucide-react";
import { FULL_BLOG_ARTICLES, FullBlogArticle } from "./blogFullArticles";

type FilterType = "all" | "aws" | "isv";

interface BlogFilter {
  id: FilterType;
  label: string;
}

// Exactly matching the original live website filter buttons
const ORIGINAL_FILTERS: BlogFilter[] = [
  { id: "all", label: "All Posts" },
  { id: "aws", label: "AWS Strategy" },
  { id: "isv", label: "ISV Programs" },
];

interface BlogStageProps {
  initialArticleSlug?: string;
}

export default function BlogStage({ initialArticleSlug }: BlogStageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeArticle, setActiveArticle] = useState<FullBlogArticle | null>(() => {
    if (initialArticleSlug) {
      return (
        FULL_BLOG_ARTICLES.find(
          (a) => a.slug === initialArticleSlug || a.id === initialArticleSlug
        ) || null
      );
    }
    return null;
  });

  const [copiedLink, setCopiedLink] = useState(false);
  const [topEmail, setTopEmail] = useState("");
  const [topSubscribed, setTopSubscribed] = useState(false);
  const [sideEmail, setSideEmail] = useState("");
  const [sideSubscribed, setSideSubscribed] = useState(false);

  // Sync if URL search params change externally
  useEffect(() => {
    const articleSlug = searchParams.get("article");
    if (articleSlug) {
      const match = FULL_BLOG_ARTICLES.find(
        (a) => a.slug === articleSlug || a.id === articleSlug
      );
      if (match) {
        setActiveArticle(match);
      }
    } else {
      setActiveArticle(null);
    }
  }, [searchParams]);

  const openArticle = (article: FullBlogArticle) => {
    setActiveArticle(article);
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "blog");
    params.set("article", article.slug);
    router.replace(`/resources?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const closeArticle = () => {
    setActiveArticle(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("article");
    router.replace(`/resources?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const copyArticleLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleTopSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (topEmail.trim()) {
      setTopSubscribed(true);
    }
  };

  const handleSideSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (sideEmail.trim()) {
      setSideSubscribed(true);
    }
  };

  // Filter posts based on activeFilter
  const filteredArticles = FULL_BLOG_ARTICLES.filter((article) => {
    if (activeFilter === "all") return true;
    return article.filterCategories.includes(activeFilter);
  });

  // Featured article is the PRM deadline (on top)
  const featuredArticle = FULL_BLOG_ARTICLES.find((a) => a.featured) || FULL_BLOG_ARTICLES[0];
  const isFeaturedVisible =
    activeFilter === "all" || featuredArticle.filterCategories.includes(activeFilter);

  // The 3 exact grid articles from the live website under "All Posts":
  // 1. Stop Buying Software Like It's 2015
  // 2. Why Your Cloud Marketplace Listing Is Silent And What Actually Fixes It
  // 3. Why AWS Marketplace GTM Fails for Most SaaS Companies
  const gridArticles = filteredArticles.filter((a) => !a.featured);

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 1: SAASNOVA JOURNAL DOSSIER (Matching Reference Image)
  // ══════════════════════════════════════════════════════════════════════════
  if (activeArticle) {
    const isBlueCat =
      activeArticle.category.includes("AWS") || activeArticle.category.includes("Compliance");

    const currentIdx = FULL_BLOG_ARTICLES.findIndex((a) => a.id === activeArticle.id);
    const nextArticle =
      currentIdx !== -1 && currentIdx < FULL_BLOG_ARTICLES.length - 1
        ? FULL_BLOG_ARTICLES[currentIdx + 1]
        : FULL_BLOG_ARTICLES[0];

    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Dossier Card Container (Matching Reference Image) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden text-slate-900">
          {/* 1. Header Bar: Icon + Blog / Insights & Ideas + Close X */}
          <div className="px-6 sm:px-8 py-4 border-b border-slate-200/90 bg-white flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm leading-tight">
                  Blog
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  Insights &amp; Ideas
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyArticleLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition cursor-pointer"
                title="Copy link to article"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={closeArticle}
                className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
                aria-label="Close article"
              >
                <span className="hidden sm:inline">Close</span>
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* 2. Editorial Masthead: SaaSNova Journal */}
            <div className="border-b border-slate-200/90 pb-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-serif">
                  SaaSNova Journal
                </h2>
                <div className="text-xs sm:text-sm font-serif italic text-slate-500">
                  Explore. Learn. Grow.
                </div>
              </div>

              {/* Volume metadata & Category Pills */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-500 border-t border-slate-100">
                <div className="font-semibold">
                  Vol. 12 <span className="text-slate-300">|</span> {activeArticle.date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-slate-100 text-slate-700">
                    {activeArticle.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-sky-50 text-[#008BF8]">
                    Cloud GTM
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-pink-50 text-[#FA0F9C]">
                    Playbook
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Article Title & Summary */}
            <div className="space-y-3 max-w-4xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
                {activeArticle.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeArticle.summary}
              </p>

              {/* Author Byline */}
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <Image
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  By <strong className="text-slate-900">{activeArticle.author.name}</strong>{" "}
                  <span className="text-slate-300">|</span> {activeArticle.readTime}{" "}
                  <span className="text-slate-300">|</span> {activeArticle.date}
                </div>
              </div>
            </div>

            {/* 4. Article Banner Visual */}
            <div className="relative w-full aspect-[16/9] max-h-[440px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-md">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* 5. Two-Column Highlights: In This Article + Executive Pull Quote */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* In this article */}
              <div className="md:col-span-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
                <h4 className="font-extrabold text-slate-900 text-sm">
                  In this article
                </h4>
                <div className="space-y-2.5">
                  {activeArticle.toc.length > 0 ? (
                    activeArticle.toc.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-pink-100 text-[#FA0F9C] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="font-medium pt-0.5">{item.label}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-pink-100 text-[#FA0F9C] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          1
                        </span>
                        <span className="font-medium pt-0.5">Understanding the Hyperscaler Opportunity</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-pink-100 text-[#FA0F9C] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          2
                        </span>
                        <span className="font-medium pt-0.5">Building Your Execution Strategy</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-pink-100 text-[#FA0F9C] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          3
                        </span>
                        <span className="font-medium pt-0.5">Driving Repeatable Field Alignment</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Executive Pull Quote */}
              <div className="md:col-span-6 p-6 rounded-2xl bg-pink-50/40 border border-pink-100/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-[#FA0F9C] leading-none select-none">
                    &ldquo;
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
                    Partnering with SaaSNova has helped us think bigger, execute faster, and turn unmanaged cloud listings into closed revenue.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-500 font-bold">
                  — Jen Dawson, Founder &amp; Cloud GTM Operator
                </div>
              </div>
            </div>

            {/* 6. Full Article Prose Content */}
            <div className="pt-4 border-t border-slate-100">
              <div
                className="article-prose max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: activeArticle.htmlContent }}
              />
            </div>

            {/* 7. Footer Strip: Read Next Article */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={closeArticle}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Articles</span>
              </button>

              {nextArticle && (
                <button
                  type="button"
                  onClick={() => openArticle(nextArticle)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold !text-white bg-[#FA0F9C] hover:bg-[#E60085] transition-all flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02]"
                >
                  <span>Read Next Article</span>
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
  // VIEW 2: CARD DISPLAY WITH EXACT LIVE WEBSITE FILTERS
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* 1. SIMPLE PROPER TITLE (NO GRADIENT) & HORIZONTAL SUBSCRIPTION PILL */}
      <div className="space-y-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-[#008BF8]" />
            <span>SaaSNova Blog</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cloud GTM intelligence, written by practitioners.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Actionable insights on co-sell execution, marketplace listing, field team motions, and board-ready proof across AWS, Azure, and GCP.
          </p>
        </div>

        {/* Sleek Horizontal Subscription Pill across the Stage Screen (Contained, No Overflow) */}
        <div className="rounded-2xl sm:rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] p-1.5 sm:p-2 flex flex-col md:flex-row items-center justify-between gap-3 w-full">
          {/* Left Text */}
          <div className="flex items-center gap-3 pl-2 sm:pl-3 w-full md:w-auto">
            <div className="w-8 h-8 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-200/80 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0 pr-2">
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Get The Nova Brief
              </div>
              <div className="text-[11.5px] text-slate-500 truncate leading-snug">
                Co-sell tactics and cloud marketplace updates every week from Jen Dawson.
              </div>
            </div>
          </div>

          {/* Right Input with Nestled Brand Pink Pill Button */}
          {topSubscribed ? (
            <div className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shrink-0">
              ✓ Subscribed! Welcome to The Nova Brief.
            </div>
          ) : (
            <form onSubmit={handleTopSubscribe} className="w-full md:w-auto shrink-0 pr-1">
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full p-1 pl-3.5 focus-within:bg-white focus-within:border-[#FA0F9C] transition-all w-full md:w-[350px]">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={topEmail}
                  onChange={(e) => setTopEmail(e.target.value)}
                  className="bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden flex-1 min-w-0 pr-2"
                />
                <button
                  type="submit"
                  className="rounded-full px-4 sm:px-5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_14px_rgba(250,15,156,0.32)] hover:shadow-[0_8px_20px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* 2. EXACT ORIGINAL WEBSITE FILTERS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none select-none pt-1">
        {ORIGINAL_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-2xs ${
                isActive
                  ? "bg-[#008BF8] text-white shadow-sm -translate-y-0.5"
                  : "bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* 3. FEATURED POST CARD (The July 31 AWS PRM Deadline) */}
      {isFeaturedVisible && (
        <div className="relative group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#008BF8]/15 via-[#FA0F9C]/10 to-[#008BF8]/15 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-300 pointer-events-none" />

          {/* Elevated Split Card Enclosure */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col lg:flex-row items-stretch">
            
            {/* Visual Column (50% on desktop) */}
            <div className="w-full lg:w-1/2 relative bg-slate-950 min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] overflow-hidden flex items-center justify-center p-3 sm:p-5">
              <div className="relative w-full h-full aspect-[1671/940] max-h-[340px]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Column (50% on desktop) */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Brand Electric Blue Category Badge (NO YELLOW) */}
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-50 text-[#008BF8] border border-sky-200/80 shadow-2xs">
                  {featuredArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-300">·</span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-slate-900 tracking-tight leading-snug">
                {featuredArticle.shortTitle}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {featuredArticle.summary}
              </p>

              {/* Author & Brand Pink Pill Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-xs text-slate-600">
                    <span className="font-bold text-slate-900">{featuredArticle.author.name}</span>
                    <span className="text-slate-400"> · {featuredArticle.date}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openArticle(featuredArticle)}
                  className="rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_16px_rgba(250,15,156,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_24px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2 shrink-0"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. ALL POSTS SECTION - EXACTLY MATCHING THE LIVE WEBSITE */}
      <div className="space-y-4">
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          All Posts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Exactly the 3 cards from the live site:
              1. Stop Buying Software Like It's 2015
              2. Why Your Cloud Marketplace Listing Is Silent And What Actually Fixes It
              3. Why AWS Marketplace GTM Fails for Most SaaS Companies */}
          {gridArticles.map((article) => {
            // Brand Colors Only: Brand Pink for ISV, Brand Blue for AWS
            const isPinkBadge = article.category.includes("ISV");
            return (
              <div
                key={article.id}
                className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(0,139,248,0.12)] hover:border-[#008BF8]/30 transition-all duration-200 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Visual Header */}
                <div className="relative w-full aspect-[1671/940] bg-[#0A1628] overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-102"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Brand Pill: Blue or Pink (NO YELLOW) */}
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider ${
                        isPinkBadge
                          ? "bg-pink-50 text-[#FA0F9C] border border-pink-200/80"
                          : "bg-sky-50 text-[#008BF8] border border-sky-200/80"
                      }`}
                    >
                      {article.category}
                    </span>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#FA0F9C] transition-colors leading-snug line-clamp-2">
                      {article.shortTitle}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Meta & Brand Pink Action Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 text-[11.5px]">
                      {article.date} · {article.readTime}
                    </span>

                    <button
                      type="button"
                      onClick={() => openArticle(article)}
                      className="rounded-full px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_2px_8px_rgba(250,15,156,0.25)] hover:shadow-[0_4px_14px_rgba(250,15,156,0.4)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}
