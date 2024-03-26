import React from "react";
import { Img, Heading } from "./..";

export default function LoadingScreenUserswithdrop({ users = "Users", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_mi_users.svg" alt="miusers_one" className="h-[28px] w-[28px] mb-4" />
      <Heading as="h1" className="mt-1 ml-4 !text-gray-600">
        {users}
      </Heading>
      <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[18px] w-[18px] cursor-pointer" />
    </div>
  );
}
