"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Play, X, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

const CLOUD_BOXES = [
  {
    id: "aws",
    label: "AWS Marketplace",
    logo: "/aws-logo.png",
    width: 28,
    height: 18,
    className: "h-4.5 sm:h-5 w-auto object-contain",
  },
  {
    id: "azure",
    label: "Microsoft Azure",
    logo: "/azure-logo.png",
    width: 22,
    height: 22,
    className: "h-5 sm:h-5.5 w-auto object-contain",
  },
  {
    id: "gcp",
    label: "Google Cloud",
    logo: "/gcp-logo.png",
    width: 24,
    height: 22,
    className: "h-5 sm:h-5.5 w-auto object-contain",
  },
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const openVideo = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsPlaying(true);
    setIsRendered(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setIsVisible(false);
    closeTimerRef.current = setTimeout(() => {
      setIsRendered(false);
    }, 420);
  };

  const toggleVideo = () => {
    if (isPlaying) closeVideo();
    else openVideo();
  };

  useEffect(() => {
    if (!isPlaying) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPlaying]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-transparent text-slate-900 pt-3 sm:pt-4 lg:pt-6 pb-2 sm:pb-4 lg:pb-6 min-h-[560px] lg:h-[calc(100vh-96px)] lg:max-h-[780px] flex flex-col justify-center scroll-mt-28 lg:scroll-mt-32 select-none"
    >
      {/* ── 2. MAIN 2-COLUMN STAGE (Left: Headline, Cloud Boxes, Copy, CTAs | Right: Grounded Cutout & Spotlight) ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-1">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-8 flex-1">

          {/* Left Column: Dominant Headline → Cloud Logos → Description → Single-Row CTAs */}
          <div className="w-full max-w-xl lg:max-w-[56%] space-y-4 sm:space-y-4.5 text-left pointer-events-auto lg:self-center lg:py-4">

            {/* Dominant Headline (Directly in Left Column) */}
            <h1 className="type-display text-slate-900 text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] xl:text-[52px] font-black tracking-tight leading-[1.08]">
              The World&apos;s First{" "}
              <span className="text-gradient">Operator-Led</span>{" "}
              <br />
              GTM Execution Engine
            </h1>

            {/* 3 Separate Square Cloud Logo Boxes */}
            <div className="flex items-center gap-2.5 pt-0.5 pb-0.5">
              {CLOUD_BOXES.map((cloud) => (
                <div
                  key={cloud.id}
                  title={cloud.label}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all hover:bg-slate-50 hover:border-slate-300 hover:scale-105"
                >
                  <Image
                    src={cloud.logo}
                    alt={cloud.label}
                    width={cloud.width}
                    height={cloud.height}
                    style={{ width: "auto" }}
                    className={cloud.className}
                  />
                </div>
              ))}
            </div>

            {/* Lead Paragraph */}
            <p className="type-lead text-slate-600 text-sm sm:text-base lg:text-[15.5px] leading-relaxed max-w-xl">
              Scale your SaaS across AWS, Azure, and Google Cloud with dedicated
              fractional operators. We run co-sell, partner development, and
              marketplace motions so your listing becomes real pipeline and revenue.
            </p>

            {/* Balanced Single-Row CTAs (Original Website Primary & Secondary Color System) */}
            <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch sm:items-center gap-3 pt-1">
              {/* ── Primary CTA (Original Live Site Vivid Pink Gradient) ── */}
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-5.5 h-[48px] text-sm sm:text-[14.5px] font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_18px_rgba(250,15,156,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_26px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all shrink-0"
              >
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Book a 30-min Strategy Session</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>

              {/* ── Secondary CTA (Original Live Site Brand Blue Glass Tint) ── */}
              <button
                id="hero-video-trigger"
                type="button"
                onClick={toggleVideo}
                aria-expanded={isPlaying}
                aria-label={isPlaying ? "Close executive briefing video" : "Watch executive briefing video"}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#008BF8]/30 bg-[#008BF8]/[0.08] hover:bg-[#008BF8]/[0.14] hover:border-[#008BF8]/55 px-4.5 h-[48px] w-full sm:w-[280px] sm:min-w-[280px] sm:max-w-[280px] shrink-0 text-[#008BF8] shadow-[0_2px_12px_rgba(0,139,248,0.08)] hover:shadow-[0_4px_18px_rgba(0,139,248,0.18)] hover:-translate-y-0.5 cursor-pointer select-none active:scale-[0.98] transition-all"
              >
                <span className="hero-video-icon flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-white text-[#008BF8] shadow-xs border border-[#008BF8]/20 transition-transform duration-300 group-hover:scale-105">
                  {isPlaying ? (
                    <X className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                  ) : (
                    <Play className="h-3 w-3 translate-x-[0.5px] fill-current" aria-hidden="true" />
                  )}
                </span>

                <span className="hero-video-text text-xs sm:text-sm font-bold text-[#008BF8] whitespace-nowrap tracking-tight">
                  {isPlaying ? "Close Executive Briefing" : "Watch Executive Briefing"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Cutout & Scaled Spotlight Stage */}
          <div className="relative w-full lg:w-[44%] xl:w-[42%] flex items-end justify-center lg:justify-end lg:self-end pointer-events-none">

            {/* ══════════════════════════════════════════════════════════
              ── THEATRICAL STAGE SPOTLIGHT ILLUMINATING JEN'S PORTRAIT ──
             ══════════════════════════════════════════════════════════ */}

            {/* 1. Downward Angular Spotlight Beam */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 right-1/2 translate-x-1/2 w-[420px] lg:w-[500px] h-[700px] bg-gradient-to-b from-sky-400/35 via-[#008BF8]/22 via-[#FA0F9C]/10 to-transparent blur-[80px] -rotate-6 rounded-full"
            />

            {/* 2. Core High-Intensity Radial Spotlight behind torso & head */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-12 right-1/2 translate-x-1/2 w-[380px] sm:w-[440px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.45)_0%,rgba(0,139,248,0.3)_40%,rgba(250,15,156,0.18)_65%,transparent_80%)] blur-[50px]"
            />

            {/* 3. Bright White-Blue Keylight Hotspot behind silhouette for edge separation */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-32 right-1/2 translate-x-1/2 w-64 h-76 rounded-full bg-sky-200/20 blur-[40px]"
            />

            {/* 4. Elliptical Illuminated Floor Stage Disc beneath her feet */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-1/2 translate-x-1/2 w-[320px] sm:w-[380px] h-10 rounded-[100%] bg-gradient-to-r from-transparent via-sky-400/60 via-[#008BF8]/70 to-transparent blur-md"
            />

            {/* Jen Dawson Standout Cutout — Elevated Stature & Impact */}
            <div
              id="hero-jen-cutout"
              className={`relative flex items-end justify-center lg:justify-end transition-all duration-700 ease-out ${isVisible
                ? "opacity-60 blur-[10px] scale-[0.98] pointer-events-none"
                : "opacity-100 blur-none scale-100 pointer-events-auto"
                }`}
            >
              {/* The Cutout Image with Natural Theatrical Drop Shadow */}
              <div className="relative flex items-end">
                <Image
                  src="/jen-cutout.png"
                  alt="Jen Dawson - Principal Go-To-Market Lead at SaaSNova"
                  width={800}
                  height={800}
                  priority
                  className="h-[360px] sm:h-[420px] lg:h-[480px] xl:h-[520px] 2xl:h-[550px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_22px_48px_rgba(15,23,42,0.22)] select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Playing State: Clean Video Player Directly on Canvas (No Dark Box Behind) */}
            <div
              id="hero-video-modal"
              className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 ease-out ${isVisible
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none hidden"
                }`}
            >
              <div className="relative aspect-video w-full max-w-[560px] rounded-2xl overflow-hidden border border-slate-200/90 bg-black shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
                <iframe
                  id="hero-video-iframe"
                  src={isPlaying ? "https://www.youtube.com/embed/x75hrIBKPj8?autoplay=1&rel=0&modestbranding=1" : ""}
                  data-src="https://www.youtube.com/embed/x75hrIBKPj8?autoplay=1&rel=0&modestbranding=1"
                  title="SaaSNova Executive Briefing"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Precision Horizon Gradient Line (#FA0F9C to #008BF8) Connecting Smoothly to Trust Section ── */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none z-30" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA0F9C]/50 via-[#008BF8]/60 to-transparent opacity-90" />
      </div>
    </section>
  );
}
