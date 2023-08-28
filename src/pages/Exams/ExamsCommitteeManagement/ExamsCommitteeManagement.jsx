import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const ExamsCommitteeManagement = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table
  const headers = [
    "الاسم",
    "الكنية",
    "اسم المستخدم",
    "رقم الهاتف",
    "البريد الإلكتروني",
    "الجنس",
    "رقم الهوية",
  ];
  const committeeData = [
    {
      name: "محمد امين",
      nickname: "العرباوي ",
      username: "sjhd5644",
    },
    {
      name: "عبدالله",
      nickname: "العنابي",
      username: "sfaf654",
    },
  ];

  return (
    <div
      className="exams-committee-management py-3 px-2 bg-light rounded-2"
      dir="rtl"
    >
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={committeeData} headers={headers} />
    </div>
  );
};

export default ExamsCommitteeManagement;
