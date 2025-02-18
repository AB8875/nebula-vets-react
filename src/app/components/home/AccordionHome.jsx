import React from "react";
import { qusAns, qusAns2 } from "../helper/Helper";
import AcoProps from "../common/AcoProps";

function AccordionHome() {
  return (
    <>
      <div className="bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px]">
          <div className="xl:px-12">
            <h1 className="text-[#D7D9DD] avanttTRIAL-Normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-0 text-center sm:text-start lg:pl-[50px]">
              Why choose Nebula Vets?
            </h1>

            <div className="flex flex-col gap-y-8 gap-x-0 xl:gap-x-15 md:gap-y-0 md:flex-row items-start justify-between xl:justify-around mt-[40px] sm:mt-[60px] px-4">
              <div className="flex flex-col gap-y-8 w-full md:w-[39%]">
                {qusAns.map((item, index) => (
                  <AcoProps key={index} qustion={item.qustion} />
                ))}
              </div>
              <div className="flex flex-col gap-y-8 w-full md:w-[39%]">
                {qusAns2.map((item, index) => (
                  <AcoProps key={index} qustion={item.qustion} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionHome;
