import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Veterinary Services"}
        para={
          "At Nebula Vets, we take pride in offering an extensive range of services to meet the diverse needs of our patients. Our commitment to comprehensive care ensures that we can provide the highest quality veterinary services under one roof."
        }
        path={"/home"}
        img1={"/assests/png/dog-cat-2.png"}
        imgW={527}
        imgH={500}
        alt1={"Veterinaty-Services"}
        img2={"/assests/png/dog-cat-2.png"}
        imgW2={400}
        imgH2={350}
        alt2={"Veterinaty-Services"}
        imgclass2={"!max-w-[220px]"}
        mainclass={"flex-col-reverse"}
      />
    </>
  );
}

export default Hero;
