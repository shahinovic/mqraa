import { Button } from "react-bootstrap";
import {
  StudentsActions,
  StudentsSearchByName,
  StudentsTable,
} from "../../components";

import { AiTwotoneVideoCamera as Video } from "react-icons/ai";

const Reciter = () => {
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
      time: "17:00:00",
      status: "مفتوحة",
      open: <OpenComponent open={true} />,
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
      <StudentsTable studentsData={sessionsData} headers={headers} />
    </div>
  );
};

export default Reciter;
