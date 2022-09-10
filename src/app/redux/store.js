import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Order/OrderSlice";
import addressReducer from "./Address/addressSlice";
import nameReducer from "./Name/nameSlice";

export const store = configureStore({
  reducer: { order: orderReducer, address: addressReducer, name: nameReducer },
});
