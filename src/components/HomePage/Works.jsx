import React from "react";
import Custom_Container from "../common/CustomContainer";
import SubHeading from "../common/SubHeading";
import Heading from "../common/Heading";
import Description from "../common/Description";
import projects from "../Hock/projects";
import Work from "./Work";
// import Particles from "../ui/particles";

export default function Works() {
    const works = projects;
  return (
    <>
      {" "}
      {/* <Particles quantity={150} size={0.5} /> */}
      <div className="py-20">
        <Custom_Container>
          <div className="">
            <div className="flex justify-between items-center">
              <div>
                <SubHeading>Our Services</SubHeading>
                <Heading>What We Do</Heading>
              </div>
              <div>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br className="" /> lor dolore
                </Description>
              </div>
            </div>
          </div>
          {works?.map((work, i) => (
            <Work key={i} work={work} />
          ))}
        </Custom_Container>
      </div>
    </>
  );
}
