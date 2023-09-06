import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsitePartners = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = ["الصورة", "العنوان", "الرابط"];
  const partnersData = [];
  return (
    <div className="website-partners py-3 px-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName
        name="بحث بإسم الطالب"
        placeholder="أدخل اسم الطالب"
      />
      <StudentsTable studentsData={partnersData} headers={headers} />
    </div>
  );
};

export default WebsitePartners;
