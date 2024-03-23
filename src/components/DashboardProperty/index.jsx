import React from "react";
import { Img, Heading } from "./..";

export default function DashboardProperty({ property = "Property", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_material_symbol.svg" alt="materialsymbol" className="h-[28px] w-[28px] my-[11px]" />
      <Heading as="h1" className="ml-4">
        {property}
      </Heading>
      <Img
        src="images/img_arrow_right.svg"
        alt="arrowright_one"
        className="self-end h-[18px] w-[18px] cursor-pointer"
      />
    </div>
  );
}
