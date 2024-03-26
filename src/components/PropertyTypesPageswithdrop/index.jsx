import React from "react";
import { Img, Heading } from "./..";

export default function PropertyTypesPageswithdrop({ pages = "Pages", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_tdesign_page_head_gray_600.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />
      <Heading size="lg" as="h1" className="ml-4 !text-gray-600">
        {pages}
      </Heading>
      <Img src="images/img_arrow_right.svg" alt="arrowright" className="self-end h-[18px] w-[18px] cursor-pointer" />
    </div>
  );
}
