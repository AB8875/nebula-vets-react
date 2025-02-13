import Link from "next/link";
import React from "react";

function FourHeading() {
  return (
    <>
      <div>
        <div className="bg-[#494336] py-[45px] sm:py-[60px] md:py-[80px]">
          <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
            <ul className="*:text-[rgba(217,217,217,0.50)] avanttTRIAL-Normal text-2xl md:text-3xl lg:*:text-4xl flex flex-wrap justify-center gap-8 lg:justify-between max-[500px]:flex-col">
              <li className="avanttTRIAL-Normal hover:text-[#D7D9DD] transition-all ease-in duration-300">
                <Link href="#preventive"> Preventive Care</Link>
              </li>
              <li className="avanttTRIAL-Normal hover:text-[#D7D9DD] transition-all ease-in duration-300">
                <Link href="#sick">Sick Patient Care</Link>
              </li>
              <li className="avanttTRIAL-Normal hover:text-[#D7D9DD] transition-all ease-in duration-300">
                <Link href="#surgery">Surgery</Link>
              </li>
              <li className="avanttTRIAL-Normal hover:text-[#D7D9DD] transition-all ease-in duration-300">
                <Link href="#additional">Additional Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourHeading;
