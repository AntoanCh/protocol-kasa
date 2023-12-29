import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: {
    name: "",
    sum: "",
    cigs: "",
    name2: "",
  },
  end: {
    name: "",
    sum: "",
    cigs: "",
    name2: "",
  },
  cash: {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 0,
    0.2: 0,
    0.1: 0,
    0.05: 0,
    0.02: 0,
    0.01: 0,
  },
  vouchers: {
    sum: 0,
    sodekso: 0,
    etap: 0,
    idunred: 0,
    poshti: 0,
    tombou: 0,
    dejene: 0,
    prizma: 0,
    fiducia: 0,
    terminal: 0,
    cashBack: 0,
    rko: 0,
  },
  ref: {
    lenta: 0,
    check: 0,
    karta: 0,
    glovo: 0,
    klienti: 0,
  },
};

// const cash1Slice = createSlice({
//   name: "cash1",
//   initialState,
//   reducers: {
//     update: (state, action) => {
//       state.cash;
//     },
//   },
// });
