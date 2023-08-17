import React, { useState } from "react";
import { StudentsFilter, UserSetAttendance } from "../../components";

const EmployeesAttendance = () => {
  const [date, setDate] = useState(["17-04-2022"]);

  const employeesData = [
    {
      name: "جمال طيبي",
    },
    {
      name: "محمد عبدالعزيز",
    },
    {
      name: "مصطفي عبدالله",
    },
  ];

  const headers = ["الموظف", "حضور", "غياب", "تأخر", "عذر", "عدد الساعات"];

  const optionsArray = ["2022", "2023"];

  const filterInputs = [
    {
      cols: 4,
      type: "text",
      formLabel: "التاريخ",
      formPlaceholder: "ادخل العام",
      optionsArray: optionsArray,
      names: date,
      setNames: setDate,
    },
  ];

  return (
    <div
      className="employees-attendance bg-light py-2 px-3 rounded-2"
      dir="rtl"
    >
      <StudentsFilter filterInputs={filterInputs} />
      <UserSetAttendance headers={headers} usersData={employeesData} />
    </div>
  );
};

export default EmployeesAttendance;
