"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  MapPin,
  X,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { OPEN_ROLES, ROLE_SELECT_OPTIONS, type CareerRole } from "./careersData";

function EcosystemBadgeList({
  ecosystems,
  darkSurface,
}: {
  ecosystems: CareerRole["ecosystems"];
  darkSurface: boolean;
}) {
  const logoMap: Record<string, string> = {
    AWS: "/aws-logo.png",
    Azure: "/azure-logo.png",
    GCP: "/gcp-logo.png",
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {ecosystems.map((eco) => {
        const src = logoMap[eco];
        if (src) {
          return (
            <span
              key={eco}
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                darkSurface
                  ? "bg-white/[0.08] border-white/15 text-slate-200"
                  : "bg-slate-50 border-slate-200/90 text-slate-700"
              }`}
            >
              <Image
                src={src}
                alt={eco}
                width={14}
                height={14}
                className={`w-3 h-3 object-contain ${
                  darkSurface && eco === "AWS" ? "brightness-0 invert" : ""
                }`}
              />
              {eco}
            </span>
          );
        }
        return (
          <span
            key={eco}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
              darkSurface
                ? "bg-amber-500/15 border-amber-400/30 text-amber-300"
                : "bg-orange-50 border-orange-200/90 text-orange-700"
            }`}
          >
            {eco}
          </span>
        );
      })}
    </div>
  );
}

export default function OpenRolesSection() {
  const [selectedId, setSelectedId] = useState<string>(OPEN_ROLES[0].id);
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
  const [consent, setConsent] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const dossierBodyRef = useRef<HTMLDivElement>(null);

  const selectedRole =
    OPEN_ROLES.find((r) => r.id === selectedId) || OPEN_ROLES[0];

  const modalRoleMeta = OPEN_ROLES.find((r) => r.applyOption === roleValue);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modalOpen && !dialog.open) {
      dialog.showModal();
    } else if (!modalOpen && dialog.open) {
      dialog.close();
    }
  }, [modalOpen]);

  const handleSelectRole = (roleId: string) => {
    setSelectedId(roleId);
    if (dossierBodyRef.current) {
      dossierBodyRef.current.scrollTop = 0;
    }
  };

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
      {/* ── SECTION 3: MATCHED-HEIGHT DARK #070D1E SPLIT ROLE WORKBENCH ── */}
      <section
        id="open-roles"
        data-nav-title="Open Roles"
        data-nav-subtitle="4 Active Positions"
        className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="card-3d-master-dark relative p-[2.5px] rounded-[2.25rem] bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#FA0F9C] text-white">
            <div className="relative bg-[#070D1E] rounded-[calc(2.25rem-2.5px)] px-4 py-6 sm:p-7 lg:p-8 overflow-clip space-y-5 backdrop-blur-2xl">
              {/* Top Specular Rim & Ambient Glows */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 via-pink-400/75 to-transparent" />
              <div className="pointer-events-none absolute -top-24 left-1/3 w-[480px] h-56 rounded-full bg-[#008BF8]/16 blur-[100px]" />

              {/* Compact Workbench Header */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full border border-white/15 bg-white/10 text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
                    OPEN POSITIONS · 04 ACTIVE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Open <span className="text-gradient">Roles.</span>
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                  Select a role on the left to inspect ownership, requirements, and apply directly.
                </p>
              </div>

              {/* Matched-Height Workbench Split */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
                {/* LEFT COLUMN: Sleek Compact Selector Keycaps (Matched Height) */}
                <div className="lg:col-span-5 well-recessed-dark rounded-[1.75rem] p-3 flex flex-col justify-between gap-2.5">
                  {OPEN_ROLES.map((role) => {
                    const isSelected = role.id === selectedRole.id;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => handleSelectRole(role.id)}
                        aria-pressed={isSelected}
                        className={`w-full text-left rounded-2xl p-3.5 sm:p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2.5 relative overflow-hidden ${
                          isSelected
                            ? "card-3d-dark-active !scale-100 !translate-y-0"
                            : "card-3d-dark hover:-translate-y-0.5"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[9.5px] font-mono font-bold text-emerald-300">
                                OPEN
                              </span>
                              <span className="text-[10px] font-mono font-bold text-slate-300">
                                {role.code}
                              </span>
                            </div>
                            <h3 className="text-sm sm:text-[15px] font-black text-white leading-snug">
                              {role.fullTitle}
                            </h3>
                          </div>

                          <ArrowRight
                            className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                              isSelected
                                ? "text-cyan-300 translate-x-0.5"
                                : "text-slate-400"
                            }`}
                          />
                        </div>

                        <p className="text-[11.5px] text-slate-300 leading-relaxed line-clamp-2">
                          {role.cardSummary}
                        </p>

                        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300">
                            <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                            {role.cardLocation}
                          </span>
                          <EcosystemBadgeList ecosystems={role.ecosystems} darkSurface />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* RIGHT COLUMN: Crisp White Role Dossier (Exact Matched Height via Grid-Stretch + Absolute Fill on Desktop) */}
                <div className="lg:col-span-7 relative">
                  <div className="w-full lg:absolute lg:inset-0 rounded-[1.75rem] bg-white text-slate-900 border border-slate-200/90 shadow-[0_2px_0_#e2e8f0,0_4px_0_#cbd5e1,0_20px_44px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_#ffffff] flex flex-col overflow-hidden">
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#FA0F9C] shrink-0" />

                    {/* Pinned Dossier Header */}
                    <div className="px-5 pt-4 pb-3.5 sm:px-6 border-b border-slate-200/80 space-y-2.5 shrink-0 bg-white">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[10px] font-mono font-bold text-[#008BF8]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            OPEN
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-500">
                            {selectedRole.code}
                          </span>
                        </div>

                        <EcosystemBadgeList
                          ecosystems={selectedRole.ecosystems}
                          darkSurface={false}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {selectedRole.fullTitle}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-[11.5px] font-medium text-slate-600">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200/80">
                            <MapPin className="w-3 h-3 text-[#008BF8]" />
                            {selectedRole.detailLocation}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200/80">
                            {selectedRole.workMode}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Internal Role Specification Tray */}
                    <div
                      ref={dossierBodyRef}
                      className="flex-1 min-h-0 overflow-y-auto px-5 py-4 sm:px-6 space-y-4 bg-slate-50/60 overscroll-contain"
                    >
                      {/* ABOUT THE ROLE */}
                      <div className="rounded-xl bg-white border border-slate-200/90 p-3.5 sm:p-4 space-y-1.5 shadow-2xs">
                        <h4 className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#008BF8]">
                          ABOUT THE ROLE
                        </h4>
                        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                          {selectedRole.aboutRole}
                        </p>
                      </div>

                      {/* WHAT YOU WILL OWN */}
                      <div className="space-y-2.5">
                        <h4 className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#008BF8]">
                          WHAT YOU WILL OWN
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {selectedRole.ownership.map((group) => (
                            <div
                              key={group.title}
                              className="rounded-xl bg-white border border-slate-200/90 p-3.5 space-y-1.5 shadow-2xs"
                            >
                              <div className="text-xs font-black text-slate-900">
                                {group.title}
                              </div>
                              <ul className="space-y-1">
                                {group.bullets.map((b) => (
                                  <li
                                    key={b}
                                    className="text-[11.5px] text-slate-600 leading-snug flex items-start gap-1.5"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#008BF8] mt-1.5 shrink-0" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* WHO YOU ARE + WORK ENVIRONMENT + WHAT YOU WILL GAIN */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="rounded-xl bg-white border border-slate-200/90 p-3.5 space-y-2 shadow-2xs">
                          <h4 className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#008BF8]">
                            WHO YOU ARE
                          </h4>
                          {selectedRole.whoYouAreIntro && (
                            <p className="text-[11.5px] text-slate-600 leading-relaxed">
                              {selectedRole.whoYouAreIntro}
                            </p>
                          )}
                          <ul className="space-y-1">
                            {selectedRole.whoYouAre.map((item) => (
                              <li
                                key={item}
                                className="text-[11.5px] text-slate-700 leading-snug flex items-start gap-1.5"
                              >
                                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {selectedRole.whoYouAreOutro && (
                            <p className="text-[11px] font-medium text-slate-700 pt-1">
                              {selectedRole.whoYouAreOutro}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2.5">
                          <div className="rounded-xl bg-white border border-slate-200/90 p-3.5 space-y-1.5 shadow-2xs">
                            <h4 className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#FA0F9C]">
                              WHAT YOU WILL GAIN
                            </h4>
                            <ul className="space-y-1">
                              {selectedRole.whatYouWillGain.map((g) => (
                                <li
                                  key={g.label}
                                  className="text-[11.5px] text-slate-700 leading-snug"
                                >
                                  <strong className="text-slate-900">{g.label}:</strong>{" "}
                                  {g.description}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {selectedRole.workEnvironment && (
                            <div className="rounded-xl bg-white border border-slate-200/90 p-3.5 space-y-1.5 shadow-2xs">
                              <h4 className="text-[10.5px] font-mono font-black uppercase tracking-wider text-[#008BF8]">
                                WORK ENVIRONMENT
                              </h4>
                              <ul className="space-y-1">
                                {selectedRole.workEnvironment.map((env) => (
                                  <li
                                    key={env}
                                    className="text-[11.5px] text-slate-700 leading-snug flex items-start gap-1.5"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#FA0F9C] mt-1.5 shrink-0" />
                                    <span>{env}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Pinned Dossier Action Footer */}
                    <div className="px-5 py-3.5 sm:px-6 border-t border-slate-200/80 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                      <div className="space-y-0.5 max-w-md">
                        <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500">
                          HOW TO APPLY
                        </div>
                        <p className="text-[11.5px] text-slate-600 leading-snug">
                          {selectedRole.howToApply}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        <Link
                          href="https://www.linkedin.com/company/saasnova/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-3d inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900"
                        >
                          <span>Apply on LinkedIn</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#008BF8]" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => openApplyModal(selectedRole.applyOption)}
                          className="btn-gradient btn-3d inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── SECTION 4: POLISHED LIGHT 3D OPEN APPLICATION STRIP ── */}
      <section
        id="open-application"
        data-nav-title="Open Application"
        data-nav-subtitle="Join the Team"
        className="relative px-3 pt-1 pb-10 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="card-3d-master rounded-[2rem] px-6 py-6 sm:px-9 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FA0F9C]/80 via-[#008BF8]/80 to-[#FA0F9C]/80" />

            <div className="space-y-1.5 pt-0.5">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#008BF8] bg-sky-50 border border-sky-200">
                OPEN APPLICATION
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Don&apos;t see the right fit?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Send an open application.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openApplyModal("Open Application")}
              className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white cursor-pointer shrink-0"
            >
              <span>Send Open Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* ── UPGRADED DARK-HEADER / STRUCTURED-FORM APPLICATION DIALOG ── */}
      <dialog
        ref={dialogRef}
        onCancel={(e) => {
          e.preventDefault();
          closeModal();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeModal();
        }}
        aria-labelledby="apply-modal-title"
        className="m-auto w-[calc(100%-1.5rem)] max-w-3xl rounded-[2rem] bg-white text-slate-900 p-0 border border-slate-200/90 shadow-[0_32px_80px_-10px_rgba(7,13,30,0.65)] backdrop:bg-slate-950/75 backdrop:backdrop-blur-md overflow-hidden"
      >
        {/* Sleek Dark #070D1E Header Banner */}
        <div className="relative bg-[#070D1E] text-white px-5 py-4 sm:px-7 sm:py-5 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#FA0F9C]" />
          <div className="pointer-events-none -top-12 right-8 absolute w-48 h-32 rounded-full bg-[#008BF8]/25 blur-2xl" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                  {modalRoleMeta ? modalRoleMeta.code : "GENERAL SUBMISSION"}
                </span>
                {modalRoleMeta && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <MapPin className="w-3 h-3 text-[#FA0F9C]" />
                    {modalRoleMeta.detailLocation} · {modalRoleMeta.workMode}
                  </span>
                )}
              </div>

              <h3 id="apply-modal-title" className="text-xl sm:text-2xl font-black tracking-tight">
                {modalRoleMeta ? modalRoleMeta.fullTitle : "Open Application"}
              </h3>
            </div>

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close application form"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-200 hover:text-white flex items-center justify-center cursor-pointer shrink-0 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="max-h-[78vh] overflow-y-auto bg-slate-50/75 p-4 sm:p-6">
          {submitted ? (
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 text-center space-y-4 shadow-xs">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-xl font-black text-slate-900">
                  Application Ready to Send
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thanks, <strong>{firstName}</strong>. Your application for{" "}
                  <strong>{roleValue}</strong> has been prepared—click below to dispatch directly to our hiring desk.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`mailto:operations@saasnova.ai?subject=${mailtoSubject}&body=${mailtoBody}`}
                  className="btn-gradient btn-3d inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white"
                >
                  <span>Email operations@saasnova.ai</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-3d px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
              {/* Group 1: Candidate Info */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-4 space-y-3 shadow-2xs">
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                  01 · CANDIDATE DETAILS
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      First Name <span className="text-rose-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Jane"
                      required
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        e.target.removeAttribute("aria-invalid");
                      }}
                      className="career-field w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      Last Name <span className="text-rose-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Smith"
                      required
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        e.target.removeAttribute("aria-invalid");
                      }}
                      className="career-field w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      Email <span className="text-rose-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@email.com"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        e.target.removeAttribute("aria-invalid");
                      }}
                      className="career-field w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      LinkedIn URL <span className="text-rose-500">*</span>
                    </span>
                    <input
                      type="url"
                      name="linkedin"
                      placeholder="https://linkedin.com/in/..."
                      required
                      value={linkedin}
                      onChange={(e) => {
                        setLinkedin(e.target.value);
                        e.target.removeAttribute("aria-invalid");
                      }}
                      className="career-field w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all"
                    />
                  </label>
                </div>
              </div>

              {/* Group 2: Role & Pitch */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-4 space-y-3 shadow-2xs">
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                  02 · ROLE &amp; BACKGROUND
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      Location <span className="text-rose-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, Country"
                      required
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        e.target.removeAttribute("aria-invalid");
                      }}
                      className="career-field w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      Role <span className="text-rose-500">*</span>
                    </span>
                    <div className="relative">
                      <select
                        name="role"
                        required
                        value={roleValue}
                        onChange={(e) => {
                          setRoleValue(e.target.value);
                          e.target.removeAttribute("aria-invalid");
                        }}
                        className="career-field w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 pl-3 pr-9 py-2 text-[13px] font-medium text-slate-900 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all truncate"
                      >
                        <option value="">Select...</option>
                        {ROLE_SELECT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    </div>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      Why this role? <span className="text-rose-500">*</span>
                    </span>
                    <textarea
                      name="why"
                      rows={2}
                      required
                      placeholder="What draws you to SaaSNova and this role?"
                      value={whyRole}
                      onChange={(e) => {
                        setWhyRole(e.target.value);
                        e.target.removeAttribute("aria-invalid");
                      }}
                      className="career-field w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all resize-y"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="text-xs font-bold text-slate-700">
                      Relevant background{" "}
                      <span className="text-slate-400 font-normal">(optional)</span>
                    </span>
                    <textarea
                      name="background"
                      rows={2}
                      placeholder="Any GTM, SaaS, cloud, or sales experience. Freshers welcome."
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#008BF8] focus:ring-4 focus:ring-sky-500/10 focus:outline-hidden transition-all resize-y"
                    />
                  </label>
                </div>
              </div>

              {/* Consent Bar & Action Row */}
              <label className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-200/90 px-3.5 py-2.5 cursor-pointer hover:border-slate-300 transition-colors">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="rounded border-slate-300 text-[#008BF8] focus:ring-[#008BF8]"
                />
                <span className="text-xs text-slate-600 leading-snug">
                  I consent to SaaSNova storing my info for recruitment. See Privacy Policy.{" "}
                  <span className="text-rose-500">*</span>
                </span>
              </label>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-500">
                  Direct to operations@saasnova.ai
                </span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-gradient btn-3d inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white cursor-pointer"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
