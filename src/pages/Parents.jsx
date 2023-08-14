import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../components";

const Parents = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const sessionsData = [
    {
      name: "اسم ولي الامر",
      nakickname: "كنية ولي الامر",
      phone: "0123456789",
      email: "wJHJ5@example.com",
      children: {
        0: "طالب 1",
        1: "طالب 2",
      },
      username: "parent98721",
      relation: "الأب",
      date: "",
      address: "",
    },
  ];

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
  const headers = [
    "الاسم",
    "الكنية",
    "رقم الهاتف",
    "البريد الإلكتروني",
    "الأبناء",
    "اسم المستخدم",
    "صلة القرابة",
    "تاريخ الميلاد",
    "العنوان",
  ];

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
      formLabel: "فلترة  بإسم الإبن",
      formPlaceholder: "اسم الإبن",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
  ];

  return (
    <div className="sessions bg-light">
      <StudentsFilter
        filterInputs={filterInputs}
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
      <StudentsSearchByName
        name="بحث بإسم ولي الأمر"
        placeholder="أدخل اسم ولي الأمر"
      />
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default Parents;
