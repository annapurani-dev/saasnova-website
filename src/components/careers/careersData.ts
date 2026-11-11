export interface OwnershipGroup {
  title: string;
  bullets: string[];
}

export interface GainItem {
  label: string;
  description: string;
}

export interface CareerRole {
  id: string;
  code: string;
  shortRegion: string;
  title: string;
  fullTitle: string;
  applyOption: string;
  cardLocation: string;
  detailLocation: string;
  workMode: string;
  ecosystems: ("AWS" | "Azure" | "GCP" | "HubSpot")[];
  cardSummary: string;
  aboutRole: string;
  ownership: OwnershipGroup[];
  whoYouAreIntro?: string;
  whoYouAre: string[];
  whoYouAreOutro?: string;
  workEnvironment?: string[];
  whatYouWillGain: GainItem[];
  howToApply: string;
  accent: "sky" | "pink" | "amber" | "slate";
}

export const OPERATOR_PILLARS = [
  {
    number: "01",
    title: "Remote & Flexible",
    description:
      "Work from anywhere. We care about your execution, pipeline velocity, and shipping revenue, not tracking hours or where you sit.",
    accent: "sky" as const,
  },
  {
    number: "02",
    title: "Hyperscaler Access",
    description:
      "Direct exposure to AWS, Azure, and GCP partner teams, deal cycles, and Marketplace motions.",
    accent: "pink" as const,
  },
  {
    number: "03",
    title: "Execution > Decks",
    description:
      "Work in a fast-moving setup focused on real pipeline, continuous testing, and measurable outcomes.",
    accent: "slate" as const,
  },
];

export const CAREERS_QUOTE = {
  eyebrow: "THE BAR",
  quote:
    "“We're building a GTM team of operators who turn clarity into momentum and momentum into pipeline. If you want ownership, speed, and the chance to ship work that actually moves companies forward, this is where you belong.”",
  author: "Jen Dawson",
  role: "Founder & CEO, SaaSNova",
};

export const OPEN_ROLES: CareerRole[] = [
  {
    id: "ppe-us",
    code: "GTM-PPE-2026-US",
    shortRegion: "US · REMOTE",
    title: "Partner Pipeline Executive",
    fullTitle: "Partner Pipeline Executive — US",
    applyOption: "Partner Pipeline Executive - US (GTM-PPE-2026-US)",
    cardLocation: "US (Remote)",
    detailLocation: "United States (Remote)",
    workMode: "Fully Remote Independent Contractor",
    ecosystems: ["AWS", "Azure", "GCP"],
    cardSummary:
      "Activate SaaSNova's ISV pipeline across US and global markets. Research, engage, and qualify SaaS companies for AWS, Azure, and Google Cloud GTM acceleration programs. Freshers and early-career GTM talent encouraged.",
    aboutRole:
      "Be the front-line operator in SaaSNova's GTM engine - identifying ISVs, engaging GTM leaders, and progressing qualified opportunities into our pipeline. This is a high-impact, flexible contractor role working directly with the Founder and GTM leadership.",
    ownership: [
      {
        title: "1. ISV Research & Identification",
        bullets: [
          "Identify SaaS companies across US and global markets",
          "Analyze GTM maturity, Marketplace readiness, and co-sell potential",
          "Build structured ISV lists aligned to AWS, Azure, and GCP motions",
        ],
      },
      {
        title: "2. Outreach & Engagement",
        bullets: [
          "Reach out to founders, GTM leaders, and alliances teams",
          "Position SaaSNova's GTM acceleration programs clearly",
          "Move conversations from interest to qualification",
        ],
      },
      {
        title: "3. Qualification & Pipeline Progression",
        bullets: [
          "Qualify ISVs for NovaX, Marketplace, co-sell, or GTM acceleration",
          "Assess GTM gaps, PRM readiness, and ecosystem alignment",
          "Progress qualified ISVs to SaaSNova leadership for next steps",
        ],
      },
      {
        title: "4. Hyperscaler-Aligned GTM Support",
        bullets: [
          "Understand AWS / GCP / Azure GTM motions",
          "Identify ISVs that fit hyperscaler priorities",
          "Support early-stage co-sell activation",
        ],
      },
      {
        title: "5. Reporting & Collaboration",
        bullets: [
          "Maintain structured notes and clean pipeline updates",
          "Collaborate with the Founder and GTM team",
          "Support webinars, events, and ecosystem outreach",
        ],
      },
    ],
    whoYouAreIntro:
      "We welcome diverse talent - early-career operators and GTM professionals relaunching their careers. No deep technical expertise required - clarity and articulation matter more.",
    whoYouAre: [
      "Curious about SaaS, cloud, and hyperscaler GTM",
      "Strong in communication and structured thinking",
      "Comfortable researching and engaging founders",
      "Motivated by performance-based outcomes",
      "Energized by fast execution and founder-led environments",
    ],
    whatYouWillGain: [
      { label: "Visibility", description: "Engage directly with ISV founders and GTM leaders" },
      { label: "Impact", description: "Influence SaaSNova's early GTM pipeline" },
      {
        label: "Growth",
        description: "Build GTM skills that compound across co-sell, Marketplace, and partner ops",
      },
      { label: "Upside", description: "Earn based on performance outcomes" },
    ],
    howToApply:
      "Send your resume to operations@saasnova.ai or apply directly on LinkedIn. Or use the Apply button below to submit via this page.",
    accent: "sky",
  },
  {
    id: "ppe-eu",
    code: "GTM-PPE-2026-EU",
    shortRegion: "UK / EU · REMOTE",
    title: "Partner Pipeline Executive",
    fullTitle: "Partner Pipeline Executive — UK/Europe",
    applyOption: "Partner Pipeline Executive - London (GTM-PPE-2026-EU)",
    cardLocation: "London, UK (Remote)",
    detailLocation: "London, United Kingdom",
    workMode: "Remote-first Independent Contractor",
    ecosystems: ["AWS", "Azure", "GCP"],
    cardSummary:
      "Be the operator who activates SaaSNova’s ISV pipeline across the UK, Europe, and global markets. Research, engage, and qualify SaaS companies that fit our AWS, Azure, and Google Cloud GTM acceleration programmes.",
    aboutRole:
      "Be the operator who activates SaaSNova’s ISV pipeline across the UK, Europe, and global markets. We’re hiring Partner Pipeline Executives who can research, engage, and qualify SaaS companies that fit our AWS, Azure, and Google Cloud GTM acceleration programmes. This is a high-impact role working directly with the Founder and GTM leadership.",
    ownership: [
      {
        title: "1. ISV Research & Identification (UK/Europe + Global)",
        bullets: [
          "Identify SaaS companies across the UK, Europe, and global markets",
          "Analyse GTM maturity, Marketplace readiness, and co-sell potential",
          "Build structured ISV lists aligned to AWS, Azure, and GCP motions",
        ],
      },
      {
        title: "2. Outreach & Engagement",
        bullets: [
          "Engage founders, GTM leaders, and alliances teams",
          "Position SaaSNova’s GTM acceleration programmes clearly",
          "Move conversations from interest to qualification",
        ],
      },
      {
        title: "3. Qualification & Pipeline Progression",
        bullets: [
          "Qualify ISVs for NovaX, Marketplace, co-sell, or GTM acceleration",
          "Assess GTM gaps, PRM readiness, and ecosystem alignment",
          "Progress qualified ISVs to SaaSNova leadership for next steps",
        ],
      },
      {
        title: "4. Hyperscaler-Aligned GTM Support",
        bullets: [
          "Understand AWS / GCP / Azure GTM motions",
          "Identify ISVs that fit hyperscaler priorities",
          "Support early-stage co-sell activation",
        ],
      },
      {
        title: "5. Reporting & Collaboration",
        bullets: [
          "Maintain structured notes and clean pipeline updates",
          "Collaborate with the Founder and GTM team",
          "Support webinars, events, and ecosystem outreach",
        ],
      },
    ],
    whoYouAreIntro:
      "We welcome diverse talent — early-career operators, GTM professionals, and individuals relaunching their careers. You’ll thrive here if you are:",
    whoYouAre: [
      "Curious about SaaS, cloud, and hyperscaler GTM",
      "Strong in communication and structured thinking",
      "Comfortable researching and engaging founders",
      "Motivated by performance-based outcomes",
      "Energised by fast execution and founder-led environments",
    ],
    whoYouAreOutro: "No deep technical expertise required, clarity and articulation matter more.",
    whatYouWillGain: [
      { label: "Visibility", description: "Engage directly with ISV founders and GTM leaders" },
      { label: "Impact", description: "Influence SaaSNova’s early GTM pipeline" },
      {
        label: "Growth",
        description: "Build GTM skills that compound — co-sell, Marketplace, partner ops",
      },
      { label: "Upside", description: "Performance-based earning potential" },
    ],
    howToApply:
      "Send your CV to operations@saasnova.ai or apply directly on LinkedIn. Or use the Apply button below to submit via this page.",
    accent: "pink",
  },
  {
    id: "hubspot-in",
    code: "GTM-HUB-OPS-2026-IN",
    shortRegion: "INDIA · REMOTE-FIRST",
    title: "HubSpot Associate, GTM Operations",
    fullTitle: "HubSpot Associate, GTM Operations — India",
    applyOption: "HubSpot Associate - India (GTM-HUB-OPS-2026-IN)",
    cardLocation: "Chennai, India (Remote-first)",
    detailLocation: "Chennai, India",
    workMode: "Remote-first (Chennai, Bangalore, Hyderabad, or Mumbai)",
    ecosystems: ["HubSpot"],
    cardSummary:
      "Be the operator who keeps SaaSNova's GTM engine clean, accurate, and execution-ready. We're hiring a HubSpot Specialist with 1-2 years of HubSpot CRM experience to support CRM hygiene, ISV research, outreach workflows, and pipeline clarity.",
    aboutRole:
      "Be the operator who keeps SaaSNova's GTM engine clean, accurate, and execution-ready. We're hiring a HubSpot Specialist - GTM Operations with 1-2 years of HubSpot CRM experience to support CRM hygiene, ISV research, outreach workflows, and pipeline clarity across US, and global markets.",
    ownership: [
      {
        title: "1. HubSpot CRM Management & Data Hygiene",
        bullets: [
          "Maintain clean, accurate, and structured CRM records",
          "Manage lifecycle stages, contact properties, and deal notes",
          "Ensure ISV data is complete, tagged, and GTM-ready",
          "Build and maintain views, filters, and lists for GTM workflows",
        ],
      },
      {
        title: "2. ISV Research & Data Enrichment",
        bullets: [
          "Identify SaaS companies across US, and global markets",
          "Capture GTM maturity, Marketplace readiness, and ecosystem alignment",
          "Enrich HubSpot records with structured, actionable data",
        ],
      },
      {
        title: "3. Outreach Workflow & Sequence Execution",
        bullets: [
          "Build and optimize sequences, templates, and follow-ups",
          "Track engagement and surface high-intent responses",
          "Support founder-led outreach and GTM campaigns",
        ],
      },
      {
        title: "4. Pipeline Operations & Progression Support",
        bullets: [
          "Qualify inbound and outbound ISVs",
          "Document GTM gaps, PRM readiness, and co-sell potential",
          "Move qualified ISVs into the correct pipeline stages",
          "Maintain clean, accurate deal progression",
        ],
      },
      {
        title: "5. Reporting, Dashboards & Collaboration",
        bullets: [
          "Maintain weekly dashboards and activity summaries",
          "Support webinars, events, and ecosystem outreach",
          "Collaborate with the Founder and GTM team on execution tasks",
        ],
      },
    ],
    whoYouAreIntro: "You'll thrive here if you are:",
    whoYouAre: [
      "Experienced with HubSpot CRM (1-2 years minimum)",
      "Strong in communication and structured thinking",
      "Comfortable researching and organizing information",
      "Motivated by clarity, accuracy, and fast execution",
      "Curious about SaaS, cloud, and hyperscaler GTM",
      "Energized by founder-led, high-velocity environments",
    ],
    workEnvironment: [
      "Chennai-based role with remote-first flexibility",
      "Flexible hours - you choose your schedule",
      "Direct collaboration with the Founder",
      "Exposure to AWS, Azure, and Google Cloud ecosystems",
      "High-clarity, operator-led culture",
    ],
    whatYouWillGain: [
      { label: "Visibility", description: "Work directly with ISV founders and GTM leaders" },
      { label: "Skill Growth", description: "Hands-on HubSpot, CRM, GTM, and pipeline operations" },
      { label: "Impact", description: "Influence SaaSNova's early GTM pipeline" },
      {
        label: "Career Lift",
        description: "Build GTM skills that compound - co-sell, Marketplace, partner ops",
      },
    ],
    howToApply:
      "Send your resume to operations@saasnova.ai with Subject Line: HubSpot Specialist - GTM Operations| Job ID: GTM-HUB-OPS-2026-IN. Or use the Apply button below to submit via this page.",
    accent: "amber",
  },
  {
    id: "cloud-eng-in",
    code: "TEC-ENG-2026-IN",
    shortRegion: "INDIA · FLEX",
    title: "Cloud Engineer",
    fullTitle: "Cloud Engineer - SaaSNova — India",
    applyOption: "Cloud Engineer - India (TEC-ENG-2026-IN)",
    cardLocation: "Chennai or Bangalore, India",
    detailLocation: "Chennai or Bangalore, India",
    workMode: "Remote / Flex",
    ecosystems: ["AWS", "Azure", "GCP"],
    cardSummary:
      "Own the technical backbone behind SaaSNova's GTM, Marketplace, and product operations. As we scale globally, we're hiring a Technical Engineer who can manage AWS workflows, support SaaS product development, and run technical systems.",
    aboutRole:
      "Own the technical backbone behind SaaSNova's GTM, Marketplace, and product operations. As we scale globally, we're hiring a Technical Engineer who can manage AWS workflows, support SaaS product development, and run technical systems with precision, autonomy, and founder-grade clarity.",
    ownership: [
      {
        title: "1. AWS Marketplace & Cloud Operations",
        bullets: [
          "Manage PRM credit workflows, tracking, and reporting with zero gaps.",
          "Support creation, iteration, and troubleshooting of AWS Marketplace listings (SaaS + Professional Services).",
          "Configure and maintain S3 buckets, IAM roles, policies, and permission boundaries.",
          "Ensure all Marketplace assets are ASCII-safe, reviewer-proof, and compliant with AWS validation rules.",
          "Troubleshoot encoding, validation, and deployment issues across listings.",
        ],
      },
      {
        title: "2. SaaS Product Development Support",
        bullets: [
          "Support early product architecture, integrations, and backend workflows.",
          "Assist with API testing, environment setup, and lightweight development tasks.",
          "Create and maintain technical documentation, diagrams, and runbooks.",
          "Translate GTM requirements into technical tasks in collaboration with the Founder.",
        ],
      },
      {
        title: "3. Technical Systems & Automation",
        bullets: [
          "Build internal tools, scripts, and automations to streamline operations.",
          "Support data pipelines, dashboards, and operational trackers.",
          "Troubleshoot system issues across AWS, internal tools, and partner platforms.",
        ],
      },
      {
        title: "4. Cross-Functional Collaboration",
        bullets: [
          "Work directly with the Founder on high-priority technical workflows.",
          "Collaborate with content, GTM, and partner teams to ensure technical accuracy.",
          "Provide proactive communication and clear status updates.",
        ],
      },
    ],
    whoYouAre: [
      "4+ years of hands-on AWS engineering experience with demonstrated ownership of cloud workflows.",
      "Must hold at least two AWS Associate-level certifications (Solutions Architect Associate preferred).",
      "Strong experience with IAM, S3, Lambda, CloudFormation, and serverless fundamentals.",
      "Familiarity with SaaS architectures, APIs, and backend fundamentals.",
      "Experience with scripting languages such as Python or Bash.",
      "Thrives in a fast-paced, founder-led environment with high expectations.",
      "Strong documentation and communication skills.",
    ],
    workEnvironment: [
      "Direct collaboration with the Founder and GTM leadership.",
      "Exposure to AWS Marketplace, co-sell, and global SaaS founders.",
      "High-ownership environment with autonomy, clarity, and rapid iteration.",
    ],
    whatYouWillGain: [
      { label: "Visibility", description: "Your work will be seen by AWS teams and global SaaS founders." },
      { label: "Impact", description: "Shape the technical foundation of a fast-growing GTM accelerator." },
      { label: "Growth", description: "Opportunity to grow into senior technical or product leadership roles." },
      {
        label: "Leadership",
        description: "Influence technical workflows, product direction, and operational maturity.",
      },
    ],
    howToApply:
      "Send your resume + GitHub or technical samples to operations@saasnova.ai with Subject Line: Technical Engineer - SaaSNova | Job ID: TEC-ENG-2026-IN. Or use the Apply button below to submit via this page.",
    accent: "slate",
  },
];

export const ROLE_SELECT_OPTIONS = [
  ...OPEN_ROLES.map((r) => r.applyOption),
  "Open Application",
];
