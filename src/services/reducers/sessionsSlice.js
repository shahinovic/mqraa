import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    getSessionsReducer: (state, action) => {
      state.value = action.payload;
    },
    setSessionsReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getSessionsReducer, setSessionsReducer } = sessionsSlice.actions;

export default sessionsSlice.reducer;
