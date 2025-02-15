import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sickLink } from "../helper/Helper";

function SickCare() {
  return (
    <>
      <div className="max-w-[310px] !w-full">
        <div className="bg-[#494336]   h-[419px]   p-5">
          <div>
            <Image
              src={"/assests/png/sick.png"}
              className="max-w-[90px]"
              width={90}
              height={74}
              alt="sick"
            />
          </div>
          <h1 className="text-[#D7D9DD] avanttTRIAL-Normal text-2xl lg:text-4xl mt-4">
            Sick Patient Care
          </h1>
          <ul className="*:text-[#D7D9DD] *:text-sm md:*:text-lg *:leading-[144%] flex flex-col gap-y-[6px] mt-4">
            {sickLink.map((item, index) => (
              <li key={index} className="w-[160px]">
                <Link
                  href={item.path}
                  className="underline underline-offset-2 "
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SickCare;
