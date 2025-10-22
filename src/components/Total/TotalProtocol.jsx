// import { Divider } from "@mui/material";
// import { useOutletContext } from "react-router-dom";
// import dayjs from "dayjs";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
// import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
// import { deepOrange } from "@mui/material/colors";
// import WarningAmber from "@mui/icons-material/WarningAmber";
// import { red } from "@mui/material/colors";
// import axios from "axios";
// import { useState } from "react";

// function TotalProtocol({ obekt }) {
//   const [state, handleDial] = useOutletContext();
//   const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
//   const vouchers = [
//     ["Содексо", "sodekso"],
//     ["Идънред", "idunred"],
//     ["Бълг. пощи", "poshti"],
//     ["Томбоу", "tombou"],
//     ["Дежене", "dejene"],
//     ["Призма лукс", "prizma"],
//     ["Фидуция", "fiducia"],
//   ];
//   const other = [
//     ["Терминал общо", "terminal"],
//     ["Кеш бек", "cashBack"],
//     ["Кредит(glovo)", "glovo"],
//     ["РКО", "rko"],
//     ["Инкасо", "inkaso"],
//     ["Сторно", "storno"],
//   ];
//   const refs = [
//     ["Чек:", "check"],
//     ["С карта:", "karta"],
//     ["Кредит(Glovo):", "glovo"],
//     ["В Брой:", "broi"],
//   ];

//   const [values, setValues] = useState();
//   let totalRef = 0;
//   totalRef = state.reduce((sum, obj) => sum + obj.totals.ref, 0);

//   let totalOther = 0;
//   totalOther = state.reduce((sum, obj) => sum + obj.totals.other, 0);

//   let totalCash = 0;
//   totalCash = state.reduce((sum, obj) => sum + parseFloat(obj.totals.cash), 0);

//   let totalVouchers = 0;
//   totalVouchers = state.reduce((sum, obj) => sum + obj.totals.vouchers, 0);

//   let totalClients = 0;
//   totalClients = state.reduce((sum, obj) => sum + obj.main.klienti, 0);

//   const generateCashSales = () => {
//     return cash.map((item, index) => (
//       <div key={index} className="cash-table">
//         <input
//           disabled
//           name={item}
//           type="text"
//           value={state.reduce((sum, obj) => sum + obj.cash[item][0], 0)}
//         ></input>
//         <input type="text" defaultValue={`${item} лв`} disabled></input>
//         <input
//           type="text"
//           value={state
//             .reduce((sum, obj) => sum + parseFloat(obj.cash[item][1]), 0)
//             .toFixed(2)}
//           disabled
//         ></input>
//       </div>
//     ));
//   };
//   const generateVouchers = () => {
//     return vouchers.map((item, index) => (
//       <div key={index} className="inline-input">
//         <label>{item[0]}</label>
//         <input
//           disabled
//           name={item[1]}
//           value={state
//             .reduce((sum, obj) => sum + parseFloat(obj.vouchers[item[1]]), 0)
//             .toFixed(2)}
//           type="text"
//         ></input>
//       </div>
//     ));
//   };
//   const generateOther = () => {
//     return other.map((item, index) => (
//       <div key={index} className="inline-input">
//         <label>{item[0]}</label>
//         <input
//           disabled
//           name={item[1]}
//           value={state
//             .reduce((sum, obj) => sum + parseFloat(obj.other[item[1]]), 0)
//             .toFixed(2)}
//           type="text"
//         ></input>
//       </div>
//     ));
//   };
//   const generateRefs = () => {
//     return refs.map((item, index) => (
//       <div key={index} className="inline-input">
//         <label>{item[0]}</label>
//         <input
//           disabled
//           value={state
//             .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
//             .toFixed(2)}
//           type="text"
//         ></input>
//       </div>
//     ));
//   };

//   const generateDifs = () => {
//     return refs.map((item, index) => {
//       let target;

//       if (item[1] === "check") {
//         target = parseFloat(totalVouchers.toFixed(2));
//       }
//       if (item[1] === "karta") {
//         target = parseFloat(
//           state
//             .reduce((sum, obj) => sum + parseFloat(obj.other.terminal), 0)
//             .toFixed(2)
//         ).toFixed(2);
//       }
//       if (item[1] === "glovo") {
//         target = parseFloat(
//           state
//             .reduce((sum, obj) => sum + parseFloat(obj.other.glovo), 0)
//             .toFixed(2)
//         ).toFixed(2);
//       }
//       if (item[1] === "broi") {
//         target = totalCash.toFixed(2);
//       }
//       let highlight;

//       if (
//         target -
//           parseFloat(
//             state
//               .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
//               .toFixed(2)
//           ).toFixed(2) ===
//         0
//       ) {
//         highlight = "";
//       } else {
//         highlight = "red";
//       }

//       return (
//         <div style={{ display: "flex" }} key={index}>
//           <input
//             style={{ borderColor: highlight, width: "80%" }}
//             className="active"
//             disabled
//             type="text"
//             value={(
//               target -
//               parseFloat(
//                 state
//                   .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
//                   .toFixed(2)
//               )
//             ).toFixed(2)}
//           ></input>
//           {highlight && <WarningAmber sx={{ color: red[500] }} />}
//         </div>
//       );
//     });
//   };

//   const total =
//     parseFloat(totalCash) + parseFloat(totalOther) + parseFloat(totalVouchers);

//   const ostatak = () => {
//     let count = 0;
//     for (const index of state.keys()) {
//       for (const [key, value] of Object.entries(state[index].cash)) {
//         if (key > 5) {
//           count = value[1] + count;
//         }
//       }
//     }

//     return count;
//   };

//   const handleClick = async () => {
//     // window.print();
//     // axios.defaults.headers.post["Content-Type"] =
//     //   "application/x-www-form-urlencoded";
//     try {
//       const res = await axios.post("http://192.168.0.145:4002/protokoli", {
//         obekt: obekt,
//         date: dayjs().format("DD/MM/YYYY"),
//         data: state,
//       });
//       console.log(res);
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       } else if (error.request) {
//         console.log(error.request);
//       } else {
//         console.log(`Error ${error.message}`);
//       }
//     }
//   };
//   return (
//     <div className="container">
//       <SpeedDial
//         id="speed-dial"
//         direction="down"
//         ariaLabel="SpeedDial basic example"
//         FabProps={{
//           sx: {
//             bgcolor: deepOrange[500],
//             "&:hover": {
//               bgcolor: "#4bb543",
//             },
//           },
//         }}
//         sx={{
//           position: "fixed",
//           top: "2px",
//           left: "95%",
//         }}
//         icon={<SpeedDialIcon />}
//       >
//         <SpeedDialAction
//           onClick={() => handleDial(["remove", "all"])}
//           icon={<DeleteForeverIcon />}
//           tooltipTitle={"Изчисти всички каси"}
//         />
//         <SpeedDialAction
//           onClick={() => {
//             window.print();
//           }}
//           icon={<PrintIcon />}
//         />
//         <SpeedDialAction
//           onClick={() => handleDial(["contacts"])}
//           icon={<ContactEmergencyIcon />}
//           tooltipTitle={"Контакти"}
//         />
//       </SpeedDial>
//       <h1>ПРОТОКОЛ ЗА РАБОТА НА ОБЕКТ {obekt}</h1>
//       <div className="top">
//         <div className="inline-input">
//           <label>Обект</label>
//           <input disabled type="text" defaultValue={obekt} />
//         </div>
//         <div className="inline-input">
//           <label>Дата:</label>
//           <input type="text" defaultValue={dayjs().format("DD/MM/YYYY")} />
//         </div>
//       </div>

//       <div className="bottomNew">
//         <div className="bottom">
//           <div>
//             <h3>Продажби в брой</h3>

//             <div id="totalCash" className="underline">
//               <input
//                 type="text"
//                 value={"Остатък едри (10 - 100лв) :"}
//                 disabled
//               ></input>
//               <input type="text" disabled value={ostatak().toFixed(2)}></input>
//             </div>
//             {generateCashSales()}
//             <div id="totalCash">
//               <input
//                 type="text"
//                 value={"Дребни(0.01 - 5лв) :"}
//                 disabled
//               ></input>
//               <input
//                 type="text"
//                 disabled
//                 value={(totalCash - ostatak()).toFixed(2)}
//               ></input>
//             </div>
//             <div id="totalCash">
//               <input type="text" value={"Всичко в брой :"} disabled></input>
//               <input type="text" disabled value={totalCash.toFixed(2)}></input>
//             </div>
//           </div>
//           <div>
//             <h3>Ваучери</h3>
//             <div className="inline-input underline">
//               <label>Сума ваучери</label>
//               <input
//                 disabled
//                 type="text"
//                 value={totalVouchers.toFixed(2)}
//               ></input>
//             </div>
//             {generateVouchers()}

//             <Divider />
//             {generateOther()}
//             <Divider />
//             <div className="inline-input topline">
//               <label>ТОТАЛ</label>
//               <input disabled type="text" value={total.toFixed(2)}></input>
//             </div>
//           </div>
//         </div>

//         <div className="bottom2">
//           <div>
//             <h3>Справка</h3>
//             <div className="inline-input">
//               <label>По лента:</label>
//               <input disabled value={totalRef.toFixed(2)} type="text"></input>
//             </div>
//             {generateRefs()}
//             <div className="inline-input">
//               <label>Бр Клиенти:</label>
//               <input disabled value={totalClients} type="text"></input>
//             </div>
//           </div>
//           <div>
//             <h3 style={{ width: "80%" }}>Разлика</h3>
//             <div className="dif">
//               <div style={{ display: "flex" }}>
//                 <input
//                   style={{ width: "80%" }}
//                   className="active"
//                   disabled
//                   type="text"
//                   value={(total.toFixed(2) - totalRef.toFixed(2)).toFixed(2)}
//                 ></input>
//                 {/* {highlight && <WarningAmber sx={{ color: red[500] }} />} */}
//               </div>
//               {generateDifs()}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         {/* <button
//           onClick={() => {
//             window.print();
//           }}
//           className="print-btn"
//         >
//           PRINT
//         </button> */}
//         {/* <button
//           onClick={handleClick}
//           // style={{ backgroundColor: "green" }}
//           className="print-btn"
//         >
//           ИЗПРАТИ
//         </button> */}
//       </div>
//     </div>
//   );
// }

// export default TotalProtocol;
import { Divider } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";
import axios from "axios";
import React, { useMemo } from "react";
import { useAppState } from "../AppStateContext";

function TotalProtocol({ obekt }) {
  const { state } = useAppState();

    const outlet = useOutletContext();
  const handleDial =
    typeof outlet === "function"
      ? outlet
      : Array.isArray(outlet)
      ? outlet[1]
      : outlet && typeof outlet === "object"
      ? outlet.handleDial
      : undefined;
  // Helpers
  const num = (v) => Number(v) || 0;
  const toCents = (v) => Math.round(num(v) * 100);
  const fromCents = (c) => (c / 100).toFixed(2);

  // Static configs
  const cashDenoms = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const vouchers = [
    ["Содексо", "sodekso"],
    ["Идънред", "idunred"],
    ["Бълг. пощи", "poshti"],
    ["Томбоу", "tombou"],
    ["Дежене", "dejene"],
    ["Призма лукс", "prizma"],
    ["Фидуция", "fiducia"],
  ];
  const other = [
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["Кредит(glovo)", "glovo"],
    ["РКО", "rko"],
    ["Инкасо", "inkaso"],
    ["Сторно", "storno"],
  ];
  const refs = [
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
    ["В Брой:", "broi"],
  ];

  // ===== Aggregate totals (all in cents) =====
  const {
    totalRefC,
    totalOtherC,
    totalCashC,
    totalVouchersC,
    totalClients,
    cashLineByDenom, // { denom: { count, amountC } }
    otherSumsC,      // key -> cents
    voucherSumsC,    // key -> cents
    refSumsC,        // key -> cents
    terminalC,
    glovoC,
  } = useMemo(() => {
    const acc = {
      totalRefC: 0,
      totalOtherC: 0,
      totalCashC: 0,
      totalVouchersC: 0,
      totalClients: 0,
      cashLineByDenom: Object.fromEntries(
        cashDenoms.map((d) => [d, { count: 0, amountC: 0 }])
      ),
      otherSumsC: {},    // e.g. { terminal: 12345, ... }
      voucherSumsC: {},  // e.g. { sodekso: 1234, ... }
      refSumsC: {},      // e.g. { check: 1234, ... }
      terminalC: 0,
      glovoC: 0,
    };

    for (const row of state || []) {
      // totals
      acc.totalRefC += toCents(row?.totals?.ref);
      acc.totalOtherC += toCents(row?.totals?.other);
      acc.totalCashC += toCents(row?.totals?.cash);
      acc.totalVouchersC += toCents(row?.totals?.vouchers);
      acc.totalClients += num(row?.main?.klienti);

      // cash breakdown per denom (cash[denom] = [count, amount])
      const cashObj = row?.cash || {};
      for (const denom of cashDenoms) {
        const line = cashObj?.[denom]; // might be undefined
        const count = Array.isArray(line) ? num(line[0]) : 0;
        const amount = Array.isArray(line) ? num(line[1]) : 0;
        acc.cashLineByDenom[denom].count += count;
        acc.cashLineByDenom[denom].amountC += toCents(amount);
      }

      // other
      const otherObj = row?.other || {};
      for (const [, key] of other) {
        acc.otherSumsC[key] = (acc.otherSumsC[key] || 0) + toCents(otherObj[key]);
      }

      // vouchers
      const voucherObj = row?.vouchers || {};
      for (const [, key] of vouchers) {
        acc.voucherSumsC[key] =
          (acc.voucherSumsC[key] || 0) + toCents(voucherObj[key]);
      }

      // refs (entered values)
      const refObj = row?.ref || {};
      for (const [, key] of refs) {
        acc.refSumsC[key] = (acc.refSumsC[key] || 0) + toCents(refObj[key]);
      }

      // handy direct sums
      acc.terminalC += toCents(otherObj?.terminal);
      acc.glovoC += toCents(otherObj?.glovo);
    }

    return acc;
  }, [state]);

  // Derived totals
  const totalC = totalCashC + totalOtherC + totalVouchersC;

  // Split cash into “Остатък едри (10-100)” vs “Дребни(0.01 - 5)”
  const bigDenoms = new Set([100, 50, 20, 10]);
  const bigCashC = useMemo(() => {
    let sum = 0;
    for (const denom of cashDenoms) {
      if (bigDenoms.has(denom)) sum += cashLineByDenom[denom].amountC;
    }
    return sum;
  }, [cashLineByDenom]);

  const smallCashC = totalCashC - bigCashC;

  // ===== Render generators =====
  const generateCashSales = () =>
    cashDenoms.map((denom) => {
      const line = cashLineByDenom[denom];
      return (
        <div key={denom} className="cash-table">
          <input disabled name={denom} type="text" value={line.count} />
          <input type="text" defaultValue={`${denom} лв`} disabled />
          <input type="text" value={fromCents(line.amountC)} disabled />
        </div>
      );
    });

  const generateVouchers = () =>
    vouchers.map(([label, key]) => (
      <div key={key} className="inline-input">
        <label>{label}</label>
        <input disabled name={key} value={fromCents(voucherSumsC[key] || 0)} type="text" />
      </div>
    ));

  const generateOther = () =>
    other.map(([label, key]) => (
      <div key={key} className="inline-input">
        <label>{label}</label>
        <input disabled name={key} value={fromCents(otherSumsC[key] || 0)} type="text" />
      </div>
    ));

  const generateRefs = () =>
    refs.map(([label, key]) => (
      <div key={key} className="inline-input">
        <label>{label}</label>
        <input disabled value={fromCents(refSumsC[key] || 0)} type="text" />
      </div>
    ));

  // Per-ref “Разлика” rows, with integer-cent compare
  const generateDifs = () =>
    refs.map(([_, key]) => {
      let targetC = 0;
      if (key === "check") targetC = totalVouchersC;
      if (key === "karta") targetC = terminalC;
      if (key === "glovo") targetC = glovoC;
      if (key === "broi") targetC = totalCashC;

      const refSumC = refSumsC[key] || 0;
      const diffC = targetC - refSumC;
      const highlight = diffC === 0 ? "" : "red";

      return (
        <div style={{ display: "flex" }} key={key}>
          <input
            style={{ borderColor: highlight, width: "80%" }}
            className="active"
            disabled
            type="text"
            value={fromCents(diffC)}
          />
          {highlight && <WarningAmber sx={{ color: red[500] }} />}
        </div>
      );
    });

  // Print & post actions (left as-is, just safer)
  const handlePrint = () => window.print();

  const handleClick = async () => {
    try {
      const res = await axios.post("http://192.168.0.145:4002/protokoli", {
        obekt,
        date: dayjs().format("DD/MM/YYYY"),
        data: state,
      });
      console.log(res);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data, error.response.status, error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(`Error ${error.message}`);
      }
    }
  };

  return (
    <div className="container">
      <SpeedDial
        id="speed-dial"
        direction="down"
        ariaLabel="SpeedDial basic example"
        FabProps={{
          sx: {
            bgcolor: deepOrange[500],
            "&:hover": { bgcolor: "#4bb543" },
          },
        }}
        sx={{ position: "fixed", top: "2px", left: "95%" }}
        icon={<SpeedDialIcon />}
      >
      <SpeedDialAction
  onClick={() => handleDial?.(["remove", "all"])}
  icon={<DeleteForeverIcon />}
  tooltipTitle={"Изчисти всички каси"}
/>
<SpeedDialAction onClick={() => window.print()} icon={<PrintIcon />} />
<SpeedDialAction
  onClick={() => handleDial?.(["contacts"])}
  icon={<ContactEmergencyIcon />}
  tooltipTitle={"Контакти"}
/>
        {/* Example: enable send later if needed
        <SpeedDialAction onClick={handleClick} icon={<SaveIcon />} tooltipTitle={"Изпрати"} />
        */}
      </SpeedDial>

      <h1>ПРОТОКОЛ ЗА РАБОТА НА ОБЕКТ {obekt}</h1>

      <div className="top">
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" defaultValue={obekt} />
        </div>
        <div className="inline-input">
          <label>Дата:</label>
          <input type="text" defaultValue={dayjs().format("DD/MM/YYYY")} />
        </div>
      </div>

      <div className="bottomNew">
        <div className="bottom">
          <div>
            <h3>Продажби в брой</h3>

            <div id="totalCash" className="underline">
              <input type="text" value={"Остатък едри (10 - 100лв) :"} disabled />
              <input type="text" disabled value={fromCents(bigCashC)} />
            </div>

            {generateCashSales()}

            <div id="totalCash">
              <input type="text" value={"Дребни(0.01 - 5лв) :"} disabled />
              <input type="text" disabled value={fromCents(smallCashC)} />
            </div>

            <div id="totalCash">
              <input type="text" value={"Всичко в брой :"} disabled />
              <input type="text" disabled value={fromCents(totalCashC)} />
            </div>
          </div>

          <div>
            <h3>Ваучери</h3>
            <div className="inline-input underline">
              <label>Сума ваучери</label>
              <input disabled type="text" value={fromCents(totalVouchersC)} />
            </div>

            {generateVouchers()}
            <Divider />
            {generateOther()}
            <Divider />

            <div className="inline-input topline">
              <label>ТОТАЛ</label>
              <input disabled type="text" value={fromCents(totalC)} />
            </div>
          </div>
        </div>

        <div className="bottom2">
          <div>
            <h3>Справка</h3>
            <div className="inline-input">
              <label>По лента:</label>
              <input disabled value={fromCents(totalRefC)} type="text" />
            </div>

            {generateRefs()}

            <div className="inline-input">
              <label>Бр Клиенти:</label>
              <input disabled value={totalClients} type="text" />
            </div>
          </div>

          <div>
            <h3 style={{ width: "80%" }}>Разлика</h3>
            <div className="dif">
              <div style={{ display: "flex" }}>
                <input
                  style={{ width: "80%" }}
                  className="active"
                  disabled
                  type="text"
                  value={fromCents(totalC - totalRefC)}
                />
                {/* If you want highlight here too:
                {totalC - totalRefC !== 0 && <WarningAmber sx={{ color: red[500] }} />}
                */}
              </div>
              {generateDifs()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalProtocol;
