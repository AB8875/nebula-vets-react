import Image from "next/image";
import Link from "next/link";
import React from "react";
import Buttons from "./Buttons";
import { LogoIcon, ThreeLine } from "../helper/Icon";
import { navbarLink } from "../helper/Helper";
import Img from "./Img";

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
                <ThreeLine />
              </button>
            </div>
            <div className="   justify-center md:flex-row items-center gap-3 lg:gap-10 xl:gap-14 hidden  md:flex">
              <ul className="*:text-[#D7D9DD] *:text-sm *:font-medium tracking-[1.4px] flex items-center gap-3 md:gap-3 lg:gap-10 xl:gap-16">
                {navbarLink.map((item, index) => (
                  <li
                    key={index}
                    className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in uppercase"
                  >
                    <Link href={item.path}>{item.link}</Link>
                  </li>
                ))}
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
