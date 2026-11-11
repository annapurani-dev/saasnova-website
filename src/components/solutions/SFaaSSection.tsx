"use client";

import { Store, Server } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

export default function SFaaSSection() {
  return (
    <SolutionDetailSection
      id="sfaas"
      navTitle="SFaaS"
      navSubtitle="Storefront as a Service"
      badgeText="TURNKEY INFRASTRUCTURE · SFAAS"
      badgeClassName="bg-sky-100 text-[#008BF8]"
      showCloudLogos
      title="SFaaS: Marketplace Storefront as a Service"
      description="Your turnkey transacting storefront across AWS Marketplace, Azure Marketplace, and Google Cloud Marketplace. We handle listing creation, CPQ pricing, private offer templates, and billing webhooks."
      focusBox={{
        label: "Primary Capability",
        labelClassName: "text-[#008BF8]",
        body: "Deploy, transact, and automate custom private offers with zero technical debt for your core engineering team.",
      }}
      ctaHref={CALENDLY}
      ctaLabel="Deploy Storefront as a Service"
      ctaIcon={<Store className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      capabilitiesTitle="Core Capabilities & Features"
      capabilityNumberClassName="text-[#008BF8]"
      capabilities={[
        {
          number: "01",
          title: "Multi-Cloud Listing Deployment",
          description:
            "End-to-end publishing across AWS, Azure, and Google Cloud with optimized SEO descriptions, categorized tags, and compliance approvals.",
        },
        {
          number: "02",
          title: "Custom Private Offer Engine",
          description:
            "Instant generation of bespoke enterprise private quotes with custom payment schedules, negotiated EULA terms, and multi-year renewals.",
        },
        {
          number: "03",
          title: "CPQ Pricing Dimensions",
          description:
            "Complex billing models configured cleanly: user-seat pricing, monthly/annual contract commitments, and dimension-metered usage billing.",
        },
        {
          number: "04",
          title: "Automated Provisioning Webhooks",
          description:
            "Robust, hardened API endpoints that handle buyer registration tokens, subscription entitlement grants, and instant SaaS account provisioning.",
        },
      ]}
      callout={{
        icon: <Server className="w-4 h-4 text-[#008BF8] shrink-0 mt-0.5" />,
        title: "Contract Parity:",
        body: "Buyers transact through their existing cloud consolidated billing invoice while your organization retains full commercial terms.",
        className: "bg-sky-50/60 border-sky-200/70",
      }}
    />
  );
}

