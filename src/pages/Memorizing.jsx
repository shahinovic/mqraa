import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../components";
import "../styles/Memorizing.css";
const Memorizing = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const sessionsData = [
    {
      name: "طالب 1",
      achievement: "",
      attendance: "",
    },
    {
      name: "طالب 2",
      achievement: "",
      attendance: "",
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
  const headers = ["الطالب", "الإنجاز", "المواظبة"];

  // secondInput

  const secondInputOptions = [
    "09-05-2022",
    "10-05-2022",
    "11-05-2022",
    "12-05-2022",
    "13-05-2022",
  ];
  const [secondInputCurentValue, setSecondInputCurrentValue] =
    useState("09-05-2022");
  const [secondInputDropdownOpen, setSecondInputDropdownOpen] = useState(false);
  const reenderSecondInputOptions = () => {
    return secondInputOptions.map((session, index) => (
      <Dropdown.Item
        onClick={() => {
          setSecondInputCurrentValue(session);
          // setSearchTerm("");
        }}
        key={session + index}
      >
        {session}
      </Dropdown.Item>
    ));
  };

  const secondInput = {
    show: true,
    type: "text",
    label: "التاريخ",
    value: secondInputCurentValue,
    setValue: setSecondInputCurrentValue,
    isOpen: secondInputDropdownOpen,
    close: () => setSecondInputDropdownOpen(false),
    open: () => setSecondInputDropdownOpen(true),
    onFocus: () => setSecondInputDropdownOpen(true),
    onBlur: () => {
      setTimeout(() => {
        setSecondInputDropdownOpen(false);
      }, 100);
    },
    onChange: (e) => {
      setSecondInputCurrentValue(e.target.value);
    },
    options: reenderSecondInputOptions(),
  };

  // actions

  const secondColActions = ["المواظبة", "الإنجاز الجماعي"];

  const show = {
    state: "second",
    // first: firstColActions,
    second: secondColActions,
  };

  return (
    <div className="memorizing bg-light p-0 rounded-2">
      <StudentsFilter
        inputsCount={2}
        term={searchTerm}
        isDropdownOpen={isDropdownOpen}
        options={sessionsOptions}
        names={sessionNames}
        setIsDropdownOpen={setIsDropdownOpen}
        setNames={setSessionNames}
        formLabel="فلترة الحلقات"
        formPlaceholder="الحلقات"
        secondInput={secondInput}
      />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="ابحث" />
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default Memorizing;
