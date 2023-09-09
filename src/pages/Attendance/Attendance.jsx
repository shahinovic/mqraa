import { Link } from "react-router-dom";
import "./Attendance.css";
import { Card, Col, Row } from "react-bootstrap";
import { FaChalkboardTeacher as Teacher } from "react-icons/fa";
import { PiStudentBold as Student } from "react-icons/pi";

// attendance

{
  /* <button className="btn btn-primary">Teachers</button> */
}
const Attendance = () => {
  return (
    <div className="attendance bg-light p-2 rounded-2" dir="rtl">
      <Row>
        <Col md={4}>
          <Link to="/attendance/teachers">
            <Card className="text-center w-100 m-2 text-light">
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
        <Col md={4}>
          <Link to="/attendance/students">
            <Card className="text-center w-100 m-2 text-light">
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
        <Col md={4}>
          <Link to="/attendance/employees">
            <Card className="text-center w-100 m-2 text-light">
              <Card.Body>
                <div className="icon mb-3 fs-1">
                  <Student />
                </div>
                <Card.Title className="mb-3">حضور الموظفين</Card.Title>
                <Card.Text>مراجعة حضور الموظفين </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
