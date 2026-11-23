"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, Radio, ExternalLink, ArrowRight, Calendar, MapPin } from "lucide-react";
import { NEWS_ITEMS, NewsItem } from "./resourcesData";

export default function NewsStage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = NEWS_ITEMS.filter((item) => {
    if (filter === "all") return true;
    if (filter === "press-release") return item.category.toLowerCase().includes("press");
    if (filter === "partnerships") return item.category.toLowerCase().includes("partner");
    return true;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200/90 pb-3">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === "all"
              ? "bg-[#008BF8] text-white shadow-xs font-bold"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          All News ({NEWS_ITEMS.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("press-release")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === "press-release"
              ? "bg-[#008BF8] text-white shadow-xs font-bold"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          Press Releases
        </button>
        <button
          type="button"
          onClick={() => setFilter("partnerships")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === "partnerships"
              ? "bg-[#008BF8] text-white shadow-xs font-bold"
              : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          Partnerships
        </button>
      </div>

      {/* News Releases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-pink-300 transition-all duration-200 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={280}
                  height={120}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold uppercase tracking-wider bg-pink-50 text-[#FA0F9C] border border-pink-100">
                    {item.category}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                {item.date} · {item.location}
              </span>

              {item.isExternal ? (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA0F9C] hover:text-[#E60085]"
                >
                  <span>Read Release</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  href={item.url}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008BF8] hover:text-sky-700"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
