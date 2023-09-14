import React from "react";

const CardTwo = (props) => {
	return (
		<div className="col-12 card border border-secondary-subtle rounded shadow " key={props.idx}>
			{props.idx%2==0 ? (
				<div className="row g-0 p-4">
					<div className="col-sm-4 mt-5 align-self-center">
						<img src={props.imageUrlTwo} className="shadow img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-sm-8">
						<div className="text-start ms-5">
							<h1 className="display-4">{props.titleTwo}</h1><br></br>
								
								<h3 className="text-success">
									{props.descriptionTwo}
								</h3><br></br> 

								<div className="card-text h6">
									{props.detailOne}
								</div>

								<div className="card-text h6">
									{props.detailTwo}
								</div>

								<div className="card-text h6">
									{props.detailThree}
								</div>

								<div className="card-text h6">
									{props.detailFour}
								</div>

								<div className="card-text h6">
									{props.detailFive}
								</div>
						</div>

							<h5 className="text-success p-5">
								<a  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
									Find out more
								</a>
							</h5>

						<div className="offcanvas offcanvas-start bg-light" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
							<div className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Specialities Available</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
							</div>
							<div className="offcanvas-body">
								<div>
									Top doctors across Europe are onboarded from various disciplines 
								</div>
								<div className="dropdown mt-3">
									<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
										including
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="#">General Physicians</a></li>
										<li><a className="dropdown-item" href="#"> Physiotherapists</a></li>
										<li><a className="dropdown-item" href="#">Psychiatrists</a></li>
										<li><a className="dropdown-item" href="#">Dentists</a></li>
										<li><a className="dropdown-item" href="#">ENT Specialists</a></li>
										<li><a className="dropdown-item" href="#">Gynecologists</a></li>
										<li><a className="dropdown-item" href="#">Cardiologists</a></li>
										<li><a className="dropdown-item" href="#">Dermatologists</a></li>
										<li><a className="dropdown-item" href="#">Neurologists</a></li>
										<li><a className="dropdown-item" href="#">Pediatricians</a></li><br></br>
										<li><a className="dropdown-item" href="#">and many others</a></li>
									</ul>
								</div>
							</div>
						</div>
            		</div>
				</div>

				):(

				<div className="row g-0 p-4">	
					<div className="col-sm-8">
						<div className="text-start ms-5">
							<h1 className="display-4">{props.titleTwo}</h1><br></br>
								
								<h3 className="text-success">
									{props.descriptionTwo}
								</h3> <br></br> 

								<div className="card-text h6">
									{props.detailOne}
								</div>

								<div className="card-text h6">
									{props.detailTwo}
								</div>

								<div className="card-text h6">
									{props.detailThree}
								</div>

								<div className="card-text h6">
									{props.detailFour}
								</div>

								<div className="card-text h6">
									{props.detailFive}
								</div>
						</div>
						<h5 className="text-success p-5"><a href="/login">Find out more</a></h5>
            		</div>
					<div className="col-sm-4 mt-5 align-self-center">
						<img src={props.imageUrlTwo} className="shadow img-fluid rounded-start" alt="..."/>
					</div>
				</div>
				)}	
		</div>	
	);
};
		



export default CardTwo


