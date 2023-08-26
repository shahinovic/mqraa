import React, { useState } from "react";
import {
  StudentsActions,
  StudentsFilter,
  StudentsTable,
} from "../../../components";
import { Button } from "react-bootstrap";
import {
  ImCheckboxChecked as Checked,
  ImCheckboxUnchecked as Unchecked,
} from "react-icons/im";
import { AiFillPrinter as Printer } from "react-icons/ai";

const StudentSubscriptions = () => {
  // filterInputs
  const [sessionNames, setSessionNames] = useState([]);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const sessionsArray = ["سنوي", "شهري", "فصلي"];
  const fromDateArray = ["09-05-2022", "10-05-2022"];
  const toDateArray = ["10-05-2022", "11-05-2022"];
  const filterInputs = [
    {
      cols: 3,
      type: "text",
      formLabel: "نوع الاشتراك",
      formPlaceholder: "اختر الاشتراك",
      optionsArray: sessionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },

    {
      cols: 3,
      type: "text",
      formLabel: "من",
      formPlaceholder: "اختر بداية التقرير",
      optionsArray: fromDateArray,
      names: from,
      setNames: setFrom,
    },
    {
      cols: 3,
      type: "text",
      formLabel: "إلي",
      formPlaceholder: "اختر نهاية التقرير",
      optionsArray: toDateArray,
      names: to,
      setNames: setTo,
    },
  ];

  // actions

  const firstColActions = ["إضافة", "حذف"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const headers = [
    "رقم السند",
    "الطالب",
    "الحالة",
    "المبلغ",
    "تاريخ الدفع",
    "النوع",
    "طباعة",
  ];

  // table data
  const StatusBtn = ({ status }) => {
    return (
      <Button
        className="d-flex align-items-center"
        variant={status ? "success" : "warning"}
      >
        {status ? <Checked /> : <Unchecked />}
        {". "}
        {status ? "تم الدفع" : "غير مدفوع"}
      </Button>
    );
  };

  const PrintBtn = () => {
    return (
      <Button className="d-flex align-items-center " variant="warning">
        <Printer /> طباعة
      </Button>
    );
  };

  const subscriptionsData = [
    {
      subscriptionsID: "INV100059",
      studentName: "عبدالرحمن كرامة",
      status: <StatusBtn status={true} />,
      amount: 500,
      date: "10-05-2022",
      type: "الاشتراك الشهري",
      طباعة: <PrintBtn />,
    },
    {
      subscriptionsID: "INV100059",
      studentName: "محمد امين",
      status: <StatusBtn status={false} />,
      amount: 500,
      date: "10-05-2022",
      type: "الاشتراك الشهري",
      طباعة: <PrintBtn />,
    },
  ];

  return (
    <div className="student-subscriptions py-3 px-2 bg-light" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsTable studentsData={subscriptionsData} headers={headers} />
    </div>
  );
};

export default StudentSubscriptions;
