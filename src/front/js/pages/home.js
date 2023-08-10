import React from "react";
import doctor4ImageUrl from "../../img/doctor4.jpg";
import doctor3ImageUrl from "../../img/doctor3.jpg";
import "../../styles/home.css";
import CardTwo from "../component/cardTwo.jsx";
import Card from "../component/card.jsx";


const dataTwo = [{titleTwo:"What makes myDoctor a One-Stop Healthcare App", descriptionTwo:"One place to get initial consultation, diagnosis, second opinion, treatment plans, e-prescriptions, follow up, medical reports in e-copy and much more", detailOne:"Top doctors across Europe are onboarded from various disciplines including General Physicians, Physiotherapists, Psychiatrists, Dentists, ENT Specialists, Gynecologists, Cardiologists, Dermatologists, Neurologists, Pediatricians, and many others."}, 
{titleTwo:"With so many such apps around Why Choose Us", descriptionTwo:"We are committed to providing effiecient, reliable and affordable digital healthcare services.", detailOne: "We combine world-class technology and top-rated doctors", detailTwo:"We bring experts from all fields of medicine at one place", detailThree: "On our team are doctors from all over Europe. No more language problems, no more geographical limitations"},
{titleTwo:"What do We Offer to Our Clients", descriptionTwo:"High quality video calls", detailOne:"Assurance that all your data is safe with us", detailTwo:"Medical reports in soft copy", detailThree: "e-prescription to get your medicines from any pharmacy", detailFour: "Free second opinion from other doctors onboard"},
 ,]

const data = [{title:"Select a Speciality", description:"From our team of experienced doctors select the specialization or if you are not sure, you can book an appointment with a GP"}, 
{title:"Select a Doctor", description:"With our big team of doctors, you can select the doctor based on the first available appointment or the rate per session"},
{title:"Book an Online Consultation", description:"Choose according to your convenience the day and the time slot"},
{title:"Make Payment Online", description:"Check your booking details and pay online. You get an immediate confirmation"},]


export const Home = () => {

	return (
		<div>
			  	<div id="carouselCaptions" className="carousel slide">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className = "image" height="600" width="100%" src={doctor4ImageUrl}/>
							<div className="carousel-caption d-md-block">
								<h1 className="col-12 bg-white bg-opacity-25 text-primary">With <b>myDoctor</b> Experience One-Stop Heathcare</h1><br></br>
								<h3 className="col-12 bg-white bg-opacity-25 text-dark">Access routine medical care and urgent care services from the comfort of your Home, 24x7</h3>
								<h3 className="col-12 bg-white bg-opacity-25 text-primary">Talk to specialist doctors via video call and receive instant health and medical consultation</h3>
							</div>
						</div>
					</div>
        		</div>

        	<div>
				<div className="row gap-4 m-5">
					{dataTwo.map(cardTwo =><CardTwo
						titleTwo={cardTwo.titleTwo}
						imageUrlTwo={"https://fakeimg.pl/500x325"}
						descriptionTwo={cardTwo.descriptionTwo}
						detailOne={cardTwo.detailOne}
						detailTwo={cardTwo.detailTwo}
						detailThree={cardTwo.detailThree}
						detailFour={cardTwo.detailFour}
						detailFive={cardTwo.detailFive}
					/>)}
				</div>
				<div className="row gap-4 m-4">
					{data.map(card =><Card
						title={card.title}
						imageUrl={doctor3ImageUrl}
						description={card.description}
						buttonLabel="Learn More"
					/>)}
				</div>
			</div>
			  
		</div>
	);
};
