import { Form, Table } from "react-bootstrap";
import "./StudentsTable.css";

const StudentsTable = ({ studentsData, headers }) => {
  const firstColor = "rgb(65, 138, 132)";
  const secondColor = "#bf8b49";
  const renderStudents = () => {
    return studentsData.map((student) => {
      const keys = Object.keys(student);
      const tds = keys.map((ele, index) => {
        if (typeof student[`${ele}`] === "object" && ele !== "attendance") {
          return [...Object.values(student[`${ele}`])].join(", ");
        } else {
          return <td>{student[ele]}</td>;
        }
      });
      return (
        <tr key={student.name + student.nickname}>
          <td className="d-flex justify-content-center align-items-center">
            <Form.Check type="checkbox" id={`default-checkbox`} />
          </td>
          {tds}
        </tr>
      );
    });
  };
  const renderHeaders = () => {
    return headers.map((header) => (
      <th style={{ backgroundColor: firstColor }}>{header}</th>
    ));
  };

  return (
    <div className="students-table">
      <Table striped bordered hover size="md">
        <thead>
          <tr style={{ backgroundColor: firstColor }}>
            <th style={{ backgroundColor: firstColor }}></th>
            {renderHeaders()}
          </tr>
        </thead>
        <tbody>{renderStudents()}</tbody>
      </Table>
      <span
        style={{ width: "fit-content" }}
        className="actions border border-1 border-black rounded-2 d-block p-1 mx-auto"
      >
        <button className="btn  next">السابق</button>
        <button
          style={{ backgroundColor: secondColor }}
          className="btn current"
        >
          1
        </button>
        <button className="btn previous">التالي</button>
      </span>
    </div>
  );
};

export default StudentsTable;
