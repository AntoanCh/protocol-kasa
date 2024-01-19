import React from "react";
import Voucher from "./Voucher";

function Vouchers({ state, handleState, kasa }) {
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
    return vouchers.map((item, index) => (
      <Voucher
        key={index}
        label={item[0]}
        name={item[1]}
        state={state}
        handleState={handleState}
        kasa={kasa}
      />
    ));
  };
  return (
    <div>
      <h3>Ваучери</h3>
      <div className="inline-input" id="sum">
        <label>Сума ваучери</label>
        <input
          disabled
          value={state[kasa - 1].totals.vouchers}
          type="text"
        ></input>
      </div>
      {generateVoucherItems()}
    </div>
  );
}

export default Vouchers;
