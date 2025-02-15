import React from "react";
import { swiperService } from "../helper/Helper";
import Image from "next/image";

function Swiper() {
  return (
    <>
      <div className="bg-[#D7D9DD]    ">
        <div className="py-8 sm:py-10 md:py-15 xl:py-[80px]">
          <div className="flex items-center flex-wrap  justify-center gap-6">
            {swiperService.map((item, index) => (
              <div key={index} className="max-w-[320px]   p-4 sm:p-0">
                <Image src={item.path} width={420} height={420} alt="first" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Swiper;
