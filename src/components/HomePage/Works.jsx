import React from "react";
import Custom_Container from "../common/CustomContainer";
import SubHeading from "../common/SubHeading";
import Heading from "../common/Heading";
import Description from "../common/Description";
import projects from "../Hock/projects";
import Work from "./Work";
import Particles from "../ui/particles";

export default function Works() {
  const works = projects;
  return (
    <>
      {" "}
      <Particles quantity={150} size={0.5} />
      <div className=" py-12 sm:py-14 lg:py-16 2xl:py-20">
        <Custom_Container>
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="flex-1">
              <SubHeading>Our Services</SubHeading>
              <Heading>What We Do</Heading>
            </div>
            <div className="flex-1">
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, lor
                dolore
              </Description>
            </div>
          </div>
          <div className="pt-6 sm:pt-7 lg:pt-8 2xl:pt-10 flex flex-col gap-5 lg:gap-10">
            {works?.map((work, i) => (
              <Work key={i} work={work} />
            ))}
          </div>
        </Custom_Container>
      </div>
    </>
  );
}
