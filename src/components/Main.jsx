import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { TotalContext } from "../Context/TotalContext";
import { Cash1Context } from "../Context/Cash1Context";
import { Cash2Context } from "../Context/Cash2Context";
import { Cash3Context } from "../Context/Cash3Context";
import { Cash4Context } from "../Context/Cash4Context";
import { Cash5Context } from "../Context/Cash5Context";
import { Cash6Context } from "../Context/Cash6Context";

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
      <TotalContext.Provider value={{ total, setTotal }}>
        <Header kasi={kasi} obekt={obekt} />
        <Outlet />
      </TotalContext.Provider>
    </div>
  );
}

export default Main;
