import Button from "react-bootstrap/Button";
import "./School.css";
import { BiEdit as Edit } from "react-icons/bi";
import { BsCheck2Circle as Check } from "react-icons/bs";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { SchoolLogo } from "../../../components";

const School = () => {
  const [schoolObj, setSchoolObj] = useState({
    schoolName: "المدرسة المتميزة - التجريبية",
    phoneNumber: "0551466581",
    dateType: "1",
    schoolAddress: "بوزريعة - الجزائر",
    schoolEmail: "FZwJy@example.com",
    currencyType: "1",
    schoolLogo:
      "https://i.pinimg.com/236x/68/e6/28/68e628782c9d84c23b38656265cc98da.jpg",
    stamping:
      "https://i.pinimg.com/564x/c1/1e/84/c11e845534fa0daaf26762b49696df41.jpg",
  });
  const [edit, setEdit] = useState(true);
  const [schoolName, setSchoolName] = useState(schoolObj.schoolName);
  const [phoneNumber, setPhoneNumber] = useState(schoolObj.phoneNumber);
  const [dateType, setDateType] = useState(schoolObj.dateType);
  const [schoolAddress, setSchoolAddress] = useState(schoolObj.schoolAddress);
  const [schoolEmail, setSchoolEmail] = useState(schoolObj.schoolEmail);
  const [currencyType, setCurrencyType] = useState(schoolObj.currencyType);
  const [schoolLogo, setSchoolLogo] = useState(schoolObj.schoolLogo);
  const [stamping, setStamping] = useState(schoolObj.stamping);

  const handleEditToggle = () => setEdit(!edit);
  const handleSchoolName = (e) => setSchoolName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleDateType = (e) => setDateType(e.target.value);
  const handleSchoolAddress = (e) => setSchoolAddress(e.target.value);
  const handleSchoolEmail = (e) => setSchoolEmail(e.target.value);
  const handleCurrencyType = (e) => setCurrencyType(e.target.value);

  const handleDone = () => {
    setSchoolObj({
      schoolName: schoolName,
      phoneNumber: phoneNumber,
      dateType: dateType,
      schoolAddress: schoolAddress,
      schoolEmail: schoolEmail,
      currencyType: currencyType,
      schoolLogo: schoolLogo,
      stamping: stamping,
    });
    handleEditToggle();
  };

  const handleCancel = () => {
    setSchoolName(schoolObj.schoolName);
    setPhoneNumber(schoolObj.phoneNumber);
    setDateType(schoolObj.dateType);
    setSchoolAddress(schoolObj.schoolAddress);
    setSchoolEmail(schoolObj.schoolEmail);
    setCurrencyType(schoolObj.currencyType);
    setSchoolLogo(schoolObj.schoolLogo);
    setStamping(schoolObj.stamping);

    handleEditToggle();
  };

  return (
    <div className="school py-3 px-2 bg-light rounded-2" dir="rtl">
      {edit && (
        <Row>
          <Button className="edit" onClick={() => handleEditToggle()}>
            <Edit /> تعديل البيانات
          </Button>
        </Row>
      )}
      <Row>
        <Col xs={6}>
          <div className="card text-center">
            <div className="card-head">
              <h4>شعار المدرسة:</h4>
              <div className={`img-container ${!edit && "edit"}`}>
                <SchoolLogo
                  edit={edit}
                  schoolLogo={schoolLogo}
                  setSchoolLogo={setSchoolLogo}
                />
              </div>
            </div>
            <fieldset disabled={edit}>
              <Form.Group className="mb-3" controlId="schoolName">
                <Form.Label>اسم المدرسة:</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل اسم المدرسة"
                  onChange={handleSchoolName}
                  value={schoolName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>رقم الهاتف:</Form.Label>
                <Form.Control
                  type="number"
                  className="text-center"
                  placeholder="ادخل رقم الهاتف"
                  onChange={handlePhoneNumber}
                  value={phoneNumber}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dateType">
                <Form.Label>نوع التاريخ:</Form.Label>
                <Form.Select
                  aria-label="dateType"
                  className="text-center"
                  value={dateType}
                  onChange={handleDateType}
                >
                  <option value="1">شهر 1 - شهر 2</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </fieldset>
          </div>
        </Col>
        <Col xs={6}>
          <div className="card text-center">
            <div className="card-head">
              <h4>ختم المدرسة:</h4>
              <div className={`img-container ${!edit && "edit"}`}>
                <SchoolLogo
                  edit={edit}
                  schoolLogo={stamping}
                  setSchoolLogo={setStamping}
                />
              </div>
            </div>
            <fieldset disabled={edit}>
              <Form.Group className="mb-3 " controlId="schoolName">
                <Form.Label>العنوان:</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل العنوان"
                  onChange={handleSchoolAddress}
                  value={schoolAddress}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>البريد الإلكتروني:</Form.Label>
                <Form.Control
                  type="email"
                  className="text-center"
                  placeholder="ادخل البريد الإلكتروني"
                  onChange={handleSchoolEmail}
                  value={schoolEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="currencyType">
                <Form.Label>نوع العملة:</Form.Label>
                <Form.Select
                  aria-label="dateType"
                  className="text-center"
                  value={currencyType}
                  onChange={handleCurrencyType}
                >
                  <option>اختر نوع العملة</option>
                  <option value="1">د ح</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </fieldset>
          </div>
        </Col>
      </Row>
      {!edit && (
        <Row>
          <Col md={6}>
            <Button
              className="edit"
              onClick={() => handleDone()}
              disabled={edit}
            >
              <Check /> تأكيد
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="danger"
              className="edit"
              onClick={() => handleCancel()}
              disabled={edit}
            >
              إلغاء
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default School;
