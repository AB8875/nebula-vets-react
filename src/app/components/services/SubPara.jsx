import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";

function SubPara({ title, para, path, button, paraclass }) {
  return (
    <>
      <div className="max-w-[672px] mb-8">
        <div>
          <SubHeading
            title={title}
            className={"roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"}
          />
          <Para para={para} className={`mt-6 ${paraclass}`} />

          <div className="mt-10 group">
            <Buttons path={path} button={button} />
          </div>
          <div className="bg-black h-[1px] mt-11 md:mt-15 max-w-[633px]"></div>
        </div>
      </div>
    </>
  );
}

export default SubPara;
