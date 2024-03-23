import React from "react";
import { Img, Heading } from "./..";

export default function DashboardPageswithdrop({ pages = "Pages", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_tdesign_page_head.svg" alt="tdesignpage_one" className="h-[28px] w-[28px] mb-4" />
      <Heading as="h1" className="mt-1 ml-4">
        {pages}
      </Heading>
      <Img src="images/img_arrow_right.svg" alt="arrowright_five" className="h-[18px] w-[18px] cursor-pointer" />
    </div>
  );
}
