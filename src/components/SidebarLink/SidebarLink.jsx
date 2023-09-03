import { Link, useLocation } from "react-router-dom";
import "./SidebarLink.css";

const SidebarLink = ({ isOpen, to, icon, text }) => {
  const location = useLocation();

  const activeLink = (path) => {
    return location.pathname.split("/").find((ele) => "/" + ele === path)
      ? "active"
      : "";
  };
  return (
    <Link
      to={to}
      className={`sidebar-link ${activeLink(to)} ${isOpen ? "open" : ""}`}
    >
      {icon}
      {isOpen && <span className="text">{text}</span>}
    </Link>
  );
};

export default SidebarLink;
