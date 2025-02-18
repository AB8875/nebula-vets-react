import React from "react";
import PreventiveCare from "./PreventiveCare";
import SickCare from "./ SickCare";
import Surgery from "./Surgery";
import Additional from "./Additional";

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
