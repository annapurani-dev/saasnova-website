"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface ClientItem {
  name: string;
  logoSrc?: string;
  logoClass?: string;
  domain: string;
}

const ALL_CLIENTS: ClientItem[] = [
  // 1-5
  {
    name: "Arctic Wolf",
    logoSrc: "/arcticwolf.png",
    logoClass: "h-9 sm:h-10 w-auto max-w-[140px] scale-110",
    domain: "Security",
  },
  {
    name: "BeyondTrust",
    logoSrc: "/beyondtrust.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[125px]",
    domain: "Security",
  },
  {
    name: "HashiCorp",
    logoSrc: "/hashicorp-ar21.svg",
    logoClass: "h-7 sm:h-8 w-auto max-w-[125px]",
    domain: "Infrastructure",
  },
  {
    name: "New Relic",
    logoSrc: "/newrelic.svg",
    logoClass: "h-8 sm:h-9 w-auto max-w-[130px]",
    domain: "Observability",
  },
  {
    name: "Postman",
    logoSrc: "/Postman--Streamline-Svg-Logos.svg",
    logoClass: "h-8 sm:h-9 w-auto max-w-[125px]",
    domain: "DevTools",
  },
  // 6-10
  {
    name: "Druva",
    logoSrc: "/Druva_Logo_tagline_Color.svg",
    logoClass: "h-7 sm:h-8 w-auto max-w-[115px]",
    domain: "Cloud Data",
  },
  {
    name: "Fastly",
    logoSrc: "/Fastly--Streamline-Svg-Logos.svg",
    logoClass: "h-7 sm:h-8 w-auto max-w-[120px]",
    domain: "Edge Cloud",
  },
  {
    name: "ClickHouse",
    logoSrc: "/clickhouse-1.svg",
    logoClass: "h-7 sm:h-8 w-auto max-w-[125px]",
    domain: "Database",
  },
  {
    name: "Denodo",
    logoSrc: "/denodo.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[115px]",
    domain: "Data Integration",
  },
  {
    name: "Kore.ai",
    logoSrc: "/kore-ai-logo-png_seeklogo-504534.png",
    logoClass: "h-9 sm:h-10 w-auto max-w-[140px] scale-125",
    domain: "Enterprise AI",
  },
  // 11-15
  {
    name: "Freshworks",
    logoSrc: "/freshworks-logo-png.png",
    logoClass: "h-8 sm:h-9 w-auto max-w-[125px]",
    domain: "Enterprise SaaS",
  },
  {
    name: "Jamf",
    logoSrc: "/jamf.png",
    logoClass: "h-6 sm:h-7 w-auto max-w-[110px]",
    domain: "Apple Management",
  },
  {
    name: "ZoomInfo",
    logoSrc: "/zoominfo.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[120px]",
    domain: "GTM Intelligence",
  },
  {
    name: "Veracode",
    logoSrc: "/veracode.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[130px]",
    domain: "AppSec",
  },
  {
    name: "Dataminr",
    logoSrc: "/images/dataminr-logo.png",
    logoClass: "h-7 sm:h-8 w-auto max-w-[125px]",
    domain: "Real-time AI",
  },
  // 16-19
  {
    name: "LiveRamp",
    logoSrc: "/liveramp.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[125px]",
    domain: "Data Collaboration",
  },
  {
    name: "Contrast Security",
    logoSrc: "/contrast-security.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[135px]",
    domain: "Security",
  },
  {
    name: "AppViewX",
    logoSrc: "/appviewx.svg",
    logoClass: "h-7 sm:h-8 w-auto max-w-[130px]",
    domain: "Certificate Lifecycle",
  },
  {
    name: "Flywheel.io",
    logoSrc: "/flywheel.svg",
    logoClass: "h-6 sm:h-7 w-auto max-w-[130px]",
    domain: "Medical Imaging",
  },
];

export default function AboutClientsSection() {
  return (
    <section
      id="clients"
      data-nav-title="Our Trusted Clients"
      data-nav-subtitle="100+ ISVs Activated"
      className="relative px-4 sm:px-6 lg:px-8 py-20 bg-transparent border-b border-slate-200/60 scroll-mt-24 select-none overflow-hidden"
    >
      {/* ── Ambient Studio Glows ── */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[540px] h-[540px] rounded-full bg-[#008BF8]/6 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[540px] h-[540px] rounded-full bg-[#FA0F9C]/6 blur-[140px]" />

      <ScrollReveal once={true} variant="up" className="mx-auto max-w-7xl w-full relative z-10 space-y-10">
        
        {/* ── Section Header (Clean, No Gradient) ── */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.14]">
            100+ ISVs Activated
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Leading enterprise software companies across Security, Infrastructure, Data &amp; AI, and SaaS executing their AWS, Azure, and Google Cloud co-sell with SaaSNova.
          </p>
        </div>

        {/* ── Master 3D Platform with Blue Accent Border & Ice-Blue Chassis ── */}
        <div className="p-[1.5px] rounded-[2.25rem] sm:rounded-[2.5rem] bg-gradient-to-r from-[#008BF8] via-sky-400 to-[#008BF8] shadow-[0_24px_70px_rgba(0,139,248,0.16),0_4px_0_#cbd5e1]">
          <div className="relative rounded-[calc(2.25rem-1.5px)] sm:rounded-[calc(2.5rem-1.5px)] bg-gradient-to-b from-[#EDF5FE] via-[#E4F0FD] to-[#EDF5FE] p-4 sm:p-6 lg:p-8 overflow-hidden border-t-2 border-white space-y-6">
            
            {/* Specular top rim light */}
            <div className="pointer-events-none absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Recessed Interior Bed for Cards */}
            <div className="rounded-[1.75rem] bg-slate-50 p-3 sm:p-5 shadow-[inset_0_2px_6px_rgba(15,23,42,0.04)] border border-slate-200/70">
              
              {/* ── Unified 20-Tile Logo Grid (5x4 on desktop, 4x5 on tablet, 2x10 on mobile) ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5">
                {ALL_CLIENTS.map((client) => (
                  <div
                    key={client.name}
                    className="bg-white rounded-2xl border border-slate-200/85 shadow-[0_1px_0_#e2e8f0,0_2px_0_#d5dee9,0_3px_0_#c4d0e0,0_8px_18px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_2px_0_#cbd5e1,0_4px_0_#b4c3d6,0_14px_28px_-6px_rgba(0,139,248,0.14)] hover:-translate-y-1 transition-all duration-300 p-3 sm:p-4 h-[86px] sm:h-[96px] flex flex-col items-center justify-center overflow-hidden group cursor-default"
                  >
                    {client.logoSrc ? (
                      <Image
                        src={client.logoSrc}
                        alt={client.name}
                        width={140}
                        height={50}
                        priority={true}
                        className={`${client.logoClass} object-contain transition-transform duration-300 group-hover:scale-105`}
                      />
                    ) : (
                      <span className="font-display font-black text-sm sm:text-base tracking-tight text-slate-800 group-hover:text-[#008BF8] transition-colors text-center">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}

                {/* ── 20th Accent Tile: +80 More ISVs (Clean White, No Gradients Inside) ── */}
                <div className="bg-white rounded-2xl border border-slate-200/85 shadow-[0_1px_0_#e2e8f0,0_2px_0_#d5dee9,0_3px_0_#c4d0e0,0_8px_18px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_2px_0_#cbd5e1,0_4px_0_#b4c3d6,0_14px_28px_-6px_rgba(0,139,248,0.14)] hover:-translate-y-1 transition-all duration-300 p-3 sm:p-4 h-[86px] sm:h-[96px] flex flex-col items-center justify-center overflow-hidden group cursor-default">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
                    + 80 More
                  </span>
                  <span className="mt-1 text-[8.5px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    ACROSS HYPERSCALERS
                  </span>
                </div>
              </div>

            </div>

            {/* ── Bottom Proof Strip (Execution Outputs) ── */}
            <div className="pt-2 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">2,000+</p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">PSQLs Generated</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">9X</p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Validated ROI</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">$300K+</p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">MDF Secured</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">100%</p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Operator-Executed</p>
              </div>
            </div>

          </div>
        </div>

      </ScrollReveal>
    </section>
  );
}
