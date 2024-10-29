"use client";

import { useState } from "react";
import Custom_Container from "../common/CustomContainer";
import WhyChoseUs from "./WhyChoseUs";
import OurServices from "./OurServices";
import HowWeWork from "./HowWeWork";

export default function CommonInfoMobile() {
  const [show, setShow] = useState("whyChooseUs");

  return (
    <div className="py-12 sm:py-14 lg:py-16 2xl:py-20 bg-secondary text-white">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col sm:flex-row lg:flex-col text-[32px] font-teko font-semibold">
            <h1>Why Choose Us </h1>
            <WhyChoseUs />
            <h1>How We Work </h1>
            <HowWeWork />
            <h1>Our Services </h1>
            <OurServices />
          </div>
        </div>
      </Custom_Container>
    </div>
  );
}
