import React from "react";
import { Link } from "react-router-dom";

export const Forgot=()=>{

	return (
    
		<div className="container text-center">
			<h3>Forgot Your Password?</h3><br></br>
            <h6>Please enter your registered e-mail here. We will send you a link to reset the password.</h6><br></br>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
			</form>
				
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};