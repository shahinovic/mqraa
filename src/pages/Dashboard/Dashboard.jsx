import { DashboarInfo, DashboardHeader } from "../../components";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard" dir="rtl">
      <DashboardHeader />
      <DashboarInfo />
    </div>
  );
};

export default Dashboard;
