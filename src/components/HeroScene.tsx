"use client";

import Image from "next/image";

export default function HeroScene() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-4xl perspective-scene animate-rise animate-rise-delay-4">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[80%] -translate-x-1/2 -translate-y-1/4 rounded-full bg-sky-500/20 blur-[80px] orbit-glow" />
      <div
        className="absolute left-1/3 top-1/3 -z-10 h-[180px] w-[40%] rounded-full bg-pink-500/15 blur-[60px] orbit-glow"
        style={{ animationDelay: "-2s" }}
      />

      <div className="preserve-3d relative mx-auto h-[300px] sm:h-[360px]">
        <div className="hero-stage absolute inset-x-4 bottom-2 top-10 sm:inset-x-10 sm:top-8">
          {/* Back plate */}
          <div className="absolute inset-0 depth-float-slow">
            <div className="hero-stage-panel glass-strong absolute inset-0 rounded-3xl" />
          </div>

          {/* Pipeline panel */}
          <div className="absolute -left-1 top-4 w-[58%] depth-float sm:left-2 sm:top-6">
            <div
              className="hero-stage-panel glass rounded-2xl p-4 sm:p-5"
              style={{ transform: "translateZ(48px) rotateY(6deg)" }}
            >
              <div className="relative z-10 mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300/90">
                  Co-Sell Pipeline
                </span>
                <span className="rounded-md border border-emerald-400/20 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  Live
                </span>
              </div>
              <div className="relative z-10 space-y-2.5">
                {[
                  { label: "AWS Marketplace", w: "88%", color: "from-amber-400 to-amber-500" },
                  { label: "Azure Private Offers", w: "72%", color: "from-sky-400 to-sky-500" },
                  { label: "GCP Partner Advantage", w: "61%", color: "from-emerald-400 to-emerald-500" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex justify-between text-[10px] text-slate-300">
                      <span>{row.label}</span>
                      <span className="text-slate-400">{row.w}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
                        style={{ width: row.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Velocity panel */}
          <div className="absolute -right-1 top-14 w-[46%] depth-float-delay sm:right-4 sm:top-10">
            <div
              className="hero-stage-panel glass rounded-2xl p-4 sm:p-5"
              style={{ transform: "translateZ(72px) rotateY(-8deg)" }}
            >
              <div className="relative z-10 mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-pink-300/90">
                Listing Velocity
              </div>
              <div className="relative z-10 font-display text-3xl font-bold text-white sm:text-4xl">
                7 Days
              </div>
              <p className="relative z-10 mt-1 text-[11px] leading-relaxed text-slate-400">
                SOW → live marketplace listing
              </p>
              <div className="relative z-10 mt-4 flex -space-x-2">
                {["/aws-logo.png", "/azure-logo.png", "/gcp-logo.png"].map((src) => (
                  <div
                    key={src}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#0A1224]/90 p-1.5 shadow-lg"
                  >
                    <Image src={src} alt="" width={20} height={20} className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orbs */}
          <div className="absolute -right-2 -top-2 depth-float sm:-right-4 sm:-top-4">
            <div
              className="orb-3d h-14 w-14 sm:h-16 sm:w-16"
              style={{ transform: "translateZ(96px)" }}
            />
          </div>
          <div className="absolute -bottom-1 left-[42%] depth-float-delay">
            <div
              className="orb-3d-pink h-10 w-10 sm:h-12 sm:w-12"
              style={{ transform: "translateZ(110px)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
