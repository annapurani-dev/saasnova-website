/** Clean, architectural backdrop matching reference saasnova.ai: crisp white base with localized brand blue and pink gradient glows */
export default function SiteBackdrop() {
  return (
    <div
      aria-hidden
      className="site-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* ── Base crisp white canvas ── */}
      <div className="absolute inset-0 bg-white" />

      {/* ── Localized Brand Pink & Blue Gradient Glows (Matching Reference) ── */}
      {/* Top-Left SaaSNova Blue Glow (behind headline) */}
      <div className="absolute -top-[5%] left-[5%] w-[55vw] max-w-[700px] h-[550px] rounded-full bg-gradient-to-br from-[#008BF8]/22 via-[#008BF8]/10 to-transparent blur-[110px]" />

      {/* Top-Right SaaSNova Pink Glow (behind video card) */}
      <div className="absolute top-[2%] right-[5%] w-[50vw] max-w-[650px] h-[550px] rounded-full bg-gradient-to-bl from-[#FA0F9C]/25 via-[#C026D3]/12 to-transparent blur-[110px]" />

      {/* Mid-Left Blue/Violet Ambient Accent */}
      <div className="absolute top-[45%] -left-[5%] w-[45vw] max-w-[600px] h-[500px] rounded-full bg-gradient-to-tr from-[#008BF8]/18 via-[#7C3AED]/10 to-transparent blur-[120px]" />

      {/* Mid-Right Pink Ambient Accent */}
      <div className="absolute top-[52%] -right-[5%] w-[45vw] max-w-[600px] h-[500px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/20 via-[#FA0F9C]/8 to-transparent blur-[120px]" />

      {/* Bottom Soft Diffuse Glow */}
      <div className="absolute bottom-[2%] left-[20%] w-[60vw] max-w-[800px] h-[450px] rounded-full bg-gradient-to-t from-[#008BF8]/15 via-[#FA0F9C]/12 to-transparent blur-[120px]" />

      {/* ── Complete Architectural Checkboxes Grid Pattern ── */}
      <div className="absolute inset-0 bg-grid-checks opacity-80" />
    </div>
  );
}
