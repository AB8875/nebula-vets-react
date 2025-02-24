import React from "react";
import SubHeading from "../common/SubHeading";
import { vacData } from "../helper/Helper";
import Para from "../common/Para";
import Image from "next/image";

function WhenVac() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
        <SubHeading title={"When to vaccinate?"} />

        <div className="mt-10   grid grid-cols-1 sm:grid-cols-2 gap-4 pb-[50px] sm:pb-[80px] ">
          {vacData.map((item, index) => (
            <div
              key={index}
              className="bg-[#494336] pt-9 ps-12 pe-5 pb-[50px]   "
            >
              <div className="flex items-center gap-5">
                <span>
                  <Image src={item.img} width={61} height={64} alt={item.alt} />
                </span>

                <SubHeading
                  title={item.title}
                  className={
                    "xl:text-5xl bg-[linear-gradient(180deg,#FFA280_0%,#8FD9CB_100%)] bg-clip-text text-transparent"
                  }
                />
              </div>
              {item.subdata.map((items, i) => (
                <div key={i} className="max-w-[408px] mt-5">
                  <SubHeading
                    title={items.heading}
                    className={
                      " text-[#D7D9DD] text-base sm:text-lg md:text-xl xl:text-2xl roboto-mono"
                    }
                  />
                  <Para para={items.para} className={"text-[#D7D9DD]"} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhenVac;
