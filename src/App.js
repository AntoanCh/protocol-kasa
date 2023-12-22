import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Protocol from "./components/Protocol";
import Home from "./components/Home";
import TotalProtocol from "./components/TotalProtocol";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/n1" element={<Main kasi="2" obekt="n1" />}>
          <Route path="kasa1" element={<Protocol kasa="1" obekt="Н1" />} />
          <Route path="kasa2" element={<Protocol kasa="2" obekt="Н1" />} />
        </Route>
        <Route path="/n5" element={<Main kasi="6" obekt="n5" />}>
          <Route path="kasa1" element={<Protocol kasa="1" obekt="Н5" />} />
          <Route path="kasa2" element={<Protocol kasa="2" obekt="Н5" />} />
          <Route path="kasa3" element={<Protocol kasa="3" obekt="Н5" />} />
          <Route path="kasa4" element={<Protocol kasa="4" obekt="Н5" />} />
          <Route path="kasa5" element={<Protocol kasa="5" obekt="Н5" />} />
          <Route path="kasa6" element={<Protocol kasa="6" obekt="Н5" />} />
          <Route path="total" element={<TotalProtocol obekt="Н5" />} />
        </Route>
        <Route path="/n6" element={<Main kasi="4" obekt="n6" />} />
        <Route path="/n8" element={<Main kasi="3" obekt="n8" />} />
        <Route path="/n10" element={<Main kasi="3" obekt="n10" />} />
        <Route path="/n12" element={<Main kasi="2" obekt="n12" />} />
        <Route path="/n14" element={<Main kasi="6" obekt="n14" />} />
        <Route path="/n16" element={<Main kasi="2" obekt="n16" />} />
        <Route path="/n17" element={<Main kasi="2" obekt="n17" />} />
        <Route path="/n19" element={<Main kasi="2" obekt="n19" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
