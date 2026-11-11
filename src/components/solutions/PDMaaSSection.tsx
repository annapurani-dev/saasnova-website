"use client";

import { TrendingUp } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function PDMaaSSection() {
  return (
    <SolutionDetailSection
      id="pdmaas"
      navTitle="PDMaaS"
      navSubtitle="Partner Development"
      badgeText="PARTNER DEVELOPMENT MANAGER"
      badgeClassName="bg-sky-100 text-[#008BF8]"
      cloudLogos={["aws", "azure", "gcp"]}
      title="PDM as a Service"
      description="SaaSNova helps run a real AWS co-sell motion without hiring a PDM. We deliver operator-grade partner development execution with weekly field engagement, ACE pipeline progression, funding workflows, and Marketplace readiness so ISVs activate faster and scale with discipline."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<TrendingUp className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#008BF8]"
      highlights={[
        {
          number: "01",
          title: "Operator-Led PDMaaS",
          description:
            "Execution-first partner development with weekly AWS field engagement, ACE pipeline progression, and disciplined co-sell operations.",
        },
        {
          number: "02",
          title: "ISV Accelerate Signals",
          description:
            "Drives the field alignment, ACE hygiene, and funding readiness required for ISV Accelerate participation and long-term co-sell success.",
        },
        {
          number: "03",
          title: "Marketplace & FTR Readiness",
          description:
            "Manages the operational steps for Marketplace readiness, private offers, and FTR preparation while maintaining a predictable cadence.",
        },
      ]}
      resourceGap={{
        eyebrow: "WHY PDMAAS EXISTS",
        heading: "The Resource Gap",
        subheading:
          "Most ISVs underestimate the operational rigor required to run a consistent cloud co-sell motion. A great product is not enough if your pipeline operations stall.",
        leftTitle: "The Pipeline Resource Gap",
        leftItems: [
          "Ad-hoc co-selling with unpredictable field engagement cadences.",
          "Competitors manage the product swimlane for listing and CRM, leaving the GTM swimlane empty.",
          "Eligible funding dollars expire unused every quarter.",
          "Hyperscaler sellers shift focus to better-managed partner ISVs.",
          "Engineering resources diverted to handle operational partner tasks.",
        ],
        rightTitle: "The Operator-Led GTM Framework",
        rightItems: [
          "Weekly field alignment and co-sell governance.",
          "Own the GTM swimlane, field alignment, pipeline progression, and active co-sell.",
          "Unlock eligible funding capture via managed application workflows.",
          "Always field-ready with optimized Marketplace and Private Offer assets.",
          "Process-driven execution model installed from week one.",
        ],
      }}
      idealStage={{
        eyebrow: "IDEAL STAGE",
        heading: "For ISVs that need a partner development motion that runs every week.",
        subheading:
          "Not quarterly check-ins. Not a slide deck. A weekly partner development motion that mirrors what a hyperscaler PDM does inside AWS, Microsoft, and GCP.",
        cards: [
          {
            title: "Entering or Expanding Cloud GTM",
            description:
              "For early to mid-stage ISVs entering or expanding cloud GTM without a dedicated PDM or partner operations function.",
          },
          {
            title: "Needing Consistent Execution",
            description:
              "For teams needing consistent field engagement, execution discipline, and weekly partner development management.",
          },
          {
            title: "Preparing for Co-Sell Scale",
            description:
              "For growing ISVs transitioning toward a full-time alliance team, requiring Marketplace and Private Offer readiness.",
          },
        ],
      }}
      executionPillars={{
        eyebrow: "EXECUTION PILLARS",
        heading: "The Partner Development Framework",
        subheading:
          "A rigorous operational cadence that turns hyperscaler portals into active, progressing co-sell pipeline.",
        pillars: [
          {
            number: "01",
            title: "Partner Strategy and Field Alignment",
            subtitle:
              "Modeled on the real PDM responsibility for partner relationship management inside AWS, Microsoft, and GCP.",
            bullets: [
              "Build and maintain a partner plan aligned to cloud priorities",
              "Map to the right AWS, Microsoft, and GCP field teams",
              "Identify target sellers, SA teams, and industry pods",
              "Drive introductions, alignment calls, and follow-ups",
              "Maintain weekly field engagement and progression",
            ],
          },
          {
            number: "02",
            title: "Pipeline Development and Co-Sell",
            subtitle:
              "Modeled on the real PDM responsibility for pipeline creation and movement across ACE and Partner Center.",
            bullets: [
              "Validate opportunities for co-sell eligibility",
              "Progress deals through ACE and Partner Center",
              "Manage seller follow-ups and unblock friction",
              "Track progression stages systematically",
              "Provide weekly pipeline movement reporting",
            ],
          },
          {
            number: "03",
            title: "PRM, Marketplace, and Readiness",
            subtitle:
              "The operational backbone of partner development, maintained rigorously throughout the year.",
            bullets: [
              "PRM activation and tagging hygiene",
              "Co-sell readiness requirements across clouds",
              "Hyperscaler funding workflow support",
              "Marketplace and Private Offer negotiation support",
              "Attribution and reporting setup",
            ],
          },
        ],
      }}
      roiSection={{
        eyebrow: "EXECUTION LEADS TO EVIDENCE",
        heading: "The Mechanical Link to ROI",
        subheading:
          "We don't just deliver files. We deliver business results through a proven operational cadence.",
        outputs: [
          "Partner plan aligned to cloud priorities",
          "Weekly co-sell pipeline progression",
          "Monthly funding program status",
          "Partner portal hygiene score and metrics",
          "Weekly GTM Governance & Executive Summary",
        ],
        impact: [
          "Faster co-sell activation with cloud field teams",
          "Reduced time-to-first-opportunity progression",
          "Capture eligible funding that would otherwise be missed",
          "Increased Marketplace conversion rates",
          "Scale without diverting internal engineering resources",
        ],
      }}
    />
  );
}
