import React from "react";

function RefItem({ label, name, state, handleState, kasa }) {
  const handleChange = (event) => {
    if (event.target.value) {
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else {
        newValue = parseFloat(event.target.value).toString();
      }
      handleState("ref", name, newValue, kasa);
    } else {
      handleState("ref", name, 0, kasa);
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>
      <input
        value={state[kasa - 1].ref[name]}
        onChange={handleChange}
        type="text"
      ></input>
    </div>
  );
}

export default RefItem;
