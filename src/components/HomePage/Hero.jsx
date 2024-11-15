import React from "react";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import IconCloudDemo from "../ui/icon-cloud";
// import IconCloudDemo from "../ui/icon-cloud";
export default function Hero() {
  return (
    <Custom_Container>
      <div className="flex flex-col lg:flex-row gap-10 my-12 sm:my-14 lg:my-16 2xl:my-20">
        <div className="flex-1">
          <Heading>
            Your Vision, Our Tech,
            <br />
            Endless Possibilities
          </Heading>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Description>
          <Button className="bg-warning px-5 py-2 text-white text-lg font-semibold font-jost relative overflow-hidden group">
            <span className="flex items-center gap-3 transition-all duration-300 ease-in-out transform  ">
              Let’s Talk
              <FaArrowRightLong className="transition-all duration-500 ease-in-out transform  group-hover:rotate-45" />
            </span>

            {/* Animated background effect */}
            <div className="absolute inset-0 bg-blue-500 scale-0 transition-transform duration-500 ease-in-out  rounded-lg opacity-10"></div>
          </Button>
        </div>
        <div className="flex-1">
          <IconCloudDemo />
        </div>
      </div>
    </Custom_Container>
  );
}
