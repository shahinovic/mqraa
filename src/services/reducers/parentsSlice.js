import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const parentsSlice = createSlice({
  name: "parents",
  initialState,
  reducers: {
    getParentsReducer: (state, action) => {
      state.value = action.payload;
    },
    setParentsReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getParentsReducer, setParentsReducer } = parentsSlice.actions;

export default parentsSlice.reducer;
