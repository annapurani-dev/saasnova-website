"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full bg-[#070D1E] overflow-hidden text-slate-300 rounded-none">
      {/* ── SIGNATURE GRADIENT TOP BORDER ACROSS SCREEN ── */}
      <div className="w-full h-[2.5px] bg-gradient-to-r from-[#FA0F9C] via-[#7C3AED] to-[#008BF8]" />

      {/* Subtle ambient luminous glows across dark blue cockpit */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#008BF8]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#FA0F9C]/12 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 space-y-5">
        {/* ── COMPACT 5-COLUMN BALANCED FOOTER GRID ── */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 items-start">
          
          {/* ── COLUMN 1: BRAND, HYPERSCALERS & SOCIAL (lg:col-span-3) ── */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo-favicon.png"
                alt="SaaSNova"
                width={32}
                height={32}
                priority
                className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <span className="font-display text-xl font-black tracking-tight text-white block leading-none">
                  SaaS<span className="text-gradient">Nova</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  WOMEN-OWNED BUSINESS
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Operator-led cloud GTM execution engine scaling SaaS ISVs across AWS, Azure, and GCP.
            </p>

            {/* Compact Hyperscaler Logos & Social Icons in One Row */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <div title="Amazon Web Services (AWS)" className="inline-flex h-6 px-2 items-center justify-center rounded bg-white/5 border border-white/10">
                <Image src="/aws-logo.png" alt="AWS" width={16} height={16} className="h-3 w-auto object-contain brightness-0 invert opacity-85" />
              </div>
              <div title="Microsoft Azure" className="inline-flex h-6 px-2 items-center justify-center rounded bg-white/5 border border-white/10">
                <Image src="/azure-logo.png" alt="Azure" width={14} height={14} className="h-3 w-auto object-contain" />
              </div>
              <div title="Google Cloud Platform (GCP)" className="inline-flex h-6 px-2 items-center justify-center rounded bg-white/5 border border-white/10">
                <Image src="/gcp-logo.png" alt="GCP" width={14} height={14} className="h-3 w-auto object-contain" />
              </div>

              <span className="text-white/15 mx-0.5">|</span>

              <a
                href="https://www.linkedin.com/company/saasnova/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/5 text-[#0A66C2] transition-all hover:bg-white/15 hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@SaaSNovaGTM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/5 text-[#FF0000] transition-all hover:bg-white/15 hover:scale-105"
                aria-label="YouTube"
              >
                <svg width="13" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768 1.56.418 7.814.418 7.814.418s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/5 text-slate-200 transition-all hover:bg-white/15 hover:scale-105"
                aria-label="X"
              >
                <span className="text-[10px] font-bold font-sans">𝕏</span>
              </a>
            </div>
          </div>

          {/* ── COLUMN 2: SOLUTIONS & PROGRAMS (lg:col-span-2) ── */}
          <div className="col-span-1 lg:col-span-2 space-y-2">
            <div className="text-[10.5px] font-mono font-bold tracking-wider text-white uppercase mb-2">
              Solutions &amp; Programs
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/solutions" className="text-slate-400 hover:text-white transition">All Solutions</Link></li>
              <li><Link href="/solutions/storefront" className="text-slate-400 hover:text-white transition">Storefront &amp; SFaaS</Link></li>
              <li><Link href="/solutions/growth-programs#ignite" className="text-slate-400 hover:text-white transition">Ignite</Link></li>
              <li><Link href="/solutions/growth-programs#supernova" className="text-slate-400 hover:text-white transition">SuperNova</Link></li>
              <li><Link href="/solutions/growth-programs#novax" className="text-slate-400 hover:text-white transition">NovaX</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 3: SERVICES & INFRA (lg:col-span-2) ── */}
          <div className="col-span-1 lg:col-span-2 space-y-2">
            <div className="text-[10.5px] font-mono font-bold tracking-wider text-white uppercase mb-2">
              Services &amp; Infra
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/solutions/fractional-operators#pdmaas" className="text-slate-400 hover:text-white transition">PDMaaS · Pipeline</Link></li>
              <li><Link href="/solutions/fractional-operators#pmmaas" className="text-slate-400 hover:text-white transition">PMMaaS · Messaging</Link></li>
              <li><Link href="/solutions/fractional-operators#palaas" className="text-slate-400 hover:text-white transition">PALaaS · Alliances</Link></li>
              <li><Link href="/solutions/systems-ops#prmaas" className="text-slate-400 hover:text-white transition">PRMaaS · Revenue Measurement</Link></li>
              <li><Link href="/solutions/systems-ops#pcmaas" className="text-slate-400 hover:text-white transition">PCMaaS · Portal Migration</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 4: COMPANY (lg:col-span-2) ── */}
          <div className="col-span-1 lg:col-span-2 space-y-2">
            <div className="text-[10.5px] font-mono font-bold tracking-wider text-white uppercase mb-2">
              Company
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition">About &amp; Team</Link></li>
              <li><Link href="#trust" className="text-slate-400 hover:text-white transition">Case Studies</Link></li>
              <li><Link href="#trust" className="text-slate-400 hover:text-white transition">The Jen GTM Show</Link></li>
              <li><Link href="#trust" className="text-slate-400 hover:text-white transition">Partners</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* ── COLUMN 5: THE NOVA BRIEF & CONTACT (lg:col-span-3) ── */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <div>
              <div className="text-[10.5px] font-mono font-bold tracking-wider uppercase mb-1.5 text-[#FA0F9C]">
                The Nova Brief
              </div>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email"
                  required
                  className="flex-1 min-w-0 px-3 py-1.5 text-xs rounded-md border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:border-[#FA0F9C] transition-colors"
                />
                <button
                  type="submit"
                  className="btn-gradient btn-3d px-3.5 py-1.5 rounded-md text-white text-xs font-bold transition-all cursor-pointer shrink-0"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : "Join"}
                </button>
              </form>
              {subscribed && (
                <p className="text-[10.5px] text-emerald-400 font-semibold mt-1">
                  ✓ Subscribed to The Nova Brief!
                </p>
              )}
            </div>

            <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-slate-400">
              <a href="mailto:jen@saasnova.ai" className="hover:text-white transition">jen@saasnova.ai</a>
              <a href="tel:+12017555369" className="hover:text-white transition">+1 (201) 755-5369</a>
              <a href="mailto:support@saasnova.ai" className="hover:text-white transition">support@saasnova.ai</a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM DIVIDER & COMPACT COPYRIGHT STRIP ── */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <p>© 2026 SaaSNova. All rights reserved.</p>
          <div className="flex items-center gap-5 lg:pr-36">
            <Link href="#privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
