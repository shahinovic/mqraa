import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashbordCard } from "../../components";
import {
  AiOutlinePlusCircle as Plus,
  AiOutlineFolderOpen as Folder,
} from "react-icons/ai";

const Exams = () => {
  const firstColor = "#418a84";
  const secondColor = "#bf8b49";
  const cards = [
    {
      col: 12,
      path: "/exams/exams-list",
      title: "سجل الإختبارات",
      icon: <Plus />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/exams/exams-types",
      title: "أنواع الإختبارات",
      icon: <Folder />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/exams/exam-results",
      title: "تقدير الإختبارات",
      icon: <Folder />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/exams/exams-questions",
      title: "بنك الأسئلة",
      icon: <Folder />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/exams/exams-committee-management",
      title: "إدارة لجنة الإختبارات",
      icon: <Folder />,
      color: firstColor,
    },
  ];
  return (
    <div className="exams py-3 px-2 bg-light rounded-2" dir="rtl">
      <Row>
        {cards.map((ele, index) => {
          const { path, col, title, icon, color } = ele;
          return (
            <Col className="mb-3" key={index} xs={col}>
              <Link to={path}>
                <DashbordCard icon={icon} title={title} color={color} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Exams;
