export type PartnerCategory = "cloud-gtm" | "cosell-platform" | "si-distribution";

export type PartnerDrawerType = "hyperscaler-sme" | "cosell-bundle" | "enterprise-delivery";

export interface PartnerBundleDeliverable {
  title: string;
  description: string;
}

export interface PartnerPillarItem {
  title: string;
  description: string;
}

export interface PartnerResourceItem {
  badge: string;
  title: string;
  description: string;
  url: string;
  linkText: string;
  isExternal?: boolean;
}

export interface PartnerDossier {
  id: string;
  slug: string;
  name: string;
  category: PartnerCategory;
  categoryLabel: string;
  drawerType: PartnerDrawerType;
  badge: string;
  tagline: string;
  summary: string;
  logo: string;
  accentColor: string; // Tailwind border/badge color
  stats?: { label: string; value: string }[];
  highlights: string[];

  // Drawer-specific rich details
  drawerTitle: string;
  drawerSubtitle: string;
  audienceNotice?: string;
  partnerWebsiteUrl?: string;
  partnerWebsiteLabel?: string;
  primaryCtaUrl?: string;
  primaryCtaLabel?: string;

  whatIsvsGetTitle?: string;
  whatIsvsGetDescription?: string;

  whyTogetherHeading?: string;
  whyTogetherSubheading?: string;
  whyTogetherDescription?: string;
  whyTogetherPillars?: PartnerPillarItem[];

  partnershipActionTitle?: string;
  partnershipActionDescription?: string;
  closingPitch?: string;

  announcedBundle?: {
    badge: string;
    title: string;
    description: string;
    linkUrl: string;
    linkLabel: string;
    deliverablesTitle: string;
    deliverables: PartnerBundleDeliverable[];
  };

  pressRelease?: {
    badge: string;
    title: string;
    description: string;
    linkUrl: string;
    linkLabel: string;
  };

  urgentAdvisory?: {
    badge: string;
    title: string;
    description: string;
    checklistTitle: string;
    checklistItems: string[];
    closingNote: string;
    ctaText: string;
    ctaUrl: string;
  };

  fieldEvent?: {
    badge: string;
    title: string;
    description: string;
    linkUrl: string;
    linkLabel: string;
  };

  storefrontFeature?: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
  };

  quote?: {
    text: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };

  videoEmbedUrl?: string;
  videoCaption?: string;
  deliverables?: PartnerBundleDeliverable[];
  vehicles?: string[];
  formConfig: {
    formTitle: string;
    formDescription: string;
    emailPlaceholder: string;
    emailLabel: string;
    aliasLabel?: string;
    aliasPlaceholder?: string;
    customFieldLabel?: string;
    customFieldPlaceholder?: string;
    submitButtonText: string;
  };
}

export const PARTNERS_REGISTRY: Record<string, PartnerDossier> = {
  "aws-gtm": {
    id: "aws-gtm",
    slug: "aws-gtm",
    name: "Amazon Web Services",
    category: "cloud-gtm",
    categoryLabel: "Cloud Hyperscaler GTM",
    drawerType: "hyperscaler-sme",
    badge: "AWS Partner Network",
    tagline: "Accelerating ISV Accelerate & ACE Field Co-Sell Alignment",
    summary:
      "Direct engagement bridge for Amazonians, AWS Partner Development Managers (PDMs), and Solution Architects to co-pilot high-velocity enterprise pipeline.",
    logo: "/aws-logo.png",
    accentColor: "from-amber-500/20 to-orange-500/10 border-amber-300/40 text-amber-700",
    stats: [
      { label: "Co-Sell Alignment", value: "ISV Accelerate" },
      { label: "Pipeline Sync", value: "ACE Native" },
      { label: "Listing Velocity", value: "14 Days" },
    ],
    highlights: [
      "Dedicated joint opportunity routing into AWS ACE within 24 hours",
      "CPPO (Customer Partner Private Offer) automation for pre-committed spend",
      "Field rep incentive alignment & joint customer value architecture",
      "Custom SaaS contract metering and entitlement verification",
    ],
    drawerTitle: "Amazonian & AWS SME Co-Sell Registration",
    drawerSubtitle: "Exclusively for L5+ and Partner-Aligned AWS Field Sales, PDMs, and Solution Architects",
    audienceNotice: "Please use your corporate @amazon.com alias for instant priority verification and ACE routing.",
    formConfig: {
      formTitle: "Register Joint Opportunity / AWS SME Channel",
      formDescription: "Connect directly with SaaSNova's Cloud Alliance Leadership for active pipeline synchronization.",
      emailLabel: "Corporate Amazon Email",
      emailPlaceholder: "alias@amazon.com",
      aliasLabel: "AWS Alias / Login",
      aliasPlaceholder: "e.g. jsmith",
      customFieldLabel: "AWS Practice / Organization",
      customFieldPlaceholder: "e.g. Enterprise Security, FinServ, ISV Success",
      submitButtonText: "Register AWS Co-Sell Account",
    },
  },

  "azure-gtm": {
    id: "azure-gtm",
    slug: "azure-gtm",
    name: "Microsoft Azure",
    category: "cloud-gtm",
    categoryLabel: "Cloud Hyperscaler GTM",
    drawerType: "hyperscaler-sme",
    badge: "IP Co-Sell Ready",
    tagline: "MACC Drawdowns & Microsoft Commercial Marketplace Mastery",
    summary:
      "Empowering Microsoft Account Executives and Specialists to decrement enterprise customer MACC commitments while unlocking IP Co-Sell incentives.",
    logo: "/azure-logo.png",
    accentColor: "from-blue-500/20 to-sky-500/10 border-blue-300/40 text-blue-700",
    stats: [
      { label: "Commitment Drawdown", value: "100% MACC" },
      { label: "Certification", value: "IP Co-Sell Ready" },
      { label: "Partner Center", value: "Automated Sync" },
    ],
    highlights: [
      "100% eligible for Microsoft Azure Consumption Commitment (MACC) drawdown",
      "Direct opportunity registration via Partner Center referrals API",
      "Top-tier seller incentive payouts for Microsoft field reps",
      "Multi-region transacting across commercial and sovereign cloud domains",
    ],
    drawerTitle: "Microsoft Azure Specialist & Field Registration",
    drawerSubtitle: "For Microsoft Account Executives, Cloud Solution Architects, and Global Partner Solutions Specialists",
    audienceNotice: "Please submit using your official @microsoft.com address for priority routing to our Azure Alliance Lead.",
    formConfig: {
      formTitle: "Register Azure Co-Sell Alignment",
      formDescription: "Coordinate joint customer pipeline and initiate custom private offer terms.",
      emailLabel: "Corporate Microsoft Email",
      emailPlaceholder: "name@microsoft.com",
      aliasLabel: "Microsoft Alias / Alias ID",
      aliasPlaceholder: "e.g. v-alias or alias",
      customFieldLabel: "Solution Area / Industry Unit",
      customFieldPlaceholder: "e.g. Enterprise Commercial, Health & Life Sciences",
      submitButtonText: "Register Azure Co-Sell Account",
    },
  },

  "gcp-gtm": {
    id: "gcp-gtm",
    slug: "gcp-gtm",
    name: "Google Cloud",
    category: "cloud-gtm",
    categoryLabel: "Cloud Hyperscaler GTM",
    drawerType: "hyperscaler-sme",
    badge: "Google Cloud Partner Advantage",
    tagline: "Committed Spend Drawdown & Joint GTM Co-Piloting",
    summary:
      "Accelerating customer adoption through Google Cloud Marketplace private contracts and direct Field rep compensation alignment.",
    logo: "/gcp-logo.png",
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-300/40 text-emerald-700",
    stats: [
      { label: "Committed Spend", value: "100% Drawdown" },
      { label: "Tier", value: "Advantage Premier" },
      { label: "Contracting", value: "Private Pricing" },
    ],
    highlights: [
      "Decrements Google Cloud customer committed spend contracts dollar-for-dollar",
      "Unified listing management through Google Cloud Marketplace APIs",
      "Direct co-selling with Google Cloud enterprise field teams and CE leadership",
      "Streamlined procurement velocity from 6 months down to 2 weeks",
    ],
    drawerTitle: "Google Cloud Field & CE Registration",
    drawerSubtitle: "For Google Cloud Field Sales, Customer Engineers, and Partner Advantage Specialists",
    audienceNotice: "Please enter your @google.com address for instant verification and direct Slack connect routing.",
    formConfig: {
      formTitle: "Register GCP Co-Sell Alignment",
      formDescription: "Partner with SaaSNova to close joint enterprise workloads under Google Cloud committed contracts.",
      emailLabel: "Corporate Google Email",
      emailPlaceholder: "username@google.com",
      aliasLabel: "LDAP / Corp ID",
      aliasPlaceholder: "e.g. username",
      customFieldLabel: "Region / Operating Unit",
      customFieldPlaceholder: "e.g. Google Cloud North America Enterprise",
      submitButtonText: "Register GCP Co-Sell Account",
    },
  },

  "saasify": {
    id: "saasify",
    slug: "saasify",
    name: "SaaSify",
    category: "cosell-platform",
    categoryLabel: "3PI Partner · Listing Infrastructure",
    drawerType: "cosell-bundle",
    badge: "LISTING INFRASTRUCTURE",
    tagline: "Listing Infrastructure + GTM Execution",
    summary:
      "SaaSNova drives GTM strategy and cloud field alignment, SaaSify handles marketplace operations and automation. Both run in parallel so you don't lose weeks to handoffs.",
    logo: "/images/saasify-logo.png",
    accentColor: "from-sky-500/20 to-blue-500/10 border-sky-300/40 text-[#008BF8]",
    partnerWebsiteUrl: "https://saasify.ai",
    partnerWebsiteLabel: "Visit SaaSify",
    primaryCtaUrl: "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03",
    primaryCtaLabel: "Book a 30-min Execution Strategy Session",
    stats: [
      { label: "Execution Model", value: "Parallel GTM" },
      { label: "Listing Setup", value: "Turnkey Done-For-You" },
      { label: "Speed to Co-Sell", value: "Weeks, Not Months" },
    ],
    highlights: [
      "Listing infrastructure and co-sell activation launch together, removing the operational drag that costs most ISVs 4–6 weeks",
      "Infrastructure implementation and GTM strategy interlocked from day one",
      "Unified market posture presenting as one coordinated motion across listing quality and field engagement",
      "Full turnkey metering, webhooks, and private offers without custom engineering",
    ],
    drawerTitle: "Accelerate Your Cloud GTM with SaaSNova x SaaSify",
    drawerSubtitle:
      "SaaSNova drives GTM strategy and cloud field alignment, SaaSify handles marketplace operations and automation. Both run in parallel so you don't lose weeks to handoffs.",

    whatIsvsGetTitle: "Listing Infrastructure + GTM Execution",
    whatIsvsGetDescription:
      "A listing creates visibility. Automation and GTM precision create momentum. SaaSify brings the infrastructure layer, SaaSNova brings the GTM activation layer, and together we help ISVs turn cloud visibility into real cloud momentum.",

    quote: {
      text: "Top AWS partners pair Marketplace strength with sharp GTM. This bundle does both. SaaSify handles infrastructure, SaaSNova drives co-sell, so ISVs go live as credible partners in weeks, not months.",
      author: "Manesh Raveendran",
      role: "CEO & Founder",
      company: "SaaSify",
    },

    announcedBundle: {
      badge: "Announced Joint Offering",
      title: "SaaSNova × SaaSify AWS Partner Starter Bundle",
      description:
        "The first starter bundle to help ISVs go Marketplace-Ready and Co-Sell Ready in weeks. It's the execution engine to fix your PRM and GTM gaps before the July 31 deadline. It is an operator-led execution path that replaces a chaotic 6-month ramp with a structured system, delivering immediate alignment across your organization.",
      linkUrl: "https://www.saasnova.ai/aws-partner-starter-bundle-with-saasify-saasnova/",
      linkLabel: "View Full Bundle Details",
      deliverablesTitle: "What the Bundle Delivers",
      deliverables: [
        {
          title: "Parallel Execution",
          description: "GTM, Partner Central readiness, and Marketplace activation at the same time.",
        },
        {
          title: "Structured Sequences",
          description: "Eliminate delays and early pipeline visibility.",
        },
        {
          title: "Speed to Co-Sell",
          description: "Market-ready and co-sell ready in weeks, not months.",
        },
      ],
    },

    pressRelease: {
      badge: "In the News · EIN Presswire",
      title: "SaaSify and SaaSNova Launch the First AWS Partner Starter Bundle",
      description:
        "The joint offering delivers GTM execution, Partner Central readiness, and Marketplace activation in parallel. This creates a structured and sequenced path that ensures ISVs are market-ready in weeks. This announcement marks a major inflection point for early-stage and growth ISVs entering the AWS Partner Network. By unifying infrastructure setup with active field enablement, partners can bypass the usual friction and immediately start building viable cloud pipeline.",
      linkUrl:
        "https://www.einpresswire.com/article/908400568/saasify-and-saasnova-launch-the-first-aws-partner-starter-bundle-to-help-isvs-go-marketplace-co-sell-ready-in-weeks?utm_source=website&utm_medium=page&utm_campaign=aws-bundle",
      linkLabel: "Read the Full Press Release",
    },

    urgentAdvisory: {
      badge: "Critical Deadline Alert",
      title: "AWS PRM Deadline: July 31. Act Now.",
      description:
        "AWS has set a hard deadline: all APN partners must complete PRM by July 31, 2026. Most partners still don’t know this is coming, but the consequences are real: loss of AWS Partner Funding Benefits, loss of the 'Deployed on AWS' badge, blocked co‑sell eligibility, and delays across Marketplace and ACE motions. If you want AWS to see the consumption your product already drives and stay fully compliant, this is the place to start.",
      checklistTitle: "This 30‑minute call is designed to help you:",
      checklistItems: [
        "Understand exactly what PRM requires",
        "Review your AWS environment + tagging readiness",
        "Map the 1–3 day implementation path",
        "Avoid the June bottleneck as ISVs rush to comply",
      ],
      closingNote: "The deadline is July 31. The implementation is fast. The cost of missing it isn't.",
      ctaText: "Book an implementation call today",
      ctaUrl:
        "https://calendly.com/jen-saasnova/aws-prm-deadline-july-31-act-now?utm_source=SaaSNova-website&utm_medium=website&utm_campaign=PRM_Webinar",
    },

    whyTogetherHeading: "Why Together",
    whyTogetherSubheading: "Parallel execution, singular focus.",
    whyTogetherDescription:
      "Infrastructure readiness and GTM activation running simultaneously, so neither layer is blocked waiting on the other.",
    whyTogetherPillars: [
      {
        title: "Accelerated Readiness",
        description:
          "Listing infrastructure and co-sell activation launch together, removing the operational drag that costs most ISVs four to six weeks at program start.",
      },
      {
        title: "Continuous Alignment",
        description:
          "Infrastructure implementation and GTM strategy are interlocked from day one. The field motion does not wait for the listing to stabilize, and the listing does not wait for the field motion to prove itself.",
      },
      {
        title: "Unified Market Posture",
        description:
          "A coherent, professional ISV presence across listing quality, co-sell credibility, and field engagement, presenting as one coordinated motion rather than two separate vendor engagements.",
      },
    ],

    fieldEvent: {
      badge: "In the Field Together",
      title: "SaaSNova x SaaSify at RSAC 2026",
      description:
        "SaaSNova and SaaSify joined forces on the ground at RSA Conference 2026, San Francisco, to help ISVs solve the Cloud GTM puzzle. In the 2026 cloud landscape, a great product is only half the battle. To win, ISVs need a validated GTM strategy and the automated infrastructure to back it up.",
      linkUrl: "/resources/blog-aws-prm-deadline",
      linkLabel: "Read the RSAC 2026 Recap",
    },

    closingPitch:
      "Ready to combine listing and execution? Book a 30-min Execution Strategy Session with Jen Dawson. She will assess your current marketplace situation and recommend the right combination of SaaSify and SaaSNova for your ISV.",

    formConfig: {
      formTitle: "Book Starter Bundle Strategy Session",
      formDescription: "Schedule a joint discovery session with SaaSNova and SaaSify architects to assess your readiness.",
      emailLabel: "Work Email",
      emailPlaceholder: "you@company.com",
      customFieldLabel: "Current Cloud Provider & Status",
      customFieldPlaceholder: "e.g. AWS ISV Accelerate / Exploring First Listing",
      submitButtonText: "Request Starter Bundle Dossier",
    },
  },

  "workspan": {
    id: "workspan",
    slug: "workspan",
    name: "WorkSpan",
    category: "cosell-platform",
    categoryLabel: "3PI Partner · Co-Sell Automation",
    drawerType: "enterprise-delivery",
    badge: "INTEGRATION AND AUTOMATION",
    tagline: "Co-Sell Execution x Pipeline Intelligence",
    summary:
      "Unifying intelligence platforms with rigorous field execution to maintain a complete, organized overview of your alliance motion across global hyperscalers.",
    logo: "/workspan.svg",
    accentColor: "from-sky-500/20 to-blue-500/10 border-sky-300/40 text-[#008BF8]",
    partnerWebsiteUrl: "https://workspan.com",
    partnerWebsiteLabel: "Visit Workspan",
    primaryCtaUrl: "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03",
    primaryCtaLabel: "Book a 30-min Execution Strategy Session",
    stats: [
      { label: "CRM Sync", value: "Salesforce & HubSpot" },
      { label: "Multi-Partner", value: "Unified Network" },
      { label: "Audit Trail", value: "SOC 2 Type II" },
    ],
    highlights: [
      "Real-time pipeline alignment across AWS ACE, Microsoft Partner Center, and Google Partner Advantage",
      "Secure zero-leak opportunity sharing between partner sales reps",
      "Attribution modeling proving co-sell influence on enterprise average deal size",
      "Automated notification alerts when hyperscaler reps accept or update referral deals",
    ],
    drawerTitle: "Co-Sell Execution x Pipeline Intelligence",
    drawerSubtitle:
      "Unifying intelligence platforms with rigorous field execution to maintain a complete, organized overview of your alliance motion across global hyperscalers.",

    whatIsvsGetTitle: "Intelligence & Execution Combined",
    whatIsvsGetDescription:
      "A cohesive co-sell strategy where platform visibility, accurate data tracking, and dynamic market execution merge into a single, seamless pipeline stream.",

    whyTogetherHeading: "Why Together",
    whyTogetherSubheading: "Visibility powered by action.",
    whyTogetherDescription:
      "Marrying advanced tracking intelligence with on-the-ground operational strength.",
    whyTogetherPillars: [
      {
        title: "Synchronized Motions",
        description: "Keeping GTM operations strictly aligned with structural intelligence platforms.",
      },
      {
        title: "Consolidated Data Strategy",
        description: "Bridging gaps between field reality and CRM integration for confident modeling.",
      },
      {
        title: "Executive Transparency",
        description: "Structuring partnership actions so they communicate clearly to leadership stakeholders.",
      },
    ],

    partnershipActionTitle: "See how SaaSNova and Workspan work together.",
    partnershipActionDescription:
      "Co-sell intelligence paired with GTM execution, the complete operating system for cloud revenue. Featuring the SaaSNova x Workspan co-sell partnership discussion.",
    videoEmbedUrl: "https://www.youtube.com/embed/JUNjzyUfLO0",
    videoCaption: "Featuring the SaaSNova x Workspan co-sell partnership discussion",

    closingPitch:
      "Execution and intelligence together. SaaSNova's execution and Workspan's tracking combine into a complete co-sell operating system for your ISV.",

    formConfig: {
      formTitle: "Connect Co-Sell Sync",
      formDescription: "Integrate your Workspan network with SaaSNova for transparent pipeline co-management.",
      emailLabel: "Work Email",
      emailPlaceholder: "you@company.com",
      customFieldLabel: "CRM & Co-Sell Network Size",
      customFieldPlaceholder: "e.g. Salesforce Enterprise + AWS & Azure",
      submitButtonText: "Initiate Workspan Network Sync",
    },
  },

  "pronix": {
    id: "pronix",
    slug: "pronix",
    name: "Pronix",
    category: "si-distribution",
    categoryLabel: "SI / GSI · Enterprise Deployment",
    drawerType: "enterprise-delivery",
    badge: "ENTERPRISE DEPLOYMENT",
    tagline: "SI Delivery x Cloud GTM Execution",
    summary:
      "Unifying enterprise deployment frameworks with continuous commercial alignment to solidify cloud marketplace adoption strategies.",
    logo: "/pronix.svg",
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-300/40 text-[#10B981]",
    primaryCtaUrl: "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03",
    primaryCtaLabel: "Book a Discovery Call",
    stats: [
      { label: "Cloud Engineers", value: "500+" },
      { label: "Enterprise Migrations", value: "120+" },
      { label: "Delivery Model", value: "Global 24/7" },
    ],
    highlights: [
      "Turnkey professional services for enterprise ISV migration and microservices replatforming",
      "Joint architectural reviews ensuring compliance with AWS Well-Architected Framework",
      "Post-marketplace transaction deployment, onboarding, and ongoing managed support",
      "Specialized competency in financial services, healthcare, and retail cloud systems",
    ],
    drawerTitle: "SI Delivery x Cloud GTM Execution",
    drawerSubtitle:
      "Unifying enterprise deployment frameworks with continuous commercial alignment to solidify cloud marketplace adoption strategies.",

    whatIsvsGetTitle: "Enterprise Scale in Action",
    whatIsvsGetDescription:
      "Bridging the gap between SI delivery protocols and aggressive cloud revenue pursuit, forming a cohesive operational model for global tech expansion.",

    whyTogetherHeading: "Why Together",
    whyTogetherSubheading: "A cohesive ecosystem vision.",
    whyTogetherDescription: "Merging deployment standards with GTM acceleration.",
    whyTogetherPillars: [
      {
        title: "Integration Integrity",
        description: "Upholding rigorous technical standards alongside rapid alliance motions.",
      },
      {
        title: "Synchronized Effort",
        description: "Aligning delivery milestones tightly with commercial market positioning.",
      },
      {
        title: "AWS, Azure, GCP",
        description:
          "The partnership covers all three hyperscalers. Delivery and execution are scoped to the ISV's cloud mix and revenue targets.",
      },
    ],

    partnershipActionTitle: "See how SaaSNova and Pronix work together.",
    partnershipActionDescription:
      "The GTM Execution Partnership moving ISVs from integration delivery to active cloud pipeline. SaaSNova x Pronix: The GTM Execution Partnership.",
    videoEmbedUrl: "https://www.youtube.com/embed/omjoyPB7roQ",
    videoCaption: "SaaSNova x Pronix: The GTM Execution Partnership",

    closingPitch:
      "Ready to accelerate your SI delivery? Reach out to Jen Dawson to explore a partnership between your SI practice and SaaSNova's cloud GTM execution capability.",

    formConfig: {
      formTitle: "Request Joint Solution Architecture",
      formDescription: "Engage Pronix and SaaSNova for multi-cloud deployment or enterprise modernization.",
      emailLabel: "Work Email",
      emailPlaceholder: "you@enterprise.com",
      customFieldLabel: "Project Scope / Technology Stack",
      customFieldPlaceholder: "e.g. AWS EKS Migration, Hybrid Cloud Integration",
      submitButtonText: "Connect with Pronix Delivery Lead",
    },
  },

  "carahsoft": {
    id: "carahsoft",
    slug: "carahsoft",
    name: "Carahsoft",
    category: "si-distribution",
    categoryLabel: "SI / GSI · Distribution & Public Sector",
    drawerType: "enterprise-delivery",
    badge: "DISTRIBUTION & PUBLIC SECTOR",
    tagline: "Ecosystem Reach x AWS GTM Execution",
    summary:
      "Combining Carahsoft's massive public sector and technology ecosystem with SaaSNova's hands-on AWS Marketplace execution to scale ISV revenue through the channel.",
    logo: "/carahsoft.svg",
    accentColor: "from-pink-500/20 to-rose-500/10 border-pink-300/40 text-[#FA0F9C]",
    primaryCtaUrl: "https://calendly.com/jen-saasnova/aws-marketplace-storefront-strategy-meeting",
    primaryCtaLabel: "Book a Discovery Call",
    stats: [
      { label: "Procurement Speed", value: "Pre-Competed" },
      { label: "Clearance", value: "FedRAMP & DoD" },
      { label: "Contract Reach", value: "Federal & SLED" },
    ],
    highlights: [
      "Access to premier government contract vehicles: NASA SEWP V, GSA Schedule 70, ITES-SW2",
      "State & Local procurement through NASPO ValuePoint and OMNIA Partners",
      "Seamless billing orchestration through AWS Marketplace for Public Sector (MPPS)",
      "Strict FedRAMP, StateRAMP, and FISMA compliance alignment for SaaS software",
    ],
    drawerTitle: "Ecosystem Reach x AWS GTM Execution",
    drawerSubtitle:
      "Combining Carahsoft's massive public sector and technology ecosystem with SaaSNova's hands-on AWS Marketplace execution to scale ISV revenue through the channel.",

    whatIsvsGetTitle: "The Ultimate CPPO Engine",
    whatIsvsGetDescription:
      "Bridging the gap between operational cloud readiness and active procurement. We build the execution system; Carahsoft accelerates the transaction through trusted government and enterprise channels.",

    whyTogetherHeading: "Why Together",
    whyTogetherSubheading: "A complete channel strategy.",
    whyTogetherDescription:
      "Merging broad distribution reach with hyper-focused AWS GTM acceleration.",
    whyTogetherPillars: [
      {
        title: "Public Sector Access",
        description:
          "Leveraging Carahsoft's Master Government Aggregator status to rapidly move ISV solutions into highly regulated and public sector accounts.",
      },
      {
        title: "CPPO Velocity",
        description:
          "Executing Channel Partner Private Offers (CPPOs) seamlessly. Carahsoft handles the transaction while SaaSNova ensures operational hygiene.",
      },
      {
        title: "Co-Sell Alignment",
        description:
          "Connecting your AWS Marketplace presence to workflows that support the sale, ensuring every channel deal is properly tagged and visible to AWS field teams.",
      },
    ],

    storefrontFeature: {
      badge: "Strategic Execution",
      title: "Activating the AWS Marketplace Storefront",
      description:
        "The AWS Marketplace Storefront gives ISVs and channel partners more than a listing. It unifies the buyer experience, private offers, partner workflows, and co-selling motion in one place. Through our partnership, we enable ISVs to launch multi-partner solution bundles, run campaign-led GTM motions, and route channel leads directly to sales teams with precision.",
      bullets: [
        "Unified co-sell & campaign-led GTM",
        "Channel partner campaign distribution",
        "Multi-partner solution bundles for partner-attached deals",
      ],
    },

    quote: {
      text: "Carahsoft works with a broad ecosystem of technology vendors and channel partners, and we see an opportunity to make AWS Marketplace more accessible as part of that ecosystem. Working with SaaSNova brings focused marketplace execution and storefront capabilities to help ISVs and channel partners build a stronger path to market.",
      author: "Adam Mahn",
      role: "Business Development Manager",
      company: "Carahsoft",
    },

    vehicles: [
      "NASA SEWP V (Solutions for Enterprise-Wide Procurement)",
      "GSA Multiple Award Schedule (MAS) - Schedule 70",
      "DOD ESI & Army CHS-6 Hardware / Software",
      "NASPO ValuePoint Cloud Solutions Contract",
      "NCPA (National Cooperative Purchasing Alliance)",
    ],

    closingPitch:
      "Ready to scale via the channel? Reach out to Jen Dawson to explore how the SaaSNova and Carahsoft partnership can accelerate your public sector and enterprise distribution strategy.",

    formConfig: {
      formTitle: "Public Sector Contract Inquiries",
      formDescription: "Determine contracting vehicles, CPPO pricing schedules, and government buyer eligibility.",
      emailLabel: "Agency / Corporate Email (.gov, .mil, or .com)",
      emailPlaceholder: "name@agency.gov",
      customFieldLabel: "Target Agency or Contract Vehicle",
      customFieldPlaceholder: "e.g. DoD, Dept of Veterans Affairs, NASA SEWP V",
      submitButtonText: "Inquire with Public Sector Desk",
    },
  },
};

export const PARTNERS_LIST = Object.values(PARTNERS_REGISTRY);

export const PARTNER_CATEGORIES: { id: PartnerCategory; label: string; description: string }[] = [
  {
    id: "cloud-gtm",
    label: "Cloud Hyperscaler GTM",
    description: "Direct co-sell alliances with AWS, Microsoft Azure, and Google Cloud field organizations.",
  },
  {
    id: "cosell-platform",
    label: "Marketplace & Co-Sell Platforms",
    description: "Automated listing infrastructure, CPPO engines, and cross-cloud referral synchronization.",
  },
  {
    id: "si-distribution",
    label: "Systems Integrators & Public Sector",
    description: "Global delivery consulting, architecture modernization, and government contract distribution.",
  },
];
