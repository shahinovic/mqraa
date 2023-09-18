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

export const getStudents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "studentsTable"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // Dispatch the setStudents action to update the state
    dispatch(setStudentsReducer(data));
  } catch (error) {
    console.error(error);
  }
};

export const { getStudentsReducer, setStudentsReducer } = studentsSlice.actions;

export default studentsSlice.reducer;
