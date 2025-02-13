import Image from "next/image";
import React from "react";
import Buttons from "../common/Buttons";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

function AddCare() {
  return (
    <>
      <div
        id="additional"
        className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between"
      >
        <div className="pt-[130px] 2xl:ms-[250px]">
          <div className="-mb-12 md:mb-0 max-w-[240px] sm:max-w-[370px]">
            <Image
              className="w-full"
              src={"/assests/png/additonal-veternary.png"}
              width={370}
              height={309}
              alt="additonal-veternary"
            />
          </div>
          <div className="mt-0 md:mt-[90px] px-8 md:px-0">
            <SubHeading title={"Additional Services"} />
            <Para
              para={
                "Additional Services that Go Above and Beyond: Experience Exceptional Veterinary Care at Nebula Vets"
              }
              className={"max-w-none md:max-w-[518px] mt-6 roboto-mono"}
            />
            <Para
              para={
                "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs."
              }
              className={"max-w-none md:max-w-[481px] mt-9"}
            />
            <div className="mt-[100px] group">
              <Buttons button={"BOOK NOW"} path={"/"} />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(215,217,221,0.50)] py-[60px] md:py-[80px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0">
          <div className="max-w-[672px]">
            <SubHeading
              title={"Travel Certificates"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                "From domestic or international travel, you will usually require a health certificate for your pet. We can help with the necessary paperwork to allow your pet to join you on your travels –the process is simple and easy."
              }
              className={"mt-6"}
            />
            <div className="mt-10 group">
              <Buttons button={"LEARN MORE"} path={"/"} />
            </div>
            <div className="bg-black h-[1px] mt-[45px] md:mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <SubHeading
              title={"Skin & Dermatology"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                "If your pet is experiencing uncomfortable symptoms such as itchy skin, hair loss, or rashes, it may be indicative of allergies or infections. Our team of highly trained veterinarians specializes in diagnosing and treating various skin issues that can cause distress to your beloved companion. With their expertise and comprehensive understanding of dermatological conditions, they will diligently assess your pet's symptoms and develop a tailored treatment plan to address the underlying cause of their discomfort."
              }
              className={"mt-6"}
            />
            <div className="mt-10 group">
              <Buttons button={"LEARN MORE"} path={"/"} />
            </div>
            <div className="bg-black h-[1px] mt-[45px] md:mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <SubHeading
              title={"Microchipping"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. "
              }
              className={"mt-6"}
            />
            <div className="mt-10 group">
              <Buttons button={"LEARN  MORE"} path={"/"} />
            </div>
            <div className="bg-black h-[1px] mt-[45px] md:mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <SubHeading
              title={"Laser Therapy"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                "Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets."
              }
              className={"mt-6"}
            />
            <div className="mt-10 group">
              <Buttons button={"LEARN MORE"} path={"/"} />
            </div>
            <div className="bg-black h-[1px] mt-[45px] md:mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <SubHeading
              title={"Hospice & Euthanasia"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                "The decision to say goodbye to your pet is the most difficult decision you’ll have to make. Our team at nebula vets is here to guide you through the process with compassion and can perform end-of-life services at the time of your choosing."
              }
              className={"mt-6"}
            />
            <div className="mt-10 group">
              <Buttons button={"LEARN MORE"} path={"/"} />
            </div>
            <div className="bg-black h-[1px] mt-[45px] md:mt-[60px] max-w-[633px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCare;
