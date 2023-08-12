import React from "react";
import doctor4ImageUrl from "../../img/doctor4.jpg";
import doctor3ImageUrl from "../../img/doctor3.jpg";
import "../../styles/home.css";
import CardTwo from "../component/cardTwo.jsx";
import CardOne from "../component/card.jsx";


const dataTwo = [{titleTwo:"A One-Stop Healthcare App", imageUrlTwo: "https://www.myhealthspace.in/assets/img/consult-min.jpg",descriptionTwo:"One place to get-", detailOne:"✅  initial consultation", detailTwo:"✅  diagnosis and treatment plan", detailThree:"✅  second opinion", detailFour:"✅  e-prescriptions and medical reports in e-copy", detailFive:"✅  and much more"}, 
{titleTwo:"Why Choose Us", imageUrlTwo: "https://www.riomed.com/wp-content/uploads/2021/11/blogpost.jpg",descriptionTwo:"We are committed to providing effiecient, reliable and affordable digital healthcare services.", detailOne: "We combine world-class technology and top-rated doctors", detailTwo:"We bring experts from all fields of medicine at one place", detailThree: "On our team are doctors from all over Europe. No more language problems, no more geographical limitations"},
{titleTwo:"What  Do We Offer", imageUrlTwo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKP9wGQrpXu5Ge_KbguhCsoqusqGJMZ4T7wA&usqp=CAU", descriptionTwo:"", detailOne:"✅  High quality video calls", detailTwo:"✅  Medical reports in soft copy", detailThree: "✅  e-prescription to get your medicines from any pharmacy", detailFour: "✅  Assurance that all your data is safe with us"},
 ,]

const data = [{step: "STEP 1", title:"Select a Speciality", description:"From our team of experienced doctors select the specialization or if you are not sure, you can book an appointment with a GP"}, 
{step: "STEP 2", title:"Select a Doctor", description:"With our big team of doctors, you can select the doctor based on the first available appointment or the rate per session"},
{step: "STEP 3", title:"Book an Online Consultation", description:"Choose according to your convenience the day and the time slot"},
{step: "STEP 4", title:"Make Payment Online", description:"Check your booking details and pay online. You get an immediate confirmation"},]


export const Home = () => {

	return (
		<div>
			<div className="container ">
				<div className="row">
					<div className="col-lg-6">
						<img className="shadow" height="500" width="550" 
						src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHklMjBmYW1pbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</div>
					<div className="col-lg-6">
						<div className="p-5 mt-4">
							<h1 className="display-4">myDoctor</h1><br></br>
							<h3 className="text-success">USER-FRIENDLY. EFFICIENT. RELIABLE. AFFORDABLE.</h3><br></br>
							<h5>Access medical care services from the comfort of your Home, 24x7</h5><br></br>
							<h5>Talk to specialist doctors via video call and receive instant health and medical consultation</h5>
						</div>
					</div>
				</div>
			</div>

        	<div>
				<div className="row gap-4 m-5">
				{dataTwo.map((cardTwo,index) =><CardTwo
					titleTwo={cardTwo.titleTwo}
                    idx={parseInt(index)+1}
					imageUrlTwo={cardTwo.imageUrlTwo}
						descriptionTwo={cardTwo.descriptionTwo}
						detailOne={cardTwo.detailOne}
						detailTwo={cardTwo.detailTwo}
						detailThree={cardTwo.detailThree}
						detailFour={cardTwo.detailFour}
						detailFive={cardTwo.detailFive}
					/>)}
				</div>

				<div className="container ">
					<div className="row">
						<h2 className="display-4 text-center">How It Works</h2><br></br>
						<h4 className="text-success text-center">Say goodbye to the inconvenience and stress of traditional docotor visits. In four esay steps book an appointment right from where you are!</h4><br></br>
						<div className="row gap-4 m-4">
							{data.map(cardOne =><CardOne
								step={cardOne.step}
								title={cardOne.title}
								description={cardOne.description}
							/>)}
						</div>
					</div>
				</div>

			</div>
			  
		</div>
	);
};
