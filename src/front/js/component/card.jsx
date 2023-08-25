import React from "react";


const CardOne = (props) => {
	return (
		<div className="col">
			<div className="card shadow bg-body rounded h-100">
				<div className="card-header bg-secondary text-white h4">
					{props.step}
				</div>
				<div className="card-body">
					<h3 className="card-title">{props.title}</h3><br></br>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		</div>			
	);
};


export default CardOne