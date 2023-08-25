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
      path: "/financial-affairs/student-subscriptions",
      title: "انواع الاشتراكات",
      icon: <List />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/financial-affairs/late-payment",
      title: "انواع الرواتب",
      icon: <List />,
      color: firstColor,
    },
    {
      col: 12,
      path: "/financial-affairs/financial-affairs-incomes",
      title: "إدارة أنواع المصاريف",
      icon: <List />,
      color: firstColor,
    },
  ];
  return (
    <div className="financial-settings">
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
