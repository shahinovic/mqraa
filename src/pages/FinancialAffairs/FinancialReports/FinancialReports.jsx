import React from "react";
import { StudentsFilter } from "../../../components";

const FinancialReports = () => {
  const filterInputs = [
    {
      cols: 4,
      type: "text",
      formLabel: "من",
      formPlaceholder: "اختر بداية التقرير",
      optionsArray: fromDateArray,
      names: from,
      setNames: setFrom,
    },
    {
      cols: 4,
      type: "text",
      formLabel: "إلي",
      formPlaceholder: "اختر نهاية التقرير",
      optionsArray: toDateArray,
      names: to,
      setNames: setTo,
    },
    {
      cols: 4,
      type: "text",
      formLabel: "المستلم",
      formPlaceholder: "اختر المستلم",
      optionsArray: studentsArray,
      names: studentName,
      setNames: setStudentName,
    },
  ];
  return (
    <div className="financial-reports py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
    </div>
  );
};

export default FinancialReports;
