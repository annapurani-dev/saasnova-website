"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import StorefrontLaunchSection from "@/components/solutions/StorefrontLaunchSection";
import SFaaSSection from "@/components/solutions/SFaaSSection";
import { scrollToSectionId, useSolutionHashNavigation } from "@/lib/scrollNavigation";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Award,
  Sparkles,
  ExternalLink,
  Newspaper,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";
const STOREFRONT_LIVE_URL = "https://solutions.storefront.saasnova.ai/";
const STOREFRONT_PR_URL =
  "https://www.saasnova.ai/saasnova-feenix-pr-aws-marketplace-storefront";

const STOREFRONT_HASH_IDS = [
  "what-we-built",
  "sfaas",
  "ecosystem-validation",
  "milestone-timeline",
  "storefront-cta",
] as const;

export default function StorefrontPage() {
  const handleSectionSelect = useCallback(() => {}, []);
  useSolutionHashNavigation(STOREFRONT_HASH_IDS, handleSectionSelect);

  return (
    <div className="relative overflow-x-clip pb-16">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[520px] bg-gradient-to-b from-[#008BF8]/15 via-[#FA0F9C]/10 to-transparent blur-3xl" />

      {/* ══════════════════════════════════════════════════════════════
          01 · HERO — OFFICIAL AWS STOREFRONT LAUNCH PARTNER
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="storefront-hero"
        data-nav-title="Storefront Overview"
        data-nav-subtitle="AWS Launch Partner"
        className="relative px-3 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 scroll-mt-28"
      >
        <div className="card-3d-master relative z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:p-14 backdrop-blur-2xl">
          {/* Prismatic top border */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#008BF8]/70 via-[#FA0F9C]/60 to-transparent" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/solutions" className="hover:text-[#008BF8] transition-colors">
                Solutions
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#008BF8]">Storefront</span>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-200/80 bg-sky-50/90 px-4 py-1.5 text-xs font-extrabold text-sky-800 shadow-[0_2px_0_#bae6fd] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#008BF8] animate-pulse" />
              <Image src="/aws-logo.png" alt="AWS" width={18} height={18} className="h-3.5 w-auto object-contain" />
              <span>OFFICIAL LAUNCH PARTNER · AWS MARKETPLACE STOREFRONT</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Pioneering Cloud GTM with{" "}
              <span className="text-gradient">AWS Marketplace Storefront.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              As an official launch partner for AWS Marketplace Storefront, SaaSNova helped pioneer branded seller experiences, bringing operator-level cloud GTM and streamlined discovery to global technology companies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href={STOREFRONT_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold w-full sm:w-auto"
              >
                <span>Explore the Storefront</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a 30-min Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#what-we-built"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionId("what-we-built", { updateHash: true });
                }}
                className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-bold w-full sm:w-auto"
              >
                <span>Explore Storefront Architecture ↓</span>
              </a>
            </div>

            {/* Key Metrics 3D Raised Keycap Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 max-w-3xl mx-auto">
              <div className="card-3d p-3 rounded-2xl text-center">
                <div className="font-black text-xl text-slate-900">Day-1</div>
                <div className="text-[11px] font-semibold text-slate-500">Official AWS Partner</div>
              </div>
              <div className="card-3d p-3 rounded-2xl text-center">
                <div className="font-black text-xl text-[#008BF8]">100%</div>
                <div className="text-[11px] font-semibold text-slate-500">Turnkey Rollout</div>
              </div>
              <div className="card-3d p-3 rounded-2xl text-center">
                <div className="font-black text-xl text-[#FA0F9C]">Multi-ISV</div>
                <div className="text-[11px] font-semibold text-slate-500">Proven Validation</div>
              </div>
              <div className="card-3d p-3 rounded-2xl text-center">
                <div className="font-black text-xl text-emerald-600">7-Day</div>
                <div className="text-[11px] font-semibold text-slate-500">Live Deployment SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · WHAT WE BUILT AS AN OFFICIAL LAUNCH PARTNER
         ══════════════════════════════════════════════════════════════ */}
      <StorefrontLaunchSection />

      {/* ══════════════════════════════════════════════════════════════
          03 · STOREFRONT AS A SERVICE (SFAAS)
         ══════════════════════════════════════════════════════════════ */}
      <SFaaSSection />

      {/* ══════════════════════════════════════════════════════════════
          04 · ECOSYSTEM VALIDATION (AWS LEADERSHIP & ISV CEO TESTIMONIALS)
         ══════════════════════════════════════════════════════════════ */}
      <section id="ecosystem-validation" className="relative px-3 py-10 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-white/80 border-y border-slate-200/70 scroll-mt-28">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FA0F9C] bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">
              ECOSYSTEM VALIDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Built with AWS, Trusted by Global ISVs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              What cloud product leadership, global software founders, and operators say about SaaSNova Storefront.
            </p>
          </div>

          <div className="well-recessed rounded-[2rem] p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quote 1: AWS Product Lead */}
            <TiltCard variant="light" intensity={7} className="rounded-3xl p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold font-mono shadow-[0_2px_0_#e2e8f0]">
                  <Image src="/aws-logo.png" alt="AWS" width={16} height={16} className="h-3 w-auto object-contain" />
                  <span>Marketplace Product</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;We&apos;re excited to have SaaSNova as a launch partner for AWS Marketplace Storefront. Their hands-on experience supporting ISVs and channel partners, combined with their ability to operationalize cloud GTM motions, makes them a strong partner for helping organizations adopt Storefront quickly and effectively.&rdquo;
                </blockquote>
              </div>
              <div className="pt-3 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#008BF8] to-[#005ea6] text-white flex items-center justify-center font-bold text-xs shadow-[0_3px_0_#004480]">
                  HK
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Hussein Khazaal</div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Sr. Manager of Product, AWS Marketplace Storefront
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Quote 2: Global ISV CEO */}
            <TiltCard variant="light" intensity={7} className="rounded-3xl p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#FA0F9C] border border-pink-200 text-xs font-bold font-mono shadow-[0_2px_0_#fbcfe8]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Global ISV CEO</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;As a global ISV organization, having a partner like SaaSNova gives us a strategic advantage in how we continue to grow our customer reach through new features such as the AWS Marketplace Storefront. Their operator-level understanding of cloud GTM helped us move faster, simplify operations, and unlock revenue pathways.&rdquo;
                </blockquote>
              </div>
              <div className="pt-3 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FA0F9C] to-[#BE185D] text-white flex items-center justify-center font-bold text-xs shadow-[0_3px_0_#831843]">
                  BS
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Barinder Singh</div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    CEO, PharmacoEvidence
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Quote 3: Operator Perspective */}
            <TiltCard variant="light" intensity={7} className="rounded-3xl p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#008BF8] border border-sky-200 text-xs font-bold font-mono shadow-[0_2px_0_#bae6fd]">
                  <span>Operator Perspective</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;By simplifying marketplace operations and reducing friction, we enable ISVs and partners to focus on what matters most: executing high-velocity GTM motions and building repeatable revenue engines with AWS.&rdquo;
                </blockquote>
              </div>
              <div className="pt-3 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#008BF8] to-[#FA0F9C] text-white flex items-center justify-center font-bold text-xs shadow-[0_3px_0_#1e293b]">
                  JD
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Jen Dawson</div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Founder &amp; CEO, SaaSNova
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05 · LAUNCH PARTNER JOURNEY (TIMELINE — DARK COCKPIT)
         ══════════════════════════════════════════════════════════════ */}
      <section id="milestone-timeline" className="relative px-3 py-10 sm:px-6 lg:px-8 scroll-mt-28">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-7xl">
          <div className="card-3d-master-dark relative p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] text-white select-none">
            <div className="relative bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] px-5 py-9 sm:p-10 lg:p-12 overflow-hidden space-y-8 backdrop-blur-2xl">
              {/* Prismatic top line & ambient orbs */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-pink-400/70 to-transparent" />
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-52 rounded-full bg-gradient-to-r from-[#FA0F9C]/18 via-[#7C3AED]/20 to-[#008BF8]/18 blur-[100px]" />

              <div className="text-center max-w-2xl mx-auto relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
                  MILESTONE TIMELINE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                  How We Pioneered <span className="text-gradient">AWS Storefronts</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2">
                  From early architecture validation to full production rollout alongside AWS.
                </p>
              </div>

              <div className="well-recessed-dark rounded-[2rem] p-4 sm:p-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Step 1 */}
                  <TiltCard variant="dark" intensity={7} className="p-7 rounded-3xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">01</span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.45)]">
                        VALIDATION
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Architect &amp; Validate</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Collaborated with AWS product leadership as a Day-1 launch partner to test seller storefront layouts, product taxonomies, and user experience.
                    </p>
                  </TiltCard>

                  {/* Step 2 */}
                  <TiltCard variant="dark-active" intensity={7} className="p-7 rounded-3xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">02</span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-950 shadow-[0_2px_0_#cbd5e1]">
                        ENABLEMENT
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Ecosystem Rollout</h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Guided innovative technology companies onto the platform, structuring their multi-product listings and validating buyer transaction workflows.
                    </p>
                  </TiltCard>

                  {/* Step 3 */}
                  <TiltCard variant="dark" intensity={7} className="p-7 rounded-3xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">03</span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.45)]">
                        GROWTH
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Ongoing GTM Advisory</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Continuing to advise founders, alliance leaders, and sales teams on maximizing their cloud ecosystem visibility and driving predictable co-sell velocity.
                    </p>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05.5 · RELATED READING — OFFICIAL LAUNCH PARTNER PR
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-3 py-4 sm:px-6 lg:px-8">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-4xl">
          <div className="card-3d-master rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[10px] font-mono font-bold text-[#008BF8]">
                <Newspaper className="w-3.5 h-3.5" />
                <span>RELATED READING · PRESS RELEASE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                SaaSNova selected as launch partner for AWS Marketplace Storefront
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                The announcement highlighting SaaSNova&apos;s selection as an official launch partner.
              </p>
            </div>
            <Link
              href={STOREFRONT_PR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient btn-3d shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-xs sm:text-sm font-bold transition-all w-full md:w-auto"
            >
              <span>Read Press Release</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          06 · FINAL CONVERSION CTA
         ══════════════════════════════════════════════════════════════ */}
      <section id="storefront-cta" className="relative px-3 pt-6 pb-12 sm:px-6 lg:px-8 scroll-mt-28">
        <ScrollReveal once={false} variant="up" className="mx-auto max-w-4xl text-center">
          <div className="card-3d-master-dark p-[2.5px] rounded-[2.5rem] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8] text-white relative overflow-hidden">
            <div className="bg-[#070D1E] rounded-[calc(2.5rem-2.5px)] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            {/* Prismatic glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#008BF8]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FA0F9C]/20 blur-3xl" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-slate-200">
                OFFICIAL AWS LAUNCH PARTNER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Explore our Storefront or connect with our team.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Take a look at our live presence on AWS Marketplace, or schedule a 30-minute founder strategy session to discuss your cloud GTM trajectory.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href={STOREFRONT_LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-xs sm:text-sm font-bold w-full sm:w-auto cursor-pointer"
                >
                  <span>Explore the Storefront</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-bold w-full sm:w-auto cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 30-min Session</span>
                </Link>
                <Link
                  href="/solutions"
                  className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all w-full sm:w-auto"
                >
                  <span>View All Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

