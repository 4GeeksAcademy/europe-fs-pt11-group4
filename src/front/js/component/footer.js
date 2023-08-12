import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	
	<footer className="footer mt-auto py-3 text-center">
		
		<div className="d-flex justify-content-center">
			<div className="m-3">
				<Link to= "/">
						<span>Home</span>
				</Link>
			</div>
			<div className="m-3">
				<Link to= "/frequentlyAskedQuestions">
					<span>FAQs</span>
				</Link>
			</div>
			<div className="m-3">
				<Link to= "/aboutUs">
					About Us
				</Link>
			</div>
			<div className="m-3">
				<Link to= "/contact">
					<span>Contact</span>
				</Link>
			</div>
			<div className="m-3">
				@2023 All Rights Reserved
			</div>
			
		</div>
		
	</footer>
);
