import React, { useState } from "react";
import {
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
  StudentsTable,
} from "../../../components";
import { Button } from "react-bootstrap";

import { MdDoneOutline as Done } from "react-icons/md";
import { AiOutlinePlusCircle as Plus } from "react-icons/ai";

const ExamsList = () => {
  const [examType, setExamType] = useState([]);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);

  const fromDateArray = ["09-05-2022", "10-05-2022"];
  const toDateArray = ["10-05-2022", "11-05-2022"];
  const examTypeArray = ["اختبار 1", "اختبار 2"];

  const filterInputs = [
    {
      cols: 4,
      type: "text",
      formLabel: "نوع الإختبار",
      formPlaceholder: "اختر الإختبار",
      optionsArray: examTypeArray,
      names: examType,
      setNames: setExamType,
    },
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
  ];

  // actions

  const firstColActions = ["إضافة", "حذف"];
  const secondColActions = ["إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  /// table

  const headers = ["الطالب", "تاريخ الإختبار", "النوع", "الحالة", "إجراء"];

  const RenderStatus = ({ status }) => {
    if (status === true) {
      return (
        <Button variant="success" disabled>
          <Done /> تم
        </Button>
      );
    } else {
      return (
        <Button variant="warning">
          <Plus /> إجراء الاخبار
        </Button>
      );
    }
  };

  const examsData = [
    {
      name: "محمد هارون",
      data: "10-05-2022",
      examType: "اختبار 1",
      status: <RenderStatus status={false} />,
    },
  ];

  return (
    <div className="exams-list py-3 px-2 bg-light rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث " />
      <StudentsTable studentsData={examsData} headers={headers} />
    </div>
  );
};

export default ExamsList;
