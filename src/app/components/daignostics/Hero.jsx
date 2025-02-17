import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";

function Hero() {
  return (
    <>
      <div className="relative overflow-hidden bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[120px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[80px] pb-10 md:pb-20">
            <div className="pe-0 lg:ms-[-50px] md:pb-0 pt-[230px] lg:pt-0">
              <Heading title={"Diagnostics"} />
              <Para
                para={
                  "At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet. Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets:"
                }
                className={"max-w-none lg:max-w-[660px] mt-5 text-[#D7D9DD]"}
              />

              <div className="mt-10 group flex">
                <Buttons path={"/"} button={"BOOK NOW"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-100px] sm:mb-0">
              <Image
                className="w-full absolute max-w-[211px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[508px] bottom-0 right-0 hidden lg:block mt-7 mb-6"
                src={"/assests/png/diagnostic.png"}
                width={508}
                height={457}
                alt="dog-car"
              />
              <div>
                <Image
                  className="absolute w-full !max-w-[300px] sm:!max-w-[400px] right-0 lg:hidden mb-10 sm:mb-0"
                  src={"/assests/png/diagnostic.png"}
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
