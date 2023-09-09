import { Form, Table } from "react-bootstrap";
import "./StudentsTable.css";

const StudentsTable = ({ studentsData, headers }) => {
  const renderStudents = () => {
    return studentsData?.map((student) => {
      const keys = Object.keys(student);
      const tds = keys.map((ele, index) => {
        if (typeof student[`${ele}`].$$typeof === "symbol")
          return <td>{student[ele]}</td>;
        if (typeof student[`${ele}`] === "object" && ele !== "attendance") {
          return (
            <td>
              {[...Object.values(student[`${ele}`])].map((ele) => (
                <span className="badge">{ele}</span>
              ))}
            </td>
          );
        } else {
          return <td>{student[ele]}</td>;
        }
      });
      return (
        <tr key={student.name + student.nickname}>
          <td className="text-center">
            <Form.Check className="" type="checkbox" id={`default-checkbox`} />
          </td>
          {tds}
        </tr>
      );
    });
  };
  const renderHeaders = () => {
    return headers.map((header) => <th>{header}</th>);
  };

  return (
    <div className="students-table">
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th></th>
            {renderHeaders()}
          </tr>
        </thead>
        <tbody>{studentsData?.length !== 0 && renderStudents()}</tbody>
      </Table>
      {studentsData?.length === 0 && (
        <div
          className="w-100 py-2 my-3 text-center"
          style={{ border: "1px solid #36c4c1", color: "#003c47" }}
        >
          لا توجد بيانات
        </div>
      )}
      <span className="actions border border-1 border-black rounded-2 d-block mx-auto">
        <button className="btn  next">السابق</button>
        <button className="btn current">1</button>
        <button className="btn previous">التالي</button>
      </span>
    </div>
  );
};

export default StudentsTable;
