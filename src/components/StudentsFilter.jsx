import { useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";

import FilterInput from "./FilterInput";
const StudentsFilter = ({ filterInputs }) => {
  const renderInputs = (inputs) => {
    return inputs.map((input, index) => (
      <FilterInput key={index} input={input} index={index} />
    ));
  };
  return <Row>{renderInputs(filterInputs)}</Row>;
};

export default StudentsFilter;
