import Image from "next/image";
import React from "react";
import { AcoIcon } from "../helper/Icon";

function AccordionHome() {
  return (
    <>
      <div className="bg-[#494336]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px]">
          <div className="xl:px-12">
            <h1 className="text-[#D7D9DD] avanttTRIAL-Normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-0 text-center sm:text-start lg:pl-[50px]">
              Why choose Nebula Vets?
            </h1>

            <div className="flex flex-col gap-y-8 gap-x-0 xl:gap-x-15 md:gap-y-0 md:flex-row items-start justify-between xl:justify-around mt-[40px] sm:mt-[60px] px-4">
              <div className="flex flex-col gap-y-8 w-full md:w-[39%]">
                <div
                  onclick="toggleAccordion('accordion1')"
                  className="max-w-none md:max-w-[480px]"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
                      Cutting-Edge Technology
                    </h1>
                    <span
                      id="icon-accordion1"
                      className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
                    >
                      <AcoIcon />
                    </span>
                  </div>

                  <div
                    id="accordion1"
                    className="hidden pt-2 max-w-[400px] text-[#D7D9DD]"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat, ducimus?
                  </div>
                  <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100% h-[2px] mt-6"></div>
                </div>
                <div
                  onclick="toggleAccordion('accordion2')"
                  className="max-w-none md:max-w-[480px]"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
                      Independant
                    </h1>
                    <span
                      id="icon-accordion1"
                      className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
                    >
                      <AcoIcon />
                    </span>
                  </div>

                  <div
                    id="accordion2"
                    className="hidden pt-2 max-w-[400px] text-[#D7D9DD]"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat, ducimus?
                  </div>
                  <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100% h-[2px] mt-6"></div>
                </div>
                <div
                  onclick="toggleAccordion('accordion3')"
                  className="max-w-none md:max-w-[480px]"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
                      Progressive Medicine
                    </h1>
                    <span>
                      <span
                        id="icon-accordion1"
                        className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
                      >
                        <AcoIcon />
                      </span>
                    </span>
                  </div>

                  <div
                    id="accordion3"
                    className="hidden pt-2 max-w-[400px] text-[#D7D9DD]"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat, ducimus?
                  </div>
                  <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100% h-[2px] mt-6"></div>
                </div>
              </div>
              <div className="flex flex-col gap-y-8 w-full md:w-[39%]">
                <div
                  onclick="toggleAccordion('accordion4')"
                  className="max-w-none md:max-w-[480px]"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
                      Environmentally conscious​
                    </h1>
                    <span
                      id="icon-accordion1"
                      className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
                    >
                      <AcoIcon />
                    </span>
                  </div>

                  <div
                    id="accordion4"
                    className="hidden pt-2 max-w-[400px] text-[#D7D9DD]"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat, ducimus?
                  </div>
                  <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100% h-[2px] mt-6"></div>
                </div>
                <div
                  onclick="toggleAccordion('accordion5')"
                  className="max-w-none md:max-w-[480px]"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
                      Expert Team
                    </h1>
                    <span
                      id="icon-accordion1"
                      className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
                    >
                      <AcoIcon />
                    </span>
                  </div>

                  <div
                    id="accordion5"
                    className="hidden pt-2 max-w-[400px] text-[#D7D9DD]"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat, ducimus?
                  </div>
                  <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100%s h-[2px] mt-6"></div>
                </div>
                <div
                  onclick="toggleAccordion('accordion6')"
                  className="max-w-none md:max-w-[480px]"
                >
                  <div className="flex items-center justify-between">
                    <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
                      Education
                    </h1>
                    <span
                      id="icon-accordion1"
                      className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
                    >
                      <AcoIcon />
                    </span>
                  </div>

                  <div
                    id="accordion6"
                    className="hidden pt-2 max-w-[400px] text-[#D7D9DD]"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat, ducimus?
                  </div>
                  <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100% h-[2px] mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionHome;
