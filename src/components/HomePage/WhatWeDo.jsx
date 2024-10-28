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
    <section className="bg-[#163359] relative z-50 py-12 sm:py-14 lg:py-16 2xl:py-20">
      <Custom_Container>
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="flex-1"> 
            <SubHeading>Our Services</SubHeading>
            <Heading>What We Do</Heading>
          </div>
          <div className="flex-1">
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  lor dolore
            </Description>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 sm:mt-7 lg:mt-8 2xl:mt-10">
          {services.map((service, i) => (
            <Card key={i} service={service} />
          ))}
        </div>
      </Custom_Container>
    </section>
  );
};

export default WhatWeDo;
