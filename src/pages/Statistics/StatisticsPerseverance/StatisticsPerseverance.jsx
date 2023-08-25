import React, { useState } from "react";
import { StudentsFilter } from "../../../components";
import ChartData from "../../../components/ChartData/ChartData";
// import { performanceTable } from "../../../../data";

import {
  AiOutlineDownload as DownloadIcon,
  AiOutlineSearch as SearchIcon,
} from "react-icons/ai";
import { Button } from "react-bootstrap";

const StatisticsPerseverance = () => {
  const [sessionNames, setSessionNames] = useState([]);
  const [studentName, setStudentName] = useState(["جميع الطلاب"]);
  const [from, setFrom] = useState(["09-05-2022"]);
  const [to, setTo] = useState(["11-05-2022"]);
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
  const toDateArray = ["20-05-2022", "21-05-2022"];
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
  // const mydata = performanceTable;
  console.log(
    "🚀 ~ file: StatisticsAchievement.jsx:63 ~ StatisticsAchievement ~ mydata:"
    // mydata
  );

  const data = {
    labels: ["عاصم بحري", "سيف الدين فيصل", "هارون العنابي", "جمال صحراوي"],
    datasets: [
      {
        label: "الحفظ",
        data: [3, 6, 9, 10],
        backgroundColor: ["#047857"],
      },
      {
        label: "المراجعة",
        data: [5, 8, 4, 2.5],
        backgroundColor: ["#8763b7"],
      },
      {
        label: "التثبيت",
        data: [2, 7, 5, 4.2],
        backgroundColor: ["#f59e0b"],
      },
    ],
  };
  return (
    <div className="statistics-perseverance py-3 px-2 bg-light" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <ChartData data={data} />
      <div className="statistics-perseverance-actions text-center">
        <Button variant="success" className="mx-2">
          <SearchIcon /> الحجم الطبيعي{" "}
        </Button>
        <Button variant="success" className="mx-2">
          <DownloadIcon /> تحميل{" "}
        </Button>
      </div>
    </div>
  );
};

export default StatisticsPerseverance;
