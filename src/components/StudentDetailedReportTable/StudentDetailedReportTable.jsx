import React from "react";
import Table from "react-bootstrap/Table";

const StudentDetailedReportTable = ({ data, headers, studentName }) => {
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
      const index = ele.studentsAchievements.findIndex(
        (student) => student.name === studentName
      );
      return (
        <tr key={ele.name}>
          <td>{ele.day}</td>
          <td>{typeOfSession[ele.sessionType]}</td>
          <td>
            <span>{ele.studentsAchievements[index].from.surah}</span>
            <span>{ele.studentsAchievements[index].from.ayah}</span>
          </td>
          <td>
            <span>{ele.studentsAchievements[index].to.surah}</span>
            <span>{ele.studentsAchievements[index].to.ayah}</span>
          </td>
          <td>{ele.studentsAchievements[index].degree}</td>
          <td>{ele.studentsAchievements[index].note}</td>
          <td>{ele.studentsAchievements[index].pages}</td>
        </tr>
      );
    });
  };
  if (!data) return null;
  if (data.length === 0) return null;

  return (
    <Table className="normal-table" striped bordered hover size="md">
      <thead>
        <tr>{renderHeaders(headers)}</tr>
      </thead>
      <tbody>
        {data && data.length > 0 && studentName ? renderBody(data) : null}
      </tbody>
    </Table>
  );
};

export default StudentDetailedReportTable;
