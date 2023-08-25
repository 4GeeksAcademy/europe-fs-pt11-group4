import React, { useEffect, useContext } from "react";
import Table from 'react-bootstrap/Table';

import { Context } from "../store/appContext";

export const Report = () => {
  const { store, actions } = useContext(Context);

	console.log(store)

	useEffect(() => {
		fetch(process.env.BACKEND_URL +"/api/report")
      .then((result) => result.json())
      .then((data) => actions.setReportData(data))
      .catch(error => console.error('Error fetching reports', error));
        
    fetch(process.env.BACKEND_URL +"/api/doctors")
      .then((result) => result.json())
      .then((data) => actions.setDoctorData(data))
      .catch(error => console.error('Error fetching doctors', error)); 
	}, []);

    const formatDateTime = (dateTimeString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            timeZoneName: 'short' 
        };
        return new Date(dateTimeString).toLocaleString(undefined, options);
    };

	return (
		<div className="container footer-eighty">
            {((store.reports.length) === 0) ? <h4>You have no medical reports</h4> :
            <Table striped hover>
                <thead>
                    <tr>
                    <th>Consultation date and time</th>
                    <th>Doctor</th>
                    <th>Reason</th>
                    <th>Doctor's comment</th>
                    </tr>
                </thead>
                {store.reports.map((report) => {
                    return (
                        <tbody key={report.id}>
                            <tr>
                            <td>{formatDateTime(report.appointments.time)}</td>
                            {store.doctors.map((doctor) => {
                                if (doctor.id === report.appointments.doctor_id){
                                    return (
                                        <td>Dr. {doctor.name}</td>
                                    );}
                                })}
                            <td>{report.appointments.user_comment}</td>
                            {store.doctors.map((doctor) => {
                                if (doctor.id === report.doctor_id){
                                    return (
                                        <td>{doctor.price}€</td>
                                    );}
                                })}
                            <td>{report.doctor_comment}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </Table>
            }
		</div>
	);
};

