import React from "react";
import CashCalc from "./CashCalc";
import { useState } from "react";

function CashSales({ disabled }) {
  const createState = function () {
    const arr = [];
    for (let i = 0; i <= 13; i++) arr.push([0, i, 0]);

    return arr;
  };

  const [values, setValues] = useState(createState());

  const handleValues = (newValue, position, newResult) => {
    const newArr = [...values];
    newArr[position][0] = newValue;
    newArr[position][2] = newResult;
    setValues([...newArr]);
  };

  return (
    <div>
      <h3>Продажби в брой</h3>
      <CashCalc
        disabled={disabled}
        placeholder={100}
        position={values[0][1]}
        value={values[0][0]}
        result={values[0][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={50}
        position={values[1][1]}
        value={values[1][0]}
        result={values[1][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={20}
        position={values[2][1]}
        value={values[2][0]}
        result={values[2][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={10}
        position={values[3][1]}
        value={values[3][0]}
        result={values[3][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={5}
        position={values[4][1]}
        value={values[4][0]}
        result={values[4][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={2}
        position={values[5][1]}
        value={values[5][0]}
        result={values[5][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={1}
        position={values[6][1]}
        value={values[6][0]}
        result={values[6][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={0.5}
        position={values[7][1]}
        value={values[7][0]}
        result={values[7][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={0.2}
        position={values[8][1]}
        value={values[8][0]}
        result={values[8][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={0.1}
        position={values[9][1]}
        value={values[9][0]}
        result={values[9][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={0.05}
        position={values[10][1]}
        value={values[10][0]}
        result={values[10][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={0.02}
        position={values[11][1]}
        value={values[11][0]}
        result={values[11][2]}
        handleValues={handleValues}
      />
      <CashCalc
        disabled={disabled}
        placeholder={0.01}
        position={values[12][1]}
        value={values[12][0]}
        result={values[12][2]}
        handleValues={handleValues}
      />
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
