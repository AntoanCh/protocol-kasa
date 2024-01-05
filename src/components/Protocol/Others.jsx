import React from "react";
import Divider from "@mui/material/Divider";

function Others({ kasa, handleState, state }) {
  const others = [
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["РКО", "rko"],
  ];
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
    <div>
      <Divider variant="light" />
      <div className="inline-input">
        <label>{"Терминал общо"}</label>

        <input
          name={"terminal"}
          onChange={handleChange}
          value={state[kasa - 1].other.terminal}
          type="text"
        ></input>
      </div>
      <div className="inline-input">
        <label>{"Кеш бек"}</label>

        <input
          name={"cashBack"}
          onChange={handleChange}
          value={state[kasa - 1].other.cashBack}
          type="text"
        ></input>
      </div>
      <div className="inline-input">
        <label>{"РКО"}</label>

        <input
          name={"RKO"}
          onChange={handleChange}
          value={state[kasa - 1].other.rko}
          type="text"
        ></input>
      </div>
      <Divider />
      <div className="inline-input">
        <label>ТОТАЛ</label>
        <input
          disabled
          // value={vouchers
          //   .reduce(
          //     (sum, item) =>
          //       sum + parseFloat(state[kasa - 1].vouchers[item[1]]),
          //     0
          //   )
          //   .toFixed(2)}
          value={
            state[kasa - 1].totals.other +
            state[kasa - 1].totals.vouchers +
            state[kasa - 1].totals.cash
          }
          step="0.01"
          type="number"
        ></input>
      </div>
    </div>
  );
}

export default Others;
