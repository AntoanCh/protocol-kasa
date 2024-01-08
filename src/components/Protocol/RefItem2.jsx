import React from "react";

function RefItem2({ label, name, state, handleRef, kasa }) {
  const handleChange = (event) => {
    if (event.target.value) {
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else {
        newValue = parseFloat(event.target.value).toString();
      }
      handleRef("ref2", name, newValue, kasa);
    } else {
      handleRef("ref2", name, 0, kasa);
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>
      <input
        value={state[kasa - 1].ref2[name]}
        onChange={handleChange}
        type="text"
      ></input>
    </div>
  );
}

export default RefItem2;
