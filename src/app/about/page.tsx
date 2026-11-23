"use client";

import { useCallback } from "react";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import JourneySection from "@/components/about/JourneySection";
import FounderProfileSection from "@/components/about/FounderProfileSection";
import CompanyStarsSection from "@/components/about/CompanyStarsSection";
import AboutClientsSection from "@/components/about/AboutClientsSection";
import AboutPhilosophySection from "@/components/about/AboutPhilosophySection";
import { useSolutionHashNavigation } from "@/lib/scrollNavigation";

const ABOUT_HASH_IDS = ["about-hero", "journey", "founder", "stars", "clients", "philosophy"] as const;

export default function AboutPage() {
  const handleSectionSelect = useCallback(() => {}, []);
  useSolutionHashNavigation(ABOUT_HASH_IDS, handleSectionSelect);

  return (
    <div className="relative text-slate-900 overflow-x-clip">
      <AboutHeroSection />
      <JourneySection />
      <FounderProfileSection />
      <CompanyStarsSection />
      <AboutClientsSection />
      <AboutPhilosophySection />
    </div>
  );
}