import React from "react";
import Divider from "@mui/material/Divider";
import OtherItem from "./OtherItem";

function Others({ kasa, handleState, state }) {
  const others = [
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["РКО", "rko"],
    ["Инкасо", "inkaso"],
    ["Сторно", "storno"],
  ];

  const generateOthers = () => {
    return others.map((item, index) => (
      <OtherItem
        key={index}
        state={state}
        handleState={handleState}
        label={item[0]}
        name={item[1]}
        kasa={kasa}
      />
    ));
  };
  return (
    <div>
      <Divider variant="light" />
      {generateOthers()}

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
