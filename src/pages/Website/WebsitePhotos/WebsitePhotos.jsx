import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsitePhotos = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = ["الألبوم", "الصورة", "عنوان"];
  const photosData = [];
  return (
    <div className="website-photos py-3 px-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={photosData} headers={headers} />
    </div>
  );
};

export default WebsitePhotos;
