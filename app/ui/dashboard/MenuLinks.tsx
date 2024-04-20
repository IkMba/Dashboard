"use client";

import React, { ReactElement } from "react";

import { menuItems } from "../../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLinks() {
  const pathname = usePathname();

  return (
    <div className="mt-4">
      {menuItems.map((item) => (
        <div key={item.title} className="">
          <h6>{item.title}</h6>
          {item.list.map((it) => (
            <Link
              href={it.path}
              key={it.title}
              className={`flex items-center gap-2 hover:bg-bg-lighter p-2 min-w-56 rounded-md ${
                pathname === it.path ? "" : ""
              }`}
            >
              <div>{it.icon}</div>
              <h5>{it.title}</h5>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
