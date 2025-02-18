import React from "react";

import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Vaccinations"}
        para={
          "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease. Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
        }
        path={"/home"}
        img1={"/assests/png/vaccinations.png"}
        imgW={630}
        imgH={500}
        img2={"/assests/png/new-vacci.png"}
        imgW2={400}
        imgH2={300}
        alt={"vaccinations"}
      />
    </>
  );
}

export default Hero;
