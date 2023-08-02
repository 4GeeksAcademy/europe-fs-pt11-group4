import React, { useState, useEffect, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Doctors = (props) => {
	const { store, actions } = useContext(Context);

	console.log(store)

	useEffect(() =>{
		fetch("https://www.swapi.tech/api/people")
		.then((result) => result.json())
		.then((data) => actions.setPeopleData(data.results));
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
				{store.people.map((person) => {
					return (
						<div key={person.uid}>
							<div className="card" style={{width: "18rem", marginRight: "15px"}}>
								<img src="https://www.findablackdoctor.com/wp-content/themes/fabd/src/assets/hp-hero.jpg" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Dr. {person.name}</h5>
									<p className="card-text">Specialty: {person.gender}</p>
									<p className="card-text">Price per hour: {person.hair_color}</p>
									
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