// import React, { createContext, useContext, useEffect, useRef, useState } from "react";
// import {produce} from "immer";

// const AppStateContext = createContext();

// const generateInitialKasa = () => ({
//   main: { printer: "", klienti: 0 },
//   start: { name: "", sum: "", cigs: "", name2: "" },
//   cash: {
//    500:[0,0],200: [0,0], 100: [0, 0], 50: [0, 0], 20: [0, 0], 10: [0, 0], 5: [0, 0],
//     2: [0, 0], 1: [0, 0], 0.5: [0, 0], 0.2: [0, 0], 0.1: [0, 0],
//     0.05: [0, 0], 0.02: [0, 0], 0.01: [0, 0]
//   },
//   vouchers: {
//     sodekso: 0, etap: 0, idunred: 0, poshti: 0,
//     tombou: 0, dejene: 0, prizma: 0, fiducia: 0
//   },
//   other: {
//     terminal: 0, cashBack: 0, glovo: 0, rko: 0,
//     inkaso: 0, storno: 0
//   },
//   ref: {
//     check: 0, karta: 0, glovo: 0, broi: 0
//   },
//   totals: {
//     cash: 0.0, vouchers: 0, other: 0, total: 0,
//     ref: 0, lenta: 0, obshto: 0
//   }
// });

// const generateState = () => Array.from({ length: 6 }, () => generateInitialKasa());

// const totalCash = cash => Object.values(cash).reduce((acc, [_, sum]) => acc + sum, 0);
// const totalGroup = group => Object.values(group).reduce((acc, val) => acc + parseFloat(val), 0);

// export const AppStateProvider = ({ children, setSnack }) => {
//   // const [state, setState] = useState(() => {
//   //   const stored = localStorage.getItem("STATE");
//   //   return stored ? JSON.parse(stored) : generateState();
//   // });

//   //THIS SHOULD BE DELETED AND THE TOP ONE SHOULD BE UNCOMMENTED FOR SINGLE CURRENCY
// const [currency, setCurrency] = useState("EUR"); // active currency
// const [allStates, setAllStates] = useState(() => {
//   const stored = localStorage.getItem("ALL_STATES");
//   return stored
//     ? JSON.parse(stored)
//     : {
//       EUR: generateState(),
//         BGN: generateState()
        
//       };
// });

// // active state = shortcut for current currency
// const state = allStates[currency];
//  //THIS SHOULD BE DELETED AND THE TOP ONE SHOULD BE UNCOMMENTED FOR SINGLE CURRENCY

//   const didMount = useRef(false);
//   // useEffect(() => {
//   //   if (didMount.current) {
//   //     localStorage.setItem("STATE", JSON.stringify(state));
//   //   } else {
//   //     didMount.current = true;
//   //   }
//   // }, [state]);

//   //THIS SHOULD BE DELETED AND THE TOP ONE SHOULD BE UNCOMMENTED FOR SINGLE CURRENCY
// useEffect(() => {
//   if (didMount.current) {
//     localStorage.setItem("ALL_STATES", JSON.stringify(allStates));
//   } else {
//     didMount.current = true;
//   }
// }, [allStates]);
// //THIS SHOULD BE DELETED AND THE TOP ONE SHOULD BE UNCOMMENTED FOR SINGLE CURRENCY


//   // const updateState = updater => {
//   //   setState(curr => produce(curr, updater));
//   // };

//   //THIS SHOULD BE DELETED AND THE TOP ONE SHOULD BE UNCOMMENTED FOR SINGLE CURRENCY
// const updateState = (updater) => {
//   setAllStates(curr =>
//     produce(curr, draft => {
//       updater(draft[currency]);
//     })
//   );
// };

// const toggleCurrency = () => {
//   setCurrency(curr => (curr === "BGN" ? "EUR" : "BGN"));
// };
// //THIS SHOULD BE DELETED AND THE TOP ONE SHOULD BE UNCOMMENTED FOR SINGLE CURRENCY

//   const handleCash = (input, value, kasa) => {
//     const index = parseInt(kasa) - 1;
//     updateState(draft => {
//       draft[index].cash[input][0] = value;
//       draft[index].cash[input][1] = value * input;
//       draft[index].totals.cash = parseFloat(totalCash(draft[index].cash).toFixed(2));
//     });
//   };

//   const handleState = (group, input, value, kasa) => {
//     const index = parseInt(kasa) - 1;
//     updateState(draft => {
//       draft[index][group][input] = value;
//       draft[index].totals[group] = totalGroup(draft[index][group]);
//     });
//   };

//   const handleRef = (group, input, value, kasa) => {
//     const index = parseInt(kasa) - 1;
//     updateState(draft => {
//       draft[index][group][input] = value;
//       draft[index].totals[group] = totalGroup(draft[index][group]);
//       draft[index].totals.lenta = draft[index].totals.cash + (draft[index].totals.ref2 || 0);
//       draft[index].totals.obshto = draft[index].totals.lenta + draft[index].totals.ref;
//     });
//   };

//   const handleRemove = (kasa) => {
//     updateState(draft => {
//       if (kasa === "all") {
//         for (let i = 0; i < draft.length; i++) {
//           draft[i] = generateInitialKasa();
//         }
//       } else {
//         const index = parseInt(kasa) - 1;
//         draft[index] = generateInitialKasa();
//       }
//     });
//     if (setSnack) setSnack(true);
//   };

//   const handleDial = ([action, payload]) => {
//   if (action === "remove") {
//     handleRemove(payload);
//   }
//   // you can handle other actions like 'contacts' or 'patch' later
// };

//   useEffect(() => {
//     const listener = e => handleRemove(e.detail);
//     window.addEventListener("remove-kasa", listener);
//     return () => window.removeEventListener("remove-kasa", listener);
//   }, []);

//   return (
//     <AppStateContext.Provider value={{ state, handleCash, handleState, handleRef,  currency,
//     toggleCurrency, handleDial}}>
//       {children}
//     </AppStateContext.Provider>
//   );
// };

// export const useAppState = () => useContext(AppStateContext);



import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { produce } from "immer";
import PouchDB from "pouchdb-browser";

// init local PouchDB database
const db = new PouchDB("cash_register_db");

const AppStateContext = createContext();

const generateInitialKasa = () => ({
  main: { printer: "", klienti: 0 },
  start: { name: "", sum: "", cigs: "", name2: "" },
  cash: {
    500:[0,0],200:[0,0],100:[0,0],50:[0,0],20:[0,0],10:[0,0],5:[0,0],
    2:[0,0],1:[0,0],0.5:[0,0],0.2:[0,0],0.1:[0,0],
    0.05:[0,0],0.02:[0,0],0.01:[0,0]
  },
  vouchers: {
    sodekso:0, etap:0, idunred:0, poshti:0,
    tombou:0, dejene:0, prizma:0, fiducia:0
  },
  other: {
    terminal:0, cashBack:0, glovo:0, rko:0,
    inkaso:0, storno:0
  },
  ref: { check:0, karta:0, glovo:0, broi:0 },
  totals: { cash:0.0, vouchers:0, other:0, total:0, ref:0, lenta:0, obshto:0 }
});

const generateState = () => Array.from({ length: 10 }, () => generateInitialKasa());

const totalCash = cash => Object.values(cash).reduce((acc, [_, sum]) => acc + sum, 0);
const totalGroup = group => Object.values(group).reduce((acc, val) => acc + parseFloat(val), 0);

export const AppStateProvider = ({ children, setSnack }) => {
  const [currency, setCurrency] = useState("BGN"); // active currency
  const [allStates, setAllStates] = useState({
    EUR: generateState(),
    BGN: generateState()
  });

  const didMount = useRef(false);

  // Load from PouchDB on first mount
  useEffect(() => {
    const loadState = async () => {
      try {
        const doc = await db.get("ALL_STATES");
        setAllStates(doc.allStates);
      } catch (err) {
        if (err.status === 404) {
          // First run → create initial doc
          const newDoc = { _id: "ALL_STATES", allStates };
          await db.put(newDoc);
        } else {
          console.error("Error loading ALL_STATES:", err);
        }
      }
    };
    loadState();
  }, []);

  // Save to PouchDB whenever allStates changes
  useEffect(() => {
    const saveState = async () => {
      try {
        const doc = await db.get("ALL_STATES");
        await db.put({ ...doc, allStates });
      } catch (err) {
        if (err.status === 404) {
          await db.put({ _id: "ALL_STATES", allStates });
        } else {
          console.error("Error saving ALL_STATES:", err);
        }
      }
    };

    if (didMount.current) {
      saveState();
    } else {
      didMount.current = true;
    }
  }, [allStates]);

  // Active state = shortcut for current currency
  const state = allStates[currency];

  const updateState = (updater) => {
    setAllStates(curr =>
      produce(curr, draft => {
        updater(draft[currency]);
      })
    );
  };

  const toggleCurrency = () => {
    setCurrency(curr => (curr === "BGN" ? "EUR" : "BGN"));
  };

  const handleCash = (input, value, kasa) => {
    const index = parseInt(kasa) - 1;
    updateState(draft => {
      draft[index].cash[input][0] = value;
      draft[index].cash[input][1] = value * input;
      draft[index].totals.cash = parseFloat(totalCash(draft[index].cash).toFixed(2));
    });
  };

  const handleState = (group, input, value, kasa) => {
    const index = parseInt(kasa) - 1;
    updateState(draft => {
      draft[index][group][input] = value;
      draft[index].totals[group] = totalGroup(draft[index][group]);
    });
  };

  const handleRef = (group, input, value, kasa) => {
    const index = parseInt(kasa) - 1;
    updateState(draft => {
      draft[index][group][input] = value;
      draft[index].totals[group] = totalGroup(draft[index][group]);
      draft[index].totals.lenta = draft[index].totals.cash + (draft[index].totals.ref2 || 0);
      draft[index].totals.obshto = draft[index].totals.lenta + draft[index].totals.ref;
    });
  };

  const handleRemove = (kasa) => {
    updateState(draft => {
      if (kasa === "all") {
        for (let i = 0; i < draft.length; i++) {
          draft[i] = generateInitialKasa();
        }
      } else {
        const index = parseInt(kasa) - 1;
        draft[index] = generateInitialKasa();
      }
    });
    if (setSnack) setSnack(true);
  };

  const handleDial = ([action, payload]) => {
    if (action === "remove") {
      handleRemove(payload);
    }
  };

  useEffect(() => {
    const listener = e => handleRemove(e.detail);
    window.addEventListener("remove-kasa", listener);
    return () => window.removeEventListener("remove-kasa", listener);
  }, []);

  return (
    <AppStateContext.Provider
      value={{ state, handleCash, handleState, handleRef, currency, toggleCurrency, handleDial }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);