import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../components";
import { Link } from "react-router-dom";
const Teachers = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const sessionsData = [
    {
      name: "اسم المعلم",
      attendance: (
        <Link to="/attendance/teachers/1">
          <button className="btn btn-primary">الحضور</button>
        </Link>
      ),
    },
  ];

  // const allSessions = [
  //   "حلقة الشيخ جمال طيبي",
  //   "حلقة الشيخ رمضان بحري",
  //   "حلقة الشيخ عبدالحميد",
  //   "حلقة الشيخ حمزة مهرهرة",
  //   "حلقة الشيخ علي زقاي",
  //   "حلقة الشيخ أحمد لملوم",
  //   "حلقة الشيخ زكريا العنابي",
  // ];

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  //   // setIsDropdownOpen(!isDropdownOpen);
  // };

  // const sessions = () => {
  //   if (searchTerm === "") {
  //     return allSessions;
  //   } else {
  //     return allSessions.filter((session) => session.includes(searchTerm));
  //   }
  // };

  // const sessionsOptions = () => {
  //   return sessions().map((session) => (
  //     <Dropdown.Item
  //       onClick={() => {
  //         setSessionNames([...sessionNames, session]);
  //         setSearchTerm("");
  //       }}
  //       key={session}
  //     >
  //       {session}
  //     </Dropdown.Item>
  //   ));
  // };

  // const handleSelectClick = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  const headers = ["الطالب", "الحضور"];

  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
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

  const filterInputs = [
    {
      cols: 12,
      type: "text",
      formLabel: "فلترة  الحلقات",
      formPlaceholder: "الحلقات",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
  ];

  return (
    <div className="teachers bg-light p-0 rounded-2" dir="rtl">
      <StudentsFilter
        filterInputs={filterInputs}
        // inputsCount={2}
        // term={searchTerm}
        // isDropdownOpen={isDropdownOpen}
        // options={sessionsOptions}
        // names={sessionNames}
        // setIsDropdownOpen={setIsDropdownOpen}
        // setNames={setSessionNames}
        // formLabel="فلترة الحلقات"
        // formPlaceholder="الحلقات"
      />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="ابحث" />
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default Teachers;
