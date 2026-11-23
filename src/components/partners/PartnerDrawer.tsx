"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ExternalLink,
  Calendar,
  Clock,
  Radio,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";
import { PartnerDossier } from "./partnersData";

interface PartnerDrawerProps {
  partner: PartnerDossier | null;
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const INVITATION_OPTIONS = [
  "GTM Speaking Opportunities",
  "ISV Advisory Panels",
  "Co-Sell Deal Desk & Enablement",
  "Marketplace Activation Workshops",
  "Ecosystem Networking Events",
];

export default function PartnerDrawer({
  partner,
  isOpen,
  onClose,
}: PartnerDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // SME Hyperscaler Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [division, setDivision] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [selectedInvites, setSelectedInvites] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock Body Scroll & Mark Drawer Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-drawer-open", "true");
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-drawer-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-drawer-open");
    };
  }, [isOpen]);

  // Reset form when partner changes
  useEffect(() => {
    if (partner) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setJobTitle("");
      setDivision("");
      setOfficeLocation("");
      setReferralSource("");
      setSelectedInvites([]);
      setMessage("");
      setConsent(false);
    }
  }, [partner?.id]);

  if (!partner) return null;

  const isHyperscaler =
    partner.drawerType === "hyperscaler-sme" || partner.category === "cloud-gtm";

  const toggleInvite = (opt: string) => {
    setSelectedInvites((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 lg:p-8 transition-opacity duration-200 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      {/* Clickable Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity"
      />

      {/* Floating Modal on Top of Page */}
      <div
        ref={drawerRef}
        className={`relative w-full max-w-5xl xl:max-w-6xl max-h-[92vh] rounded-3xl shadow-[0_25px_80px_-12px_rgba(15,23,42,0.4),0_0_0_1px_rgba(15,23,42,0.08)] flex flex-col z-10 overflow-hidden transform transition-all duration-200 ease-out ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Universal Architectural Grid Checks & Brand Ambient Gradient Glows inside Modal */}
        <div className="absolute inset-0 bg-white -z-20" />
        <div className="absolute -top-[12%] -left-[10%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#008BF8]/16 via-[#008BF8]/6 to-transparent blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-[5%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#FA0F9C]/14 via-[#FA0F9C]/5 to-transparent blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] -left-[10%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#008BF8]/14 via-[#008BF8]/5 to-transparent blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-[55%] -right-[10%] w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/14 via-[#FA0F9C]/5 to-transparent blur-[120px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-grid-checks opacity-70 pointer-events-none -z-10" />

        {/* Top Minimal Sticky Header Bar with Close X Button */}
        <div className="shrink-0 px-6 sm:px-8 py-3.5 border-b border-slate-200/80 bg-white/90 backdrop-blur-md flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Partner Details</span>
            <span className="text-xs text-slate-300">/</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900">{partner.name}</span>
          </div>

          {/* Top-Right Just X Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs hover:scale-105 active:scale-95 border border-slate-200/80"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

            {/* 1. CLEAN INSIDE HERO (Matching Live Site) */}
            <div
              className="relative overflow-hidden rounded-3xl border border-sky-200/90 p-6 sm:p-8 lg:p-10 shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
              }}
            >
              {/* Subtle Architectural Checks inside Hero */}
              <div className="absolute inset-0 bg-grid-checks opacity-50 pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Duo-Brand Logo Lockup: SaaSNova × Partner Logo (Identical to Live Site) */}
                <div className="flex items-center gap-3.5">
                  <div className="bg-white rounded-xl h-14 w-28 sm:h-16 sm:w-36 p-2.5 flex items-center justify-center shadow-xs border border-sky-100">
                    <Image
                      src="/logo-color.png"
                      alt="SaaSNova"
                      width={120}
                      height={40}
                      className="max-h-8 max-w-full object-contain"
                    />
                  </div>
                  <span className="text-slate-400 font-light text-2xl">×</span>
                  <div className="bg-white rounded-xl h-14 w-28 sm:h-16 sm:w-36 p-2.5 flex items-center justify-center shadow-xs border border-sky-100">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="max-h-8 max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Hero Title & Subtitle */}
                <div className="space-y-2.5">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                    {partner.drawerTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-3xl">
                    {partner.drawerSubtitle}
                  </p>
                </div>

                {/* Clean Hero Action Buttons */}
                {!isHyperscaler && (
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <Link
                      href={partner.primaryCtaUrl || CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-[0_4px_16px_rgba(250,15,156,0.35)] transition-all flex items-center gap-2 cursor-pointer select-none active:scale-[0.98]"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{partner.primaryCtaLabel || "Book a 30-min Execution Strategy Session"}</span>
                    </Link>

                    {partner.partnerWebsiteUrl && (
                      <Link
                        href={partner.partnerWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs transition-colors flex items-center gap-2"
                      >
                        <span>{partner.partnerWebsiteLabel || `Visit ${partner.name}`}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* 2. WHAT ISVs GET (Word-to-Word from Live Site) */}
            {partner.whatIsvsGetTitle && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-3">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                  What ISVs Get
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {partner.whatIsvsGetTitle}
                </h4>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  {partner.whatIsvsGetDescription}
                </p>
                {partner.id === "saasify" && (
                  <p className="text-xs text-slate-400 italic pt-1">
                    — Manesh Raveendran, CEO &amp; Founder, SaaSify
                  </p>
                )}
              </div>
            )}

            {/* 3. WHY TOGETHER (Word-to-Word from Live Site) */}
            {partner.whyTogetherPillars && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-5">
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {partner.whyTogetherHeading || "Why Together"}
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                    {partner.whyTogetherSubheading}
                  </h4>
                  {partner.whyTogetherDescription && (
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {partner.whyTogetherDescription}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {partner.whyTogetherPillars.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2 hover:border-sky-300 transition-colors"
                    >
                      <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                        {p.title}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. PARTNERSHIP VIDEO EMBED (Workspan / Pronix) */}
            {partner.videoEmbedUrl && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="text-center space-y-1.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                    Partnership in Action
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">
                    {partner.partnershipActionTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                    {partner.partnershipActionDescription}
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 shadow-md">
                  <iframe
                    src={partner.videoEmbedUrl}
                    title={partner.partnershipActionTitle || "Partnership Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                {partner.videoCaption && (
                  <p className="text-center text-xs text-slate-400">
                    {partner.videoCaption}
                  </p>
                )}
              </div>
            )}

            {/* 5. ANNOUNCED JOINT STARTER BUNDLE (SaaSify) */}
            {partner.announcedBundle && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-50/80 via-white to-blue-50/40 border border-sky-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-[#008BF8] text-white shadow-2xs">
                    {partner.announcedBundle.badge}
                  </span>
                  <Link
                    href={partner.announcedBundle.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008BF8] hover:text-sky-700 underline underline-offset-4"
                  >
                    <span>{partner.announcedBundle.linkLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    {partner.announcedBundle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                    {partner.announcedBundle.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-sky-100">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {partner.announcedBundle.deliverablesTitle}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {partner.announcedBundle.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white border border-sky-100 shadow-2xs space-y-1.5"
                      >
                        <div className="text-xs sm:text-[13px] font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8]" />
                          <span>{d.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {d.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 6. IN THE NEWS · PRESS RELEASE (EIN Presswire) */}
            {partner.pressRelease && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#FA0F9C]" />
                  <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold uppercase tracking-wider bg-pink-50 text-[#FA0F9C] border border-pink-100">
                    {partner.pressRelease.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {partner.pressRelease.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                    {partner.pressRelease.description}
                  </p>
                </div>
                <div className="pt-1">
                  <Link
                    href={partner.pressRelease.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-2xs transition-colors"
                  >
                    <span>{partner.pressRelease.linkLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 7. URGENT PRM ADVISORY & IMPLEMENTATION BOOKING (SaaSify) */}
            {partner.urgentAdvisory && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white border-2 border-amber-300 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-amber-200 text-amber-900 font-bold">
                    {partner.urgentAdvisory.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {partner.urgentAdvisory.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1.5">
                    {partner.urgentAdvisory.description}
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-amber-200 shadow-2xs space-y-2.5">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900">
                    {partner.urgentAdvisory.checklistTitle}
                  </div>
                  <ul className="space-y-2">
                    {partner.urgentAdvisory.checklistItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-amber-200/70">
                  <span className="text-xs font-semibold text-slate-600 italic">
                    {partner.urgentAdvisory.closingNote}
                  </span>
                  <Link
                    href={partner.urgentAdvisory.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-2xs transition-colors shrink-0"
                  >
                    <span>{partner.urgentAdvisory.ctaText}</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 8. ACTIVATING AWS MARKETPLACE STOREFRONT (Carahsoft) */}
            {partner.storefrontFeature && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-pink-50/60 via-rose-50/20 to-white border border-pink-200/80 shadow-2xs space-y-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-[#FA0F9C] text-white shadow-2xs">
                  {partner.storefrontFeature.badge}
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  {partner.storefrontFeature.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {partner.storefrontFeature.description}
                </p>
                <div className="space-y-2.5 pt-2 border-t border-pink-100">
                  {partner.storefrontFeature.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FA0F9C] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. EXECUTIVE QUOTE (Carahsoft Adam Mahn) */}
            {partner.quote && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-4">
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &ldquo;{partner.quote.text}&rdquo;
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-[#E3000F] font-extrabold text-xs flex items-center justify-center shrink-0 border border-rose-200">
                    {partner.quote.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {partner.quote.author}
                    </div>
                    <div className="text-[11.5px] sm:text-xs text-slate-500 font-medium">
                      {partner.quote.role} · {partner.quote.company}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 10. PUBLIC SECTOR CONTRACT VEHICLES (Carahsoft) */}
            {partner.vehicles && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#FA0F9C]" />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Pre-Competed Contract Vehicles Available
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {partner.vehicles.map((v, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-pink-50 text-[#FA0F9C] border border-pink-200/80 shadow-2xs"
                    >
                      ✓ {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 11. CLOSING CALL TO ACTION PLINTH (Strategic Alliances) */}
            {!isHyperscaler && (
              <div className="rounded-3xl bg-white/95 border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center space-y-5">
                <div className="space-y-2 max-w-xl mx-auto">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Ready to Activate with {partner.name}?
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {partner.closingPitch ||
                      `Schedule a 30-minute joint execution session to review technical architecture, package deliverables, and cloud marketplace co-sell timelines.`}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
                  <Link
                    href={partner.primaryCtaUrl || CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-[0_4px_20px_rgba(250,15,156,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{partner.primaryCtaLabel || "Book a 30-min Execution Strategy Session"}</span>
                  </Link>

                  {partner.partnerWebsiteUrl && (
                    <Link
                      href={partner.partnerWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{partner.partnerWebsiteLabel || `Visit ${partner.name}`}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* 12. HYPERSCALER FORM (AWS, Azure, GCP only) */}
            {isHyperscaler && (
              <div className="bg-white/95 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      SME Registration Received
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                      Thank you, <strong className="text-slate-900">{firstName} {lastName}</strong>. Our Alliance Lead for <strong className="text-slate-900">{partner.name}</strong> will connect directly via <span className="underline font-semibold text-slate-800">{email}</span> within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                    <div className="border-b border-slate-100 pb-3">
                      <h4 className="text-lg font-extrabold text-slate-900">
                        {partner.name} Field SME Registration Form
                      </h4>
                      <p className="mt-1 text-xs text-slate-500">
                        Exclusively for corporate field sales reps, solution architects, and partner leads.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First name"
                          className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last name"
                          className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={partner.formConfig.emailPlaceholder || "alias@company.com"}
                        className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          placeholder="e.g. Senior PDM"
                          className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Division / Org *
                        </label>
                        <input
                          type="text"
                          required
                          value={division}
                          onChange={(e) => setDivision(e.target.value)}
                          placeholder="e.g. Enterprise Commercial"
                          className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Office Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={officeLocation}
                        onChange={(e) => setOfficeLocation(e.target.value)}
                        placeholder="e.g. Seattle, WA / New York, NY"
                        className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        How did you hear about SaaSNova? *
                      </label>
                      <select
                        required
                        value={referralSource}
                        onChange={(e) => setReferralSource(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] text-slate-800 bg-white border border-slate-200/90 focus:outline-none focus:border-[#008BF8] cursor-pointer"
                      >
                        <option value="" disabled>Select referral source...</option>
                        <option value="LinkedIn / Social Media">LinkedIn / Social Media</option>
                        <option value="The Jen GTM Show">The Jen GTM Show</option>
                        <option value="Hyperscaler Field Referral">Field Colleague / Internal Referral</option>
                        <option value="Event / Conference">Event / Conference</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Invitations Preferences:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {INVITATION_OPTIONS.map((inv) => (
                          <label
                            key={inv}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 p-2 rounded-xl border border-slate-200/80 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedInvites.includes(inv)}
                              onChange={() => toggleInvite(inv)}
                              className="rounded text-[#008BF8] focus:ring-[#008BF8]"
                            />
                            <span>{inv}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200">
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-0.5 rounded text-[#008BF8] focus:ring-[#008BF8]"
                        />
                        <span className="text-xs text-slate-600 leading-snug">
                          I consent to receive co-sell advisory invitations and GTM updates from SaaSNova.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FA0F9C] hover:bg-[#E60085] shadow-[0_2px_12px_rgba(250,15,156,0.35)] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 select-none"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <span>Register as {partner.name} SME</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
