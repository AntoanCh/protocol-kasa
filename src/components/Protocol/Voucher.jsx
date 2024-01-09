import React from "react";

function Voucher({ label, state, handleState, kasa, name }) {
  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handleState("vouchers", name, newValue, kasa);
    } else {
      handleState("vouchers", name, 0, kasa);
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>

      <input
        name={name}
        placeholder="asdasdasd"
        onChange={handleChange}
        value={state[kasa - 1].vouchers[name]}
        type="text"
      ></input>
    </div>
  );
}

export default Voucher;
