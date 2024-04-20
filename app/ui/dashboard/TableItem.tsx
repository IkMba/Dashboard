import { transactionsData } from "@/app/lib/data";
import { tr } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const transactions = transactionsData;
export default function TableItem() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody className="mt-4">
        {transactions.map((item) => (
          <tr key={item.name} className="mt-8">
            <td className="flex gap-2">
              <Image
                src={"/noavatar.png"}
                alt="user-photo"
                width="50"
                height="50"
                className="rounded-full"
              />
              {item.name}
            </td>
            <td>
              <Button type="action" action={item.status} text={item.status} />
            </td>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
