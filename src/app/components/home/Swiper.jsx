import React from "react";

import { swiperData } from "../helper/Helper";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Link from "next/link";

function Swiper() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-10 xl:px-12 pb-[80px] md:pb-[140px]">
        <div className="flex flex-wrap gap-5 justify-center   ">
          {swiperData.map((item, index) => (
            <div key={index} className="max-w-[310px] !w-full">
              <div className="bg-[#494336]      h-[419px] p-5">
                <div>
                  <Image
                    className="max-w-[90px]"
                    src={item.img}
                    width={90}
                    height={74}
                    alt="care"
                  />
                </div>
                <SubHeading
                  title={item.title}
                  className={"text-[#D7D9DD] mt-4"}
                />

                <ul className="*:text-[#D7D9DD] *:text-sm md:*:text-lg *:leading-[144%] flex flex-col gap-y-[6px] mt-4">
                  {item.subdata.map((items, i) => (
                    <li key={i}>
                      <Link
                        href={items.path}
                        className="underline underline-offset-2"
                      >
                        {items.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Swiper;
