import Image from "next/image";
import React from "react";

export default function User() {
  return (
    <div className="flex items-center">
      <Image
        src="/noavatar.png"
        alt="userImage"
        width="50"
        height="50"
        className="rounded-full"
      />
      <div className="px-4 flex flex-col">
        <h5 className="leading-5">Jonas</h5>
        <h6 className="leading-4">admin</h6>
      </div>
    </div>
  );
}
