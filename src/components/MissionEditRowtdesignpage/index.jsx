import React from "react";
import { Heading, Img } from "./..";

export default function MissionEditRowtdesignpage({ pages = "Pages", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_tdesign_page_head.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />
      <Heading size="lg" as="h1" className="ml-4 !text-gray-600">
        {pages}
      </Heading>
      <div className="self-end h-[18px] w-[19%] ml-[119px] rotate-[-90deg]" />
    </div>
  );
}
