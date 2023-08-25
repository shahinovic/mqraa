import React, { useState } from "react";
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Button } from "react-bootstrap";
import {
  AiOutlineDownload as DownloadIcon,
  AiOutlineSearch as SearchIcon,
} from "react-icons/ai";
import { StudentsFilter } from "../../../components";

ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const StatisticsProgression = () => {
  const studentsArray = ["طالب 1", "طالب 2"];
  const fromDateArray = ["09-05-2022", "10-05-2022"];
  const toDateArray = ["20-05-2022", "21-05-2022"];

  const [sessionNames, setSessionNames] = useState([]);
  const [studentName, setStudentName] = useState([studentsArray[0]]);
  const [from, setFrom] = useState(["09-05-2022"]);
  const [to, setTo] = useState(["11-05-2022"]);
  const data = {
    labels: ["Mon", "Tue", "Wed"], //'Thu', 'Fri', 'Sat', 'Sun'
    datasets: [
      {
        label: "الحفظ",
        data: [20, 15, 22, 15],
        borderColor: ["#047857"],
        backgroundColor: ["#047857"],
        tension: 0.4,
      },

      {
        label: "المراجعة",
        data: [10, 15, 9, 19],
        borderColor: ["#8763b7"],
        backgroundColor: ["#8763b7"],
        tension: 0.4,
      },
      {
        label: "التثبيت",
        data: [15, 20, 13, 19],
        borderColor: ["#f59e0b"],
        backgroundColor: ["#f59e0b"],
        tension: 0.4,
      },
    ],
  };
  const options = {};

  // filter config

  const sessionsArray = [
    "حلقة الشيخ جمال طيبي",
    "حلقة الشيخ رمضان بحري",
    "حلقة الشيخ عبدالحميد",
    "حلقة الشيخ حمزة مهرهرة",
    "حلقة الشيخ علي زقاي",
    "حلقة الشيخ أحمد لملوم",
    "حلقة الشيخ زكريا العنابي",
  ];

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

  return (
    <div
      className="statistics-progression py-3 px-2 bg-light rounded-2"
      dir="rtl"
    >
      <StudentsFilter filterInputs={filterInputs} />
      <Line data={data} options={options}></Line>
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

export default StatisticsProgression;
