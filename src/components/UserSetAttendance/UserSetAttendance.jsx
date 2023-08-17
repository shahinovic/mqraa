import { Form, Table } from "react-bootstrap";
import "./UserSetAttendance.css";
// usersData
const UserSetAttendance = ({ usersData, headers }) => {
  const firstColor = "rgb(65, 138, 132)";
  const secondColor = "#bf8b49";
  const renderStudents = () => {
    return usersData.map((student) => {
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
          <td>
            <Form.Check type="radio" id={`attend`} />
          </td>
          <td>
            <Form.Check type="radio" id={`absence`} />
          </td>
          <td>
            <Form.Check type="radio" id={`late`} />
          </td>
          <td>
            <Form.Check type="radio" id={`excuse`} />
          </td>
          <td>
            <Form>
              <Form.Group className="mb-3" controlId="hoursCount">
                <Form.Label>عدد الساعات</Form.Label>
                <Form.Control type="text" placeholder="عدد الساعات" />
              </Form.Group>
            </Form>
          </td>
          {/* {tds} */}
        </tr>
      );
    });
  };

  const renderTrs = () => {
    return usersData.map((user) => {
      return (
        <>
          <tr key={user?.name + user?.nickname}>
            <td>{user.name}</td>
            <td>
              <Form.Check type="radio" id={`attend`} />
            </td>

            <td>
              <Form.Check type="radio" id={`absence`} />
            </td>

            <td>
              <Form.Check type="radio" id={`late`} />
            </td>

            <td className="text-center ">
              <Form.Check type="radio" id={`excuse`} />
            </td>

            <td>
              <Form className="w-50 text-center mx-auto">
                <Form.Group className="mb-3" controlId="hoursCount">
                  <Form.Label>عدد الساعات</Form.Label>
                  <Form.Control
                    type="number"
                    className="text-center"
                    placeholder="عدد الساعات"
                  />
                </Form.Group>
              </Form>
            </td>
          </tr>
        </>
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
          <tr style={{ backgroundColor: firstColor }}>{renderHeaders()}</tr>
        </thead>
        <tbody>
          {/* {tds} */}

          {renderTrs()}
        </tbody>
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

export default UserSetAttendance;
