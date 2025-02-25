import Image from "next/image";
import React from "react";
import SecSection from "../common/SecSection";

function WhySpay() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[140px] lg:pt-20">
          <div>
            <SecSection
              title={"Why spay or neuter?"}
              para={
                "Spaying and neutering has many health and behavioral benefits for your cat or dog. Spaying at a young age has been shown to reduce the occurrence of mammary cancers and uterine infections (also known as pyometra). It also removes heat cycles and coming into season."
              }
              para2={
                "Neutering has been proven to prevent testicular cancer and may prevent different forms of prostate diseases, and both spaying and neutering may also help prevent or alter unwanted behaviors, such as aggressive behavior and urine marking. When to spay or neuter."
              }
            />
          </div>
          <div className="mt-5">
            <SecSection
              para={
                "Dog spays and neuters are performed between the ages of 6 and 9 months of age. Large breed dogs, it is advised to wait until they’re a little older to take full advantage of their growth hormones and allow their bones to mature."
              }
              title={" When to spay or neuter?"}
              para2={
                "In older pets who are no spayed or neutered, we’ll discuss all of your options at your first wellness visit and advise on the best time for your pet to be spay or neutered."
              }
            />
          </div>
          <div className="mt-5">
            <SecSection
              title={"Long-Term Cost Savings"}
              para={
                "Spaying or neutering your pet can save you money in the long run. The cost of the procedure is typically less than the expenses associated with caring for a litter or treating health conditions that may arise from not being spayed or neutered."
              }
            />
          </div>
        </div>
        <Image
          class="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-surgery.png"}
          width={1440}
          height={520}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default WhySpay;
