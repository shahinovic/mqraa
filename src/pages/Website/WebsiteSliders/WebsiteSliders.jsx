import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteSliders = () => {
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
  const sliderData = [];
  return (
    <div className="website-sliders" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={sliderData} headers={headers} />
    </div>
  );
};

export default WebsiteSliders;
