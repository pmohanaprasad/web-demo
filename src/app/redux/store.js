import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Order/OrderSlice";

export const store = configureStore({
  reducer: { order: orderReducer },
});
