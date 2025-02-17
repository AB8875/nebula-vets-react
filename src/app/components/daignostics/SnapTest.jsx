import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import { SnapList, SnapList2 } from "../helper/Helper";

function SnapTest() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-20">
          <SubHeading title={"Available SNAP Tests"} />
          <div className="flex flex-wrap gap-5 justify-center mt-10   ">
            <div className="bg-[#494336] pt-11 ps-11 pb-6 w-full max-w-[530px] h-[420px] relative">
              <ul className="list-disc list-inside">
                {SnapList.map((item, index) => (
                  <ul key={index} className="list-disc mb-5">
                    <li className="text-[#D7D9DD] roboto-mono leading-[150%] text-2xl  ">
                      {item.heading1}
                    </li>
                    <li className="text-[#D7D9DD] avanttTRIAL-Normal ms-9 text-sm sm:text-xl">
                      {item.heading2}
                    </li>
                  </ul>
                ))}
              </ul>
              <Image
                className="absolute bottom-0 right-0 w-full max-w-[360px]"
                src={"/assests/png/abs-2-diagno.png"}
                width={360}
                height={240}
                alt="abs-2-diagno"
              />
            </div>
            <div className="bg-[#494336] pt-11 ps-11 pb-6 w-full max-w-[530px] h-[420px] relative">
              <ul className="list-disc list-inside">
                {SnapList2.map((item, index) => (
                  <ul key={index} className="list-disc mb-5">
                    <li className="text-[#D7D9DD] roboto-mono leading-[150%] text-2xl">
                      {item.heading1}
                    </li>

                    <li className="text-[#D7D9DD] avanttTRIAL-Normal text-sm sm:text-xl">
                      {item.heading2}
                    </li>
                  </ul>
                ))}
              </ul>
              <Image
                className="absolute bottom-0 right-0 w-full max-w-[360px]"
                src={"/assests/png/abs-3-diagno.png"}
                width={360}
                height={230}
                alt="abs-2-diagno"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapTest;
