import React from "react";

function RefItem({ label, name, state, handleRef, handleAlert, kasa }) {
  const handleChange = (event) => {
    if (event.target.value) {
      let newValue;
      if (event.target.value.endsWith(".")) {
        newValue = parseFloat(event.target.value).toString() + ".";
      } else if (event.target.value.endsWith(".0")) {
        newValue = parseFloat(event.target.value).toString() + ".0";
      } else if (/^[0-9]*\.[0-9]{2,3}$/.test(event.target.value)) {
        newValue = parseFloat(event.target.value).toFixed(2);
      } else if (event.nativeEvent.inputType === "insertFromPaste") {
        newValue = parseFloat(event.target.value).toFixed(2);
      } else {
        newValue = parseFloat(event.target.value); //.toString();
      }
      handleRef("ref", name, newValue, kasa);
    } else {
      handleRef("ref", name, 0, kasa);
    }
  };

  //handle onBlur event for alert messages
  const handleBlur = (event) => {
    if (event.target.name === "check") {
      if (
        event.target.value != parseInt(state[kasa - 1].totals.vouchers) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(
          true,
          `Разлика във ваучерите : ${Math.abs(
            event.target.value - parseInt(state[kasa - 1].totals.vouchers)
          ).toFixed(2)}лв`,
          kasa
        );
      } else {
        event.target.style.borderColor = "";
        handleAlert(false, "", "");
      }
    }
    if (event.target.name === "karta") {
      if (
        event.target.value != parseFloat(state[kasa - 1].other.terminal) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(
          true,
          `Разлика в плащанията с карта : ${Math.abs(
            event.target.value - parseFloat(state[kasa - 1].other.terminal)
          ).toFixed(2)} лв`,
          kasa
        );
      } else {
        event.target.style.borderColor = "";
        handleAlert(false, "");
      }
    }
    if (event.target.name === "glovo") {
      if (
        event.target.value != parseFloat(state[kasa - 1].other.glovo) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(
          true,
          `Разлика в Кредит(Glovo) : ${Math.abs(
            event.target.value - parseFloat(state[kasa - 1].other.glovo)
          ).toFixed(2)}лв`,
          kasa
        );
      } else {
        event.target.style.borderColor = "";
        handleAlert(false, "");
      }
    }
    if (event.target.name === "broi") {
      if (
        event.target.value !=
          parseFloat(state[kasa - 1].totals.cash) +
            parseFloat(state[kasa - 1].other.inkaso) +
            parseFloat(state[kasa - 1].other.cashBack) +
            parseFloat(state[kasa - 1].other.rko) +
            parseFloat(state[kasa - 1].other.storno) &&
        event.target.value != 0
      ) {
        event.target.style.borderColor = "red";
        handleAlert(
          true,
          `Разлика в плащанията в брой : ${Math.abs(
            event.target.value -
              (parseFloat(state[kasa - 1].totals.cash) +
                parseFloat(state[kasa - 1].other.inkaso) +
                parseFloat(state[kasa - 1].other.cashBack) +
                parseFloat(state[kasa - 1].other.rko) +
                parseFloat(state[kasa - 1].other.storno))
          ).toFixed(2)} лв`,
          kasa
        );
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
