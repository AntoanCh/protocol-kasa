import React from "react";
import Voucher from "./Voucher";

function Vouchers({ state, handleState, kasa }) {
  const vouchers = [
    ["Содексо", "sodekso"],
    ["Етап Адресс", "etap"],
    ["Идънред", "idunred"],
    ["Бълг. пощи", "poshti"],
    ["Томбоу", "tombou"],
    ["Дежене", "dejene"],
    ["Призма лукс", "prizma"],
    ["Фидуция", "fiducia"],
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["РКО", "rko"],
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
        <label>Тотал</label>
        <input
          disabled
          value={vouchers
            .reduce(
              (sum, item) =>
                sum + parseFloat(state[kasa - 1].vouchers[item[1]]),
              0
            )
            .toFixed(2)}
          step="0.01"
          type="number"
        ></input>
      </div>
      <div className="inline-input">
        <label>Тотал</label>
        <input
          disabled
          value={vouchers
            .reduce(
              (sum, item) =>
                sum + parseFloat(state[kasa - 1].vouchers[item[1]]),
              0
            )
            .toFixed(2)}
          step="0.01"
          type="number"
        ></input>
      </div>
    </div>
  );
}

export default Vouchers;
