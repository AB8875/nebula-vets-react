import Image from "next/image";
import React from "react";
import { AcoIcon } from "../helper/Icon";

function Aco7() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#494336]">
            Client Education and Support
          </h1>
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion7" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <p className="avanttTRIAL-Normal text-sm md:text-lg leading-[130%] text-black max-w-[1000px]">
            At Nebula Vets, we believe in empowering pet owners with knowledge.
            Our veterinarians take the time to explain the findings of the
            animal health check, address your questions, and provide guidance on
            maintaining your pet's well-being. We are here to support you on
            your pet care journey and offer resources for at-home care and
            preventive measures.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>{" "}
    </>
  );
}

export default Aco7;
