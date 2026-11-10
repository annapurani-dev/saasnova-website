"use client";

import Image from "next/image";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";
import TiltCard from "@/components/TiltCard";

export default function HeroFloat() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[620px] animate-rise animate-rise-delay-3 lg:ml-auto lg:mr-0">
      {/* ── Ambient Vibrant Glow Aura Behind Card ── */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#008BF8]/50 via-[#7C3AED]/40 to-[#FA0F9C]/50 blur-2xl opacity-80" />
      <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#FA0F9C]/40 blur-3xl" />
      <div className="absolute -left-8 -bottom-8 h-48 w-48 rounded-full bg-[#008BF8]/40 blur-3xl" />

      {/* ── Main Glassmorphic Split Container with 3D Extruded Depth & Tilt ── */}
      <TiltCard variant="light" intensity={7} className="overflow-hidden rounded-[2rem] p-4 sm:p-5">
        {/* Prismatic Top Rim Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 via-pink-400/90 to-transparent" />

        {/* Card Header: Founder / Operator Info */}
        <div className="mb-3 flex items-center justify-between px-1.5 pt-0.5">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#008BF8] to-[#FA0F9C] p-[1.5px] shadow-sm">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-white font-bold text-xs">
                JD
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-sm font-bold text-slate-900">
                  Jen Dawson
                </span>
                <span className="rounded-full bg-pink-500/10 px-2 py-0.5 text-[9.5px] font-extrabold text-pink-600 ring-1 ring-pink-500/20">
                  Founder &amp; CEO
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">
                Former Global GTM Lead at AWS
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-pink-500" />
            <span>Why SaaSNova Exists</span>
          </div>
        </div>

        {/* ── Video Player Frame ── */}
        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/60 bg-slate-950 shadow-inner">
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/x75hrIBKPj8?autoplay=1&rel=0&modestbranding=1"
              title="Why SaaSNova Exists: Execution-Led GTM for Cloud"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative h-full w-full cursor-pointer select-none"
            >
              {/* Fallback Poster Background with Jen Dawson & Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-sky-500/15 to-transparent" />
                <div className="absolute inset-0 bg-grid-checks-dark opacity-40" />
              </div>

              {/* Founder Video Title Overlay */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5 z-10 bg-gradient-to-b from-slate-950/80 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white drop-shadow">
                    Executive Briefing
                  </span>
                </div>
                <span className="rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-300 backdrop-blur-sm">
                  3:45
                </span>
              </div>

              {/* Centered Large Glowing Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10">
                <button
                  type="button"
                  aria-label="Play Founder Video"
                  className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#008BF8] via-[#7C3AED] to-[#FA0F9C] p-[2.5px] shadow-[0_0_35px_rgba(250,15,156,0.6)] transition-all duration-300 group-hover:scale-110"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#008BF8] to-[#FA0F9C] opacity-60 blur-md group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-slate-900 transition-colors group-hover:bg-slate-50">
                    <Play className="h-6 w-6 translate-x-0.5 fill-[#FA0F9C] text-[#FA0F9C]" />
                  </div>
                </button>
                <span className="text-xs font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Watch Why SaaSNova Exists
                </span>
              </div>

              {/* Bottom Video Subtitle Strip */}
              <div className="absolute inset-x-0 bottom-0 p-3 z-10 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
                <p className="text-[11px] font-medium text-slate-300 line-clamp-1">
                  &ldquo;This isn&apos;t a marketplace problem. It&apos;s an execution problem across the cloud motion.&rdquo;
                </p>
              </div>
            </div>
          )}
        </div>
      </TiltCard>
    </div>
  );
}

