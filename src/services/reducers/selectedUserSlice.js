import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
