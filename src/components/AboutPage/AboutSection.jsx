import React from "react";
import Custom_Container from "../common/CustomContainer";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Description from "../common/Description";
import Heading from "../common/Heading";

export default function AboutSection() {
  return (
    <div>
      {" "}
      <div className="bg-primary">
        <Custom_Container>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 relative py-20 px-4 md:px-10">
            <Image
              height={500}
              width={445}
              src="/assets/images/pages/about/about-section/Rectangle 8390.png"
              alt=""
              className="md:w-2/5 h-[500px] object-cover "
            />
            <div className="md:w-3/5 lg:w-2/3  p-10 md:absolute md:m-10 left-1/4 bg-[#F7FAFF]">
              <SubHeading>About</SubHeading>
              <Heading>
                <span className="text-primary"> What Is Qrinux ?</span>
              </Heading>
              <Description>
                <span className="text-[#163359]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ui tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim koi veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea mui commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod ui tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim koi veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea mui
                </span>
              </Description>
            </div>
          </div>
        </Custom_Container>
      </div>
    </div>
  );
}
