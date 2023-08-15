import { Col, Row } from "react-bootstrap";
import "./DashboarInfo.css";

const DashboarInfo = () => {
  return (
    <div className="dashboard-info">
      <Row>
        <Col xs={4}>
          <div className="box">
            <div className="box-header">
              <h4>الحفظ</h4>
              <div className="data-header">
                <span className="text">اخر أسبوع</span>
                <span className="num">صفحة</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="box">
            <div className="box-header">
              <h4>المراجعة</h4>
              <div className="data-header">
                <span className="text">اخر أسبوع</span>
                <span className="num">صفحة</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="box">
            <div className="box-header">
              <h4>التثبيت</h4>
              <div className="data-header">
                <span className="text">اخر أسبوع</span>
                <span className="num">صفحة</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboarInfo;
