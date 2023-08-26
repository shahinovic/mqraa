import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";
import { Button } from "react-bootstrap";
import { AiFillPrinter as Print } from "react-icons/ai";

const FinancialExpenses = () => {
  // actions

  const firstColActions = ["إضافة", "حذف"];
  const secondColActions = ["طباعة", "إظهار", "Excel"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const headers = [
    "تاريخ",
    "رقم السند",
    "السبب",
    "المبلغ",
    "النوع",
    "ملاحظة",
    "طريقة الدفع",
    "طباعة",
  ];

  const PrintBtn = ({ id }) => {
    return (
      <Button key={id} variant="warning">
        <Print /> طباعة
      </Button>
    );
  };

  const expensesData = [
    {
      data: "21-04-2011",
      incomeID: "1028674",
      reason: "Donation",
      amount: 100000,
      type: "رواتب",
      note: "note",
      paymentMethod: "تحويل بريدي",
      print: <PrintBtn id="1028674" />,
    },
    {
      data: "21-04-2011",
      incomeID: "1028674",
      reason: "Donation",
      amount: 100000,
      type: "رواتب",
      note: "note",
      paymentMethod: "تحويل بريدي",
      print: <PrintBtn id="1028674" />,
    },
  ];

  return (
    <div className="financial-expenses py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={expensesData} headers={headers} />
    </div>
  );
};

export default FinancialExpenses;
