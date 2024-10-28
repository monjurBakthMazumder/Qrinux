import AboutSection from "@/components/AboutPage/AboutSection";
import BreadcrumbSection from "@/components/AboutPage/BreadcrumbSection";
import OurTeam from "@/components/AboutPage/OurTeam";
import React from "react";

export default function page() {
  return (
    <div className="">
      <BreadcrumbSection />
      <AboutSection />
      <OurTeam />
    </div>
  );
}
