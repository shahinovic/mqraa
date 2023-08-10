import { Col, Row } from "react-bootstrap";
import "../styles/Settings.css";
import { DashbordCard } from "../components";

import { Link } from "react-router-dom";
import { CiCreditCard1 as Card } from "react-icons/ci";
import { AiOutlineSetting as SettingsIcon } from "react-icons/ai";
import {
  BsArrowUpCircle as Up,
  BsArrowDownCircle as Down,
} from "react-icons/bs";

const Settings = () => {
  const firstColor = "#418a84";
  const secondColor = "#bf8b49";
  const cards = [
    {
      col: 12,
      path: "/settings/school",
      title: "بيانات المدرسة",
      icon: <Card />,
      color: firstColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة المهام",
      icon: <SettingsIcon />,
      color: firstColor,
    },
    {
      col: 6,
      path: "",
      title: "السنوات الدراسية",
      icon: <Card />,
      color: firstColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة العلامات",
      icon: <Up />,
      color: firstColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة أنواع المتابعة",
      icon: <SettingsIcon />,
      color: firstColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة أنواع الحلقات",
      icon: <SettingsIcon />,
      color: firstColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة المستويات",
      icon: <Down />,
      color: firstColor,
    },

    {
      col: 6,
      path: "",
      title: "إدارة أنشطة اللقاء التربوي",
      icon: <Down />,
      color: secondColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة مجلالات اللقاء التربوي",
      icon: <Down />,
      color: secondColor,
    },
    {
      col: 6,
      path: "",
      title: "إدارة أنواع المنهج المصاحب",
      icon: <Down />,
      color: secondColor,
    },

    {
      col: 6,
      path: "",
      title: "إدارة أنواع المتون",
      icon: <Down />,
      color: secondColor,
    },
  ];
  return (
    <div className="settings" dir="rtl">
      <Row>
        {cards.map((ele, index) => {
          const { path, col, title, icon, color } = ele;
          return (
            <Col key={index} xs={col}>
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

export default Settings;
