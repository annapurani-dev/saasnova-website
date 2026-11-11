"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertTriangle, Check, CheckCircle2, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export interface DetailStatItem {
  label: string;
  value: string;
  valueClassName?: string;
}

export interface DetailCapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface HighlightPillarItem {
  number: string;
  title: string;
  description: string;
}

export interface StageFitItem {
  title: string;
  description: string;
}

export interface ExecutionPillarItem {
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface ResourceGapSpec {
  eyebrow: string;
  heading: string;
  subheading: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

export interface SolutionDetailSectionProps {
  id: string;
  navTitle: string;
  navSubtitle: string;
  badgeText: string;
  badgeClassName: string;
  secondaryBadge?: string;
  cloudLogos?: ("aws" | "azure" | "gcp")[];
  showCloudLogos?: boolean;
  title: string;
  description: string;
  importantNotice?: string;
  stats?: DetailStatItem[];
  focusBox?: {
    label: string;
    labelClassName: string;
    body: string;
  };
  ctaHref: string;
  ctaLabel: string;
  ctaIcon: ReactNode;
  ctaClassName: string;
  accentTextClassName?: string;

  /* ── Full SaaSNova.ai Sections ── */
  highlights?: HighlightPillarItem[];
  resourceGap?: ResourceGapSpec;
  idealStage?: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cards: StageFitItem[];
  };
  executionGrid?: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cards: DetailCapabilityItem[];
  };
  executionPillars?: {
    eyebrow: string;
    heading: string;
    subheading: string;
    pillars: ExecutionPillarItem[];
  };
  roiSection?: {
    eyebrow: string;
    heading: string;
    subheading: string;
    outputs: string[];
    impact: string[];
  };

  /* ── Compact Mode (e.g. SFaaS) ── */
  capabilitiesTitle?: string;
  capabilityNumberClassName?: string;
  capabilities?: DetailCapabilityItem[];
  callout?: {
    icon: ReactNode;
    title: string;
    body: string;
    className: string;
  };

  cardClassName?: string;
  featuredGlow?: boolean;
}

const CLOUD_LOGO_META = {
  aws: { src: "/aws-logo.png", alt: "AWS", title: "Amazon Web Services (AWS)" },
  azure: { src: "/azure-logo.png", alt: "Azure", title: "Microsoft Azure" },
  gcp: { src: "/gcp-logo.png", alt: "GCP", title: "Google Cloud Platform (GCP)" },
} as const;

export default function SolutionDetailSection({
  id,
  navTitle,
  navSubtitle,
  badgeText,
  badgeClassName,
  secondaryBadge,
  cloudLogos,
  showCloudLogos = false,
  title,
  description,
  importantNotice,
  stats,
  focusBox,
  ctaHref,
  ctaLabel,
  ctaIcon,
  ctaClassName,
  accentTextClassName = "text-[#008BF8]",
  highlights,
  resourceGap,
  idealStage,
  executionGrid,
  executionPillars,
  roiSection,
  capabilitiesTitle,
  capabilityNumberClassName = "text-[#008BF8]",
  capabilities,
  callout,
  cardClassName = "",
  featuredGlow = false,
}: SolutionDetailSectionProps) {
  const logosToRender: ("aws" | "azure" | "gcp")[] =
    cloudLogos || (showCloudLogos ? ["aws", "azure", "gcp"] : []);

  const hasRichLayout = Boolean(highlights || executionPillars || executionGrid || roiSection);

  return (
    <section
      id={id}
      data-nav-title={navTitle}
      data-nav-subtitle={navSubtitle}
      className="relative px-3 py-6 sm:px-6 lg:px-8 scroll-mt-28"
    >
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
        <div
          id={`${id}-details`}
          className={`card-3d-master rounded-[2.5rem] p-6 sm:p-10 scroll-mt-28 relative ${cardClassName}`}
        >
          <span id={`${id}-anchor`} className="scroll-mt-28 block" />
          {featuredGlow && (
            <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
          )}

          {hasRichLayout ? (
            <div className="space-y-8 relative z-10">
              {/* ── BAND 1: OVERVIEW HEADER + CTA + 3 CORE PILLARS ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold ${badgeClassName}`}
                    >
                      {badgeText}
                    </span>
                    {secondaryBadge && (
                      <span className="btn-gradient inline-flex items-center px-3 py-1 rounded-full text-white text-[10px] font-mono font-black tracking-wider uppercase shadow-sm">
                        {secondaryBadge}
                      </span>
                    )}
                    {logosToRender.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        {logosToRender.map((cloud) => (
                          <span
                            key={cloud}
                            title={CLOUD_LOGO_META[cloud].title}
                            className="icon-3d inline-flex items-center justify-center h-7 px-2.5 rounded-lg"
                          >
                            <Image
                              src={CLOUD_LOGO_META[cloud].src}
                              alt={CLOUD_LOGO_META[cloud].alt}
                              width={16}
                              height={16}
                              className="h-3 w-auto object-contain"
                            />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {description}
                  </p>

                  {importantNotice && (
                    <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold uppercase tracking-wider text-amber-800 mr-1.5">
                          Important Notice:
                        </span>
                        <span className="leading-relaxed">{importantNotice}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <Link
                      href={ctaHref}
                      target="_blank"
                      className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-xs font-bold transition-all w-full sm:w-auto"
                    >
                      <span>{ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Highlight Cards (01 / 02 / 03) */}
                {highlights && highlights.length > 0 && (
                  <div className="lg:col-span-5 well-recessed rounded-3xl p-3.5 sm:p-4 space-y-2.5">
                    {highlights.map((item) => (
                      <div key={item.number} className="card-3d p-3.5 rounded-2xl space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono font-bold ${accentTextClassName}`}>
                            {item.number}
                          </span>
                          <span className="font-bold text-xs sm:text-sm text-slate-900">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ── BAND 2: RESOURCE GAP COMPARISON (Services & Infra) ── */}
              {resourceGap && (
                <div className="pt-6 border-t border-slate-200/70 space-y-4">
                  <div className="max-w-3xl space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {resourceGap.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {resourceGap.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {resourceGap.subheading}
                    </p>
                  </div>

                  <div className="well-recessed rounded-3xl p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-3d p-5 rounded-2xl space-y-3">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                        {resourceGap.leftTitle}
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {resourceGap.leftItems.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-rose-500 font-bold shrink-0">✕</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-3d p-5 rounded-2xl space-y-3 border border-slate-900/10">
                      <div className={`text-xs font-mono font-bold uppercase tracking-wider ${accentTextClassName}`}>
                        {resourceGap.rightTitle}
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {resourceGap.rightItems.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── BAND 3: IDEAL STAGE / TARGET FIT (3 Cards) ── */}
              {idealStage && (
                <div className="pt-6 border-t border-slate-200/70 space-y-4">
                  <div className="max-w-3xl space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {idealStage.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {idealStage.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {idealStage.subheading}
                    </p>
                  </div>

                  <div className="well-recessed rounded-3xl p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {idealStage.cards.map((card) => (
                      <div key={card.title} className="card-3d p-4 rounded-2xl space-y-1.5">
                        <div className="font-bold text-sm text-slate-900">{card.title}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── BAND 4A: WHAT WE EXECUTE 4-CARD GRID (Programs) ── */}
              {executionGrid && (
                <div className="pt-6 border-t border-slate-200/70 space-y-4">
                  <div className="max-w-3xl space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {executionGrid.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {executionGrid.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {executionGrid.subheading}
                    </p>
                  </div>

                  <div className="well-recessed rounded-3xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {executionGrid.cards.map((cap) => (
                      <div key={cap.number} className="card-3d p-4 rounded-2xl space-y-1.5">
                        <span className={`text-xs font-mono font-bold ${accentTextClassName}`}>
                          {cap.number}
                        </span>
                        <div className="font-bold text-sm text-slate-900">{cap.title}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── BAND 4B: 3 EXECUTION PILLARS WITH CHECKLISTS (Services & Infra) ── */}
              {executionPillars && (
                <div className="pt-6 border-t border-slate-200/70 space-y-4">
                  <div className="max-w-3xl space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {executionPillars.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {executionPillars.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {executionPillars.subheading}
                    </p>
                  </div>

                  <div className="well-recessed rounded-3xl p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {executionPillars.pillars.map((pillar) => (
                      <div key={pillar.number} className="card-3d p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className={`text-xs font-mono font-bold ${accentTextClassName}`}>
                            {pillar.number}
                          </span>
                          <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                            {pillar.title}
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {pillar.subtitle}
                          </p>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 pt-3 border-t border-slate-200/60">
                          {pillar.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── BAND 5: OUTPUTS & IMPACT ── */}
              {roiSection && (
                <div className="pt-6 border-t border-slate-200/70 space-y-4">
                  <div className="max-w-3xl space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {roiSection.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {roiSection.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {roiSection.subheading}
                    </p>
                  </div>

                  <div className="well-recessed rounded-3xl p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-3d p-5 rounded-2xl space-y-3">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${accentTextClassName}`} />
                        <span>Outputs</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {roiSection.outputs.map((out) => (
                          <li key={out} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-3d p-5 rounded-2xl space-y-3 bg-gradient-to-br from-slate-50/90 to-white">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FA0F9C]" />
                        <span>Impact</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {roiSection.impact.map((imp) => (
                          <li key={imp} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#FA0F9C] shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-800">{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ── COMPACT LAYOUT (e.g. SFaaS) ── */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold ${badgeClassName}`}
                  >
                    {badgeText}
                  </div>
                  {logosToRender.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      {logosToRender.map((cloud) => (
                        <span
                          key={cloud}
                          title={CLOUD_LOGO_META[cloud].title}
                          className="icon-3d inline-flex items-center justify-center h-7 px-2.5 rounded-lg"
                        >
                          <Image
                            src={CLOUD_LOGO_META[cloud].src}
                            alt={CLOUD_LOGO_META[cloud].alt}
                            width={16}
                            height={16}
                            className="h-3 w-auto object-contain"
                          />
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

                {stats && stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {stats.map((stat) => (
                      <div key={stat.label} className="card-3d p-3 rounded-2xl">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          {stat.label}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            stat.valueClassName || "text-slate-900"
                          }`}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {focusBox && (
                  <div className="card-3d p-4 rounded-2xl space-y-1">
                    <div
                      className={`text-xs font-mono font-bold uppercase ${focusBox.labelClassName}`}
                    >
                      {focusBox.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {focusBox.body}
                    </div>
                  </div>
                )}

                <Link
                  href={ctaHref}
                  target="_blank"
                  className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-xs font-bold transition-all w-full sm:w-auto"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {capabilitiesTitle && (
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    {capabilitiesTitle}
                  </h3>
                )}

                {capabilities && (
                  <div className="well-recessed rounded-3xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {capabilities.map((cap) => (
                      <div key={cap.number} className="card-3d p-4 rounded-2xl space-y-1.5">
                        <span className={`text-xs font-mono font-bold ${capabilityNumberClassName}`}>
                          {cap.number}
                        </span>
                        <div className="font-bold text-sm text-slate-900">{cap.title}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {callout && (
                  <div
                    className={`p-3.5 rounded-2xl border text-xs text-slate-700 flex items-start gap-2.5 ${callout.className}`}
                  >
                    {callout.icon}
                    <div>
                      <span className="font-bold text-slate-900">{callout.title}</span>{" "}
                      {callout.body}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
