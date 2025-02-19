import Image from "next/image";
import React from "react";
import SecSection from "../common/SecSection";

function HowWork() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[140px] lg:pt-20">
          <div>
            <SecSection
              title={"How it works"}
              para={
                "We understand that time is of the essence when it comes to your pet's health, and waiting for medications to be obtained from an external pharmacy can be inconvenient. By keeping a comprehensive inventory of commonly used medications in our pharmacy, we strive to streamline the process and minimize any delays in providing your pet with the necessary treatment."
              }
              para2={
                "However, if a specific medication is not readily available in our on-site pharmacy, we have a solution. We work closely with a trusted compounding pharmacy that specializes in creating customized medications. This allows us to quickly obtain or create the specific medication your pet needs. Once the medication is compounded, we can arrange for it to be delivered to you, ensuring that you have it in a timely manner."
              }
            />
          </div>
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-diagno.png"}
          width={1440}
          height={500}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default HowWork;
