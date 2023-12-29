import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Protocol from "./components/Protocol/Protocol";
import Home from "./components/Home";
import TotalProtocol from "./components/Total/TotalProtocol";

function App() {
  //constructor function for generating sub-routes for each store
  //based on number of cash registers and name of the store
  const generateRoutes = (kasi, obekt) => {
    const arr = [];
    for (let i = 1; i <= kasi; i++) {
      arr.push(
        <Route
          path={`kasa${i}`}
          element={<Protocol kasa={`${i}`} obekt={obekt} />}
        />
      );
    }
    return arr;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/n1" element={<Main kasi="2" obekt="n1" />}>
          {generateRoutes(2, "Н1")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n5" element={<Main kasi="6" obekt="n5" />}>
          {generateRoutes(6, "Н5")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n6" element={<Main kasi="4" obekt="n6" />}>
          {generateRoutes(4, "Н6")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n8" element={<Main kasi="3" obekt="n8" />}>
          {generateRoutes(3, "Н8")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n10" element={<Main kasi="3" obekt="n10" />}>
          {generateRoutes(3, "Н10")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n12" element={<Main kasi="3" obekt="n12" />}>
          {generateRoutes(3, "Н12")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n14" element={<Main kasi="6" obekt="n14" />}>
          {generateRoutes(6, "Н14")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n16" element={<Main kasi="2" obekt="n16" />}>
          {generateRoutes(2, "Н16")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n17" element={<Main kasi="2" obekt="n17" />}>
          {generateRoutes(2, "Н17")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n19" element={<Main kasi="2" obekt="n19" />}>
          {generateRoutes(2, "Н19")}
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;