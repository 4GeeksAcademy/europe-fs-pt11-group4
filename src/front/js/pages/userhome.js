import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';

export const UserHome = (props) => {
  const { store, actions } = useContext(Context);

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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const appointmentCount = store.appointments.length;
  const plural = appointmentCount !== 1;
  const cardColor = ['danger','success','info','warning','dark','light','secondary','primary'];

  return (
      <div className="container">
        <h4>Your health dashboard</h4>
          <div className="d-flex">
            <Card border="primary" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
              <Card.Header>Date of birth</Card.Header>
              <Card.Body>
                <Card.Title>12 March 1993</Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card border="secondary" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
              <Card.Header>Height</Card.Header>
              <Card.Body>
                <Card.Title>1.69m</Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card border="success" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
              <Card.Header>Weight</Card.Header>
              <Card.Body>
                <Card.Title>70kg</Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card border="danger" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
              <Card.Header>Blood pressure</Card.Header>
              <Card.Body>
                <Card.Title>110/80mmHg</Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card border="warning" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
              <Card.Header>VO2 Max</Card.Header>
              <Card.Body>
                <Card.Title>45.4</Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card border="info" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
              <Card.Header>Cholesterol</Card.Header>
              <Card.Body>
                <Card.Title>198</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <br />
          <br />
          {((store.appointments.length) === 0) ? "" :
          <div>
              <h4>You have {appointmentCount} upcoming {plural ? 'consultations' : 'consultation'} on</h4>
            <div className="d-flex">
              {store.appointments.map((appointment, index) => {
              return (
                  <Card border={cardColor[index % cardColor.length]} style={{ width: '18rem', marginRight: "12px", boxShadow: "3px 3px 3px 2px #9E9E9E" }} key={appointment.id}>
                    {store.doctors.map((doctor) => {
                      if (doctor.id === appointment.doctor_id){
                          return (
                              <Card.Header>Dr. {doctor.name}</Card.Header>
                          );}
                      })}
                    <Card.Body>
                      <Card.Title>{formatDate(appointment.time)}</Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        }
        <br />
        <br />
      </div>
  );
};
