import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteQuestions = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const headers = ["السؤال", "الجواب", "يعرض علي واجهة الموقع ؟"];
  const questionsData = [];
  return (
    <div className="website-questions py-3 px-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={questionsData} headers={headers} />
    </div>
  );
};

export default WebsiteQuestions;
