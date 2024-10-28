import React from "react";
import BreadcrumbContainer from "../common/BreadcrumbContainer";
import SmallHeading from "../common/SmallHeading";
import SmallSubHeading from "../common/SmallSubHeading";

export default function BreadcrumbSection() {
  return (
    <div>
      {" "}
      <BreadcrumbContainer>
        <SmallHeading>About Us</SmallHeading>
        <SmallSubHeading>Home / About</SmallSubHeading>
      </BreadcrumbContainer>
    </div>
  );
}
