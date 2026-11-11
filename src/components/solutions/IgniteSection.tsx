"use client";

import { Rocket } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function IgniteSection() {
  return (
    <SolutionDetailSection
      id="ignite"
      navTitle="Ignite"
      navSubtitle="1 Month · GTM Activation"
      badgeText="1 MONTH · CLOUD MARKETPLACE GTM ACTIVATION"
      badgeClassName="bg-sky-100 text-[#008BF8]"
      cloudLogos={["aws", "azure", "gcp"]}
      title="SaaSNova Ignite"
      description="Designed for SaaS ISVs needing a cloud marketplace listing or those already listed with little to no traction. A focused 1-month execution sprint to establish Marketplace fundamentals, validate partner portal readiness, and activate early co-sell motions across AWS, Azure, and GCP."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<Rocket className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#008BF8]"
      highlights={[
        {
          number: "01",
          title: "Baseline Alignment",
          description: "Baseline alignment & Partner Portal readiness.",
        },
        {
          number: "02",
          title: "Better Together",
          description: "Foundational Better Together messaging aligned for cloud field teams.",
        },
        {
          number: "03",
          title: "Co-Sell Activation",
          description: "Early co-sell activation and Marketplace GTM foundation.",
        },
      ]}
      idealStage={{
        eyebrow: "IDEAL STAGE · PRE-SERIES A → SERIES A",
        heading: "Unlisted, or Listed With No Pipeline",
        subheading:
          "Designed for SaaS ISVs needing a cloud marketplace listing or those already listed with little to no traction.",
        cards: [
          {
            title: "Marketplace Activation",
            description:
              "For SaaS ISVs needing to launch a new listing on AWS, Azure, or GCP, or those already listed but not seeing meaningful co-sell traction.",
          },
          {
            title: "Needing Alignment",
            description:
              "Perfect for teams needing to establish baseline alignment and validate their ecosystem and Partner Portal readiness.",
          },
          {
            title: "GTM Foundation",
            description:
              "Designed to build foundational Better Together messaging and activate early co-sell motions across hyperscalers.",
          },
        ],
      }}
      executionGrid={{
        eyebrow: "EXECUTION SCOPE",
        heading: "What We Execute",
        subheading: "A focused 1-month execution sprint to establish Marketplace fundamentals.",
        cards: [
          {
            number: "01",
            title: "Marketplace Optimization",
            description:
              "Optimized Marketplace listing aligned to cloud best practices and hygiene review.",
          },
          {
            number: "02",
            title: "Better Together Messaging",
            description:
              "Better Together messaging specifically aligned for hyperscaler field positioning.",
          },
          {
            number: "03",
            title: "Partner Portal Readiness",
            description:
              "Ecosystem and Partner Portal readiness alignment, including Marketplace score review.",
          },
          {
            number: "04",
            title: "Pipeline Motion Support",
            description:
              "Early co-sell activation guidance and defined roadmap toward next-stage GTM scaling.",
          },
        ],
      }}
      roiSection={{
        eyebrow: "EXECUTION LEADS TO EVIDENCE",
        heading: "Outputs & Business Impact",
        subheading: "Concrete GTM fundamentals installed inside 30 days.",
        outputs: [
          "Optimized Marketplace listing and hygiene review",
          "Cloud-aligned Better Together messaging",
          "Ecosystem and Partner Portal readiness validation",
          "Early co-sell activation guidance",
          "Initial pipeline support and GTM scaling roadmap",
        ],
        impact: [
          "Established Marketplace GTM foundation",
          "Field-aligned co-sell positioning",
          "Validated Partner Portal readiness",
          "Activated early pipeline motions",
          "Clear path to repeatable cloud revenue",
        ],
      }}
    />
  );
}
