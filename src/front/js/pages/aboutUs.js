import React from "react";
import ContactCard from "../component/contactCard.jsx";
import "../../styles/contact.css";

const contacts = [{title:"Jane Doe", imgURL: "{exe1ImageUrl}", role: "CEO and Founder", info: "Some text that describes me lorem ipsum ipsum lorem ipsum lorem ipsum", email: "jane@test.com", phone: "123456789"},
    {title:"Mike Ross", imgURL: "", role: "Designer and Developer", info: "Some text that describes me lorem ipsum ipsum lorem ipsum lorem ipsum", email: "ross@test.com", phone: "123456789"},
    {title:"Joe Doe", imgURL: "", role: "Designer and Developer", info: "Some text that describes me lorem ipsum ipsum lorem ipsum lorem ipsum", email: "joe@test.com", phone: "123456789"}]

    
export const AboutUs=()=>{

	return (
        <div className="bg-light">

            <div className="text-center p-5">
                <h1>About Us</h1><br></br>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus, ex at faucibus fermentum, nulla ipsum blandit neque, condimentum facilisis nunc ex sit amet elit. Morbi tincidunt, felis non aliquet mattis, ligula dui egestas arcu, non congue lorem ligula id nunc. Praesent ornare quis tortor non sollicitudin. Praesent sit amet condimentum quam, et vulputate justo. Donec nec ipsum aliquet, rutrum velit sit amet, gravida mauris. In imperdiet nunc tincidunt, placerat turpis luctus, accumsan nunc.</h5>
            </div>
            <hr></hr>

            <h1 className="text-center bg bg-light">Our Team</h1>
                        
                <div className="row gap-4 mt-0 m-4">
                        <div className="row gap-4 m-4">
                            {contacts.map(contactCard =><ContactCard
                                title={contactCard.title}
                                imgURL={contactCard.imgURL}
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