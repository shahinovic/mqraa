import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const ExamResults = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const headers = ["علامة من", "علامة إلي", "التقدير"];

  const examsData = [
    {
      from: 0,
      to: 69,
      result: "يعيد الإمتحان",
    },
    {
      from: 70,
      to: 79,
      result: "جيد",
    },
    {
      from: 80,
      to: 89,
      result: "جيد جدا",
    },
    {
      from: 90,
      to: 100,
      result: "ممتاز",
    },
  ];

  return (
    <div className="exam-results py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={examsData} headers={headers} />
    </div>
  );
};

export default ExamResults;
