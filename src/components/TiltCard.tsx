"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  float?: boolean;
  variant?: "light" | "dark" | "dark-active" | "glass";
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 8,
  float = false,
  variant = "light",
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const [tilting, setTilting] = useState(false);

  const surface =
    variant === "glass"
      ? "card-3d-glass"
      : variant === "dark-active"
        ? "card-3d-dark-active"
        : variant === "dark"
          ? "card-3d-dark"
          : "card-3d";

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * intensity;
    const rx = (0.5 - y) * intensity;

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      el.style.setProperty("--lift", variant === "dark-active" ? "-10px" : "-7px");
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      el.dataset.tilting = "true";
      if (!tilting) setTilting(true);
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--lift", variant === "dark-active" ? "-8px" : "0px");
    el.dataset.tilting = "false";
    setTilting(false);
  };

  const isDark = variant === "dark" || variant === "dark-active";

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-tilting="false"
      className={`relative rounded-2xl ${surface} ${float ? "card-idle-float" : ""} ${className}`}
      style={{
        ["--rx" as string]: "0deg",
        ["--ry" as string]: "0deg",
        ["--lift" as string]: variant === "dark-active" ? "-8px" : "0px",
        ["--mx" as string]: "50%",
        ["--my" as string]: "50%",
      }}
    >
      {/* Dynamic 3D Specular Light Glaze following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: tilting ? 1 : 0,
          background: isDark
            ? "radial-gradient(380px circle at var(--mx) var(--my), rgba(255, 255, 255, 0.14), transparent 55%)"
            : "radial-gradient(380px circle at var(--mx) var(--my), rgba(255, 255, 255, 0.75), transparent 55%)",
        }}
      />
      {children}
    </div>
  );
}
