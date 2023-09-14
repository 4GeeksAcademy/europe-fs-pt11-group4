import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import myDoctorUrl from "../../img/mydoctor.png";
import loggedUserIcon from "../../img/user.png";
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
					{store.authToken 
					? 
					<div>
						<li className="nav-item dropdown">
							<span className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<img src={loggedUserIcon} alt="user" style={{ width: '29px' }} />
								&nbsp;
								{store.user.name}
							</span>
							<ul className="dropdown-menu p-2">
								<li style={{ overFlow: 'auto', whiteSpace: "nowrap" }}><Link to="/private"><strong>User home</strong></Link></li>
								<li style={{ overFlow: 'auto', whiteSpace: "nowrap" }}><Link to="/booking"><strong>Book consultation</strong></Link></li>
								<hr className="text-danger"></hr>
								<li><Link to="/"><span className="text-danger" onClick={() => actions.logOut()}><strong><i className="fa-solid fa-arrow-right-from-bracket"></i> &nbsp;Logout</strong></span></Link></li>
							</ul>
        				</li>
					</div>
					:
					<div>
						<Link to="/login"><button className="btn btn-outline-primary rounded-pill">Login</button></Link>
						&nbsp; 
						<Link to="/signup"><button className="btn btn-primary rounded-pill">Register now</button></Link>
					</div>}
				</div>
			</div>
		</nav>
	);
};
