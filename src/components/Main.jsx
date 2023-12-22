import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { TotalContext } from "../Context/TotalContext";

function Main({ kasi, obekt }) {
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
