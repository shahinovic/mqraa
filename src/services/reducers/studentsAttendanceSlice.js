import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const studentsAttendanceSlice = createSlice({
  name: "studentsAttendance",
  initialState,
  reducers: {
    getStudentsAttendance: (state, action) => {
      state.value = action.payload;
    },
    setStudentsAttendance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getStudentsAttendance, setStudentsAttendance } =
  studentsAttendanceSlice.actions;

export default studentsAttendanceSlice.reducer;
