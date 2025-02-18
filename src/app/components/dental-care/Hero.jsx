import React from "react";

import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Dental Care"}
        para={
          "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
        }
        path={"/home"}
        img1={"/assests/png/dental-hero.png"}
        imgW={500}
        imgH={414}
        img2={"/assests/png/dental-hero.png"}
        imgW2={400}
        imgH2={250}
        alt={"Dental-Care"}
      />
    </>
  );
}

export default Hero;
