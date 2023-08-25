import { useState } from "react";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";

const ReportsAchievement = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const [secondInputCurentValue, setSecondInputCurrentValue] = useState([
    "09-05-2022",
  ]);
  const sessionsData = [
    {
      name: "طالب 1",
      achievement: "",
      attendance: "",
    },
    {
      name: "طالب 2",
      achievement: "",
      attendance: "",
    },
  ];

  const headers = [
    "الطالب",
    "نوع الإنجاز",
    "من",
    "الي",
    "الدرجة",
    "عدد الصفحات",
  ];
  // actions
  const firstColActions = ["طباعة التقرير"];
  const secondColActions = ["المواظبة", "الإنجاز الجماعي"];

  const show = {
    state: "both  ",
    first: firstColActions,
    second: secondColActions,
  };

  // filter configuration

  const optionsArray = [
    "حلقة الشيخ جمال طيبي",
    "حلقة الشيخ رمضان بحري",
    "حلقة الشيخ عبدالحميد",
    "حلقة الشيخ حمزة مهرهرة",
    "حلقة الشيخ علي زقاي",
    "حلقة الشيخ أحمد لملوم",
    "حلقة الشيخ زكريا العنابي",
  ];

  const secondInputOptions = [
    "09-05-2022",
    "10-05-2022",
    "11-05-2022",
    "12-05-2022",
    "13-05-2022",
  ];

  const filterInputs = [
    {
      cols: 6,
      type: "text",
      formLabel: "فلترة  الحلقات",
      formPlaceholder: "الحلقات",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
    {
      cols: 6,
      type: "text",
      formLabel: " التاريخ",
      formPlaceholder: "",
      optionsArray: secondInputOptions,
      names: secondInputCurentValue,
      setNames: setSecondInputCurrentValue,
    },
  ];

  return (
    <div className="memorizing bg-light p-0 rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="ابحث" />
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default ReportsAchievement;

// ReportsAchievement
