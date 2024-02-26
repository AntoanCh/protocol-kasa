import React from "react";
import DashHeader from "./DashHeader";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function DashHome() {
  return (
    <div>
      <DashHeader />
      ИЗБЕРЕТЕ ОБЕКТ
      <div
        style={{
          margin: "0 15%",
          border: "2px solid black",
          borderRadius: "5px",
          boxShadow: "5px 5px 5px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashHome;
