import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../../components";

const SubscriptionsTypes = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  const subscriptionsData = [
    {
      name: "الاشتراك الفصلي",
      type: "فصلي",
      amount: 500,
    },
    {
      name: "الاشتراك الشهري",
      type: "شهري",
      amount: 100,
    },
    {
      name: "الاشتراك السنوي",
      type: "سنوي",
      amount: 100,
    },
    {
      name: "الاشتراك السنوي",
      type: "سنوي",
      amount: 100,
    },
  ];

  const headers = ["نوع الاشتراك", "النوع", "المبلغ"];
  return (
    <div className="subscriptions-types py-3 px-2 bg-light" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="أدخل اسم الإشتراك" />
      <StudentsTable studentsData={subscriptionsData} headers={headers} />
    </div>
  );
};

export default SubscriptionsTypes;
