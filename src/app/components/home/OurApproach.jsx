import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

function OurApproach() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row gap-3 md:gap-15 justify-between pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] px-4 md:px-0">
            <SubHeading
              title={"Our Approach"}
              className={
                "md:max-w-[166px] text-lg sm:text-xl md:text-2xl xl:text-4xl "
              }
            />
            <Para
              para={
                "At our independent veterinary hospital, we combine compassion, advanced expertise, and a commitment to exceptional care. From routine check-ups to urgent and emergency situations, we are here to provide your beloved pets with the highest level of service and support they deserve."
              }
              paraClass={"max-w-[840px] "}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurApproach;
