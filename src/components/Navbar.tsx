"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Rocket,
  Shield,
  Layers,
  Users,
  Cpu,
  FileText,
  Video,
  Radio,
  Calendar,
  Mail,
  Send,
  HelpCircle,
  Briefcase,
  Globe,
  Newspaper,
  CheckCircle2,
  LayoutGrid,
} from "lucide-react";

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<"programs" | "services" | "ops" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const isSolutions = pathname.startsWith("/solutions");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. TOP ANNOUNCEMENT STRIP (STATIC, FULL-STRETCHED, NO MOVEMENT DOTS)
         ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md py-2 px-3 sm:px-4 z-40">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2 sm:gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-extrabold tracking-wider uppercase text-sky-700 bg-sky-50 border border-sky-200 shadow-2xs shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8]" />
            NEW LAUNCH
          </span>

          <span className="font-semibold text-slate-800 truncate text-[11.5px] sm:text-xs">
            <strong className="font-bold">SaaSNova × SaaSiFy:</strong> First AWS Partner Starter Bundle.
          </span>

          <Link
            href={CALENDLY}
            target="_blank"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-white text-[10.5px] font-bold hover:bg-[#FA0F9C] transition-all shadow-2xs cursor-pointer shrink-0"
          >
            <span>View Bundle</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          2. 3D FLOATING STADIUM GLASS NAVBAR
         ══════════════════════════════════════════════════════════════ */}
      <header className="sticky top-2 sm:top-3 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <div
          className={`relative max-w-6xl mx-auto transition-all duration-300 rounded-full px-4 sm:px-6 lg:px-7 pointer-events-auto border border-slate-200/90 border-t-white bg-gradient-to-b from-white via-[#fafbff] to-[#edf3fa] backdrop-blur-2xl shadow-[inset_0_2px_1px_rgba(255,255,255,1),0_1px_0_#e2e8f0,0_2px_0_#d4dde9,0_3px_0_#c4d0e0,0_4px_0_#b1c0d5,0_5px_0_#9eafc9,0_16px_36px_-6px_rgba(15,23,42,0.22),0_26px_52px_-12px_rgba(0,139,248,0.14)] ${
            scrolled ? "py-2" : "py-2.5"
          }`}
        >
          {/* Subtle prismatic top/bottom rim highlight */}
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#FA0F9C]/40 via-[#7C3AED]/35 via-[#008BF8]/40 to-transparent" />

          <div className="flex items-center justify-between">
            {/* ── LOGO (OFFICIAL saasnova.ai BRAND LOGO) ── */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/logo-color.png"
                alt="SaaSNova"
                width={155}
                height={42}
                priority
                className="h-7 sm:h-8 lg:h-8.5 w-auto object-contain"
              />
            </Link>

            {/* ── DESKTOP NAVIGATION PILL (3D RECESSED SOFT SKY-BLUE WELL) ── */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-[#e6f0fe] border border-sky-200/75 rounded-full px-3 py-1.5 shadow-[inset_0_2px_6px_rgba(15,23,42,0.08),0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md">
              {/* Home */}
              <Link
                href="/"
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  isHome
                    ? "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] -translate-y-[1px]"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                Home
              </Link>

              {/* ── 1. SOLUTIONS DROPDOWN (ALL SOLUTIONS, STOREFRONT & HOVER SUBMENUS) ── */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubmenu(null);
                }}
              >
                <div className="flex items-center">
                  <Link
                    href="/solutions"
                    className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                      isSolutions || activeDropdown === "solutions"
                        ? "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]"
                        : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    Solutions
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === "solutions" ? "rotate-180 text-[#008BF8]" : "text-slate-400"
                      }`}
                    />
                  </Link>
                </div>

                {activeDropdown === "solutions" && (
                  <div className="absolute left-0 top-full pt-2.5 w-[295px] animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="card-3d-master rounded-[24px] p-2.5 space-y-1">
                      
                      {/* 1. All Solutions */}
                      <Link
                        href="/solutions"
                        onClick={() => {
                          setActiveDropdown(null);
                          setActiveSubmenu(null);
                        }}
                        onMouseEnter={() => setActiveSubmenu(null)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                          <LayoutGrid className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-[13px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">
                            All Solutions
                          </div>
                          <div className="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">
                            View full execution suite
                          </div>
                        </div>
                      </Link>

                      {/* 2. Storefront */}
                      <Link
                        href="/solutions/storefront"
                        onClick={() => {
                          setActiveDropdown(null);
                          setActiveSubmenu(null);
                        }}
                        onMouseEnter={() => setActiveSubmenu(null)}
                        className="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-sky-50/50 via-slate-50/70 to-pink-50/40 hover:from-sky-50 hover:to-pink-50/70 border border-slate-200/60 transition-all group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#070D1E] p-1 flex items-center justify-center border border-slate-900/10 shadow-xs shrink-0">
                          <Image
                            src="/logo-favicon.png"
                            alt="Storefront"
                            width={22}
                            height={22}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-[13px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">
                            Storefront
                          </div>
                          <div className="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">
                            Marketplace Solutions &amp; SFaaS
                          </div>
                        </div>
                      </Link>

                      <div className="h-[1px] bg-slate-100 my-1.5" />

                      {/* 3. Programs (with hover submenu) */}
                      <div
                        className="relative"
                        onMouseEnter={() => setActiveSubmenu("programs")}
                      >
                        <Link
                          href="/solutions/growth-programs"
                          onClick={() => {
                            setActiveDropdown(null);
                            setActiveSubmenu(null);
                          }}
                          className={`flex items-center gap-3 p-2 rounded-xl transition-colors group cursor-pointer ${
                            activeSubmenu === "programs" ? "bg-sky-50/80" : "hover:bg-sky-50/50"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
                            <LayoutGrid className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[13px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">
                                Programs
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <div className="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">
                              Ignite, SuperNova, NovaX
                            </div>
                          </div>
                        </Link>

                        {/* Submenu for Programs */}
                        {activeSubmenu === "programs" && (
                          <div
                            className="card-3d-master absolute left-full top-0 ml-1.5 w-[260px] rounded-[22px] backdrop-blur-2xl p-2 space-y-1 animate-in fade-in slide-in-from-left-1 duration-150 z-50 before:absolute before:top-0 before:-left-3 before:w-3 before:h-full"
                          >
                            <Link
                              href="/solutions/growth-programs#ignite"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#008BF8] flex items-center justify-center shrink-0">
                                <Rocket className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">
                                  Ignite
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Cloud GTM Activation
                                </div>
                              </div>
                            </Link>

                            <Link
                              href="/solutions/growth-programs#supernova"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-orange-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                                  SuperNova
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  US Market Entry
                                </div>
                              </div>
                            </Link>

                            <Link
                              href="/solutions/growth-programs#novax"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-pink-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-pink-50 text-[#FA0F9C] flex items-center justify-center shrink-0">
                                <Globe className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-[#FA0F9C] transition-colors leading-tight">
                                  NovaX
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Global Multi-Cloud Scale
                                </div>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* 4. Services (with hover submenu) */}
                      <div
                        className="relative"
                        onMouseEnter={() => setActiveSubmenu("services")}
                      >
                        <Link
                          href="/solutions/fractional-operators"
                          onClick={() => {
                            setActiveDropdown(null);
                            setActiveSubmenu(null);
                          }}
                          className={`flex items-center gap-3 p-2 rounded-xl transition-colors group cursor-pointer ${
                            activeSubmenu === "services" ? "bg-orange-50/80" : "hover:bg-orange-50/50"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 border border-orange-100 flex items-center justify-center shrink-0">
                            <Users className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[13px] text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                                Services
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <div className="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">
                              PDMaaS, PMMaaS, PALaaS
                            </div>
                          </div>
                        </Link>

                        {/* Submenu for Services */}
                        {activeSubmenu === "services" && (
                          <div
                            className="card-3d-master absolute left-full top-0 ml-1.5 w-[260px] rounded-[22px] backdrop-blur-2xl p-2 space-y-1 animate-in fade-in slide-in-from-left-1 duration-150 z-50 before:absolute before:top-0 before:-left-3 before:w-3 before:h-full"
                          >
                            <Link
                              href="/solutions/fractional-operators#pdmaas"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#008BF8] flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">
                                  PDMaaS
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Pipeline Execution
                                </div>
                              </div>
                            </Link>

                            <Link
                              href="/solutions/fractional-operators#pmmaas"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-orange-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                <Radio className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                                  PMMaaS
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Cloud Messaging
                                </div>
                              </div>
                            </Link>

                            <Link
                              href="/solutions/fractional-operators#palaas"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-pink-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-pink-50 text-[#FA0F9C] flex items-center justify-center shrink-0">
                                <Shield className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-[#FA0F9C] transition-colors leading-tight">
                                  PALaaS
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Alliance Operations
                                </div>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* 5. GTM Ops & Infra (with hover submenu) */}
                      <div
                        className="relative"
                        onMouseEnter={() => setActiveSubmenu("ops")}
                      >
                        <Link
                          href="/solutions/systems-ops"
                          onClick={() => {
                            setActiveDropdown(null);
                            setActiveSubmenu(null);
                          }}
                          className={`flex items-center gap-3 p-2 rounded-xl transition-colors group cursor-pointer ${
                            activeSubmenu === "ops" ? "bg-emerald-50/80" : "hover:bg-emerald-50/50"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                            <Layers className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[13px] text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                                GTM Ops &amp; Infra
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <div className="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">
                              PRMaaS, PCMaaS
                            </div>
                          </div>
                        </Link>

                        {/* Submenu for GTM Ops & Infra */}
                        {activeSubmenu === "ops" && (
                          <div
                            className="card-3d-master absolute left-full top-0 ml-1.5 w-[260px] rounded-[22px] backdrop-blur-2xl p-2 space-y-1 animate-in fade-in slide-in-from-left-1 duration-150 z-50 before:absolute before:top-0 before:-left-3 before:w-3 before:h-full"
                          >
                            <Link
                              href="/solutions/systems-ops#prmaas"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-emerald-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                <Layers className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                                  PRMaaS
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Attribution Infrastructure
                                </div>
                              </div>
                            </Link>

                            <Link
                              href="/solutions/systems-ops#pcmaas"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-emerald-50 transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-[12.5px] text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                                  PCMaaS
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                  Portal Migration Readiness
                                </div>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* ── 2. ABOUT (DIRECT LINK) ── */}
              <Link
                href="#trust"
                className="px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-white/50 rounded-full transition-colors"
              >
                About
              </Link>

              {/* ── 3. PARTNERS DROPDOWN (EXACT STRUCTURE FROM saasnova.ai) ── */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("partners")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "partners" ? null : "partners")}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeDropdown === "partners"
                      ? "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  Partners
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "partners" ? "rotate-180 text-[#008BF8]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "partners" && (
                  <div className="absolute left-0 top-full pt-2.5 w-[440px] animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="card-3d-master rounded-2xl p-4 grid grid-cols-2 gap-3">
                      <div>
                        <div className="px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Hyperscalers
                        </div>
                        <Link
                          href="#trust"
                          className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                        >
                          <Image src="/aws-logo.png" alt="AWS" width={18} height={18} className="h-4 w-auto object-contain" />
                          <div>
                            <div className="font-bold text-slate-900">AWS Partner</div>
                            <div className="text-[10.5px] text-slate-500">ACE & Co-Sell</div>
                          </div>
                        </Link>
                        <Link
                          href="#trust"
                          className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                        >
                          <Image src="/azure-logo.png" alt="Azure" width={18} height={18} className="h-4 w-auto object-contain" />
                          <div>
                            <div className="font-bold text-slate-900">Microsoft Azure</div>
                            <div className="text-[10.5px] text-slate-500">MACC & IP Co-Sell</div>
                          </div>
                        </Link>
                        <Link
                          href="#trust"
                          className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                        >
                          <Image src="/gcp-logo.png" alt="GCP" width={18} height={18} className="h-4 w-auto object-contain" />
                          <div>
                            <div className="font-bold text-slate-900">Google Cloud</div>
                            <div className="text-[10.5px] text-slate-500">Partner Advantage</div>
                          </div>
                        </Link>
                      </div>

                      <div className="border-l border-slate-100 pl-3">
                        <div className="px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Featured Ecosystem
                        </div>
                        <Link href={CALENDLY} target="_blank" className="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">
                          • <strong>SaaSiFy</strong> · Starter Bundle
                        </Link>
                        <Link href="#trust" className="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">
                          • <strong>WorkSpan</strong> · Co-Sell Platform
                        </Link>
                        <Link href="#trust" className="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">
                          • <strong>Pronix</strong> · Cloud Delivery
                        </Link>
                        <Link href="#trust" className="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">
                          • <strong>Carahsoft</strong> · Public Sector
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 4. RESOURCES DROPDOWN (EXACT STRUCTURE FROM saasnova.ai) ── */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeDropdown === "resources"
                      ? "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  Resources
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "resources" ? "rotate-180 text-[#008BF8]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "resources" && (
                  <div className="absolute left-0 top-full pt-2.5 w-72 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="card-3d-master rounded-2xl p-2.5 space-y-1">
                      <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1.5 mb-1">
                        Proof &amp; Insights
                      </div>
                      <Link href="#trust" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                        <Layers className="w-4 h-4 text-[#008BF8]" />
                        <div>
                          <div className="font-bold text-slate-900">Case Studies</div>
                          <div className="text-[11px] text-slate-500">11 verified customer transformations</div>
                        </div>
                      </Link>
                      <Link href="#how-we-execute" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                        <Rocket className="w-4 h-4 text-[#FA0F9C]" />
                        <div>
                          <div className="font-bold text-slate-900">Execution Pipeline</div>
                          <div className="text-[11px] text-slate-500">Activate ➔ Drive ➔ Convert ➔ Prove</div>
                        </div>
                      </Link>
                      <Link href="#trust" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                        <Video className="w-4 h-4 text-[#7C3AED]" />
                        <div>
                          <div className="font-bold text-slate-900">The Jen GTM Show</div>
                          <div className="text-[11px] text-slate-500">Cloud strategy conversations</div>
                        </div>
                      </Link>
                      <Link href="#contact" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                        <Radio className="w-4 h-4 text-emerald-600" />
                        <div>
                          <div className="font-bold text-slate-900">The Nova Brief</div>
                          <div className="text-[11px] text-slate-500">Weekly insights directly to inbox</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 5. CAREERS (DIRECT LINK) ── */}
              <Link
                href="mailto:careers@saasnova.ai?subject=Operator%20Role%20Inquiry"
                className="px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-full transition-colors"
              >
                Careers
              </Link>

              {/* ── 6. CONTACT DROPDOWN (EXACT STRUCTURE FROM saasnova.ai) ── */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("contact")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "contact" ? null : "contact")}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeDropdown === "contact"
                      ? "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  Contact
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "contact" ? "rotate-180 text-[#008BF8]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "contact" && (
                  <div className="absolute right-0 top-full pt-2.5 w-64 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="card-3d-master rounded-2xl p-2.5 space-y-1">
                      <Link href="#contact" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                        <Mail className="w-4 h-4 text-[#008BF8]" />
                        <div>
                          <div className="font-bold text-slate-900">Contact Sales</div>
                          <div className="text-[11px] text-slate-500">General &amp; partnerships</div>
                        </div>
                      </Link>
                      <Link href="mailto:support@saasnova.ai" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                        <HelpCircle className="w-4 h-4 text-emerald-600" />
                        <div>
                          <div className="font-bold text-slate-900">Support</div>
                          <div className="text-[11px] text-slate-500">Help for existing customers</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* ── GET STARTED 3D TACTILE CTA BUTTON ── */}
            <div className="hidden lg:flex items-center">
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn-gradient btn-3d inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-white text-xs font-extrabold cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* ── MOBILE MENU TOGGLE ── */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* ── MOBILE DRAWER ── */}
          {mobileOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/80 space-y-2 pb-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-1.5 text-xs font-bold rounded-lg ${
                  isHome ? "text-[#008BF8] bg-sky-50" : "text-slate-800"
                }`}
              >
                Home
              </Link>
              <div className="pt-1">
                <Link
                  href="/solutions"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-1.5 text-xs font-bold rounded-lg ${
                    isSolutions ? "text-[#008BF8] bg-sky-50" : "text-slate-800"
                  }`}
                >
                  Solutions
                </Link>
                <div className="pl-3 space-y-2 mt-1 border-l-2 border-sky-100 ml-3">
                  <Link
                    href="/solutions"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-xs font-bold text-slate-800 hover:text-[#008BF8]"
                  >
                    All Solutions <span className="text-[10px] font-normal text-slate-500 font-mono">(Full Suite)</span>
                  </Link>
                  <Link
                    href="/solutions/storefront"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-xs font-bold text-slate-800 hover:text-[#008BF8]"
                  >
                    Storefront <span className="text-[10px] font-normal text-slate-500">(Marketplace &amp; SFaaS)</span>
                  </Link>

                  <div className="pt-1">
                    <Link
                      href="/solutions/growth-programs"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-bold text-[#008BF8]"
                    >
                      Programs
                    </Link>
                    <div className="pl-2 space-y-0.5 text-[11px] text-slate-600">
                      <Link href="/solutions/growth-programs#ignite" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-[#008BF8]">
                        • Ignite <span className="text-slate-400">(Cloud GTM Activation)</span>
                      </Link>
                      <Link href="/solutions/growth-programs#supernova" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-[#008BF8]">
                        • SuperNova <span className="text-slate-400">(US Market Entry)</span>
                      </Link>
                      <Link href="/solutions/growth-programs#novax" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-[#008BF8]">
                        • NovaX <span className="text-slate-400">(Global Scale)</span>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link
                      href="/solutions/fractional-operators"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-bold text-orange-500"
                    >
                      Services
                    </Link>
                    <div className="pl-2 space-y-0.5 text-[11px] text-slate-600">
                      <Link href="/solutions/fractional-operators#pdmaas" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-orange-500">
                        • PDMaaS <span className="text-slate-400">(Pipeline Execution)</span>
                      </Link>
                      <Link href="/solutions/fractional-operators#pmmaas" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-orange-500">
                        • PMMaaS <span className="text-slate-400">(Cloud Messaging)</span>
                      </Link>
                      <Link href="/solutions/fractional-operators#palaas" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-orange-500">
                        • PALaaS <span className="text-slate-400">(Alliance Operations)</span>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link
                      href="/solutions/systems-ops"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs font-bold text-emerald-600"
                    >
                      GTM Ops &amp; Infra
                    </Link>
                    <div className="pl-2 space-y-0.5 text-[11px] text-slate-600">
                      <Link href="/solutions/systems-ops#prmaas" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-emerald-600">
                        • PRMaaS <span className="text-slate-400">(Attribution Infra)</span>
                      </Link>
                      <Link href="/solutions/systems-ops#pcmaas" onClick={() => setMobileOpen(false)} className="block py-0.5 hover:text-emerald-600">
                        • PCMaaS <span className="text-slate-400">(Portal Readiness)</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="#trust" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg">About</Link>
              <Link href="#trust" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg">Partners</Link>
              <Link href="#how-we-execute" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg">Resources</Link>
              <Link href="mailto:careers@saasnova.ai" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg">Careers</Link>
              <Link href="#contact" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg">Contact</Link>
              <div className="pt-2 px-2">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  className="btn-gradient flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-bold shadow-md"
                >
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
