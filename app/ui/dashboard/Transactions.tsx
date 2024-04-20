import React, { ReactElement } from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { MdAnalytics } from "react-icons/md";
import Rightbar from "./Rightbar";
import TableItem from "./TableItem";

export default function Transactions() {
  return (
    <div className="bg-bg-light px-4 py-2">
      <h3>Latest Transactions</h3>
      <TableItem />
    </div>
  );
}
