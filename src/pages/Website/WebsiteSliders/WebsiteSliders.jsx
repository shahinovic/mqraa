import React from "react";
import { StudentsActions } from "../../../components";

const WebsiteSliders = () => {
  // actions

  const firstColActions = ["إضافة", "تعديل", "تحديد الكل", "إلغاء"];
  const secondColActions = ["طباعة", "إظهار", "Excel", "إظهار 10 اسطر"];

  const show = {
    state: "both",
    first: firstColActions,
    second: secondColActions,
  };
  return (
    <div className="website-sliders">
      <StudentsActions show={show} />
    </div>
  );
};

export default WebsiteSliders;
