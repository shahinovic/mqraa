import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../components";
import "../styles/Sessions.css";

const Sessions = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const sessionsData = [
    {
      name: "حلقة الشيخ علي زقائ 2",
      type: "حلقة حفظ ومراجعة",
      gender: "ذكر",
      list: "حلقة الشيخ جمال طيبي",
      number: "6",
    },
  ];
  const allSessions = [
    "حلقة الشيخ جمال طيبي",
    "حلقة الشيخ رمضان بحري",
    "حلقة الشيخ عبدالحميد",
    "حلقة الشيخ حمزة مهرهرة",
    "حلقة الشيخ علي زقاي",
    "حلقة الشيخ أحمد لملوم",
    "حلقة الشيخ زكريا العنابي",
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // setIsDropdownOpen(!isDropdownOpen);
  };

  const sessions = () => {
    if (searchTerm === "") {
      return allSessions;
    } else {
      return allSessions.filter((session) => session.includes(searchTerm));
    }
  };

  const sessionsOptions = () => {
    return sessions().map((session) => (
      <Dropdown.Item
        onClick={() => {
          setSessionNames([...sessionNames, session]);
          setSearchTerm("");
        }}
        key={session}
      >
        {session}
      </Dropdown.Item>
    ));
  };

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const headers = [
    "اسم الحلقة",
    "نوع الحلقة",
    "الفئة",
    "قائمة المعلمين",
    "عدد الطلاب",
  ];

  return (
    <div className="sessions bg-light">
      <StudentsFilter
        term={searchTerm}
        isDropdownOpen={isDropdownOpen}
        options={sessionsOptions}
        names={sessionNames}
        setIsDropdownOpen={setIsDropdownOpen}
        setNames={setSessionNames}
        formLabel="فلترة الحلقات"
        formPlaceholder="الحلقات"
      />
      <StudentsActions />
      <StudentsSearchByName
        name="بحث بإسم الحلقة"
        placeholder="أدخل اسم الحلقة"
      />
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default Sessions;