import React, { useEffect, useState } from "react";
import DashHeader from "./DashHeader";
import axios from "axios";
import DashProto from "./DashProto";
import { Outlet } from "react-router-dom";
import DashTabs from "./DashTabs";
import LinearProgress from "@mui/material/LinearProgress";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { Draggable } from "react-beautiful-dnd";

function Dash({ obekt, kasi }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://192.168.0.145:4002/protokoli"
        );
        setData(JSON.parse(response.allProtocols[3].data));
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchedData();
  }, []);

  console.log(data);
  return (
    <div>
      <DashTabs obekt={obekt} kasi={kasi} />
      <p>asdasd</p>
      {loading && (
        <div style={{ margin: "0 50%" }}>
          <CircularProgress color="success" />
          <LinearProgress color="success" />
        </div>
      )}
      {!loading && (
        <DashProto />
        // <Outlet />
        // <div>
        //   <DashProto />
        //   <h2>Doing stuff with data</h2>
        // </div>
      )}
    </div>
  );
}

export default Dash;
