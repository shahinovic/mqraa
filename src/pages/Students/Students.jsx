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
import { useDispatch, useSelector } from "react-redux";

import { setFormStatus } from "../../services/reducers/showFormSlice";
// import { getStudentsReducer } from "../../services/reducers/studentsSlice";

const Students = () => {
  const refresh = useSelector((state) => state.refresh);
  const [studentsData, setStudentsData] = useLocalStorage("studentsData", []);
  const [optionsArray, setOptionsArray] = useLocalStorage("optionsArray", []);
  const [sessionNames, setSessionNames] = useLocalStorage("sessionNames", []);
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");
  const [selectedStudent, setSelectedStudent] = useLocalStorage(
    "selectedStudent",
    []
  );
  const [selectAll, setSelectAll] = useLocalStorage("selectAll", [false]);
  const dispatch = useDispatch();
  const booleanValue = useSelector((state) => state.refresh);

  const rearrangeStudentProperties = (obj) => {
    const {
      name,
      kinaya,
      foreignName,
      foreignKinaya,
      gender,
      dateOfBirth,
      placeOfBirth,
      nationality,
      address,
      username,
      password,
      confirmPassword,
      hasDisease,
      diseaseReason,
      phoneNumber,
      email,
      fatherStatus,
      motherStatus,
      bankCode,
      accountNumber,
      parentName,
      parentKinaya,
      parentPhoneNumber,
      parentEmail,
      relativeRelation,
      session,
      id,
    } = obj;
    const identityType = "";
    const orderedObj = {
      name,
      nickname: kinaya,
      gender,
      sessions: session,
      username,
      date: dateOfBirth,
      birthPlace: placeOfBirth,
      nationality,
      identityType,
      id,
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
  }, [booleanValue]);

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

  const firstColActions = [
    {
      text: "اضافة",
      onClick: () =>
        dispatch(
          setFormStatus({ show: true, path: "/student", action: "ADD" })
        ),
      disabled: false,
    },
    {
      text: "تعديل",
      onClick: () =>
        dispatch(
          setFormStatus({ show: true, path: "/student", action: "EDIT" })
        ),
      disabled: false,
    },
    {
      text: "حذف",
      disabled: true,
    },
    {
      text: "تحديد الكل",
      disabled: true,
    },
    {
      text: "إلغاء",
      disabled: true,
    },
  ];

  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

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

  const filteredData = (data) => {
    if (sessionNames.length > 0) {
      return data?.filter((student) =>
        objectIncludes(student.sessions, sessionNames)
      );
    }

    if (searchTerm.length > 0) {
      return data?.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student?.nickname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student?.kinaya?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return data;
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
      {!refresh && (
        <StudentsTable
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
          studentsData={filteredData(studentsData)}
          headers={headers}
          selectAll={selectAll}
        />
      )}
    </div>
  );
};

export default Students;
