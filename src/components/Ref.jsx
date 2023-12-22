import React from "react";
import RefItem from "./RefItem";
import { useState } from "react";

function Ref() {
  const createState = function () {
    const arr = [];
    for (let i = 0; i <= 4; i++) arr.push([0, i]);

    return arr;
  };

  const [values, setValues] = useState(createState());

  const handleValues = (newValue, position) => {
    const newArr = [...values];
    newArr[position][0] = newValue;

    setValues([...newArr]);
  };
  return (
    <div>
      <h3>Справка</h3>
      <RefItem
        handleValues={handleValues}
        position={values[0][1]}
        value={values[0][0]}
        label="По лента:"
      />
      <RefItem
        handleValues={handleValues}
        position={values[1][1]}
        value={values[1][0]}
        label="Чек:"
      />
      <RefItem
        handleValues={handleValues}
        position={values[2][1]}
        value={values[2][0]}
        label="С карта:"
      />
      <RefItem
        handleValues={handleValues}
        position={values[3][1]}
        value={values[3][0]}
        label="Кредит(Glovo):"
      />
      <div className="inline-input">
        <label>Бр Клиенти:</label>
        <input type="text"></input>
      </div>
      <div className="inline-input">
        <label>Общо:</label>
        <input
          disabled
          value={values.reduce((sum, item) => sum + item[0], 0)}
          type="text"
        ></input>
      </div>
    </div>
  );
}

export default Ref;
