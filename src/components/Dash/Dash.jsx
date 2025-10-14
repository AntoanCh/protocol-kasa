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
import dayjs from "dayjs";
import { SolarPower } from "@mui/icons-material";

function Dash({ obekt, kasi }) {
  const date = dayjs().format("DD/MM/YYYY");
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([1]);
  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://192.168.0.145:4002/protokoli/all"
          // {
          //   method: "GET",
          //   body: JSON.stringify({
          //     obekt: "Н1",
          //     date: "28/02/2024",
          //   }),
          //   headers: {
          //     "Content-Type": "application/json; charset=UTF-8",
          //   },
          // }
        );

        const result = response.allProtocols.filter(
          (item) =>
            item.obekt === obekt.replace(/^n/, "Н") && item.date === date
        );
        setState(result[0]);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchedData();
  }, []);

  // console.log(data);
  const printers = {
    Н1: ["Избери", "DT511610", "DT794867", "DT794870"],
    Н4: ["Избери", "DT898603", "DT898601"],
    Н5: [
      "Избери",
      "DT794832",
      "DT794834",
      "DT794835",
      "DT794846",
      "DT794831",
      "DT511664",
      "DT511677",
    ],
    Н6: ["Избери", "DT890249", "DT511930", "DT890047", "DT790266", "DT890051"],
    Н7: [],
    Н8: ["Избери", "DT794869", "DT794858", "DT794866", "DT511692"],
    Н10: ["Избери", "DT794373", "DT794374", "DT794358", "DT511727"],
    Н12: ["Избери", "DT556965", "DT890482", "DT890483"],
    Н14: [
      "Избери",
      "DT511361",
      "DT794380",
      "DT792454",
      "DT511359",
      "DT511353",
      "DT511386",
      "DT511574",
    ],
    Н16: ["Избери", "DT794349", "DT794384", "DT511691"],
    Н17: ["Избери", "DT790238", "DT790237", "DT511693"],
    Н19: ["Избери", "DT511387", "DT511380", "DT511607"],
  };

  const newTotalCash = (obj) => {
    let newTotal = 0;
    for (let item in obj) {
      newTotal = newTotal + obj[item][1];
    }
    return newTotal;
  };
  const newTotal = (obj) => {
    let newTotal = 0;
    for (let item in obj) {
      newTotal = newTotal + parseFloat(obj[item]);
    }
    return newTotal;
  };
  const newTotalRef = (obj) => {
    let newTotal = 0;
    for (let item in obj) {
      newTotal = newTotal + parseFloat(obj[item]);
    }
    return newTotal;
  };

  const handleCash = (input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].cash[input][1].toFixed(2);
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
    }
  };

  const handleRef = (group, input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
    }
  };
  //function handling state changing based on cash register
  //so every cash register has its own object in the state
  //group is the second object
  const handleState = (group, input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
    }
  };
  const handleDial = 0;
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
        // <DashProto data={data} />
        <Outlet
          context={[
            state,
            handleDial,
            handleState,
            handleCash,
            handleRef,
            printers,
          ]}
        />
        // <div>
        //   <DashProto />
        //   <h2>Doing stuff with data</h2>
        // </div>
      )}
    </div>
  );
}

export default Dash;
