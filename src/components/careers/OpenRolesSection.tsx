"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  X,
  Send,
  Lock,
  ChevronDown,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { OPEN_ROLES, ROLE_SELECT_OPTIONS } from "./careersData";

const LINKEDIN_JOBS_URL = "https://www.linkedin.com/company/saasnova/jobs/";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} text-[#0077B5] fill-current shrink-0`} viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function OpenRolesSection() {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const handleRoleToggle = (roleId: string) => {
    setSelectedRoleId((prev) => (prev === roleId ? null : roleId));
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [location, setLocation] = useState("");
  const [roleValue, setRoleValue] = useState("");
  const [whyRole, setWhyRole] = useState("");
  const [background, setBackground] = useState("");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modalOpen && !dialog.open) {
      dialog.showModal();
    } else if (!modalOpen && dialog.open) {
      dialog.close();
    }
  }, [modalOpen]);

  const openApplyModal = (preselectedRole: string) => {
    setRoleValue(preselectedRole);
    setSubmitted(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form
        .querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
          "[required]"
        )
        .forEach((el) => {
          if (!el.checkValidity()) el.setAttribute("aria-invalid", "true");
          else el.removeAttribute("aria-invalid");
        });
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(
    `Application: ${roleValue || "Open Application"} — ${firstName} ${lastName}`.trim()
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${firstName} ${lastName}\nEmail: ${email}\nLinkedIn: ${linkedin}\nLocation: ${location}\nRole: ${roleValue}\n\nWhy this role:\n${whyRole}\n\nRelevant background:\n${background || "N/A"}`
  );

  return (
    <>
      {/* ── OPEN ROLES SECTION ── */}
      <section
        id="open-roles"
        data-nav-title="Open Roles"
        data-nav-subtitle="Active Positions"
        className="relative px-4 sm:px-6 lg:px-8 py-14 sm:py-18 bg-transparent border-b border-slate-200/60 scroll-mt-24 select-none"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-6xl">
          <div className="space-y-6 sm:space-y-8">
            {/* Header (No Eyebrow) */}
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Operating Bench &amp; Open Positions.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Click any role pill below to inspect deliverables, scope of ownership, and apply directly.
              </p>
            </div>

            {/* ── 1. BENTO-STYLE ROLE CARDS ── */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {OPEN_ROLES.map((role) => {
                  const isSelected = selectedRoleId === role.id;

                  return (
                    <button
                      key={role.id}
                      type="button"
                      data-role-tab={role.id}
                      onClick={() => handleRoleToggle(role.id)}
                      className={`w-full text-left rounded-2xl cursor-pointer h-[112px] sm:h-[122px] ${isSelected
                        ? "p-[2px] bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#008BF8] shadow-[0_4px_0_#bae6fd]"
                        : "card-3d bg-white border border-slate-200/90 hover:border-slate-300 p-4 sm:p-5 flex flex-col justify-between gap-2.5"
                        }`}
                    >
                      <div
                        className={
                          isSelected
                            ? "w-full h-full bg-white rounded-[14px] p-3.5 sm:p-[18px] flex flex-col justify-between gap-2.5"
                            : "w-full h-full flex flex-col justify-between gap-2.5"
                        }
                      >
                        {/* Top: Role Title (fixed typography across all states to prevent size shifts) */}
                        <div className="flex items-start justify-between gap-1.5 min-w-0 w-full">
                          <span
                            className={`font-bold tracking-tight leading-snug line-clamp-2 text-xs sm:text-[13.5px] ${isSelected ? "text-slate-900 font-extrabold" : "text-slate-700"
                              }`}
                          >
                            {role.title}
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#008BF8] shadow-[0_0_6px_#008BF8] shrink-0 mt-1" />
                          )}
                        </div>

                        {/* Bottom: Location Badge (fixed typography across all states) */}
                        <div className="w-full">
                          <span
                            className={`inline-flex items-center gap-1 font-mono text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full border transition-colors truncate max-w-full ${isSelected
                              ? "bg-white text-slate-800 font-bold border-[#008BF8]/30 shadow-2xs"
                              : "bg-slate-100 text-slate-600 font-semibold border-slate-200"
                              }`}
                          >
                            <MapPin className={`w-2.5 h-2.5 shrink-0 ${isSelected ? "text-[#008BF8]" : "text-slate-500"}`} />
                            <span className="truncate">{role.cardLocation}</span>
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {!selectedRoleId && (
                <p className="text-center text-xs text-slate-500 font-bold mt-4">
                  ↑ Select a position to view details &amp; apply
                </p>
              )}
            </div>

            {/* ── 3. EXPANSIVE FULL-WIDTH DOSSIER (WORD-FOR-WORD COPY, NO RANDOM ICONS, NO BLACK BOX) ── */}
            <div className="max-w-5xl mx-auto pt-2">
              {!selectedRoleId && (
                <div
                  id="role-empty-state"
                  className="card-3d rounded-3xl p-8 sm:p-12 text-center max-w-5xl mx-auto space-y-3 bg-white/70 border border-slate-200/80 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center mx-auto shadow-xs">
                    <MapPin className="w-6 h-6 text-[#008BF8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Select a Position to View Role Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-normal">
                    Click any open role card above to inspect deliverables, scope of ownership, compensation, and direct application options.
                  </p>
                </div>
              )}

              {OPEN_ROLES.map((role) => {
                const isSelected = selectedRoleId === role.id;

                return (
                  <div
                    key={role.id}
                    data-role-dossier={role.id}
                    style={{ display: isSelected ? "block" : "none" }}
                    className={`card-3d rounded-3xl p-6 sm:p-9 lg:p-10 space-y-8 ${isSelected ? "block" : "hidden"
                      }`}
                  >
                    {/* Dossier Header Row with Prominent Location & Both Buttons */}
                    <div className="space-y-4 pb-6 border-b border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                          {/* Prominent Location Tag */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-800">
                            <MapPin className="w-3.5 h-3.5 text-[#008BF8]" />
                            <span>{role.detailLocation || role.cardLocation}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-600 font-normal">{role.workMode}</span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight">
                            {role.fullTitle}
                          </h3>
                        </div>

                        {/* Both Action Buttons: Apply Now & Apply on LinkedIn */}
                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                          <button
                            type="button"
                            onClick={() => openApplyModal(role.applyOption)}
                            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 h-[46px] text-xs sm:text-sm font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_18px_rgba(250,15,156,0.32)] hover:shadow-[0_8px_24px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <a
                            href={LINKEDIN_JOBS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-slate-200/90 hover:border-[#008BF8]/60 bg-white hover:bg-slate-50 px-5 h-[46px] text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                          >
                            <LinkedInIcon className="w-4 h-4" />
                            <span>Apply on LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Word-for-Word: About the Role */}
                    <div className="bg-[#F0F7FF] border border-sky-200/90 shadow-[0_2px_0_#bae6fd] rounded-2xl p-6 space-y-2">
                      <h4 className="text-xs font-mono font-black uppercase tracking-wider text-[#008BF8]">
                        ABOUT THE ROLE
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {role.aboutRole}
                      </p>
                    </div>

                    {/* Word-for-Word: What You Will Own & Deliver */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-800">
                        WHAT YOU WILL OWN &amp; DELIVER
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {role.ownership.map((group) => (
                          <div
                            key={group.title}
                            className="card-3d rounded-2xl p-6 space-y-3 hover:border-[#008BF8]/60 transition-all duration-200"
                          >
                            <h5 className="text-sm sm:text-base font-bold text-slate-900">
                              {group.title}
                            </h5>
                            <ul className="space-y-2 pl-4">
                              {group.bullets.map((b) => (
                                <li
                                  key={b}
                                  className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed list-disc marker:text-[#008BF8]"
                                >
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Word-for-Word: Candidate Profile & Work Environment / Upside */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                      {/* Who You Are */}
                      <div className="card-3d rounded-2xl p-6 space-y-3.5">
                        <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-800">
                          WHO YOU ARE
                        </h4>
                        {role.whoYouAreIntro && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                            {role.whoYouAreIntro}
                          </p>
                        )}
                        <ul className="space-y-2.5">
                          {role.whoYouAre.map((item) => (
                            <li
                              key={item}
                              className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {role.whoYouAreOutro && (
                          <p className="text-xs text-slate-500 italic pt-1">
                            {role.whoYouAreOutro}
                          </p>
                        )}
                      </div>

                      {/* What You Will Gain */}
                      <div className="card-3d rounded-2xl p-6 space-y-3.5">
                        <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-800">
                          WHAT YOU WILL GAIN
                        </h4>
                        <div className="space-y-3.5">
                          {role.whatYouWillGain.map((g) => (
                            <div key={g.label} className="space-y-1">
                              <span className="text-xs sm:text-[13px] font-bold text-slate-900 block">
                                {g.label}
                              </span>
                              <span className="text-xs sm:text-[13px] text-slate-600 leading-relaxed block">
                                {g.description}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Optional Work Environment (HubSpot & Cloud Eng) */}
                        {role.workEnvironment && (
                          <div className="pt-3 border-t border-slate-100 space-y-2">
                            <span className="text-xs font-bold text-slate-900 block">
                              Work Environment
                            </span>
                            <ul className="space-y-1 pl-4 text-xs text-slate-600 list-disc marker:text-[#008BF8]">
                              {role.workEnvironment.map((w) => (
                                <li key={w}>{w}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Word-for-Word: Clean Light Bottom Action Plinth with 3D Depth */}
                    <div className="bg-[#F0F7FF] border border-sky-200/90 shadow-[0_2px_0_#bae6fd] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                      <div className="space-y-1 text-center sm:text-left max-w-xl">
                        <h5 className="text-base font-bold text-slate-900 tracking-tight">
                          How to Apply
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {role.howToApply}
                        </p>
                      </div>

                      {/* Both Buttons at Bottom */}
                      <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={() => openApplyModal(role.applyOption)}
                          className="group inline-flex items-center justify-center gap-2 rounded-full px-6 h-[46px] text-xs sm:text-sm font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_18px_rgba(250,15,156,0.32)] hover:shadow-[0_8px_24px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <a
                          href={LINKEDIN_JOBS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-slate-200/90 hover:border-[#008BF8]/60 bg-white hover:bg-slate-50 px-5 h-[46px] text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                        >
                          <LinkedInIcon className="w-4 h-4" />
                          <span>Apply on LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CAREERS BOTTOM CTA: COMPACT · FIT SAME AS HOME SCREEN · NO CARD ON QUOTE ── */}
      <section
        id="open-application"
        data-nav-title="Open Application"
        data-nav-subtitle="Join the Team"
        className="relative w-full bg-[#F0F7FF] border-t-2 border-sky-200/90 overflow-hidden"
      >
        {/* Prismatic Top Highlight Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#008BF8]/80 via-[#FA0F9C]/80 to-transparent" />

        {/* Ambient Soft Lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[280px] bg-gradient-to-b from-[#008BF8]/[0.1] via-[#FA0F9C]/[0.05] to-transparent blur-3xl -z-10"
        />

        {/* Compact Full-Width Container (Exact Same Padding as Home Screen CTA) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-11 lg:py-12 text-center">

          {/* Direct Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-900 leading-[1.18] max-w-2xl mx-auto mb-3">
            Don&apos;t see the right fit above?
          </h2>

          {/* Seamless Founder Quote (No Card Box) */}
          <blockquote className="text-sm sm:text-base lg:text-[16.5px] italic font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto mb-2 font-sans">
            &ldquo;We&apos;re building a GTM team of operators who turn clarity into momentum and momentum into pipeline. If you want ownership, speed, and the chance to ship work that moves companies forward, this is where you belong.&rdquo;
          </blockquote>

          {/* Attribution with Founder Thumbnail */}
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-500 mb-6">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-200 shrink-0">
              <Image
                src="/jen-dp.jpg"
                alt="Jen Dawson"
                width={24}
                height={24}
                className="object-cover w-full h-full"
              />
            </div>
            <strong className="text-slate-900 font-bold">Jen Dawson</strong>
            <span className="text-slate-300">·</span>
            <span className="text-[#008BF8] font-semibold">Founder &amp; CEO, SaaSNova</span>
          </div>

          {/* Single Action Button: Apply Open Application (Hero-Matched) */}
          <div className="flex items-center justify-center mb-5 sm:mb-6">
            <button
              type="button"
              onClick={() => openApplyModal("Open Application")}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 h-[48px] sm:h-[50px] text-sm sm:text-[15px] font-extrabold text-white whitespace-nowrap cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_18px_rgba(250,15,156,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_26px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              <span>Apply Open Application</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Direct Contact Details Line (Identical to Home Screen Footer Attach) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-medium text-slate-500 pt-3 border-t border-sky-200/80 max-w-sm mx-auto">
            <a
              href="mailto:operations@saasnova.ai"
              className="hover:text-[#008BF8] hover:underline transition-colors"
            >
              operations@saasnova.ai
            </a>
            <span className="text-slate-300">·</span>
            <a
              href="tel:+12017555369"
              className="hover:text-[#008BF8] hover:underline transition-colors"
            >
              +1 (201) 755-5369
            </a>
          </div>

        </div>
      </section>

      {/* ── APPLICATION MODAL DIALOG (FIXED HEIGHT, NO SCROLLBAR) ── */}
      <dialog
        ref={dialogRef}
        className="backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm p-0 rounded-3xl shadow-2xl max-w-xl w-full m-auto border border-slate-200 bg-white overflow-hidden"
      >
        <div className="p-5 sm:p-6 space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#008BF8] block">
                SaaSNOVA CAREER APPLICATION
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate">
                <span className="text-slate-500 font-semibold">Role:</span>{" "}
                <span className="font-black text-slate-900">{roleValue || "Open Application"}</span>
              </h3>
            </div>
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close dialog"
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div>
            {submitted ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-emerald-900">
                    Application Details Prepared!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Click below to dispatch your dossier directly to Jen Dawson &amp; the SaaSNova team via email.
                  </p>
                </div>
                <div className="pt-1 flex flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:jen@saasnova.ai?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="btn-gradient btn-3d inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Dossier via Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-white transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-2.5">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block">First Name *</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jane"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white"
                    />
                  </div>
                </div>

                {/* Row 2: Email & LinkedIn */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block">LinkedIn Profile URL *</label>
                    <input
                      type="url"
                      required
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white"
                    />
                  </div>
                </div>

                {/* Row 3: Location / Timezone (Full width with Role fixed in header) */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    Current Location / Timezone *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Austin, TX (CST) or London, UK or Bangalore"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white"
                  />
                </div>

                {/* Row 4: Why operate with SaaSNova */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    Why do you want to operate with SaaSNova? *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={whyRole}
                    onChange={(e) => setWhyRole(e.target.value)}
                    placeholder="Tell us about your hyperscaler experience (AWS ACE, Azure, GCP) or GTM execution background..."
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white resize-none"
                  />
                </div>

                {/* Row 5: Relevant Deals or Milestones */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    Relevant Deals, Quotas, or Program Milestones
                  </label>
                  <input
                    type="text"
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    placeholder="e.g. Launched AWS Marketplace listing, managed $2M ACE co-sell pipeline, etc."
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008BF8] text-xs sm:text-sm text-slate-900 bg-white"
                  />
                </div>

                {/* Bottom Actions */}
                <div className="pt-2.5 flex items-center justify-end gap-2.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-full px-5 h-[42px] text-xs sm:text-sm font-extrabold text-white cursor-pointer bg-gradient-to-r from-[#FA0F9C] to-[#C8008A] shadow-[0_4px_14px_rgba(250,15,156,0.32)] hover:shadow-[0_6px_20px_rgba(250,15,156,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                  >
                    <span>Review &amp; Submit Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
