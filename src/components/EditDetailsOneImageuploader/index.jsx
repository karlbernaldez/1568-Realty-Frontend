import React from "react";
import { Heading, Img } from "./..";

export default function EditDetailsOneImageuploader({
  dropyourimage = "Add image",
  supportsjpeg = "Supports: JPEG, PNG",
  ...props
}) {
  return (
    <div {...props}>
      <Img src="images/img_material_symbol_gray_500_01.svg" alt="materialsymbol" className="h-[40px] w-[40px]" />
      <Heading as="h1" className="!text-teal-600 text-center">
        {dropyourimage}
      </Heading>
      <Heading size="xs" as="h2" className="!text-gray-900_90 opacity-0.6">
        {supportsjpeg}
      </Heading>
    </div>
  );
}
