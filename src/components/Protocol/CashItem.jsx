import React from "react";
import { useContext } from "react";
import { Cash1Context } from "../../Context/Cash1Context";
import { Cash2Context } from "../../Context/Cash2Context";
import { Cash3Context } from "../../Context/Cash3Context";
import { Cash4Context } from "../../Context/Cash4Context";
import { Cash5Context } from "../../Context/Cash5Context";
import { Cash6Context } from "../../Context/Cash6Context";

function CashItem({
  value,
  handleValues,
  position,
  placeholder,
  result,
  kasa,
}) {
  switch (kasa) {
    case 1:
  }
  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);
      const newResult = newValue * placeholder;
      handleValues(newValue, position, newResult);
    } else {
      handleValues(0, position, 0);
    }
  };

  return (
    <div className="cash-table">
      <input type="text" value={value} onChange={handleChange}></input>
      <input type="text" value={`${placeholder} лв`} disabled></input>
      <input type="text" value={result} disabled></input>
    </div>
  );
}

export default CashItem;
