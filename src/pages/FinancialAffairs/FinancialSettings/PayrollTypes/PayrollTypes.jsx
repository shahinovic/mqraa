import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../../components";

const PayrollTypes = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  const expensesData = [
    {
      name: "امتياز شهري",
      type: "شهري",
      category: "المعلمين",
      amount: 500,
    },
    {
      name: "راتب معلم ساعي",
      type: "باستمرار",
      category: "المعلمين",
      amount: 500,
    },
  ];

  const headers = ["نوع الراتب", "النوع", "الفئة", "المبلغ"];
  return (
    <div className="payroll-types py-3 px-2 bg-light" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="أدخل اسم المصروف" />
      <StudentsTable studentsData={expensesData} headers={headers} />
    </div>
  );
};

export default PayrollTypes;
