import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const ExamsTypes = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };
  // table

  const examsData = [
    {
      name: "امتحان الفرع الأول",
      boneDegree: 100,
      successDegree: 75,
      MemorizeDegree: 80,
      appliedIntonationDegree: 20,
      theoreticalIntonationDegree: 0,
      performance: 0,
    },
    {
      name: "امتحان الفرع الثاني",
      boneDegree: 100,
      successDegree: 75,
      MemorizeDegree: 80,
      appliedIntonationDegree: 20,
      theoreticalIntonationDegree: 0,
      performance: 0,
    },
    {
      name: "امتحان الفرع الثالث",
      boneDegree: 100,
      successDegree: 75,
      MemorizeDegree: 80,
      appliedIntonationDegree: 20,
      theoreticalIntonationDegree: 0,
      performance: 0,
    },
    {
      name: "امتحان الفرع الرابع",
      boneDegree: 100,
      successDegree: 75,
      MemorizeDegree: 80,
      appliedIntonationDegree: 20,
      theoreticalIntonationDegree: 0,
      performance: 0,
    },
  ];
  const headers = [
    "اسم الاختبار",
    "الدرجة العظمي",
    "علامة النجاح",
    "درجة الحفظ",
    "درجة التجويد",
    "درجة التجويد النظري",
    "درجة الأداء",
  ];
  return (
    <div className="exams py-3 px-2 bg-light" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={examsData} headers={headers} />
    </div>
  );
};

export default ExamsTypes;
