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
        <Header obekt={obekt} />
        <Outlet />
      </TotalContext.Provider>
    </div>
  );
}

export default Main;
