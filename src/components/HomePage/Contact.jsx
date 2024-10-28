import Custom_Container from "../common/CustomContainer";
import Description from "../common/Description";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import ContactForm from "./ContactForm";

export default function Contact(params) {
  return (
    <section className="pt-20 pb-14 px-4 bg-[#163359] relative z-50">
      <Custom_Container>
        <div className="flex justify-between items-center">
          <div>
            <SubHeading>Contact</SubHeading>
            <Heading>We Are Here, Let’s Talk </Heading>
          </div>
          <div>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod
              tempor incididunt ut labore et dolore magn
            </Description>
          </div>
        </div>
        <ContactForm/>
      </Custom_Container>
    </section>
  );
}
