import React from "react";
import { useState } from "react";
import Voucher from "./Voucher";

function Vouchers({ disabled }) {
  const { total, setTotal } = useState();

  const createState = function () {
    const arr = [];
    for (let i = 0; i <= 12; i++) arr.push([0, i]);

    return arr;
  };

  const [values, setValues] = useState(createState());

  const handleValues = (newValue, position) => {
    const newArr = [...values];
    newArr[position][0] = newValue;

    const newTotal = [...total];
    newTotal[2] = [...newArr];
    setTotal([...newTotal]);
    setValues([...newArr]);
  };

  return (
    <div>
      <h3>Ваучери</h3>
      <Voucher
        disabled={disabled}
        value={values[0][0]}
        position={values[0][1]}
        handleValues={handleValues}
        label={"Суми по видове ваучери"}
      />
      <Voucher
        disabled={disabled}
        value={values[1][0]}
        position={values[1][1]}
        handleValues={handleValues}
        label={"Содексо"}
      />
      <Voucher
        disabled={disabled}
        value={values[2][0]}
        position={values[2][1]}
        handleValues={handleValues}
        label={"Етап Адресс"}
      />
      <Voucher
        disabled={disabled}
        value={values[3][0]}
        position={values[3][1]}
        handleValues={handleValues}
        label={"Идънред"}
      />
      <Voucher
        disabled={disabled}
        value={values[4][0]}
        position={values[4][1]}
        handleValues={handleValues}
        label={"Бълг. пощи"}
      />
      <Voucher
        disabled={disabled}
        value={values[5][0]}
        position={values[5][1]}
        handleValues={handleValues}
        label={"томбоу"}
      />
      <Voucher
        disabled={disabled}
        value={values[6][0]}
        position={values[6][1]}
        handleValues={handleValues}
        label={"Дежене"}
      />
      <Voucher
        disabled={disabled}
        value={values[7][0]}
        position={values[7][1]}
        handleValues={handleValues}
        label={"Призма лукс"}
      />
      <Voucher
        disabled={disabled}
        value={values[8][0]}
        position={values[8][1]}
        handleValues={handleValues}
        label={"Фидуция"}
      />
      <Voucher
        disabled={disabled}
        value={values[9][0]}
        position={values[9][1]}
        handleValues={handleValues}
        label={"Терминал общо"}
      />
      <Voucher
        disabled={disabled}
        value={values[10][0]}
        position={values[10][1]}
        handleValues={handleValues}
        label={"Кеш бек"}
      />
      <Voucher
        disabled={disabled}
        value={values[11][0]}
        position={values[11][1]}
        handleValues={handleValues}
        label={"РКО"}
      />
      <div className="inline-input">
        <label>Тотал</label>
        <input
          disabled
          value={values.reduce((sum, item) => sum + item[0], 0).toFixed(2)}
          step="0.01"
          type="number"
        ></input>
      </div>
    </div>
  );
}

export default Vouchers;
