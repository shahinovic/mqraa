import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteAlbums = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = ["الصورة", "عنوان", "يعرض علي التطبيق ؟"];
  const albumsData = [];
  return (
    <div className="website-albums py-3 px-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={albumsData} headers={headers} />
    </div>
  );
};

export default WebsiteAlbums;
