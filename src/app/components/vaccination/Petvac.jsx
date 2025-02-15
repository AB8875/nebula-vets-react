import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { mypetData } from "../helper/Helper";

function Petvac() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          {mypetData.map((item, index) => (
            <div key={index} className="mt-10">
              <SubHeading title={item.title} />
              <Para para={item.para} className={"mt-5"} />
            </div>
          ))}
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-vaccinations.png"}
          width={1440}
          height={500}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default Petvac;
