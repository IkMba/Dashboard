import { cardType } from "@/app/lib/type";
import React from "react";

export default function Card({ item }: { item: cardType }) {
  return (
    <div className="bg-bg-light flex-1 px-4 py-2 rounded-lg flex flex-col gap-2 hover:bg-bg-lighter">
      <div className="flex pt-2 gap-2 items-center">
        <span className="text-lg">{item.icon}</span>
        <h6>{item.title}</h6>
      </div>
      <div className="ml-6">
        <h4>{item.number}</h4>
        <h6 className="text-green mt-1.5">
          <span className="text-text-green">{item.change}%</span> more than
          previous week
        </h6>
      </div>
    </div>
  );
}
