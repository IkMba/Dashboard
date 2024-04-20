import React from "react";
import SearchBar from "./SearchBar";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="bg-bg-light flex justify-between px-4 py-2  items-center mt-3 ">
      <div className="">Dashboard</div>
      <div className="flex gap-4 items-center">
        <SearchBar />
        <div className="flex text-xl gap-2 pr-2">
          <MdOutlineChat />
          <MdNotifications />
          <MdPublic />
        </div>
      </div>
    </div>
  );
}
