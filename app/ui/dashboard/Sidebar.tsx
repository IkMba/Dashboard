import React from "react";
import User from "./User";
import MenuLinks from "./MenuLinks";

export default function Sidebar() {
  return (
    <div className=" bg-bg-light h-full px-4 py-4">
      <User />
      <MenuLinks />
    </div>
  );
}
