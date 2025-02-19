import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Buttons from "./Buttons";
import Image from "next/image";

function HeroCom({
  title,
  para,
  path,
  img1,
  img2,
  imgW,
  imgH,
  imgW2,
  imgH2,
  imgclass,
  imgclass2,
  paraclass,
  headclass,
  alt1,
  alt2,
}) {
  return (
    <>
      <div className="relative overflow-hidden bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[120px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[130px] pb-10 md:pb-20">
            <div className="pe-0 lg:ms-[-50px] md:pb-0 pt-[230px] lg:pt-0">
              <Heading title={title} className={`${headclass}`} />
              <Para
                para={para}
                className={`max-w-none lg:max-w-[660px] mt-5 text-[#D7D9DD] ${paraclass}`}
              />

              <div className="mt-10 group flex">
                <Buttons path={path} button={"BOOK NOW"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-100px] sm:mb-0">
              <Image
                className={`w-full absolute max-w-[211px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[508px] bottom-0 right-0 hidden lg:block mt-7 pb-14  ${imgclass}`}
                src={img1}
                width={imgW}
                height={imgH}
                alt={alt1}
              />
              <div>
                <Image
                  className={`absolute w-full !max-w-[260px] sm:!max-w-[400px] right-0 lg:hidden mb-10 sm:mb-0 ${imgclass2}`}
                  src={img2}
                  width={imgW2}
                  height={imgH2}
                  alt={alt2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCom;
