import { Route, Routes } from "react-router-dom";

import {
  Attendance,
  Dashboard,
  Employees,
  Memorizing,
  Messages,
  Parents,
  Reciter,
  School,
  Sessions,
  Settings,
  Students,
  StudentsAttendance,
  UserAttendance,
  Teachers,
  TeachersAttendance,
  EmployeesAttendance,
  Reports,
  ReportsAchievement,
  ReportsPerseverance,
  StudentDetailedReport,
  SessionsDetailedReport,
} from "../../pages";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/school" element={<School />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/parents" element={<Parents />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/reciter" element={<Reciter />} />
      <Route path="/memorizing" element={<Memorizing />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/attendance/teachers" element={<TeachersAttendance />} />
      <Route path="/attendance/teachers/:id" element={<UserAttendance />} />
      <Route path="/attendance/students" element={<StudentsAttendance />} />
      <Route path="/attendance/students/:id" element={<UserAttendance />} />
      <Route path="/attendance/employees" element={<EmployeesAttendance />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/achievement" element={<ReportsAchievement />} />
      <Route path="/reports/perseverance" element={<ReportsPerseverance />} />

      <Route
        path="/reports/student-detailed-report"
        element={<StudentDetailedReport />}
      />
      <Route
        path="/reports/sessions-detailed-report"
        element={<SessionsDetailedReport />}
      />
    </Routes>
  );
};

export default MyRoutes;
