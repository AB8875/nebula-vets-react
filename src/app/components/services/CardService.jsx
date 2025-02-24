import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";
import SubPara from "./SubPara";

function CardService() {
  return (
    <>
      <div
        id={item.id}
        className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between  "
      >
        <div className="pt-[80px] 2xl:ms-[250px]  ">
          <div className="-mb-12 md:mb-0 max-w-[220px] sm:max-w-[376px] ">
            <Image
              className="w-full"
              src={item.img}
              width={item.imgW}
              height={item.imgH}
              alt={item.alt}
            />
          </div>
          <div className="px-8 md:px-0">
            <SubHeading title={item.title} />
            <Para
              para={item.para1}
              className={"roboto-mono max-w-[520px] mt-4"}
            />

            <Para para={item.para2} className={"max-w-[480px] mt-8"} />

            <div className="mt-10 group hidden sm:block">
              <Buttons button={item.btn} path={item.path} />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(215,217,221,0.50)] py-[60px] md:py-[80px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0">
          {subdata.map((items, idx) => (
            <SubPara
              key={idx}
              title={items.title}
              para={items.para}
              path={items.path}
              button={items.button}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardService;
