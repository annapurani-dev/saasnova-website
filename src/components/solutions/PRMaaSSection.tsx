"use client";

import { Activity } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function PRMaaSSection() {
  return (
    <SolutionDetailSection
      id="prmaas"
      navTitle="PRMaaS"
      navSubtitle="Revenue Measurement · Free"
      badgeText="PARTNER REVENUE MEASUREMENT"
      badgeClassName="bg-sky-100 text-[#008BF8]"
      secondaryBadge="FREE ENGAGEMENT"
      cloudLogos={["aws"]}
      title="PRM as a Service"
      description="SaaSNova PRMaaS provides a free, end-to-end AWS Partner Revenue Measurement (PRM) implementation for ISVs operating on AWS Marketplace and co-sell motions. SaaSNova manages resource tagging, IaC integration, attribution validation, and continuous compliance automation, ensuring accurate AWS revenue measurement and uninterrupted partner program readiness across all accounts, regions, and deployment patterns."
      importantNotice="This is a one-time, time-bound free engagement for eligible partners focused on establishing PRM tagging infrastructure. Ongoing operations, co-sell execution, or broader GTM services are not included in this offering."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<Activity className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#008BF8]"
      highlights={[
        {
          number: "01",
          title: "Tagging & IaC Integration",
          description:
            "Complete implementation plan including native resource tagging and Terraform/CDK integration without disrupting engineering workflows.",
        },
        {
          number: "02",
          title: "Architecture-Aware",
          description:
            "Execution mapped precisely to your deployment model: Partner Account, Customer Account, or Hybrid architectures.",
        },
        {
          number: "03",
          title: "Ongoing Governance",
          description:
            "Continuous validation strategies ensuring new resources remain tagged and attribution-ready as infrastructure scales.",
        },
      ]}
      resourceGap={{
        eyebrow: "WHY PRMAAS EXISTS",
        heading: "The Attribution Failure",
        subheading:
          "Accurate PRM implementation is foundational for co-sell readiness and funding program participation. While PRM appears simple conceptually, real-world cloud environments introduce silent failure points.",
        leftTitle: "The Current Risk",
        leftItems: [
          "Broken revenue attribution across complex multi-region environments.",
          "Incomplete tagging coverage resulting in unreliable Partner Central reporting.",
          "Missed MDF and funding allocations due to lack of visibility.",
          "Unnecessary operational friction introduced to internal engineering teams.",
          "Non-compliance with AWS Marketplace readiness requirements.",
        ],
        rightTitle: "The PRM Implementation Framework",
        rightItems: [
          "Complete PRM tagging strategy across all accounts, regions, and resources.",
          "Architecture-aware execution supporting Partner, Customer, and Hybrid deployments.",
          "Cross-account IAM coordination established systematically.",
          "Tagging governance preventing future attribution degradation.",
          "Audit-ready documentation package delivered to operations teams.",
        ],
      }}
      idealStage={{
        eyebrow: "IDEAL STAGE",
        heading: "Tiered for Your Infrastructure",
        subheading:
          "Implementation scope is strictly aligned to resource count, AWS regions, architecture patterns, and the specific IaC tooling currently in use.",
        cards: [
          {
            title: "Starter",
            description:
              "Early-stage software companies with localized architecture requiring baseline tagging and basic PRM compliance.",
          },
          {
            title: "Growth",
            description:
              "Mid-size software companies utilizing standard IaC workflows across multiple AWS regions.",
          },
          {
            title: "Enterprise",
            description:
              "Complex, multi-account environments supporting Customer Account or Hybrid deployment patterns.",
          },
        ],
      }}
      executionPillars={{
        eyebrow: "EXECUTION PILLARS",
        heading: "The Implementation Protocol",
        subheading:
          "A rigorous, non-disruptive deployment process that establishes and protects your revenue attribution data.",
        pillars: [
          {
            number: "01",
            title: "Architecture & Tagging Strategy",
            subtitle: "Mapping the exact technical footprint required for AWS compliance.",
            bullets: [
              "Comprehensive architecture and resource assessment",
              "Verification of Marketplace product codes and IDs",
              "Design of specific cross-account IAM coordination",
              "Tagging strategy design aligned to PRM standards",
            ],
          },
          {
            number: "02",
            title: "IaC Integration & Deployment",
            subtitle: "Executing the technical implementation directly within your existing workflows.",
            bullets: [
              "Safe integration into Terraform, CloudFormation, or CDK",
              "Comprehensive resource tagging across all supported services",
              "Zero-disruption deployment for engineering teams",
              "Handling of complex hybrid and customer deployment patterns",
            ],
          },
          {
            number: "03",
            title: "Validation & Governance",
            subtitle: "Ensuring the signal reaches AWS and remains compliant over time.",
            bullets: [
              "Validation of attribution signals in Partner Analytics",
              "Configuration of ongoing compliance governance",
              "Delivery of audit-ready compliance documentation",
              "Monitoring setup to prevent future attribution drops",
            ],
          },
        ],
      }}
      roiSection={{
        eyebrow: "EXECUTION LEADS TO EVIDENCE",
        heading: "The Mechanical Link to Revenue",
        subheading:
          "Accurate infrastructure tagging guarantees your co-sell motion is measured and rewarded.",
        outputs: [
          "Complete tagging plan across all specified AWS accounts",
          "Integrated IaC PRM modules mapped for production",
          "Audit-ready technical compliance documentation",
          "Attribution verification plan for Partner Central Analytics",
          "Standardized tagging rules ensuring ongoing infrastructure compliance",
        ],
        impact: [
          "Accurate revenue attribution visible to cloud leadership",
          "Maximized MDF and funding program eligibility",
          "Accelerated progression toward advanced partner tiers",
          "Reduced operational friction for internal engineering teams",
          "Protection against silent failures and future attribution degradation",
          "No financial barrier to participation (100% free engagement for eligible partners)",
        ],
      }}
    />
  );
}
