"use client";

import { Sparkles } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function PMMaaSSection() {
  return (
    <SolutionDetailSection
      id="pmmaas"
      navTitle="PMMaaS"
      navSubtitle="Partner Marketing"
      badgeText="PARTNER MARKETING MANAGER"
      badgeClassName="bg-pink-100 text-[#FA0F9C]"
      cloudLogos={["aws", "azure", "gcp"]}
      title="PMM as a Service"
      description='SaaSNova runs real AWS co-marketing programs without hiring a Partner Marketing Manager, delivering operator-grade partner marketing execution built for the cloud ecosystem. We turn your solution into clear, compelling partner-ready messaging and execute full-funnel demand-gen campaigns that AWS teams can actually use. From "Better-Together" narratives to co-marketing assets to campaign execution, SaaSNova delivers continuous partner marketing that drives awareness, engagement, and measurable pipeline.'
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<Sparkles className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#FA0F9C]"
      highlights={[
        {
          number: "01",
          title: "Cloud-Aligned Marketing",
          description:
            "Continuous, field-ready messaging, Better-Together narratives, and co-sell content calibrated to ensure your product is easy to position and promote.",
        },
        {
          number: "02",
          title: "Field Readiness Kit",
          description:
            "Deliver co-sell pitch decks, solution briefs, talk tracks, and battlecards that improve seller confidence and accelerate opportunity progression.",
        },
        {
          number: "03",
          title: "Marketplace Optimization",
          description:
            "Manage listing optimization, customer proof points, and a structured content calendar to ensure a consistent, high-converting presence.",
        },
      ]}
      resourceGap={{
        eyebrow: "WHY PMMAAS EXISTS",
        heading: "The Resource Gap",
        subheading:
          "Great products fail in co-sell when field sellers cannot quickly understand the value and use case. Most ISVs lack the specialized product marketing needed to translate their capabilities into cloud-aligned narratives.",
        leftTitle: "The Content Resource Gap",
        leftItems: [
          "AWS sellers cannot understand your core use case quickly.",
          "Great products fail due to generic, unaligned product marketing.",
          "Co-sell pitch decks lack hyperscaler context and fail to convert.",
          "Marketplace listings do not resonate with enterprise cloud buyers.",
          "Internal teams lack the bandwidth to create field-ready battlecards.",
        ],
        rightTitle: "The Operator-Led Execution Engine",
        rightItems: [
          "Cloud-aligned value propositions built for hyperscaler field teams.",
          "Execute multi-cloud demand generation plans to drive partner leads.",
          "Field-tested battlecards and objection handling guides.",
          "High-converting Marketplace and Private Offer copy optimization.",
          "Accelerate GenAI Competency attainment and advanced tiering.",
        ],
      }}
      idealStage={{
        eyebrow: "IDEAL STAGE",
        heading: "For ISVs that need cloud-aligned product marketing running every week.",
        subheading:
          "Most ISVs have a product. Most do not have messaging that field teams inside AWS, Microsoft, and GCP can actually use. PMMaaS closes that gap continuously.",
        cards: [
          {
            title: "Entering or Expanding Cloud GTM",
            description:
              "For ISVs entering or expanding cloud GTM that lack dedicated product marketing with hyperscaler expertise.",
          },
          {
            title: "Needing Cloud-Aligned Messaging",
            description:
              "For teams needing consistent AWS, Microsoft, and GCP-aligned messaging and PMM execution across the year.",
          },
          {
            title: "Preparing for Co-Sell Scale",
            description:
              "For companies preparing for co-sell scale that require ongoing Marketplace listing optimization and field-ready assets.",
          },
        ],
      }}
      executionPillars={{
        eyebrow: "EXECUTION PILLARS",
        heading: "The Asset Manufacturing Engine",
        subheading:
          "A systematic approach to translating product value into cloud-aligned narratives that hyperscaler field teams actually use.",
        pillars: [
          {
            number: "01",
            title: "Cloud Messaging and Positioning",
            subtitle:
              "Modeled on the real PMM role inside AWS, Microsoft, and GCP.",
            bullets: [
              "Cloud-aligned value propositions",
              "Industry-specific messaging by vertical",
              "Better-Together narratives for field teams",
              "Multi-cloud demand generation strategies",
              "Persona-aligned problem statements",
            ],
          },
          {
            number: "02",
            title: "Field Assets and Sales Readiness",
            subtitle:
              "The core PMM responsibility: creating assets that drive co-sell adoption.",
            bullets: [
              "Industry use cases by vertical and buyer",
              "Solution briefs and detailed one-pagers",
              "Co-sell pitch decks customized for each cloud",
              "Technical and business value articulation",
              "Field-ready talk tracks and objection handling",
            ],
          },
          {
            number: "03",
            title: "Marketplace and Launch Optimization",
            subtitle:
              "The operational backbone that keeps your Marketplace presence current.",
            bullets: [
              "Marketplace listing optimization",
              "Private Offer messaging and packaging",
              "GenAI Competency messaging and narratives",
              "Launch support for new features and releases",
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
          "Marketing execution plan",
          "Cloud-aligned messaging and Better-Together narratives",
          "Co-sell pitch decks and field-ready sales assets",
          "Solution briefs and industry-specific use cases",
          "Weekly PMM governance and execution summary",
        ],
        impact: [
          "Higher co-sell conversion through field-ready messaging",
          "Reduced time from product capability to tested positioning",
          "Consistent content output that sustains marketplace visibility",
          "Improved co-sell pitch quality and enterprise buyer trust",
          "Faster progression through AWS ACE pipeline stages",
        ],
      }}
    />
  );
}
