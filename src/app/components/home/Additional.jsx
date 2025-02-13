import Image from "next/image";
import React from "react";

function Additional() {
  return (
    <>
      <div className="max-w-[310px] !w-full">
        <div className="bg-[#494336] h-[419px]   p-5">
          <div>
            <Image
              className="max-w-[90px]"
              src={"/assests/png/additional-services.png"}
              width={90}
              height={74}
              alt="add"
            />
          </div>
          <h1 className="text-[#D7D9DD] avanttTRIAL-Normal text-2xl lg:text-4xl mt-4">
            Additional Services
          </h1>
          <ul className="*:text-[#D7D9DD] *:text-sm md:*:text-lg *:leading-[144%] flex flex-col gap-y-[6px] mt-4">
            <li>
              <a href="./travel.html" className="underline underline-offset-2">
                Travel Certificates
              </a>
            </li>
            <li>
              <a
                href="./skin-dermetology.html"
                className="underline underline-offset-2"
              >
                Skin & Dermatology
              </a>
            </li>
            <li>
              <a
                href="./Hospice-Euthanasia.html"
                className="underline underline-offset-2"
              >
                Euthanasia
              </a>
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
}

export default Additional;
