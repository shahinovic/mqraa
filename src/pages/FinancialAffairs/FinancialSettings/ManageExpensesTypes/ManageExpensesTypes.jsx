import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../../components";

const ManageExpensesTypes = () => {
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
      name: "جوائز",
      note: "",
    },
    {
      name: "رواتب",
      note: "",
    },
    {
      name: "نوع تجريبي",
      note: "",
    },
  ];

  const headers = ["نوع المصروف", "ملاحظة"];
  return (
    <div className="manage-expenses-types py-3 px-2 bg-light" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="أدخل اسم المصروف" />
      <StudentsTable studentsData={expensesData} headers={headers} />
    </div>
  );
};

export default ManageExpensesTypes;
