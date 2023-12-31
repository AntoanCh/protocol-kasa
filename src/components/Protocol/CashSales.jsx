import React from "react";
import CashItem from "./CashItem";

function CashSales({ kasa, handleState, state }) {
  //constructor function for generating all CashItem components needed

  const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const generateCashItems = () => {
    return cash.map((item, index) => (
      <CashItem
        key={index}
        kasa={kasa}
        placeholder={item}
        state={state}
        handleState={handleState}
      />
    ));
  };
  return (
    <div>
      <h3>Продажби в брой</h3>
      {generateCashItems(cash)}

      <div id="totalCash">
        <input type="text" value={"Всичко в брой :"} disabled></input>
        <input
          type="text"
          disabled
          value={cash
            .reduce((sum, item) => sum + item * state[kasa - 1].cash[item], 0)
            .toFixed(2)}
        ></input>
      </div>
    </div>
  );
}

export default CashSales;
