import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

function DentScale() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div>
            <SubHeading title={"Dentals - Scale & Polish"} />
            <Para
              para={
                "Dental health is a vital aspect of your pet's overall well-being. Just like humans, pets can experience dental problems, including plaque buildup, gum disease, and tooth decay. At Nebula Vets, we prioritize dental care and offer comprehensive dental services to ensure your pet's oral health remains in top condition."
              }
              className={"mt-5"}
            />
          </div>
          <div className="mt-14">
            <SubHeading title={"When to schedule a dental consultation"} />
            <Para
              para={
                "If you notice any signs of dental problems in your pet, such as bad breath, red or swollen gums, difficulty eating, or loose teeth, it's essential to seek professional dental care. Schedule a dental consultation at Nebula Vets to have our skilled team assess your pet's dental health and recommend the most appropriate treatment options."
              }
              className={"mt-5"}
            />
          </div>
          <div className="mt-14">
            <SubHeading title={"Post Dental Care"} />
            <Para
              para={
                "Most pets recover quickly after a dental. A little tiredness, and some post-anesthesia anxiety is normal. You can feed your pet the evening of their procedure; soft food for 14 days is recommended if any dental extractions were performed. If your pet had any extractions performed, we will send them home with pain relief to keep them comfortable."
              }
              className={"mt-5"}
            />
          </div>
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-vaccinations.png"}
          width={1440}
          height={500}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default DentScale;
