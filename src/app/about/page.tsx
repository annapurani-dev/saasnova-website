"use client";

import { useCallback } from "react";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import FounderProfileSection from "@/components/about/FounderProfileSection";
import CompanyStarsSection from "@/components/about/CompanyStarsSection";
import AboutClientsSection from "@/components/about/AboutClientsSection";
import { useSolutionHashNavigation } from "@/lib/scrollNavigation";

const ABOUT_HASH_IDS = ["about-hero", "founder", "stars", "clients"] as const;

export default function AboutPage() {
  const handleSectionSelect = useCallback(() => {}, []);
  useSolutionHashNavigation(ABOUT_HASH_IDS, handleSectionSelect);

  return (
    <div className="relative text-slate-900 overflow-x-clip pb-12">
      <AboutHeroSection />
      <FounderProfileSection />
      <CompanyStarsSection />
      <AboutClientsSection />
    </div>
  );
}
