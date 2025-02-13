import Image from "next/image";
import React from "react";
import PreventiveCare from "../home/PreventiveCare";
import SickCare from "../home/ SickCare";
import Surgery from "../home/Surgery";
import Additional from "../home/Additional";

function Swiper() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-10 xl:px-12 pb-[80px] md:pb-[140px]">
        <div className="flex flex-wrap gap-5 justify-center   ">
          <PreventiveCare />
          <SickCare />
          <Surgery />
          <Additional />
        </div>
      </div>
    </>
  );
}

export default Swiper;
