import { configureStore } from "@reduxjs/toolkit";
import cash1Reducer from "../features/cash1/cash1Slice";

export const store = configureStore({
  reducer: {
    cash1: cash1Reducer,
  },
});
