import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { imgData } from "../helper/Helper";

function ImgSection() {
  return (
    <>
      {imgData.map((item, index) => (
        <div key={index} className="relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 md:py-20">
            <div className="flex gap-14 flex-col lg:flex-row">
              <div className="!max-w-[600px] mx-auto">
                <Image
                  className="!max-w-[600px]"
                  src={item.img}
                  width={600}
                  height={620}
                  alt={item.alt}
                />
              </div>
              <div className="max-w-none lg:max-w-[547px]">
                <SubHeading
                  title={item.title1}
                  className={"roboto-mono !text-2xl leading-[150%]"}
                />
                <Para para={item.para1} className={"mt-7"} />
                <SubHeading
                  title={item.title2}
                  className={"roboto-mono !text-2xl leading-[150%] mt-7"}
                />
                <Para para={item.para2} className={"mt-7"} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ImgSection;
