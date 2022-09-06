import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.order = payload;
    },
  },
});

export const { fetchData } = OrderSlice.actions;
export const getAllOrder = (state) => state.order;
export default OrderSlice.reducer;
