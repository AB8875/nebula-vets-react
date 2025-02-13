import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";

function Hero() {
  return (
    <>
      <section className="relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[150px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[80px] pb-10 md:pb-20">
            <div className="pe-0 lg:ms-[-80px] md:pb-0 pt-[200px] lg:pt-0">
              <Heading
                title={"   Animal Health Check"}
                className={" max-w-[220px] sm:max-w-none"}
              />

              <Para
                para={
                  "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
                }
                className={"max-w-none lg:max-w-[660px] !text-[#D7D9DD] mt-5"}
              />
              <div className="mt-10 flex">
                <Buttons button={"BOOK NOW"} path={"/"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-100px] sm:mb-0">
              <Image
                className="w-full absolute max-w-[211px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[528px] bottom-0 right-0 hidden lg:block my-9"
                src={"/assests/png/hero-animalcheck.png"}
                width={528}
                height={521}
                alt="dog-car"
              />
              <div>
                <Image
                  className=" absolute right-10 top-[110px] !w-[220px] sm:!w-[350px] xl:max-w-[528px] lg:hidden"
                  src={"/assests/png/hero-animalcheck-2.png"}
                  width={528}
                  height={500}
                  alt="dog-car"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
