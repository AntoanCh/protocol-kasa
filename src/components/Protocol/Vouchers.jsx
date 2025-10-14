import React, { useRef } from "react";
import Voucher from "./Voucher";
import { Box } from "@mui/material";
import { useAppState } from "../AppStateContext";



function Vouchers({ 
  // state, handleState, 
  kasa, registerInput, handleKeyDown, inputIndexOffset  }) {
const { state, handleCash, handleState, handleRef, currency } = useAppState();
 
  const vouchers = [
    ["Содексо", "sodekso"],
    ["Идънред", "idunred"],
    ["Бълг. пощи", "poshti"],
    ["Томбоу", "tombou"],
    ["Дежене", "dejene"],
    ["Призма лукс", "prizma"],
    ["Фидуция", "fiducia"],
  ];

  


  const generateVoucherItems = () => {
    return vouchers.map((item, i) => {
      const index = inputIndexOffset  +i
 return (
      <Voucher
        key={index}
        label={item[0]}
        name={item[1]}
        state={state}
        handleState={handleState}
        kasa={kasa}
       ref={(el) => registerInput(el, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        placeholderInput={`Input ${i + 1}`}
      />
    )
    }
     );
  };


  return (
    <Box>
      <h3>Ваучери</h3>
      <Box className="inline-input underline">
        <label>Сума ваучери</label>
        <input
          disabled
          value={parseFloat(state[kasa - 1].totals.vouchers).toLocaleString("bg-BG", {
            style: "currency",
            currency: currency,
          })}
          type="text"
        ></input>
      </Box>
       <form>
      {generateVoucherItems()}
      </form>
    </Box>
  );
}

export default Vouchers;
