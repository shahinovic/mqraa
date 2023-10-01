import { Form, Table } from "react-bootstrap";
import "./StudentsTable.css";
import { toggle } from "../../services/reducers/refreshSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../services/reducers/selectedUserSlice";

const StudentsTable = ({
  selectedStudent,
  setSelectedStudent,
  studentsData,
  headers,
  selectAll,
}) => {
  console.log("🚀 ~ file: StudentsTable.jsx:15 ~ studentsData:", studentsData);
  const refresh = useSelector((state) => state.refresh);
  const dispatch = useDispatch();

  const renderStudents = () => {
    // const [studentChecked, setStudentChecked] = useState(true);

    return studentsData?.map((student) => {
      const keys = Object.keys(student);
      const tds = keys.map((ele, index) => {
        if (index >= headers.length) return;
        if (typeof student[`${ele}`]?.$$typeof === "symbol")
          return <td key={student.id + student.username}>{student[ele]}</td>;

        if (Array.isArray(student[ele])) {
          // <td key={student.id + student.username}>
          //   {student[`${ele}`].map((ele) => (
          //     <span key={student.id + student.username} className="badge">
          //       {ele}
          //     </span>
          //   ))}
          // </td>;
        }
        if (typeof student[`${ele}`] === "object" && ele !== "attendance") {
          return (
            <td key={student.id + student.username}>
              {[...Object.values(student[`${ele}`])].map((ele) => (
                <span className="badge">{ele}</span>
              ))}
            </td>
          );
        } else {
          return <td key={student.id + student.username}>{student[ele]}</td>;
        }
      });
      return (
        <tr key={student.name + student.nickname}>
          <td className="text-center">
            <Form.Check
              checked={student.id === selectedStudent[0] || selectAll[0]}
              className=""
              onClick={() => {
                const toggle = student.id === selectedStudent[0];
                if (!toggle) {
                  setSelectedStudent([student.id]);
                  dispatch(setSelectedUser([student.id]));
                } else {
                  setSelectedStudent([]);
                  dispatch(setSelectedUser([]));
                }
              }}
              type="checkbox"
              id={`default-checkbox`}
            />
          </td>
          {tds}
        </tr>
      );
    });
  };
  const renderHeaders = () => {
    return headers.map((header) => <th>{header}</th>);
  };

  const handleRefresh = () => {};

  return (
    <div className="students-table">
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th></th>
            {renderHeaders()}
          </tr>
        </thead>
        {!refresh && (
          <tbody>{studentsData?.length !== 0 && renderStudents()}</tbody>
        )}
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
