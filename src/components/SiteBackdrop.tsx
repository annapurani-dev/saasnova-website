/** Clean architectural backdrop aligned with SaaSNova brand palette (#FFFFFF base, #008BF8 Blue, #FA0F9C Pink). */
export default function SiteBackdrop() {
  return (
    <div
      aria-hidden
      className="site-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base crisp white canvas */}
      <div className="absolute inset-0 bg-white" />

      {/* Localized Brand Blue & Pink Ambient Glows */}
      <div className="absolute -top-[6%] left-[6%] h-[520px] w-[52vw] max-w-[680px] rounded-full bg-gradient-to-br from-[#008BF8]/16 via-[#008BF8]/6 to-transparent blur-[110px]" />
      <div className="absolute top-[2%] right-[6%] h-[500px] w-[48vw] max-w-[620px] rounded-full bg-gradient-to-bl from-[#FA0F9C]/14 via-[#FA0F9C]/5 to-transparent blur-[110px]" />
      <div className="absolute top-[35%] -left-[6%] h-[520px] w-[46vw] max-w-[600px] rounded-full bg-gradient-to-tr from-[#008BF8]/14 via-[#008BF8]/5 to-transparent blur-[120px]" />
      <div className="absolute top-[42%] -right-[6%] h-[520px] w-[46vw] max-w-[600px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/14 via-[#FA0F9C]/5 to-transparent blur-[120px]" />
      <div className="absolute top-[70%] left-[8%] h-[480px] w-[44vw] max-w-[560px] rounded-full bg-gradient-to-tr from-[#008BF8]/12 to-transparent blur-[120px]" />
      <div className="absolute top-[78%] right-[8%] h-[480px] w-[44vw] max-w-[560px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/12 to-transparent blur-[120px]" />

      {/* Subtle architectural grid checks matching homepage */}
      <div className="absolute inset-0 bg-grid-checks opacity-65" />
    </div>
  );
}
