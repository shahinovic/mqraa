import { useAuth0 } from "@auth0/auth0-react";
import "./SidebarUser.css";
import { AiOutlineSetting as Settings } from "react-icons/ai";

const SidebarUser = ({ isOpen }) => {
  const { user } = useAuth0();
  const nickname = user?.nickname || "";

  const truncatedNickname =
    nickname.length > 15
      ? nickname.substring(0, isOpen ? 15 : 10) + " ..."
      : nickname;

  return (
    <div className="sidebar-user">
      <div className="user-info">
        <div className="user-avatar">
          <img src={user?.picture} alt={user?.name} />
          <span className="status"></span>
        </div>
        <div className="user-name">
          <h3>{truncatedNickname}</h3>
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
