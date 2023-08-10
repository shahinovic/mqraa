import { Route, Routes } from "react-router-dom";

import "../styles/Content.css";
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
  Teachers,
} from "../pages";

const Content = () => {
  return (
    <div className="content">
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
      </Routes>
    </div>
  );
};

export default Content;
