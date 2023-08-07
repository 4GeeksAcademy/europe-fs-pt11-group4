import React from "react";
import Button from "./button.jsx";

const CardTwo = (props) => {
	return (
		<div className="card max-width: 540px border-light">
          	<div className="row g-0">
				<div className="col-md-4 mt-5">
					<img src={props.imageUrlTwo} className="img-fluid rounded-start" width="400"  height="800" alt="..."/>
				</div>
            	<div className="col-md-8">
              		<div className="text-start ms-5">
              			<h2 className="card-title text-center mt-3 mb-1">{props.titleTwo}</h2><br></br>
							<div className="card-body">
							{props.descriptionTwo}
							</div>  
							<div className="card-body">
							{props.detailOne}
							</div>
							<div className="card-body">
							{props.detailTwo}
							</div>
							<div className="card-body">
							{props.detailThree}
							</div>
							<div className="card-body">
							{props.detailFour}
							</div>
							<div className="card-body">
							{props.detailFive}
							</div>
                		<h5 className="card-text"><small className="text-primary">To find out more</small><br></br><Button/></h5><hr></hr>
              		</div>
            	</div>
        	</div>
		</div>		
	);
};


export default CardTwo