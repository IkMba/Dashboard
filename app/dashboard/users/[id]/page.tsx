import React from "react";
import { PageProps } from "@/app/lib/type";

export default function userDetailspage({ params }: { params: PageProps }) {
  const { id } = params;
  return <div>userdetails {id}</div>;
}
