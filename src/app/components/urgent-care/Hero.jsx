import React from "react";
import Buttons from "../common/Buttons";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[120px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[80px] pb-10 md:pb-20">
            <div className="pe-0 lg:ms-[-50px] md:pb-0 pt-[230px] lg:pt-0">
              {" "}
              <Heading
                title={"Urgent & Emergency Care"}
                className={"max-w-[250px] sm:max-w-[600px]"}
              />
              <Para
                para={
                  "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
                }
                className={"text-[#D7D9DD] mt-5 sm:max-w-[600px] "}
              />
              <div className="mt-10 group flex">
                <Buttons path={"/"} button={"BOOK NOW"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-100px] sm:mb-0">
              <Image
                className="w-full absolute max-w-[211px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[508px] bottom-0 right-0 hidden lg:block mt-10"
                src={"/assests/png/hero-emergency.png"}
                width={508}
                height={508}
                alt="dog-car"
              />
              <div>
                <Image
                  className="absolute w-full !max-w-[300px] sm:!max-w-[400px] right-0 lg:hidden mb-10 sm:mb-0"
                  src={"/assests/png/hero-emergency.png"}
                  width={400}
                  height={400}
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
