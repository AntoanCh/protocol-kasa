import React from "react";

function Voucher({ value, label, handleValues, position, disabled }) {
  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseFloat(event.target.value);

      handleValues(newValue, position);
    } else {
      handleValues(0, position);
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>
      <input
        disabled={disabled}
        onWheel={(e) => e.target.blur()}
        value={value.toString()}
        onChange={handleChange}
        type="number"
      ></input>
    </div>
  );
}

export default Voucher;
