"use client";

import React, { useState } from "react";
import { AcoIcon } from "../helper/Icon";

function UseState() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="py-60 ">
        <div className="flex justify-center gap-20">
          <h1>hello</h1>
          <button onClick={toggleOpen}>
            <AcoIcon />
          </button>
        </div>
        {open && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non
            dolorum commodi odit illo molestiae explicabo consequuntur
            asperiores eveniet quam totam veritatis recusandae, facilis culpa
            sequi rerum nemo error maiores.
          </p>
        )}
      </div>
    </>
  );
}

export default UseState;
