"use client";

import { useState, useEffect } from "react";

import { ScrollToTop } from "@/components/scroll-to-top";
import { CustomCursor } from "@/components/custom-cursor";
import ContactSection from "@/containers/contact/ContactSection";
import TestimonialsSection from "@/containers/testimonials/TestimonialsSection";
import FooterSection from "@/containers/footer/FooterSection";
import ProjectSection from "@/containers/project/ProjectSection";
import SkillSection from "@/containers/skill/SkillSection";
import AboutMeSection from "@/containers/aboutMe/AboutMeSection";
import HeroSection from "@/containers/hero/HeroSection";
import HeaderSection from "@/containers/header/HeaderSection";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);

  // Fix hydration issues with theme
  useEffect(() => {
    setMounted(true);

    // Check if we should disable custom cursor by default on mobile
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0);

    if (isTouchDevice) {
      setCursorEnabled(false);
    }

    // Force a re-render after mounting to ensure theme is applied correctly
    const html = document.documentElement;
    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    if (currentTheme === "light") {
      html.classList.remove("dark");
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Custom Cursor */}
      {cursorEnabled && <CustomCursor color="#10b981" />}

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Header */}
      <HeaderSection
        cursorEnabled={cursorEnabled}
        setCursorEnabled={setCursorEnabled}
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Me Section */}
        <AboutMeSection />

        {/* Skills Section */}
        <SkillSection />

        {/* Projects Section */}
        <ProjectSection />

        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
