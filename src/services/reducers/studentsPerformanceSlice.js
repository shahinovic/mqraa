import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const studentsPerformanceSlice = createSlice({
  name: "studentsPerformance",
  initialState,
  reducers: {
    getStudentsPerformance: (state, action) => {
      state.value = action.payload;
    },
    setStudentsPerformance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getStudentsPerformance, setStudentsPerformance } =
  studentsPerformanceSlice.actions;

export default studentsPerformanceSlice.reducer;
