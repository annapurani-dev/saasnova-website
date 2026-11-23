"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";
import { NEWSLETTER_PILLARS } from "./resourcesData";

export default function NewsletterStage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">

      {/* Main Pitch Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border border-slate-800 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
            The Nova Brief
          </span>

          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Cloud GTM intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008BF8] to-[#FA0F9C]">
              Without the noise.
            </span>
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            The weekly signal for ISV leaders and cloud alliances teams. Co-sell strategy, field motion intelligence, and marketplace execution across AWS, Azure, and GCP, from Jen Dawson.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="max-w-md mx-auto pt-2">
          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-white/10 border border-emerald-400/40 text-center space-y-2 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-extrabold text-white">You&apos;re Subscribed!</h4>
              <p className="text-xs text-slate-300">
                Welcome to The Nova Brief. You will receive the next weekly briefing in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008BF8]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-xs active:scale-95 transition-all cursor-pointer whitespace-nowrap disabled:opacity-70"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Free"}
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* 3 Weekly Signal Tracks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {NEWSLETTER_PILLARS.map((pillar, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
          >
            <span
              className={`inline-block px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold uppercase tracking-wider border ${pillar.accent}`}
            >
              Track {idx + 1}
            </span>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
              {pillar.title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
