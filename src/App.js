import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Protocol from "./components/Protocol/Protocol";
import Home from "./components/Home";
import TotalProtocol from "./components/Total/TotalProtocol";
import { useState, useEffect } from "react";
import Dash from "./components/Dash/Dash";
import DashProto from "./components/Dash/DashProto";
import DashHome from "./components/Dash/DashHome";


function App() {
  //constructor function for generating sub-routes for each store
  //based on number of cash registers and name of the store
  const generateRoutes = (kasi, obekt) => {
    const arr = [];
    for (let i = 1; i <= kasi; i++) {
      arr.push(
        <Route
          key={i}
          path={`kasa${i}`}
          element={<Protocol kasa={`${i}`} obekt={obekt} />}
        />
      );
    }
    return arr;
  };
  const sites = [
    ["n1", 2],
    ["n4", 2],
    ["n5", 6],
    ["n6", 5],
    ["n7", 2],
    ["n8", 3],
    ["n10", 3],
    ["n12", 3],
    ["n14", 6],
    ["n16", 2],
    ["n17", 2],
    ["n19", 2],
  ];
  const generateDash = () => {
    // const arr = [];
    const arr = sites.map((site, index) => {
      return (
        <Route
          key={index}
          path={site[0]}
          element={<Dash obekt={site[0]} kasi={site[1]} />}
        >
          {generateRoutes(site[1], site[0])}
        </Route>
      );
    });
    return arr;
  };

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<DashHome />}>
          {generateDash()}
        </Route>
        <Route path="/n1" element={<Main kasi="2" obekt="n1" />}>
          {generateRoutes(2, "Н1")}
          <Route path="total" element={<TotalProtocol obekt="Н1" />} />
        </Route>
        <Route path="/n4" element={<Main kasi="2" obekt="n4" />}>
          {generateRoutes(2, "Н4")}
          <Route path="total" element={<TotalProtocol obekt="Н4" />} />
        </Route>
        <Route path="/n5" element={<Main kasi="10" obekt="n5" />}>
          {generateRoutes(10, "Н5")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n6" element={<Main kasi="5" obekt="n6" />}>
          {generateRoutes(5, "Н6")}
          <Route path="total" element={<TotalProtocol obekt="Н6" />} />
        </Route>
        <Route path="/n7" element={<Main kasi="2" obekt="n7" />}>
          {generateRoutes(2, "Н7")}
          <Route path="total" element={<TotalProtocol obekt="Н7" />} />
        </Route>
        <Route path="/n8" element={<Main kasi="3" obekt="n8" />}>
          {generateRoutes(3, "Н8")}
          <Route path="total" element={<TotalProtocol obekt="Н8" />} />
        </Route>
        <Route path="/n10" element={<Main kasi="3" obekt="n10" />}>
          {generateRoutes(3, "Н10")}
          <Route path="total" element={<TotalProtocol obekt="Н10" />} />
        </Route>
        <Route path="/n12" element={<Main kasi="3" obekt="n12" />}>
          {generateRoutes(3, "Н12")}
          <Route path="total" element={<TotalProtocol obekt="Н12" />} />
        </Route>
        <Route path="/n14" element={<Main kasi="6" obekt="n14" />}>
          {generateRoutes(6, "Н14")}
          <Route path="total" element={<TotalProtocol obekt="Н14" />} />
        </Route>
        <Route path="/n16" element={<Main kasi="2" obekt="n16" />}>
          {generateRoutes(2, "Н16")}
          <Route path="total" element={<TotalProtocol obekt="Н16" />} />
        </Route>
        <Route path="/n17" element={<Main kasi="2" obekt="n17" />}>
          {generateRoutes(2, "Н17")}
          <Route path="total" element={<TotalProtocol obekt="Н17" />} />
        </Route>
        <Route path="/n19" element={<Main kasi="2" obekt="n19" />}>
          {generateRoutes(2, "Н19")}
          <Route path="total" element={<TotalProtocol obekt="Н19" />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
