import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { AcoIcon } from "../helper/Icon";

function Aco2() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <SubHeading
            title={"Tailored Care for Different Life Stages"}
            className={
              "roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%]"
            }
          />
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion2" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <Para
            para={
              "Pets go through various life stages, each with its unique needs. From playful puppies and curious kittens to mature adults and cherished seniors, our animal health checks are tailored to cater to your pet's specific life stage. We provide age-appropriate screenings, vaccinations, and personalized recommendations to support your pet's health at every stage of their journey."
            }
            className={"text-sm lg:text-lg text-black max-w-[1000px]"}
          />
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>
    </>
  );
}

export default Aco2;
