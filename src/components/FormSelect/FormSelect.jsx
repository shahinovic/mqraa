import React from "react";
import { Col, Form } from "react-bootstrap";

const FormSelect = ({ handleInputChange, formData, col, index }) => {
  return (
    <Col key={index} md={col.md}>
      <Form.Label>{col.label}</Form.Label>
      <Form.Select
        required={col.required}
        type={col.type}
        name={col.name}
        placeholder={col.placeholder}
        value={formData[col.name]}
        onChange={handleInputChange}
      >
        {col.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
};

export default FormSelect;
