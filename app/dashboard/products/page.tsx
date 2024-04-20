"use client";

import SearchBar from "@/app/ui/dashboard/SearchBar";
import React, { useEffect, useState } from "react";
import { productsData } from "../../lib/data";
import Image from "next/image";
import Button from "@/app/ui/dashboard/Button";
import Link from "next/link";
import { getProducts } from "@/app/services/apiProducts";
import { products } from "@/app/lib/type";

export default function Products() {
  // const products = getProducts();
  const [products, setProducts] = useState<products[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const pro = await getProducts();
      setProducts(pro);
    };
    fetch();
  }, []);

  console.log(products);
  return (
    <div className="bg-bg-light mt-5 p-2 ">
      <div className="flex justify-between">
        <SearchBar />
        <Link href={"/dashboard/products/add"}>
          <Button text="Add product" />
        </Link>
      </div>
      <table className="w-full items-center">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Category</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="mt-4">
          {products.map((item) => (
            <tr key={item.id} className="">
              <td className="flex gap-2">
                <Image
                  src={item.image || "/noavatar.png"}
                  alt="user-photo"
                  width="50"
                  height="50"
                  className="rounded-full"
                />
                {item.name}
              </td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.createdAt}</td>
              <td>{item.stock}</td>

              <td>
                <div className="flex gap-1">
                  <Link href={`/dashboard/products/${item.id}`}>
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
  );
}
