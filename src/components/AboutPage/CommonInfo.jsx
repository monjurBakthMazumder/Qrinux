"use client";

import { useState } from "react";
import Custom_Container from "../common/CustomContainer";
import WhyChoseUs from "./WhyChoseUs";
import OurServices from "./OurServices";
import HowWeWork from "./HowWeWork";

export default function CommonInfo() {
  const [show, setShow] = useState("whyChooseUs");

  return (
    <div className="py-12 sm:py-14 lg:py-16 2xl:py-20 bg-secondary text-white">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-1 flex-col justify-between lg:justify-start sm:flex-row lg:flex-col text-[42px] lg:text-[60px] gap-5 lg:gap-0 font-teko font-semibold">
            <h1
              onClick={() => setShow("whyChooseUs")}
              className={`cursor-pointer ${
                show === "whyChooseUs" ? "text-white" : "text-[#ffffff3b]"
              }`}
            >
              Why Choose Us{" "}
            </h1>
            <h1
              onClick={() => setShow("howWeWork")}
              className={`cursor-pointer ${
                show === "howWeWork" ? "text-white" : "text-[#ffffff3b]"
              }`}
            >
              How We Work{" "}
            </h1>
            <h1
              onClick={() => setShow("ourServices")}
              className={`cursor-pointer ${
                show === "ourServices" ? "text-white" : "text-[#ffffff3b]"
              }`}
            >
              Our Services{" "}
            </h1>
          </div>
          <div className="flex flex-1 flex-col text-3xl">
            <h1 className={show === "whyChooseUs" ? `block` : `hidden`}>
              <WhyChoseUs />
            </h1>
            <h1 className={show === "howWeWork" ? `block` : `hidden`}>
               <HowWeWork/>
            </h1>
            <h1 className={show === "ourServices" ? `block` : `hidden`}>
              <OurServices />
            </h1>
          </div>
        </div>
      </Custom_Container>
    </div>
  );
}
