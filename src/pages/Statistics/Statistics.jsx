import React from "react";
import { DashbordCard } from "../../components";
import { AiFillSignal as Achievement } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="statistics py-3 px-2 bg-light" dir="rtl">
      <Row>
        <Col sm={12} md={6}>
          <Link to="/statistics/statistics-achievement">
            <DashbordCard icon={<Achievement />} title="إحصاءات الإنجاز" />
          </Link>
        </Col>

        <Col sm={12} md={6}>
          <Link to="/statistics/statistics-perseverance">
            <DashbordCard icon={<Achievement />} title="إحصاءات المواظبة" />
          </Link>
        </Col>

        <Col sm={12} md={6}>
          <Link to="/statistics/statistics-achievement-progression">
            <DashbordCard icon={<Achievement />} title="منحني تطور الإنجاز" />
          </Link>
        </Col>

        <Col sm={12} md={6}>
          <Link to="/statistics/statistics-sessions">
            <DashbordCard icon={<Achievement />} title="إحصاءات الحلقات" />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
