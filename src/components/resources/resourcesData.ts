export type ResourceView =
  | "blog"
  | "show"
  | "case-studies"
  | "webinars"
  | "events"
  | "news"
  | "newsletter";

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  summary: string;
  takeaways: string[];
  contentParagraphs: string[];
  featured?: boolean;
}

export interface ShowEpisode {
  id: string;
  episodeNumber: string;
  title: string;
  duration: string;
  youtubeId: string;
  embedUrl: string;
  description: string;
  tag: string;
  isShort?: boolean;
  isWebinar?: boolean;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  title: string;
  badge: string;
  subtitle?: string;
  refCode?: string;
  partnerTier?: string;
  beforeState?: string;
  afterState?: string;
  logo: string;
  situation: string;
  challenge: string;
  solution: string;
  benefits: string;
  results: { num: string; label: string }[];
}

export interface WebinarItem {
  id: string;
  title: string;
  duration: string;
  tag: string;
  speaker: string;
  role: string;
  youtubeId: string;
  embedUrl: string;
  description: string;
  keyTakeaways: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  description: string;
  tag: string;
  isUpcoming: boolean;
  image?: string;
  rsvpUrl?: string;
  ctaText?: string;
  externalLink?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  summary: string;
  image: string;
  url: string;
  isExternal?: boolean;
}

// ── 1. BLOG POSTS (Exact word-to-word from live site) ─────────────────────────
export const BLOG_POSTS: BlogItem[] = [
  {
    id: "blog-aws-prm-deadline",
    title: "The July 31 AWS PRM Deadline: How to Measure Attribution and Keep Funding",
    slug: "blog-aws-prm-deadline",
    category: "AWS APN Compliance",
    date: "April 2026",
    readTime: "5 min read",
    author: "Jen Dawson",
    image: "/images/blogs/Blog 4 PRM.png",
    summary:
      "Visibility is the new currency inside AWS. By July 31, 2026, AWS will measure partner impact through PRM. Learn the execution fixes to maintain eligibility.",
    takeaways: [
      "PRM shifts attribution from self-reported claims to automated telemetry and AWS field seller validation.",
      "Failing to meet PRM requirements will pause MDF funding and downgrade co-sell routing priority.",
      "Audit all in-flight ACE opportunities for stage progression within the last 14 days.",
      "Ensure CPPO private offers match customer AWS account identifiers exactly to prevent orphan revenue.",
    ],
    contentParagraphs: [
      "AWS has set a hard deadline: all APN partners must complete PRM by July 31, 2026. Most partners still don't know this is coming, but the consequences are real: loss of AWS Partner Funding Benefits, loss of the 'Deployed on AWS' badge, blocked co-sell eligibility, and delays across Marketplace and ACE motions.",
      "PRM (Partner Referral Management) is AWS's new standard for tracking and validating co-sell pipeline. It connects partner opportunities directly to AWS field sales metrics, replacing legacy manual registration paths with automated attribution verification.",
      "If you want AWS field teams to see the consumption your software drives and keep your co-sell momentum moving without sudden administrative pauses, implementing PRM before the deadline is non-negotiable.",
    ],
    featured: true,
  },
  {
    id: "saasnova-hydrolix-blog-stop-buying-software-like-2015",
    title: "Stop Buying Software Like It’s 2015",
    slug: "saasnova-hydrolix-blog-stop-buying-software-like-2015",
    category: "AWS Marketplace",
    date: "Aug 2026",
    readTime: "2 min read",
    author: "Jen Dawson",
    image: "/images/saasnova-hydrolix-blog-cover-image-All-the-data-None-of-the-drag.png",
    summary:
      "Skip the procurement wait and buy Hydrolix on the AWS Marketplace through your existing AWS account and committed spend.",
    takeaways: [
      "Traditional enterprise procurement takes 6-9 months of legal redlines, security reviews, and vendor onboarding.",
      "Enterprise Cloud Commitments (EDP / MACC) allow software purchases against existing cloud spend with zero new master service agreements.",
      "ISVs that provide frictionless 1-click private offer workflows win against legacy competitors every time.",
    ],
    contentParagraphs: [
      "Traditional procurement is where software deals go to die. Six months of legal redlines, vendor onboarding questionnaires, security assessments, and budget approvals while your engineering team waits for tools they needed last quarter.",
      "With AWS Marketplace, enterprise buyers can purchase Hydrolix using their pre-committed AWS Enterprise Discount Program (EDP) funds. The spend draws down directly from committed cloud budgets, bypassing legacy vendor creation cycles.",
      "SaaSNova partners with Hydrolix to streamline this exact transaction motion, enabling enterprise buyers to deploy modern data streaming infrastructure in days instead of quarters.",
    ],
  },
  {
    id: "blog-cloud-marketplace-listing-silent-fix",
    title: "Why Your Cloud Marketplace Listing Is Silent And What Actually Fixes It",
    slug: "blog-cloud-marketplace-listing-silent-fix",
    category: "ISV Marketplace Activation",
    date: "March 2026",
    readTime: "4 min read",
    author: "Jen Dawson",
    image: "/images/blogs/cloud-marketplace-listing.png",
    summary:
      "Listed on AWS, Azure, or GCP with zero co-sell pipeline? Learn the 3 execution gaps killing your ROI and how to activate field sellers.",
    takeaways: [
      "Gap 1: No direct PDM or Partner Success relationship to champion your solution inside the hyperscaler.",
      "Gap 2: Low-quality co-sell submissions that omit customer workload context and cloud consumption upside.",
      "Gap 3: Zero field seller enablement—hyperscaler account managers don't know who to call or how your product drives compute/storage.",
    ],
    contentParagraphs: [
      "Getting listed on a cloud marketplace takes weeks of technical engineering. But once the listing goes live, the most common result is deafening silence. No inbound deals, no cloud rep introductions, and no pipeline.",
      "A marketplace listing is not a storefront on Amazon.com—customers don't browse and buy enterprise software with a credit card. A listing is a transaction vehicle that only works when powered by active field co-selling.",
      "To break the silence, ISVs must build a structured co-sell playbook that aligns with hyperscaler seller compensation, provides crisp 1-page solution briefs, and delivers high-fidelity ACE deal registrations.",
    ],
  },
  {
    id: "blog-aws-alignment",
    title: "Why AWS Marketplace GTM Fails for Most SaaS Companies (And What Winners Do)",
    slug: "blog-aws-alignment",
    category: "AWS Execution Strategy",
    date: "Feb 2026",
    readTime: "6 min read",
    author: "Jen Dawson",
    image: "/images/blogs/Blog kr.png",
    summary:
      "Most ISVs treat marketplace as an IT deployment. Winners treat it as a sales compensation and co-sell pipeline engine.",
    takeaways: [
      "Align your pricing metrics with AWS consumption models so sellers earn retire-quota credit.",
      "Train your direct sales reps to ask about customer cloud commitments in the first discovery call.",
      "Engage AWS Partner Development Managers (PDMs) with concrete customer wins, not generic capability decks.",
      "Achieve AWS ISV Accelerate designation to unlock direct co-sell compensation for AWS account managers.",
    ],
    contentParagraphs: [
      "The vast majority of B2B SaaS companies that invest in AWS Marketplace fail to generate repeatable revenue. They spend six figures on listing automation software and assume cloud field teams will miraculously start selling their product.",
      "Top-performing ISVs understand that AWS sellers care about one thing: hitting their annual cloud consumption targets. If your software drives AWS workload growth and helps their enterprise accounts draw down EDP commitments, they will actively advocate for you.",
      "Winning on AWS requires rigorous operational discipline: disciplined ACE registration hygiene, CPPO private offer acceleration, and ongoing field relationship building.",
    ],
  },
];

// ── 2. THE JEN GTM SHOW (Authentic Episodes & Shorts from live site) ─────────
export const SHOW_EPISODES: ShowEpisode[] = [
  {
    id: "ep-1",
    episodeNumber: "01",
    title: "Why Your AWS Listing Isn't Generating Pipeline",
    duration: "18 min",
    youtubeId: "EN63uxhcn08",
    embedUrl: "https://www.youtube.com/embed/EN63uxhcn08",
    description:
      "Jen Dawson breaks down why getting listed is only 10% of the battle, and what operational steps actually wake up AWS field teams.",
    tag: "Marketplace Reality",
    isShort: false,
    isWebinar: true,
  },
  {
    id: "ep-2",
    episodeNumber: "02",
    title: "Why Your AWS Listing Isn't Generating Pipeline (Full Breakdown)",
    duration: "21 min",
    youtubeId: "RjiC4RbwsPI",
    embedUrl: "https://www.youtube.com/embed/RjiC4RbwsPI",
    description:
      "The mechanics of marketplace listings, why the 'if you build it they will come' mentality fails every time, and the tactical adjustments needed to drive buyer traffic.",
    tag: "Episode 7",
    isShort: false,
    isWebinar: false,
  },
  {
    id: "short-1",
    episodeNumber: "S1",
    title: "AWS Co-Selling Fails Without This",
    duration: "60 sec",
    youtubeId: "wTuS6Qfx8ME",
    embedUrl: "https://www.youtube.com/embed/wTuS6Qfx8ME",
    description:
      "The critical field hygiene rules, deal registration disciplines, and account mapping strategies that make cloud reps respond to your pipeline.",
    tag: "Episode 5 Short",
    isShort: true,
  },
  {
    id: "short-2",
    episodeNumber: "S2",
    title: "AWS Marketplace Truth: The 30-Second Rule",
    duration: "45 sec",
    youtubeId: "fshZ5cHhhgE",
    embedUrl: "https://www.youtube.com/embed/fshZ5cHhhgE",
    description:
      "Why long submission notes get ignored by AWS Cloud Partner managers and what to write instead to trigger immediate responses.",
    tag: "GTM Snippet",
    isShort: true,
  },
  {
    id: "short-3",
    episodeNumber: "S3",
    title: "The 30-Second Rule for Co-Sell Submissions",
    duration: "50 sec",
    youtubeId: "U3l0rM8y134",
    embedUrl: "https://www.youtube.com/embed/U3l0rM8y134",
    description:
      "Why long submission notes get ignored by AWS Cloud Partner managers and how to structure your submission for 100% rep engagement.",
    tag: "Field Quick Take",
    isShort: true,
  },
  {
    id: "short-4",
    episodeNumber: "S4",
    title: "How AWS Partner Managers Evaluate ISVs",
    duration: "55 sec",
    youtubeId: "zSj1Z1W295U",
    embedUrl: "https://www.youtube.com/embed/zSj1Z1W295U",
    description:
      "The exact criteria AWS partner managers look for before putting an ISV in front of their enterprise field teams.",
    tag: "Partner Evaluation",
    isShort: true,
  },
  {
    id: "ep-3",
    episodeNumber: "03",
    title: "Why ISVs Stay Invisible to AWS",
    duration: "24 min",
    youtubeId: "6gGeYRud9kk",
    embedUrl: "https://www.youtube.com/embed/6gGeYRud9kk",
    description:
      "How to avoid the common trap of waiting for PDMs to sell your software and how to build grassroots demand with territory reps.",
    tag: "Episode 6 (Part 2)",
    isShort: false,
    isWebinar: false,
  },
  {
    id: "ep-4",
    episodeNumber: "04",
    title: "The AWS GTM Mistake Killing ISV Pipeline",
    duration: "19 min",
    youtubeId: "am_u_Hw6Dd8",
    embedUrl: "https://www.youtube.com/embed/am_u_Hw6Dd8",
    description:
      "Analyzing the fatal mismatch between internal sales commission plans and cloud marketplace transaction workflows.",
    tag: "Episode 6 (Part 1)",
    isShort: false,
    isWebinar: false,
  },
  {
    id: "ep-5",
    episodeNumber: "05",
    title: "Co-Sell Submissions That Cloud Partners Actually Respond To",
    duration: "22 min",
    youtubeId: "rdTY8zhLqPA",
    embedUrl: "https://www.youtube.com/embed/rdTY8zhLqPA",
    description:
      "The language, structure, and relationship context behind co-sell submissions that generate field team engagement, not silence.",
    tag: "AWS Co-Sell",
    isShort: false,
    isWebinar: true,
  },
  {
    id: "ep-6",
    episodeNumber: "06",
    title: "Running Multi-Cloud GTM Without Three Separate Programs",
    duration: "27 min",
    youtubeId: "htHzhWLdVcA",
    embedUrl: "https://www.youtube.com/embed/htHzhWLdVcA",
    description:
      "How ISVs coordinate AWS, Azure, and GCP co-sell motions into a single board-ready narrative without duplicating effort.",
    tag: "Multi-Cloud",
    isShort: false,
    isWebinar: true,
  },
  {
    id: "ep-7",
    episodeNumber: "07",
    title: "What Boards Actually Want to See from Cloud Marketplace GTM",
    duration: "20 min",
    youtubeId: "0FrVn0tB8zs",
    embedUrl: "https://www.youtube.com/embed/0FrVn0tB8zs",
    description:
      "The difference between activity reporting and board-visible proof, and what investors specifically look for when evaluating cloud marketplace traction.",
    tag: "Board Proof",
    isShort: false,
    isWebinar: true,
  },
  {
    id: "ep-8",
    episodeNumber: "08",
    title: "ISV Accelerate, Azure Co-Sell, and GCP Partner Advantage",
    duration: "25 min",
    youtubeId: "JcOlFRFdY8U",
    embedUrl: "https://www.youtube.com/embed/JcOlFRFdY8U",
    description:
      "A practitioner walkthrough of the three major cloud co-sell programs, what each requires, and where most ISVs leave value on the table.",
    tag: "ISV Scaling",
    isShort: false,
    isWebinar: true,
  },
];

// ── 3. CASE STUDIES (Exact 2 verified engagements from live site) ─────────────
export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "arcticwolf",
    client: "Arctic Wolf",
    badge: "SaaSNova NovaX · AWS",
    subtitle: "Category-leading MDR. Strong enterprise momentum. Unmanaged AWS status.",
    refCode: "DOC-REF #AW-8824-AWS",
    partnerTier: "AWS Managed Partner (Graduated in 6 Months)",
    beforeState: "Unmanaged AWS status · 0 ACE routing · Lost in the hyperscaler field",
    afterState: "Official AWS Managed Partner · 9X validated ROI · 2,000+ PSQLs · 300%+ quota",
    logo: "/images/arcticwolf.png",
    title: "From Unmanaged to Enterprise-Ready: How SaaSNova's AWS GTM Architecture Transformed Arctic Wolf's Traction.",
    situation:
      "Entered AWS with strong product-market fit but no GTM motion aligned to how AWS field teams identify and close deals. AWS sellers couldn't route deals or confidently position the solution.",
    challenge:
      "Lack of structured co-sell alignment with AWS field teams, unverified ACE opportunity tracking, and missing CPPO private offer acceleration.",
    solution:
      "SaaSNova engineered a structured AWS co-sell engine: standardized ACE deal desk protocols, active PDM cadence, and trained direct sales on cloud commitment drawdown.",
    benefits:
      "Graduated to official AWS Managed Partner status in 6 months, unlocking 2,000+ PSQLs, 9X validated ROI, 300%+ pipeline quota attainment, and predictable monthly deal flow.",
    results: [
      { num: "2K+", label: "PSQLs Generated" },
      { num: "9X", label: "ROI Validated" },
      { num: "300%+", label: "Pipeline Goal Met" },
      { num: "Managed", label: "Status Achieved" },
    ],
  },
  {
    id: "dataminr",
    client: "Dataminr",
    badge: "SaaSNova NovaX · AWS",
    subtitle: "Global AI platform. Series C fundraise underway. Needed multi-cloud proof.",
    refCode: "DOC-REF #DM-4019-AI",
    partnerTier: "AWS Rising Star to Managed Partner (<12 Months)",
    beforeState: "No AWS co-sell architecture · Unclear partner traction · Stalled enterprise deals",
    afterState: "Secured $300K MDF · 9X validated ROI · Fast-track enterprise cloud drawdown",
    logo: "/images/dataminr-logo.png",
    title: "From Rising Star to AWS-Aligned: Building Dataminr's High-Credibility AWS Motion.",
    situation:
      "Lacked the AWS-specific architecture required to activate co-sell and Marketplace velocity. Investors asked for traction evidence. Needed investor-grade proof and a repeatable motion in 6 months.",
    challenge:
      "Navigating complex enterprise cloud budgets and activating regional hyperscaler sales reps across North America and EMEA without an established partner track record.",
    solution:
      "Implemented SaaSNova's Operator-Led Co-Sell framework: streamlined marketplace catalog listings, automated CPPO deal desks, and joint field roadshows.",
    benefits:
      "Secured $300K in AWS MDF funding, graduated from Rising Star to Managed Partner in under 12 months, validated 9X co-sell ROI, and integrated smoothly into enterprise cloud budgets.",
    results: [
      { num: "<12mo", label: "Rising Star Grad" },
      { num: "$300K", label: "MDF Secured" },
      { num: "9X", label: "ROI Validated" },
      { num: "Managed", label: "Status Achieved" },
    ],
  },
];

// ── 4. WEBINARS & MASTERCLASSES (Exact from live site) ─────────────────────────
export const WEBINARS: WebinarItem[] = [
  {
    id: "web-1",
    title: "Cloud GTM Execution: Why Most ISVs Stall on Marketplace",
    duration: "45 min masterclass",
    tag: "Execution Blueprint",
    speaker: "Jen Dawson",
    role: "Founder & Cloud GTM Operator, SaaSNova",
    youtubeId: "EN63uxhcn08",
    embedUrl: "https://www.youtube.com/embed/EN63uxhcn08",
    description:
      "Why standard marketing tactics fail on cloud marketplaces, how hyperscaler seller compensation actually works, and the step-by-step operating rhythm required to build real pipeline.",
    keyTakeaways: [
      "The 3 fatal assumptions ISVs make after completing their listing.",
      "How to calculate and pitch compute/storage upside to cloud account reps.",
      "Setting up a deal desk that responds to partner inquiries in under 4 hours.",
    ],
  },
  {
    id: "web-2",
    title: "Co-Sell Submissions That Cloud Partners Actually Respond To",
    duration: "38 min session",
    tag: "ACE & Partner Center",
    speaker: "Jen Dawson",
    role: "Founder, SaaSNova",
    youtubeId: "am_u_Hw6Dd8",
    embedUrl: "https://www.youtube.com/embed/am_u_Hw6Dd8",
    description:
      "An insider breakdown of the ACE and Microsoft Partner Center algorithms. Learn what fields field sellers check before accepting deal registrations.",
    keyTakeaways: [
      "Writing customer project scopes that trigger immediate rep engagement.",
      "Avoiding the common submission red-flags that lead to instant rejections.",
      "How to track deal stage progression without annoying cloud sellers.",
    ],
  },
  {
    id: "web-3",
    title: "Multi-Cloud Alliances Playbook for Growth-Stage ISVs",
    duration: "52 min masterclass",
    tag: "Multi-Cloud Scale",
    speaker: "Jen Dawson & Guest Leaders",
    role: "Executive Panel",
    youtubeId: "rdTY8zhLqPA",
    embedUrl: "https://www.youtube.com/embed/rdTY8zhLqPA",
    description:
      "Balancing AWS, Microsoft Azure, and Google Cloud Partner Advantage simultaneously. Structuring internal sales compensation so reps don't favor one hyperscaler arbitrarily.",
    keyTakeaways: [
      "Architecting a single neutral deal desk across all three clouds.",
      "Allocating alliance resources based on customer workload overlap.",
      "Preventing partner conflicts between competing cloud reps.",
    ],
  },
  {
    id: "web-4",
    title: "What Boards Actually Want to See from Cloud Marketplace GTM",
    duration: "40 min briefing",
    tag: "Executive Reporting",
    speaker: "Jen Dawson",
    role: "Founder, SaaSNova",
    youtubeId: "htHzhWLdVcA",
    embedUrl: "https://www.youtube.com/embed/htHzhWLdVcA",
    description:
      "Moving beyond vanity listing metrics to board-level ARR impact. Attribution models that prove cloud marketplace ROI to investors and CFOs.",
    keyTakeaways: [
      "Measuring CAC reduction and sales cycle velocity through private offers.",
      "Proving net revenue retention (NDR) uplift on marketplace-contracted accounts.",
      "Designing board slides that clearly communicate cloud co-sell pipeline health.",
    ],
  },
  {
    id: "web-5",
    title: "ISV Accelerate, Azure Co-Sell, and GCP Partner Advantage Explained",
    duration: "48 min deep-dive",
    tag: "Program Attainment",
    speaker: "Jen Dawson",
    role: "Founder, SaaSNova",
    youtubeId: "0FrVn0tB8zs",
    embedUrl: "https://www.youtube.com/embed/0FrVn0tB8zs",
    description:
      "A no-nonsense walkthrough of the qualification criteria, deal thresholds, and audit requirements for top-tier co-sell designations.",
    keyTakeaways: [
      "Fast-tracking validated customer case studies and architecture reviews.",
      "Unlocking direct compensation for hyperscaler account managers.",
      "Maximizing co-sell marketing development funds (MDF) allocations.",
    ],
  },
];

// ── 5. EVENTS & SUMMITS (Exact from live site) ─────────────────────────────────
export const EVENTS: EventItem[] = [
  {
    id: "vegas-dinner",
    title: "SaaSNova Networking Dinner",
    date: "Tuesday, December 1 | 7–9 PM",
    location: "Las Vegas, NV",
    venue: "RPM Italian | The Forum Shops at Caesars Palace, Las Vegas",
    description:
      "An intimate evening of dinner, drinks, and high-impact networking with leaders from across SaaS, cloud, and the AWS ecosystem. Hosted by SaaSNova. Space is strictly limited.",
    tag: "Las Vegas · Invitation Only",
    isUpcoming: true,
    image: "/images/rpm-italian-las-vegas.jpg",
    rsvpUrl: "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03",
    ctaText: "Request Your Spot",
  },
  {
    id: "rsac-2026",
    title: "RSA Conference 2026",
    date: "March 2026",
    location: "San Francisco, CA",
    venue: "Moscone Center",
    description:
      "Jen Dawson meeting ISV security leaders and cloud field teams connecting on the co-sell motions that generate real deal flow in the enterprise security category.",
    tag: "San Francisco · Recent",
    isUpcoming: false,
    image: "/images/rsac-ss.jpeg",
    externalLink: "https://saasify.ai/accelerate-your-cloud-gtm-with-saasnova-saasify/",
    ctaText: "See the SaaSNova × SaaSify Story →",
  },
  {
    id: "gtm-school",
    title: "GTM School of Thoughts Keynote",
    date: "February 2026",
    location: "Virtual & In-Person",
    venue: "Executive Forum",
    description:
      "Jen Dawson keynotes on cloud co-sell execution, field team dynamics, and the operational gaps that determine whether co-sell submissions get answered.",
    tag: "Keynote Session · Recent",
    isUpcoming: false,
    externalLink: "/resources?view=show",
    ctaText: "Watch Walkthrough",
  },
];

// ── 6. NEWS & PRESS RELEASES (Exact from live site) ───────────────────────────
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "pr-aws-storefront",
    title: "SaaSNova Selected as Launch Partner for AWS Marketplace Storefront",
    category: "Press Release · AWS",
    date: "June 16, 2026",
    location: "New York, NY",
    summary:
      "SaaSNova announced its selection as a launch partner for the new AWS Marketplace Storefront to help AWS ISVs expand their cloud revenue and streamline buyer discovery.",
    image: "/images/SaaSNova x Feenix Logo.png",
    url: "/solutions/storefront",
    isExternal: false,
  },
  {
    id: "pr-saasify-bundle",
    title: "SaaSify and SaaSNova Launch the First AWS Partner Starter Bundle to Help ISVs Go Marketplace & Co-Sell Ready in Weeks",
    category: "Partnership · Joint Bundle",
    date: "May 10, 2026",
    location: "New York, NY",
    summary:
      "The joint offering delivers GTM execution, Partner Central readiness, and Marketplace activation in parallel—structured, sequenced, and market-ready in weeks.",
    image: "/images/SaaSNova-SaaSify-Starter-bundle-logo.png",
    url: "https://www.einpresswire.com/article/908400568/saasify-and-saasnova-launch-the-first-aws-partner-starter-bundle-to-help-isvs-go-marketplace-co-sell-ready-in-weeks",
    isExternal: true,
  },
];

// ── 7. THE NOVA BRIEF PILLARS (Exact from live site) ──────────────────────────
export const NEWSLETTER_PILLARS = [
  {
    title: "Co-Sell Strategy",
    description: "Submission tactics that work on AWS, Azure, and GCP field teams, this week.",
    accent: "text-[#008BF8] bg-sky-50 border-sky-100",
  },
  {
    title: "Show Takeaways",
    description: "Key insights from every new Jen GTM Show episode, curated for ISV leaders.",
    accent: "text-[#FA0F9C] bg-pink-50 border-pink-100",
  },
  {
    title: "Cloud GTM Intel",
    description: "Partner program changes and field motion intelligence across all three clouds.",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];
