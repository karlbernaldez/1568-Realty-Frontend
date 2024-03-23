import React from "react";
import { Heading, Img } from "./..";

export default function FAQsRowtdesignpage({ pages = "Pages", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_tdesign_page_head_teal_900.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />
      <Heading as="h1" className="ml-4">
        {pages}
      </Heading>
      <div className="self-end h-[18px] w-[19%] rotate-[-90deg]" />
    </div>
  );
}
