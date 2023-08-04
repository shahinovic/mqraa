import { SidebarLinks, SidebarUser } from "../components";
import "../styles/Sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar" dir="rtl">
      <div className="sidebar-logo"></div>
      <SidebarUser />
      <SidebarLinks />
    </div>
  );
};

export default SideBar;
