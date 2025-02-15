import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FbIcon, InstaIcon, LinkIcon } from "../helper/Icon";
import {
  companyLink,
  contactLink,
  footerSvg,
  servicesLink,
} from "../helper/Helper";

function Footer() {
  return (
    <>
      <div className="bg-[#494336] relative ">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-[60px] ">
          <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between pb-[40px] sm:pb-0">
            <div className="w-[100%] max-w-[300px]">
              <h1 className="text-[#D7D9DD] roboto-mono text-base sm:text-xl md:text-2xl leading-[150%]">
                Stay in touch:
              </h1>
              <input
                type="text"
                placeholder="Email"
                className="border-2 bg-transparent placeholder-[#D7D9DD] ps-3 py-2 placeholder:text-sm sm:placeholder:text-lg w-full max-w-[300px] mt-6"
              />
              <div className="flex items-center gap-x-5 mt-6">
                {footerSvg.map((item, index) => (
                  <div
                    key={index}
                    className="group transition-all ease-in duration-300"
                  >
                    <Link href={item.path} target="_blank">
                      {item.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-[520px]:w-full">
              <ul className="text-[#D7D9DD]">
                <li className="roboto-mono text-base sm:text-2xl leading-[150%] mb-3 sm:mb-7">
                  Services
                </li>
                {servicesLink.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-lg leading-[144%] underline underline-offset-2 mt-2 hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in"
                  >
                    <Link href={item.path} className="avanttTRIAL-Normal">
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-[520px]:w-full">
              <ul className="text-[#D7D9DD]">
                <li className="roboto-mono text-base sm:text-2xl leading-[150%] mb-3 sm:mb-7">
                  Company
                </li>
                {companyLink.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-lg leading-[144%] underline underline-offset-2 mt-2 hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in"
                  >
                    <Link href={item.path} className="avanttTRIAL-Normal">
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-[520px]:w-full">
              <ul className="text-[#D7D9DD]">
                <li className="roboto-mono text-base sm:text-2xl leading-[150%] mb-3 sm:mb-7">
                  Contact Us
                </li>
                {contactLink.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-lg leading-[144%] underline underline-offset-2 mt-2 hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in"
                  >
                    <Link href={item.path} className="avanttTRIAL-Normal">
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
