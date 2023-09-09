import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    getTeachers: (state, action) => {
      state.value = action.payload;
    },
    setTeachers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTeachers, setTeachers } = teachersSlice.actions;

export default teachersSlice.reducer;
