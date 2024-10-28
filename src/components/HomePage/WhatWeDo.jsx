import Custom_Container from "../common/CustomContainer";
import Description from "../common/Description";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Card from "./Card";

const WhatWeDo = () => {
  const services = [
    {
      img: "/assets/images/pages/home/what-we-do-section/icon1.svg",
      title: "Web Design & Development",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon2.svg",
      title: "App Design & Development",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon3.svg",
      title: "Wordpress Web Development",
    },
    {
      img: "/assets/images/pages/home/what-we-do-section/icon4.svg",
      title: "SEO & Web Services",
    },
  ];

  return (
    <section className="pt-20 pb-14 px-4 bg-[#163359] relative z-50">
      <Custom_Container>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-10 mt-10 mx-auto">
          {services.map((service, i) => (
            <Card key={i} service={service} />
          ))}
        </div>
      </Custom_Container>
    </section>
  );
};

export default WhatWeDo;
