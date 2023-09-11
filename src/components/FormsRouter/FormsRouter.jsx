import React from "react";
import "./FormsRouter.css";
import { StudentsForm } from "../../containers";

const FormsRouter = () => {
  const path = "/student";

  const router = {
    "/student": <StudentsForm />,
    "/ahmed": <div>ahmed</div>,
  };
  return (
    <div className="forms-router py-3 px-2 rounded-3 bg-light" dir="rtl">
      {Object.keys(router).includes(path)
        ? router[path]
        : "هناك خطأ الصفحة غير موجودة"}
    </div>
  );
};

export default FormsRouter;
