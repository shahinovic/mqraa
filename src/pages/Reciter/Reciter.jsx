import { Button } from "react-bootstrap";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../components";

import { AiTwotoneVideoCamera as Video } from "react-icons/ai";

const Reciter = () => {
  // time
  const currentDate = new Date();
  const UAEOffset = 4 * 60; // minutes
  const userOffset = currentDate.getTimezoneOffset(); // minutes
  const timeDifferenceInMinutes = UAEOffset + userOffset;
  const UAECurrentTime = new Date(
    currentDate.getTime() + timeDifferenceInMinutes * 60000
  ); // minutes to milliseconds

  // time in hours and minutes

  // Extract hours and minutes from UAECurrentTime
  const hours = UAECurrentTime.getHours();
  const minutes = UAECurrentTime.getMinutes();

  // Format the output as HH:MM
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  console.log(formattedTime); // Output in the format HH:MM

  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };

  // table

  const OpenComponent = ({ open }) => {
    return (
      <Button variant={open ? "success" : "warning"}>
        <Video /> {open ? "مفتوحة" : "مغلقة"}
      </Button>
    );
  };

  const headers = ["الحلقة", "الأيام", "التوقيت", "الحالة", "دخول"];

  const sessionsData = [
    {
      name: "الشيخ علي زقاي",
      dayes: ["الأحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
      time: "17:00:00", // from
      status: "مفتوحة", //  UTC + 4 === from ? مفتوحة : مغلقة
      open: <OpenComponent open={true} />, // هنا فيه refactor => عايزين نبدأ ال zoom api
    },
    {
      name: "الشيخ جمال طيبي",
      dayes: ["الأحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
      time: "17:00:00",
      status: "مفتوحة",
      open: <OpenComponent open={true} />,
    },
    {
      name: "الشيخ عبدالحميد",
      dayes: ["الأحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
      time: "15:00:00",
      status: "مفتوحة",
      open: <OpenComponent open={false} />,
    },
    {
      name: "الشيخ حمزة مهرهرة",
      dayes: ["الأحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
      time: "15:00:00",
      status: "مفتوحة",
      open: <OpenComponent open={true} />,
    },
    {
      name: "الشيخ رمضان بحري",
      dayes: ["الأحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"],
      time: "15:00:00",
      status: "مفتوحة",
      open: <OpenComponent open={false} />,
    },
  ];

  return (
    <div className="reciter py-4 px-2 rounded bg-light" dir="rtl">
      <StudentsActions show={show} />
      <StudentsSearchByName name="بحث" placeholder="أدخل اسم الحلقة" />
      {/* <StudentsTable studentsData={sessionsData} headers={headers} /> */}
    </div>
  );
};

export default Reciter;
