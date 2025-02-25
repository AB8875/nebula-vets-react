import React from "react";
import { cardData } from "../helper/Helper";

import SubPara from "./SubPara";
import MainLeft from "./MainLeft";

function AllCare() {
  return (
    <>
      <div className="md:ps-7 lg:ps-10 xl:ps-12">
        {cardData.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className={`flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between  `}
          >
            {index}
            <MainLeft
              img={item.img}
              imgW={item.imgW}
              imgH={item.imgH}
              alt={item.alt}
              title={item.title}
              para1={item.para1}
              para2={item.para2}
              btn={item.btn}
              path={item.path}
            />
            <div
              className={`bg-[rgba(215,217,221,0.50)] py-[60px] md:py-[80px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0 `}
            >
              {item.subdata.map((items, idx) => (
                <div key={idx}>
                  {index} {idx}
                  <SubPara
                    paraclass={`${index == 1 ? (idx == 0 ? " " : "") : ""}`}
                    title={items.title}
                    para={items.para}
                    path={items.path}
                    button={items.button}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllCare;
