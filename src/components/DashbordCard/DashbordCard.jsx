// import { FiUsers as Users } from "react-icons/fi";
import "./DashbordCard.css";

const DashbordCard = ({ icon, title, color }) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-icon">{icon}</div>
      <div className="dashboard-card-title">{title}</div>
      <div className="dashboard-card-before">{icon}</div>
    </div>
  );
};

export default DashbordCard;
