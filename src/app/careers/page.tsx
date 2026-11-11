"use client";

import { useCallback } from "react";
import CareersHeroSection from "@/components/careers/CareersHeroSection";
import CareersCultureSection from "@/components/careers/CareersCultureSection";
import OpenRolesSection from "@/components/careers/OpenRolesSection";
import { useSolutionHashNavigation } from "@/lib/scrollNavigation";

const CAREERS_HASH_IDS = [
  "careers-hero",
  "culture",
  "open-roles",
  "open-application",
] as const;

export default function CareersPage() {
  const handleSectionSelect = useCallback(() => {}, []);
  useSolutionHashNavigation(CAREERS_HASH_IDS, handleSectionSelect);

  return (
    <div className="relative text-slate-900 overflow-x-clip pb-8">
      <CareersHeroSection />
      <CareersCultureSection />
      <OpenRolesSection />
    </div>
  );
}
