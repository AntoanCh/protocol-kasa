import React from "react";

function RefItem({ label, name, state, handleRef, handleAlert, kasa }) {
  const handleChange = (event) => {
    if (event.target.value) {
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else {
        newValue = parseFloat(event.target.value).toString();
      }
      handleRef("ref", name, newValue, kasa);
    } else {
      handleRef("ref", name, 0, kasa);
    }
  };

  //handle onBlur event for alert messages
  const handleBlur = (event) => {
    console.log(event.target);
    if (event.target.name === "check") {
      if (
        event.target.value != parseInt(state[kasa - 1].totals.vouchers) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(true, "Несъвпадение в броя ваучери");
      } else {
        event.target.style.borderColor = "";
        handleAlert(false, "");
      }
    }
    if (event.target.name === "karta") {
      if (
        event.target.value != parseFloat(state[kasa - 1].other.terminal) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(true, "Несъвпадение в картовите плащания");
      } else {
        event.target.style.borderColor = "";
        handleAlert(false, "");
      }
    }
    if (event.target.name === "broi") {
      if (
        event.target.value !=
          parseFloat(state[kasa - 1].totals.cash) +
            parseFloat(state[kasa - 1].others.inkaso) +
            parseFloat(state[kasa - 1].others.storno) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(true, "Несъвпадение в плащанията в брой");
      } else {
        event.target.style.borderColor = "";
        handleAlert(false, "");
      }
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>
      <input
        name={name}
        value={state[kasa - 1].ref[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
      ></input>
    </div>
  );
}

export default RefItem;
