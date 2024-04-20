import { HTMLAttributes } from "react";

export type PageProps = {
  params: { slug: string };
  id: string;
};

export type products = {
  // id: String | HTMLAttributes<HTMLTableRowElement>;
  id: number;
  name: String;
  image?: HTMLImageElement;
  description: String;
  createdAt: String;
  price: String;
  stock: String;
};
