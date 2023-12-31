import React, { useState, useEffect, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import { Context } from "../store/appContext";


export const Doctors = () => {
	const { store, actions } = useContext(Context);
	const [uniqueSpecialties, setUniqueSpecialties] = useState([]);
	const [selectedSpecialty, setSelectedSpecialty] = useState('');
	
	console.log(store)

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

	return (
		<div className="container">
			<div className="d-flex justify-content-between">
				<div className="row">
					<h3 className="text">Doctors currently available</h3>
				</div>
				<div>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
					{selectedSpecialty || 'Select Specialty'}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{uniqueSpecialties.map((specialty) => {
                            return (
                                <Dropdown.Item key={specialty} href="" onClick={() => setSelectedSpecialty(specialty)}>{specialty}</Dropdown.Item>
                            );
                        })}
					</Dropdown.Menu>
				</Dropdown>
				</div>
			</div>
			
			<div className="list-group list-group-horizontal inline-scroll">
				{filteredDoctors.map((doctor) => {
					return (
						<div key={doctor.id}>
							<div className="card" style={{width: "18rem", marginRight: "15px"}}>
								<img src={doctor.picture} className="card-img-top" alt="..." style={{width: "100%", height: "180px", }}/>
								<div className="card-body">
									<h5 className="card-title">Dr. {doctor.name}</h5>
									<p className="card-text"><b>Specialty</b>: {doctor.specialty}</p>
									<p className="card-text"><b>Price per session</b>: €{doctor.price}</p>
								</div>
							</div>	
						</div>
					);
				})}
			</div>
			<br />
		</div>	
	);
};