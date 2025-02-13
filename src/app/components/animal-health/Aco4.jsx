import Image from "next/image";
import React from "react";
import { AcoIcon } from "../helper/Icon";

function Aco4() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#494336]">
            Vaccinations and Preventive Care
          </h1>
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion4" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <p className="avanttTRIAL-Normal text-sm md:text-lg leading-[130%] text-black max-w-[1000px]">
            Vaccinations are crucial for protecting your pet against contagious
            diseases. During the animal health check, we assess your pet's
            vaccination status and provide any necessary boosters or updates to
            ensure they remain protected. Additionally, we discuss preventive
            care measures such as flea and tick control, heartworm prevention,
            and parasite control, tailoring our recommendations to your pet's
            individual needs.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>{" "}
    </>
  );
}

export default Aco4;
