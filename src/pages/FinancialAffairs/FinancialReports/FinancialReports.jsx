import React, { useState } from "react";
import {
  Calculations,
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const FinancialReports = () => {
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [recipient, setRecipient] = useState([]);
  const fromDateArray = ["09-05-2022", "10-05-2022"];
  const toDateArray = ["10-05-2022", "11-05-2022"];
  const recipientsArray = ["مستلم 1", "مستلم 2"];
  const filterInputs = [
    {
      cols: 4,
      type: "text",
      formLabel: "من",
      formPlaceholder: "اختر بداية التقرير",
      optionsArray: fromDateArray,
      names: from,
      setNames: setFrom,
    },
    {
      cols: 4,
      type: "text",
      formLabel: "إلي",
      formPlaceholder: "اختر نهاية التقرير",
      optionsArray: toDateArray,
      names: to,
      setNames: setTo,
    },
    {
      cols: 4,
      type: "text",
      formLabel: "المستلم",
      formPlaceholder: "اختر المستلم",
      optionsArray: recipientsArray,
      names: recipient,
      setNames: setRecipient,
    },
  ];

  // actions

  const firstColActions = ["طباعة التقرير"];
  const secondColActions = ["إظهار 15 سطر", "Excel"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const headers = ["التاريخ", "المبلغ", "المصدر / السبب", "رقم السند"];

  const reportsData = [
    {
      date: "2017-05-01",
      amount: "- 100 ر.س",
      reason: "فاتورة الكهرباء",
      voucher: "INV23423",
    },
    {
      date: "2017-05-01",
      amount: "+ 100 ر.س",
      reason: "الاشتراك الشهري: تجربة تجربة",
      voucher: "INV23423",
    },
    {
      date: "2017-05-01",
      amount: "+ 200 ر.س",
      reason: "الاشتراك الشهري: احمد محمد",
      voucher: "INV23423",
    },
  ];
  return (
    <div className="financial-reports py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <Calculations reportsData={reportsData} />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={reportsData} headers={headers} />
    </div>
  );
};

export default FinancialReports;
