"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Tv,
  BarChart3,
  Video,
  Calendar,
  Newspaper,
  Mail,
  Sparkles,
  ArrowRight,
  Radio,
} from "lucide-react";
import { ResourceView } from "./resourcesData";

interface ResourceStudioSwitcherProps {
  activeView: ResourceView;
  onViewChange: (view: ResourceView) => void;
  variant?: "horizontal" | "sidebar";
}

interface SwitcherItem {
  id: ResourceView;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

const SWITCHER_ITEMS: SwitcherItem[] = [
  {
    id: "blog",
    label: "Blog",
    sublabel: "Practitioner Playbooks",
    icon: BookOpen,
  },
  {
    id: "show",
    label: "The Jen GTM Show",
    sublabel: "Cloud Broadcast Studio",
    icon: Tv,
  },
  {
    id: "case-studies",
    label: "Case Studies",
    sublabel: "Attributable Evidence",
    icon: BarChart3,
  },
  {
    id: "events",
    label: "Events",
    sublabel: "VIP Dinners & Summits",
    icon: Calendar,
  },
  {
    id: "news",
    label: "News & Press",
    sublabel: "Press & Media Wires",
    icon: Newspaper,
  },
  {
    id: "newsletter",
    label: "The Nova Brief",
    sublabel: "Weekly Cloud Dispatch",
    icon: Mail,
  },
];

export default function ResourceStudioSwitcher({
  activeView,
  onViewChange,
  variant = "horizontal",
}: ResourceStudioSwitcherProps) {
  // ── 1. HORIZONTAL DOCK (For Mobile / Tablet) ──
  if (variant === "horizontal") {
    return (
      <div className="w-full">
        <div className="bg-slate-100/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/90 shadow-inner flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {SWITCHER_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onViewChange(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 select-none ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/90 -translate-y-0.5"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isActive ? "text-[#008BF8]" : "text-slate-400"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── 2. STUDIO COMMAND SIDEBAR (Sticky Left Console for Desktop) ──
  return (
    <div className="w-full space-y-4 select-none">
      {/* Console Frame */}
      <div className="bg-slate-50/90 backdrop-blur-md rounded-3xl p-3 border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05),inset_0_1px_0_#fff]">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-3 pt-2 pb-3 mb-1 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#008BF8]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-800">
              Studio Console
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500 shadow-xs">
            CHANNELS
          </span>
        </div>

        {/* Vertical Channel Items */}
        <nav className="space-y-1 pt-1" aria-label="Resource channels">
          {SWITCHER_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onViewChange(item.id)}
                className={`relative w-full text-left flex items-center justify-between p-2.5 rounded-2xl transition-all duration-200 cursor-pointer group ${
                  isActive
                    ? "bg-white shadow-[0_4px_16px_rgba(0,139,248,0.12),inset_0_1px_0_#fff] border border-sky-200/90 text-slate-900"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60 border border-transparent"
                }`}
              >
                {/* Active Left Gradient Line */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2.5 bottom-2.5 w-1 rounded-r-full bg-gradient-to-b from-[#008BF8] to-[#FA0F9C]"
                  />
                )}

                <div className="flex items-center gap-3 min-w-0 pl-1">
                  {/* Icon Box */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-sky-50 text-[#008BF8] border border-sky-200/80 shadow-xs"
                        : "bg-white text-slate-400 border border-slate-200/70 group-hover:text-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Labels */}
                  <div className="min-w-0">
                    <div
                      className={`text-[13px] font-bold leading-tight truncate ${
                        isActive ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 truncate leading-snug">
                      {item.sublabel}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-slate-400 group-hover:text-slate-700 transition-colors">
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive
                        ? "text-[#008BF8] translate-x-0.5"
                        : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mini Co-Sell Strategy Callout Card */}
      <div className="relative overflow-hidden rounded-3xl p-4 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 border border-sky-200/80 shadow-[0_4px_16px_rgba(0,139,248,0.06)]">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#008BF8]" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800">
            Co-Sell Acceleration
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          Want personalized cloud marketplace listing & co-sell enablement?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-900 shadow-xs hover:border-[#008BF8]/40 transition group"
        >
          <span>Book Strategy Call</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#008BF8] group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
