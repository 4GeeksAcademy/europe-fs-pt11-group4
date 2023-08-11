import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Doctors } from "./doctor";
import { UserHome } from "./userhome";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import doctor3ImageUrl from "../../img/video-call.gif";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{console.log(store)}
			<Tabs>
				<TabList>
					<Tab>
						User home <i class="fa-solid fa-house-chimney-user"></i>
					</Tab>
					<Tab>
						Medical history <i class="fa-solid fa-notes-medical"></i>
					</Tab>
					<Tab>
						Book consultation <i class="fa-solid fa-laptop-medical"></i>
					</Tab>
					<Tab>
						Invoices <i class="fa-solid fa-file-invoice"></i>
					</Tab>
					<Tab>
						Health channel <i class="fa-solid fa-stethoscope"></i>
					</Tab>
				</TabList>

				<TabPanel>
					<h2>Welcome back {store.user.name.split(" ")[0]}! </h2>
					<br />
					<h4>Health Dashboard</h4>
					<UserHome />
					<br />
					<h4>Upcoming appointments</h4>
					<Card border="dark" style={{ width: '18rem', boxShadow: "3px 3px 3px #9E9E9E" }}>
						<Card.Header>August</Card.Header>
						<Card.Body>
						<Card.Title>18 August 2023</Card.Title>
						</Card.Body>
					</Card>
					<br />
					<Card border="info" style={{ width: '18rem', boxShadow: "3px 3px 3px #9E9E9E" }}>
						<Card.Header>September</Card.Header>
						<Card.Body>
						<Card.Title>None</Card.Title>
						
						</Card.Body>
					</Card>
					<br />
					

				</TabPanel>
				<TabPanel>
					<h4>Medical appointment history and reports</h4>
					<h4>Previous appointments</h4>
					<h4>Reports from previous appointments</h4>
				</TabPanel>
				<TabPanel>
					<Doctors />
					<h3>Book your next appointment in four easy steps...</h3>
					<div className="d-flex">
						<div className="flex-fill">
							<ListGroup as="ol" numbered>
								<ListGroup.Item as="li">Select doctor <i class="fa-solid fa-user-doctor"></i></ListGroup.Item>
								<ListGroup.Item as="li">Add note to doctor about your appointment <i class="fa-regular fa-comment"></i></ListGroup.Item>
								<ListGroup.Item as="li">Select date and time <i class="fa-regular fa-calendar-days"></i></ListGroup.Item>
								<ListGroup.Item as="li">Accept terms and conditions <i class="fa-solid fa-clipboard-check"></i></ListGroup.Item>
							</ListGroup>
						</div>
						<div className="flex-fill">
							<img className="" width="300"  height="165" src={doctor3ImageUrl}/ >
						</div>
					</div>
					<br />
					<Link to="/booking">
						<Button variant="primary" size="lg">Book a consultation now</Button>
					</Link>
					
				</TabPanel>
				<TabPanel>
					<h4>Invoices from previous appointments</h4>
				</TabPanel>
				<TabPanel>
					<h4>Health news</h4>
					<h4>Health tips</h4>
				</TabPanel>
			</Tabs>
		</div>
	);
};
