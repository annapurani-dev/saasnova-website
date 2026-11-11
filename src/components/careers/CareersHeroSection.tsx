"use client";

export default function CareersHeroSection() {
  return (
    <section
      id="careers-hero"
      data-nav-title="Careers"
      data-nav-subtitle="Real Pipeline Execution"
      className="relative px-3 pt-4 pb-6 sm:px-6 sm:pt-5 sm:pb-8 lg:px-8 scroll-mt-28"
    >
      {/* Ambient Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl h-[300px] bg-gradient-to-b from-[#008BF8]/15 via-[#FA0F9C]/10 to-transparent blur-3xl" />

      {/* Master Dark Blue Cockpit Card */}
      <div className="card-3d-master-dark relative z-10 mx-auto w-full max-w-7xl p-[2.5px] rounded-[2.25rem] bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#FA0F9C] select-none">
        <div className="relative overflow-hidden rounded-[calc(2.25rem-2.5px)] bg-[#070D1E] px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 text-white backdrop-blur-2xl">
          {/* Top specular rim highlight & ambient glows */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 via-pink-400/90 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-gradient-to-r from-[#008BF8]/22 via-[#FA0F9C]/18 to-[#008BF8]/22 blur-[100px]" />

          {/* Hero Copy */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-slate-200 shadow-[0_3px_0_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CAREERS AT SAASNOVA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-white leading-[1.1]">
              Build GTM systems that generate{" "}
              <span className="text-gradient">real pipeline.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We don&apos;t advise, We operate. Join an execution engine driving direct co-sell and Marketplace revenue across the AWS, Azure, and GCP ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
