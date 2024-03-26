import React from "react";
import { Img, Text } from "./..";

export default function AgentsFooter({ rowsperpage = "Rows per page:", ten = "10", p110of100 = "1 of 13", ...props }) {
  return (
    <div {...props}>
      <div className="flex items-center gap-2">
        <Text size="xs" as="p" className="self-end mb-[3px] !text-gray-500_01 !font-inter !font-medium">
          {rowsperpage}
        </Text>
        <div className="flex items-center">
          <Text
            size="xs"
            as="p"
            className="self-end h-[15px] mb-[3px] !text-gray-500_01 tracking-[0.30px] !font-roboto"
          >
            {ten}
          </Text>
          <Img src="images/img_filled_navigati.svg" alt="fillednavigati" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <Text size="xs" as="p" className="!text-gray-500_01 !font-inter !font-medium">
        {p110of100}
      </Text>
      <div className="flex gap-px">
        <div className="flex flex-col">
          <div className="flex flex-col items-center p-3">
            <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center p-3">
            <Img src="images/img_arrow_left.svg" alt="arrowright_five" className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
