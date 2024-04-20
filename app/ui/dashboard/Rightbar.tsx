import { blog } from "@/app/lib/data";
import React from "react";
import Bigcard from "./Bigcard";

export default function Rightbar() {
  return (
    <div className="flex flex-col gap-4">
      {blog.map((item) => (
        <Bigcard item={item} key={item.title} />
      ))}
    </div>
  );
}
