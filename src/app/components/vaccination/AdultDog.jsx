import Image from "next/image";
import React from "react";

function AdultDog() {
  return (
    <>
      <div className="bg-[#494336] pt-9 ps-12 pe-5 pb-[50px]    ">
        <div className="flex items-center gap-5">
          <span>
            <Image
              src={"/assests/png/horse-sign.png"}
              width={61}
              height={69}
              alt="horse-sign"
            />
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl avanttTRIAL-Normal bg-[linear-gradient(180deg,#FFA280_0%,#8FD9CB_100%)] bg-clip-text text-transparent">
            Adult Dog Schedule
          </h1>
        </div>
        <div className="max-w-[408px] mt-10">
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD]">
            Rabies: One year after the initial puppy vaccine, then every three
            years
          </p>

          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD] mt-2">
            Distemper: Every three years
          </p>

          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD] mt-2">
            Bordetella: Every year
          </p>
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD] mt-2">
            Leptospirosis: Every year
          </p>
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD] mt-2">
            Influenza: Every year
          </p>
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD] mt-2">
            Lyme disease: Every year
          </p>
        </div>
      </div>
    </>
  );
}

export default AdultDog;
