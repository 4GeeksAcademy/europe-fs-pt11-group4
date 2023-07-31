import React, { useContext } from "react";
import { Context } from "../store/appContext";
import doctor3ImageUrl from "../../img/doctor3.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div id="carouselCaptions" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img calss = "image" height="400" width="100%" src={doctor3ImageUrl}/>
                  <div className="carousel-caption d-md-block">
                    <h1 className="col-12 text-danger">With <b>myDoctor</b> Experience One-Stop Healthcare</h1><br></br>
                    <h3 className="col-12 text-danger">Access routine medical care and urgent care services from the comfort of your home, 24x7</h3>
					<h3>Talk to specialist doctors via video call and receive instant health and medical consultation</h3>
				  </div>
                </div>
              </div>
            </div>

            <div className="container p-5 m-7">
                  <h2 className="mt-0 mb-1">What Makes <i>myDoctor</i> <span className="text-success">a "One-Stop Healthcare App"</span></h2><br></br>
                <div className="container d-flex justify-content-left">
					<div className="container"> 
						<p>One place to get initial consultation, diagnosis, second opinion, treatment plans, e-prescriptions, follow up, medical reports in e-copy and much more</p>
						<p>Top doctors across Europe are onboarded from various disciplines including General Physicians, Physiotherapists, Psychiatrists, Dentists, ENT Specialists, Gynecologists, Cardiologists, Dermatologists, Neurologists, Pediatricians, and many others.</p>
				  	</div> 
					<div>
						<img className="rounded float-end" width="300"  height="200" src={doctor3ImageUrl}/ >
					</div>  
                </div>
            </div><hr></hr>
			
			<div className="container p-5 m-7">
                  <h2 className="mt-0 mb-1">With so many such apps around <span className="text-success">Why Choose Us</span></h2><br></br>
                <div className="container d-flex justify-content-left">
					<div className="container"> 
						<p>We are committed to providing effiecient, reliable and affordable digital healthcare services</p>
						<p>We combine world-class technology and top-rated doctors</p>
						<p>We bring experts from all fields of medicine at one place</p>
						<p>On our team are doctors from all over Europe. No more language problems, no more geographical limitations</p>
				  	</div> 
					<div>
						<img className="rounded float-end" width="300"  height="200" src={doctor3ImageUrl}/ >
					</div>  
                </div>
            </div><hr></hr>

            <div className="container p-5 m-7"> 
                  <h2 className="mt-0 mb-1">What do We Offer <span className="text-success">to Our Clients</span></h2><br></br>
                <div className="container d-flex justify-content-left">
					<div className="container">
						<p>High quality video calls</p>
						<p>Assurance that all your data is safe with us</p>
						<p>Medical reports in soft copy</p>
						<p>e-prescription to get your medicines from any pharmacy</p>
						<p>Free second opinion from other doctors onboard</p>
					</div>  
					<div>
						<img className="rounded float-start" width="300"  height="200" src={doctor3ImageUrl}/ >
					</div>
                </div>
            </div><hr></hr>

          <div className="container p-5 m-7"> 
              <h2> How to Book an Appointment </h2><br></br>
              <p>Talk to a GP or a specialist without leaving your house. No more wasting time commuting or waiting in the queue. Three simple steps and you are ready to see your doctor through a video call!</p>
            <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <img className="card-img" src={doctor3ImageUrl}/ >
                    <div className="card-body">
                      <h5 className="card-title text-primary">Select the Doctor</h5>
                      <p className="card-text">From our team of experienced doctors select the specialization and the doctor or book an appointment with a GP</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                      <img className="card-img-top" src={doctor3ImageUrl}/ >
                      <div className="card-body">
                        <h5 className="card-title text-primary">Select Date and Time </h5>
                        <p className="card-text">The doctors are available 365 days a year, 7 days a week, 24 hours a day.Choose according to your convenience</p>
                      </div>
                    </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img className="card-img-top" src={doctor3ImageUrl}/ >
                    <div className="card-body">
                      <h5 className="card-title text-primary">Make the Payment</h5>
                      <p className="card-text">Check your booking details and pay online. You get an immediate confirmation</p>
                    </div>
                  </div>
                </div>
            </div>
          </div><hr></hr>

          <div classNameName="container p-6 m-7">
            <h2 className="mt-0 mb-1">FAQs</h2><br></br>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            I am not technology-savy. Is this site for me?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">You don't need to be a technology expert to be able to use our services. Our website is created with a user-friendly interface so that people of all ages can easily access our services.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            If I am unsure which specialist to book?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">If you are not sure you can book a session with the GP. Tell him in detail your health issue and he will refer you to an adequate specialist.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What if someday I am not able to make it to my session?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We totally understand that unforeseen events do come up. You can easily cancel or reschedule your appointment through the platform.</div>
                    </div>
                </div>
            </div>
        </div>

        
			
			
		</div>
	);
};
