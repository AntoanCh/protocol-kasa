import React from "react";
import CashItem from "./CashItem";

function CashSales({ kasa, handleState, handleCash, state }) {
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
  const handleChange = (event) => {
    if (event.target.value) {
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else if (event.target.value.endsWith(".0")) {
        newValue = parseFloat(event.target.value).toString() + ".0";
      } else if (/^[0-9]*\.[0-9]{2,3}$/.test(event.target.value)) {
        newValue = Number(parseFloat(event.target.value).toFixed(2));
      } else if (event.nativeEvent.inputType === "insertFromPaste") {
        newValue = Number(parseFloat(event.target.value).toFixed(2));
      } else {
        newValue = parseFloat(event.target.value);
      }
      parseFloat(newValue);
      handleState("main", "inkaso2", newValue, kasa);
    } else {
      handleState("main", "inkaso2", 0, kasa);
    }
  };
  return (
    <div>
      <h3>Продажби в брой</h3>
      <div id="totalCash" className="underline">
        <input type="text" value={"Извънредно инкасо :"} disabled></input>
        <input
          type="text"
          onChange={handleChange}
          value={state[kasa - 1].main.inkaso2}
        ></input>
      </div>
      <div id="totalCash" className="underline">
        <input type="text" value={"Остатък едри(10 -100лв) :"} disabled></input>
        <input
          type="text"
          disabled
          value={Math.max(
            0,
            parseFloat(ostatak()) - state[kasa - 1].main.inkaso2
          )}
        ></input>
      </div>
      {generateCashItems(cash)}
      <div id="totalCash" className="underline">
        <input type="text" value={"Сума офис :"} disabled></input>
        <input
          type="text"
          value={(parseFloat(state[kasa - 1].totals.cash) - ostatak()).toFixed(
            2
          )}
          disabled
        ></input>
      </div>
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
