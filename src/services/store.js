import { configureStore } from "@reduxjs/toolkit";
import employeesAttendanceReducer from "./reducers/employeesAttendanceSlice";
import sessionsReducer from "./reducers/sessionsSlice";
import studentsAttendanceReducer from "./reducers/studentsAttendanceSlice";
import studentsPerformanceReducer from "./reducers/studentsPerformanceSlice";
import studentsReducer from "./reducers/studentsSlice";
import teachersAttendanceReducer from "./reducers/teachersAttendanceSlice";
import teachersReducer from "./reducers/teachersSlice";

export const store = configureStore({
  reducer: {
    employeesAttendance: employeesAttendanceReducer,
    sessions: sessionsReducer,
    studentsAttendance: studentsAttendanceReducer,
    studentsPerformance: studentsPerformanceReducer,
    students: studentsReducer,
    teachersAttendance: teachersAttendanceReducer,
    teachers: teachersReducer,
  },
});
