import React, { useState, useEffect, useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Appointments = (props) => {
	const { store, actions } = useContext(Context);

	console.log(store)

	useEffect(() =>{
		fetch(process.env.BACKEND_URL +"/api/appointments")
		.then((result) => result.json())
		.then((data) => actions.setAppointmentData(data));
	}, []);

	return (
        
		<div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Reason</th>
                        </tr>
                    </thead>
                    {store.appointments.map((appointment) => {
                        return (
                            <tbody key={appointment.id}>
                                <tr>
                                <td>{appointment.time}</td>
                                <td>{appointment.doctor_id}</td>
                                <td>{appointment.user_comment}</td>
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>
			<br />
		</div>	
	);
};