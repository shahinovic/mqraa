import { Form } from "react-bootstrap";
import "./StudentsSearchByName.css";
import { useState } from "react";

const StudentsSearchByName = ({
  name,
  placeholder,
  searchTerm,
  setSearchTerm,
}) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search-by-name pt-3">
      <Form.Group className="mb-3" controlId="searchByName">
        <Form.Label>{name}</Form.Label>
        <Form.Control
          onChange={handleSearch}
          value={searchTerm}
          type="text"
          placeholder={placeholder}
        />
      </Form.Group>
    </div>
  );
};

export default StudentsSearchByName;
