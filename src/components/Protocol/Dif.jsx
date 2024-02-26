import React, { useEffect } from "react";
import { useState } from "react";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";

function Dif({ name, state, kasa }) {
  let target;
  if (name === "check") {
    target = parseFloat(state[kasa - 1].totals.vouchers).toFixed(2);
  }
  if (name === "karta") {
    target = parseFloat(state[kasa - 1].other.terminal).toFixed(2);
  }
  if (name === "glovo") {
    target = parseFloat(state[kasa - 1].other.glovo).toFixed(2);
  }
  if (name === "broi") {
    target = (
      parseFloat(state[kasa - 1].totals.cash) +
      parseFloat(state[kasa - 1].other.inkaso) +
      parseFloat(state[kasa - 1].other.cashBack) +
      parseFloat(state[kasa - 1].other.rko) +
      parseFloat(state[kasa - 1].other.storno)
    ).toFixed(2);
  }

  const [highlight, setHighlight] = useState("");
  useEffect(() => {
    if (target - parseFloat(state[kasa - 1].ref[name]).toFixed(2) === 0) {
      setHighlight("");
    } else {
      setHighlight("red");
    }
  }, [state]);

  return (
    <div style={{ display: "flex" }}>
      <input
        style={{ borderColor: highlight, width: "80%" }}
        className="active"
        disabled
        type="text"
        value={(target - parseFloat(state[kasa - 1].ref[name])).toFixed(2)}
      ></input>
      {highlight && <WarningAmber sx={{ color: red[500] }} />}
    </div>
  );
}

export default Dif;
