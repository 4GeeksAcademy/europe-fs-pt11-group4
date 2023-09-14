import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Doctors } from "./doctor";
import { Appointments } from "./appointment";
import { UserHome } from "./userhome";
import { Channel } from "./channel";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import doctor3ImageUrl from "../../img/video-call.gif";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container footer-eighty">
			{console.log(store)}
			{store.authToken 
			? 
			<Tabs>
				<TabList>
					<Tab>
						User home <i class="fa-solid fa-house-chimney-user"></i>
					</Tab>
					<Tab>
						Book consultation <i class="fa-regular fa-calendar-check"></i>
					</Tab>
					<Tab>
						Upcoming consultations <i class="fa-solid fa-laptop-medical"></i>
					</Tab>
					<Tab>
						Health channel <i class="fa-solid fa-stethoscope"></i>
					</Tab>
				</TabList>
				<TabPanel>
					<h2>Welcome back {store.user.name.split(" ")[0]}!</h2>
					<br />
					<UserHome />	
				</TabPanel>
				<TabPanel>
					<div className="list-group list-group-horizontal inline-scroll" style={{ overflow: "auto" }}>
						<Doctors />
					</div>
					<br />
					<br />
					<h4>&nbsp;Book your next consultation in four easy steps...</h4>
					<div className="d-flex">
						<div className="flex-fill">
							<ListGroup as="ol" numbered>
								<ListGroup.Item as="li">Select doctor <i class="fa-solid fa-user-doctor"></i></ListGroup.Item>
								<ListGroup.Item as="li">Add reason for consultation <i class="fa-regular fa-comment"></i></ListGroup.Item>
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
					<Appointments />
				</TabPanel>
				<TabPanel>
					<Channel />
				</TabPanel>
			</Tabs>
			:
			<h2>Please log in</h2>}
		</div>
	);
};
