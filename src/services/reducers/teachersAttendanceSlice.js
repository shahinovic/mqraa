import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const teachersAttendanceSlice = createSlice({
  name: "teachersAttendance",
  initialState,
  reducers: {
    getTeachersAttendanceReducer: (state, action) => {
      state.value = action.payload;
    },
    setTeachersAttendanceReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTeachersAttendanceReducer, setTeachersAttendanceReducer } =
  teachersAttendanceSlice.actions;

export default teachersAttendanceSlice.reducer;
