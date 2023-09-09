// import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";

import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
  useLocalStorage,
} from "../../components";

import "./Students.css";
// import { db } from "../../config/firebase";
// import {
//   getDocs,
//   collection,
//   addDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
import { useSelector } from "react-redux";
import useDebouncedSearch from "../../components/useDebouncedSearch/useDebouncedSearch";
// import { getStudentsReducer } from "../../services/reducers/studentsSlice";

const Students = () => {
  const [studentsData, setStudentsData] = useLocalStorage("studentsData", []);
  const [optionsArray, setOptionsArray] = useLocalStorage("optionsArray", []);
  const [sessionNames, setSessionNames] = useLocalStorage("sessionNames", []);
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");

  useEffect(() => {
    console.log(
      "🚀 ~ file: Students.jsx:27 ~ Students ~ sessionNames:",
      sessionNames
    );
  }, [sessionNames]);

  const rearrangeStudentProperties = (obj) => {
    const {
      name,
      nickname,
      gender,
      sessions,
      username,
      date,
      birthPlace,
      nationality,
      identityType,
      // id,
    } = obj;
    const orderedObj = {
      name,
      nickname,
      gender,
      sessions,
      username,
      date,
      birthPlace,
      nationality,
      identityType,
      // id,
      // Add more properties here as needed
    };
    return orderedObj;
  };
  const students = useSelector((state) => state.students.value);
  const options = useSelector((state) => state.sessions.value);

  const optionsNames = options.map((option) => option.sessionName);

  const orderedData = students.map((student) =>
    rearrangeStudentProperties(student)
  );
  useEffect(() => {
    setStudentsData(orderedData);
    setOptionsArray(optionsNames);
  }, []);

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

  // const optionsArray = [
  //   "حلقة الشيخ جمال طيبي",
  //   "حلقة الشيخ رمضان بحري",
  //   "حلقة الشيخ عبدالحميد",
  //   "حلقة الشيخ حمزة مهرهرة",
  //   "حلقة الشيخ علي زقاي",
  //   "حلقة الشيخ أحمد لملوم",
  //   "حلقة الشيخ زكريا العنابي",
  // ];

  const filterInputs = [
    {
      cols: 12,
      type: "text",
      formLabel: "فلترة الطلاب بإسم الحلقة",
      formPlaceholder: "الحلقات",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
  ];

  const objectIncludes = (obj, valuesToFind) => {
    for (const value of valuesToFind) {
      let found = false;
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] === value) {
          found = true;
          break;
        }
        if (
          typeof obj[prop] === "object" &&
          objectContainsAllValues(obj[prop], valuesToFind)
        ) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false; // If any value is not found, return false
      }
    }
    return true; // All values are found
  };

  const filteredData = () => {
    if (sessionNames.length > 0) {
      return studentsData?.filter((student) =>
        objectIncludes(student.sessions, sessionNames)
      );
    }

    if (searchTerm.length > 0) {
      return studentsData?.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.nickname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return studentsData;
  };

  return (
    <div className="students py-4 px-2 rounded bg-light" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsSearchByName
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        name="بحث بإسم الطالب"
        placeholder="أدخل اسم الطالب"
      />
      <StudentsTable studentsData={filteredData()} headers={headers} />
    </div>
  );
};

export default Students;
