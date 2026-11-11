"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import TiltCard from "@/components/TiltCard";

type CloudId = "aws" | "azure" | "gcp";

interface CloudExecutionCard {
  id: CloudId;
  name: string;
  vendor: string;
  logo: string;
  topAccentClass: string;
  checkClass: string;
  items: string[];
}

const CLOUD_CARDS: CloudExecutionCard[] = [
  {
    id: "aws",
    name: "AWS Marketplace",
    vendor: "Amazon Web Services",
    logo: "/aws-logo.png",
    topAccentClass: "from-amber-400/90 via-amber-300/70 to-transparent",
    checkClass: "text-amber-400",
    items: [
      "Marketplace Listing Activation",
      "ISV Accelerate Activation",
      "Field Relationship Building",
    ],
  },
  {
    id: "azure",
    name: "Azure Marketplace",
    vendor: "Microsoft Azure",
    logo: "/azure-logo.png",
    topAccentClass: "from-sky-400/90 via-sky-300/70 to-transparent",
    checkClass: "text-sky-400",
    items: [
      "Marketplace Listing Activation",
      "Partner Program Navigation",
      "Microsoft Field Engagement",
    ],
  },
  {
    id: "gcp",
    name: "GCP Marketplace",
    vendor: "Google Cloud",
    logo: "/gcp-logo.png",
    topAccentClass: "from-blue-400/90 via-cyan-300/70 to-transparent",
    checkClass: "text-blue-400",
    items: [
      "Partner Advantage Activation",
      "Google Cloud Field Enablement",
      "Pipeline Visibility",
    ],
  },
];

export default function AboutHeroSection() {
  const [selectedCloud, setSelectedCloud] = useState<CloudId>("aws");

  return (
    <section
      id="about-hero"
      data-nav-title="About & Cloud"
      data-nav-subtitle="Cloud-Execution-Native"
      className="relative px-3 pt-3 pb-6 sm:px-6 sm:pt-4 sm:pb-8 lg:px-8 lg:min-h-[calc(100vh-7rem)] lg:flex lg:items-center scroll-mt-28"
    >
      {/* Ambient Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl h-[360px] bg-gradient-to-b from-[#008BF8]/15 via-[#FA0F9C]/10 to-transparent blur-3xl" />

      {/* Master Dark Blue Cockpit Card */}
      <div className="card-3d-master-dark relative z-10 mx-auto w-full max-w-7xl p-[2.5px] rounded-[2.25rem] bg-gradient-to-r from-[#FA0F9C] via-[#c026d3] to-[#008BF8] select-none">
        <div className="relative overflow-hidden rounded-[calc(2.25rem-2.5px)] bg-[#070D1E] px-5 py-7 sm:px-9 sm:py-9 lg:px-12 lg:py-10 text-white backdrop-blur-2xl space-y-6">
          {/* Top specular rim highlight & ambient glows */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 via-pink-400/90 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-gradient-to-r from-[#008BF8]/22 via-[#FA0F9C]/18 to-[#008BF8]/22 blur-[100px]" />

          {/* Header Narrative */}
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-slate-200 shadow-[0_3px_0_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ABOUT SAASNOVA · BUILT BY PRACTITIONERS · OPERATOR-LED EXECUTION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white leading-[1.12]">
              Not AWS-only. Not cloud-agnostic.
              <br className="hidden sm:inline" />{" "}
              <span className="text-gradient">Cloud-execution-native.</span>
            </h1>

            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed max-w-2xl mx-auto">
              SaaSNova is the GTM execution engine between ISVs and the cloud revenue their hyperscaler investment demands. GTM motions across AWS, Azure, and GCP are fundamentally different—we operate with execution depth across all three, not a primary cloud with two afterthoughts.
            </p>
          </div>

          {/* Interactive 3 Cloud Marketplace Cards inside Dark Recessed Well */}
          <div className="relative z-10 well-recessed-dark rounded-[1.75rem] p-3.5 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLOUD_CARDS.map((card) => {
                const isActive = selectedCloud === card.id;
                return (
                  <TiltCard
                    key={card.id}
                    onClick={() => setSelectedCloud(card.id)}
                    variant={isActive ? "dark-active" : "dark"}
                    intensity={7}
                    className="relative p-5 rounded-2xl cursor-pointer overflow-hidden flex flex-col justify-between"
                  >
                    {/* Subtle Cloud Rim Top Glow */}
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r ${card.topAccentClass}`}
                    />

                    <div className="space-y-3.5">
                      {/* Header with Cloud Logo + Marketplace Name */}
                      <div className="flex items-center gap-3">
                        <div className="icon-3d flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
                          <Image
                            src={card.logo}
                            alt={card.vendor}
                            width={22}
                            height={22}
                            priority
                            fetchPriority="high"
                            className="h-4.5 w-auto object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <h2 className="text-sm sm:text-base font-bold text-white leading-tight">
                            {card.name}
                          </h2>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">
                            {card.vendor}
                          </p>
                        </div>
                      </div>

                      {/* Execution Capabilities List */}
                      <ul className="space-y-2 pt-2 border-t border-white/10">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200 font-medium"
                          >
                            <Check className={`w-4 h-4 shrink-0 ${card.checkClass}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
