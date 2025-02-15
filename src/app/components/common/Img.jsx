import Image from "next/image";
import React from "react";

function Img({ imgsrc, imgW }) {
  return <Image src={imgsrc} width={imgW} />;
}

export default Img;
