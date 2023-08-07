import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import myDoctorUrl from "../../img/mydoctor.png";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<img src={myDoctorUrl} alt="my doctor logo" style={{ width: '70px', }} />
					<span className="brand h1">&nbsp;myDoctor</span>
				</Link>
				<div className="ml-auto">
					{store.authToken ? <Link to="/"><button className="btn btn-outline-danger rounded-lg" onClick={() => actions.logOut()}>Logout</button></Link> :
					<div>
						<Link to="/login"><button className="btn btn-light rounded-lg">Login</button></Link>
						&nbsp; 
						<Link to="/signup"><button className="btn btn-primary rounded-pill">Register now</button></Link>
					</div>}
				</div>
			</div>
		</nav>
	);
};
