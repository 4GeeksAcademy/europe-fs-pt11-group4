import React from "react";
import Button from "./button.jsx";


const Card = (props) => {
	return (
		<div className="col">
			<div className="card">
					<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
				<div className="card-body">
					<h3 className="card-title text-center">{props.title}</h3>
					<p className="card-text">{props.description}</p>
					<div className="App">
						<Button
							color="white"
							backgroundColor="blue"
							text="Learn More"
						/>
    				</div>
				</div>
			</div>
		</div>
			
		
	);
};


export default Card