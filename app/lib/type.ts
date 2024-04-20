import { HTMLAttributes, ReactElement } from "react";

export type PageProps = {
  params: { slug: string };
  id: string;
};

export type products = {
  // id: String | HTMLAttributes<HTMLTableRowElement>;
  id: number;
  name: string;
  image?: HTMLImageElement;
  description: string;
  createdAt: string;
  price: string;
  stock: string;
};

export type bigCardType = {
  tag: string;
  title: string;
  tagline: string;
  details: string;
  buttonIcon: ReactElement;
  buttonText: string;
};

export type cardType = {
  icon: ReactElement;
  title: string;
  change: number;
  number: number;
};
