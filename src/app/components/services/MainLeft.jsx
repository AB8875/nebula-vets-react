import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";

function MainLeft({
  mainclass,
  imgclass,
  titleclass,
  img,
  imgW,
  imgH,
  alt,
  title,
  para1,
  para2,
  btn,
  path,
  paraclass1,
}) {
  return (
    <>
      <div className={`pt-[80px] 2xl:ms-[250px] ${mainclass}   `}>
        <div
          className={`-mb-12 md:mb-0 max-w-[220px] sm:max-w-[376px] ${imgclass} `}
        >
          <Image
            className="w-full"
            src={img}
            width={imgW}
            height={imgH}
            alt={alt}
          />
        </div>
        <div className={`px-8 md:px-0 ${titleclass} `}>
          <SubHeading title={title} />
          <Para
            para={para1}
            className={`roboto-mono max-w-[520px] mt-4 ${paraclass1}`}
          />

          <Para para={para2} className={"max-w-[480px] mt-8"} />

          <div className="mt-7 group hidden sm:block">
            <Buttons button={btn} path={path} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLeft;
