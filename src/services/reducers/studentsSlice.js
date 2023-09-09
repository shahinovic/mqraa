import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    getStudentsReducer: (state, action) => {
      state.value = action.payload;
    },
    setStudentsReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getStudentsReducer, setStudentsReducer } = studentsSlice.actions;

export default studentsSlice.reducer;
