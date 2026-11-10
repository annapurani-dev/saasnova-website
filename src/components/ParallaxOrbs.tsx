"use client";

import { useEffect, useRef } from "react";

/** Soft parallax on hero glow orbs as the page scrolls */
export default function ParallaxOrbs() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.setProperty("--py", `${Math.min(y * 0.18, 120)}px`);
        el.style.setProperty("--py2", `${Math.min(y * 0.1, 70)}px`);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrap} className="pointer-events-none absolute inset-0 -z-10 parallax-orbs">
      <div className="absolute top-[12%] left-[8%] h-72 w-72 rounded-full bg-sky-500/20 blur-[100px] orbit-glow parallax-layer-a" />
      <div
        className="absolute top-[30%] right-[5%] h-64 w-64 rounded-full bg-pink-500/16 blur-[90px] orbit-glow parallax-layer-b"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute bottom-[10%] left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[80px] parallax-layer-a" />
    </div>
  );
}
