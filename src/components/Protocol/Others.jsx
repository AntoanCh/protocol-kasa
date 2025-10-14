import React from "react";
import Divider from "@mui/material/Divider";
import OtherItem from "./OtherItem";
import { useAppState } from "../AppStateContext";



function Others({  kasa, 
  // handleState,state,
   registerInput, handleKeyDown, inputIndexOffset }) {
  const { state, handleCash, handleState, handleRef, currency } = useAppState();
  const others = [
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["Кредит(Glovo)", "glovo"],
    ["РКО", "rko"],
    ["Инкасо", "inkaso"],
    ["Сторно", "storno"],
  ];

  const generateOthers = () => {
    return others.map((item, i) => {
      const index = inputIndexOffset  +i
 return(
      <OtherItem
        key={index}
        state={state}
        handleState={handleState}
        label={item[0]}
        name={item[1]}
        kasa={kasa}
         ref={(el) => registerInput(el, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        placeholderInput={`Input ${i + 1}`}
      />
    )
    }
     );
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
      <div className="inline-input topline">
        <label>ТОТАЛ</label>
        <input disabled value={total.toLocaleString("bg-BG", {
            style: "currency",
            currency: currency,
          })} type="text"></input>
      </div>
    </div>
  );
}

export default Others;
