import React from "react";
import CashItem from "./CashItem";

function CashSales({ kasa, handleCash, state }) {
  //constructor function for generating all CashItem components needed

  const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const generateCashItems = () => {
    return cash.map((item, index) => (
      <CashItem
        key={index}
        kasa={kasa}
        placeholder={item}
        state={state}
        handleCash={handleCash}
      />
    ));
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
    <div>
      <h3>Продажби в брой</h3>
      <div id="totalCash">
        <input type="text" value={"Остатък(10 -100лв) :"} disabled></input>
        <input type="text" disabled value={ostatak().toFixed(2)}></input>
      </div>
      {generateCashItems(cash)}

      <div id="totalCash">
        <input type="text" value={"Всичко в брой :"} disabled></input>
        <input
          type="text"
          disabled
          value={parseFloat(state[kasa - 1].totals.cash).toFixed(2)}
        ></input>
      </div>
    </div>
  );
}

export default CashSales;
