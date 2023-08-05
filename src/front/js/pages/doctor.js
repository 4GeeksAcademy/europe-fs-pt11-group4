import React, { useState, useEffect, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Doctors = (props) => {
	const { store, actions } = useContext(Context);

	console.log(store)

	useEffect(() =>{
		fetch("https://probable-funicular-v944qgvvx59cvv9-3001.app.github.dev/api/doctors")
		.then((result) => result.json())
		.then((data) => actions.setDoctorData(data));
	}, []);

	return (
		<div className="container">
			<div className="d-flex justify-content-between">
				<div className="row">
					<h3 className="text">Doctors currently available</h3>
				</div>
				<div>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Specialty
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Family medicine</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Pediatrician</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Cardiologist</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Psychiatrist</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Surgeon</Dropdown.Item>
					</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
			
			<div className="list-group list-group-horizontal inline-scroll">
				{store.doctors.map((doctor) => {
					return (
						<div key={doctor.id}>
							<div className="card" style={{width: "18rem", marginRight: "15px"}}>
								<img src={doctor.picture} className="card-img-top" alt="..." style={{width: "100%", height: "180px", }}/>
								<div className="card-body">
									<h5 className="card-title">Dr. {doctor.name}</h5>
									<p className="card-text" id="dropdown-basic"><b>Specialty</b>: {doctor.specialty}</p>
									<p className="card-text"><b>Price per hour</b>: {doctor.price}€</p>
									
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