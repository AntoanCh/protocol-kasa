import React from "react";

function OtherItem({ label, name, kasa, state, handleState }) {
  const handleChange = (event) => {
    let name = event.target.name;
    if (event.target.value) {
      let name = event.target.name;
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else if (event.target.value.endsWith(".0")) {
        newValue = parseFloat(event.target.value).toString() + ".0";
      } else if (/^[0-9]*\.[0-9]{2,3}$/.test(event.target.value)) {
        newValue = Number(parseFloat(event.target.value).toFixed(2));
      } else if (event.nativeEvent.inputType === "insertFromPaste") {
        newValue = Number(parseFloat(event.target.value).toFixed(2));
      } else {
        newValue = parseFloat(event.target.value);
      }
      parseFloat(newValue);
      handleState("other", name, newValue, kasa);
    } else {
      handleState("other", name, 0, kasa);
    }
  };
  let line = "";
  if (name === "terminal") {
    line = "underline topline";
  } else {
    line = "";
  }
  return (
    <div className={`inline-input ${line}`}>
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
