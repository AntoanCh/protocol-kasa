import React from "react";

function Voucher({ label, state, handleState, kasa, name }) {
  // const handleChange = (event) => {
  //   if (event.target.value) {
  //     let newValue;
  //     if (event.target.value == 0) {
  //       newValue = parseFloat(
  //         (event.target.value = event.target.value.replace(/^00+/, "0"))
  //       );
  //     } else if (event.target.value.startsWith("0.")) {
  //       newValue = parseFloat(event.target.value);
  //     } else {
  //       newValue = parseFloat(
  //         (event.target.value = event.target.value.replace(/^0+/, ""))
  //       );
  //     }

  //     handleState("vouchers", name, newValue, kasa);
  //   } else {
  //     handleState("vouchers", name, 0, kasa);
  //   }
  // };
  const handleChange = (event) => {
    if (event.target.value) {
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else {
        newValue = parseFloat(event.target.value).toString();
      }
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
        onChange={handleChange}
        value={state[kasa - 1].vouchers[name]}
        type="text"
      ></input>
      {/* <input
        name={name}
        onWheel={(e) => e.target.blur()}
        value={state[kasa - 1].vouchers[name]}
        onChange={handleChange}
        type="text"
      ></input> */}
    </div>
  );
}

export default Voucher;
