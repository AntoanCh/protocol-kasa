// import React from "react";
// import RefItem from "./RefItem";
// import Dif from "./Dif";
// import WarningAmber from "@mui/icons-material/WarningAmber";
// import { red } from "@mui/material/colors";
// import { useState, useEffect } from "react";
// import { useAppState } from "../AppStateContext";



// function Ref({ 
//   // state, handleRef, handleState,
//    kasa, handleAlert }) {
//   const { state, handleCash, handleState, handleRef, currency } = useAppState();
//   const refs = [
//     ["Чек:", "check"],
//     ["С карта:", "karta"],
//     ["Кредит(Glovo):", "glovo"],
//     ["В Брой", "broi"],
//   ];
//   const generateRefItems = () => {
//     return refs.map((item, index) => (
//       <RefItem
//         key={index}
//         state={state}
//         handleRef={handleRef}
//         label={item[0]}
//         name={item[1]}
//         kasa={kasa}
//       />
//     ));
//   };
//   const generateDif = () => {
//     return refs.map((item, index) => (
//       <Dif key={index} state={state} name={item[1]} kasa={kasa} currency={currency} />
//     ));
//   };

//   const handleChange = (event) => {
//     if (event.target.value) {
//       const newValue = parseInt(event.target.value);

//       handleState("main", "klienti", newValue, kasa);
//     } else {
//       handleState("main", "klienti", 0, kasa);
//     }
//   };

//   const [difference, setDifference] = useState(0);
//   const [highlight, setHighlight] = useState("");
//   useEffect(() => {
//     setDifference(
//       (
//         parseFloat(state[kasa - 1].totals.other) +
//         parseFloat(state[kasa - 1].totals.vouchers) +
//         parseFloat(state[kasa - 1].totals.cash) -
//         parseFloat(state[kasa - 1].totals.ref)
//       ).toLocaleString("bg-BG", {
//             style: "currency",
//             currency: currency,
//           })
//     );
//     if (difference == 0) {
//       setHighlight("");
//     } else {
//       setHighlight("red");
//     }
//   }, [state]);
//   return (
//     <>
//       <div>
//         <h3>Справка</h3>
//         <div className="inline-input">
//           <label>По лента:</label>
//           <input
//             disabled
//             value={state[kasa - 1].totals.ref.toLocaleString("bg-BG", {
//             style: "currency",
//             currency: currency,
//           })}
//             type="text"
//           ></input>
//         </div>
//         {generateRefItems()}

//         <div className="inline-input">
//           <label>Бр Клиенти:</label>
//           <input
//             name="klienti"
//             onChange={handleChange}
//             value={state[kasa - 1].main.klienti}
//             type="text"
//           ></input>
//         </div>
//       </div>
//       <div>
//         <h3 style={{ width: "80%" }}>Разлика</h3>

//         <div className="dif">
//           <div style={{ display: "flex" }}>
//             <input
//               style={{ width: "80%" }}
//               className="active"
//               disabled
//               type="text"
//               value={
//                 difference
//                 // parseFloat(state[kasa - 1].totals.other) +
//                 // parseFloat(state[kasa - 1].totals.vouchers) +
//                 // parseFloat(state[kasa - 1].totals.cash) -
//                 // parseFloat(state[kasa - 1].totals.ref)
//               }
//             ></input>
//             {/* {highlight && <WarningAmber sx={{ color: red[500] }} />} */}
//           </div>
//           {generateDif()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Ref;

import React, { useMemo, useState, useCallback } from "react";
import RefItem from "./RefItem";
import Dif from "./Dif";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";
import { useAppState } from "../AppStateContext";

function Ref({ kasa, handleAlert }) {
  const { state, handleCash, handleState, handleRef, currency } = useAppState();

  // Helpers
  const num = (v) => Number(v) || 0;
  const toCents = (v) => Math.round(num(v) * 100);

  const row = state?.[kasa - 1] ?? {};
  const refs = useMemo(
    () => [
      ["Чек:", "check"],
      ["С карта:", "karta"],
      ["Кредит(Glovo):", "glovo"],
      ["В Брой", "broi"],
    ],
    []
  );

  // Format once per currency
  const fmt = useMemo(
    () =>
      new Intl.NumberFormat("bg-BG", {
        style: "currency",
        currency: currency || "BGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [currency]
  );

  // ===== Totals (in cents) =====
  const otherC = toCents(row?.totals?.other);
  const vouchersC = toCents(row?.totals?.vouchers);
  const cashC = toCents(row?.totals?.cash);
  const refC = toCents(row?.totals?.ref);

  // Difference (other + vouchers + cash - ref) in cents
  const differenceCents = (otherC + vouchersC + cashC) - refC;

  // Normalize -0 to 0 for display
  const displayDiff = differenceCents === 0 ? 0 : differenceCents / 100;
  const difference = fmt.format(displayDiff);

  const highlight = differenceCents === 0 ? "" : "red";

  // Integer-only input for "Бр Клиенти"
  const handleChange = useCallback(
    (event) => {
      let { value } = event.target;
      value = (value || "").replace(/\D/g, ""); // keep digits only
      // optional: cap to 6 digits
      if (value.length > 6) value = value.slice(0, 6);

      const newValue = value ? parseInt(value, 10) : 0;
      handleState("main", "klienti", newValue, kasa);
    },
    [handleState, kasa]
  );

  return (
    <>
      <div>
        <h3>Справка</h3>

        <div className="inline-input">
          <label>По лента:</label>
          <input
            disabled
            value={fmt.format(refC / 100)}
            type="text"
          />
        </div>

        {refs.map(([label, name], index) => (
          <RefItem
            key={index}
            state={state}
            handleRef={handleRef}
            label={label}
            name={name}
            kasa={kasa}
          />
        ))}

        <div className="inline-input">
          <label>Бр Клиенти:</label>
          <input
            name="klienti"
            onChange={handleChange}
            value={row?.main?.klienti ?? ""}
            type="text"
            inputMode="numeric"
            autoComplete="off"
          />
        </div>
      </div>

      <div>
        <h3 style={{ width: "80%" }}>Разлика</h3>

        <div className="dif">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              style={{ width: "80%", borderColor: highlight }}
              className="active"
              disabled
              type="text"
              value={difference}
              readOnly
            />
            {highlight && <WarningAmber sx={{ color: red[500] }} />}
          </div>

          {refs.map(([_, name], index) => (
            <Dif
              key={index}
              state={state}
              name={name}
              kasa={kasa}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Ref;
