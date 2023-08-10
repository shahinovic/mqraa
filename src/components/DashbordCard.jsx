// import { FiUsers as Users } from "react-icons/fi";
import "../styles/DashbordCard.css";

const DashbordCard = ({ icon, title, color }) => {
  return (
    <div className="dashboard-card" style={{ backgroundColor: color }}>
      <div className="dashboard-card-icon">{icon}</div>
      <div className="dashboard-card-title">{title}</div>
      <div className="dashboard-card-before">{icon}</div>
    </div>
  );
};

export default DashbordCard;