import { Dropdown, Form } from "react-bootstrap";
import { useState } from "react";

import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../../components";
import { AttendanceRenderLinks } from "../../containers";

const StudentsAttendance = () => {
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const studentsData = [
    {
      name: "خالد مصطفي",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      category: "students",
      id: "1",
    },
    {
      name: "ابراهيم محمد",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      category: "students",
      id: "2",
    },
    {
      name: "يوسف محمد",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      category: "students",
      id: "3",
    },
  ];

  const attendanceData = [
    {
      date: "2022-01-01",
      attend: {
        0: "جمال طيبي",
        1: "محمد عبدالعزيز",
        3: "مصطفي عبدالله",
      },
    },
    {
      date: "2022-01-01",
      attend: {
        0: "جمال طيبي",
        1: "محمد عبدالعزيز",
        3: "مصطفي عبدالله",
      },
    },
  ];

  // const formControl = useRef(null);
  const headers = ["التاريخ", "الحضور"];

  // actions

  const firstColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];
  //   const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "first",
    first: firstColActions,
    // second: secondColActions,
  };

  const filterInputs = [
    {
      cols: 4,
      type: "text",
      formLabel: "العام",
      formPlaceholder: "ادخل العام",
      optionsArray: ["2022", "2023"],
      names: years,
      setNames: setYears,
    },
    {
      cols: 4,
      type: "text",
      formLabel: "الشهر",
      formPlaceholder: "ادخل الشهر",
      optionsArray: ["2022", "2023"],
      names: months,
      setNames: setMonths,
    },
    {
      cols: 4,
      type: "text",
      formLabel: "اليوم",
      formPlaceholder: "ادخل اليوم",
      optionsArray: ["2022", "2023"],
      names: days,
      setNames: setDays,
    },
  ];

  // search option

  const [searchOption, setSearchOption] = useState("searchByStudent");

  const handleRadioChange = (event) => {
    setSearchOption(event.target.id);
  };

  return (
    <div className="teachers-attendance py-4 px-2 rounded bg-light" dir="rtl">
      <Form className="mb-3">
        <div className="d-flex align-items-center justify-content-around">
          <Form.Check
            type="radio"
            id="searchByStudent"
            label="بحث باسم الطالب"
            checked={searchOption === "searchByStudent"}
            onChange={handleRadioChange}
          />

          <Form.Check
            type="radio"
            id="searchByDate"
            label="بحث بالتاريخ"
            checked={searchOption === "searchByDate"}
            onChange={handleRadioChange}
          />
        </div>
      </Form>
      {searchOption === "searchByStudent" && (
        <StudentsSearchByName
          name="بحث بإسم الطالب"
          placeholder="أدخل اسم الطالب"
        />
      )}

      {searchOption === "searchByDate" && (
        <StudentsFilter filterInputs={filterInputs} />
      )}

      <StudentsActions show={show} />
      {searchOption === "searchByStudent" && (
        <AttendanceRenderLinks usersData={studentsData} />
      )}
      {searchOption === "searchByDate" && (
        <StudentsTable studentsData={attendanceData} headers={headers} />
      )}
    </div>
  );
};

export default StudentsAttendance;
