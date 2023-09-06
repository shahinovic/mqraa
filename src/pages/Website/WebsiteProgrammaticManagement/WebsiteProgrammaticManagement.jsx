import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteProgrammaticManagement = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = ["الصورة", "العنوان", "وصف", "يعرض علي واجهة الموقع ؟"];
  const programsData = [];
  return (
    <div className="website-programs py-3 px-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={programsData} headers={headers} />
    </div>
  );
};

export default WebsiteProgrammaticManagement;
