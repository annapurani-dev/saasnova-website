"use client";

import { useEffect, useState } from "react";

interface NovaLiveBotProps {
  size?: number;
  isTyping?: boolean;
  isHovered?: boolean;
}

export default function NovaLiveBot({
  size = 56,
  isTyping = false,
  isHovered = false,
}: NovaLiveBotProps) {
  const [blink, setBlink] = useState(false);
  const [mouthState, setMouthState] = useState<"smile" | "open" | "happy">("smile");
  // Distinct, visible gaze positions: "center", "left", "right", "up-right", "down-left"
  const [gaze, setGaze] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 1. Natural Blinking Cycle every 3.2s
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3200);
    return () => clearInterval(blinkInterval);
  }, []);

  // 2. Visible Live Gaze Shift (noticeably shifts left, right, and center)
  useEffect(() => {
    const gazePositions = [
      { x: 0, y: 0 },       // center forward
      { x: -3.5, y: -0.5 }, // look left towards user/content
      { x: 0, y: 0 },       // center
      { x: 3.5, y: 0.5 },   // look right
      { x: -2, y: -2 },     // look up thoughtfully
      { x: 0, y: 0 },       // center
    ];
    let step = 0;
    const lookInterval = setInterval(() => {
      step = (step + 1) % gazePositions.length;
      setGaze(gazePositions[step]);
    }, 2400);
    return () => clearInterval(lookInterval);
  }, []);

  // 3. Mouth moves ONLY when the bot answers (isTyping is true)
  useEffect(() => {
    if (!isTyping) {
      setMouthState("smile");
      return;
    }

    // Dynamic speaking animation while answering
    const talkInterval = setInterval(() => {
      setMouthState((prev) => (prev === "smile" ? "open" : "smile"));
    }, 170);

    return () => clearInterval(talkInterval);
  }, [isTyping]);

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center select-none pointer-events-none transition-transform duration-300 ${
        isHovered ? "rotate-[-6deg] scale-105" : "rotate-0 scale-100"
      }`}
    >
      {/* ─── Suggestion 2: Active Audio Waveform Antenna when typing ─── */}
      {isTyping && (
        <div className="absolute -top-3 flex items-center gap-0.5 z-20">
          <span className="w-1 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1 h-4 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      )}

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible drop-shadow-md"
      >
        <defs>
          {/* SaaSNova Brand Blue to Pink Gradient */}
          <linearGradient id="botBluePink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#008BF8" />
            <stop offset="100%" stopColor="#FA0F9C" />
          </linearGradient>

          <linearGradient id="botPinkBlue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FA0F9C" />
            <stop offset="100%" stopColor="#008BF8" />
          </linearGradient>

          {/* Deep Visor Glass */}
          <radialGradient id="visorGlass" cx="50%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          {/* Ceramic White Shell Shading */}
          <radialGradient id="shellShading" cx="45%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F8FAFC" />
            <stop offset="95%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </radialGradient>

          {/* Outer Mascot Ambient Bloom/Silhouette Shadow */}
          <filter id="botSilhouette" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.28" />
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#008BF8" floodOpacity="0.3" />
          </filter>

          {/* Soft Cyan Bloom for Eyes */}
          <filter id="eyeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ─── Mascot Base Outer Silhouette Shadow Layer ─── */}
        <g filter="url(#botSilhouette)">
          {/* Headset Arch */}
          <path
            d="M 16 50 C 16 18, 84 18, 84 50"
            fill="none"
            stroke="url(#botBluePink)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Glowing Left Ear Cup (Blue) */}
          <rect x="8" y="37" width="10" height="26" rx="5" fill="url(#botPinkBlue)" />
          <rect x="10.5" y="41" width="5" height="18" rx="2.5" fill="#008BF8" />

          {/* Glowing Right Ear Cup (Pink) */}
          <rect x="82" y="37" width="10" height="26" rx="5" fill="url(#botBluePink)" />
          <rect x="84.5" y="41" width="5" height="18" rx="2.5" fill="#FA0F9C" />

          {/* White Ceramic Helmet Shell with Dark/Prismatic Border */}
          <rect
            x="16"
            y="20"
            width="68"
            height="62"
            rx="28"
            fill="url(#shellShading)"
            stroke="#64748B"
            strokeWidth="1.75"
          />
        </g>

        {/* ─── Forehead 4-Point Star Emblem (Blue & Pink Gradient) ─── */}
        <g transform="translate(50, 29) scale(0.68)">
          <path
            d="M 0 -11 L 3 -3 L 11 0 L 3 3 L 0 11 L -3 3 L -11 0 L -3 -3 Z"
            fill="url(#botBluePink)"
          />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>

        {/* ─── Dark Visor Face ─── */}
        <rect
          x="24"
          y="37"
          width="52"
          height="37"
          rx="15"
          fill="url(#visorGlass)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />

        {/* Curved Specular Reflection across Visor */}
        <path
          d="M 28 41 Q 50 39 72 41"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* ─── Cute Round Big Anime Eyes with Live Gaze Movement ─── */}
        <g
          transform={`translate(${gaze.x}, ${gaze.y})`}
          style={{ transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
        >
          {/* Left Eye */}
          {blink ? (
            /* Blinking smooth horizontal slit */
            <line
              x1="33"
              y1="52"
              x2="45"
              y2="52"
              stroke="#38BDF8"
              strokeWidth="2.8"
              strokeLinecap="round"
              filter="url(#eyeGlow)"
            />
          ) : (
            <g>
              {/* Outer Cyan Iris */}
              <circle
                cx="39"
                cy="51.5"
                r="6.8"
                fill="#38BDF8"
                filter="url(#eyeGlow)"
              />
              {/* Deep Pupil */}
              <circle cx="39" cy="51.5" r="4.2" fill="#0284C7" />
              {/* Big Anime Catchlight sparkle (Top-Right) */}
              <circle cx="37" cy="49.5" r="2.2" fill="#FFFFFF" />
              {/* Secondary Catchlight twinkle (Bottom-Left) */}
              <circle cx="41.5" cy="53.5" r="1.1" fill="#FFFFFF" />
            </g>
          )}

          {/* Right Eye */}
          {blink ? (
            /* Blinking smooth horizontal slit */
            <line
              x1="55"
              y1="52"
              x2="67"
              y2="52"
              stroke="#38BDF8"
              strokeWidth="2.8"
              strokeLinecap="round"
              filter="url(#eyeGlow)"
            />
          ) : (
            <g>
              {/* Outer Cyan Iris */}
              <circle
                cx="61"
                cy="51.5"
                r="6.8"
                fill="#38BDF8"
                filter="url(#eyeGlow)"
              />
              {/* Deep Pupil */}
              <circle cx="61" cy="51.5" r="4.2" fill="#0284C7" />
              {/* Big Anime Catchlight sparkle (Top-Right) */}
              <circle cx="59" cy="49.5" r="2.2" fill="#FFFFFF" />
              {/* Secondary Catchlight twinkle (Bottom-Left) */}
              <circle cx="63.5" cy="53.5" r="1.1" fill="#FFFFFF" />
            </g>
          )}
        </g>

        {/* ─── Cute Speaking / Smiling Mouth ─── */}
        {mouthState === "smile" && (
          <path
            d="M 44 64 Q 50 68 56 64"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#eyeGlow)"
          />
        )}

        {mouthState === "open" && (
          <ellipse
            cx="50"
            cy="64.5"
            rx="4"
            ry="2.8"
            fill="#38BDF8"
            filter="url(#eyeGlow)"
          />
        )}

        {mouthState === "happy" && (
          <path
            d="M 44 63.5 Q 50 69 56 63.5 Z"
            fill="#38BDF8"
            filter="url(#eyeGlow)"
          />
        )}

        {/* ─── Soft Cheek Blush Dots (Pink) ─── */}
        <circle cx="30" cy="61" r="2.6" fill="rgba(250,15,156,0.65)" />
        <circle cx="70" cy="61" r="2.6" fill="rgba(250,15,156,0.65)" />
      </svg>
    </div>
  );
}
