import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: [],
};

const NameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { fetchData } = NameSlice.actions;
export const getAllName = (state) => state.name;
export default NameSlice.reducer;
