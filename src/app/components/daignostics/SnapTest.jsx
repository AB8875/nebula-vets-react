import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import { snapData, SnapList, SnapList2 } from "../helper/Helper";

function SnapTest() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-20">
          <SubHeading title={"Available SNAP Tests"} />
          <div className="flex flex-wrap gap-5 justify-center mt-10   ">
            {snapData.map((item, index) => (
              <div
                key={index}
                className="bg-[#494336] pt-11 ps-11 pb-6 w-full max-w-[530px] h-[420px] relative"
              >
                <ul className="list-disc list-inside">
                  {item.subdata.map((items, i) => (
                    <ul key={i} className="list-disc mb-5">
                      <li className="text-[#D7D9DD] roboto-mono leading-[150%] text-2xl  ">
                        {items.heading1}
                      </li>
                      <li className="text-[#D7D9DD] avanttTRIAL-Normal ms-9 text-sm sm:text-xl">
                        {items.heading2}
                      </li>
                    </ul>
                  ))}
                </ul>
                <Image
                  className="absolute bottom-0 right-0 w-full max-w-[360px]"
                  src={item.img}
                  width={360}
                  height={240}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapTest;
