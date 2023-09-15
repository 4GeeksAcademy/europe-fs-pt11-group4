import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const ProductDisplay = () => (
  <div className="container footer-eighty">
    <br />
      <div className="product card mb-3" style={{ maxWidth: "1850px", boxShadow: "3px 3px 3px #9E9E9E" }} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg" alt="doctor image" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title booking-header">Appointment with Dr. Susana Lowes</h5>
              <p className="card-text">Cost: €39.00</p>
              <form action={process.env.BACKEND_URL+'/api/create-checkout-session'}  method="POST">
                <button type="submit" className="btn btn-outline-success">
                  Checkout
                </button>
                &nbsp;&nbsp;&nbsp;
                <Link to="/private">
						      <button className="btn btn-outline-danger">Cancel payment</button>
					      </Link>
              </form>
            </div>
          </div>
        </div>
      </div> 
  </div>
  
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Payment successful! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Payment declined -- please try again."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

