import React from "react";
import CashItem from "./CashItem";
import { Box } from "@mui/material";
import { useAppState } from "../AppStateContext";



function CashSales({ kasa, 
  // handleState, handleCash, state ,
   registerInput, handleKeyDown, inputIndexOffset  }) {

const { state, handleCash, handleState, handleRef, handleDial, currency } = useAppState();
  
  
  //constructor function for generating all CashItem components needed

  const cash = currency == "EUR" ?[500,200,100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01] :[100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const generateCashItems = () => {
    return cash.map((item, i) => {
      const index = inputIndexOffset  + i
return (
      <CashItem
        key={index}
        kasa={kasa}
        placeholder={item}
        state={state}
        handleCash={handleCash}
        currency={currency}
        ref={(el) => registerInput(el, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        placeholderInput={`Input ${i + 1}`}
      />
    )
    }
      
      );
  };
  const ostatak = () => {
    let count = 0;
    for (const [key, value] of Object.entries(state[kasa - 1].cash)) {
      if (key > 5) {
        count = value[1] + count;
      }
    }
    return count;
  };
  return (
    <Box>
      <h3>Продажби в брой</h3>
      <Box id="totalCash" className="underline">
        <input type="text" value={currency === "BGN" ? "Остатък едри(10 -100лв) :" :"Остатък едри(10 -500 €) :" } disabled></input>
        <input type="text" disabled value={ostatak().toLocaleString("bg-BG", {
            style: "currency",
            currency: currency ,
          })}></input>
      </Box>
      {generateCashItems(cash)}
      <Box id="totalCash" className="underline">
        <input type="text" value={ currency == "BGN" ?"Дребни(0.01 - 5лв) :" : "Дребни(0.01 - 5 €) :"} disabled></input>
        <input
          type="text"
          value={(parseFloat(state[kasa - 1].totals.cash) - ostatak()).toLocaleString("bg-BG", {
            style: "currency",
            currency: currency,
          })}
          disabled
        ></input>
      </Box>
      <Box id="totalCash">
        <input type="text" value={"Всичко в брой :"} disabled></input>
        <input
          type="text"
          disabled
          value={parseFloat(state[kasa - 1].totals.cash).toLocaleString("bg-BG", {
            style: "currency",
            currency:currency,
          })}
        ></input>
      </Box>
    </Box>
  );
}

export default CashSales;
