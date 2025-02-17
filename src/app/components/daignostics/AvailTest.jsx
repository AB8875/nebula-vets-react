import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { testList } from "../helper/Helper";

function AvailTest() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[140px] lg:pt-20">
          <div>
            <SubHeading title={"Available Tests"} />
            <Para
              para={
                "At Nebula Vets, we take pride in offering an in-house laboratory equipped with state-of-the-art diagnostic equipment to fulfill your pet's diagnostic needs. Our comprehensive laboratory services include:"
              }
              className={"mt-5"}
            />
            <ul className="list-disc *:text-[#494336] text-sm sm:text-base md:text-xl list-inside">
              {testList.map((item, index) => (
                <li
                  key={index}
                  className="avanttTRIAL-Normal leading-[130%] mt-2"
                >
                  {item.list}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Image
          class="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-diagno.png"}
          width={1440}
          height={452}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default AvailTest;
