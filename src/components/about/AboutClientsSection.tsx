"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface LogoClient {
  name: string;
  logoSrc: string;
  logoClass: string;
}

const CARD_WHITE_CLASS =
  "rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_0_#e2e8f0,0_4px_0_#cbd5e1,0_10px_18px_-4px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,1)] px-3 py-2 flex items-center justify-center min-h-[66px] overflow-hidden hover:-translate-y-0.5 transition-transform duration-200";

const SECURITY_LOGOS: LogoClient[] = [
  {
    name: "Arctic Wolf",
    logoSrc: "/arcticwolf.png",
    logoClass: "h-12 sm:h-14 w-auto max-w-[155px]",
  },
  {
    name: "BeyondTrust",
    logoSrc: "/beyondtrust.svg",
    logoClass: "h-8 sm:h-9 w-auto max-w-[155px]",
  },
];
const SECURITY_TEXT = ["Veracode", "Contrast Security", "AppViewX"];

const INFRA_LOGOS: LogoClient[] = [
  {
    name: "HashiCorp",
    logoSrc: "/hashicorp-ar21.svg",
    logoClass: "h-9 sm:h-10 w-auto max-w-[140px]",
  },
  {
    name: "New Relic",
    logoSrc: "/newrelic.svg",
    logoClass: "h-16 sm:h-20 w-auto max-w-[165px] -my-3 scale-125",
  },
  {
    name: "Druva",
    logoSrc: "/Druva_Logo_tagline_Color.svg",
    logoClass: "h-10 sm:h-11 w-auto max-w-[132px]",
  },
  {
    name: "Postman",
    logoSrc: "/Postman--Streamline-Svg-Logos.svg",
    logoClass: "h-24 sm:h-28 w-24 sm:w-28 -my-8 scale-125",
  },
  {
    name: "Fastly",
    logoSrc: "/Fastly--Streamline-Svg-Logos.svg",
    logoClass: "h-24 sm:h-28 w-24 sm:w-28 -my-8 scale-125",
  },
];

const DATA_LOGOS: LogoClient[] = [
  {
    name: "ClickHouse",
    logoSrc: "/clickhouse-1.svg",
    logoClass: "h-9 sm:h-10 w-auto max-w-[148px]",
  },
  {
    name: "Denodo",
    logoSrc: "/denodo.svg",
    logoClass: "h-8 sm:h-9 w-auto max-w-[130px]",
  },
  {
    name: "Kore.ai",
    logoSrc: "/kore-ai-logo-png_seeklogo-504534.png",
    logoClass: "h-16 sm:h-20 w-auto max-w-[132px] -my-3",
  },
];
const DATA_TEXT = ["LiveRamp", "Dataminr", "Flywheel.io"];

const SAAS_LOGOS: LogoClient[] = [
  {
    name: "Freshworks",
    logoSrc: "/freshworks-logo-png.png",
    logoClass: "h-20 sm:h-24 w-auto max-w-[146px] -my-4 scale-115",
  },
  {
    name: "JamF",
    logoSrc: "/jamf.png",
    logoClass: "h-8 sm:h-9 w-auto max-w-[120px]",
  },
  {
    name: "ZoomInfo",
    logoSrc: "/zoominfo.svg",
    logoClass: "h-8 sm:h-9 w-auto max-w-[135px]",
  },
];

export default function AboutClientsSection() {
  return (
    <section
      id="clients"
      data-nav-title="Our Trusted Clients"
      data-nav-subtitle="100+ ISVs Activated"
      className="relative px-3 py-8 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
        <div className="card-3d-master relative rounded-[2.25rem] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 overflow-hidden space-y-6 select-none">
          {/* Ambient Light Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-56 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-56 rounded-full bg-pink-200/30 blur-3xl" />

          {/* Clean Centered Header */}
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[#008BF8] bg-sky-50 border border-sky-200">
              OUR TRUSTED CLIENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              100+ ISVs <span className="text-gradient">activated.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Security, infrastructure, data, and SaaS categories, across Hyperscalers.
            </p>
          </div>

          {/* ── 2x2 SYMMETRICAL WHITE-KEYCAP VERTICAL BENTO ON LIGHT RECESSED TRAYS ── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Pod 1: Security & Identity */}
            <div className="well-recessed relative rounded-[1.5rem] p-4 sm:p-5 overflow-hidden space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FA0F9C]" />
                <h3 className="text-sm font-extrabold tracking-tight text-slate-900">
                  Security &amp; Identity
                </h3>
              </div>
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  {SECURITY_LOGOS.map((client) => (
                    <div key={client.name} className={CARD_WHITE_CLASS}>
                      <Image
                        src={client.logoSrc}
                        alt={client.name}
                        width={160}
                        height={64}
                        loading="lazy"
                        className={`${client.logoClass} object-contain mix-blend-multiply`}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SECURITY_TEXT.map((name, idx) => (
                    <div
                      key={name}
                      className={`${CARD_WHITE_CLASS} ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <span className="text-sm font-black tracking-tight text-slate-900 text-center">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pod 2: Infrastructure & DevTools */}
            <div className="well-recessed relative rounded-[1.5rem] p-4 sm:p-5 overflow-hidden space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008BF8]" />
                <h3 className="text-sm font-extrabold tracking-tight text-slate-900">
                  Infrastructure &amp; DevTools
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
                {INFRA_LOGOS.map((client, idx) => {
                  const desktopSpan = idx < 3 ? "sm:col-span-2" : "sm:col-span-3";
                  const mobileSpan =
                    client.name === "Fastly" ? "col-span-2 sm:col-span-3" : "";
                  return (
                    <div
                      key={client.name}
                      className={`${CARD_WHITE_CLASS} ${desktopSpan} ${mobileSpan}`}
                    >
                      <Image
                        src={client.logoSrc}
                        alt={client.name}
                        width={160}
                        height={64}
                        loading="lazy"
                        className={`${client.logoClass} object-contain mix-blend-multiply`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pod 3: Data & Enterprise AI */}
            <div className="well-recessed relative rounded-[1.5rem] p-4 sm:p-5 overflow-hidden space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008BF8]" />
                <h3 className="text-sm font-extrabold tracking-tight text-slate-900">
                  Data &amp; Enterprise AI
                </h3>
              </div>
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {DATA_LOGOS.map((client, idx) => (
                    <div
                      key={client.name}
                      className={`${CARD_WHITE_CLASS} ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <Image
                        src={client.logoSrc}
                        alt={client.name}
                        width={160}
                        height={64}
                        loading="lazy"
                        className={`${client.logoClass} object-contain mix-blend-multiply`}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {DATA_TEXT.map((name, idx) => (
                    <div
                      key={name}
                      className={`${CARD_WHITE_CLASS} ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <span className="text-sm font-black tracking-tight text-slate-900 text-center">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pod 4: Enterprise SaaS */}
            <div className="well-recessed relative rounded-[1.5rem] p-4 sm:p-5 overflow-hidden space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FA0F9C]" />
                <h3 className="text-sm font-extrabold tracking-tight text-slate-900">
                  Enterprise SaaS
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {SAAS_LOGOS.map((client) => (
                  <div key={client.name} className={CARD_WHITE_CLASS}>
                    <Image
                      src={client.logoSrc}
                      alt={client.name}
                      width={160}
                      height={64}
                      loading="lazy"
                      className={`${client.logoClass} object-contain mix-blend-multiply`}
                    />
                  </div>
                ))}
                <div className={CARD_WHITE_CLASS}>
                  <span className="text-base sm:text-lg font-black tracking-tight text-gradient">
                    + 80 more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
