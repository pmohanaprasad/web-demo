import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: [],
};

const AddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.address = payload;
    },
  },
});

export const { fetchData } = AddressSlice.actions;
export const getAllAddress = (state) => state.address;
export default AddressSlice.reducer;
