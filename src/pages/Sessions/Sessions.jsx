import { useEffect, useState } from "react";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
  useLocalStorage,
} from "../../components";
import "./Sessions.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../services/reducers/selectedUserSlice";
import { setFormStatus } from "../../services/reducers/showFormSlice";

const Sessions = () => {
  const refresh = useSelector((state) => state.refresh);
  const [sessionsData, setSessionsData] = useLocalStorage("sessionsData", []);
  const [optionsArray, setOptionsArray] = useLocalStorage("optionsArray", []);
  const [genderArray, setGenderArray] = useLocalStorage("genderArray", []);
  const [sessionNames, setSessionNames] = useState([]);
  const [secondInputCurrentValue, setSecondInputCurrentValue] = useState([]);
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");
  const [selectedSession, setSelectedSession] = useState([]);

  const [selectAll, setSelectAll] = useLocalStorage("selectAll", [true]);
  const dispatch = useDispatch();
  const booleanValue = useSelector((state) => state.refresh);
  const selectedUser = useSelector((state) => state.selectedUser.value);

  const rearrangeStudentProperties = (obj) => {
    const {
      name,
      foreignName,
      sessionType,
      gender,
      teachersList,
      show,
      dates,

      id,
    } = obj;
    const identityType = "";
    const orderedObj = {
      name,
      // foreignName,
      sessionType,
      gender,
      teachersList,
      // show,
      // dates,
      studentsNumber: "لا يوجد طلاب ",
      id,
      // Add more properties here as needed
    };
    return orderedObj;
  };
  const sessions = useSelector((state) => state.sessions.value);
  console.log("🚀 ~ file: Sessions.jsx:57 ~ Sessions ~ sessions:", sessions);

  const options = useSelector((state) => state.sessions.value);

  // ! optionsNames must be sesstions types

  const optionsNames = options.map((option) => option.sessionName);

  const genderNames = ["ذكور", "إناث"];

  const orderedData = sessions.map((student) =>
    rearrangeStudentProperties(student)
  );
  useEffect(() => {
    setSessionsData(orderedData);

    // setOptionsArray(optionsNames);

    setGenderArray(genderNames);
    setOptionsArray(["حفظ", "مراجعة", "تثبيت"]);
  }, [booleanValue]);

  const headers = [
    "اسم الحلقة",
    "نوع الحلقة",
    "الفئة",
    "قائمة المعلمين",
    "عدد الطلاب",
  ];

  // actions

  const firstColActions = [
    {
      text: "اضافة",
      onClick: () =>
        dispatch(
          setFormStatus({ show: true, path: "/session", action: "ADD" })
        ),
      disabled: false,
    },
    {
      text: "تعديل",
      onClick: () => {
        setSelectedSession([]);
        dispatch(
          setFormStatus({ show: true, path: "/session", action: "EDIT" })
        );
      },
      disabled:
        !selectAll || selectedUser.length == 0 || selectedUser.length > 1,
    },
    {
      text: "حذف",
      onClick: async () => {
        setSelectedSession([]);
        dispatch(
          setFormStatus({ show: true, path: "/session", action: "DELETE" })
        );
      },
      disabled: selectedUser.length == 0,
    },
    {
      text: "تحديد الكل",
      onClick: () => {
        setSelectAll([!selectAll[0]]);
        setSelectedSession(sessionsData.map((session) => session.id));

        console.log(
          "🚀 ~ file: Sessions.jsx:123 ~ Sessions ~ sessionsData:",
          sessionsData.map((student) => student.id)
        );
        dispatch(setSelectedUser(sessionsData.map((student) => student.id)));
        setTimeout(() => {
          console.log(
            "🚀 ~ file: Sessions.jsx:125 ~ setTimeout ~ selectedSession:",
            selectedSession
          );
        }, 300);
      },
      disabled: selectAll[0],
    },
    {
      text: "إلغاء",
      onClick: () => {
        setSelectedSession([]);
        dispatch(setSelectedUser([]));
        setSelectAll([false]);
      },
      // disabled: selectedUser.length == 0,
    },
  ];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // filter configuration

  const filterInputs = [
    {
      cols: 6,
      type: "text",
      formLabel: "نوع الحلقة",
      formPlaceholder: "جميع انواع الحلقات",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
    {
      cols: 6,
      type: "text",
      formLabel: "الجنس",
      formPlaceholder: "جميع الطلاب",
      optionsArray: genderArray,
      names: secondInputCurrentValue,
      setNames: setSecondInputCurrentValue,
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
      return data?.filter((session) =>
        // objectIncludes(student.sessionType, sessionNames)
        session.sessionType.includes(sessionNames[0])
      );
    }
    if (secondInputCurrentValue.length > 0) {
      return data?.filter((session) =>
        session.gender.includes(secondInputCurrentValue[0])
      );
    }

    if (searchTerm.length > 0) {
      return data?.filter(
        (student) =>
          student?.name?.toLowerCase()?.includes(searchTerm.toLowerCase())
        // student?.nickname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // student?.kinaya?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return data;
  };
  return (
    <div className="sessions bg-light">
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
          selectedStudent={selectedSession}
          setSelectedStudent={setSelectedSession}
          studentsData={filteredData(sessionsData)}
          headers={headers}
          selectAll={selectAll}
        />
      )}
    </div>
  );
};

export default Sessions;
