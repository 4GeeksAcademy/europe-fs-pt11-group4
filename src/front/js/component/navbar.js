import React from "react";
import { Link } from "react-router-dom";
import myDoctorUrl from "../../img/mydoctor.png";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<img src={myDoctorUrl} alt="my doctor logo" style={{ width: '70px', }} />
					<span className="brand h1">&nbsp;myDoctor</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Sign In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
