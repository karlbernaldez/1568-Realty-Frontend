import React from "react";
import { Heading, Img } from "./..";

export default function AdminRowmiusersOne({ users = "Users", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_mi_users_teal_900.svg" alt="miusers_one" className="h-[28px] w-[28px]" />
      <Heading as="h1" className="ml-4">
        {users}
      </Heading>
      <div className="self-end h-[18px] w-[20%] rotate-[-90deg]" />
    </div>
  );
}
