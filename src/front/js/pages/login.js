import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useForm } from "../hooks/useform";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';


export const Login = () => {
	const { store, actions } = useContext(Context);

	const [inputValues, handleInputChange] = useForm({
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        email: false,
        password: false
    });
    
    const { email, password } = inputValues;
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();
    


	const loginUserRequest = async () => {
        if (email === "" || password === "") {
            setError({
                email: email === "",
                password: password === ""
            });
            return;
        }
        const success = await actions.login(email, password, navigate);
        if (!success) {
            setShowModal(true);
        }
	}

	useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            navigate("/private");
        }
    }, []);

	const errorStyle = {
        borderColor: "red",
    };

	return (

		<div className="container ">
            <div className="w-50 p-3 mx-auto border border-primary-subtle p-5">
                <form>                               
                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example17" className="form-control form-control-lg" name="email" value={email} onChange={handleInputChange} style={error.email ? errorStyle : {}} />
                            <label className="form-label" >Email address{error.email && <label className="text-danger text-opacity-50 fst-italic lh-1">Email is required</label>}</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" value={password} onChange={handleInputChange} style={error.password ? errorStyle : {}} />
                            <label className="form-label" >Password {error.password && <label className="text-danger text-opacity-50 fst-italic lh-1">Password is required</label>}</label>
                        </div>

                        <div className="pt-1 mb-4">
                            <div className="">
                                <Link to="/forgot" >
                                    <p>Forgot Password?</p>
                                </Link>
                            </div>
                            <button className="btn btn-primary " type="button" onClick={loginUserRequest}>Login</button>

                        </div>

                        
                        
                        <div className="mb-3 ">
                            <Link to="/signup" >
                                <h5>CREATE AN ACCOUNT</h5>
                            </Link>
                        </div>

                </form>



                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Error</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The login credentials are incorrect. Please verify your email and password.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

            </div>
        </div>

    );
};