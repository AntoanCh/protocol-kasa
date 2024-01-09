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
  const total =
    parseFloat(state[kasa - 1].totals.other) +
    parseFloat(state[kasa - 1].totals.vouchers) +
    parseFloat(state[kasa - 1].totals.cash);
  return (
    <div>
      <Divider variant="light" />
      {generateOthers()}

      <Divider />
      <div className="inline-input">
        <label>ТОТАЛ</label>
        <input disabled value={total.toFixed(2)} type="text"></input>
      </div>
    </div>
  );
}

export default Others;
