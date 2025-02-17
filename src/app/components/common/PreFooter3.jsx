import React from "react";
import Buttons from "./Buttons";
import Image from "next/image";
import SubHeading from "./SubHeading";

function PreFooter3() {
  return (
    <>
      <div className="bg-[#494336] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[50px] sm:pt-[70px] pb-[0px] lg:pb-[122px] ">
          <div className="flex flex-col">
            <div className="max-w-[800px]">
              <SubHeading
                title={"We look forward to seeing you and your pet soon!"}
                className={"max-w-[500px] text-[#D7D9DD]"}
              />

              <div className="mt-12 group">
                <Buttons path={"/"} button={"BOOK NOW"} />
              </div>
            </div>
          </div>
        </div>
        <div className="!max-w-[500px] ms-auto block lg:hidden">
          <Image
            className="w-full"
            src={"/assests/png/footer-veternary.png"}
            width={600}
            height={376}
            alt="footer-veternary"
          />
        </div>
        <div className="absolute w-[600px] right-0 top-[0px] hidden lg:block">
          <Image
            className="w-full"
            src={"/assests/png/footer-abs-animalhealth.png"}
            width={550}
            height={318}
            alt="footer-abs-animalhealth"
          />
        </div>

        <div className="border-bottom bg-[#D8DADC] h-[1px]"></div>
      </div>
    </>
  );
}

export default PreFooter3;
