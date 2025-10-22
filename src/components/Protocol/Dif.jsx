// import React, { useEffect } from "react";
// import { useState } from "react";
// import WarningAmber from "@mui/icons-material/WarningAmber";
// import { red } from "@mui/material/colors";


// function Dif({ name, state, kasa, currency }) {
  
//   let target;

//   if (name === "check") {
//     target = parseFloat(state[kasa - 1].totals.vouchers).toFixed(2);
//   }
//   if (name === "karta") {
//     target = parseFloat(state[kasa - 1].other.terminal).toFixed(2);
//   }
//   if (name === "glovo") {
//     target = parseFloat(state[kasa - 1].other.glovo).toFixed(2);
//   }
//   if (name === "broi") {
//     target = (
//       parseFloat(state[kasa - 1].totals.cash) +
//       parseFloat(state[kasa - 1].other.inkaso) +
//       parseFloat(state[kasa - 1].other.cashBack) +
//       parseFloat(state[kasa - 1].other.rko) +
//       parseFloat(state[kasa - 1].other.storno)
//     ).toFixed(2);
//   }

//   const [highlight, setHighlight] = useState("");
//   useEffect(() => {
//     if (target - parseFloat(state[kasa - 1].ref[name]).toFixed(2) === 0) {
//       setHighlight("");
//     } else {
//       setHighlight("red");
//     }
//   }, [state]);

//   return (
//     <div style={{ display: "flex" }}>
//       <input
//         style={{ borderColor: highlight, width: "80%" }}
//         className="active"
//         disabled
//         type="text"
//         value={(target - parseFloat(state[kasa - 1].ref[name])).toLocaleString("bg-BG", {
//             style: "currency",
//             currency: currency,
//           })}
//       ></input>
//       {highlight && <WarningAmber sx={{ color: red[500] }} />}
//     </div>
//   );
// }

// export default Dif;

import React, { useEffect, useMemo, useState } from "react";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";

function Dif({ name, state, kasa, currency }) {
  // Safe helpers
  const num = (v) => Number(v) || 0;
  const toCents = (v) => Math.round(num(v) * 100);

  // Pull the current kasa row safely
  const row = state?.[kasa - 1] ?? {};

  // Compute the target amount (NUMBER, not string)
  const target = useMemo(() => {
    if (name === "check") {
      return num(row?.totals?.vouchers);
    }
    if (name === "karta") {
      return num(row?.other?.terminal);
    }
    if (name === "glovo") {
      return num(row?.other?.glovo);
    }
    if (name === "broi") {
      return (
        num(row?.totals?.cash) +
        num(row?.other?.inkaso) +
        num(row?.other?.cashBack) +
        num(row?.other?.rko) +
        num(row?.other?.storno)
      );
    }
    return 0;
  }, [
    name,
    row?.totals?.vouchers,
    row?.other?.terminal,
    row?.other?.glovo,
    row?.totals?.cash,
    row?.other?.inkaso,
    row?.other?.cashBack,
    row?.other?.rko,
    row?.other?.storno,
  ]);

  // Reference value entered by the user
  const refValue = num(row?.ref?.[name]);

  // Difference in cents (integers → no FP drift)
  const diffCents = useMemo(() => {
    return toCents(target) - toCents(refValue);
  }, [target, refValue]);

  const [highlight, setHighlight] = useState("");
  useEffect(() => {
    setHighlight(diffCents === 0 ? "" : "red");
  }, [diffCents]);

  // Prepare formatted display value
  let diffForDisplay = diffCents / 100;
  if (diffCents === 0) diffForDisplay = 0; // avoid "-0.00"

  const formatted = new Intl.NumberFormat("bg-BG", {
    style: "currency",
    currency: currency || "BGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(diffForDisplay);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <input
        style={{ borderColor: highlight, width: "80%" }}
        className="active"
        disabled
        type="text"
        value={formatted}
        readOnly
      />
      {highlight && <WarningAmber sx={{ color: red[500] }} />}
    </div>
  );
}

export default Dif;
