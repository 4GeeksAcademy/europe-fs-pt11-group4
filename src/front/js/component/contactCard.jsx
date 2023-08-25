import React from "react";

const ContactCard = (props) =>{
    return(
        <div className="card-contact">
            <div className="top">
                <h2 className="title">{props.title}</h2>
                <image className="circle-img" src={props.image} />
            </div>
            <div className="bottom ms-3">
                <h4 className="role">{props.role}</h4>
                <h5 className="info">{props.info}</h5>
                <h5 className="email">{props.email}</h5>
                <h5 className="phone">{props.phone}</h5>    
            </div><br></br>
            <button className="btn btn-primary w-100">Contact</button>
        </div>
    );
}

export default ContactCard