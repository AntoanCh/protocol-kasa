import React from "react";

function OtherItem({ label, name, kasa, state, handleState }) {
  const handleChange = (event) => {
    let name = event.target.name;
    if (event.target.value) {
      let name = event.target.name;
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else {
        newValue = parseFloat(event.target.value);
      }
      handleState("other", name, newValue, kasa);
    } else {
      handleState("other", name, 0, kasa);
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>

      <input
        name={name}
        onChange={handleChange}
        value={state[kasa - 1].other[name]}
        type="text"
      ></input>
    </div>
  );
}

export default OtherItem;
