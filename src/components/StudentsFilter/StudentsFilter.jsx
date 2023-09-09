import { useEffect, useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import "./StudentsFilter.css";

import FilterInput from "../FilterInput/FilterInput";

const StudentsFilter = ({ filterInputs }) => {
  const renderInputs = (inputs) => {
    return inputs.map((input, index) => (
      <FilterInput key={index} input={input} index={index} />
    ));
  };
  return <Row className="students-filter">{renderInputs(filterInputs)}</Row>;
};

export default StudentsFilter;
