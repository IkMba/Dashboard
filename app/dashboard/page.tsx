import React from "react";
import Card from "../ui/dashboard/Card";
import Transactions from "../ui/dashboard/Transactions";
import Rightbar from "../ui/dashboard/Rightbar";
import { summary } from "../lib/data";
import Chart from "../ui/dashboard/Chart";

function Dashboard() {
  return (
    <div className="flex mt-5 justify-between w-full gap-4">
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex gap-2">
          {summary.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="max-w-64">
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
