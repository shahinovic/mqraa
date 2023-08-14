import { Form } from "react-bootstrap";

const StudentsSearchByName = ({ name, placeholder }) => {
  return (
    <div className="search-by-name pt-3">
      <Form.Group className="mb-3" controlId="searchByName">
        <Form.Label>{name}</Form.Label>
        <Form.Control type="text" placeholder={placeholder} />
      </Form.Group>
    </div>
  );
};

export default StudentsSearchByName;
