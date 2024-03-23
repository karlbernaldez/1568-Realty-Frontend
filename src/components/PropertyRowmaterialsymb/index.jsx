import React from "react";
import { Heading, Img } from "./..";

export default function PropertyRowmaterialsymb({ property = "Property", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_material_symbol_teal_900.svg" alt="materialsymbol" className="h-[28px] w-[28px]" />
      <Heading as="h1" className="ml-4">
        {property}
      </Heading>
      <div className="self-end h-[18px] w-[16%] rotate-[-90deg]" />
    </div>
  );
}
