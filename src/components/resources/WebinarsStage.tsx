"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Video, CheckCircle2, ExternalLink, Clock } from "lucide-react";
import { WEBINARS, WebinarItem } from "./resourcesData";

export default function WebinarsStage() {
  const [activeWebinar, setActiveWebinar] = useState<WebinarItem>(WEBINARS[0]);

  return (
    <div className="space-y-10">

      {/* Featured Masterclass Video Screen */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-950 border-2 border-slate-800 shadow-2xl">
          <iframe
            key={activeWebinar.id}
            src={`https://www.youtube.com/embed/${activeWebinar.youtubeId}?rel=0`}
            title={activeWebinar.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-50 text-[#008BF8] border border-sky-200/80">
              {activeWebinar.tag}
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {activeWebinar.duration}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {activeWebinar.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {activeWebinar.description}
          </p>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Key Session Takeaways:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {activeWebinar.keyTakeaways.map((point, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Sessions Grid */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h4 className="text-lg font-black text-slate-900 tracking-tight border-b border-slate-200/90 pb-2">
          All Masterclass Sessions ({WEBINARS.length})
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WEBINARS.map((w) => {
            const isSelected = activeWebinar.id === w.id;
            return (
              <button
                key={w.id}
                type="button"
                onClick={() => {
                  setActiveWebinar(w);
                  window.scrollTo({ top: 220, behavior: "smooth" });
                }}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 text-white border-[#008BF8] shadow-md ring-2 ring-[#008BF8]/30"
                    : "bg-white text-slate-900 border-slate-200/90 hover:border-sky-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10.5px] font-mono font-bold uppercase tracking-wider ${isSelected ? "text-[#008BF8]" : "text-slate-400"}`}>
                      {w.tag}
                    </span>
                    <span className={`text-[10px] font-mono ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
                      {w.duration}
                    </span>
                  </div>

                  <h5 className={`font-extrabold text-sm leading-snug mb-2 ${isSelected ? "text-white" : "text-slate-900"}`}>
                    {w.title}
                  </h5>

                  <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? "text-slate-300" : "text-slate-600"}`}>
                    {w.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100/10 flex items-center justify-between">
                  <span className={`text-[11px] font-medium ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
                    {w.speaker}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? "bg-[#008BF8] text-white" : "bg-slate-100 text-slate-600"}`}>
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
