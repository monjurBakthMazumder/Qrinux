import AboutUs from "@/components/HomePage/AboutUs";
import Contact from "@/components/HomePage/Contact";
import Hero from "@/components/HomePage/Hero";
import OurClients from "@/components/HomePage/OurClients";
import ProjectsImagesCarousel from "@/components/HomePage/ProjectsImagesCarousel";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import Works from "@/components/HomePage/Works";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import React from "react";
const Home = () => {
  return (
    <main>
      {/* <Hero/> */}
      {/* <WhatWeDo /> */}
      {/* <Works/> */}
      {/* <AboutUs/> */}
      {/* <ProjectsImagesCarousel/> */}
      <OurClients/>
      <div className="py-20 bg-primary overflow-x-hidden">
        <div className="text-primary font-semibold font-teko bg-white text-6xl py-5 -rotate-2 ">
          <VelocityScroll
            text="web design | UI UX | Wordpress | SEO | Android App | web design | UI UX | Wordpress | SEO | Android App | web design | UI UX | Wordpress |
          SEO | Android App |"
            default_velocity={2}
            className=""
          />
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default Home;
