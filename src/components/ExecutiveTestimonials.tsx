"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

interface TestimonialItem {
  id?: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
}

interface BrandStory {
  id: string;
  company: string;
  shortName: string;
  logoSrc: string;
  testimonials: TestimonialItem[];
}

const VERIFIED_STORIES: BrandStory[] = [
  {
    id: "arcticwolf",
    company: "Arctic Wolf Networks",
    shortName: "Arctic Wolf",
    logoSrc: "/arcticwolf.png",
    testimonials: [
      {
        id: "megan-flanagan",
        name: "Megan Flanagan",
        role: "VP Marketing, Arctic Wolf Networks",
        initials: "MF",
        quote:
          "The structure of the pilot program exceeded all expectations. The data-driven full funnel planning model challenged us to think in ways we haven't thought of before.",
      },
      {
        id: "odin-olson",
        name: "Odin Olson",
        role: "VP Partnerships & Alliances, Arctic Wolf Networks",
        initials: "OO",
        quote:
          "It was great to hear what has been done well with an AWS best ISV. The co-sell scoring discussion was eye-opening to us.",
      },
    ],
  },
  {
    id: "aws",
    company: "Amazon Web Services (AWS)",
    shortName: "AWS",
    logoSrc: "/aws-logo.png",
    testimonials: [
      {
        name: "Gunjan Ramketa",
        role: "Partner Development Manager, AWS",
        initials: "GR",
        quote:
          "Jen’s GTM architecture elevated Dataminr’s entire AWS motion. The structure and discipline she brought created the kind of alignment and seller confidence we rarely see from ISVs.",
      },
      {
        name: "John McElhone",
        role: "Partner Development Manager, AWS",
        initials: "JM",
        quote:
          "Jen's GTM architecture fundamentally changed how Arctic Wolf engaged with AWS. The structure, clarity, and discipline she brought created a level of alignment we rarely see with security partners.",
      },
      {
        name: "Megha Malhotra",
        role: "AWS Technical Manager",
        initials: "MM",
        quote:
          "SaaSNova delivers the kind of GTM and partnership content the industry actually needs, practical, insightful, and grounded in real operator experience. Jen has built something truly differentiated for the cloud and SaaS ecosystem.",
      },
    ],
  },
  {
    id: "safe",
    company: "SAFE Security",
    shortName: "SAFE Security",
    logoSrc: "/safe.svg",
    testimonials: [
      {
        name: "Nicola Sanna",
        role: "President, SAFE Security",
        initials: "NS",
        quote:
          "SaaSNova was instrumental in accelerating SAFE’s AWS Marketplace strategy. They helped us compress months of internal effort into weeks, sharpen our enterprise positioning, and launch TPRM with a procurement-ready workflow.",
      },
      {
        name: "Michael Nagao",
        role: "SVP Worldwide Channel, SAFE Security",
        initials: "MN",
        quote:
          "SaaSNova helped us move through AWS programs, Marketplace requirements, and internal alignment in a fraction of the time it normally takes, compressing months of work into weeks.",
      },
      {
        name: "Jagdish Upadhyay",
        role: "VP of Marketing, SAFE Security",
        initials: "JU",
        quote:
          "The joint AWS partnership page is a critical proof point for SAFE, and Jen’s wireframe was thorough, thoughtfully structured, and partner-ready from day one.",
      },
      {
        name: "Gary Cronk",
        role: "Director, Strategic Partners, SAFE Security",
        initials: "GC",
        quote:
          "SaaSNova isn't a platform, they're the operator behind our AWS Marketplace success. They bring the GTM clarity, commercial alignment, and end-to-end ownership that no tool can provide.",
      },
    ],
  },
  {
    id: "saasify",
    company: "SaaSify",
    shortName: "SaaSify",
    logoSrc: "/images/saasify-logo.png",
    testimonials: [
      {
        name: "Manesh Raveendran",
        role: "CEO & Founder, SaaSify",
        initials: "MR",
        quote:
          "A listing creates visibility. Automation and GTM precision create momentum. SaaSNova brings the GTM activation layer to turn cloud visibility into real cloud momentum.",
      },
      {
        name: "Kevin Flitcroft",
        role: "Head of Sales, SaaSify",
        initials: "KF",
        quote:
          "Winning on AWS, Azure, and GCP takes more than just getting listed. The partners that are actually building pipeline are the ones who've figured out how to align their story with what sellers care about inside those clouds. That's the GTM layer most partners are missing, and exactly what SaaSNova helps unlock and why we are so excited about this partnership.",
      },
    ],
  },
  {
    id: "freshworks",
    company: "Freshworks",
    shortName: "Freshworks",
    logoSrc: "/freshworks-logo-png.png",
    testimonials: [
      {
        name: "Abhishek GP",
        role: "VP of Growth at Atlan (former Head of Growth at Freshworks)",
        initials: "AG",
        quote:
          "Jen is one of the most dynamic and driven leaders I’ve worked with Freshworks. She built the alignment and relationships needed to secure a three-year strategic collaboration with AWS and set the foundation for a scalable co-sell motion. She consistently turns challenges into opportunities.",
      },
    ],
  },
  {
    id: "penta",
    company: "Penta Security",
    shortName: "Penta Security",
    logoSrc: "/pentasecurity.svg",
    testimonials: [
      {
        name: "Jay Park",
        role: "E-Biz Group Lead, Penta Security",
        initials: "JP",
        quote:
          "The AWS AI Software Competency had been on our roadmap for months. SaaSNova owned the entire process and made it seamless, from technical assessment and architecture documentation to customer evidence and final approval. As our AWS go-to-market partner, they also helped us sharpen how we position Cloudbric’s AI capabilities within the AWS ecosystem. With the competency, Penta Security now has the AI Software Competency badge, up to $75K in MDF, and faster co-sell opportunities with AWS. SaaSNova didn’t just help us earn a competency. They positioned us to win on AWS.",
      },
    ],
  },
  {
    id: "simplesense",
    company: "Simplesense",
    shortName: "Simplesense",
    logoSrc: "/simplesense.svg",
    testimonials: [
      {
        name: "Eric Kanagy",
        role: "CEO, Simplesense",
        initials: "EK",
        quote:
          "For a small business with limited capacity, success with a large channel partner like AWS can be a challenge. SaaSNova has been a force multiplier in accelerating our AWS strategy, helping us launch more listings on AWS Marketplace, unlock over $40K in credits and funding, and bring clarity to how we engage AWS through their Ignite GTM program. Their guidance enabled us to move faster with clarity. I would recommend SaaSNova’s GTM services to any startup looking to accelerate their AWS strategy and implementation.",
      },
    ],
  },
  {
    id: "guarddog",
    company: "GuardDog.ai",
    shortName: "GuardDog.ai",
    logoSrc: "/guarddog.svg",
    testimonials: [
      {
        name: "Kelly Ryan",
        role: "Chief Commercial Officer, GuardDog",
        initials: "KR",
        quote:
          "SaaSNova helped us launch our first SaaS listing on AWS Marketplace in just one week, after nearly two years of trying to navigate the process on our own. Their expertise, clarity, and hands-on guidance made an otherwise complex transition to the new AWS Partner Central experience feel simple. SaaSNova didn’t just help us get listed; they helped us finally establish our presence on AWS and move our product to market with confidence.",
      },
    ],
  },
  {
    id: "pharmacoevidence",
    company: "Pharmacoevidence",
    shortName: "Pharmacoevidence",
    logoSrc: "/pharmocoevidence-logo.png",
    testimonials: [
      {
        name: "Rajdeep Kaur",
        role: "Associate Director & Lead, AI Sciences, Pharmacoevidence",
        initials: "RK",
        quote:
          "SaaSNova brought a level of clarity and execution we had never experienced before. Jen helped us navigate AWS Marketplace listings, modernize our architecture, and build a precise, end-to-end path toward the AWS GenAI Competency. What sets SaaSNova apart is the operator-led partnership, fast, structured, and relentlessly outcome-driven. They accelerated end-to-end cloud GTM and Marketplace execution that would have taken us months into just a few weeks, elevating Pharmacoevidence’s global credibility.",
      },
    ],
  },
  {
    id: "dataminr",
    company: "Dataminr",
    shortName: "Dataminr",
    logoSrc: "/images/dataminr-logo.png",
    testimonials: [
      {
        name: "Fraser Charles",
        role: "Senior Director, Partner Ecosystems, Dataminr",
        initials: "FC",
        quote:
          "The architecture gave Dataminr the credibility sellers and AWS senior leaders needed to lean in.",
      },
    ],
  },
  {
    id: "workspan",
    company: "WorkSpan",
    shortName: "WorkSpan",
    logoSrc: "/workspan.svg",
    testimonials: [
      {
        name: "Amit Sinha",
        role: "President, WorkSpan",
        initials: "AS",
        quote:
          "Jen is one of the most effective GTM operators I’ve worked with. Across Freshworks, Postman, and Workspan, she brought a level of clarity, structure, and execution discipline that consistently moved our AWS partner motions forward. She has a rare ability to turn complex, ambiguous GTM challenges into aligned, high-velocity execution. Her impact is immediate, repeatable, and deeply felt across every team she works with.",
      },
    ],
  },
  {
    id: "nexla",
    company: "Nexla",
    shortName: "Nexla",
    logoSrc: "/nexla.svg",
    testimonials: [
      {
        name: "Jayashree Rajan",
        role: "Chief Marketing Officer, Nexla",
        initials: "JR",
        quote:
          "SaaSNova didn't just clarify our AWS GTM motion, they exposed issues we didn't even know were blocking us. Their operator-level mastery of Marketplace, ACE, co-sell, and partner programs is unmatched.",
      },
    ],
  },
];

export default function ExecutiveTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subIndexMap, setSubIndexMap] = useState<Record<string, number>>({});
  const [isFading, setIsFading] = useState(false);
  const isHoveredRef = useRef(false);

  const total = VERIFIED_STORIES.length;

  // Switch to a company by index with a smooth crossfade
  const switchCompany = useCallback(
    (targetIndex: number, targetSubIndex = 0) => {
      if (targetIndex === activeIndex) return;
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex(targetIndex);
        setSubIndexMap((prev) => ({
          ...prev,
          [VERIFIED_STORIES[targetIndex].id]: targetSubIndex,
        }));
        setIsFading(false);
      }, 180);
    },
    [activeIndex]
  );

  // Switch to a specific quote of the current company
  const switchSubQuote = (subIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setSubIndexMap((prev) => ({
        ...prev,
        [VERIFIED_STORIES[activeIndex].id]: subIndex,
      }));
      setIsFading(false);
    }, 150);
  };

  // Next company in loop
  const goToNextCompany = useCallback(() => {
    const nextIdx = (activeIndex + 1) % total;
    switchCompany(nextIdx, 0);
  }, [activeIndex, total, switchCompany]);

  // Comfortable 8-second auto-rotation (pauses on hover)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        goToNextCompany();
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [goToNextCompany]);

  const activeStory = VERIFIED_STORIES[activeIndex];
  const activeSubIndex = subIndexMap[activeStory.id] || 0;
  const currentTestimonial =
    activeStory.testimonials[activeSubIndex] || activeStory.testimonials[0];

  // Helper to get 5 logos centered on activeIndex: [-2, -1, 0, 1, 2]
  const visibleSlots = [-2, -1, 0, 1, 2].map((offset) => {
    const storyIdx = (activeIndex + offset + total) % total;
    return {
      offset,
      storyIdx,
      story: VERIFIED_STORIES[storyIdx],
    };
  });

  return (
    <div
      className="relative max-w-7xl mx-auto w-full select-none"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      {/* ─── 1. SECTION HEADER (Centered & Clean, Zero Eyebrow Pill) ─── */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.12]">
          What Our Clients Say
        </h2>
        <p className="mt-2.5 text-base sm:text-lg text-slate-500 font-medium">
          Trusted by leading ISVs and enterprises worldwide.
        </p>
      </div>

      {/* ─── 2. REFERENCE STAGE: Orbital Left Track + Focused Right Testimonial ─── */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#E8F4FD] via-[#F0F7FE] to-[#DDF0FD] border-2 border-[#BAE6FD] shadow-[0_24px_70px_-15px_rgba(0,139,248,0.22),0_4px_20px_rgba(0,139,248,0.08)] p-6 sm:p-10 lg:p-12 overflow-hidden min-h-[520px] sm:min-h-[540px] lg:h-[560px] flex items-center">

        {/* Ambient Corner Glows mirroring reference image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#008BF8]/25 via-sky-400/20 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full bg-gradient-to-bl from-[#FA0F9C]/18 via-purple-300/12 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-[#008BF8]/15 blur-3xl"
        />

        {/* Prominent Brand Watermark in RIGHT BOTTOM CORNER (as requested) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-4 sm:right-8 lg:right-12 bottom-4 sm:bottom-6 lg:bottom-8 w-[200px] sm:w-[260px] lg:w-[320px] h-[110px] sm:h-[135px] lg:h-[160px] select-none z-0 flex items-end justify-end overflow-hidden transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-[0.10] lg:opacity-[0.14]"
          }`}
        >
          <Image
            src={activeStory.logoSrc}
            alt=""
            width={320}
            height={160}
            className="w-auto h-auto max-w-full max-h-full object-contain filter drop-shadow-sm"
          />
        </div>

        {/* ─── STAGE CONTENT (Left Orbital Track + Right Testimonial Statement) ─── */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN: CURVED ORBITAL LOGO TRACK (Click & Change-able)
              The currently viewing logo is CENTERED and HIGHLIGHTED!
              Fixed height prevents layout shifting/jittering.
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start justify-center relative py-2 h-[340px] sm:h-[360px] lg:h-[400px]">

            {/* Desktop Orbital Arc SVG Line in Accent Pink (#FA0F9C) */}
            <div className="hidden lg:block absolute -right-2 top-0 bottom-0 w-24 pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 420"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 20 C 65 140, 65 280, 10 400"
                  stroke="#FA0F9C"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.8"
                />
              </svg>
            </div>

            {/* Vertical Logo Slots (Centered on offset 0) */}
            <div className="w-full flex lg:flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible no-scrollbar py-2 px-1">
              {visibleSlots.map(({ offset, storyIdx, story }) => {
                const isCenter = offset === 0;

                // Position offset physics for orbital curve on desktop
                const arcIndentClass =
                  offset === 0
                    ? "lg:translate-x-3 z-30"
                    : Math.abs(offset) === 1
                    ? "lg:translate-x-0 z-20"
                    : "lg:-translate-x-2 z-10";

                return (
                  <button
                    key={`slot-${offset}-${story.id}`}
                    type="button"
                    onClick={() => switchCompany(storyIdx, 0)}
                    aria-label={`View testimonial from ${story.company}`}
                    aria-pressed={isCenter}
                    className={`group relative shrink-0 transition-all duration-300 ease-out cursor-pointer flex items-center ${arcIndentClass} ${
                      isCenter
                        ? "w-[200px] sm:w-[220px] lg:w-[240px] h-[64px] sm:h-[68px] rounded-2xl sm:rounded-full bg-white px-5 sm:px-6 border-2 border-[#008BF8] shadow-[0_12px_32px_rgba(0,139,248,0.22),0_2px_8px_rgba(15,23,42,0.04)] scale-100 sm:scale-105"
                        : "w-[150px] sm:w-[170px] lg:w-[190px] h-[48px] sm:h-[52px] rounded-xl sm:rounded-full bg-white/70 hover:bg-white px-4 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-xs opacity-60 hover:opacity-100 scale-95 hover:scale-100"
                    }`}
                  >
                    {/* Brand Logo Container */}
                    <div className="flex-1 flex items-center justify-center h-full">
                      <Image
                        src={story.logoSrc}
                        alt={story.company}
                        width={140}
                        height={36}
                        style={{ width: "auto", height: "auto" }}
                        className={`${
                          isCenter
                            ? "max-h-7 sm:max-h-8 max-w-[120px] sm:max-w-[140px]"
                            : "max-h-5 sm:max-h-5.5 max-w-[90px] sm:max-w-[110px] grayscale hover:grayscale-0 transition-all"
                        } w-auto object-contain`}
                      />
                    </div>

                    {/* Centered & Highlighted Blue Indicator Pip (Matching reference design) */}
                    {isCenter && (
                      <span className="shrink-0 w-2.5 h-2.5 rounded-full bg-[#008BF8] shadow-[0_0_8px_#008BF8] animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN: FOCUSED EXECUTIVE TESTIMONIAL DISPLAY
              - Clean Statement (Quotation marks removed as requested)
              - Zero Jitter: Fixed container heights ensure zero layout shift
              - Gradient divider line
              - Author block with multi-quote switcher pills
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between text-left pl-0 lg:pl-6 min-h-[360px] sm:min-h-[380px] lg:h-[400px] py-1">

            {/* Main Executive Statement Container (Fixed min-height guarantees zero jitter) */}
            <div
              className={`flex-1 flex flex-col justify-between transition-opacity duration-200 ease-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="min-h-[190px] sm:min-h-[200px] lg:min-h-[220px] flex items-center">
                <blockquote className="my-1">
                  <p className="text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-normal text-slate-900 leading-[1.48] tracking-tight font-serif">
                    {currentTestimonial.quote}
                  </p>
                </blockquote>
              </div>

              {/* Bottom block: Divider, Author & Multi-quote Pills */}
              <div className="shrink-0 pt-1">
                <div className="h-[2.5px] w-28 sm:w-32 bg-gradient-to-r from-[#008BF8] via-[#7C3AED] to-[#FA0F9C] rounded-full my-3 sm:my-3.5" />

                <div className="space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">
                    {currentTestimonial.role}
                  </p>
                </div>

                {/* Multi-Quote Switcher Pills (Height-reserved to avoid shifting) */}
                <div className="min-h-[38px] flex items-center pt-2">
                  {activeStory.testimonials.length > 1 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                        Quotes:
                      </span>
                      {activeStory.testimonials.map((t, idx) => {
                        const isSubActive = idx === activeSubIndex;
                        return (
                          <button
                            key={`sub-${t.name}`}
                            type="button"
                            onClick={() => switchSubQuote(idx)}
                            className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                              isSubActive
                                ? "bg-[#008BF8] text-white shadow-xs"
                                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-sky-300"
                            }`}
                          >
                            {t.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
