import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { AiFillEdit as Edit } from "react-icons/ai";
import { BsCheck as Check } from "react-icons/bs";

const AddDayForSession = ({
  formData,
  newDate,
  setNewDate,
  handleInputChange,
  index,
}) => {
  const [edit, setEdit] = useState(true);

  const [day, setDay] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "day") {
      setNewDate({
        ...newDate,
        day: value,
      });
      setDay(value);
    } else if (name === "from") {
      setNewDate({
        ...newDate,
        from: value,
      });
      setFrom(value);
    } else if (name === "to") {
      setNewDate({
        ...newDate,
        to: value,
      });
      setTo(value);
    }
    // setNewDate({
    //   day,
    //   from,
    //   to,
    // });
  };

  return (
    <Row key={index + day}>
      <Col className="position-relative" xs={4}>
        <Form.Select disabled={!edit} name="day" onChange={handleDateChange}>
          <option>اختر اليوم</option>
          <option selected={day === "الجمعة"} value="الجمعة">
            الجمعة
          </option>
          <option selected={day === "السبت"} value="السبت">
            السبت
          </option>
          <option selected={day === "الاحد"} value="الأحد">
            الأحد
          </option>
          <option selected={day === "الاثنين"} value="الإثنين">
            الإثنين
          </option>
          <option selected={day === "الثلاثاء"} value="الثلاثاء">
            الثلاثاء
          </option>
          <option selected={day === "الاربعاء"} value="الأربعاء">
            الأربعاء
          </option>
          <option selected={day === "الخميس"} value="الخميس">
            الخميس
          </option>
        </Form.Select>
        <div
          onClick={() => setEdit(!edit)}
          className={`edit-input ${edit ? "active" : ""}`}
        >
          {edit ? <Check /> : <Edit />}
        </div>
      </Col>
      <Col className="position-relative" xs={4}>
        <input
          disabled={!edit}
          type="time"
          name="from"
          value={from}
          onChange={handleDateChange}
        />
        <div
          onClick={() => setEdit(!edit)}
          className={`edit-input ${edit ? "active" : ""}`}
        >
          {edit ? <Check /> : <Edit />}
        </div>
      </Col>
      <Col className="position-relative" xs={4}>
        <input
          disabled={!edit}
          type="time"
          name="to"
          value={to}
          onChange={handleDateChange}
        />
        <div
          onClick={() => setEdit(!edit)}
          className={`edit-input ${edit ? "active" : ""}`}
        >
          {edit ? <Check /> : <Edit />}
        </div>
      </Col>
    </Row>
  );
};

export default AddDayForSession;
