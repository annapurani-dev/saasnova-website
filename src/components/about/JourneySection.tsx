"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function JourneySection() {
  return (
    <section
      id="journey"
      data-nav-title="The SaaSNova Story"
      data-nav-subtitle="How We Started & Scaled"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-transparent border-b border-slate-200/60 scroll-mt-24 select-none"
    >
      {/* ── Scoped 3D Tactile Elevation Classes (Unified Brand Blue) ── */}
      <style>{`
        /* ── 3D Physical Extruded Message Bubble Card ── */
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
            0 14px 28px -4px rgba(15, 23, 42, 0.1),
            0 20px 40px -8px rgba(0, 139, 248, 0.12);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease;
        }
        .bubble-3d-card:hover {
          transform: translateY(-3px);
          border-bottom-color: #94a3b8;
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 2px 0 #d4dde9,
            0 4px 0 #b1c0d5,
            0 18px 36px -6px rgba(15, 23, 42, 0.15),
            0 28px 56px -10px rgba(0, 139, 248, 0.18);
        }

        /* ── 3D Pedestal Node Badge (Replacing Icon/Logo with Section Heading) ── */
        .node-3d-badge {
          background: #ffffff;
          border: 2px solid #7dd3fc;
          border-top: 2px solid #ffffff;
          border-bottom: 3.5px solid #38bdf8;
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 4px 14px rgba(0, 139, 248, 0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .node-3d-badge:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow:
            inset 0 2px 1px rgba(255, 255, 255, 1),
            0 8px 22px rgba(0, 139, 248, 0.3);
        }
      `}</style>

      {/* ── Ambient Studio Lighting (Unified Brand Blue) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-[#008BF8]/7 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[600px] h-[400px] rounded-full bg-[#008BF8]/5 blur-[140px]"
      />

      <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto max-w-6xl w-full">
        
        {/* ════════════════════════════════════════════════════════════════════════════
            2-COLUMN ARCHITECTURAL SPREAD (STICKY SCROLL EFFECT LIKE HOMEPAGE)
            Left: Sticky Solid Title & Authentic Thesis (Pins while right scrolls)
            Right: 3-Stage Connected 3D Track in Unified Brand Blue
            ════════════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── LEFT COLUMN (5 cols): Sticky Headline & Authentic Thesis ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 text-left">
            {/* Solid Clean Headline (No Gradient Text, No Eyebrow Pill) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.14]">
              The SaaSNova Story
            </h2>

            {/* Authentic Subtitle from Original Site */}
            <p className="text-lg sm:text-xl font-bold text-slate-700 tracking-tight leading-snug">
              Why execution, not advice, is the only thing that produces pipeline.
            </p>

            {/* Authentic Founding Narrative from Original Site */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
              SaaSNova was founded to bridge the gap between passive listing software and high-level consultancies. We embed directly with B2B SaaS teams as boots-on-the-ground operators across AWS, Azure, and Google Cloud.
            </p>
          </div>

          {/* ── RIGHT COLUMN (7 cols): 3-Stage Connected 3D Track ── */}
          <div className="lg:col-span-7">
            <div className="space-y-8 sm:space-y-9">

              {/* ════════════════════════════════════════════════════════════════
                  STAGE 01: HOW IT STARTED
                  ════════════════════════════════════════════════════════════════ */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
                {/* Precision Segment Connector Line to Stage 02 */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute left-[75px] top-12 -bottom-9 w-[2.5px] -translate-x-1/2 bg-[#008BF8]/35 z-0 pointer-events-none"
                />

                {/* 3D Extruded Node Badge (Heading in place of Logo/Icon) */}
                <div className="node-3d-badge relative z-10 w-full sm:w-[150px] shrink-0 py-3 px-3.5 rounded-2xl ring-4 ring-sky-50 text-center flex items-center justify-center">
                  <span className="font-mono text-xs sm:text-[13px] font-black tracking-wider uppercase text-[#008BF8]">
                    How It Started
                  </span>
                </div>

                {/* 3D Extruded Message Bubble Card with Pointer Notch */}
                <div className="bubble-3d-card relative z-10 flex-1 rounded-2xl rounded-tl-xs p-5 sm:p-6 lg:p-7">
                  {/* 3D Bubble pointer notch */}
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute -left-[8px] top-5 h-4 w-4 rotate-45 border-l border-b border-slate-300 bg-white shadow-[-3px_3px_5px_rgba(15,23,42,0.06)]"
                  />

                  <div className="relative z-10 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Hyperscaler Roots
                    </h3>
                    
                    {/* Authentic Copy (Word-for-Word from Original Site) */}
                    <p className="text-sm sm:text-[15.5px] text-slate-700 leading-relaxed font-normal pt-1">
                      After years embedded in cloud ecosystems, building marketplace programs on AWS, managing ISV Accelerate motions, and developing the field relationships that drive momentum on Azure and GCP, Jen founded SaaSNova to fill a gap no platform or consultancy was filling: <strong className="text-slate-900 font-semibold">operator-led execution.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* ════════════════════════════════════════════════════════════════
                  STAGE 02: WHAT WE DO
                  ════════════════════════════════════════════════════════════════ */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
                {/* Precision Segment Connector Line to Stage 03 */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute left-[75px] top-12 -bottom-9 w-[2.5px] -translate-x-1/2 bg-[#008BF8]/35 z-0 pointer-events-none"
                />

                {/* 3D Extruded Node Badge (Heading in place of Logo/Icon) */}
                <div className="node-3d-badge relative z-10 w-full sm:w-[150px] shrink-0 py-3 px-3.5 rounded-2xl ring-4 ring-sky-50 text-center flex items-center justify-center">
                  <span className="font-mono text-xs sm:text-[13px] font-black tracking-wider uppercase text-[#008BF8]">
                    What We Do
                  </span>
                </div>

                {/* 3D Extruded Message Bubble Card with Pointer Notch */}
                <div className="bubble-3d-card relative z-10 flex-1 rounded-2xl rounded-tl-xs p-5 sm:p-6 lg:p-7">
                  {/* 3D Bubble pointer notch */}
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute -left-[8px] top-5 h-4 w-4 rotate-45 border-l border-b border-slate-300 bg-white shadow-[-3px_3px_5px_rgba(15,23,42,0.06)]"
                  />

                  <div className="relative z-10 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      The Embedded Operating Model
                    </h3>
                    
                    {/* Authentic Copy (Word-for-Word from Original Site) */}
                    <p className="text-sm sm:text-[15.5px] text-slate-700 leading-relaxed font-normal pt-1">
                      Platforms give ISVs listing infrastructure. Consultancies give ISVs frameworks. Neither drives field enablement, activates partner programs, or unlocks marketplace momentum. SaaSNova does all of it, directly, as an embedded operator with <strong className="text-slate-900 font-semibold">clear deliverables in every program period.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* ════════════════════════════════════════════════════════════════
                  STAGE 03: HOW WE ARE NOW
                  ════════════════════════════════════════════════════════════════ */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
                {/* 3D Extruded Node Badge (Heading in place of Logo/Icon) */}
                <div className="node-3d-badge relative z-10 w-full sm:w-[150px] shrink-0 py-3 px-3.5 rounded-2xl ring-4 ring-sky-50 text-center flex items-center justify-center">
                  <span className="font-mono text-xs sm:text-[13px] font-black tracking-wider uppercase text-[#008BF8]">
                    How We Are Now
                  </span>
                </div>

                {/* 3D Extruded Message Bubble Card with Pointer Notch */}
                <div className="bubble-3d-card relative z-10 flex-1 rounded-2xl rounded-tl-xs p-5 sm:p-6 lg:p-7">
                  {/* 3D Bubble pointer notch */}
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute -left-[8px] top-5 h-4 w-4 rotate-45 border-l border-b border-slate-300 bg-white shadow-[-3px_3px_5px_rgba(15,23,42,0.06)]"
                  />

                  <div className="relative z-10 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Global Operating Bench &amp; 100+ ISVs
                    </h3>
                    
                    {/* Authentic Verified Data (Word-for-Word from Original Site Data) */}
                    <p className="text-sm sm:text-[15.5px] text-slate-700 leading-relaxed font-normal pt-1">
                      Today, SaaSNova operates as a global bench of practitioners across the US, LATAM, MEA, and APAC. We embed directly with B2B SaaS teams to activate field relationships, drive marketplace momentum, and deliver <strong className="text-slate-900 font-semibold">board-ready pipeline evidence for 100+ enterprise software companies</strong> across AWS, Azure, and Google Cloud.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </ScrollReveal>

      {/* ── Precision Horizon Line Connecting to Founder Section ── */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none z-20" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008BF8]/50 via-[#008BF8]/30 to-transparent opacity-80" />
      </div>
    </section>
  );
}
