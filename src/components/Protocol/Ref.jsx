import React from "react";
import RefItem from "./RefItem";

function Ref({ state, handleRef, kasa, handleState }) {
  const refs = [
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
    ["В Брой", "broi"],
  ];
  const generateRefItems = () => {
    return refs.map((item, index) => (
      <RefItem
        key={index}
        state={state}
        handleRef={handleRef}
        label={item[0]}
        name={item[1]}
        kasa={kasa}
      />
    ));
  };

  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handleState("main", "klienti", newValue, kasa);
    } else {
      handleState("main", "klienti", 0, kasa);
    }
  };
  return (
    <div>
      <h3>Справка</h3>
      <div className="inline-input">
        <label>По лента:</label>
        <input
          disabled
          value={state[kasa - 1].totals.ref.toFixed(2)}
          type="text"
        ></input>
      </div>
      {generateRefItems()}

      <div className="inline-input">
        <label>Бр Клиенти:</label>
        <input
          name="klienti"
          onChange={handleChange}
          value={state[kasa - 1].main.klienti}
          type="text"
        ></input>
      </div>
    </div>
  );
}

export default Ref;
