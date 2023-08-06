import React from "react";
import { FetchReport } from "../hooks/fetchReport";
import "../../styles/table.css";

const Table = ({ headers }) => {
  const api = "https://symmetrical-zebra-wwrjggpv757cxjg-3001.app.github.dev/api/report";
  const { error, loading, report } = FetchReport(api);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!report) return null;
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index} header={header} />
          ))}
        </tr>
      </thead>
      <tbody>
        {report.map((report, index) => (
          <TableData report={report} headers={headers} key={index} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeader = ({ header }) => {
  return <th>{header.value}</th>;
};

const TableData = ({ report, headers }) => {
  return (
    <tr>
      {headers.map((header, index) => {
        return <td key={index}>{report[`${header.value}`]}</td>;
      })}
    </tr>
  );
};
export default Table;