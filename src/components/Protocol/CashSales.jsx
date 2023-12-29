import React from "react";
import CashItem from "./CashItem";
import { useState } from "react";

function CashSales({ kasa }) {
  const createState = function () {
    const arr = [];
    for (let i = 0; i <= 13; i++) arr.push([0, 0]);

    return arr;
  };

  const [values, setValues] = useState(createState());

  const handleValues = (newValue, position, newResult) => {
    const newArr = [...values];
    newArr[position][0] = newValue;
    newArr[position][2] = newResult;
    setValues([...newArr]);
  };
  //constructor function for generating all CashItem components needed

  const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const generateCashItem = (arr) => {
    const cashItems = arr.map((item, index) => (
      <CashItem
        kasa={kasa}
        placeholder={item}
        // position={values[index][1]}
        position={item}
        value={values[index][0]}
        result={values[index][2]}
        handleValues={handleValues}
      />
    ));
    console.log(cashItems);
    return cashItems;
  };
  return (
    <div>
      <h3>Продажби в брой</h3>
      {generateCashItem(cash)}

      <div id="totalCash">
        <input type="text" value={"Всичко в брой :"} disabled></input>
        <input
          type="text"
          disabled
          value={values.reduce((sum, item) => sum + item[2], 0).toFixed(2)}
        ></input>
      </div>
    </div>
  );
}

export default CashSales;
