import React, { useEffect, useContext, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Context } from "../store/appContext";


export const Appointments = () => {
	const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
	console.log(store)

	useEffect(() => {
		fetch(process.env.BACKEND_URL +"/api/appointments")
            .then((result) => result.json())
            .then((data) => actions.setAppointmentData(data))
            .catch(error => console.error('Error fetching appointments', error));
        
        fetch(process.env.BACKEND_URL +"/api/doctors")
            .then((result) => result.json())
            .then((data) => actions.setDoctorData(data))
            .catch(error => console.error('Error fetching doctors', error));       
	}, []);

    const deleteAppointments = (appointment_id) => {
		fetch(process.env.BACKEND_URL + '/api/appointments/' + `${appointment_id}`, {
			method: "DELETE",
			headers: {      
				"Content-Type": "application/json"
			}
		})
        .then(result => {
            if (result.ok){
                setShowModal(true);
            return result.json()  
            }})
		.then(data => {actions.setAppointmentData(data);
		})
		.catch(error => console.log('Error deleting appointment', error))   
	}

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
            {((store.appointments.length) === 0) ? <h4>You have no upcoming consultations</h4> :
            <Table striped hover>
                <thead>
                    <tr>
                    <th>Date and time</th>
                    <th>Doctor</th>
                    <th>Reason</th>
                    <th>Cost</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                {store.appointments.map((appointment) => {
                    return (
                        <tbody key={appointment.id}>
                            <tr>
                            <td>{formatDateTime(appointment.time)}</td>
                            {store.doctors.map((doctor) => {
                                if (doctor.id === appointment.doctor_id){
                                    return (
                                        <td>Dr. {doctor.name}</td>
                                    );}
                                })}
                            <td>{appointment.user_comment}</td>
                            {store.doctors.map((doctor) => {
                                if (doctor.id === appointment.doctor_id){
                                    return (
                                        <td>{doctor.price}€</td>
                                    );}
                                })}
                            <td>
                                <Link to='/checkout'>
                                    <div className="text-success">Pay</div>
                                </Link>
                            </td>
                            <td>
                                <div name="appointment_id" value={appointment.id} className="text-danger" onClick={() => deleteAppointments(appointment.id)}style={{ cursor: 'pointer' }}>Cancel</div>
                            </td>
                            </tr>
                        </tbody>
                        );
                    })}
            </Table>
            }

            <Modal className="text-center" show={showModal} onHide={() => setShowModal(false)}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>SUCCESS</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    Selected consultation cancelled.
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mx-auto d-block" variant="primary" onClick={() => {
                        setShowModal(false);
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
		</div>
	);
};