import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Canceled = () => {
    const { store, actions } = useContext(Context);

	return (
			<div className="container">
                <h3>Payment canceled </h3>
                <br />
                <br />
                <h4>Please try again later</h4>
                <br />
                <h5>
                <br />
                If you have any questions, please email &nbsp;
                <a href="mailto:info@mydoctor.com">info@mydoctor.com</a>
                </h5>
            </div> 
	);
};
