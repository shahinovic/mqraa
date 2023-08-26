import React from "react";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";
import { AiFillPrinter as Print } from "react-icons/ai";
import { Button } from "react-bootstrap";

const FinancialIncomes = () => {
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
    "بواسطة",
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

  const incomesData = [
    {
      data: "21-04-2011",
      incomeID: "1028674",
      reason: "Donation",
      amount: 100000,
      payer: "Unknown",
      paymentMethod: "نقدا",
      print: <PrintBtn id="1028674" />,
    },
    {
      data: "21-04-2011",
      incomeID: "1558674",
      reason: "Donation",
      amount: 100000,
      payer: "Unknown",
      paymentMethod: "نقدا",
      print: <PrintBtn id="1558674" />,
    },
  ];

  return (
    <div className="financial-incomes py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" />
      <StudentsTable studentsData={incomesData} headers={headers} />
    </div>
  );
};

export default FinancialIncomes;
