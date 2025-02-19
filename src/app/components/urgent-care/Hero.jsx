import React from "react";

import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Urgent & Emergency Care"}
        headclass={"!max-w-[600px]"}
        para={
          "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
        }
        path={"/home"}
        img1={"/assests/png/hero-emergency.png"}
        imgW={508}
        imgH={508}
        alt1={"Urgent & Emergency Care"}
        img2={"/assests/png/hero-emergency.png"}
        imgW2={400}
        imgH2={400}
        alt2={"Urgent & Emergency Care"}
      />
    </>
  );
}

export default Hero;
