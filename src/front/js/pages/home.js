import React from "react";
import "../../styles/home.css";
import CardTwo from "../component/cardTwo.jsx";
import CardOne from "../component/card.jsx";
import ReviewCard from "../component/reviewCard.jsx";


const dataTwo = [{titleTwo:"A One-Stop Healthcare App", imageUrlTwo: "https://cdn.create.vista.com/api/media/small/201294564/stock-photo-top-view-stethoscope-different-medicines-blue-surface",descriptionTwo:"One place to get:", detailOne:"✅  Initial consultation", detailTwo:"✅  Diagnosis and treatment plan", detailThree:"✅  Second opinion", detailFour:"✅  E-prescriptions and medical reports in e-copy", detailFive:"  and much more"}, 
{titleTwo:"Why Choose Us", imageUrlTwo: "https://media.istockphoto.com/id/1398069511/photo/affectionate-and-loving-mixed-race-family-sitting-together-happy-family-with-two-daughters.webp?b=1&s=170667a&w=0&k=20&c=-LaoBRGsOW_iBFY0uMQCms0aI8sLNdN8dx1yBmC-00o=",descriptionTwo:"We are committed to providing efficient, reliable and affordable digital healthcare services.", detailOne: "We combine world-class technology and top-rated doctors", detailTwo:"We bring experts from all fields of medicine at one place", detailThree: "On our team are doctors from all over Europe. No more language problems, no more geographical limitations"},
{titleTwo:"What  Do We Offer", imageUrlTwo: "https://st2.depositphotos.com/3662505/8811/i/450/depositphotos_88116830-stock-photo-doctors-in-hospital.jpg", descriptionTwo:"", detailOne:"✅  High quality video calls", detailTwo:"✅  Medical reports in soft copy", detailThree: "✅  E-prescription to get your medicines from any pharmacy", detailFour: "✅  Assurance that all your data is safe with us"},
 ,]

const data = [{step: "STEP 1", title:"Select a Speciality", description:"From our team of experienced doctors select the specialization or if you are not sure, you can book an appointment with a GP"}, 
{step: "STEP 2", title:"Select a Doctor", description:"With our big team of doctors, you can select the doctor based on the first available appointment or the rate per session"},
{step: "STEP 3", title:"Book an Online Consultation", description:"Choose according to your convenience the day and the time slot. The doctors are available 24 hours a day. 7 days a week"},
{step: "STEP 4", title:"Make Payment Online", description:"Check your booking details and pay online. You get an immediate confirmation. Without any hassle you are ready for the consultation"},]

const dataThree =[{header:"Alexis", titleThree:"A+ experience", descriptionThree:"The process is quick and easy. The doctors are nice and experienced.", footer:"20/1/2023"},
{header:"Johnson", titleThree:"Easy to use app", descriptionThree:"Booking an appointment with this app is easy. It saves you a lot of hassle.", footer:"5/2/2023"},
{header:"Raul", titleThree:"A great app", descriptionThree:"I am definitely going to recommend it to my friends and family.", footer:"28/3/2023"},
{header:"Sara", titleThree:"Excellent team of doctors", descriptionThree:"Thanks to Doctor Jacob's correct diagnosis I got instant relief!", footer:"7/5/2023"},
{header:"Sonya", titleThree:"Better than any such app around", descriptionThree:"The app helped me to find a German speaking doctor.", footer:"30/7/2023"},
]


export const Home = () => {

	return (
		<div>
			<div className="container ">
				<div className="row mb-4">
					<div className="col-lg-6 align-self-center">
						<img className="shadow" height="auto" width="100%" 
						src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHklMjBmYW1pbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</div>
					<div className="col-lg-6">
						<div className="p-5 mt-4">
							<h1 className="display-4">myDoctor</h1><br></br>
							<h4 className="text-primary">USER-FRIENDLY. EFFICIENT. RELIABLE. AFFORDABLE.</h4><br></br>
							<h5>Access medical care services from the comfort of your Home, 24x7</h5><br></br>
							<h5>Talk to specialist doctors via video call and receive instant health and medical consultation</h5>
						</div>
					</div>
				</div>
			</div>

        	<div className="container">
				<div className="row">
					<div className="row gap-5 m-3 ms-0">
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
				</div>
			</div>

				<div className="container">
					<div className="col">
					<div className="row mt-4">
						<h2 className="display-4 text-center">How It Works</h2><br></br>
						<h4 className="text-success text-center">Say goodbye to the inconvenience and stress of traditional docotor visits. In four easy steps book an appointment right from where you are!</h4><br></br>
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

				<div className="container bg-light border-light mt-5 overflow-auto  p-4">
					<div className="row">
						<h4 className="row-sm-12 display-5 text-center">What Our Users Have To Say</h4><br></br>
						<h4 className="row-sm-12 text-success text-center">We have more than 1000 5-Star reviews!</h4><br></br>
							<div className="row gap-4 m-4 ms-1">
							{dataThree.map(reviewCard =><ReviewCard
								header={reviewCard.header}
								titleThree={reviewCard.titleThree}
								descriptionThree={reviewCard.descriptionThree}
								footer={reviewCard.footer}
								
								/>)}
							</div>
					</div>
				</div>	  
		</div>
	);
};
