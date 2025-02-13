import React from "react";
import FirstSwiper from "./FirstSwiper";
import SecondSwiper from "./SecondSwiper";
import ThirdSwiper from "./ThirdSwiper";
import ForthSwiper from "./ForthSwiper";

function Swiper() {
  return (
    <>
      <div className="bg-[#D7D9DD]    ">
        <div className="py-8 sm:py-10 md:py-15 xl:py-[80px]">
          <div className="flex items-center flex-wrap  justify-center gap-6">
            <FirstSwiper />
            <SecondSwiper />
            <ThirdSwiper />
            <ForthSwiper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Swiper;
