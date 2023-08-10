import { Link, useLocation } from "react-router-dom";
import "../styles/SidebarLink.css";

const SidebarLink = ({ to, icon, text }) => {
  const location = useLocation();

  const activeLink = (path) => {
    return location.pathname.split("/").find((ele) => "/" + ele === path)
      ? "active"
      : "";
  };
  return (
    <Link to={to} className={`sidebar-link ${activeLink(to)}`}>
      {icon}
      <span className="text">{text}</span>
    </Link>
  );
};

export default SidebarLink;
