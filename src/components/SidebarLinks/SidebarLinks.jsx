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
import { BsBook as Book } from "react-icons/bs";
import { BiSolidReport as Report } from "react-icons/bi";
import { FcStatistics as Statistics } from "react-icons/fc";
import { CgWebsite as Website } from "react-icons/cg";
import { FaHeadset as Ads } from "react-icons/fa";
import { BiLibrary as Library } from "react-icons/bi";
import { MdHandshake as Subscriptions } from "react-icons/md";
import { BsFillArrowUpCircleFill as Incomes } from "react-icons/bs";
import { BsFillArrowDownCircleFill as Outcomes } from "react-icons/bs";

import { SidebarLink } from "..";
import "./SidebarLinks.css";

const SidebarLinks = () => {
  // const pathes = {
  //   dashboard: "الرئيسية",
  //   messages: "الرسائل",
  //   settings: "الإعدادات",
  //   students: "الطلاب",
  //   teachers: "المعلمين",
  //   parents: "أولياء الأمور",
  //   sessions: "الحلقات",
  //   employees: "الموظفين",
  //   reciter: "المقرأة الإلكترونية",
  //   memorizing: "الحفظ والمراجعة",
  //   attendance: "الحضور",
  //   plans: "الخطط والمقررات",
  //   reports: "التقارير",
  //   Statistics: "الإحصاءات",
  //   website: "الموقع الإلكتروني",
  //   ads: "الاخبار والإعلانات",
  //   library: "المكتبة",
  //   Subscriptions: "إشتراكات الطلاب",
  //   Incomes: "المداخيل",
  //   Outcomes: "المصاريف",
  //   FinancialReports: "التقارير المالية",
  // };

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
          <SidebarLink to="/parents" icon={<AiUser />} text="أولياء الأمور" />
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
        <li>
          <SidebarLink to="/plans" icon={<Book />} text="الخطط والمقررات" />
        </li>
        <li>
          <SidebarLink to="/reports" icon={<Report />} text="التقارير" />
        </li>
        <li>
          <SidebarLink
            to="/Statistics"
            icon={<Statistics />}
            text="الإحصاءات"
          />
        </li>
        <h3>إدارة المحتوي</h3>
        <li>
          <SidebarLink
            to="/website"
            icon={<Website />}
            text="الموقع الإلكتروني"
          />
        </li>
        <li>
          <SidebarLink to="/ads" icon={<Ads />} text="الاخبار والإعلانات" />
        </li>
        <li>
          <SidebarLink to="/library" icon={<Library />} text="المكتبة" />
        </li>
        <h3>الشؤون المالية</h3>

        <li>
          <SidebarLink
            to="/subscriptions"
            icon={<Subscriptions />}
            text="إشتراكات الطلاب"
          />
        </li>
        <li>
          <SidebarLink to="/incomes" icon={<Incomes />} text="المداخيل" />
        </li>
        <li>
          <SidebarLink to="/outcomes" icon={<Outcomes />} text="المصاريف" />
        </li>
        <li>
          <SidebarLink
            to="/financial-reports"
            icon={<Report />}
            text="التقارير المالية"
          />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarLinks;
