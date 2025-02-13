import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

function Petvac() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div>
            <SubHeading title={"Why Should I vaccinate My Pet?"} />
            <Para
              para={
                "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer."
              }
              className={"mt-5"}
            />
          </div>
          <div className="mt-14">
            <SubHeading title={" What are core and non-core vaccines?"} />
            <Para
              para={
                "Core vaccines are often vaccines considered essential for your pet’s health, whilst non-core vaccines are optional, and may be recommended for your pet depending on their lifestyle.Our vets will discuss the suitable vaccines for your pet during the consultation"
              }
              className={"mt-5"}
            />
          </div>
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-vaccinations.png"}
          width={1440}
          height={500}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default Petvac;
