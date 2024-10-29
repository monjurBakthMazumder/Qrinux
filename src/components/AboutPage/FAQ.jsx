import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Custom_Container from "../common/CustomContainer";

export function FAQ() {
  return (
    <div className=" bg-secondary text-white">
      <div className="py-12 sm:py-14 lg:py-16 2xl:py-20">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-center items-center gap-5">
                <span className="text-[#FE6573] text-[28px] font-inter font-semibold">
                  01
                </span>
                How to copy and paste components into Figma ?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-w-[1200px] mx-auto px-[5%] pl-[70px] sm:pl-[86px] lg:pl-[110px] 2xl:pl-[150px]">
                Firstly choose which component you need to copy by using our
                super fast search page, then copy the respective screen size you
                need by clicking on the copy button. Now you have the Figma
                Component in your clipboard you can paste ( “cmd + v” or “ctrl +
                v” ) it anywhere in your design files.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-center items-center gap-5">
                <span className="text-[#FE6573] text-[28px] font-inter font-semibold">
                  02
                </span>
                How Frequently You will update the components ?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-w-[1200px] mx-auto px-[5%] pl-[70px] sm:pl-[86px] lg:pl-[110px] 2xl:pl-[150px]">
                Firstly choose which component you need to copy by using our
                super fast search page, then copy the respective screen size you
                need by clicking on the copy button. Now you have the Figma
                Component in your clipboard you can paste ( “cmd + v” or “ctrl +
                v” ) it anywhere in your design files.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex justify-center items-center gap-5">
                <span className="text-[#FE6573] text-[28px] font-inter font-semibold">
                  03
                </span>
                What makes Produce UI Unique ?{" "}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-w-[1200px] mx-auto px-[5%] pl-[70px] sm:pl-[86px] lg:pl-[110px] 2xl:pl-[150px]">
                Firstly choose which component you need to copy by using our
                super fast search page, then copy the respective screen size you
                need by clicking on the copy button. Now you have the Figma
                Component in your clipboard you can paste ( “cmd + v” or “ctrl +
                v” ) it anywhere in your design files.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-center items-center gap-5">
                <span className="text-[#FE6573] text-[28px] font-inter font-semibold">
                  04
                </span>
                What are Components ?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-w-[1200px] mx-auto px-[5%] pl-[70px] sm:pl-[86px] lg:pl-[110px] 2xl:pl-[150px]">
                Firstly choose which component you need to copy by using our
                super fast search page, then copy the respective screen size you
                need by clicking on the copy button. Now you have the Figma
                Component in your clipboard you can paste ( “cmd + v” or “ctrl +
                v” ) it anywhere in your design files.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
