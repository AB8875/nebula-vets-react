import Image from "next/image";
import React from "react";
import { AcoIcon } from "../helper/Icon";

function Aco5() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#494336]">
            Diagnostic Screenings
          </h1>
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion5" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <p className="avanttTRIAL-Normal text-sm md:text-lg leading-[130%] text-black max-w-[1000px]">
            Depending on your pet's age, breed, and medical history, we may
            recommend diagnostic screenings as part of the animal health check.
            These may include blood tests, urinalysis, fecal examinations, and
            imaging studies. These screenings help us assess your pet's internal
            health, detect underlying conditions, and provide a baseline for
            future comparisons.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>{" "}
    </>
  );
}

export default Aco5;
