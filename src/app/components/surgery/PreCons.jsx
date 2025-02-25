import React from "react";
import SecSection from "../common/SecSection";
import Image from "next/image";

function PreCons() {
  return (
    <>
      <div class="bg-[rgba(215,217,221,0.50)] relative">
        <div class="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[140px] lg:pt-20">
          <div>
            <SecSection
              title={"Does my pet need a pre-consultation?"}
              para={
                "Yes, by conducting a pre-operative consultation, performing a physical examination, and considering bloodwork results, we can minimize the risks associated with surgery and optimize the outcome for your beloved pet. Your pet's safety and well-being are our top priorities throughout the entire surgical process."
              }
            />
          </div>
          <div>
            <SecSection
              title={"How much will it cost?"}
              para={
                "Surgery costs can vary based on several factors, including the specific procedure your pet requires, their weight, any necessary medications, and additional considerations. To provide you with an accurate estimate for your pet's surgery, we recommend booking a pre-surgical consultation with our experienced veterinarians."
              }
              para2={
                "If you prefer, you can also reach out to us via email at nebulavets@gmail.comto request an estimate. Please provide us with as much information as possible about your pet's condition and the specific procedure they may need. Our team will review your request and respond promptly with an estimate based on the information provided."
              }
            />
          </div>
          <div className="mt-5">
            <SecSection
              title={"Do you accept insurance?"}
              para={
                "Yes, at Nebula Vets, we accept all forms of pet insurance. We understand the importance of financial support when it comes to your pet's healthcare needs. By accepting various pet insurance providers, we aim to make the reimbursement process as seamless as possible for our clients."
              }
            />
          </div>
        </div>
        <Image
          class="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-surgery.png"}
          width={1440}
          height={530}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default PreCons;
