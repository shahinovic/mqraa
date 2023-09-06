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

import "./SidebarLinks.css";
import SidebarLink from "../SidebarLink/SidebarLink";

const SidebarLinks = ({ isOpen }) => {
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
    <nav className="sidebar-links ">
      <ul>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/dashboard"
            icon={<AiHome />}
            text="لوحة القيادة"
          />
        </li>
        {/* <li>
          <SidebarLink isOpen={isOpen} to="/messages" icon={<AiMail />} text="الرسائل" />
        </li> */}
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/settings"
            icon={<AiSetting />}
            text="الإعدادات"
          />
        </li>
        {isOpen ? (
          <h3>الشؤون الإدارية</h3>
        ) : (
          <h3>
            <hr />
          </h3>
        )}
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/students"
            icon={<AiUser />}
            text="الطلاب"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/teachers"
            icon={<AiUser />}
            text="المعلمين"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/parents"
            icon={<AiUser />}
            text="أولياء الأمور"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/sessions"
            icon={<AiUnorderedList />}
            text="الحلقات"
          />
        </li>
        {/* <li>
          <SidebarLink isOpen={isOpen} to="/employees" icon={<Users />} text="الموظفين" />
        </li> */}
        {isOpen ? (
          <h3>الشؤون التعليمية</h3>
        ) : (
          <h3>
            <hr />
          </h3>
        )}

        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/reciter"
            icon={<AiVideoCamera />}
            text="المقرأة الإلكترونية"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/memorizing"
            icon={<AiCheckSquare />}
            text="الحفظ والمراجعة"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/attendance"
            icon={<AiCalendar />}
            text="الحضور"
          />
        </li>
        {/* <li>
          <SidebarLink isOpen={isOpen} to="/plans" icon={<Book />} text="الخطط والمقررات" />
        </li> */}
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/reports"
            icon={<Report />}
            text="التقارير"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/statistics"
            icon={<Statistics />}
            text="الإحصاءات"
          />
        </li>
        {isOpen ? (
          <h3>إدارة المحتوي</h3>
        ) : (
          <h3>
            <hr />
          </h3>
        )}

        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/website"
            icon={<Website />}
            text="الموقع الإلكتروني"
          />
        </li>
        {/* <li>
          <SidebarLink isOpen={isOpen} to="/ads" icon={<Ads />} text="الاخبار والإعلانات" />
        </li> */}
        {/* <li>
          <SidebarLink isOpen={isOpen} to="/library" icon={<Library />} text="المكتبة" />
        </li> */}
        {isOpen ? (
          <h3>الشؤون المالية</h3>
        ) : (
          <h3>
            <hr />
          </h3>
        )}

        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/financial-affairs/student-subscriptions"
            icon={<Subscriptions />}
            text="إشتراكات الطلاب"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/financial-affairs/financial-affairs-incomes"
            icon={<Incomes />}
            text="المداخيل"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/financial-affairs/financial-affairs-expenses"
            icon={<Outcomes />}
            text="المصاريف"
          />
        </li>
        <li>
          <SidebarLink
            isOpen={isOpen}
            to="/financial-affairs/financial-affairs-reports"
            icon={<Report />}
            text="التقارير المالية"
          />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarLinks;
