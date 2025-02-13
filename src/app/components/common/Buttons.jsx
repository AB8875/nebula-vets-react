import Link from "next/link";
import React from "react";

function Buttons({ path, button }) {
  return (
    <Link
      href={`${path}`}
      className="roboto-mono text-base sm:text-lg text-[#494336] font-medium leading-[137%]
        rounded-[27px] py-2 sm:py-3 px-5 lg:px-9 border-0 hover:rounded-[5px]
        bg-gradient-to-r hover:bg-gradient-to-tr from-[#FFA280] from-0%
        hover:from-[#8FD9D9] hover:from-50% to-[#8FD9D9] to-100%
        hover:to-[#FFA280] hover:to-50% transtion-all duration-300
        ease-in  "
    >
      {button}
    </Link>
  );
}

export default Buttons;
