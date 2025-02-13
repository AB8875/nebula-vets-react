import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";

function Hero() {
  return (
    <>
      <div className="relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[150px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[80px] pb-10 md:pb-20">
            <div className="pe-0 lg:ms-[-80px] md:pb-0 pt-[250px] lg:pt-0">
              <Heading title={"Vaccination"} />
              <Para
                para={
                  "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease.Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
                }
                className={"max-w-none lg:max-w-[660px] mt-5 text-[#D7D9DD]"}
              />
              <div className="mt-10 group flex">
                <Buttons button={"BOOK NOW"} path={"/"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-100px] sm:mb-0">
              <Image
                className="w-full absolute max-w-[211px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[600px] bottom-0 right-0 hidden lg:block mt-12"
                src={"/assests/png/vaccinations.png"}
                width={600}
                height={500}
                alt="dog-car"
              />
              <div>
                <Image
                  className=" absolute right-0 bottom-[150px] !w-[300px] sm:!w-[350px] xl:!max-w-[528px] lg:hidden mb-10 sm:mb-0"
                  src={"/assests/png/new-vacci.png"}
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
