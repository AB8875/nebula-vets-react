import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubHeading from "./SubHeading";
import Para from "./Para";
import Buttons from "./Buttons";

function PreFooter() {
  return (
    <>
      <div className="bg-[#494336] relative ">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[50px] sm:pt-[70px] pb-[0px] lg:pb-[80px]  ">
          <div className="flex flex-col">
            <div className="max-w-[800px]">
              <SubHeading title={"Our Mission"} className={"text-[#D7D9DD]"} />

              <Para
                para={
                  "Our Mission is to establish a new standard of excellence in veterinary care, driven by an unwavering ethical conscience."
                }
                paraClass={"max-w-[560] mt-10 text-[#D7D9DD]"}
              />

              <div className="mt-12  ">
                <Buttons path={"/"} button={"BOOK NOW"} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute max-w-[584px] right-0 top-[-10px] hidden lg:block">
          <Image
            className="w-[584px]"
            src={"/assests/png/dog-cat-footer.png"}
            width={584}
            height={372}
            alt="footer-abs-animalhealth"
          />
        </div>
        <div className="max-w-[500px] ms-auto block lg:hidden">
          <Image
            className="w-full"
            src={"/assests/png/dog-cat-footer.png"}
            width={500}
            height={372}
            alt="footer-veternary"
          />
        </div>

        <div className="border-bottom bg-[#D8DADC] h-[1px]"></div>
      </div>
    </>
  );
}

export default PreFooter;
