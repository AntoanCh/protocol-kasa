import React from "react";

function RefItem({ label, value, handleValues, position }) {
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
      <input value={value} onChange={handleChange} type="text"></input>
    </div>
  );
}

export default RefItem;
