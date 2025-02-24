import React from "react";
import HeroCom from "../common/HeroCom";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";

function Hero() {
  return (
    <>
      <div className="overflow-hidden relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-0 sm:px-4 md:px-7 lg:px-10 xl:px-12 pt-[120px]">
          <div className="relative sm:hidden">
            <h1 className="avanttTRIAL-Normal max-w-[200px] leading-[120%] text-[32px] text-[#D7D9DD] ps-4">
              About Nebula Vets
            </h1>
            <Image
              src={"/assests/png/abs-1-about.png"}
              width={360}
              height={170}
              className="absolute w-full top-[22px]"
              alt="abs-1-about"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-end mt-[5px] lg:mt-16 md:pb-11 pt-[40px] sm:pt-0">
            <div className="pe-0 md:pe-[120px] py-10 md:pb-20">
              <Heading
                title={"About Nebula Vets"}
                className={" hidden sm:block"}
              />
              <Para
                para={
                  "With a foundation built on values, innovation, and a commitment to excellence, Nebula Vets continues to strive for excellence in veterinary care. Our journey is fueled by the passion to make a difference in the lives of pets and their owners, providing you with a trusted partner in your pet's health and well-being."
                }
                className={
                  "hidden sm:block text-[#D7D9DD] !max-w-none sm:!max-w-[558px] mt-5"
                }
              />
              <div className="flex mt-10 group ps-4 sm:ps-0">
                <Buttons button={"BOOK NOW"} path={"/"} />
              </div>
            </div>
            <div className="w-full xl:max-w-[570px] lg:me-[-30px]  mt-5 sm:mt-0">
              <Image
                className="w-full"
                src={"/assests/png/hero-about.png"}
                width={636}
                height={450}
                alt="Hero-About"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
