/* eslint-disable default-case */
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
          100: [0, 0],
          50: [0, 0],
          20: [0, 0],
          10: [0, 0],
          5: [0, 0],
          2: [0, 0],
          1: [0, 0],
          0.5: [0, 0],
          0.2: [0, 0],
          0.1: [0, 0],
          0.05: [0, 0],
          0.02: [0, 0],
          0.01: [0, 0],
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
        },
        other: {
          terminal: 0,
          cashBack: 0,
          rko: 0,
        },
        ref: {
          check: 0,
          karta: 0,
          glovo: 0,
        },
        ref2: {
          inkaso: 0,
          storno: 0,
        },
        totals: {
          cash: 0,
          vouchers: 0,
          other: 0,
          total: 0,
          ref: 0,
          ref2: 0,
          lenta: 0,
          obshto: 0,
        },
        klienti: 0,
      });
    }
    return arr;
  };

  const [state, setState] = useState(generateState());

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
      newTotal = newTotal + obj[item];
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
        newState[kasa - 1].totals.cash = newTotalCash(newState[kasa - 1].cash);

        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(newState[kasa - 1].cash);

        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(newState[kasa - 1].cash);

        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(newState[kasa - 1].cash);

        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(newState[kasa - 1].cash);

        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(newState[kasa - 1].cash);

        setState([...newState]);
        break;
    }
  };

  const handleClients = (kasa, newValue) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1].klienti = newValue;
        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1].klienti = newValue;
        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1].klienti = newValue;
        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1].klienti = newValue;
        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1].klienti = newValue;
        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1].klienti = newValue;
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

  return (
    <div>
      <Header kasi={kasi} obekt={obekt} />
      <Outlet
        context={[state, handleState, handleCash, handleRef, handleClients]}
      />
    </div>
  );
}

export default Main;
