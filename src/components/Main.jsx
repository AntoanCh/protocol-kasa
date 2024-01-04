import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Main({ kasi, obekt }) {
  //function that generates the whole state of the application
  //state is array of objects of nested objects containing values
  const generateState = () => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push({
        start: {
          name: "",
          sum: "",
          cigs: "",
          name2: "",
        },
        end: {
          name: "",
          sum: "",
          cigs: "",
          name2: "",
        },
        cash: {
          100: 0,
          50: 0,
          20: 0,
          10: 0,
          5: 0,
          2: 0,
          1: 0,
          0.5: 0,
          0.2: 0,
          0.1: 0,
          0.05: 0,
          0.02: 0,
          0.01: 0,
        },
        vouchers: {
          sum: 0,
          sodekso: 0,
          etap: 0,
          idunred: 0,
          poshti: 0,
          tombou: 0,
          dejene: 0,
          prizma: 0,
          fiducia: 0,
          terminal: 0,
          cashBack: 0,
          rko: 0,
        },
        ref: {
          lenta: 0,
          check: 0,
          karta: 0,
          glovo: 0,
          klienti: 0,
        },
      });
    }
    return arr;
  };

  const [state, setState] = useState(generateState());
  // const [badge, setBadge] = useState(0);
  // useEffect(() => {
  //   let change;
  //   for (let obj of state) {
  //     Object.keys(obj).forEach((key) => {
  //       if (Object.keys(key).every((i) => i === 0 || i === "")) {
  //         change = false;
  //       } else change = true;
  //     });
  //     if (change) setBadge(badge + 1);
  //   }
  //   console.log(state);
  // }, [state]);

  //function handling state changing based on cash register
  //so every cash register has its own object in the state
  //group is the second object
  const handleState = (group, input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1][group][input] = newValue;
        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1][group][input] = newValue;
        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1][group][input] = newValue;
        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1][group][input] = newValue;
        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1][group][input] = newValue;
        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1][group][input] = newValue;
        setState([...newState]);
        break;
    }
  };

  return (
    <div>
      <Header kasi={kasi} obekt={obekt} />
      <Outlet context={[state, handleState]} />
    </div>
  );
}

export default Main;
