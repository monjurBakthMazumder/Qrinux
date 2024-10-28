import React from "react";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import Description from "../common/Description";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function AboutUs() {
  return (
    <div className="bg-primary relative z-50">
      <Custom_Container>
        <div className="py-20">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className=" relative">
              <Image
                height={490}
                width={350}
                src="/assets/images/pages/home/About-us/founder.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 right-5 left-5 p-5 text-white bg-primary font-jost">
                <h1 className="text-2xl font-medium">Abdullah Al Mahfuz</h1>
                <p className="text-lg">Founder & Lead Developer</p>
              </div>
            </div>
            <div className="md:w-3/5 lg:w-2/3 bg-[#F7FAFF] p-10">
              <Heading>
                <span className="text-secondary">
                  We Provide <br />
                  High-Quality Tech Services At Affordable Price
                </span>
              </Heading>
              <Description>
                <span className="text-primary">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate{" "}
                </span>
              </Description>
              <Link
                href=""
                className="text-2xl font-jost flex items-center gap-3 font-medium text-warning  transition-all duration-500  transform group hover:text-textColor5 hover:underline underline-offset-4 mt-10"
              >
                More About Us
                <FaArrowRightLong className="transition-transform duration-500  transform group-hover:rotate-45 " />
              </Link>
            </div>
          </div>
        </div>
      </Custom_Container>
    </div>
  );
}
