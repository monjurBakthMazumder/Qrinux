import Image from "next/image";
import Custom_Container from "../common/CustomContainer";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import OurClientsCard from "./OurClientsCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ourClients } from "../Hock/client";
export default function OurClients(params) {
  const clients = ourClients
  return (
    <section className="pt-20 pb-14 px-4 bg-secondary relative z-50 text-center">
      <Custom_Container>
        <div>
          <SubHeading>Testimonials</SubHeading>
          <Heading>Words From Our Clients</Heading>
        </div>
        <Carousel className="w-full max-w-screen-xl mx-auto my-5 sm:my-7 lg:my-9 2xl:my-12">
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 ">
                <OurClientsCard client={client} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Custom_Container>
    </section>
  );
}
