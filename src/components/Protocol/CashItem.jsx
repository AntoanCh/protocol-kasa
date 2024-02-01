import React from "react";

function CashItem({ kasa, placeholder, state, handleCash }) {
  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handleCash(placeholder, newValue, kasa);
    } else {
      handleCash(placeholder, 0, kasa);
    }
  };
  return (
    <div className="cash-table">
      <input
        name={placeholder}
        type="text"
        value={state[kasa - 1].cash[placeholder][0]}
        onChange={handleChange}
      ></input>
      <input type="text" defaultValue={`${placeholder} лв`} disabled></input>
      <input
        className="active"
        type="text"
        value={state[kasa - 1].cash[placeholder][1].toFixed(2)}
        // value={(state[kasa - 1].cash[placeholder] * placeholder).toFixed(2)}
        disabled
      ></input>
    </div>
  );
}

export default CashItem;
