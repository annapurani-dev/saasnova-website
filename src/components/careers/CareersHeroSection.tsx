"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function CareersHeroSection() {
  return (
    <section
      id="careers-hero"
      data-nav-title="Careers"
      data-nav-subtitle="Operator Culture"
      className="relative px-4 sm:px-6 lg:px-8 min-h-[640px] lg:min-h-[700px] flex flex-col justify-center -mt-[60px] sm:-mt-[62px] pt-[86px] sm:pt-[96px] pb-12 sm:pb-16 overflow-hidden scroll-mt-28 lg:scroll-mt-32 select-none"
    >
      {/* ── Atmospheric Radial Floor Light beneath the Floating Stage ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[950px] lg:w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,139,248,0.18)_0%,rgba(186,230,253,0.25)_35%,rgba(250,15,156,0.06)_65%,transparent_80%)] blur-[90px]"
      />

      <ScrollReveal once={false} variant="up" className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="relative mx-auto w-full">
          
          {/* ════════════════════════════════════════════════════════════════════════════
              TRUE 3D ELEVATED ASYMMETRICAL STAGE (HIGH POP-OUT DEPTH)
              Uniform size & footprint across both About and Careers pages
              ════════════════════════════════════════════════════════════════════════════ */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #BAE6FD 0%, #CEEAFE 30%, #E2F2FE 60%, #EDF6FE 85%, #F2F8FE 100%)",
              boxShadow:
                "0 35px 75px -15px rgba(15, 23, 42, 0.18), 0 18px 38px -10px rgba(0, 139, 248, 0.22), 0 4px 12px rgba(15, 23, 42, 0.06), inset 0 2px 1px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(0, 139, 248, 0.12)",
            }}
            className="relative overflow-hidden rounded-tl-[68px] sm:rounded-tl-[80px] rounded-br-[68px] sm:rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] px-6 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-12"
          >
            
            {/* Specular Ambient Glow inside Stage */}
            <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[260px] rounded-full bg-white/60 blur-[70px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-[460px] h-[300px] rounded-full bg-[#008BF8]/20 blur-[100px]" />

            <div className="relative z-10 space-y-6 sm:space-y-7">
              
              {/* ── Headline & Narrative Header ── */}
              <div className="space-y-2.5 sm:space-y-3 text-center max-w-3xl mx-auto">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-sky-300/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008BF8]" />
                  <span>Careers at SaaSNova</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.12]">
                  Where high-velocity operators{" "}
                  <span className="text-gradient">build real pipeline.</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
                  Zero decks. Zero red tape. Just high-ownership operators driving direct co-sell and Marketplace revenue across AWS, Azure, and Google Cloud.
                </p>
              </div>

              {/* ════════════════════════════════════════════════════════════════════════
                  HYBRID OPERATOR CONSOLE PLINTH (FLOATING TIER 2)
                  Pure crisp white plinth popping in 3D off the sky-blue stage.
                  ════════════════════════════════════════════════════════════════════════ */}
              <div
                id="culture"
                data-nav-title="Why Build Here"
                data-nav-subtitle="Operator Culture"
                style={{
                  boxShadow:
                    "0 14px 32px -6px rgba(0, 139, 248, 0.15), 0 4px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 1)",
                }}
                className="rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-1.5 sm:p-2.5">
                  
                  {/* Bay 01: Remote & Flexible */}
                  <div className="px-5 py-4 sm:px-6 sm:py-4.5 rounded-xl sm:rounded-2xl hover:bg-sky-50/60 transition-colors duration-200 space-y-2 flex flex-col justify-start">
                    <div>
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-mono font-black tracking-wide text-[#008BF8] bg-sky-50 border border-sky-200 shadow-2xs">
                        01
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        Remote &amp; Flexible
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        Work from anywhere. We care about execution, pipeline velocity, and shipping revenue—not tracking hours or where you sit.
                      </p>
                    </div>
                  </div>

                  {/* Bay 02: Hyperscaler Access */}
                  <div className="px-5 py-4 sm:px-6 sm:py-4.5 rounded-xl sm:rounded-2xl hover:bg-pink-50/60 transition-colors duration-200 space-y-2 flex flex-col justify-start">
                    <div>
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-mono font-black tracking-wide text-[#FA0F9C] bg-pink-50 border border-pink-200 shadow-2xs">
                        02
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        Hyperscaler Access
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        Direct exposure to AWS, Azure, and GCP partner teams, deal cycles, ACE co-sell submissions, and Marketplace motions.
                      </p>
                    </div>
                  </div>

                  {/* Bay 03: Execution > Decks */}
                  <div className="px-5 py-4 sm:px-6 sm:py-4.5 rounded-xl sm:rounded-2xl hover:bg-sky-50/60 transition-colors duration-200 space-y-2 flex flex-col justify-start">
                    <div>
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-mono font-black tracking-wide text-[#008BF8] bg-sky-50 border border-sky-200 shadow-2xs">
                        03
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        Execution &gt; Decks
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        Work in a fast-moving setup focused on real pipeline, continuous testing, deal progression, and measurable outcomes.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Precision Horizon Gradient Line Connecting to Open Roles Section ── */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none z-30" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA0F9C]/50 via-[#008BF8]/60 to-transparent opacity-90" />
      </div>
    </section>
  );
}