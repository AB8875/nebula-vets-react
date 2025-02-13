import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";

function Hero() {
  return (
    <>
      <div className="relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[120px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[80px] pb-10 md:pb-20">
            <div className="pe-0 lg:ms-[-50px] md:pb-0 pt-[230px] lg:pt-0">
              <Heading title={"Dental Care"} />
              <Para
                para={
                  "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
                }
                className={"max-w-none lg:max-w-[660px] mt-5 text-[#D7D9DD]"}
              />
              <div className="mt-10 group flex">
                <Buttons button={"BOOK NOW"} path={"/"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-100px] sm:mb-0">
              <Image
                className="w-full absolute max-w-[211px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[508px] bottom-0 !right-0 hidden lg:block mt-7 mb-6"
                src={"/assests/png/dental-hero.png"}
                width={506}
                height={414}
                alt="dog-car"
              />
              <div>
                <Image
                  className="absolute w-full !max-w-[300px] sm:!max-w-[400px] right-0 lg:hidden mb-10 sm:mb-0"
                  src={"/assests/png/dental-hero.png"}
                  width={400}
                  height={350}
                  alt="dog-car"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
