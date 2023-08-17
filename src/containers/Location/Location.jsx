import { Link, useLocation } from "react-router-dom";
import "./Location.css";

const Location = () => {
  const location = useLocation();
  const pathes = {
    ["/dashboard"]: "الرئيسية",
    ["/messages"]: "الرسائل",
    ["/settings"]: "الإعدادات",
    ["/students"]: "الطلاب",
    ["/teachers"]: "المعلمين",
    ["/parents"]: "أولياء الأمور",
    ["/sessions"]: "الحلقات",
    ["/employees"]: "الموظفين",
    ["/reciter"]: "المقرأة الإلكترونية",
    ["/memorizing"]: "الحفظ والمراجعة",
    ["/attendance"]: "الحضور",
    ["/plans"]: "الخطط والمقررات",
    ["/reports"]: "التقارير",
    ["/Statistics"]: "الإحصاءات",
    ["/website"]: "الموقع الإلكتروني",
    ["/ads"]: "الاخبار والإعلانات",
    ["/library"]: "المكتبة",
    ["/subscriptions"]: "إشتراكات الطلاب",
    ["/incomes"]: "المداخيل",
    ["/outcomes"]: "المصاريف",
    ["/financial-reports"]: "التقارير المالية",
    ["/school"]: "إعدادات المدرسة",
    ["/teachers-attendance"]: "حضور المعلمين",
    ["/students-attendance"]: "حضور الطلاب",
    ["/employees-attendance"]: "حضور الموظفين",
    ["/achievement"]: "تقارير الانجاز اليومي",
    ["/perseverance"]: "تقرير المواظبة",
    ["/student-detailed-report"]: "التقرير التفصيلي للطلاب",
    ["/sessions-detailed-report"]: "التقرير التفصيلي للحلقات",
  };
  let pathname = location.pathname.slice(1).split("/");

  const path = (location, pathes) => {
    if (location.pathname === "" || location.pathname === "/dashboard") {
      return pathes[location.pathname];
    } else {
      return (
        <>
          <Link to="/dashboard" className="back">
            الرئيسية
          </Link>
          {pathname.map((item, index) => {
            if (index === pathname.length - 1) {
              return (
                <span key={index} className="location-name">
                  {" / "}
                  {pathes["/" + item]}
                </span>
              );
            } else {
              return (
                <Link key={index} to={"/" + item} className="back">
                  {" / "}
                  {pathes["/" + item]}
                </Link>
              );
            }
          })}
        </>
      );
    }
  };
  return <div className="location">{path(location, pathes)}</div>;
};

export default Location;
