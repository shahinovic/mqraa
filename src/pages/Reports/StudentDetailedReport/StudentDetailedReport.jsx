import React, { useState } from "react";
import {
  StudentDetailedReportTable,
  StudentsActions,
  StudentsFilter,
  StudentsSearchByName,
} from "../../../components";

const StudentDetailedReport = () => {
  // filterInputs
  const [sessionNames, setSessionNames] = useState([]);
  const [studentName, setStudentName] = useState([]);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const sessionsOptionsArray = [
    "حلقة الشيخ جمال طيبي",
    "حلقة الشيخ رمضان بحري",
    "حلقة الشيخ عبدالحميد",
    "حلقة الشيخ حمزة مهرهرة",
    "حلقة الشيخ علي زقاي",
    "حلقة الشيخ أحمد لملوم",
    "حلقة الشيخ زكريا العنابي",
  ];
  const sessionsArray = [
    {
      name: "حلقة الشيخ جمال طيبي",
      id: 1,
      studentsUsernameArray: ["student98721"],
    },
    {
      name: "حلقة الشيخ رمضان بحري",
      id: 2,
      studentsArray: ["student98721"],
    },
    {
      name: "حلقة الشيخ عبدالحميد",
      id: 3,
      studentsUsernameArray: ["student1114317"],
    },
    {
      name: "حلقة الشيخ حمزة مهرهرة",
      id: 4,
      studentsUsernameArray: ["student1014915", "student1027281"],
    },
    {
      name: "حلقة الشيخ علي زقاي",
      id: 5,
      studentsUsernameArray: ["student1018348", "student978950"],
    },
    {
      name: "حلقة الشيخ أحمد لملوم",
      id: 6,
      studentsUsernameArray: ["student1028674"],
    },
    {
      name: "حلقة الشيخ زكريا العنابي",
      id: 7,
      studentsUsernameArray: [],
    },
  ];

  const sessionsReportsArray = [
    {
      id: 2,
      day: "09-05-2022",
      sessionType: "reviewing",
      studentsAchievements: [
        {
          name: "عاصم بحري",
          username: "student1999",
          id: "",
          from: {
            surah: "الجن",
            ayah: "1",
          },
          to: {
            surah: "الطارق",
            ayah: "17",
          },
          degree: 17.0,
          note: "عرض جيد للمقرر",
          pages: 17.47,
        },
      ],
    },
    {
      id: 2,
      day: "09-05-2022",
      sessionType: "memorizing",
      studentsAchievements: [
        {
          name: "عاصم بحري",
          username: "student1999",
          id: "",
          from: {
            surah: "البقرة",
            ayah: "1",
          },
          to: {
            surah: "البقرة",
            ayah: "20",
          },
          degree: 10.0,
          note: "حسن",
          pages: 1.75,
        },
      ],
    },
    {
      id: 2,
      day: "09-05-2022",
      sessionType: "confirming",
      studentsAchievements: [
        {
          name: "عاصم بحري",
          username: "student1999",
          id: "",
          from: {
            surah: "الجمعة",
            ayah: "1",
          },
          to: {
            surah: "المرسلات",
            ayah: "50",
          },
          degree: 17.0,
          note: "عرض جيد للمقرر",
          pages: 26.87,
        },
      ],
    },
  ];

  const studentsArray = ["عاصم بحري", "طالب 2"];
  const fromDateArray = ["09-05-2022", "10-05-2022"];
  const toDateArray = ["10-05-2022", "11-05-2022"];

  const filterInputs = [
    {
      cols: 3,
      type: "text",
      formLabel: "الحلقة",
      formPlaceholder: "اختر الحلقة",
      optionsArray: sessionsOptionsArray,
      names: sessionNames,
      setNames: setSessionNames,
    },
    {
      cols: 3,
      type: "text",
      formLabel: "الطالب",
      formPlaceholder: "اختر الطالب",
      optionsArray: studentsArray,
      names: studentName,
      setNames: setStudentName,
    },
    {
      cols: 3,
      type: "text",
      formLabel: "من",
      formPlaceholder: "اختر بداية التقرير",
      optionsArray: fromDateArray,
      names: from,
      setNames: setFrom,
    },
    {
      cols: 3,
      type: "text",
      formLabel: "إلي",
      formPlaceholder: "اختر نهاية التقرير",
      optionsArray: toDateArray,
      names: to,
      setNames: setTo,
    },
  ];

  // table data

  const TableData = [
    {
      name: "أسامة",
      nickname: "العنابي",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ جمال طيبي",
        2: "حلقة الشيخ رمضان بحري",
      },
      username: "student98721",
      date: "21-04-2011",
      birthPlace: "عين الحجل",
      nationality: "",
      identityType: "",
      attend: "7",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "امجد",
      nickname: "خليف",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ عبدالحميد",
      },
      username: "student1114317",
      date: "21-04-2011",
      birthPlace: "الجلفة",
      nationality: "",
      identityType: "",
      attend: "5",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "ايوب",
      nickname: "حمدون",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ حمزة مهرهرة",
      },
      username: "student1014915",
      date: "21-04-2011",
      birthPlace: "البوريرة",
      nationality: "",
      identityType: "",
      attend: "7",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "ايوب",
      nickname: "سعيدون",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ علي زقاي",
      },
      username: "student1018348",
      date: "21-04-2011",
      birthPlace: "عنابة",
      nationality: "",
      identityType: "",
      attend: "5",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "ابرهيم",
      nickname: "بن بتقة",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ علي زقاي",
        2: "حلقة الشيخ أحمد لملوم",
      },
      username: "student978950",
      date: "21-04-2011",
      birthPlace: "بوسعادة",
      nationality: "",
      identityType: "",
      attend: "5",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "إسحاق",
      nickname: "رحموني",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ زكريا العنابي",
      },
      username: "student1028674",
      date: "21-04-2011",
      birthPlace: "تقرت",
      nationality: "",
      identityType: "",
      attend: "6",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "إسماعيل",
      nickname: "فاسي",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ حمزة مهرهرة",
      },
      username: "student1027281",
      date: "21-04-2011",
      birthPlace: "الحمامات",
      nationality: "",
      identityType: "",
      attend: "6",
      late: "0",
      absence: "1",
      excuse: "0",
    },
    {
      name: "عاصم بحري",
      nickname: "البحيري",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ رمضان بحري",
      },
      username: "student1999",
      date: "21-04-2011",
      birthPlace: "",
      nationality: "",
      identityType: "",
      attend: "8",
      late: "0",
      absence: "1",
      excuse: "0",
    },
  ];

  const headers = [
    "اليوم",
    "نوع الإنجاز",
    "من",
    "إلي",
    "الدرجة",
    "الملاحظة",
    "عدد الصفحات",
  ];

  const getDatesInRange = (startDateStr, endDateStr) => {
    const startDateParts = startDateStr.split("-");
    const endDateParts = endDateStr.split("-");

    const startDate = new Date(
      `${startDateParts[2]}-${startDateParts[1]}-${startDateParts[0]}`
    );
    const endDate = new Date(
      `${endDateParts[2]}-${endDateParts[1]}-${endDateParts[0]}`
    );

    const datesInRange = [];

    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const year = currentDate.getFullYear();
      datesInRange.push(`${day}-${month}-${year}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesInRange;
  };

  const renderReports = (sessionsReportsArray, studentName, from, to) => {
    const days = getDatesInRange(from, to);

    const daysToRender = days.map((day) => {
      const filteredSessionsReports = sessionsReportsArray.filter(
        (session) => session.day === day
      );

      return filteredSessionsReports;
    });

    const allResults = daysToRender.map((ele) =>
      ele.filter((day) => {
        return day.studentsAchievements.find((student) => {
          return student.name === studentName;
        });
      })
    );

    let res = [];
    allResults.map((innerArray) => {
      res.push(...innerArray);
    });

    // return flattenedArray;
    return res;
  };

  const data = renderReports(
    sessionsReportsArray,
    "عاصم بحري",
    "09-05-2022",
    "10-05-2022"
  );

  // actions

  const firstColActions = ["طباعة التقرير"];
  const secondColActions = ["إظهار 10 أسطر", "Excel"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };
  return (
    <div className="student-detailed-report bg-light p-0 rounded-2" dir="rtl">
      <StudentsFilter filterInputs={filterInputs} />
      <StudentsActions show={show} />

      <StudentDetailedReportTable
        data={data}
        headers={headers}
        studentName={studentName[0]}
      />
    </div>
  );
};

export default StudentDetailedReport;
