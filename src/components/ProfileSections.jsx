import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "../styles/ProfileSections.css";
import { useState } from "react";
import StudentsTable from "./StudentsTable";

const ProfileSections = () => {
  const [page, setPage] = useState("attendace");

  const attendanceData = [
    {
      date: "2022-01-01",
      attend: "حاضر",
      status: "متأخر",
    },
    {
      date: "2022-01-01",
      attend: "حاضر",
      status: "في الميعاد",
    },
  ];

  const headers = ["التاريخ", "الحضور", "الحالة"];

  return (
    <Tabs defaultActiveKey={page} id="justify-tab" className="mb-3" justify>
      <Tab eventKey="home" title="المعلومات العامة">
        Tab content for Profile
      </Tab>
      <Tab eventKey="attendace" title="الحضور">
        <StudentsTable studentsData={attendanceData} headers={headers} />
      </Tab>
    </Tabs>
  );
};

export default ProfileSections;
