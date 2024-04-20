import React from "react";

export default function userDetailspage({ params }) {
  const { id } = params;
  return <div>userdetails {id}</div>;
}
