"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle2,
  Send,
  ShieldCheck,
  Cloud,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useSolutionHashNavigation } from "@/lib/scrollNavigation";

const CALENDLY_URL =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const CONTACT_HASH_IDS = [
  "contact-hero",
  "send-message",
] as const;

type InquiryType = "service" | "partnership";

const DISCOVERY_TIMELINE = [
  {
    step: "01",
    title: "Readiness Score",
    desc: "Assess marketplace position across AWS, Azure, and Google Cloud.",
  },
  {
    step: "02",
    title: "Gap Analysis",
    desc: "Pinpoint where your co-sell motion is stalling and which partner teams to activate.",
  },
  {
    step: "03",
    title: "Program Fit",
    desc: "Recommend the right sprint program (Ignite, SuperNova, NovaX) or managed service.",
  },
  {
    step: "04",
    title: "Actionable Plan",
    desc: "Concrete takeaways and field execution roadmap, whether you work with us or not.",
  },
];

const TARGET_CLOUDS = ["AWS", "Azure", "Google Cloud (GCP)", "Multiple Hyperscalers"] as const;

const MARKETPLACE_STATUSES = [
  "Listed on Multiple Clouds",
  "Listing in Progress",
  "Not Yet Listed",
] as const;

const SERVICE_INTERESTS = [
  "PDMaaS (Partner Development)",
  "PMMaaS (Partner Marketing)",
  "PALaaS (Alliance Leadership)",
  "Ignite (1-Month Sprint)",
  "SuperNova (4-Month Sprint)",
  "NovaX (6-Month Sprint)",
  "Not Sure / Need Guidance",
] as const;

const PARTNER_ORG_TYPES = [
  "Cloud Alliance / Hyperscaler Team",
  "System Integrator (SI / GSI)",
  "ISV / SaaS Technology Partner",
  "Channel / Reseller Partner",
  "Other Strategic Partner",
] as const;

const PARTNER_ECOSYSTEMS = [
  "AWS Ecosystem",
  "Azure Ecosystem",
  "Google Cloud Ecosystem",
  "Multi-Cloud Ecosystem",
] as const;

const PARTNER_FOCUS_AREAS = [
  "Joint Co-Sell Collaboration",
  "Marketplace / Tech Integration",
  "Referral & Co-Marketing",
  "Strategic Alliance",
  "General Partnership Inquiry",
] as const;

function ContactContent() {
  const searchParams = useSearchParams();
  const handleSectionSelect = useCallback(() => { }, []);
  useSolutionHashNavigation(CONTACT_HASH_IDS, handleSectionSelect);

  const [inquiryType, setInquiryType] = useState<InquiryType>("service");
  const [isHyperscalerMode, setIsHyperscalerMode] = useState(false);
  const [selectedClouds, setSelectedClouds] = useState<string[]>(["AWS"]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    targetCloud: "",
    marketplaceStatus: "",
    serviceInterest: "",
    partnerOrgType: "",
    partnerEcosystem: "",
    partnerFocus: "",
    jobTitle: "",
    division: "",
    officeLocation: "",
    message: "",
  });

  // Handle URL query parameters (e.g. from /partners: ?type=partnership&mode=hyperscaler&cloud=aws)
  useEffect(() => {
    const typeParam = searchParams.get("type");
    const modeParam = searchParams.get("mode");
    const cloudParam = searchParams.get("cloud");

    if (typeParam === "partnership") {
      setInquiryType("partnership");
    }

    if (modeParam === "hyperscaler") {
      setIsHyperscalerMode(true);
      setFormData((prev) => ({
        ...prev,
        partnerOrgType: "Cloud Alliance / Hyperscaler Team",
        partnerFocus: "Joint Co-Sell Collaboration",
      }));

      if (cloudParam) {
        const normalized =
          cloudParam.toLowerCase() === "azure"
            ? "Azure"
            : cloudParam.toLowerCase() === "gcp"
              ? "Google Cloud"
              : "AWS";
        setSelectedClouds([normalized]);
        setFormData((prev) => ({
          ...prev,
          partnerEcosystem: `${normalized} Ecosystem`,
        }));
      }
    }
  }, [searchParams]);

  const toggleHyperscalerCloud = (cloud: string) => {
    setSelectedClouds((prev) => {
      const next = prev.includes(cloud)
        ? prev.filter((c) => c !== cloud)
        : [...prev, cloud];
      // Keep at least one selected
      return next.length > 0 ? next : [cloud];
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "partnerOrgType") {
      if (value === "Cloud Alliance / Hyperscaler Team") {
        setIsHyperscalerMode(true);
      } else {
        setIsHyperscalerMode(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="relative text-slate-900 overflow-x-clip min-h-screen select-none">
      {/* ════════════════════════════════════════════════════════════════════════
          1. SIGNATURE 3D ELEVATED ASYMMETRICAL HERO STAGE
          Exact height and visual footprint matching /about, /careers & /support.
          Contains the "What Happens" Timeline directly inside the hero stage!
          ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="contact-hero"
        data-nav-title="Contact & Booking"
        data-nav-subtitle="Execution Strategy Session"
        className="relative px-4 sm:px-6 lg:px-8 min-h-[640px] lg:min-h-[700px] flex flex-col justify-center -mt-[60px] sm:-mt-[62px] pt-[86px] sm:pt-[96px] pb-12 sm:pb-16 overflow-hidden scroll-mt-28 lg:scroll-mt-32 select-none"
      >
        {/* Atmospheric Radial Floor Light beneath the Floating Stage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[950px] lg:w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.18)_0%,rgba(186,230,253,0.25)_35%,rgba(250,15,156,0.06)_65%,transparent_80%)] blur-[90px]"
        />

        <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="relative mx-auto w-full">
            {/* The Signature Asymmetrical Elevated Stage */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
                boxShadow:
                  "0 35px 75px -15px rgba(15, 23, 42, 0.18), 0 18px 38px -10px rgba(0, 139, 248, 0.22), 0 4px 12px rgba(15, 23, 42, 0.06), inset 0 2px 1px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(0, 139, 248, 0.12)",
              }}
              className="relative overflow-hidden rounded-tl-[68px] sm:rounded-tl-[80px] rounded-br-[68px] sm:rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] px-6 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16 min-h-[480px] lg:min-h-[510px] flex flex-col justify-center space-y-7 sm:space-y-9"
            >
              {/* Specular Ambient Glow inside Stage */}
              <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[260px] rounded-full bg-white/60 blur-[70px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-[460px] h-[300px] rounded-full bg-[#008BF8]/20 blur-[100px]" />

              {/* Headline & Intro */}
              <div className="relative z-10 space-y-4 text-center max-w-3xl mx-auto">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-sky-300/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8] shadow-[0_0_8px_#008BF8]" />
                  <Calendar className="w-3.5 h-3.5 text-[#008BF8]" />
                  <span>SaaSNova Strategy Session</span>
                </div>

                {/* Bold Stage Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.12]">
                  Book an Execution{" "}
                  <span className="text-gradient">Strategy Session.</span>
                </h1>

                {/* Narrative Subtitle (Explicitly 14px) */}
                <p className="text-[14px] text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
                  Schedule a 30-minute cloud GTM readiness session with our leadership team. Here is what happens on your discovery call:
                </p>
              </div>

              {/* Timeline (Integrated in Stage) */}
              <div className="relative z-10 pt-2 max-w-5xl mx-auto w-full">
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#008BF8]/30 via-[#008BF8]/50 to-[#FA0F9C]/50 z-0"
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 sm:gap-4 relative z-10">
                  {DISCOVERY_TIMELINE.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative flex flex-col p-4 sm:p-5 rounded-2xl bg-white/90 hover:bg-white border border-sky-200/80 hover:border-sky-300/90 shadow-[0_4px_16px_rgba(0,139,248,0.08),inset_0_1px_0_#fff] transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#008BF8] to-[#0066CC] text-white text-xs font-mono font-bold flex items-center justify-center shadow-xs">
                          {item.step}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#008BF8]/40 group-hover:bg-[#FA0F9C] transition-colors" />
                      </div>
                      <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          2. SLEEK SIMPLER PILL IN BLUE ACCENT WITH BRAND PINK BUTTON
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-6 pb-10">
        <ScrollReveal once={false} variant="up">
          <div className="relative rounded-2xl sm:rounded-full bg-gradient-to-r from-[#E8F4FD] via-[#F0F7FE] to-[#DDF0FD] border-2 border-[#BAE6FD] shadow-[0_12px_36px_rgba(0,139,248,0.14),0_2px_8px_rgba(0,139,248,0.06)] px-6 sm:px-8 py-4 sm:py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-full bg-sky-500/15 border border-sky-400/30 text-[#008BF8] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#008BF8]" />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    Prefer to jump straight onto our calendar?
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-tight">
                    Book a 30-minute execution strategy session directly with Founder Jen Dawson.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#FA0F9C] hover:bg-[#d80884] shadow-[0_4px_16px_rgba(250,15,156,0.35)] hover:shadow-[0_8px_24px_rgba(250,15,156,0.5)] active:translate-y-[1px] transition-all cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Founder Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. TWO-COLUMN SPLIT: DIRECT CHANNELS (LEFT - STICKY) + INQUIRY FORM (RIGHT)
          ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="send-message"
        data-nav-title="Send Message"
        data-nav-subtitle="Inquiry Form"
        className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 lg:scroll-mt-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT PANEL: DIRECT CONTACT INFO - STICKY SCROLLS WITH FORM */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Direct Contact Info
              </h2>
              <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
                Prefer email or phone? Reach out directly to our leadership or technical desks. We respond to all inquiries within 24 hours.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] space-y-3">
              <a
                href="mailto:jen@saasnova.ai"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200/80 hover:border-pink-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#FA0F9C] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-[#FA0F9C]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 font-medium block">
                    Founder &amp; Executive
                  </span>
                  <strong className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#FA0F9C] transition-colors truncate block">
                    jen@saasnova.ai
                  </strong>
                </div>
              </a>

              <a
                href="tel:+12017555369"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200/80 hover:border-pink-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#FA0F9C] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-[#FA0F9C]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 font-medium block">
                    Direct Phone
                  </span>
                  <strong className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#FA0F9C] transition-colors truncate block">
                    +1 (201) 755-5369
                  </strong>
                </div>
              </a>

              <a
                href="mailto:marketing@saasnova.ai"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200/80 hover:border-pink-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#FA0F9C] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-[#FA0F9C]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 font-medium block">
                    Marketing Inquiries
                  </span>
                  <strong className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#FA0F9C] transition-colors truncate block">
                    marketing@saasnova.ai
                  </strong>
                </div>
              </a>

              <a
                href="mailto:support@saasnova.ai"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200/80 hover:border-pink-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#FA0F9C] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-[#FA0F9C]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 font-medium block">
                    Help Desk &amp; Technical Support
                  </span>
                  <strong className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#FA0F9C] transition-colors truncate block">
                    support@saasnova.ai
                  </strong>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: DYNAMIC ELEVATED INQUIRY FORM */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Send a Message Directly
              </h2>
              <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                Tell us about your cloud marketplace goals or partnership proposals and our team will respond within 24 hours.
              </p>
            </div>

            {/* 3D Elevated Form Plinth */}
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06),0_4px_12px_rgba(15,23,42,0.03)] p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Message sent successfully.
                    </h3>
                    <p className="text-[14px] text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Jen Dawson and our cloud execution team will review your details and respond within 24 hours.
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          company: "",
                          targetCloud: "",
                          marketplaceStatus: "",
                          serviceInterest: "",
                          partnerOrgType: "",
                          partnerEcosystem: "",
                          partnerFocus: "",
                          jobTitle: "",
                          division: "",
                          officeLocation: "",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                  {/* Nature of Inquiry 3D Segmented Toggle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center">
                      Nature of Inquiry <span className="text-[#FA0F9C] ml-1">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80">
                      <button
                        type="button"
                        onClick={() => {
                          setInquiryType("service");
                          setIsHyperscalerMode(false);
                        }}
                        className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-[13px] transition-all cursor-pointer ${inquiryType === "service"
                            ? "bg-white text-[#008BF8] shadow-[0_2px_8px_rgba(0,139,248,0.18),0_1px_0_#cbd5e1]"
                            : "text-slate-600 hover:text-slate-900"
                          }`}
                      >
                        Service Inquiry
                      </button>
                      <button
                        type="button"
                        onClick={() => setInquiryType("partnership")}
                        className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-[13px] transition-all cursor-pointer ${inquiryType === "partnership"
                            ? "bg-white text-[#008BF8] shadow-[0_2px_8px_rgba(0,139,248,0.18),0_1px_0_#cbd5e1]"
                            : "text-slate-600 hover:text-slate-900"
                          }`}
                      >
                        Partnership Inquiry
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Hyperscaler Mode Notice Banner */}
                  {isHyperscalerMode && inquiryType === "partnership" && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50/70 border border-sky-200 text-xs text-sky-900 font-semibold animate-in fade-in duration-200">
                      <div className="flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-[#008BF8]" />
                        <span>Hyperscaler Field Co-Sell Registration Mode</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-white px-2 py-0.5 rounded-md border border-sky-200 text-[#008BF8] font-bold">
                        {selectedClouds.join(" · ") || "AWS"}
                      </span>
                    </div>
                  )}

                  {/* Name Row (First Name + Last Name) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center">
                        First Name <span className="text-[#FA0F9C] ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center">
                        Last Name <span className="text-[#FA0F9C] ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Work Email & Company Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center">
                        Corporate Work Email <span className="text-[#FA0F9C] ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={
                          isHyperscalerMode
                            ? "alias@amazon.com, microsoft.com, etc."
                            : "Enter your work email address"
                        }
                        style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center">
                        {isHyperscalerMode ? "Cloud Organization" : "Company Name"}{" "}
                        <span className="text-[#FA0F9C] ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={
                          isHyperscalerMode
                            ? "e.g. AWS, Microsoft, Google Cloud"
                            : "Enter your company name"
                        }
                        style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Dynamic Fields Section */}
                  {inquiryType === "service" ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Target Cloud */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 flex items-center">
                            Target Cloud Marketplace <span className="text-[#FA0F9C] ml-1">*</span>
                          </label>
                          <select
                            required
                            name="targetCloud"
                            value={formData.targetCloud}
                            onChange={handleChange}
                            style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all cursor-pointer"
                          >
                            <option value="" disabled>Select target cloud marketplace...</option>
                            {TARGET_CLOUDS.map((cloud) => (
                              <option key={cloud} value={cloud}>
                                {cloud}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Marketplace Status */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 flex items-center">
                            Current Marketplace Status <span className="text-[#FA0F9C] ml-1">*</span>
                          </label>
                          <select
                            required
                            name="marketplaceStatus"
                            value={formData.marketplaceStatus}
                            onChange={handleChange}
                            style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all cursor-pointer"
                          >
                            <option value="" disabled>Select current status...</option>
                            {MARKETPLACE_STATUSES.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Primary Service of Interest */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center">
                          Primary Service of Interest <span className="text-[#FA0F9C] ml-1">*</span>
                        </label>
                        <select
                          required
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all cursor-pointer"
                        >
                          <option value="" disabled>Select service or sprint program...</option>
                          {SERVICE_INTERESTS.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : isHyperscalerMode ? (
                    /* DYNAMIC HYPERSCALER CO-SELL FIELDS */
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Multi-Cloud Checkbox Selectors */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                          <span>Cloud Hyperscaler Alignment <span className="text-[#FA0F9C]">*</span></span>
                          <span className="text-[10px] font-mono font-bold text-[#008BF8] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                            Multi-Cloud Selectable
                          </span>
                        </label>
                        <div className="grid grid-cols-3 gap-2.5">
                          {["AWS", "Azure", "Google Cloud"].map((c) => {
                            const active = selectedClouds.includes(c);
                            return (
                              <button
                                key={c}
                                type="button"
                                onClick={() => toggleHyperscalerCloud(c)}
                                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${active
                                    ? "bg-sky-50 border-[#008BF8] text-[#008BF8] shadow-xs"
                                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                                  }`}
                              >
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 ${active ? "text-[#008BF8]" : "text-slate-300"
                                    }`}
                                />
                                <span>{c}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Job Title & Division Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 flex items-center">
                            Job Title <span className="text-[#FA0F9C] ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder="e.g. Partner Development Manager"
                            style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 flex items-center">
                            Division / Office Location <span className="text-[#FA0F9C] ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="division"
                            value={formData.division}
                            onChange={handleChange}
                            placeholder="e.g. ISV Accelerate / Seattle, WA"
                            style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* STANDARD PARTNERSHIP FIELDS */
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Partner Organization Type */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 flex items-center">
                            Partner Organization Type <span className="text-[#FA0F9C] ml-1">*</span>
                          </label>
                          <select
                            required
                            name="partnerOrgType"
                            value={formData.partnerOrgType}
                            onChange={handleChange}
                            style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all cursor-pointer"
                          >
                            <option value="" disabled>Select partner organization type...</option>
                            {PARTNER_ORG_TYPES.map((org) => (
                              <option key={org} value={org}>
                                {org}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Target Ecosystem */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 flex items-center">
                            Target Ecosystem <span className="text-[#FA0F9C] ml-1">*</span>
                          </label>
                          <select
                            required
                            name="partnerEcosystem"
                            value={formData.partnerEcosystem}
                            onChange={handleChange}
                            style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all cursor-pointer"
                          >
                            <option value="" disabled>Select target cloud ecosystem...</option>
                            {PARTNER_ECOSYSTEMS.map((eco) => (
                              <option key={eco} value={eco}>
                                {eco}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Partnership Focus Area */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center">
                          Partnership Focus Area <span className="text-[#FA0F9C] ml-1">*</span>
                        </label>
                        <select
                          required
                          name="partnerFocus"
                          value={formData.partnerFocus}
                          onChange={handleChange}
                          style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all cursor-pointer"
                        >
                          <option value="" disabled>Select partnership focus...</option>
                          {PARTNER_FOCUS_AREAS.map((focus) => (
                            <option key={focus} value={focus}>
                              {focus}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  {/* Message Area */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center">
                      {isHyperscalerMode
                        ? "Target Opportunity or Account Details"
                        : "Message Details"}{" "}
                      <span className="text-[#FA0F9C] ml-1">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        isHyperscalerMode
                          ? "Share details about active ISV accounts, target workload, or co-sell alignment goals..."
                          : inquiryType === "service"
                            ? "Describe your cloud marketplace status, co-sell blockers, or goals..."
                            : "Describe your platform, partnership proposal, or co-sell alignment ideas..."
                      }
                      style={{ boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 0 #cbd5e1" }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#008BF8] focus:ring-2 focus:ring-[#008BF8]/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Signature Vivid Pink) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl h-[52px] text-sm sm:text-base font-extrabold text-white cursor-pointer transition-all disabled:opacity-70 bg-gradient-to-r from-[#FA0F9C] via-[#E60085] to-[#C8008A] hover:from-[#FF26A8] hover:to-[#D90094] shadow-[0_1px_0_#9d006c,0_2px_0_#85005b,0_3px_0_#6e004a,0_10px_25px_rgba(250,15,156,0.38)] hover:shadow-[0_14px_30px_rgba(250,15,156,0.5)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-xs"
                    >
                      {loading ? (
                        <span>Sending…</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>
                            {isHyperscalerMode
                              ? "Register Hyperscaler Co-Sell Alignment"
                              : "Send Message"}
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
