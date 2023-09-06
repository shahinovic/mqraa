import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteNews = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = ["الصورة", "العنوان", "التاريخ"];
  const newsSData = [];

  return (
    <div className="website-news" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={newsSData} headers={headers} />
    </div>
  );
};

export default WebsiteNews;
