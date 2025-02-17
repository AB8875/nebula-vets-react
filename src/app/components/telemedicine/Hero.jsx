import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";

function Hero() {
  return (
    <>
      <div className="relative bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 lg:py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-[5px] lg:mt-[50px] xl:mt-[80px] pb-10 md:pb-20 pt-[150px]">
            <div className="pe-0 lg:ms-[-65px] md:pb-0 pt-[200px] lg:pt-0">
              <Heading title={"Telemedicine"} />
              <Para
                para={
                  "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
                }
                className={"mt-5 max-w-[660px] text-[#D7D9DD]"}
              />

              <div className="mt-10 group flex">
                <Buttons path={"/"} button={"LEARN MORE"} />
              </div>
            </div>
            <div className="mt-5 sm:mt-0 mb-[-120px] sm:mb-0">
              <Image
                className="w-full absolute max-w-[211px] h-auto sm:max-w-[320px] md:max-w-[470px] xl:max-w-[600px] bottom-0 right-0 hidden lg:block mt-7 lg:mb-7"
                src={"/assests/png/hero-telemedi.png"}
                width={600}
                height={500}
                alt="dog-car"
              />
              <div>
                <Image
                  className="absolute w-full !max-w-[220px] sm:!max-w-[350px] right-0 top-[120px] lg:hidden mb-10 sm:mb-0"
                  src={"/assests/png/hero-telemedi.png"}
                  width={300}
                  height={450}
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
