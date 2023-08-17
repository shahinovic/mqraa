import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashbordCard } from "../../components";

import "./Reports.css";

import { AiFillSignal as Achievement } from "react-icons/ai";

const Reports = () => {
  return (
    <div className="reports bg-light py-3 px-2 rounded-2" dir="rtl">
      <Row>
        <Col sm={12} md={6}>
          <Link to="/reports/achievement">
            <DashbordCard
              icon={<Achievement />}
              title="تقارير الانجاز اليومي"
            />
          </Link>
        </Col>

        <Col sm={12} md={6}>
          <Link to="/reports/perseverance">
            <DashbordCard icon={<Achievement />} title="تقرير المواظبة" />
          </Link>
        </Col>

        <Col sm={12} md={6}>
          <Link to="/reports/student-detailed-report">
            <DashbordCard
              icon={<Achievement />}
              title="التقرير التفصيلي للطلاب"
            />
          </Link>
        </Col>

        <Col sm={12} md={6}>
          <Link to="/reports/sessions-detailed-report">
            <DashbordCard
              icon={<Achievement />}
              title="التقرير التفصيلي للحلقات"
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Reports;
