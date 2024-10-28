import Image from "next/image";
import Custom_Container from "../common/CustomContainer";
import Description from "../common/Description";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import ContactForm from "./ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact(params) {
  return (
    <section className="py-12 sm:py-14 lg:py-16 2xl:py-20 bg-[#163359] relative z-50">
      <Custom_Container>
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center text-start">
          <div className="flex-1">
            <SubHeading>Contact</SubHeading>
            <Heading>We Are Here, Let’s Talk </Heading>
          </div>
          <div className="flex-1">
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod
              tempor incididunt ut labore et dolore magn
            </Description>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <ContactForm />
          <div className="flex flex-col sm:flex-row lg:flex-col justify-between text-white w-full lg:w-80 space-y-3">
            <div className="flex items-center gap-5 font-jost">
              <FaPhoneAlt className="text-5xl bg-[#F7FAFF] rounded-full text-primary p-[10px]" />

              <div className="">
                <h1 className="text-lg">Call Us</h1>
                <h1 className="text-2xl font-semibold">0123 456 789</h1>
              </div>
            </div>
            <div className="flex items-center gap-5 font-jost">
              <MdEmail className="text-5xl bg-[#F7FAFF] rounded-full text-primary p-[10px]" />

              <div className="">
                <h1 className="text-lg">Email Us</h1>
                <h1 className="text-2xl font-semibold">Loremipsum@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
      </Custom_Container>
    </section>
  );
}
