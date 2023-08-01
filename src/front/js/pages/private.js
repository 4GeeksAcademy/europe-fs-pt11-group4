import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Nav from 'react-bootstrap/Nav';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Tabs>
				<TabList>
					<Tab>
						User home <i class="fa-solid fa-house-chimney-user"></i>
					</Tab>
					<Tab>
						Medical history and reports <i class="fa-solid fa-notes-medical"></i>
					</Tab>
					<Tab>
						Book video consultation <i class="fa-solid fa-laptop-medical"></i>
					</Tab>
					<Tab>
						Invoices <i class="fa-solid fa-file-invoice"></i>
					</Tab>
				</TabList>

				<TabPanel>
					<h2>Welcome back John! </h2>
					<h3>Upcoming appointments</h3>

				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h3>Book your video appointment in three easy steps</h3>
					<h4>Select doctor specialty <i class="fa-solid fa-user-doctor"></i></h4>
					<h4>Select date and time <i class="fa-regular fa-calendar-days"></i></h4>
					<h4>Add notes or comments</h4>
				</TabPanel>
				<TabPanel>
					<h2>Any content 4</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};
