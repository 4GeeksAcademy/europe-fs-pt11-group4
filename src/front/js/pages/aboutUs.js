import React from "react";
import ContactCard from "../component/contactCard.jsx";
import "../../styles/contact.css";

const contacts = [
    {title:"Jide", imageURL: "", role: "Designer and Developer", info: "Learning under the aegis of 4Geeks Academy", email: "jide@mydoctor.com", phone: "+34 631438897"},
    {title:"Smita", imageURL: "", role: "Designer and Developer", info: "Learning under the aegis of 4Geeks Academy", email: "smitra@mydoctor.com", phone: "+34 314385979"}]

    
export const AboutUs=()=>{

	return (
        <div className="bg-light footer-eighty">

            <div className="text-center p-4">
                <h1>About Us</h1><br></br>
                <p>At myDoctor, we believe in providing prompt and convenient care to all our users. 
                    That's why we offer online medical services through our app, providing the relief you need without the hassle of traveling to a doctor's office. 
                    myDoctor App simplifies communication with doctors all over EU.
                    We build trust between doctors and patients every day, so that you get the best service.
                </p>
            </div>
            <hr></hr>

            <h1 className="text-center bg bg-light">Our Team</h1>
                        
                <div className="container">
                        <div className="row justify-content-center gap-5 m-4">
                            {contacts.map(contactCard =><ContactCard
                                title={contactCard.title}
                                imageURL={contactCard.imageURL}
                                role={contactCard.role}
                                info={contactCard.info}
                                email={contactCard.email}
                                phone={contactCard.phone}
                                
                            />)}
                        </div>
                </div>
        </div>

    );
};