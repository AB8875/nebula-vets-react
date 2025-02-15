import Link from "next/link";
import React from "react";
import { fourHead } from "../helper/Helper";

function FourHeading() {
  return (
    <>
      <div>
        <div className="bg-[#494336] py-[45px] sm:py-[60px] md:py-[80px]">
          <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
            <ul className="*:text-[rgba(217,217,217,0.50)] avanttTRIAL-Normal text-2xl md:text-3xl lg:*:text-4xl flex flex-wrap justify-center gap-8 lg:justify-between max-[500px]:flex-col">
              {fourHead.map((item, index) => (
                <li
                  key={index}
                  className="avanttTRIAL-Normal hover:text-[#D7D9DD] transition-all ease-in duration-300"
                >
                  <Link href={item.path}> {item.link} </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourHeading;
