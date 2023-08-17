import React from "react";

import Table from "react-bootstrap/Table";
const NormalTable = ({ data, headers, dataKeys }) => {
  const firstColor = "rgb(65, 138, 132)";
  const renderHeaders = (headersData) => {
    return headersData.map((header) => (
      <th key={header} style={{ backgroundColor: firstColor }}>
        {header}
      </th>
    ));
  };

  const renderBody = (data) => {
    return data.map((row) => (
      <tr key={row.name}>
        {dataKeys.map((dataKey) => {
          return <td key={dataKey}>{row[dataKey]}</td>;
        })}
      </tr>
    ));
  };
  return (
    <Table className="normal-table" striped bordered hover size="md">
      <thead>
        <tr>{renderHeaders(headers)}</tr>
      </thead>
      <tbody>{renderBody(data)}</tbody>
    </Table>
  );
};

export default NormalTable;
