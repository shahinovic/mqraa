// slices/booleanSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {
    toggle: (state) => !state,
  },
});

export const { toggle } = refreshSlice.actions;

export default refreshSlice.reducer;
