import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
  useLocalStorage,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../services/reducers/selectedUserSlice";
import { setFormStatus } from "../../services/reducers/showFormSlice";

const Parents = () => {
  const refresh = useSelector((state) => state.refresh);
  const [parentsData, setParentsData] = useLocalStorage("parentsData", []);
  const [optionsArray, setOptionsArray] = useLocalStorage("optionsArray", []);
  const [sessionNames, setSessionNames] = useState([]);
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");
  const [selectedParent, setSelectedParent] = useState([]);

  const [selectAll, setSelectAll] = useLocalStorage("selectAll", [false]);
  const dispatch = useDispatch();
  const booleanValue = useSelector((state) => state.refresh);
  const selectedUser = useSelector((state) => state.selectedUser.value);

  const rearrangeStudentProperties = (obj) => {
    const {
      name,
      kinaya,
      dateOfBirth,
      relation,
      phoneNumber,
      email,
      job,
      address,
      username,
      password,
      confirmPassword,
      children,
      studentAvatar,
      imageID,
      id,
    } = obj;

    const orderedObj = {
      name,
      kinaya,
      phoneNumber,
      email,
      children,
      username,
      relation,
      dateOfBirth,
      address,
      job,
      password,
      confirmPassword,
      studentAvatar,
      imageID,
      id,
      // Add more properties here as needed
    };
    return orderedObj;
  };

  const parents = useSelector((state) => state.parents.value);

  const options = useSelector((state) => state.students.value);
  console.log("🚀 ~ file: Parents.jsx:76 ~ Parents ~ options:", options);

  const optionsNames = options.map(
    (option) => option.name + " " + option.kinaya
  );

  const orderedData = parents.map((parent) =>
    rearrangeStudentProperties(parent)
  );
  useEffect(() => {
    setParentsData(orderedData);

    setOptionsArray(optionsNames);
  }, [booleanValue]);

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

  const firstColActions = [
    {
      text: "اضافة",
      onClick: () =>
        dispatch(setFormStatus({ show: true, path: "/parent", action: "ADD" })),
      disabled: false,
    },
    {
      text: "تعديل",
      onClick: () => {
        setSelectedParent([]);
        dispatch(
          setFormStatus({ show: true, path: "/parent", action: "EDIT" })
        );
      },
      disabled:
        !selectAll || selectedUser.length == 0 || selectedUser.length > 1,
    },
    {
      text: "حذف",
      onClick: async () => {
        setSelectedParent([]);
        dispatch(
          setFormStatus({ show: true, path: "/parent", action: "DELETE" })
        );
      },
      disabled: selectedUser.length == 0,
    },
    {
      text: "تحديد الكل",
      onClick: () => {
        setSelectAll([!selectAll[0]]);
        setSelectedParent(parentsData.map((parent) => parent.id));
        dispatch(setSelectedUser(parentsData.map((parent) => parent.id)));
        setTimeout(() => {
          console.log(selectedParent);
        }, 300);
      },
      disabled: selectAll[0],
    },
    {
      text: "إلغاء",
      onClick: () => {
        setSelectedParent([]);
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
      formLabel: "فلترة  بإسم الإبن",
      formPlaceholder: "اسم الإبن",
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
        objectIncludes(student.children, sessionNames)
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
    <div className="sessions bg-light">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsSearchByName
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        name="بحث بإسم الولي"
        placeholder="أدخل اسم الطالب"
      />
      {!refresh && (
        <StudentsTable
          selectedStudent={selectedParent}
          setSelectedStudent={setSelectedParent}
          studentsData={filteredData(parentsData)}
          // studentsData={parentsData}
          headers={headers}
          selectAll={selectAll}
        />
      )}
    </div>
  );
};

export default Parents;
