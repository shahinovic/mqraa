import { Link } from "react-router-dom";
import "../styles/Attendance.css";
import { Card, Col, Row } from "react-bootstrap";
import { FaChalkboardTeacher as Teacher } from "react-icons/fa";
import { PiStudentBold as Student } from "react-icons/pi";
// attendance

{
  /* <button className="btn btn-primary">Teachers</button> */
}
const Attendance = () => {
  return (
    <div className="attendance" dir="rtl">
      <Row>
        <Col md={6}>
          <Link to="/attendance/teachers">
            <Card className="text-center w-75 m-5 text-light">
              <Card.Body>
                <div className="icon mb-3 fs-1">
                  <Teacher />
                </div>
                <Card.Title className="mb-3">حضور المعلمين</Card.Title>
                <Card.Text>مراجعة حضور المعلمين وساعات العمل </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/attendance/students">
            <Card className="text-center w-75 m-5 text-light">
              <Card.Body>
                <div className="icon mb-3 fs-1">
                  <Student />
                </div>
                <Card.Title className="mb-3">حضور الطلاب</Card.Title>
                <Card.Text>مراجعة حضور الطلاب </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
