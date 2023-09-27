// import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
  useLocalStorage,
} from "../../components";

import "./Students.css";
import { useDispatch, useSelector } from "react-redux";

import { setFormStatus } from "../../services/reducers/showFormSlice";
import { setSelectedUser } from "../../services/reducers/selectedUserSlice";

const Students = () => {
  const refresh = useSelector((state) => state.refresh);
  const [studentsData, setStudentsData] = useLocalStorage("studentsData", []);
  const [optionsArray, setOptionsArray] = useLocalStorage("optionsArray", []);
  const [sessionNames, setSessionNames] = useLocalStorage("sessionNames", []);
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");
  const [selectedStudent, setSelectedStudent] = useState([]);

  const [selectAll, setSelectAll] = useLocalStorage("selectAll", [false]);
  const dispatch = useDispatch();
  const booleanValue = useSelector((state) => state.refresh);
  const selectedUser = useSelector((state) => state.selectedUser.value);

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
      onClick: () => {
        setSelectedStudent([]);
        dispatch(
          setFormStatus({ show: true, path: "/student", action: "EDIT" })
        );
      },
      disabled:
        !selectAll || selectedUser.length == 0 || selectedUser.length > 1,
    },
    {
      text: "حذف",
      onClick: async () => {
        setSelectedStudent([]);
        dispatch(
          setFormStatus({ show: true, path: "/student", action: "DELETE" })
        );
      },
      disabled: selectedUser.length == 0,
    },
    {
      text: "تحديد الكل",
      onClick: () => {
        setSelectAll([!selectAll[0]]);
        setSelectedStudent(studentsData.map((student) => student.id));
        dispatch(setSelectedUser(studentsData.map((student) => student.id)));
        setTimeout(() => {
          console.log(selectedStudent);
        }, 300);
      },
      disabled: selectAll[0],
    },
    {
      text: "إلغاء",
      onClick: () => {
        setSelectedStudent([]);
        dispatch(setSelectedUser([]));
        setSelectAll([false]);
      },
      disabled: selectedUser.length == 0,
    },
  ];

  // const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "first",
    first: firstColActions,
    // second: secondColActions,
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
