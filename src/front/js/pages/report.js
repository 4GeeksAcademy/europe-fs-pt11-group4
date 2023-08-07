import React from "react";
import Table from "../component/table";

export const Report = () => {
  const headers = [
    { title: "Doctor", value: "doctor" },
    { title: "Appointment", value: "time" },
    { title: "Doctor-Comments", value: "doctor_comments" },
  ];

  return (
    <div className="Container">
      <Table headers={headers} />
    </div>
  );
}

