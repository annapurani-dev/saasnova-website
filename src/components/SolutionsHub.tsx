"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  Briefcase,
  Settings,
  TrendingUp,
  Target,
  Zap,
  ArrowRight,
  ArrowDown,
  Check,
  ChevronRight,
} from "lucide-react";

type CategoryId = "programs" | "services" | "ops";

interface ChallengeOption {
  id: string;
  problemPrompt: string;
  resolutionText: string;
  solutionName: string;
  solutionDescription: string;
  pillars: {
    icon: typeof TrendingUp;
    label: string;
    detail: string;
  }[];
  ctaText: string;
  href: string;
}

interface FocusCategory {
  id: CategoryId;
  title: string;
  problemPrompt: string;
  calloutText: string;
  icon: typeof Rocket;
  themeColor: string;
  themeBg: string;
  themeBorder: string;
  activeCardBg: string;
  activeCardBorder: string;
  pillBg: string;
  pillText: string;
  btnBg: string;
  btnHover: string;
  challenges: ChallengeOption[];
}

const CATEGORIES: FocusCategory[] = [
  // ════════════════════════════════════════════════════════════════════════
  // 1. PROGRAMS (PINK THEME #FA0F9C)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "programs",
    title: "Programs",
    problemPrompt: "Struggling to scale your GTM growth?",
    calloutText: "For this — check our Programs",
    icon: Rocket,
    themeColor: "#FA0F9C",
    themeBg: "bg-pink-50/60",
    themeBorder: "border-pink-300",
    activeCardBg: "bg-pink-50/40",
    activeCardBorder: "border-[#FA0F9C]",
    pillBg: "bg-pink-100 text-[#FA0F9C]",
    pillText: "text-[#FA0F9C]",
    btnBg: "bg-[#FA0F9C]",
    btnHover: "hover:bg-[#D80D85]",
    challenges: [
      {
        id: "ignite",
        problemPrompt:
          "Need a live transacting listing in 30 days without dev drag?",
        resolutionText: "Resolved by: Ignite Marketplace Activation",
        solutionName: "Ignite Marketplace Activation Program",
        solutionDescription:
          "A turnkey 30-day program to launch your cloud marketplace listing with zero developer drag, pre-configured CPPO pricing rails, and 100% co-sell compliance.",
        pillars: [
          {
            icon: TrendingUp,
            label: "Accelerate revenue growth",
            detail: "Live transacting listing in 30 days flat",
          },
          {
            icon: Target,
            label: "Enter new buyer markets",
            detail: "Pre-configured CPPO private offer rails",
          },
          {
            icon: Zap,
            label: "Zero developer homework",
            detail: "Full portal verification & compliance handled",
          },
        ],
        ctaText: "Explore Ignite Program",
        href: "/solutions/growth-programs#ignite",
      },
      {
        id: "supernova",
        problemPrompt:
          "Live on cloud, but need active pipeline, reps & $300K+ in MDF grants?",
        resolutionText: "Resolved by: SuperNova Co-Sell Flagship",
        solutionName: "SuperNova Co-Sell Flagship Program",
        solutionDescription:
          "We embed directly inside your GTM team as fractional operators to register ACE deals with regional cloud reps and capture up to $300K+ in hyperscaler MDF grants.",
        pillars: [
          {
            icon: TrendingUp,
            label: "Weekly ACE deal flow",
            detail: "Direct deal registrations with cloud reps",
          },
          {
            icon: Target,
            label: "Unlock $300K+ in MDF",
            detail: "Hyperscaler-funded cash marketing grants",
          },
          {
            icon: Zap,
            label: "Field battlecard kit",
            detail: "Customer-ready decks cloud sellers pitch",
          },
        ],
        ctaText: "Explore SuperNova Flagship",
        href: "/solutions/growth-programs#supernova",
      },
      {
        id: "novax",
        problemPrompt:
          "Scaling on one cloud, need multi-cloud parity across AWS, Azure, GCP?",
        resolutionText: "Resolved by: NovaX Multi-Cloud Global Scale",
        solutionName: "NovaX Multi-Cloud Global Scale Program",
        solutionDescription:
          "Scale enterprise deals simultaneously across AWS, Microsoft Azure, and GCP while tapping into enterprise EDP and MACC commit drawdown budgets.",
        pillars: [
          {
            icon: TrendingUp,
            label: "Unified 3-cloud engine",
            detail: "Simultaneous field motions across all 3 clouds",
          },
          {
            icon: Target,
            label: "Commit drawdowns (EDP)",
            detail: "Tap into enterprise EDP & MACC budgets",
          },
          {
            icon: Zap,
            label: "Top-tier GSI alliances",
            detail: "Joint pipeline with System Integrators",
          },
        ],
        ctaText: "Explore NovaX Multi-Cloud",
        href: "/solutions/growth-programs#novax",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 2. SERVICES (BLUE THEME #008BF8)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "services",
    title: "Services",
    problemPrompt: "Missing the expertise to execute?",
    calloutText: "For this — check our Services",
    icon: Briefcase,
    themeColor: "#008BF8",
    themeBg: "bg-sky-50/60",
    themeBorder: "border-sky-300",
    activeCardBg: "bg-sky-50/40",
    activeCardBorder: "border-[#008BF8]",
    pillBg: "bg-sky-100 text-[#008BF8]",
    pillText: "text-[#008BF8]",
    btnBg: "bg-[#008BF8]",
    btnHover: "hover:bg-[#0070D4]",
    challenges: [
      {
        id: "pdmaas",
        problemPrompt:
          "Our internal AEs don't know how to navigate cloud reps or ACE portals?",
        resolutionText: "Resolved by: Partner Development Manager (PDM)",
        solutionName: "Partner Development Manager as a Service (PDM)",
        solutionDescription:
          "Embed an ex-hyperscaler partner development manager directly into your team to qualify opportunities, navigate cloud reps, and accelerate co-sell velocity.",
        pillars: [
          {
            icon: TrendingUp,
            label: "3x Co-sell deal velocity",
            detail: "Lead qualification & weekly pipeline syncs",
          },
          {
            icon: Target,
            label: "Direct cloud rep alignment",
            detail: "Active syncs with regional account sellers",
          },
          {
            icon: Zap,
            label: "Zero AE admin drag",
            detail: "We handle ACE admin so your AEs just sell",
          },
        ],
        ctaText: "Explore PDM Service",
        href: "/solutions/fractional-talent#pdmaas",
      },
      {
        id: "pmmaas",
        problemPrompt:
          "Cloud sales reps don't pitch us because we lack joint narrative battlecards?",
        resolutionText: "Resolved by: Partner Marketing Manager (PMM)",
        solutionName: "Partner Marketing Manager as a Service (PMM)",
        solutionDescription:
          "Hyperscaler reps ignore generic decks. We craft cloud-native narrative battlecards and win approved cash marketing grants that drive inbound pipeline.",
        pillars: [
          {
            icon: TrendingUp,
            label: "Seller battlecards",
            detail: "High-impact 1-pagers with trigger criteria",
          },
          {
            icon: Target,
            label: "Funded cash MDF grants",
            detail: "Approved hyperscaler grant awards won",
          },
          {
            icon: Zap,
            label: "Joint event packages",
            detail: "Cloud-sponsored co-marketing campaigns",
          },
        ],
        ctaText: "Explore PMM Service",
        href: "/solutions/fractional-talent#pmmaas",
      },
      {
        id: "palaas",
        problemPrompt:
          "Need executive boardroom leadership for cloud QBRs & strategic GSI alliances?",
        resolutionText: "Resolved by: Partner Alliance Leader (PAL)",
        solutionName: "Partner Alliance Leader as a Service (PAL)",
        solutionDescription:
          "Senior executive boardroom leadership to author and lead cloud QBRs, negotiate Premier partner tier upgrades, and formalize strategic GSI alliances.",
        pillars: [
          {
            icon: TrendingUp,
            label: "Premier tier progression",
            detail: "Roadmap to top differentiated partner status",
          },
          {
            icon: Target,
            label: "Executive cloud QBRs",
            detail: "Author & lead reviews with cloud GMs",
          },
          {
            icon: Zap,
            label: "GSI practice alignment",
            detail: "Build joint pipeline with top consultancies",
          },
        ],
        ctaText: "Explore PAL Service",
        href: "/solutions/fractional-talent#palaas",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 3. GTM & OPS (EMERALD GREEN THEME #10B981)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "ops",
    title: "GTM & Ops",
    problemPrompt: "Need better GTM infrastructure?",
    calloutText: "For this — check our GTM & Ops",
    icon: Settings,
    themeColor: "#10B981",
    themeBg: "bg-emerald-50/60",
    themeBorder: "border-emerald-300",
    activeCardBg: "bg-emerald-50/40",
    activeCardBorder: "border-[#10B981]",
    pillBg: "bg-emerald-100 text-emerald-800",
    pillText: "text-emerald-700",
    btnBg: "bg-[#10B981]",
    btnHover: "hover:bg-[#059669]",
    challenges: [
      {
        id: "prmaas",
        problemPrompt:
          "Losing revenue attribution & lack automated IaC/Terraform tagging?",
        resolutionText: "Resolved by: Partner Revenue Measurement (PRM · Free)",
        solutionName: "Partner Revenue Measurement (PRM · Free)",
        solutionDescription:
          "Prevent deal leakage permanently with architecture-aware tagging, native Terraform modules, and automated CRM-to-Cloud deal attribution.",
        pillars: [
          {
            icon: TrendingUp,
            label: "100% Attribution",
            detail: "Zero deal leakage across all partner channels",
          },
          {
            icon: Target,
            label: "Turnkey IaC code",
            detail: "Native Terraform, CDK & CloudFormation",
          },
          {
            icon: Zap,
            label: "100% Free engagement",
            detail: "Complimentary setup to ensure compliance",
          },
        ],
        ctaText: "Explore PRM Infrastructure",
        href: "/solutions/systems-ops#prmaas",
      },
      {
        id: "pcmaas",
        problemPrompt:
          "AWS Partner Central unified console transition is breaking our IAM/SSO?",
        resolutionText: "Resolved by: Partner Central Migration (PCM · Free)",
        solutionName: "Partner Central Migration as a Service (PCM)",
        solutionDescription:
          "Zero-disruption AWS Partner Central cutover with full IAM, SSO, and Entra ID permission mapping, eliminating duplicate registration risks.",
        pillars: [
          {
            icon: TrendingUp,
            label: "Zero downtime for reps",
            detail: "Seamless console cutover for all sales reps",
          },
          {
            icon: Target,
            label: "Permission parity",
            detail: "Marketplace & Partner console alignment",
          },
          {
            icon: Zap,
            label: "100% Free runbooks",
            detail: "Turnkey IAM & Entra ID configuration",
          },
        ],
        ctaText: "Explore PCM Migration",
        href: "/solutions/systems-ops#pcmaas",
      },
    ],
  },
];

/* ── REUSABLE TOP-RIGHT WATERMARK (UNIFORM -26deg TILT ACROSS ALL 3 CATEGORIES) ── */
function CategoryWatermark({
  categoryId,
  themeColor,
}: {
  categoryId: string;
  themeColor: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -top-2 sm:top-1 lg:top-2 -right-3 sm:right-2 lg:right-4 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 z-0 opacity-15 sm:opacity-20 transition-all duration-300"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`bgGlow-${categoryId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={themeColor} stopOpacity="0.14" />
          <stop offset="100%" stopColor={themeColor} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`fuselage-${categoryId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fdf2f8" />
          <stop offset="100%" stopColor={`${themeColor}33`} />
        </linearGradient>
        <linearGradient id={`flame-${categoryId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor={themeColor} />
        </linearGradient>
      </defs>

      {/* Soft Ambient Radial Backdrop */}
      <circle cx="120" cy="120" r="95" fill={`url(#bgGlow-${categoryId})`} />

      {/* ── UNIFORM ORBITAL RING (Tilted at -26deg in all 3 motifs) ── */}
      <ellipse
        cx="120"
        cy="120"
        rx="98"
        ry="38"
        transform="rotate(-26 120 120)"
        stroke={themeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="98"
        ry="38"
        transform="rotate(-26 120 120)"
        stroke="white"
        strokeWidth="1.2"
        strokeDasharray="16 90"
        fill="none"
      />

      {/* ── MOTIF 1: PROGRAMS (Rocket + Ascending Bars + Stars) ── */}
      {categoryId === "programs" && (
        <>
          {/* 4 Ascending Pill Bars (Aligned with diagonal baseline) */}
          <rect x="26" y="146" width="20" height="46" rx="10" fill={themeColor} fillOpacity="0.5" />
          <rect x="29" y="150" width="5" height="38" rx="2.5" fill="white" fillOpacity="0.45" />

          <rect x="52" y="122" width="20" height="70" rx="10" fill={themeColor} fillOpacity="0.65" />
          <rect x="55" y="126" width="5" height="62" rx="2.5" fill="white" fillOpacity="0.45" />

          <rect x="78" y="94" width="20" height="98" rx="10" fill={themeColor} fillOpacity="0.8" />
          <rect x="81" y="98" width="5" height="90" rx="2.5" fill="white" fillOpacity="0.45" />

          <rect x="104" y="62" width="20" height="130" rx="10" fill={themeColor} fillOpacity="0.95" />
          <rect x="107" y="66" width="5" height="122" rx="2.5" fill="white" fillOpacity="0.5" />

          {/* Rocket Flame / Exhaust Thrust */}
          <g transform="translate(132, 92) rotate(42)">
            <path d="M0 48 Q-12 72 0 88 Q12 72 0 48 Z" fill={`url(#flame-${categoryId})`} />
            <path d="M0 48 Q-6 66 0 76 Q6 66 0 48 Z" fill="#fef08a" />
          </g>

          {/* 3D Rocket (Angled 42deg to Top-Right) */}
          <g transform="translate(132, 92) rotate(42)">
            <path d="M-15 28 C-25 36 -28 50 -26 55 L-12 48 Z" fill={themeColor} fillOpacity="0.9" />
            <path d="M15 28 C25 36 28 50 26 55 L12 48 Z" fill={themeColor} fillOpacity="0.9" />
            <path
              d="M0 -42 C22 -15 22 36 12 48 L-12 48 C-22 36 -22 -15 0 -42 Z"
              fill={`url(#fuselage-${categoryId})`}
              stroke={themeColor}
              strokeWidth="2"
            />
            <path d="M0 -42 C12 -28 17 -16 17 -8 L-17 -8 C-17 -16 -12 -28 0 -42 Z" fill={themeColor} />
            <rect x="-10" y="46" width="20" height="5" rx="2" fill="#334155" />
            <circle cx="0" cy="12" r="9" fill={themeColor} />
            <circle cx="0" cy="12" r="7" fill="#e0f2fe" />
            <circle cx="0" cy="12" r="4.5" fill="#38bdf8" />
            <circle cx="-2" cy="10" r="1.8" fill="white" />
          </g>

          {/* Sparkles */}
          <path d="M205 32 Q210 32 210 27 Q210 32 215 32 Q210 32 210 37 Q210 32 205 32 Z" fill={themeColor} />
          <path d="M22 68 Q27 68 27 63 Q27 68 32 68 Q27 68 27 73 Q27 68 22 68 Z" fill={themeColor} />
          <circle cx="218" cy="98" r="3" fill={themeColor} />
        </>
      )}

      {/* ── MOTIF 2: SERVICES (4-Piece Interlocking Puzzle in Diamond Tilt + Orbit + 3 Badges) ── */}
      {categoryId === "services" && (
        <>
          {/* 4 Interlocking Puzzle Pieces (Tilted at -26deg in unison with the ring) */}
          <g transform="translate(120, 118) rotate(-26) scale(1.05)">
            {/* Top-Left Piece */}
            <path
              d="M-40 -40 L-10 -40 C-10 -34 -4 -34 -4 -40 L0 -40 L0 -15 C6 -15 6 -9 0 -9 L0 0 L-22 0 C-22 -6 -28 -6 -28 0 L-40 0 Z"
              fill={themeColor}
              fillOpacity="0.55"
              stroke="white"
              strokeWidth="2"
            />
            {/* Top-Right Piece */}
            <path
              d="M0 -40 L24 -40 C24 -34 30 -34 30 -40 L40 -40 L40 -15 C34 -15 34 -9 40 -9 L40 0 L15 0 C15 -6 9 -6 9 0 L0 0 Z"
              fill={themeColor}
              fillOpacity="0.8"
              stroke="white"
              strokeWidth="2"
            />
            {/* Bottom-Left Piece */}
            <path
              d="M-40 0 L-22 0 C-22 -6 -28 -6 -28 0 L0 0 L0 25 C6 25 6 31 0 31 L0 40 L-25 40 C-25 34 -31 34 -31 40 L-40 40 Z"
              fill={themeColor}
              fillOpacity="0.7"
              stroke="white"
              strokeWidth="2"
            />
            {/* Bottom-Right Piece */}
            <path
              d="M0 0 L9 0 C9 -6 15 -6 15 0 L40 0 L40 22 C34 22 34 28 40 28 L40 40 L18 40 C18 34 12 34 12 40 L0 40 Z"
              fill={themeColor}
              fillOpacity="0.95"
              stroke="white"
              strokeWidth="2"
            />
            {/* 3D Extruded Depth Shadow Bottom Lip */}
            <path d="M-40 40 L0 40 L40 40 L40 46 L0 46 L-40 46 Z" fill="#0f172a" fillOpacity="0.25" />
          </g>

          {/* 3 Floating Satellite Badges along the -26deg orbit */}
          {/* Top-Right Badge: ⚙️ Gear */}
          <g transform="translate(178, 68)">
            <circle cx="0" cy="0" r="14" fill="white" stroke={themeColor} strokeWidth="2" />
            <circle cx="0" cy="0" r="4.5" fill={themeColor} />
            <path d="M-2 -7 L2 -7 L2 -4.5 L-2 -4.5 Z M-2 4.5 L2 4.5 L2 7 L-2 7 Z M-7 -2 L-7 2 L-4.5 2 L-4.5 -2 Z M4.5 -2 L4.5 2 L7 2 L7 -2 Z" fill={themeColor} />
          </g>

          {/* Lower-Left Badge: </> Code */}
          <g transform="translate(42, 142)">
            <circle cx="0" cy="0" r="14" fill="white" stroke={themeColor} strokeWidth="2" />
            <path d="M-4 -3.5 L-8 0 L-4 3.5 M4 -3.5 L8 0 L4 3.5 M1 -4.5 L-1 4.5" stroke={themeColor} strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Far-Right Badge: 👥 Users */}
          <g transform="translate(208, 120)">
            <circle cx="0" cy="0" r="14" fill="white" stroke={themeColor} strokeWidth="2" />
            <circle cx="-3" cy="-3" r="3" fill={themeColor} />
            <path d="M-7 6 C-7 2.5 -1 2.5 -1 6" stroke={themeColor} strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <circle cx="4" cy="-2" r="2.6" fill={themeColor} fillOpacity="0.75" />
            <path d="M1 6 C1 3.5 6 3.5 6 6" stroke={themeColor} strokeWidth="1.4" strokeOpacity="0.75" fill="none" strokeLinecap="round" />
          </g>
        </>
      )}

      {/* ── MOTIF 3: GTM & OPS (3D Gear Cog + Chart + Arrow + Orbit + 3 Badges) ── */}
      {categoryId === "ops" && (
        <>
          {/* Central 3D Gear Cog (Tilted at -26deg in unison with the ring) */}
          <g transform="translate(120, 120) rotate(-26)">
            {/* Outer 10 Beveled Gear Teeth */}
            {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
              <rect
                key={deg}
                x="-7.5"
                y="-47"
                width="15"
                height="11"
                rx="3"
                fill={themeColor}
                transform={`rotate(${deg})`}
              />
            ))}

            {/* Main Gear Disc Ring */}
            <circle cx="0" cy="0" r="41" fill={themeColor} />
            <circle cx="0" cy="0" r="38" fill={themeColor} stroke="white" strokeWidth="1.5" />

            {/* Center Circular Disc Cavity */}
            <circle cx="0" cy="0" r="26" fill="#0f172a" fillOpacity="0.88" />

            {/* Ascending Chart Bars inside Gear Cavity */}
            <rect x="-15" y="2" width="5" height="11" rx="1.5" fill="white" />
            <rect x="-8" y="-4" width="5" height="17" rx="1.5" fill="white" />
            <rect x="-1" y="-10" width="5" height="23" rx="1.5" fill="white" />

            {/* Ascending Growth Arrow Cutting Diagonally */}
            <path d="M-14 3 L-6 -3 L2 -8 L13 -15" stroke="#4ade80" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M8 -15 L13 -15 L13 -10" stroke="#4ade80" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* 3 Floating Satellite Badges along the -26deg orbit */}
          {/* Top-Right Badge: ☁️ Cloud */}
          <g transform="translate(178, 68)">
            <circle cx="0" cy="0" r="14" fill="white" stroke={themeColor} strokeWidth="2" />
            <path
              d="M-5 2 C-6 2 -7 1 -7 0 C-7 -1.2 -5.5 -2.2 -4 -1.8 C-3.5 -4 -1.5 -4.8 0 -4.5 C1.2 -5.2 3.8 -4.5 4.2 -2.8 C5.5 -2.8 7 -1.5 7 0 C7 1.2 5.5 2 4.2 2 Z"
              fill={themeColor}
            />
            <path d="M0 1 L0 -2.5 M-1.8 -0.8 L0 -2.5 L1.8 -0.8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Far-Right / Lower-Right Badge: ✓ Checkmark */}
          <g transform="translate(208, 120)">
            <circle cx="0" cy="0" r="14" fill="white" stroke={themeColor} strokeWidth="2" />
            <circle cx="0" cy="0" r="10" fill={themeColor} fillOpacity="0.2" />
            <path d="M-4 0 L-1 3 L5 -3" stroke={themeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Top-Left / Lower-Left Badge: 🔄 Network Nodes */}
          <g transform="translate(42, 142)">
            <circle cx="0" cy="0" r="14" fill="white" stroke={themeColor} strokeWidth="2" />
            <circle cx="-3" cy="-3" r="2.2" fill={themeColor} />
            <circle cx="3.5" cy="-2" r="2.2" fill={themeColor} />
            <circle cx="0" cy="3.5" r="2.2" fill={themeColor} />
            <line x1="-3" y1="-3" x2="3.5" y2="-2" stroke={themeColor} strokeWidth="1.3" />
            <line x1="-3" y1="-3" x2="0" y2="3.5" stroke={themeColor} strokeWidth="1.3" />
            <line x1="3.5" y1="-2" x2="0" y2="3.5" stroke={themeColor} strokeWidth="1.3" />
          </g>
        </>
      )}
    </svg>
  );
}

export default function SolutionsHub() {
  // Step 1: Category chosen (null = initial closed state)
  const [selectedCatId, setSelectedCatId] = useState<CategoryId | null>(null);

  // Step 2: Specific challenge chosen (null = Ghost section on right until clicked)
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(null);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCatId);

  const activeChallenge =
    activeCategory?.challenges.find((ch) => ch.id === selectedChallengeId) || null;

  // When top card is clicked: toggle open/closed (reclicking closes)
  const handleSelectCategory = (catId: CategoryId) => {
    if (selectedCatId === catId) {
      setSelectedCatId(null);
      setSelectedChallengeId(null);
    } else {
      setSelectedCatId(catId);
      setSelectedChallengeId(null); // Keep right side in ghost state until challenge selected
    }
  };

  return (
    <div className="relative mx-auto max-w-7xl">
      {/* ─── 1. SECTION HEADER ─── */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.14]">
          What&apos;s holding your GTM growth back?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Click your challenge below to reveal your tailored operational roadmap.
        </p>
      </div>

      {/* ─── 2. STAGE 1: 3 CATEGORY FOCUS CARDS (3D DEPTH · NO JITTER/MOVEMENT) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCatId === cat.id;
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.id)}
              className={`group relative text-left p-5 sm:p-6 rounded-2xl cursor-pointer flex items-center justify-between gap-4 border-2 transition-colors duration-200 shadow-[0_4px_0_#cbd5e1,0_10px_24px_rgba(15,23,42,0.06)] active:translate-y-0.5 active:shadow-[0_2px_0_#cbd5e1,0_6px_14px_rgba(15,23,42,0.06)] ${isActive
                ? `bg-white ${cat.activeCardBorder}`
                : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
            >
              {/* Active Connector Notch pointing down to the revealed section */}
              {isActive && (
                <div
                  aria-hidden="true"
                  style={{ borderTopColor: cat.themeColor }}
                  className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[10px] z-20"
                />
              )}

              <div className="flex items-center gap-4 min-w-0">
                {/* Large Category Icon with 3D Keycap Depth */}
                <span
                  style={{
                    color: cat.themeColor,
                    background: `${cat.themeColor}12`,
                    borderColor: `${cat.themeColor}30`,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-2xs"
                >
                  <Icon className="w-8 h-8 stroke-[1.8]" />
                </span>

                <div className="space-y-1 min-w-0">
                  {/* Problem Faced in Bold */}
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug">
                    {cat.problemPrompt}
                  </h3>

                  {/* For this — check our [Programs/Services/GTM & Ops] */}
                  <p
                    style={{ color: cat.themeColor }}
                    className="text-xs sm:text-[13px] font-bold leading-tight"
                  >
                    {cat.calloutText}
                  </p>
                </div>
              </div>

              {/* Downward Action Arrow Button with Radar Ripple Pulse & Halo Glow */}
              <div className="relative flex items-center justify-center shrink-0">
                {!isActive && (
                  <>
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: cat.themeColor }}
                      className="absolute inset-0 rounded-full animate-ping opacity-35 pointer-events-none"
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        boxShadow: `0 0 14px 2px ${cat.themeColor}`,
                      }}
                      className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
                    />
                  </>
                )}

                <div
                  style={{
                    background: isActive ? "#F1F5F9" : cat.themeColor,
                    color: isActive ? "#64748B" : "#FFFFFF",
                    boxShadow: isActive
                      ? "0 2px 0 #e2e8f0"
                      : `0 2px 0 rgba(0,0,0,0.18), 0 4px 12px ${cat.themeColor}60`,
                  }}
                  className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
                >
                  <ArrowDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── 3. LOWER SECTION: REVEALED ONLY AFTER CATEGORY SELECTION ─── */}
      {selectedCatId !== null && activeCategory && (
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

          {/* Floating Indicator Arrow between Left & Right Column on desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[41.666%] top-32 -translate-x-1/2 z-20 hidden lg:flex h-9 w-9 items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)] text-slate-400"
          >
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </div>

          {/* ══════════════════════════════════════════════════════════════
              LEFT PANEL (lg:col-span-5 · "Your challenge"): ROCK SOLID · ZERO JITTER
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-[0_4px_0_#cbd5e1,0_12px_28px_rgba(15,23,42,0.06)] min-h-[460px] lg:h-[510px] flex flex-col justify-start">
            {/* Header: Title in Clean Solid Slate */}
            <div className="mb-4 shrink-0 flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-black tracking-tight text-slate-900">
                Your challenge
              </h3>
              <span
                style={{
                  color: activeCategory.themeColor,
                  background: `${activeCategory.themeColor}12`,
                  borderColor: `${activeCategory.themeColor}25`,
                }}
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border tracking-wide uppercase"
              >
                {activeCategory.title}
              </span>
            </div>

            {/* Radio / Selection Option Cards (Calm Neutral Unselected · Only Active Card Pops) */}
            <div className="space-y-3">
              {activeCategory.challenges.map((ch) => {
                const isSelected = selectedChallengeId === ch.id;

                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setSelectedChallengeId(ch.id)}
                    style={{
                      boxShadow: isSelected
                        ? `0 2px 0 ${activeCategory.themeColor}`
                        : "0 2px 0 #e2e8f0",
                    }}
                    className={`w-full text-left p-4 rounded-2xl cursor-pointer flex items-center justify-between gap-3 border-2 transition-colors duration-150 min-h-[92px] ${isSelected
                      ? `${activeCategory.activeCardBg} ${activeCategory.activeCardBorder}`
                      : "bg-white border-slate-200/80 hover:border-slate-300"
                      }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      {/* Radio Indicator */}
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${isSelected
                          ? "border-transparent bg-white"
                          : "border-slate-300 bg-white"
                          }`}
                        style={{
                          borderColor: isSelected ? activeCategory.themeColor : undefined,
                        }}
                      >
                        {isSelected && (
                          <span
                            style={{ background: activeCategory.themeColor }}
                            className="h-2 w-2 rounded-full"
                          />
                        )}
                      </span>

                      <div className="space-y-1.5 min-w-0 flex-1">
                        {/* Problem Faced in Bold */}
                        <h4
                          className={`text-[14.5px] sm:text-[15.5px] font-bold leading-snug line-clamp-2 transition-colors ${isSelected ? "text-slate-900" : "text-slate-800"
                            }`}
                        >
                          {ch.problemPrompt}
                        </h4>

                        {/* Resolution Callout: Only colored on ACTIVE card; Muted neutral on unselected */}
                        <div>
                          <span
                            style={
                              isSelected
                                ? {
                                  color: activeCategory.themeColor,
                                  backgroundColor: `${activeCategory.themeColor}14`,
                                  borderColor: `${activeCategory.themeColor}30`,
                                }
                                : undefined
                            }
                            className={`inline-block text-[12px] sm:text-[12.5px] font-semibold px-2 py-0.5 rounded-md border transition-colors truncate max-w-full ${isSelected
                              ? ""
                              : "text-slate-500 bg-slate-100/80 border-slate-200/60"
                              }`}
                          >
                            {ch.resolutionText}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Permanent Fixed-Width Slot for Checkmark Badge */}
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <span
                        style={{ background: activeCategory.themeColor }}
                        className={`flex h-5 w-5 items-center justify-center rounded-full text-white shadow-xs transition-opacity duration-150 ${isSelected ? "opacity-100" : "opacity-0"
                          }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT PANEL (lg:col-span-7): GHOST SECTION OR REVEALED SOLUTION
             ══════════════════════════════════════════════════════════════ */}
          {selectedChallengeId === null || !activeChallenge ? (
            /* ── GHOST SECTION: SIMPLE, CLEAN, INVITING WITH WATERMARK ── */
            <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 border-2 border-dashed border-slate-200/90 bg-gradient-to-br from-white via-slate-50/40 to-slate-50/80 shadow-[0_4px_0_#cbd5e1,0_12px_28px_rgba(15,23,42,0.05)] flex flex-col items-center justify-center text-center space-y-4 min-h-[460px] lg:h-[510px] relative overflow-hidden">
              {/* Top-Right Category Watermark (Even in Ghost Placeholder) */}
              <CategoryWatermark
                categoryId={activeCategory.id}
                themeColor={activeCategory.themeColor}
              />

              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
                <div
                  style={{
                    background: `${activeCategory.themeColor}12`,
                    color: activeCategory.themeColor,
                    borderColor: `${activeCategory.themeColor}28`,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-2xs"
                >
                  <activeCategory.icon className="w-7 h-7 stroke-[1.8]" />
                </div>

                <div className="space-y-1.5 max-w-sm">
                  <h4 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight">
                    Select a challenge to view roadmap
                  </h4>
                  <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed font-normal">
                    Choose your current growth bottleneck to reveal tailored {activeCategory.title.toLowerCase()} deliverables &amp; milestones.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ── REVEALED SOLUTION SPEC CARD ── */
            <div
              style={{
                borderColor: `${activeCategory.themeColor}35`,
              }}
              className="lg:col-span-7 rounded-3xl p-7 sm:p-8 lg:p-9 bg-gradient-to-br from-white via-white to-slate-50/60 border-2 shadow-[0_4px_0_#cbd5e1,0_16px_36px_rgba(15,23,42,0.07)] flex flex-col justify-between relative overflow-hidden min-h-[460px] lg:h-[510px]"
            >
              {/* Top-Right Category Watermark */}
              <CategoryWatermark
                categoryId={activeCategory.id}
                themeColor={activeCategory.themeColor}
              />

              {/* Content Container (Layered above watermark) */}
              <div className="space-y-4 sm:space-y-5 relative z-10 w-full">
                {/* Title & Description (Bigger, Clearer Typography, constrained width so watermark breathes in top-right) */}
                <div className="space-y-2.5 max-w-sm sm:max-w-md lg:max-w-[480px]">
                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                    {activeChallenge.solutionName}
                  </h3>
                  <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
                    {activeChallenge.solutionDescription}
                  </p>
                </div>

                {/* 3 Action Items & Deliverables (Clean 3-Column Layout from Reference Image) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-3 sm:pt-4 w-full">
                  {activeChallenge.pillars.map((p, idx) => {
                    const PillarIcon = p.icon;

                    return (
                      <div
                        key={idx}
                        className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-[0_2px_0_#e2e8f0] flex flex-col justify-between min-h-[96px] space-y-1.5"
                      >
                        <span
                          style={{
                            color: activeCategory.themeColor,
                            background: `${activeCategory.themeColor}12`,
                            borderColor: `${activeCategory.themeColor}25`,
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-xl border shadow-2xs"
                        >
                          <PillarIcon className="w-4 h-4 stroke-[2.2]" />
                        </span>
                        <div>
                          <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-slate-900 leading-snug">
                            {p.label}
                          </h4>
                          <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5">
                            {p.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Primary Action Button (Tactile 3D Depth) */}
              <div className="pt-6 relative z-10">
                <Link
                  href={activeChallenge.href}
                  style={{
                    background: activeCategory.themeColor,
                    boxShadow: `0 4px 0 rgba(0,0,0,0.18), 0 8px 20px -2px ${activeCategory.themeColor}40`,
                  }}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full font-bold text-sm sm:text-base text-white transition-all duration-150 active:translate-y-0.5 active:shadow-sm cursor-pointer"
                >
                  <span>{activeChallenge.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}