import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { AiFillEdit as Edit, AiFillDelete as Delete } from "react-icons/ai";
import { BsCheck as Check } from "react-icons/bs";

const SessionDates = ({
  formData,
  setFormData,
  date,
  handleInputChange,
  index,
}) => {
  const [edit, setEdit] = useState(false);
  return (
    <Row key={index + date?.day}>
      <Col className="position-relative" xs={4}>
        <Form.Select
          disabled={!edit}
          name={`day-${index}`}
          onChange={handleInputChange}
        >
          <option>اختر اليوم</option>
          <option selected={date?.day === "الجمعة"} value="الجمعة">
            الجمعة
          </option>
          <option selected={date?.day === "السبت"} value="السبت">
            السبت
          </option>
          <option selected={date?.day === "الاحد"} value="الأحد">
            الأحد
          </option>
          <option selected={date?.day === "الاثنين"} value="الإثنين">
            الإثنين
          </option>
          <option selected={date?.day === "الثلاثاء"} value="الثلاثاء">
            الثلاثاء
          </option>
          <option selected={date?.day === "الاربعاء"} value="الأربعاء">
            الأربعاء
          </option>
          <option selected={date?.day === "الخميس"} value="الخميس">
            الخميس
          </option>
        </Form.Select>
        <div
          onClick={() => setEdit(!edit)}
          className={`edit-input ${edit ? "active" : ""}`}
        >
          {edit ? (
            <div className="add-remove">
              <Check className="add" />

              <Delete
                className="remove"
                onClick={() => {
                  setFormData({
                    ...formData,
                    dates: formData.dates.filter((item, i) => {
                      return i !== index;
                    }),
                  });
                }}
              />
            </div>
          ) : (
            <Edit />
          )}
        </div>
      </Col>
      <Col className="position-relative" xs={4}>
        <input
          disabled={!edit}
          type="time"
          name={`from-${index}`}
          value={date?.from}
          onChange={handleInputChange}
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
          name={`to-${index}`}
          value={date?.to}
          onChange={handleInputChange}
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

export default SessionDates;
