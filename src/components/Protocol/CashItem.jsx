import React from "react";

function CashItem({ kasa, placeholder, state, handleState }) {
  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handleState("cash", placeholder, newValue, kasa);
    } else {
      handleState("cash", placeholder, 0, kasa);
    }
  };
  return (
    <div className="cash-table">
      <input
        name={placeholder}
        type="text"
        value={state[kasa - 1].cash[placeholder]}
        onChange={handleChange}
      ></input>
      <input type="text" defaultValue={`${placeholder} лв`} disabled></input>
      <input
        type="text"
        value={(state[kasa - 1].cash[placeholder] * placeholder).toFixed(2)}
        disabled
      ></input>
    </div>
  );
}

export default CashItem;
