import Image from "next/image";
import React from "react";

function FirstSwiper() {
  return (
    <>
      <div className="swiper-slide">
        <div className="max-w-[420px] p-4 sm:p-0">
          <Image
            src={"/assests/png/first.png"}
            width={420}
            height={420}
            alt="first"
          />
        </div>
      </div>
    </>
  );
}

export default FirstSwiper;
