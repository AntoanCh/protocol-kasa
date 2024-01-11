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
      {generateVoucherItems()}
      <div className="inline-input">
        <label>Сума ваучери</label>
        <input
          disabled
          // value={vouchers
          //   .reduce(
          //     (sum, item) =>
          //       sum + parseFloat(state[kasa - 1].vouchers[item[1]]),
          //     0
          //   )
          //   .toFixed(2)}
          value={state[kasa - 1].totals.vouchers}
          type="text"
        ></input>
      </div>
    </div>
  );
}

export default Vouchers;
