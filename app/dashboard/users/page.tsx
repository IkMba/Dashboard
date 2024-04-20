import React from "react";
import { userData } from "../../lib/data";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import Button from "@/app/ui/dashboard/Button";
import Image from "next/image";
import Link from "next/link";

export default function Users() {
  return (
    <div>
      {" "}
      <div className="bg-bg-light mt-5 p-2 ">
        <div className="flex justify-between">
          <SearchBar />
          <Link href={"/dashboard/users/add"}>
            <Button text="Add user" />
          </Link>
        </div>
        <table className="w-full items-center">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="mt-4">
            {userData.map((item) => (
              <tr key={item.name} className="">
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
                <td>{item.email}</td>
                <td>{item.createdAt}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>

                <td>
                  <div className="flex gap-1">
                    <Link href={`/dashboard/users/${item.id}`}>
                      <Button type="action" action="view" text="view" />
                    </Link>
                    <Button type="action" action="delete" text="delete" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
