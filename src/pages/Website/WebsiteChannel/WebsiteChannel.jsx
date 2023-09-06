import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const WebsiteChannel = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const headers = ["عنوان", "الرابط", "التاريخ", "يعرض علي واجهة الموقع ؟"];

  const channelData = [];

  return (
    <div className="website-channel py-3 px-2 " dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={channelData} headers={headers} />
    </div>
  );
};

export default WebsiteChannel;
