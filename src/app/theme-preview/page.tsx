"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

interface ThemeOption {
  id: string;
  name: string;
  category: string;
  description: string;
  bgHex: string;
  surfaceHex: string;
  cardBorder: string;
  textPrimary: string;
  textMuted: string;
  tagBg: string;
  previewClass: string;
}

const THEMES: ThemeOption[] = [
  {
    id: "executive-slate",
    name: "Option 1: Executive Slate / Deep Steel",
    category: "Dark-Neutral Middle Ground (Linear / Vercel style)",
    description: "A rich charcoal-slate with balanced graphite tint. Not pure pitch-black, zero OLED harshness, highly readable for B2B enterprise.",
    bgHex: "#141A29",
    surfaceHex: "rgba(30, 41, 59, 0.7)",
    cardBorder: "rgba(148, 163, 184, 0.2)",
    textPrimary: "#F8FAFC",
    textMuted: "#94A3B8",
    tagBg: "rgba(0, 139, 248, 0.15)",
    previewClass: "bg-[#141A29]",
  },
  {
    id: "aurora-indigo",
    name: "Option 2: Deep Indigo Navy",
    category: "Cloud Hyperscaler Middle Ground (AWS / Azure style)",
    description: "Deep oceanic navy with vibrant blue and cyan ambient glows. Keeps the cloud identity strong while feeling soft and illuminated.",
    bgHex: "#101B33",
    surfaceHex: "rgba(22, 36, 68, 0.75)",
    cardBorder: "rgba(0, 139, 248, 0.25)",
    textPrimary: "#FFFFFF",
    textMuted: "#A5B4FC",
    tagBg: "rgba(250, 15, 156, 0.15)",
    previewClass: "bg-[#101B33]",
  },
  {
    id: "frost-titanium",
    name: "Option 3: Modern Frosted Titanium (Soft Light-Dark Hybrid)",
    category: "Cool Grey-Blue Hybrid (Stripe / Apple Pro style)",
    description: "A medium-light metallic canvas (#E2E8F0 / #CBD5E1 background tone) with dark charcoal text and crisp frosted glass cards.",
    bgHex: "#1A2234",
    surfaceHex: "rgba(36, 47, 72, 0.8)",
    cardBorder: "rgba(255, 255, 255, 0.18)",
    textPrimary: "#FFFFFF",
    textMuted: "#94A3B8",
    tagBg: "rgba(241, 153, 83, 0.15)",
    previewClass: "bg-[#1A2234]",
  },
  {
    id: "clean-slate-light",
    name: "Option 4: Elegant Off-White / Soft Cloud (Warm Light Mode)",
    category: "Premium Modern Light (Not harsh sterile white)",
    description: "Warm alabaster / cloud mist (#F4F6F9) with rich navy typography and subtle glass borders, completely eliminating pure blinding white.",
    bgHex: "#F1F5F9",
    surfaceHex: "rgba(255, 255, 255, 0.9)",
    cardBorder: "rgba(15, 23, 42, 0.12)",
    textPrimary: "#0F172A",
    textMuted: "#475569",
    tagBg: "rgba(0, 139, 248, 0.1)",
    previewClass: "bg-[#F1F5F9] text-[#0F172A]",
  },
];

export default function ThemePreviewPage() {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0].id);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 inline-block mb-3">
          Design System Calibration
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Choose Your Preferred Background Tone
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Here are 4 curated middle-ground palettes ranging from soft dark slate to warm alabaster. Compare how they feel with SaaSNova’s electric accents and pick your favorite.
        </p>
      </div>

      {/* Palette Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {THEMES.map((theme) => {
          const isSelected = selectedTheme === theme.id;
          const isLight = theme.id === "clean-slate-light";

          return (
            <div
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 border-2 relative flex flex-col justify-between ${
                isSelected 
                  ? "border-pink-500 shadow-2xl shadow-pink-500/20 scale-[1.01]" 
                  : "border-white/10 hover:border-white/30 hover:scale-[1.005]"
              }`}
              style={{ backgroundColor: theme.bgHex }}
            >
              {/* Selected Badge */}
              {isSelected && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-bold shadow-lg">
                  <Check className="w-3.5 h-3.5" /> Selected
                </div>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                  {theme.category}
                </div>
                <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 ${isLight ? "text-slate-900" : "text-white"}`}>
                  {theme.name}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                  {theme.description}
                </p>

                {/* Live Card Mockup inside the theme */}
                <div 
                  className="rounded-2xl p-5 border backdrop-blur-xl mb-6"
                  style={{ 
                    backgroundColor: theme.surfaceHex,
                    borderColor: theme.cardBorder
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                      style={{ 
                        backgroundColor: theme.tagBg, 
                        color: isLight ? "#0070c9" : "#38bdf8" 
                      }}
                    >
                      Sample Component
                    </span>
                    <span className="text-[11px] font-semibold" style={{ color: theme.textMuted }}>
                      AWS · Azure · GCP
                    </span>
                  </div>

                  <h4 className="text-base font-bold mb-1.5" style={{ color: theme.textPrimary }}>
                    Turn Cloud Marketplaces into Revenue
                  </h4>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                    Eliminate months of trial-and-error with seasoned operator-led execution.
                  </p>

                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-sky-500 text-white text-xs font-bold shadow-md">
                      Book Session
                    </button>
                    <button 
                      className="px-4 py-2 rounded-xl border text-xs font-semibold"
                      style={{ 
                        borderColor: theme.cardBorder, 
                        color: theme.textPrimary 
                      }}
                    >
                      Explore Programs
                    </button>
                  </div>
                </div>
              </div>

              {/* Color Swatch Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.bgHex }}></span>
                  <span className="font-mono text-[11px]" style={{ color: isLight ? "#334155" : "#cbd5e1" }}>
                    Canvas: {theme.bgHex}
                  </span>
                </div>
                <span className="text-[11px] font-semibold" style={{ color: isLight ? "#64748b" : "#94a3b8" }}>
                  Click to select
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Confirmation Box */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-xl mx-auto">
        <p className="text-sm text-slate-300 mb-3">
          Which option fits best? Once chosen, we will apply it globally to the entire layout, cards, and navigation.
        </p>
        <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/30">
          Current choice: <strong>{THEMES.find(t => t.id === selectedTheme)?.name}</strong>
        </span>
      </div>

    </div>
  );
}
