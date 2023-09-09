import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const employeesAttendanceSlice = createSlice({
  name: "employeesAttendance",
  initialState,
  reducers: {
    getEmployeesAttendance: (state, action) => {
      state.value = action.payload;
    },
    setEmployeesAttendance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getEmployeesAttendance, setEmployeesAttendance } =
  employeesAttendanceSlice.actions;

export default employeesAttendanceSlice.reducer;
