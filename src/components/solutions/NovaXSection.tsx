"use client";

import { Globe } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function NovaXSection() {
  return (
    <SolutionDetailSection
      id="novax"
      navTitle="NovaX"
      navSubtitle="6 Months · Multi-Cloud Scale"
      badgeText="6 MONTHS · GLOBAL MULTI-CLOUD EXECUTION"
      badgeClassName="bg-sky-100 text-[#008BF8]"
      cloudLogos={["aws", "azure", "gcp"]}
      title="SaaSNova NovaX"
      description="For ISVs expanding beyond early traction into repeatable, attributable, multi-cloud revenue. Built for teams ready to operationalize co-sell, scale partner-led pipeline, and mature their cloud GTM engine across AWS, Azure, and GCP."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<Globe className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#008BF8]"
      highlights={[
        {
          number: "01",
          title: "Multi-cloud orchestration",
          description:
            "Orchestrate co-sell motions across AWS, Azure, and GCP while scaling partner-led pipeline with SIs and GSIs.",
        },
        {
          number: "02",
          title: "PRM & Lifecycle automation",
          description:
            "Design and operationalize PRM workflows, partner lifecycle automation, and listing optimization.",
        },
        {
          number: "03",
          title: "Scalable attribution",
          description:
            "Implement scalable tagging, attribution, and co-sell evidence systems with field-aligned narratives.",
        },
      ]}
      idealStage={{
        eyebrow: "WHO NOVAX IS FOR",
        heading: "Built for ISVs where cloud marketplace is a core revenue strategy.",
        subheading:
          "Not an experiment. Not a test case. A primary revenue channel that requires continuous execution, consistent board reporting, and a team accountable for outcomes across every cloud in your portfolio.",
        cards: [
          {
            title: "Series A → Series C",
            description:
              "For ISVs operating on one or more clouds and actively expanding into multi-cloud GTM.",
          },
          {
            title: "Expanding Beyond Early Traction",
            description:
              "For ISVs expanding into repeatable, attributable, multi-cloud revenue with reliable execution.",
          },
          {
            title: "Operationalizing Co-Sell",
            description:
              "Built for teams ready to operationalize co-sell, scale partner-led pipeline, and mature their cloud GTM engine.",
          },
        ],
      }}
      executionGrid={{
        eyebrow: "EXECUTION SCOPE",
        heading: "What We Execute",
        subheading:
          "One program. One team. Comprehensive execution and accountability across AWS, Azure, and GCP.",
        cards: [
          {
            number: "01",
            title: "Multi-cloud co-sell",
            description:
              "Orchestrate multi-cloud co-sell motions across AWS, Azure, and GCP while guiding and optimizing Marketplace listings.",
          },
          {
            number: "02",
            title: "Partner-led pipeline",
            description:
              "Activate and scale partner-led pipeline with SIs, GSIs, and strategic channel partners.",
          },
          {
            number: "03",
            title: "Listing optimization & PRM",
            description:
              "Design and operationalize PRM workflows and partner lifecycle automation (recruit → onboard → activate → co-sell).",
          },
          {
            number: "04",
            title: "Scalable attribution & messaging",
            description:
              "Implement scalable tagging, attribution, and co-sell evidence systems alongside field-aligned “Better Together” narratives.",
          },
        ],
      }}
      roiSection={{
        eyebrow: "EXECUTION LEADS TO EVIDENCE",
        heading: "Outputs & Impact",
        subheading:
          "Repeatable multi-cloud revenue across AWS, Azure, and GCP.",
        outputs: [
          "Validated co-sell opportunities across ACE, Partner Center, and Partner Advantage",
          "Scalable attribution model for cloud-influenced and partner-sourced revenue",
          "Marketplace optimization plan + listing hygiene across all three hyperscalers",
          "PRM-powered partner lifecycle automation (recruit → onboard → activate → co-sell)",
          "GTM performance report with multi-cloud traction evidence",
          "SI/GSI engagement map with prioritized partner motions",
        ],
        impact: [
          "3–5X increase in attributable cloud revenue across AWS, Azure, and GCP",
          "2–3X stronger SI/GSI alignment and partner-sourced pipeline",
          "40–60% higher co-sell acceptance rates through clean tagging",
          "25–40% lift in Marketplace-influenced revenue",
          "1–2 quarters earlier visibility for cloud field teams and investors",
          "A scalable multi-cloud GTM engine accelerating Series B → Series C readiness",
        ],
      }}
    />
  );
}
