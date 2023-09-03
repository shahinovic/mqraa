import "./SidebarUser.css";
import { AiOutlineSetting as Settings } from "react-icons/ai";
const SidebarUser = () => {
  return (
    <div className="sidebar-user">
      <div className="user-info">
        <div className="user-avatar">
          <img
            src="https://plus.unsplash.com/premium_photo-1677231559663-b9f6a7c33c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <span className="status"></span>
        </div>
        <div className="user-name">
          <h3>أحمد محمود</h3>
          <p>المشرف العام</p>
        </div>
        <span className="settings">
          <Settings />
        </span>
      </div>
    </div>
  );
};

export default SidebarUser;
