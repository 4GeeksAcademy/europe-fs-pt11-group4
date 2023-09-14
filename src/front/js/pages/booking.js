import React, { useState, useContext, useEffect } from "react";
import { useForm } from "../hooks/useform";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Booking = () => {
    const { store, actions } = useContext(Context);
    const [uniqueSpecialties, setUniqueSpecialties] = useState([]);
	const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [isTosAccepted, setIsTosAccepted] = useState(false);
    const handleCheckboxChange = () => {
        setIsTosAccepted(!isTosAccepted);
    };
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
    };
    
    useEffect(() =>{
		fetch(process.env.BACKEND_URL +"/api/doctors")
			.then((result) => result.json())
			.then((data) => {actions.setDoctorData(data);
				const specialties = Array.from(new Set(data.map(doctor => doctor.specialty)));
				setUniqueSpecialties(specialties);
			})
			.catch(error => console.error('Error fetching doctors from API:', error));
		}, []);

	const filteredDoctors = store.doctors.filter(doctor =>
		selectedSpecialty === '' || doctor.specialty === selectedSpecialty
	);

    const [values, handleInputChange] = useForm({
        user_id: store.user.user_id,
        doctor_id:'',
        time:'',
        user_comment:'',
    })

    console.log(values)

    const { user_id, doctor_id, time, user_comment } = values  
    
    const [error, setError] = useState({
        user_id: false,
        doctor_id: false,
        time: false,
        user_comment: false,
    })

    const errorStyle = {
        borderColor: "red",
    };

const createAppointment = async (event) => {
    event.preventDefault();
    setError({
        user_id: user_id === "",
        doctor_id: doctor_id === "",
        time: time === "",
        user_comment: user_comment === "",
    });
    if (
        user_id !== '' &&
        doctor_id !== '' &&
        time !== '' &&
        user_comment !== ''
        ){
       try {
         const response = await fetch(process.env.BACKEND_URL+'/api/booking',{
            method: 'POST',
            body: JSON.stringify({
                user_id: store.user.user_id,
                doctor_id: doctor_id,
                time: time,
                user_comment: user_comment
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        if (response.ok){
            alert('Appointment created successfully')
            navigate("/private")
            return true
        }
       }
       catch (error){
            console.log(error)
       }
    }
}
	return (
        <div className="container">
            <div className="w-50 p-5 mx-auto border border-secondary rounded">
               
                <h3 className="text-center mb-4">Consultation booking</h3>
                <div className="d-flex">
                    <Form.Group className="mb-3 w-100" controlId="patientName">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control type="patient name" placeholder="" defaultValue={store.user.name} />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3 flex-shrink-1" controlId="patientId">
                        <Form.Label>Patient ID</Form.Label>
                        <Form.Control type="patient id" placeholder="" defaultValue={store.user.user_id} />
                    </Form.Group>
                </div>
                <br />
                <Dropdown>
					<Dropdown.Toggle className="w-100 text-start" variant="light" id="dropdown-basic">
					{selectedSpecialty || 'Select Doctor Specialty'}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{uniqueSpecialties.map((specialty) => {
                            return (
                                <Dropdown.Item key={specialty} onClick={() => setSelectedSpecialty(specialty)}>{specialty}</Dropdown.Item>
                            );
                        })}
					</Dropdown.Menu>
				</Dropdown>
                <br />
                <Dropdown>
                    <Form.Select aria-label="Default select example" name="doctor_id" value={doctor_id} onChange={handleInputChange}>
                        <option>Select Doctor</option>
                        {filteredDoctors.map((doctor) => {
                            return (
                                <option value= {doctor.id}>Dr. {doctor.name}, {doctor.specialty} ({doctor.price}€/hr)</option>
                            );
                        })}
                    </Form.Select>   
                </Dropdown>  
                <br />
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reason for consultation</Form.Label>
                    <Form.Control as="textarea" rows={3} name="user_comment" value={user_comment} onChange={handleInputChange} />
                </Form.Group> 
                <br />
                <Form.Group className="mb-3" controlId="timeSelect" type="date"  name="time" value={time}>
                    <DatePicker
                        showTimeSelect
                        selected={startDate}
                        onChange={(date) => {
                        setStartDate(date)
                        handleInputChange({
                            target:{
                            name: "time",
                            value: date.toJSON(),
                        }
                    })}}
                        timeClassName={handleColor}
                    />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <label>
                        <input type="checkbox" checked={isTosAccepted} onChange={handleCheckboxChange}/>
                        &nbsp;
                        I accept the <Link to="/tos">terms and conditions</Link>
                    </label>
                </Form.Group>
                <br />
                <Button variant="primary w-100" type="submit" disabled={!isTosAccepted} onClick={createAppointment}>
                    Book consultation
                </Button>
            </div>
        </div>
	);
};