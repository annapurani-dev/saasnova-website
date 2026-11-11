"use client";

import { Award } from "lucide-react";
import SolutionDetailSection from "@/components/solutions/SolutionDetailSection";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function PALaaSSection() {
  return (
    <SolutionDetailSection
      id="palaas"
      navTitle="PALaaS"
      navSubtitle="Alliance Leadership"
      badgeText="PARTNER ALLIANCE LEAD"
      badgeClassName="bg-sky-100 text-[#008BF8]"
      cloudLogos={["aws", "azure", "gcp"]}
      title="PAL as a Service"
      description="SaaSNova runs real AWS alliance and co-sell coordination without hiring a Partner Alliance Lead. We manage AWS field engagement, program navigation, QBR preparation, and executive alignment while coordinating supporting motions across Azure and GCP, giving ISVs continuous, disciplined multi-cloud traction with none of the execution gaps of fractional or internal PAL coverage."
      ctaHref={CALENDLY}
      ctaLabel="Book a 30-min Execution Strategy Session"
      ctaIcon={<Award className="w-4 h-4" />}
      ctaClassName="btn-gradient hover:opacity-95"
      accentTextClassName="text-[#008BF8]"
      highlights={[
        {
          number: "01",
          title: "Multi-Cloud Coordination",
          description:
            "Structured, consistent, and documented alliance coordination across AWS, Azure, and GCP to keep relationships active.",
        },
        {
          number: "02",
          title: "Program Navigation & QBRs",
          description:
            "Comprehensive management of QBR preparation, co-sell program navigation, and funding tracking under one unified engagement.",
        },
        {
          number: "03",
          title: "Executive GTM Alignment",
          description:
            "Joint GTM coordination and executive alignment that bridges the gap between high-level partnership strategy and daily execution.",
        },
      ]}
      resourceGap={{
        eyebrow: "WHY PALAAS EXISTS",
        heading: "The Multi-Cloud Resource Gap",
        subheading:
          "Building productive alliance relationships requires structured reporting and executive alignment. Without a dedicated Alliance Leader, your partnerships quickly stagnate.",
        leftTitle: "The Current Reality",
        leftItems: [
          "Cloud executive relationships go cold after initial introductions.",
          "Multi-cloud strategy exists on paper but lacks day-to-day execution.",
          "Critical deadlines and partner tiering requirements are missed.",
          "Joint GTM motions stall because internal teams are disconnected.",
          "Founders get stuck in operational partner meetings instead of focusing on growth.",
        ],
        rightTitle: "The Operator-Led Framework",
        rightItems: [
          "Delivers operational coordination alongside Cloud GTM leadership.",
          "Bridges strategy and execution without claiming ownership.",
          "Supports internal teams without creating operational friction.",
          "Advanced partner tiering and GenAI competencies attained.",
          "Manage QBRs and structured reporting.",
        ],
      }}
      idealStage={{
        eyebrow: "IDEAL STAGE",
        heading: "For ISVs that need an alliance motion that runs every week, not every quarter.",
        subheading:
          "Most ISVs have cloud contacts. Most do not have a structured alliance motion that keeps those relationships active, aligned, and producing pipeline. PALaaS changes that.",
        cards: [
          {
            title: "Entering or Expanding Cloud GTM",
            description:
              "For ISVs entering or expanding their multi-cloud GTM that need consistent field engagement and weekly alliance leadership.",
          },
          {
            title: "Preparing for Co-Sell Scale",
            description:
              "For companies preparing for co-sell scale that require executive alignment and multi-cloud relationship management.",
          },
          {
            title: "Transitioning to Dedicated Teams",
            description:
              "For teams transitioning toward a dedicated internal alliance leadership function, needing structured execution and reporting.",
          },
        ],
      }}
      executionPillars={{
        eyebrow: "EXECUTION PILLARS",
        heading: "The Executive Alliance Framework",
        subheading:
          "A structured, repeatable methodology for managing your multi-cloud relationships week over week.",
        pillars: [
          {
            number: "01",
            title: "Alliance Leadership & Field Coordination",
            subtitle: "Modeled on real Partner Alliance Lead responsibilities.",
            bullets: [
              "Own the multi-cloud alliance strategy across AWS, Azure, and GCP",
              "Map and maintain executive relationships with BD, PDM, and industry teams",
              "Define partner plan priorities, joint business objectives, and QBR agendas",
              "Coordinate co-sell opportunity flow between your sales team and field sellers",
              "Run a weekly alliance engagement rhythm to ensure continuous visibility",
            ],
          },
          {
            number: "02",
            title: "Program Navigation & Designations",
            subtitle: "The operational layer that keeps cloud relationships moving.",
            bullets: [
              "Navigate APN requirements, ISV Accelerate enrollment, and MACC alignment",
              "Drive strategy and timeline for AWS Competencies and Microsoft Solution Designations",
              "Track MDF, MAP, and OLA allocations to ensure active benefit utilization",
              "Monitor tier progression milestones, technical reviews, and co-sell targets",
              "Coordinate Marketplace listing optimizations and complex Private Offer workflows",
            ],
          },
          {
            number: "03",
            title: "QBR Preparation & Executive Alignment",
            subtitle: "Where alliance leadership meets execution and attributable pipeline.",
            bullets: [
              "Prepare comprehensive, data-driven Quarterly Business Reviews for leadership",
              "Bridge high-level partnership strategy with day-to-day field execution realities",
              "Establish internal alignment across your sales, product, and finance teams",
              "Track and enforce confirmed follow-up actions post-executive meetings",
              "Provide board-level reporting on cloud-attributed ARR and partner-influenced pipeline",
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
          "Multi-cloud alliance strategy mapped to BD and PDM priorities",
          "Documented QBR materials, scorecard tracking, and follow-up action logs",
          "Program compliance tracking for tier progression, ISVA, and Competencies",
          "Funding workflow execution, milestone management, and reimbursement tracking",
          "Monthly executive reporting on cloud-attributed pipeline",
          "Number of engagement touchpoints logged and tracked",
        ],
        impact: [
          "Close deals faster with properly managed field alignment",
          'Maintain relationships week-over-week, eliminating "ghosting"',
          "Actively utilize funding programs to offset your acquisition costs",
          "Zero risk of losing designations or advanced tier status due to missed deadlines",
          "Complete visibility into cloud-sourced ARR and pipeline influence",
          "Stronger alliance relationships built through documented, repeatable engagement",
        ],
      }}
    />
  );
}
