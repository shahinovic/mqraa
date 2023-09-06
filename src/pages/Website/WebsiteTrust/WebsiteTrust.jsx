import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteTrust = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = ["الصورة", "عنوان", "وصف", "يعرض علي واجهة الموقع ؟"];
  const trustData = [];
  return (
    <div className="website-trust py-3 px-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={trustData} headers={headers} />
    </div>
  );
};

export default WebsiteTrust;
