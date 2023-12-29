import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Main({ kasi, obekt }) {
  const [cash1, setCash1] = useState({
    printer: 0,
    start: {
      names: "",
      sum: "",
      cigs: "",
      names2: "",
    },
    end: {
      names: "",
      sum: "",
      cigs: "",
      names2: "",
    },
    cashSales: [],
    vouchers: [],
    ref: [],
  });
  const [total, setTotal] = useState([]);
  return (
    <div>
      <Header kasi={kasi} obekt={obekt} />
      <Outlet />
    </div>
  );
}

export default Main;
