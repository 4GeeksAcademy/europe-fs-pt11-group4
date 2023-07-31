import React from "react";
import { Link } from "react-router-dom";
import myDoctorUrl from "../../img/mydoctor.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={myDoctorUrl} alt="my doctor logo" style={{ width: '70px', }} />
					<span className="navbar-brand mb-0 h1">myDoctor</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
