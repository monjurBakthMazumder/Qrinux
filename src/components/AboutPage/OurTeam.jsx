import React from "react";
import Custom_Container from "../common/CustomContainer";
import SubHeading from "../common/SubHeading";
import Heading from "../common/Heading";
import Card from "./Card";
import team from "../Hock/team";

export default function OurTeam() {
  const MyTeam = team;
  return (
    <div className="py-12 sm:py-14 lg:py-16 2xl:py-20 text-center bg-primary">
      <Custom_Container>
        <SubHeading>OurTeam</SubHeading>
        <Heading>Who We Are</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-start pt-6 sm:pt-7 lg:pt-8 2xl:pt-10">
          {MyTeam?.map((team) => (
            <Card key={team?._id} team={team} />
          ))}
        </div>
      </Custom_Container>
    </div>
  );
}
