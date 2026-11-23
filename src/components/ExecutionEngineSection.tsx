"use client";

import {
  Rocket,
  Store,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Zap,
} from "lucide-react";

export default function ExecutionEngineSection() {
  return (
    <div className="relative mx-auto max-w-7xl w-full">
      {/* ── Scoped Keyframes & 3D Tactile Elevation System ── */}
      <style>{`
        @keyframes glitterSweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          30%, 100% { transform: translateX(260%) skewX(-20deg); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.7) rotate(0deg); }
          50% { opacity: 0.95; transform: scale(1.15) rotate(90deg); filter: drop-shadow(0 0 6px rgba(255,255,255,0.95)); }
        }
        @keyframes sparkleTwinkleAlt {
          0%, 100% { opacity: 0.95; transform: scale(1.1) rotate(45deg); filter: drop-shadow(0 0 6px rgba(255,255,255,0.95)); }
          50% { opacity: 0.2; transform: scale(0.65) rotate(135deg); }
        }

        /* ── 3D Physical Extruded Message Bubble ── */
        .bubble-3d-card {
          background: linear-gradient(175deg, #ffffff 0%, #fafcff 55%, #edf3fa 100%);
          border: 1px solid rgba(203, 213, 225, 0.9);
          border-top: 2px solid #ffffff;
          border-bottom: 3.5px solid #cbd5e1;
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 1px 0 #e2e8f0,
            0 2px 0 #d4dde9,
            0 3px 0 #c4d0e0,
            0 14px 28px -4px rgba(15, 23, 42, 0.12),
            0 22px 45px -8px rgba(0, 139, 248, 0.12);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease;
        }
        .bubble-3d-card:hover {
          transform: translateY(-5px);
          border-bottom-color: #94a3b8;
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 2px 0 #d4dde9,
            0 4px 0 #b1c0d5,
            0 20px 40px -6px rgba(15, 23, 42, 0.18),
            0 32px 64px -10px rgba(0, 139, 248, 0.18);
        }

        /* ── 3D Physical Extruded Gradient Block ── */
        .gradient-3d-card {
          background: linear-gradient(100deg, #FA0F9C 0%, #008BF8 100%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-top: 2px solid rgba(255, 255, 255, 0.75);
          border-bottom: 4px solid #b30073;
          box-shadow:
            inset 0 2px 1.5px rgba(255, 255, 255, 0.6),
            0 2px 0 #990060,
            0 4px 0 #730048,
            0 22px 50px -8px rgba(250, 15, 156, 0.45),
            0 38px 75px -12px rgba(0, 139, 248, 0.35);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .gradient-3d-card:hover {
          transform: translateY(-5px);
          box-shadow:
            inset 0 2px 1.5px rgba(255, 255, 255, 0.7),
            0 3px 0 #990060,
            0 6px 0 #730048,
            0 28px 60px -8px rgba(250, 15, 156, 0.52),
            0 46px 88px -12px rgba(0, 139, 248, 0.42);
        }

        /* ── 3D Tactile Cassettes inside Gradient Block ── */
        .cassette-3d {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-top: 1.5px solid #ffffff;
          border-bottom: 3px solid #cbd5e1;
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 1),
            0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s ease;
        }
        .cassette-3d:hover {
          transform: translateY(-3px);
          border-bottom-color: #94a3b8;
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 1),
            0 8px 22px rgba(0, 0, 0, 0.14);
        }

        /* ── 3D Pedestal Nodes ── */
        .node-3d {
          background: #ffffff;
          border: 2px solid #7dd3fc;
          border-top: 2px solid #ffffff;
          border-bottom: 3.5px solid #38bdf8;
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 4px 14px rgba(0, 139, 248, 0.22);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .node-3d:hover {
          transform: translateY(-2px) scale(1.06);
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 8px 22px rgba(0, 139, 248, 0.32);
        }

        .node-3d-beacon {
          background: linear-gradient(100deg, #FA0F9C 0%, #008BF8 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          border-top: 2px solid rgba(255, 255, 255, 0.85);
          border-bottom: 3.5px solid #b30073;
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 0.7),
            0 6px 20px rgba(250, 15, 156, 0.5);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .node-3d-beacon:hover {
          transform: translateY(-2px) scale(1.06);
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 0.85),
            0 10px 28px rgba(250, 15, 156, 0.62);
        }
      `}</style>

      {/* ═══ 2-PANEL ARCHITECTURAL CONTAINER (SECONDARY BUTTON BLUE TINT) ═══ */}
      <div className="rounded-[32px] border-[1.5px] border-[#008BF8]/30 bg-[#008BF8]/[0.08] backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_50px_rgba(0,139,248,0.12),0_2px_6px_rgba(15,23,42,0.02)]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ══════════════════════════════════════════════════════════════
              LEFT PANEL COLUMN: CRISP EDITORIAL (NO EYEBROW PILL)
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 text-left">
            {/* Solid Clean Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.14]">
              Your listing is live. Here is where we step in to drive revenue.
            </h2>

            {/* Single Crisp Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
              Getting listed on AWS, Azure, or GCP is only the starting line. Without dedicated operators working partner portals and cloud sales reps, listings sit dormant. SaaSNova bridges the gap to closed enterprise deals.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT PANEL COLUMN: FULL 3D CARDS + DEPTH (STOPS AT STAGE 04)
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7">
            <div className="space-y-8 sm:space-y-10">

              {/* ── STEP 01: YOUR SOFTWARE (FULL 3D MESSAGE BUBBLE) ── */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Precision Segment Connector Line (to Step 02) */}
                <div
                  aria-hidden="true"
                  className="absolute left-[24px] sm:left-[28px] top-12 sm:top-14 -bottom-8 sm:-bottom-10 w-[2px] -translate-x-1/2 bg-[#008BF8]/35 z-0 pointer-events-none"
                />

                {/* 3D Extruded Brand Blue Node */}
                <div className="node-3d relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ring-4 ring-sky-50 text-[#008BF8]">
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-[#008BF8]" />
                </div>

                {/* 3D Extruded Message Bubble Card */}
                <div className="bubble-3d-card relative z-10 flex-1 rounded-2xl rounded-tl-xs p-5 sm:p-6">
                  {/* 3D Bubble pointer notch matching the physical bevel */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[8px] top-5 h-4 w-4 rotate-45 border-l border-b border-slate-300 bg-white shadow-[-3px_3px_5px_rgba(15,23,42,0.06)]"
                  />
                  <div className="relative z-10">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                      STAGE 01
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mt-1">
                      Your Software
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                      You built an enterprise-ready product. The technology is battle-tested, but hyperscaler marketplace buyers require a specialized procurement path.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── STEP 02: LISTED ON CLOUD (FULL 3D MESSAGE BUBBLE) ── */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Precision Segment Connector Line (to Step 03) */}
                <div
                  aria-hidden="true"
                  className="absolute left-[24px] sm:left-[28px] top-12 sm:top-14 -bottom-8 sm:-bottom-10 w-[2px] -translate-x-1/2 bg-[#008BF8]/35 z-0 pointer-events-none"
                />

                {/* 3D Extruded Brand Blue Node */}
                <div className="node-3d relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ring-4 ring-sky-50 text-[#008BF8]">
                  <Store className="h-5 w-5 sm:h-6 sm:w-6 text-[#008BF8]" />
                </div>

                {/* 3D Extruded Message Bubble Card */}
                <div className="bubble-3d-card relative z-10 flex-1 rounded-2xl rounded-tl-xs p-5 sm:p-6">
                  {/* 3D Bubble pointer notch matching the physical bevel */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[8px] top-5 h-4 w-4 rotate-45 border-l border-b border-slate-300 bg-white shadow-[-3px_3px_5px_rgba(15,23,42,0.06)]"
                  />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                        STAGE 02
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-[#FA0F9C] shadow-2xs">
                        <AlertCircle className="w-3.5 h-3.5 text-[#FA0F9C] shrink-0" />
                        Where listings stall
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug mt-1">
                      Listed on Cloud Marketplace
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Live on AWS, Azure, or GCP. But zero inbound pipeline happens automatically. Without active co-sell and private offers, listings sit dormant.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── STEP 03: WHERE SAASNOVA EMBEDS (3D GRADIENT BLOCK + GLITTER) ── */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Precision Segment Connector Line (to Step 04) */}
                <div
                  aria-hidden="true"
                  className="absolute left-[24px] sm:left-[28px] top-12 sm:top-14 -bottom-8 sm:-bottom-10 w-[2px] -translate-x-1/2 bg-[#008BF8]/35 z-0 pointer-events-none"
                />

                {/* 3D Extruded Gradient Beacon Node */}
                <div className="node-3d-beacon relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ring-4 ring-pink-100/90 text-white">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white" />
                </div>

                {/* 3D Extruded Centerpiece Gradient Block with Glitter/Sheen */}
                <div className="gradient-3d-card relative z-10 flex-1 rounded-3xl rounded-tl-sm p-6 sm:p-7">
                  {/* Bubble pointer notch matching the gradient start */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[8px] top-6 h-4 w-4 rotate-45 bg-[#FA0F9C] shadow-[-3px_3px_5px_rgba(250,15,156,0.3)]"
                  />

                  {/* ── Internal Ambient Glitter & Shimmer Overlay (Masked to Rounded Corners) ── */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    {/* Subtle Diagonal Shimmer Sweep */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent"
                      style={{ animation: "glitterSweep 6.5s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
                    />

                    {/* Micro-Sparkle Star 1 (Top-Right Glitter Glint) */}
                    <svg
                      className="absolute top-3.5 right-8 w-4 h-4 text-white"
                      style={{ animation: "sparkleTwinkle 3.2s ease-in-out infinite" }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                    </svg>

                    {/* Micro-Sparkle Star 2 (Middle-Right Glitter Glint) */}
                    <svg
                      className="absolute bottom-5 right-12 w-3.5 h-3.5 text-white"
                      style={{ animation: "sparkleTwinkleAlt 3.8s ease-in-out infinite" }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                    </svg>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Header with Active Pulse */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/25">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-mono font-black uppercase tracking-wider text-black shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-[#FA0F9C] animate-pulse" />
                        <span>WHERE SAASNOVA EMBEDS</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-white drop-shadow-xs hidden sm:inline">
                        We operate every step
                      </span>
                    </div>

                    {/* 3 Modular Workstream Cassettes with 3D Depth */}
                    <div className="space-y-3">
                      {/* Workstream 01 */}
                      <div className="cassette-3d flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-50 border border-pink-200 text-[#FA0F9C] font-mono text-xs font-black shadow-xs mt-0.5">
                          01
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold text-black leading-snug">
                              We Handle Portals &amp; Paperwork
                            </h4>
                            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md hidden sm:inline shadow-2xs">
                              Zero Dev Bandwidth
                            </span>
                          </div>
                          <p className="text-sm sm:text-[14.5px] text-black font-medium mt-1 leading-relaxed">
                            Zero developer homework. We set up taxonomy, complete portal verification, and ensure your listing is 100% transacting-ready.
                          </p>
                        </div>
                      </div>

                      {/* Workstream 02 */}
                      <div className="cassette-3d flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-50 border border-sky-200 text-[#008BF8] font-mono text-xs font-black shadow-xs mt-0.5">
                          02
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold text-black leading-snug">
                              We Connect With Cloud Sales Reps
                            </h4>
                            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md hidden sm:inline shadow-2xs">
                              Weekly ACE Sync
                            </span>
                          </div>
                          <p className="text-sm sm:text-[14.5px] text-black font-medium mt-1 leading-relaxed">
                            We register deals weekly in ACE and Partner Center, reach out directly to cloud account reps, and get them pitching your solution.
                          </p>
                        </div>
                      </div>

                      {/* Workstream 03 */}
                      <div className="cassette-3d flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-50 border border-pink-200 text-[#FA0F9C] font-mono text-xs font-black shadow-xs mt-0.5">
                          03
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold text-black leading-snug">
                              We Close Custom Enterprise Deals
                            </h4>
                            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md hidden sm:inline shadow-2xs">
                              EDP / MACC Drawdown
                            </span>
                          </div>
                          <p className="text-sm sm:text-[14.5px] text-black font-medium mt-1 leading-relaxed">
                            We package Custom Private Offers (CPPOs) so enterprise buyers purchase using their pre-committed cloud spend commitments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── STEP 04: THE OUTCOME (FULL 3D MESSAGE BUBBLE · NO LINE AFTER THIS) ── */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                {/* 3D Extruded Brand Blue Node (FINAL NODE - NO LINE BENEATH IT) */}
                <div className="node-3d relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ring-4 ring-sky-50 text-[#008BF8]">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#008BF8]" />
                </div>

                {/* 3D Extruded Message Bubble Card */}
                <div className="bubble-3d-card relative z-10 flex-1 rounded-2xl rounded-tl-xs p-5 sm:p-6">
                  {/* 3D Bubble pointer notch matching the physical bevel */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[8px] top-5 h-4 w-4 rotate-45 border-l border-b border-slate-300 bg-white shadow-[-3px_3px_5px_rgba(15,23,42,0.06)]"
                  />
                  <div className="relative z-10">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#008BF8]">
                      STAGE 04 · THE OUTCOME
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mt-1">
                      Predictable Revenue &amp; Claimed MDF
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Active co-sell pipeline, signed enterprise private offers, and claimed hyperscaler co-sell grant funding.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                      <div className="cassette-3d flex items-center gap-2 p-3 rounded-xl text-xs font-bold text-slate-900">
                        <CheckCircle2 className="h-4 w-4 text-[#008BF8] shrink-0" />
                        <span>Enterprise Deals</span>
                      </div>
                      <div className="cassette-3d flex items-center gap-2 p-3 rounded-xl text-xs font-bold text-slate-900">
                        <CheckCircle2 className="h-4 w-4 text-[#008BF8] shrink-0" />
                        <span>Co-Sell Pipeline</span>
                      </div>
                      <div className="cassette-3d flex items-center gap-2 p-3 rounded-xl text-xs font-bold text-slate-900">
                        <CheckCircle2 className="h-4 w-4 text-[#008BF8] shrink-0" />
                        <span>Claimed MDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
