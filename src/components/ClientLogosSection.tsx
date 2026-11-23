"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CLIENT_LOGOS = [
  { name: "New Relic", src: "/newrelic.svg" },
  { name: "Druva", src: "/Druva_Logo_tagline_Color.svg" },
  { name: "Freshworks", src: "/freshworks-logo-png.png" },
  { name: "Postman", src: "/postman.svg" },
  { name: "HashiCorp", src: "/hashicorp-ar21.svg" },
  { name: "Arctic Wolf", src: "/arcticwolf.png" },
  { name: "ClickHouse", src: "/clickhouse-1.svg" },
  { name: "ZoomInfo", src: "/zoominfo.svg" },
  { name: "Safe", src: "/safe.svg" },
  { name: "Denodo", src: "/denodo.svg" },
  { name: "Jamf", src: "/jamf.png" },
];

const REPEATED_LOGOS = [
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
];

export default function ClientLogosSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    const ITEM_WIDTH = 250;
    const LOOP_WIDTH = CLIENT_LOGOS.length * ITEM_WIDTH;
    const BASE_SPEED = 0.75;

    const updateMarquee = () => {
      const container = containerRef.current;
      if (!container) return;

      if (!isHoveredRef.current) {
        offsetRef.current += BASE_SPEED;
        if (offsetRef.current >= LOOP_WIDTH) {
          offsetRef.current -= LOOP_WIDTH;
        }
      }

      itemsRef.current.forEach((el, index) => {
        if (!el) return;
        const x = index * ITEM_WIDTH - offsetRef.current;
        el.style.transform = `translate3d(${x}px, -50%, 0)`;
        el.style.opacity = "1";
      });

      animationFrameId = requestAnimationFrame(updateMarquee);
    };

    animationFrameId = requestAnimationFrame(updateMarquee);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto w-full select-none space-y-3 sm:space-y-3.5">
      {/* ── Solid Premium Authority Headline with Sleek Wings (No Distracting Gradient) ── */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 px-4 text-center">
        <div className="h-px w-8 sm:w-20 bg-gradient-to-r from-transparent via-slate-300 to-slate-400" />
        <h2 className="text-xs sm:text-sm lg:text-[15px] font-bold uppercase tracking-[0.16em] text-slate-800 font-display">
          Trusted by 100+ SaaS ISVs Scaling with Hyperscalers
        </h2>
        <div className="h-px w-8 sm:w-20 bg-gradient-to-l from-transparent via-slate-300 to-slate-400" />
      </div>

      {/* ── Full-Width Symmetrical Logo Marquee Stadium Plinth ── */}
      <div
        className="relative flex items-center overflow-hidden rounded-full border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] py-2 sm:py-2.5 px-4"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
      >
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-28 rounded-l-full bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-28 rounded-r-full bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div ref={containerRef} className="relative h-14 sm:h-16 w-full overflow-hidden select-none">
          {REPEATED_LOGOS.map((client, idx) => (
            <div
              key={`logo-${client.name}-${idx}`}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: 220,
                willChange: "transform, opacity",
              }}
              className="flex items-center justify-center"
            >
              {/* Symmetrical Logo Capsule */}
              <div className="flex h-[46px] w-[170px] items-center justify-center rounded-full border border-slate-200/80 bg-[#F8FAFC]/90 px-4 shadow-2xs transition-all hover:bg-white hover:border-slate-300 hover:shadow-xs">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={150}
                  height={36}
                  style={{ width: "auto", height: "auto" }}
                  className={`object-contain transition-transform ${
                    client.name === "Arctic Wolf"
                      ? "max-h-8 sm:max-h-9 scale-125"
                      : client.name === "Postman"
                      ? "max-h-5 sm:max-h-6"
                      : "max-h-6 sm:max-h-7 max-w-[85%]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
