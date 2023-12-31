import React from "react";
import RefItem from "./RefItem";

function Ref({ state, handleState, kasa }) {
  const refs = [
    ["По лента:", "lenta"],
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
    ["Бр. Клиенти", "klienti"],
  ];
  const generateRefItems = () => {
    return refs.map((item, index) => (
      <RefItem
        key={index}
        state={state}
        handleState={handleState}
        label={item[0]}
        name={item[1]}
        kasa={kasa}
      />
    ));
  };
  return (
    <div>
      <h3>Справка</h3>
      {generateRefItems()}
      <div className="inline-input">
        <label>Общо:</label>
        <input
          disabled
          value={refs
            .reduce(
              (sum, item) => sum + parseFloat(state[kasa - 1].ref[item[1]]),
              0
            )
            .toFixed(2)}
          type="text"
        ></input>
      </div>
    </div>
  );
}

export default Ref;
