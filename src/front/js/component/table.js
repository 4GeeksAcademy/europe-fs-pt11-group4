import React from "react";
import { FetchReport } from "../hooks/fetchReport";
import "../../styles/table.css";

const Table = ({ headers }) => {
  const api = process.env.BACKEND_URL+'/api/report';
  const { error, loading, report } = FetchReport(api);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!report) return null;
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {report.map((report, index) => (
          <tr>
          <td key={index}>{report.appointments.doctor.name}</td>
          <td key={index}>{report.appointments.time}</td>
          <td key={index}>{report.doctor_comment}</td>
          </tr>
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