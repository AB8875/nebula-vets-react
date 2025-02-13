import Image from "next/image";
import React from "react";

function Puppy() {
  return (
    <>
      <div className="bg-[#494336] pt-9 ps-12 pe-5 pb-[50px]   ">
        <div className="flex items-center gap-5">
          <span>
            <Image
              src={"/assests/png/horse-sign.png"}
              width={61}
              height={64}
              alt="horse-sign"
            />
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl avanttTRIAL-Normal bg-[linear-gradient(180deg,#FFA280_0%,#8FD9CB_100%)] bg-clip-text text-transparent">
            Puppies Schedule
          </h1>
        </div>
        <div className="max-w-[408px] mt-10">
          <h1 className="text-[#D7D9DD] text-base sm:text-lg md:text-xl xl:text-2xl roboto-mono">
            8 weeks:
          </h1>
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD]">
            Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme vaccine &
            Canine Influenza Virus vaccine
          </p>
          <h1 className="text-[#D7D9DD] text-base sm:text-lg md:text-xl xl:text-2xl roboto-mono mt-3">
            12 weeks:
          </h1>
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD]">
            Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme vaccine &
            Canine Influenza Virus vaccine
          </p>
          <h1 className="text-[#D7D9DD] text-base sm:text-lg md:text-xl xl:text-2xl roboto-mono mt-3">
            Booster:
          </h1>
          <p className="avanttTRIAL-Normal text-sm sm:text-base md:text-lg lg:text-xl leading-[130%] text-[#D7D9DD]">
            Once a year
          </p>
        </div>
      </div>
    </>
  );
}

export default Puppy;
