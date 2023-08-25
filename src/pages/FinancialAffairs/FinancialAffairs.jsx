import React from "react";

import { DashbordCard } from "../../components";

import { Link } from "react-router-dom";
import { CiCreditCard1 as Card } from "react-icons/ci";
import { AiOutlineSetting as SettingsIcon } from "react-icons/ai";
import {
  BsArrowUpCircle as Up,
  BsArrowDownCircle as Down,
} from "react-icons/bs";
import { BiSolidReport as Report } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";

const FinancialAffairs = () => {
  const firstColor = "#418a84";
  const secondColor = "#bf8b49";

  const cards = [
    {
      col: 6,
      path: "/financial-affairs/student-subscriptions",
      title: "اشتراكات الطلاب",
      icon: <Card />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/financial-affairs/late-payment",
      title: "المتأخرون عن الدفغ",
      icon: <Card />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/financial-affairs/financial-affairs-incomes",
      title: "المداخيل",
      icon: <Up />,
      color: secondColor,
    },
    {
      col: 6,
      path: "/financial-affairs/financial-affairs-expenses",
      title: "المصاريف",
      icon: <Down />,
      color: secondColor,
    },
    {
      col: 6,
      path: "/financial-affairs/financial-affairs-salaries",
      title: "رواتب المعلمين والموظفين",
      icon: <Card />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/financial-affairs/financial-affairs-reports",
      title: "التقارير المالية",
      icon: <Report />,
      color: firstColor,
    },
    {
      col: 12,
      path: "/financial-affairs/financial-affairs-settings",
      title: "إعدادات المالية",
      icon: <SettingsIcon />,
      color: firstColor,
    },
  ];

  return (
    <div className="financial-affairs py-3 px-3 bg-light" dir="rtl">
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

export default FinancialAffairs;
