"use client";

import { RefreshCw } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function PCMaaSSection() {
  return (
    <SolutionDetailSection
      id="pcmaas"
      navTitle="PCMaaS"
      navSubtitle="Portal Migration · Free"
      badgeText="PARTNER CENTRAL MIGRATION"
      badgeClassName="bg-pink-100 text-[#FA0F9C]"
      secondaryBadge="FREE ENGAGEMENT"
      cloudLogos={["aws"]}
      title="PCM as a Service"
      description="SaaSNova PCMaaS provides a free readiness engagement for eligible partners preparing to transition to the new AWS Partner Central experience. Our operator-led approach aligns GTM, Alliance, Sales, Operations, and Leadership teams to the updated workflows, roles, and expectations so your organization is ready to adopt the new Partner Central model with clarity and confidence."
      importantNotice="This is a one-time, time-bound readiness engagement for eligible partners focused solely on preparing organizations for the new partner portal experiences. Ongoing operations, co-sell execution, or GTM services are not included in this offering."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<RefreshCw className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#FA0F9C]"
      highlights={[
        {
          number: "01",
          title: "IAM & SSO Alignment",
          description:
            "Prepare teams for IAM-based authentication, Entra ID, and permission structures without requiring immediate technical execution.",
        },
        {
          number: "02",
          title: "Zero Duplicate Risk",
          description:
            "Validate account linking and clean up legacy portal permissions to eliminate the risk of duplicate business registrations.",
        },
        {
          number: "03",
          title: "Workflow Modernization",
          description:
            "Modernize internal processes to match the updated console lifecycle, including opportunity routing and co-sell initiation.",
        },
      ]}
      resourceGap={{
        eyebrow: "WHY PCMAAS EXISTS",
        heading: "The Migration Risk",
        subheading:
          "As AWS unifies its Partner and Marketplace consoles, the transition introduces severe operational risks. A botched migration can lock your field team out of critical co-sell systems.",
        leftTitle: "The Current Risk",
        leftItems: [
          "Duplicate portal registrations blocking co-sell tracking.",
          "Access failures and permission gaps during active deal cycles.",
          "Disruption to active Marketplace billing and funding workflows.",
          "Confusion around new IAM, SSO, and Entra ID linking requirements.",
          "Misaligned internal roles executing the transition without technical guidance.",
        ],
        rightTitle: "Verified Readiness Protocol",
        rightItems: [
          "Pre-migration validation of partner status and account hierarchy.",
          "IAM-based access aligned precisely to AWS requirements.",
          "Elimination of the most common duplicate registration errors.",
          "Clear documentation of migration steps for internal reference.",
          "Smooth transition without business or co-sell workflow disruption.",
        ],
      }}
      idealStage={{
        eyebrow: "IDEAL STAGE",
        heading: "Who Requires Migration Readiness?",
        subheading:
          "Designed for Alliance, Sales, and Operations teams without dedicated cloud technical resources to execute the migration independently.",
        cards: [
          {
            title: "Legacy Portal Users",
            description:
              "Partners currently operating on legacy consoles that must migrate to the new unified AWS experience.",
          },
          {
            title: "Complex Structures",
            description:
              "Software companies with complex account hierarchies or multiple legacy portal IDs requiring careful consolidation.",
          },
          {
            title: "All Partner Tiers",
            description:
              "Applicable to Select, Advanced, and Premier partners needing a clean transition with minimal internal lift.",
          },
        ],
      }}
      executionPillars={{
        eyebrow: "EXECUTION PILLARS",
        heading: "The Migration Protocol",
        subheading:
          "A rigorous, risk-free validation process that protects your Marketplace access and funding.",
        pillars: [
          {
            number: "01",
            title: "IAM, SSO, and Account Linking",
            subtitle: "Securing the technical foundation required for modern console access.",
            bullets: [
              "Prepare organization for IAM-based authentication",
              "Align SSO and permissions without requiring execution",
              "Validate AWS account linking requirements",
              "Ensure readiness for one-click migration outcomes",
            ],
          },
          {
            number: "02",
            title: "Unified Console Workflow Alignment",
            subtitle: "Modernizing internal operations to match the new portal lifecycle.",
            bullets: [
              "Update internal opportunity routing protocols",
              "Align co-sell initiation and ACE/Partner Center logic",
              "Validate Marketplace Management Portal parity",
              "Establish consistent reporting and funding workflows",
            ],
          },
          {
            number: "03",
            title: "Cross-Functional Preparation",
            subtitle: "Equipping the business units dependent on continuous portal access.",
            bullets: [
              "Align GTM, Operations, and Partner Management functions",
              "Define clear ownership boundaries across the new console",
              "Equip Sales leadership with updated process expectations",
              "Strengthen organizational co-sell signals per AWS rules",
            ],
          },
        ],
      }}
      roiSection={{
        eyebrow: "EXECUTION LEADS TO EVIDENCE",
        heading: "The Mechanical Link to Compliance",
        subheading:
          "We don't just migrate you. We ensure your co-sell motion continues without a hitch.",
        outputs: [
          "Verified, compliant migration to the unified AWS console",
          "IAM-based access mapping aligned to specific user roles",
          "Documentation of migration steps for internal reference and audits",
          "Verified linkage between Partner Portal and Marketplace Management Portal",
          "Restored and validated access within a defined delivery window",
        ],
        impact: [
          "Zero disruption to active co-sell or Marketplace workflows",
          "Reduced risk of access failures and critical permission gaps",
          "Eliminated duplicate registrations causing compliance issues",
          "No financial barrier to participation (100% free engagement for eligible partners)",
          "Organizational clarity without creating friction for internal engineering teams",
        ],
      }}
    />
  );
}
