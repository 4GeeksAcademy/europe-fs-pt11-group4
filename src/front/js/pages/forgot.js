import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export const Forgot=()=>{

	return (
    
		<div className="container ">
            <div className="w-50 p-3 mx-auto border border-primary-subtle p-5">
					<h3>Forgot Your Password?</h3><br></br>
					<h6>Please enter your registered e-mail here. We will send you a link to reset the password.</h6><br></br>
				<form>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
						<input type="email" className="form-control" aria-describedby="emailHelp"/>
						<div className="form-text">We'll never share your email with anyone else.</div>
					</div>
				</form>
				
				<hr className="my-4" />

				<Link to="/">
				<button className="btnbtn btn-primary btn-lg">Back Home</button>
				</Link>
			</div>
		</div>
	);
};