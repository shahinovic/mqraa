import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashbordCard } from "../../../components";
import { AiOutlineUnorderedList as List } from "react-icons/ai";

const FinancialSettings = () => {
  const firstColor = "#418a84";
  const cards = [
    {
      col: 6,
      path: "/financial-affairs/financial-affairs-settings/subscriptions-types",
      title: "انواع الاشتراكات",
      icon: <List />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/financial-affairs/financial-affairs-settings/payroll-types",
      title: "انواع الرواتب",
      icon: <List />,
      color: firstColor,
    },
    {
      col: 12,
      path: "/financial-affairs/financial-affairs-settings/manage-expenses-types",
      title: "إدارة أنواع المصاريف",
      icon: <List />,
      color: firstColor,
    },
  ];
  return (
    <div className="financial-settings py-3 px-2 bg-light" dir="rtl">
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

export default FinancialSettings;
