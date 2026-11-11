"use client";

import { Zap } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function SuperNovaSection() {
  return (
    <SolutionDetailSection
      id="supernova"
      navTitle="SuperNova"
      navSubtitle="4 Months · US Market Entry"
      badgeText="4 MONTHS · US MARKET ENTRY"
      badgeClassName="bg-pink-100 text-[#FA0F9C]"
      secondaryBadge="MOST POPULAR"
      cloudLogos={["aws", "azure", "gcp"]}
      title="SaaSNova SuperNova"
      description="Designed for APAC and EMEA ISVs entering the US market with cloud-attributed revenue goals. For global ISVs entering or expanding in the US market with cloud-validated GTM traction."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<Zap className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#FA0F9C]"
      highlights={[
        {
          number: "01",
          title: "US GTM activation",
          description:
            "Channel partner, SI/GSI, and Distributor activation specifically tailored for the US market.",
        },
        {
          number: "02",
          title: "Field engagement",
          description:
            "Drive targeted field engagement across hyperscaler communities and build clear attribution models.",
        },
        {
          number: "03",
          title: "Fractional alliance leadership",
          description:
            "Ongoing fractional leadership across co-sell, partners, field, and pipeline.",
        },
      ]}
      idealStage={{
        eyebrow: "WHO SUPERNOVA IS FOR",
        heading: "Global ISVs. US revenue target. Execution-first approach.",
        subheading:
          "SuperNova is built for ISVs based outside the US who need to build repeatable US co-sell revenue across cloud marketplaces and for ISVs in fundraising who need investor-grade GTM evidence fast.",
        cards: [
          {
            title: "Series A → Series B",
            description:
              "For ISVs proving US traction and cloud-validated revenue, including those operating on one or more clouds.",
          },
          {
            title: "APAC and EMEA ISVs",
            description:
              "Designed specifically for global ISVs entering the US market with cloud-attributed revenue goals.",
          },
          {
            title: "Cloud-Validated Traction",
            description:
              "For teams that need ongoing fractional alliance leadership across co-sell, partners, field, and pipeline.",
          },
        ],
      }}
      executionGrid={{
        eyebrow: "EXECUTION SCOPE",
        heading: "What We Execute",
        subheading:
          "Scoped to your cloud mix and US entry territory. Every deliverable is named at engagement start.",
        cards: [
          {
            number: "01",
            title: "US GTM activation",
            description:
              "US GTM activation via channel partners, SI/GSIs, and Distributors designed to penetrate the US market effectively.",
          },
          {
            number: "02",
            title: "Field engagement",
            description:
              "Field engagement across hyperscaler communities to drive visibility and structural co-sell motion.",
          },
          {
            number: "03",
            title: "Attribution models",
            description:
              "Establishment of clear attribution models for cloud-influenced US deals.",
          },
          {
            number: "04",
            title: "Fractional alliance leadership",
            description:
              "Ongoing fractional alliance leadership across co-sell, partners, field, and pipeline, plus executive-ready GTM evidence.",
          },
        ],
      }}
      roiSection={{
        eyebrow: "EXECUTION LEADS TO EVIDENCE",
        heading: "Outputs & Impact",
        subheading:
          "Measurable US co-sell momentum and investor-ready GTM attribution.",
        outputs: [
          "Verified US co-sell opportunities in your cloud co-sell system",
          "First US-based cloud-attributable signal",
          "PRM implemented with service-level consumption data visible",
          "Executive-ready US GTM evidence package",
          "US partner + Channel map with CPPO count",
          "Early proof points supporting ISV Accelerate progression",
        ],
        impact: [
          "2-4X stronger US field engagement",
          "40-60% fewer US co-sell rejections through validated submissions",
          "1-2 quarters earlier US pipeline visibility",
          "Higher investor confidence through validated US GTM traction",
        ],
      }}
      cardClassName="border-2 border-[#FA0F9C]/45 overflow-hidden"
      featuredGlow
    />
  );
}
