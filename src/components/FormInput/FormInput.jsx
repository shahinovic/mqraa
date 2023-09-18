import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";

const FormInput = ({ handleInputChange, formData, col, index }) => {
  const isInvalid = (col) => {
    if (!col.pattern) {
      // If no pattern is provided, consider it valid
      return false;
    }

    const pattern = new RegExp(col.pattern);
    const value = col.value || "";

    // Check if the value matches the pattern
    return {
      isInvalid: !pattern.test(value),
      pattern,
      value,
    };
  };

  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    // Update invalid whenever formData or col changes
    if (formData[col.name] !== "") {
      setInvalid(isInvalid(col).isInvalid);
    }
  }, [formData, col]);

  return (
    <Col key={index + col.name} md={col.md}>
      <Form.Label>{col.label}</Form.Label>
      <Form.Control
        isInvalid={col.pattern && invalid}
        required={col.required}
        type={col.type}
        name={col.name}
        placeholder={col.placeholder}
        value={col.value}
        onChange={handleInputChange}
        pattern={col.pattern}
      />
      <Form.Control.Feedback type="invalid">
        {col.feedback}
      </Form.Control.Feedback>
    </Col>
  );
};

export default FormInput;
