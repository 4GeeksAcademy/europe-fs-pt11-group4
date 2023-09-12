import React, { useState, useEffect } from "react";

export const ProductDisplay = () => (
  <div className="container footer-eighty">
    <section className="d-flex">
    <div className="product">
      <img
        src="https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg"
        alt="doctor image"
      />
      
    </div>
    <div className="p-5">
      <div className="description">
        <h3>Appointment with Dr. Susana Lowes</h3>
        <h5>€39.00</h5>
      </div>
      <form action={process.env.BACKEND_URL+'/api/create-checkout-session'}  method="POST">
        <button type="submit" className="btn btn-primary">
          Checkout
        </button>
      </form>
    </div>
  </section>
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

