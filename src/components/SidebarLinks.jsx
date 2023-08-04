import {
  AiOutlineHome as AiHome,
  AiOutlineMail as AiMail,
  AiOutlineSetting as AiSetting,
  AiOutlineUser as AiUser,
  AiOutlineUnorderedList as AiUnorderedList,
  AiOutlineVideoCamera as AiVideoCamera,
  AiOutlineCheckSquare as AiCheckSquare,
  AiOutlineCalendar as AiCalendar,
} from "react-icons/ai";
import { PiUsersFourThin as Users } from "react-icons/pi";
import { SidebarLink } from ".";
import "../styles/SidebarLinks.css";

const SidebarLinks = () => {
  return (
    <nav className="sidebar-links">
      <ul>
        <li>
          <SidebarLink to="/dashboard" icon={<AiHome />} text="لوحة القيادة" />
        </li>
        <li>
          <SidebarLink to="/messages" icon={<AiMail />} text="الرسائل" />
        </li>
        <li>
          <SidebarLink to="/settings" icon={<AiSetting />} text="الإعدادات" />
        </li>
        <h3>الشؤون الإدارية</h3>
        <li>
          <SidebarLink to="/students" icon={<AiUser />} text="الطلاب" />
        </li>
        <li>
          <SidebarLink to="/teachers" icon={<AiUser />} text="المعلمين" />
        </li>
        <li>
          <SidebarLink to="/Parents" icon={<AiUser />} text="أولياء الأمور" />
        </li>
        <li>
          <SidebarLink
            to="/sessions"
            icon={<AiUnorderedList />}
            text="الحلقات"
          />
        </li>
        <li>
          <SidebarLink to="/employees" icon={<Users />} text="الموظفين" />
        </li>
        <h3>الشؤون التعليمية</h3>
        <li>
          <SidebarLink
            to="/reciter"
            icon={<AiVideoCamera />}
            text="المقرأة الإلكترونية"
          />
        </li>
        <li>
          <SidebarLink
            to="/memorizing"
            icon={<AiCheckSquare />}
            text="الحفظ والمراجعة"
          />
        </li>
        <li>
          <SidebarLink to="/attendance" icon={<AiCalendar />} text="الحضور" />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarLinks;
