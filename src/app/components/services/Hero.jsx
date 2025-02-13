import Image from "next/image";
import React from "react";
import Buttons from "../common/Buttons";
import Heading from "../common/Heading";
import Para from "../common/Para";

function Hero() {
  return (
    <>
      <div className="relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 !pt-[120px]">
          <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px] lg:mt-[50px] xl:mt-[80px]">
            <div className="lg:pb-20 xl:ms-[-60px]">
              <Heading
                title={"Veterinary Services"}
                className={"max-w-[250px] sm:max-w-none"}
              />
              <Para
                para={
                  "At Nebula Vets, we take pride in offering an extensive range of services to meet the diverse needs of our patients. Our commitment to comprehensive care ensures that we can provide the highest quality veterinary services under one roof."
                }
                className={"mt-5 max-w-none lg:max-w-[660px] text-[#D7D9DD]"}
              />

              <div className="mt-10 group">
                <Buttons path={"/"} button={"BOOK NOW"} />
              </div>
            </div>
            <div className="me-[-10px] xl:me-[-40px] mt-5 sm:mt-0">
              <Image
                className="w-full absolute max-w-[400px] sm:max-w-[500px] xl:max-w-[623px] bottom-0 right-0 hidden lg:block"
                src={"/assests/png/dog-cat-2.png"}
                width={623}
                height={426}
                alt="dog-car"
              />
              <div className="max-w-[400px] sm:max-w-[500px] rotate-y-190 sm:rotate-y-360 lg:hidden">
                <Image
                  className="w-full"
                  src={"/assests/png/dog-cat-2.png"}
                  width={500}
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
