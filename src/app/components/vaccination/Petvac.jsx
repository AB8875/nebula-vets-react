import React from "react";
import { mypetData } from "../helper/Helper";
import SecSection from "../common/SecSection";
import Image from "next/image";

function Petvac() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div className="mt-10 flex flex-col gap-6">
            {mypetData.map((item, index) => (
              <SecSection key={index} title={item.title} para={item.para} />
            ))}
          </div>
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-vaccinations.png"}
          width={1440}
          height={500}
        />
      </div>
    </>
  );
}

export default Petvac;
