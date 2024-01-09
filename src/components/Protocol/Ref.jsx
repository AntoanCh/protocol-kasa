import React from "react";
import RefItem from "./RefItem";

function Ref({ state, handleRef, kasa, handleClients }) {
  const refs = [
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
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

      handleClients(kasa, newValue);
    } else {
      handleClients(kasa, 0);
    }
  };
  return (
    <div>
      <h3>Справка</h3>
      <div className="inline-input">
        <label>По лента:</label>
        <input disabled value={state[kasa - 1].totals.cash} type="text"></input>
      </div>
      {generateRefItems()}

      <div className="inline-input">
        <label>Бр Клиенти:</label>
        <input
          name="klienti"
          onChange={handleChange}
          value={state[kasa - 1].klienti}
          type="text"
        ></input>
      </div>
      <div className="inline-input">
        <label>Общо:</label>
        <input
          disabled
          value={state[kasa - 1].totals.cash + state[kasa - 1].totals.ref}
          type="text"
        ></input>
      </div>
    </div>
  );
}

export default Ref;
