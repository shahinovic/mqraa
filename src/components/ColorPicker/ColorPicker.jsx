import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { SketchPicker } from "react-color";

const ColorPicker = ({ selectedColor, setSelectedColor, text }) => {
  const [show, setShow] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };
  return (
    <Col md={6}>
      <Form className="color-picker py-2 px-1 bg-light ">
        <Form.Group as={Col} xs={12} md={5}>
          <Form.Label>{text}</Form.Label>
          <div
            onClick={() => setShow(!show)}
            style={{
              backgroundColor: selectedColor,
              width: "100%",
              height: "20px",
            }}
          ></div>
        </Form.Group>
        {show && (
          <Form.Group xs={6} md={8}>
            {/* <Form.Label>Color Picker</Form.Label> */}
            <SketchPicker color={selectedColor} onChange={handleColorChange} />
          </Form.Group>
        )}
      </Form>
    </Col>
  );
};

export default ColorPicker;
