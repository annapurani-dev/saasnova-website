"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  Tv,
  ExternalLink,
  Radio,
  Zap,
  ChevronLeft,
  ChevronRight,
  Video,
} from "lucide-react";
import { SHOW_EPISODES, ShowEpisode } from "./resourcesData";

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface TvShowStageProps {
  initialFilter?: "all" | "webinars";
}

export default function TvShowStage({ initialFilter }: TvShowStageProps) {
  const fullEpisodes = SHOW_EPISODES.filter((ep) => !ep.isShort);
  const shortEpisodes = SHOW_EPISODES.filter((ep) => ep.isShort);
  const webinarEpisodes = SHOW_EPISODES.filter((ep) => ep.isWebinar);

  const [episodeFilter, setEpisodeFilter] = useState<"all" | "webinars">(
    initialFilter === "webinars" ? "webinars" : "all"
  );

  const [activeEpisode, setActiveEpisode] = useState<ShowEpisode>(() => {
    if (initialFilter === "webinars") {
      return webinarEpisodes[0] || fullEpisodes[0];
    }
    return fullEpisodes[0];
  });

  const handleToggleFilter = (filter: "all" | "webinars") => {
    setEpisodeFilter(filter);
    if (filter === "webinars") {
      if (!activeEpisode.isWebinar) {
        setActiveEpisode(webinarEpisodes[0]);
      }
    } else {
      if (activeEpisode.isShort) {
        setActiveEpisode(fullEpisodes[0]);
      }
    }
  };

  // Determine active queue list in player: switches to 5 webinars when webinar filter is active!
  const activeList = activeEpisode.isShort
    ? shortEpisodes
    : episodeFilter === "webinars"
      ? webinarEpisodes
      : fullEpisodes;

  const currentIndex = activeList.findIndex((e) => e.id === activeEpisode.id);

  const queueLabel = activeEpisode.isShort
    ? "SHORT"
    : episodeFilter === "webinars" || activeEpisode.isWebinar
      ? "WEBINAR"
      : "EPISODE";

  const displayedEpisodes =
    episodeFilter === "webinars" ? webinarEpisodes : fullEpisodes;

  const handlePrevEpisode = () => {
    if (currentIndex > 0) {
      setActiveEpisode(activeList[currentIndex - 1]);
    } else {
      setActiveEpisode(activeList[activeList.length - 1]);
    }
  };

  const handleNextEpisode = () => {
    if (currentIndex !== -1 && currentIndex < activeList.length - 1) {
      setActiveEpisode(activeList[currentIndex + 1]);
    } else {
      setActiveEpisode(activeList[0]);
    }
  };

  const handlePlayEpisode = (ep: ShowEpisode) => {
    setActiveEpisode(ep);
    // Smooth scroll only if user is scrolled down past the TV monitor
    const tvEl = document.getElementById("studio-tv-monitor");
    if (tvEl) {
      const rect = tvEl.getBoundingClientRect();
      if (rect.top < -80 || rect.bottom < 150) {
        tvEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn select-none">

      {/* ══════════════════════════════════════════════════════════════════════
          1. CLEAN SOLID TITLE (NO GRADIENT) & CHANNEL ACTION CAPSULE
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
            <Radio className="w-3.5 h-3.5 text-[#FA0F9C] animate-pulse" />
            <span>The Jen GTM Show · Cloud Broadcast Studio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Jen GTM Show
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Real conversations about cloud marketplace GTM, AWS, Azure, and GCP co-sell strategy, field team dynamics, and the execution motions that move ISV pipeline. No frameworks. No theory.
          </p>
        </div>

        {/* Action Capsule: Brand Blue & Pink Tags + Subscribe on YouTube */}
        <div className="rounded-2xl sm:rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] p-2 sm:p-2.5 flex flex-col md:flex-row items-center justify-between gap-3 w-full">
          {/* Left Metadata Tags (Strict Brand Colors Only) */}
          <div className="flex items-center gap-2 flex-wrap pl-2">
            <span className="px-3 py-1 rounded-full bg-sky-50 text-[#008BF8] border border-sky-200/80 text-xs font-bold">
              Co-Sell Strategy
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold">
              AWS · Azure · GCP
            </span>
            <span className="px-3 py-1 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-200/80 text-xs font-bold">
              ISV Scaling
            </span>
          </div>

          {/* Right Brand Pink Pill Button */}
          <Link
            href="https://www.youtube.com/@SaaSNovaGTM"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_16px_rgba(250,15,156,0.32)] hover:shadow-[0_8px_24px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer shrink-0"
          >
            <YouTubeIcon className="w-4 h-4 text-white" />
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          2. TV BROADCAST MONITOR FRAME (Zero-Jitter, Stable Aspect Ratio)
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="studio-tv-monitor" className="relative max-w-4xl mx-auto scroll-mt-28">
        {/* Atmospheric Backlight Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#008BF8]/20 via-[#FA0F9C]/15 to-[#008BF8]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

        {/* TV Hardware Enclosure */}
        <div className="relative bg-slate-950 rounded-3xl p-3 sm:p-5 border-2 border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">

          {/* TV Top Bezel Header Bar */}
          <div className="flex items-center justify-between px-3 py-2.5 mb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-3 min-w-0">
              {/* Glowing ON AIR Lamp (Brand Pink) */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-[#FA0F9C] text-[11px] font-mono font-black tracking-wider uppercase shadow-[0_0_12px_rgba(250,15,156,0.3)] shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#FA0F9C] animate-pulse shadow-[0_0_8px_#FA0F9C]" />
                <span>ON AIR</span>
              </div>
              <span className="text-slate-600 font-mono text-xs shrink-0">|</span>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 truncate">
                <span className={activeEpisode.isShort ? "text-[#FA0F9C]" : "text-[#008BF8]"}>
                  {activeEpisode.isShort ? "⚡ SHORT" : `EP ${activeEpisode.episodeNumber}`}
                </span>
                <span className="text-slate-500 hidden sm:inline">·</span>
                <span className="truncate text-slate-200 hidden sm:inline">
                  {activeEpisode.title}
                </span>
              </div>
            </div>

            <Link
              href={`https://www.youtube.com/watch?v=${activeEpisode.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-[#FA0F9C]" />
              <span className="hidden sm:inline">Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>
          </div>

          {/* TV Display Screen (16:9 Video Canvas - Zero Jitter: no dynamic key unmounting) */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-800/60">
            <iframe
              src={`https://www.youtube.com/embed/${activeEpisode.youtubeId}?autoplay=0&rel=0`}
              title={activeEpisode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 block"
            />
          </div>

          {/* ── ARROW CONTROLLER TO MOVE TO NEXT / PREVIOUS EPISODE ── */}
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 px-2 flex items-center justify-between gap-3">
            {/* Previous Episode Button */}
            <button
              type="button"
              onClick={handlePrevEpisode}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-bold transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 text-[#008BF8] group-hover:-translate-x-0.5 transition-transform" />
              <span>Previous Episode</span>
            </button>

            {/* Episode Tracker Indicator (Dynamically synced: EPISODE 1/8, WEBINAR 1/5, SHORT 1/4) */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400">
              <span className="text-[#008BF8]">
                {currentIndex !== -1 ? `${queueLabel} ${currentIndex + 1}` : "PLAYING"}
              </span>
              <span>/</span>
              <span>{activeList.length}</span>
            </div>

            {/* Next Episode Button */}
            <button
              type="button"
              onClick={handleNextEpisode}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] text-white text-xs font-extrabold shadow-[0_2px_10px_rgba(250,15,156,0.3)] hover:shadow-[0_4px_16px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>Next Episode</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* TV Bottom Shelf Info (Locked Height: Zero Layout Shifts/Jitter) */}
          <div className="mt-3 px-3 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-800/60 min-h-[72px]">
            <div className="space-y-0.5 flex-1 min-w-0">
              <h3 className="font-extrabold text-white text-sm sm:text-base leading-snug truncate">
                {activeEpisode.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-1 max-w-2xl">
                {activeEpisode.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-900 text-slate-300 border border-slate-800">
                {activeEpisode.duration}
              </span>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${activeEpisode.isShort
                ? "bg-pink-950/80 text-[#FA0F9C] border border-pink-800/60"
                : "bg-sky-950/80 text-[#008BF8] border border-sky-800/60"
                }`}>
                {activeEpisode.tag}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          3. SEPARATE DEDICATED SPACE FOR SHORTS & REELS
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-5 rounded-3xl bg-[#070D1E] p-6 sm:p-8 border border-slate-800 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

        {/* Shorts Shelf Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-[#FA0F9C] text-[11px] font-mono font-extrabold uppercase tracking-wider mb-1.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>YouTube Shorts Shelf</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Shorts &amp; Quick Takes
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Fast-paced 60-second execution rules, field snippets, and unfiltered takes from Jen Dawson.
            </p>
          </div>

          <Link
            href="https://www.youtube.com/@SaaSNovaGTM/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition cursor-pointer"
          >
            <YouTubeIcon className="w-3.5 h-3.5 text-[#FA0F9C]" />
            <span>View All Shorts</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>
        </div>

        {/* Vertical Reel Grid (4 Authentic Shorts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shortEpisodes.map((short) => {
            const isPlaying = activeEpisode.id === short.id;

            return (
              <div
                key={short.id}
                className={`group relative rounded-2xl bg-[#0F1923] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${isPlaying
                  ? "border-[#FA0F9C] ring-2 ring-[#FA0F9C]/40 shadow-[0_0_24px_rgba(250,15,156,0.25)] -translate-y-1"
                  : "border-slate-800 hover:border-[#008BF8]/60 hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                {/* ── Vertical Phone Reel Frame ── */}
                <div
                  onClick={() => handlePlayEpisode(short)}
                  className="relative w-full aspect-[9/13] bg-black overflow-hidden cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${short.youtubeId}/hqdefault.jpg`}
                    alt={short.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badges (Brand Pink only) */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] text-white shadow-xs flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" />
                      <span>SHORT</span>
                    </span>
                    {isPlaying && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase bg-[#008BF8] text-white animate-pulse">
                        PLAYING
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/80 text-slate-200 border border-white/10">
                      {short.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-11 h-11 rounded-full bg-white/95 text-slate-900 shadow-xl flex items-center justify-center transform group-hover:scale-110 group-active:scale-95 transition-all">
                      <Play className="w-4 h-4 fill-current text-[#FA0F9C] ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Title Preview */}
                  <div className="absolute bottom-3 inset-x-3 z-10">
                    <span className="text-[10.5px] font-mono font-bold text-[#FA0F9C] block mb-1">
                      {short.tag}
                    </span>
                    <h4 className="text-xs font-extrabold text-white leading-snug line-clamp-2">
                      {short.title}
                    </h4>
                  </div>
                </div>

                {/* Reel Card Footer Action */}
                <div className="p-3 bg-[#0A1017] border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handlePlayEpisode(short)}
                    className="flex-1 py-1.5 px-3 rounded-full text-[11px] font-extrabold text-white bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] hover:opacity-95 transition cursor-pointer text-center"
                  >
                    {isPlaying ? "Playing in TV" : "Play Short"}
                  </button>

                  <Link
                    href={`https://www.youtube.com/watch?v=${short.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white transition"
                    title="Watch on YouTube"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          4. SPACE TO CHOOSE THE EPISODES (Complete Masterclasses Library)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-6">
        {/* Prominent Header & Segmented Controller */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-200/90 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
              <Tv className="w-3.5 h-3.5 text-[#008BF8]" />
              <span>Broadcast Directory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Choose an Episode
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Select any strategy episode or recorded webinar masterclass to broadcast inside the Studio Monitor.
            </p>
          </div>

          {/* Prominent Executive Toggle Switcher (Same Consistent Brand Blue Color for Both) */}
          <div className="p-1.5 rounded-full bg-slate-100/95 border border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)] inline-flex items-center gap-1.5 self-start lg:self-auto">
            {/* Toggle 1: All Episodes */}
            <button
              type="button"
              onClick={() => handleToggleFilter("all")}
              className={`inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${episodeFilter === "all"
                ? "bg-[#008BF8] text-white shadow-[0_4px_16px_rgba(0,139,248,0.35)] -translate-y-0.5"
                : "text-slate-700 hover:text-slate-900 hover:bg-white/70"
                }`}
            >
              <Tv className="w-4 h-4 shrink-0" />
              <span>All Episodes</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-black ${episodeFilter === "all"
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-600"
                  }`}
              >
                {fullEpisodes.length}
              </span>
            </button>

            {/* Toggle 2: Webinars & Masterclasses (SAME Brand Blue Color When Active) */}
            <button
              type="button"
              onClick={() => handleToggleFilter("webinars")}
              className={`inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${episodeFilter === "webinars"
                ? "bg-[#008BF8] text-white shadow-[0_4px_16px_rgba(0,139,248,0.35)] -translate-y-0.5"
                : "text-slate-700 hover:text-slate-900 hover:bg-white/70"
                }`}
            >
              <Video className="w-4 h-4 shrink-0" />
              <span>Webinars &amp; Masterclasses</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-black ${episodeFilter === "webinars"
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-600"
                  }`}
              >
                {webinarEpisodes.length}
              </span>
            </button>
          </div>
        </div>

        {/* 3-Column Episode Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedEpisodes.map((ep) => {
            const isPlaying = activeEpisode.id === ep.id;

            return (
              <div
                key={ep.id}
                className={`group relative rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white ${isPlaying
                  ? "ring-2 ring-[#008BF8] border-[#008BF8] shadow-[0_0_24px_rgba(0,139,248,0.2)] -translate-y-1"
                  : "border-slate-200/90 text-slate-900 hover:border-[#008BF8]/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:-translate-y-1"
                  }`}
              >
                {/* ── Card Thumbnail & Video Header ── */}
                <div
                  onClick={() => handlePlayEpisode(ep)}
                  className="relative w-full aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                    alt={ep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#008BF8] border border-[#008BF8]/30">
                      EP {ep.episodeNumber}
                    </span>

                    {ep.isWebinar && (
                      <span className="px-2 py-0.5 rounded-full text-[9.5px] font-mono font-bold uppercase tracking-wider bg-pink-50 text-[#FA0F9C] border border-pink-200">
                        WEBINAR
                      </span>
                    )}

                    {isPlaying && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-[#008BF8] text-white shadow-[0_0_8px_#008BF8] animate-pulse">
                        PLAYING
                      </span>
                    )}
                  </div>

                  {/* Top-Right Duration Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-black/75 backdrop-blur-md text-slate-300 border border-white/10">
                      {ep.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-slate-900 shadow-xl flex items-center justify-center transform group-hover:scale-110 group-active:scale-95 transition-all">
                      <Play className="w-5 h-5 fill-current text-[#FA0F9C] ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* ── Card Content Body ── */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                        {ep.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold tracking-tight leading-snug line-clamp-2 text-slate-900 group-hover:text-[#008BF8] transition-colors">
                      {ep.title}
                    </h4>

                    <p className="text-xs leading-relaxed line-clamp-2 text-slate-600">
                      {ep.description}
                    </p>
                  </div>

                  {/* ── Card Action Footer ── */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    {/* Brand Pink Pill Button */}
                    <button
                      type="button"
                      onClick={() => handlePlayEpisode(ep)}
                      className="rounded-full px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_14px_rgba(250,15,156,0.28)] hover:shadow-[0_8px_20px_rgba(250,15,156,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isPlaying ? "Playing Now" : "Play in Studio"}</span>
                    </button>

                    {/* Secondary Link: Watch on YouTube */}
                    <Link
                      href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold inline-flex items-center gap-1 text-slate-500 hover:text-[#008BF8] transition-colors cursor-pointer"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
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
