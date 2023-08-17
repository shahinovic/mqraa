import React from "react";
import Table from "react-bootstrap/Table";

const SessionsDetailedReportTable = ({ data, headers }) => {
  const firstColor = "rgb(65, 138, 132)";
  const renderHeaders = (headersData) => {
    return headersData.map((header) => (
      <th key={header} style={{ backgroundColor: firstColor }}>
        {header}
      </th>
    ));
  };

  const typeOfSession = {
    memorizing: "الحفظ",
    reviewing: "المراجعة",
    confirming: "التثبيت",
  };
  const renderBody = (data) => {
    return data.map((ele) => {
      const { day, sessionType, studentsAchievements } = ele;
      return studentsAchievements.map((student) => {
        return (
          <tr key={student.name}>
            <td>{day}</td>
            <td>{typeOfSession[sessionType]}</td>
            <td>
              <span>{student.from.surah}</span>
              <span>{student.from.ayah}</span>
            </td>
            <td>
              <span>{student.to.surah}</span>
              <span>{student.to.ayah}</span>
            </td>
            <td>{student.degree}</td>
            <td>{student.note}</td>
            <td>{student.pages}</td>
          </tr>
        );
      });
    });
  };
  if (!data) return null;
  if (data.length === 0) return null;
  return (
    <Table className="normal-table" striped bordered hover size="md">
      <thead>
        <tr>{renderHeaders(headers)}</tr>
      </thead>
      <tbody>{renderBody(data)}</tbody>
    </Table>
  );
};

export default SessionsDetailedReportTable;
