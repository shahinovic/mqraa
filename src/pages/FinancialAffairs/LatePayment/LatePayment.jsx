import React, { useState } from "react";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";
import { Button } from "react-bootstrap";
import { BsWhatsapp as Whatsapp } from "react-icons/bs";
import { AiOutlineMail as Mail } from "react-icons/ai";

const LatePayment = () => {
  const [sessionNames, setSessionNames] = useState([]);
  const [month, setMonth] = useState([]);
  const sessionsArray = [
    "حلقة الشيخ جمال طيبي",
    "حلقة الشيخ رمضان بحري",
    "حلقة الشيخ عبدالحميد",
    "حلقة الشيخ حمزة مهرهرة",
    "حلقة الشيخ علي زقاي",
    "حلقة الشيخ أحمد لملوم",
    "حلقة الشيخ زكريا العنابي",
  ];
  const monthsArray = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const filterInputs = [
    {
      cols: 5,
      type: "text",
      formLabel: "الحلقة",
      formPlaceholder: "اختر الحلقة",
      optionsArray: sessionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },

    {
      cols: 5,
      type: "text",
      formLabel: "الشهر",
      formPlaceholder: "اختر الشهر",
      optionsArray: monthsArray,
      names: month,
      setNames: setMonth,
    },
  ];

  const secondColActions = ["طباعة التقرير", "إظهار 15 أسطر", "Excel"];

  const show = {
    state: "second",
    second: secondColActions,
  };

  // table

  const AlertWhatsapp = ({ number }) => {
    return (
      <a
        href={`https://wa.me/${number}`}
        className="d-block mb-2"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="success">
          <Whatsapp /> ارسال تنبيه عبر الواتساب
        </Button>
      </a>
    );
  };

  const AlertEmail = ({ email }) => {
    return (
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
        <Button variant="danger">
          <Mail /> ارسال تنبيه عبر البريد الالكتروني
        </Button>
      </a>
    );
  };

  const Alert = ({ email, number }) => {
    if (email !== undefined && number !== undefined) {
      return (
        <div>
          <AlertWhatsapp number={number} />
          <AlertEmail email={email} />
        </div>
      );
    }

    if (email !== undefined) {
      return <AlertEmail email={email} />;
    }

    if (number !== undefined) {
      return <AlertWhatsapp number={number} />;
    }
  };

  const subscriptionsData = [
    {
      name: "طالب 1",
      parentNumber: "2342342",
      parentEmail: "",
      alert: <Alert number={"2342342"} />,
    },
    {
      name: "طالب 2",
      parentNumber: "2342342",
      parentEmail: "sfd@gmail.com",
      alert: <Alert email={"sfd@gmail.com"} number={"2342342"} />,
    },
  ];

  const headers = ["اسم الطالب", "رقم الولي", "حساب الولي", "تنبيه الدفع"];

  return (
    <div className="late-payment py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsSearchByName
        name="بحث بإسم الطالب"
        placeholder="أدخل اسم الطالب"
      />
      <StudentsTable studentsData={subscriptionsData} headers={headers} />
    </div>
  );
};

export default LatePayment;
