import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container display-flex">
					<div className="alert alert-info">
						<p>A new user?</p>
							<Link to="/signup" >
								<button>Create an account</button>
							</Link>
					</div>
				
					<div className="alert alert-info">
						<p>Already registered?</p>
							<Link to="/login" >
								<button>Login</button>
							</Link>
					</div>
				
			</div>
		</nav>
	);
};
