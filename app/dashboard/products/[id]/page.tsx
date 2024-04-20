import React from "react";
import { PageProps } from "@/app/lib/type";

export default function productsDetailsPage({ params }: { params: PageProps }) {
  const { id } = params;

  return <div>productsDetailsPage {id}</div>;
}
