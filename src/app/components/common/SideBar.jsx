import Link from "next/link";
import React from "react";
import Buttons from "./Buttons";

function SideBar({ close }) {
  return (
    <>
      <div className="flex h-screen ">
        <div className=" min-w-[300px] w-1/2 p-6">
          <ul className=" space-y-10 *:text-[#D7D9DD] *:text-sm *:font-medium tracking-[1.4px]">
            <li onClick={close} className="!text-6xl ml-[200px]">
              &times;
            </li>
            <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in active">
              <Link href={"/services"}>SERVICES</Link>
            </li>
            <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
              <Link href={"/about"}> ABOUT US</Link>
            </li>
            <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
              <Link href={"/dc-practice"}>LOCATION</Link>
            </li>
            <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
              <Link href={"/career"}>CAREER</Link>
            </li>
            <li className="roboto-mono hover:bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] hover:bg-clip-text hover:text-transparent transtion-all duration-300 ease-in">
              <Link href={"/"}>PATIENT PORTAL</Link>
            </li>
            <li className="flex">
              <Buttons button={"BOOK NOW"} path={"/home"} />
            </li>
          </ul>
        </div>
        <div
          onClick={close}
          className="bg-black/45 w-1/2 h-screen z-50 ml-auto "
        ></div>
      </div>{" "}
    </>
  );
}

export default SideBar;
