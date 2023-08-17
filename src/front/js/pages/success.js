import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Success = () => {
    const { store, actions } = useContext(Context);

	return (
			<div className="container footer-eighty">
                <h3>Payment successful </h3>
                <br />
                <br />
                <h4>You will receive an email confirmation shortly</h4>
                <br />
                <h5>
                Thanks for your payment and for using the myDoctor app
                <br />
                If you have any questions, please email &nbsp;
                <a href="mailto:info@mydoctor.com">info@mydoctor.com</a>
                </h5>
            </div> 
	);
};
