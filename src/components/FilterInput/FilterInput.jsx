import { useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
// import {  } from "react-router-dom";
import { AiOutlineCloseCircle as Close } from "react-icons/ai";
const FilterInput = ({ input, index }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    cols,
    type,
    optionsArray,
    formLabel,
    formPlaceholder,
    names,
    setNames,
  } = input;
  console.log("🚀 ~ file: FilterInput.jsx:10 ~ FilterInput ~ input:", input);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // setIsDropdownOpen(!isDropdownOpen);
  };

  const sessions = () => {
    if (searchTerm === "") {
      return optionsArray;
    } else {
      return optionsArray.filter((session) => session.includes(searchTerm));
    }
  };

  const dropdownOptions = () => {
    return sessions().map((session) => (
      <Dropdown.Item
        onClick={() => {
          names.includes(session) ? null : setNames([...names, session]);
          setSearchTerm("");
        }}
        key={session}
      >
        {session}
      </Dropdown.Item>
    ));
  };

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <Col xs={12} md={cols} key={index}>
        <Row>
          <Col xs={12}>
            <Form.Label>{formLabel}</Form.Label>
            <Form.Group controlId="sessionSearch">
              <Form.Control
                type={type}
                value={searchTerm}
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => {
                  setTimeout(() => {
                    setIsDropdownOpen(false);
                  }, 100);
                }}
                onChange={(e) => {
                  handleSearch(e);
                  handleSelectClick();
                }}
                placeholder={formPlaceholder}
              />
            </Form.Group>
            <Dropdown show={isDropdownOpen}>
              <Dropdown.Menu>{dropdownOptions()}</Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12}>
            <div className="box w-100 p-1 m-1">
              {names.map((session, index) => (
                <span
                  className="selected-session  px-4 rounded-pill"
                  key={session + "-" + index}
                >
                  {session}
                  <span
                    onClick={() => {
                      names.splice(index, 1);
                      setNames([...names]);
                    }}
                    className="remove"
                  >
                    <Close />
                  </span>
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default FilterInput;
