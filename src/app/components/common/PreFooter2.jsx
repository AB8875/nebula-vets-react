import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";
import SubHeading from "./SubHeading";
import Para from "./Para";

function PreFooter2() {
  return (
    <>
      <div className="bg-[#494336]  relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[50px] sm:pt-[70px] pb-[0px] lg:pb-[80px] relative">
          <div className="flex flex-col">
            <div className="max-w-[800px]">
              <SubHeading
                title={"We look forward to seeing you and your pet soon!"}
                className={" text-[#D7D9DD]"}
              />
              <Para
                para={
                  "At Nebula Vets, we are committed to providing exceptional animal health checks that go beyond the basics. Our thorough evaluations, personalized care, and commitment to preventive medicine set us apart. Trust us to be your partner in ensuring your pet's well-being and delivering the highest standard of veterinary care."
                }
                className={"mt-8 text-[#D7D9DD] "}
              />
              <div className="mt-9">
                <Buttons button={"BOOK NOW"} path={"/"} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute !w-[600px] right-0 top-[14px] hidden lg:block">
          <Image
            className="w-full"
            src={"/assests/png/footer-abs-animalhealth.png"}
            width={600}
            height={376}
            alt="footer-abs-animalhealth"
          />
        </div>
        <div className="max-w-[410px] ms-auto block lg:hidden">
          <Image
            className="w-full"
            src={"/assests/png/footer-veternary.png"}
            width={410}
            height={320}
            alt="footer-veternary"
          />
        </div>

        <div className="border-bottom bg-[#D8DADC] h-[1px]"></div>
      </div>
    </>
  );
}

export default PreFooter2;
