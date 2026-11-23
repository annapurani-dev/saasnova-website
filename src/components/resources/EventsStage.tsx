"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  Ticket,
  Users,
  Video,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { EVENTS } from "./resourcesData";

export default function EventsStage() {
  const upcomingEvent = EVENTS.find((e) => e.isUpcoming) || EVENTS[0];
  const pastEvents = EVENTS.filter((e) => !e.isUpcoming);

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* ── Section Header (Exact from Live Site) ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/90 pb-5 max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-[#FA0F9C] bg-pink-50 border border-pink-100 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA0F9C]" />
              COMMUNITY &amp; ECOSYSTEM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Events &amp; Summits
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-normal leading-relaxed">
            Where SaaSNova connects in-person with founders, hyperscaler leaders, and cloud alliance executives.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>3 Event Appearances</span>
        </div>
      </div>

      {/* ── 1. FLAGSHIP HERO: THE EXECUTIVE VIP DINNER PASS (Las Vegas) ── */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 8 Cols: Main VIP Pass Details + Atmospheric Photo */}
            <div className="lg:col-span-8 p-6 sm:p-9 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Badge Strip */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-[#070D1E] text-white border border-slate-800 shadow-2xs">
                    {upcomingEvent.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-300">·</span>
                  <span className="text-xs font-mono font-bold text-[#008BF8] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{upcomingEvent.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  {upcomingEvent.title}
                </h3>

                {/* Venue Details */}
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-mono">
                  <MapPin className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800 leading-snug">
                    {upcomingEvent.venue}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {upcomingEvent.description}
                </p>
              </div>

              {/* High-Resolution Venue Visual Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-inner group">
                <img
                  src={upcomingEvent.image || "/images/rpm-italian-las-vegas.jpg"}
                  alt={upcomingEvent.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="font-bold">RPM Italian · Forum Shops at Caesars Palace</span>
                  <span className="text-slate-300">{upcomingEvent.location}</span>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Perforated VIP Ticket Stub (RSVP Desk) */}
            <div className="lg:col-span-4 bg-slate-50/80 border-t lg:border-t-0 lg:border-l-2 lg:border-dashed border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative">
              {/* Notch Cutouts for Ticket Perforation Effect */}
              <div className="hidden lg:block absolute -top-3 -left-3 w-6 h-6 rounded-full bg-slate-100 border border-slate-200" />
              <div className="hidden lg:block absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-slate-100 border border-slate-200" />

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FA0F9C]">
                    VIP ADMISSION PASS
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 font-bold">
                    #SN-LV-709
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">GUEST STATUS</div>
                    <div className="font-bold text-slate-900">Executive Founder / VP Alliances</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">EVENT TIME</div>
                    <div className="font-bold text-slate-900">Tuesday, Dec 1 · 7:00–9:00 PM</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">LOCATION</div>
                    <div className="font-bold text-slate-900">Las Vegas, NV</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-100 text-slate-700 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FA0F9C] animate-pulse shrink-0" />
                  <span className="font-semibold leading-tight text-[11px]">
                    Strictly Limited Space · Manual Approval Required
                  </span>
                </div>
              </div>

              {/* Action Button: Signature Brand Pink Pill */}
              <div className="pt-2">
                <Link
                  href={upcomingEvent.rsvpUrl || "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-xs !text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Ticket className="w-4 h-4" />
                  <span>{upcomingEvent.ctaText || "Request Your Spot"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. RECENT ECOSYSTEM SUMMITS & KEYNOTES ── */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            Recent Ecosystem Appearances &amp; Keynotes
          </h3>
          <span className="text-xs font-mono text-slate-400">Archived Field Dispatches</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pastEvents.map((pe) => (
            <div
              key={pe.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Banner */}
                {pe.image ? (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                    <img
                      src={pe.image}
                      alt={pe.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#070D1E] text-white border border-white/20 shadow-2xs">
                        {pe.tag}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-28 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-[#0F1923] p-4 flex items-start justify-between text-white border-b border-slate-100">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                      {pe.tag}
                    </span>
                    <Video className="w-5 h-5 text-sky-400" />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#008BF8]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pe.date}</span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900 leading-snug">
                    {pe.title}
                  </h4>

                  <div className="flex items-start gap-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{pe.venue}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pe.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 pt-4 flex items-center justify-between">
                {pe.externalLink ? (
                  <Link
                    href={pe.externalLink}
                    target={pe.externalLink.startsWith("http") ? "_blank" : undefined}
                    rel={pe.externalLink.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-xs font-bold text-[#008BF8] hover:text-[#0070c7] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>{pe.ctaText || "View Dispatch"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-xs font-semibold text-slate-400">
                    Field Appearance
                  </span>
                )}

                <span className="text-[10px] font-mono text-slate-400 font-medium">
                  {pe.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
