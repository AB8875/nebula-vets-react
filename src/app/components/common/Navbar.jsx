import Image from "next/image";
import Link from "next/link";
import React from "react";
import Buttons from "./Buttons";
import { LogoIcon } from "../helper/Icon";

function Navbar() {
  return (
    <>
      <nav className="bg-[#494336] fixed top-0 w-full !z-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-10 xl:px-12 py-7">
          <div className="flex flex-wrap md:flex-row items-center justify-between">
            <div>
              <Link href={"/"}>
                <LogoIcon />
              </Link>
            </div>
            <div className="block md:hidden">
              <button id="menuBtn">
                <svg
                  width="49"
                  height="27"
                  viewBox="0 0 49 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0338135 22.5562H48.0338V26.1812H0.0338135V22.5562Z"
                    fill="#D8DADC"
                  />
                  <path
                    d="M0.0338135 0.806152H48.0338V4.43115H0.0338135V0.806152Z"
                    fill="#D8DADC"
                  />
                  <path
                    d="M0.0338135 11.6812H48.0338V15.3062H0.0338135V11.6812Z"
                    fill="#D8DADC"
                  />
                </svg>
              </button>
            </div>
            <div className="   justify-center md:flex-row items-center gap-3 lg:gap-10 xl:gap-14 hidden  md:flex">
              <ul className="*:text-[#D7D9DD] *:text-sm *:font-medium tracking-[1.4px] flex items-center gap-3 md:gap-3 lg:gap-10 xl:gap-16">
                <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
                  <Link href="/services">SERVICES</Link>
                </li>
                <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
                  <Link href="./about-nebula-vets.html"> ABOUT US</Link>
                </li>
                <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
                  <Link href="./dc-practice.html">LOCATION</Link>
                </li>
                <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
                  <Link href="./join-team.html">CAREER</Link>
                </li>
                <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
                  <Link href="./emergency-care.html">PATIENT PORTAL</Link>
                </li>
              </ul>

              <div className="mt-4 md:mt-0 group flex">
                <Buttons button={"BOOK NOW"} path={"/"} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
