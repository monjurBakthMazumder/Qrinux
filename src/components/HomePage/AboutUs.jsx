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
        <div className="py-12 sm:py-14 lg:py-16 2xl:py-20">
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 justify-between">
            <div className="md:w-[300px] lg:flex-1 relative">
              <Image
                height={490}
                width={350}
                src="/assets/images/pages/home/About-us/founder.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 right-5 left-5 p-5 text-white bg-primary font-jost">
                <h1 className="text-2xl font-medium hidden sm:block lg:hidden">Al Mahfuz</h1>
                <h1 className="text-2xl font-medium sm:hidden lg:block">Abdullah Al Mahfuz</h1>
                <p className="text-lg">Founder & CEO</p>
              </div>
            </div>
            <div className="sm:w-3/5 lg:w-2/3 bg-[#F7FAFF] px-5 py-10 lg:p-10">
              <Heading>
                <span className="text-secondary">
                  We Provide <br className="hidden"/>
                  High-Quality Tech Services At Affordable Price
                </span>
              </Heading>
              <Description>
                <span className="text-primary">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                </span>
              </Description>
              <Link
                href=""
                className="text-2xl font-jost flex items-center gap-3 font-medium text-warning mt-4 transition-all duration-500  transform group hover:text-textColor5 hover:underline underline-offset-4 "
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
