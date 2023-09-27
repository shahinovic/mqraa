import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
  useLocalStorage,
} from "../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormStatus } from "../../services/reducers/showFormSlice";
import { setSelectedUser } from "../../services/reducers/selectedUserSlice";
const Teachers = () => {
  const refresh = useSelector((state) => state.refresh);
  const [teachersData, setTeachersData] = useLocalStorage("teachersData", []);
  const [optionsArray, setOptionsArray] = useLocalStorage(
    "teachersOptionsArray",
    []
  );
  const [sessionNames, setSessionNames] = useLocalStorage(
    "teachersSessionNames",
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState([]);

  const [selectAll, setSelectAll] = useState([false]);
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
  const teachers = useSelector((state) => state.teachers.value);

  const options = useSelector((state) => state.sessions.value);

  const optionsNames = options.map((option) => option.sessionName);

  const orderedData = teachers.map((teacher) =>
    rearrangeStudentProperties(teacher)
  );
  useEffect(() => {
    setTeachersData(orderedData);

    setOptionsArray(optionsNames);
  }, [booleanValue]);

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

  const headers = ["الطالب", "الحضور"];

  // ******  actions

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
        setSelectedTeacher([]);
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
        setSelectedTeacher([]);
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
        setSelectedTeacher(teachersData.map((teacher) => teacher.id));
        dispatch(setSelectedUser(teachersData.map((teacher) => teacher.id)));
        setTimeout(() => {
          console.log(selectedTeacher);
        }, 300);
      },
      disabled: selectAll[0],
    },
    {
      text: "إلغاء",
      onClick: () => {
        setSelectedTeacher([]);
        dispatch(setSelectedUser([]));
        setSelectAll([false]);
      },
      disabled: selectedUser.length == 0,
    },
  ];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // filter configuration

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
      formLabel: "فلترة  الحلقات",
      formPlaceholder: "الحلقات",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
  ];

  // table

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
    <div className="teachers bg-light p-0 rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="ابحث" />
      {!refresh && (
        <StudentsTable
          selectedStudent={selectedTeacher}
          setSelectedStudent={setSelectedTeacher}
          studentsData={filteredData(teachersData)}
          headers={headers}
          selectAll={selectAll}
        />
      )}
    </div>
  );
};

export default Teachers;
