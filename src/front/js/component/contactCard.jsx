import React from "react";

const ContactCard = (props) =>{
    return(
        <div className="card-contact">
            <div className="top">
                <h2 className="title">{props.title}</h2>
                <image className="circle-img" src={props.image} />
            </div>
            <div className="bottom">
                <h4 className="role">{props.role}</h4>
                <h5 className="info">{props.info}</h5>
                <h4 className="email">{props.email}</h4>
                <h4 className="phone">{props.phone}</h4>    
            </div>
            <button className="btn btn-primary">Contact</button>
        </div>
    );
}

export default ContactCard