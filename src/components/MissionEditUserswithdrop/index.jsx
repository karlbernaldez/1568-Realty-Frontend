import React from "react";
import { Img, Heading } from "./..";

export default function MissionEditUserswithdrop({ users = "Users", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_mi_users.svg" alt="miusers_one" className="h-[28px] w-[28px]" />
      <Heading size="lg" as="h1" className="ml-4 !text-gray-600">
        {users}
      </Heading>
      <Img src="images/img_arrow_right.svg" alt="arrowright" className="self-end h-[18px] w-[18px] cursor-pointer" />
    </div>
  );
}
