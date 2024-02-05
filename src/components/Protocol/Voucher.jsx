import React from "react";

function Voucher({ label, state, handleState, kasa, name }) {
  // const handleChange = (event) => {
  //   if (event.target.value) {
  //     const newValue = parseInt(event.target.value);

  //     handleState("vouchers", name, newValue, kasa);
  //   } else {
  //     handleState("vouchers", name, 0, kasa);
  //   }
  // };
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
      handleState("vouchers", name, newValue, kasa);
    } else {
      handleState("vouchers", name, 0, kasa);
    }
  };
  const handleFocus = (event) => {
    if (event.target.value == 0) {
      event.target.select();
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>

      <input
        className="active"
        name={name}
        onFocus={handleFocus}
        onChange={handleChange}
        value={state[kasa - 1].vouchers[name]}
        type="text"
      ></input>
    </div>
  );
}

export default Voucher;
