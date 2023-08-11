import { Dropdown } from "react-bootstrap";
import "../styles/Students.css";
import { useState } from "react";

import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../components";

const Students = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const studentsData = [
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

  // const formControl = useRef(null);
  const headers = [
    "الاسم",
    "الكنية",
    "الجنس",
    "الحلقات",
    "اسم المستخدم",
    "تاريخ الميلاد",
    "مكان الميلاد",
    "الجنسية",
    "نوع الهوية",
  ];

  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  return (
    <div className="students py-4 px-2 rounded bg-light" dir="rtl">
      <StudentsFilter
        term={searchTerm}
        isDropdownOpen={isDropdownOpen}
        options={sessionsOptions}
        names={sessionNames}
        setIsDropdownOpen={setIsDropdownOpen}
        setNames={setSessionNames}
        formLabel="فلترة الطلاب بإسم الحلقة"
        formPlaceholder="الحلقات"
      />

      <StudentsActions show={show} />
      <StudentsSearchByName
        name="بحث بإسم الطالب"
        placeholder="أدخل اسم الطالب"
      />
      <StudentsTable studentsData={studentsData} headers={headers} />
    </div>
  );
};

export default Students;
