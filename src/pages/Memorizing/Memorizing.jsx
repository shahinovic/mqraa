import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../../components";
import "./Memorizing.css";
const Memorizing = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [sessionNames, setSessionNames] = useState([]);
  const [secondInputCurentValue, setSecondInputCurrentValue] = useState([
    "09-05-2022",
  ]);
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

  const headers = ["الطالب", "الإنجاز", "المواظبة"];
  // actions

  const secondColActions = ["المواظبة", "الإنجاز الجماعي"];

  const show = {
    state: "second",
    // first: firstColActions,
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

  const secondInputOptions = [
    "09-05-2022",
    "10-05-2022",
    "11-05-2022",
    "12-05-2022",
    "13-05-2022",
  ];

  const filterInputs = [
    {
      cols: 6,
      type: "text",
      formLabel: "فلترة  الحلقات",
      formPlaceholder: "الحلقات",
      optionsArray: optionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
    {
      cols: 6,
      type: "text",
      formLabel: " التاريخ",
      formPlaceholder: "",
      optionsArray: secondInputOptions,
      names: secondInputCurentValue,
      setNames: setSecondInputCurrentValue,
    },
  ];

  return (
    <div className="memorizing bg-light p-0 rounded-2">
      <StudentsFilter
        filterInputs={filterInputs}
        // inputsCount={2}
        // term={searchTerm}
        // isDropdownOpen={isDropdownOpen}
        // options={sessionsOptions}
        // names={sessionNames}
        // setIsDropdownOpen={setIsDropdownOpen}
        // setNames={setSessionNames}
        // formLabel="فلترة الحلقات"
        // formPlaceholder="الحلقات"
        // secondInput={secondInput}
      />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="ابحث" />
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default Memorizing;
