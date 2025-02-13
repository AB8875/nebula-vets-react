import Image from "next/image";
import React from "react";
import Buttons from "../common/Buttons";
import Heading from "../common/Heading";

function Hero() {
  return (
    <>
      <div className="overflow-hidden relative">
        <div className="relative overflow-hidden bg-[rgba(215,217,221,0.50)]">
          <div className="bg-[url('/assests/png/hero-bg.png')] !bg-[65%] bg-no-repeat bg-cover w-full h-[300px] sm:!h-[650px] overflow-hidden mt-[400px] sm:mt-[100px]">
            <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
              <div className="absolute !top-[18%] sm:!top-[37%] 2xl:!left-[21%] sm:!left-[5%]">
                <Heading
                  title={"Welcome to Nebula Vets"}
                  className={"max-w-[250px] sm:max-w-[511px]"}
                />
                <p className="text-[#494336] sm:text-[#D7D9DD] roboto-mono text-base sm:text-xl md:text-[22px] lg:text-[28px] mt-5">
                  Reinventing Pet Medicine
                </p>
                <div className="mt-11 group">
                  <Buttons button={"LEARN MORE"} />
                </div>
              </div>
              <div className="hidden sm:block">
                <Image
                  className="absolute right-[-230px] overflow-hidden pt-12"
                  src={"/assests/png/hero-section-img.png"}
                  width={482}
                  height={530}
                  alt="hero-section-img"
                />
              </div>
            </div>
          </div>
        </div>

        <Image
          className="absolute top-[43%] sm:hidden right-[-117px] max-w-[265px] overflow-hidden"
          src={"/assests/png/hero-section-img.png"}
          alt="abs-nebula"
          width={300}
          height={100}
        />
      </div>
    </>
  );
}

export default Hero;
