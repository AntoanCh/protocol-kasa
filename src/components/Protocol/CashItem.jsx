import React from "react";

function CashItem({
  value,
  handleValues,
  position,
  placeholder,
  result,
  kasa,
}) {
  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);
      const newResult = newValue * placeholder;
      handleValues(newValue, position, newResult);
    } else {
      handleValues(0, position, 0);
    }
  };

  return (
    <div className="cash-table">
      <input type="text" value={value} onChange={handleChange}></input>
      <input type="text" value={`${placeholder} лв`} disabled></input>
      <input type="text" value={result} disabled></input>
    </div>
  );
}

export default CashItem;
