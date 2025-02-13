import Image from "next/image";
import React from "react";

function PreventiveCare() {
  return (
    <>
      <div className="max-w-[310px] !w-full">
        <div className="bg-[#494336]      h-[419px] p-5">
          <div>
            <Image
              className="max-w-[90px]"
              src={"/assests/png/care.png"}
              width={90}
              height={74}
              alt="care"
            />
          </div>
          <h1 className="text-[#D7D9DD] avanttTRIAL-Normal text-2xl lg:text-4xl mt-4">
            Preventive Care
          </h1>
          <ul className="*:text-[#D7D9DD] *:text-sm md:*:text-lg *:leading-[144%] flex flex-col gap-y-[6px] mt-4">
            <li>
              <a
                href="./animal-health-check.html"
                className="underline underline-offset-2"
              >
                Animal Health Check
              </a>
            </li>
            <li>
              <a
                href="./vaccination.html"
                className="underline underline-offset-2"
              >
                Vaccinations
              </a>
            </li>
            <li>
              <a
                href="./dental-care.html"
                className="underline underline-offset-2"
              >
                Dental
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PreventiveCare;
