import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Nav from 'react-bootstrap/Nav';
import doctor3ImageUrl from "../../img/doctor3.jpg";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<Nav justify variant="tabs" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link eventKey="link-1">Active</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-3">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-4">Link</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};
