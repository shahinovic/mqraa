import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};

export const showFormSlice = createSlice({
  name: "showForm",
  initialState,
  reducers: {
    getFormStatus: (state, action) => {
      state.value = action.payload;
    },
    setFormStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getFormStatus, setFormStatus } = showFormSlice.actions;

export default showFormSlice.reducer;
