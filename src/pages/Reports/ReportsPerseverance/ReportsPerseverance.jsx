import React, { useState } from "react";
import { NormalTable, StudentsFilter } from "../../../components";

const ReportsPerseverance = () => {
  // filterInputs
  const [sessionNames, setSessionNames] = useState([]);
  const [studentName, setStudentName] = useState([]);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const sessionsArray = [
    "حلقة الشيخ جمال طيبي",
    "حلقة الشيخ رمضان بحري",
    "حلقة الشيخ عبدالحميد",
    "حلقة الشيخ حمزة مهرهرة",
    "حلقة الشيخ علي زقاي",
    "حلقة الشيخ أحمد لملوم",
    "حلقة الشيخ زكريا العنابي",
  ];

  const studentsArray = ["طالب 1", "طالب 2"];
  const fromDateArray = ["09-05-2022", "10-05-2022"];
  const toDateArray = ["10-05-2022", "11-05-2022"];

  const filterInputs = [
    {
      cols: 3,
      type: "text",
      formLabel: "الحلقة",
      formPlaceholder: "اختر الحلقة",
      optionsArray: sessionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
    {
      cols: 3,
      type: "text",
      formLabel: "الطالب",
      formPlaceholder: "اختر الطالب",
      optionsArray: studentsArray,
      names: studentName,
      setNames: setStudentName,
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

  // table data

  const TableData = [
    {
      name: "أسامة",
      nickname: "العنابي",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ جمال طيبي",
        2: "حلقة الشيخ رمضان بحري",
      },
      username: "student98721",
      date: "21-04-2011",
      birthPlace: "عين الحجل",
      nationality: "",
      identityType: "",
      attend: "7",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "امجد",
      nickname: "خليف",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ عبدالحميد",
      },
      username: "student1114317",
      date: "21-04-2011",
      birthPlace: "الجلفة",
      nationality: "",
      identityType: "",
      attend: "5",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "ايوب",
      nickname: "حمدون",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ حمزة مهرهرة",
      },
      username: "student1014915",
      date: "21-04-2011",
      birthPlace: "البوريرة",
      nationality: "",
      identityType: "",
      attend: "7",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "ايوب",
      nickname: "سعيدون",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ علي زقاي",
      },
      username: "student1018348",
      date: "21-04-2011",
      birthPlace: "عنابة",
      nationality: "",
      identityType: "",
      attend: "5",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "ابرهيم",
      nickname: "بن بتقة",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ علي زقاي",
        2: "حلقة الشيخ أحمد لملوم",
      },
      username: "student978950",
      date: "21-04-2011",
      birthPlace: "بوسعادة",
      nationality: "",
      identityType: "",
      attend: "5",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "إسحاق",
      nickname: "رحموني",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ زكريا العنابي",
      },
      username: "student1028674",
      date: "21-04-2011",
      birthPlace: "تقرت",
      nationality: "",
      identityType: "",
      attend: "6",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "إسماعيل",
      nickname: "فاسي",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ حمزة مهرهرة",
      },
      username: "student1027281",
      date: "21-04-2011",
      birthPlace: "الحمامات",
      nationality: "",
      identityType: "",
      attend: "6",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "تجربة",
      nickname: "تجربة",
      gender: "ذكر",
      sessions: {
        1: "حلقة تجريبية",
      },
      username: "student6192976",
      date: "21-04-2011",
      birthPlace: "",
      nationality: "",
      identityType: "",
      attend: "8",
      late: "0",
      absence: "1",
      excuse: "0",
    },
  ];

  const headers = ["الطالب", "الحضور", "التأخيرات", "الغياب", "الغياب بعذر"];

  const dataKeys = ["name", "attend", "late", "absence", "excuse"];
  return (
    <div className="reports-perseverance bg-light p-0 rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <NormalTable data={TableData} headers={headers} dataKeys={dataKeys} />
    </div>
  );
};

export default ReportsPerseverance;
