import React, {  useState } from "react";
import { useForm } from "../hooks/useform";
import { Link, useNavigate } from "react-router-dom";


export const Booking = () => {
    const navigate = useNavigate();


    const [inputValues, handleInputChange] = useForm({
        name:'',
        dob:'',
        email:'',
        password: '',
        password2: '',
    })

    const { name, dob, email, password, password2 } = inputValues  
    
    const [error, setError] = useState({
        name: false,
        dob: false,
        email: false,
        password: false,
        password2: false
    })

    const errorStyle = {
        borderColor: "red",
    };

const createUser = async (event) => {
    event.preventDefault();
    setError({
        name: name === "",
        dob: dob === "",
        email: email === "",
        password: password === "",
        password2: password2 === "" || password !== password2
    });
    if (password !== password2) {
        alert("The passwords don't match!!!");
        return;
    }
    if (
        name !== '' &&
        dob !== '' &&
        email !== '' &&
        password !== '' &&
        password2 !== ''
    ){
       try {
         const response = await fetch(process.env.BACKEND_URL+'/api/signup',{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                dob: dob,
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        if (response.ok){
            alert('Welcome')
            navigate("/private")
            return true
        }
       }
       catch (error){
            console.log(error)
       }
    }

}


	return (


		<div className="w-50 p-3">

			<form>

            <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.name ? errorStyle : {}} type="text" name="name" id="form3Example1f" className="form-control" value={name} onChange={handleInputChange} />
                        {error.name && <div className="badge bg-danger text-wrap">Name is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Name</label>
                    </div>
                </div>
                
                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.dob ? errorStyle : {}} type="text" name="dob" id="form3Example1f" placeholder="dd-mm-yyyy" className="form-control" value={dob} onChange={handleInputChange} />
                        {error.dob && <div className="badge bg-danger text-wrap">DOB is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Date of Birth</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.email ? errorStyle : {}} type="email" name="email" id="form3Example1f" className="form-control" value={email} onChange={handleInputChange} />
                        {error.email && <div className="badge bg-danger text-wrap">Email is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.password ? errorStyle : {}} type="password" name="password" id="form3Example1h" className="form-control" value={password} onChange={handleInputChange} />
                        {error.password && <div className="badge bg-danger text-wrap">Password is required</div>}
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">

                    <div className="form-outline flex-fill mb-0">
                        <input type="password" name="password2" id="form3Example4cd" className="form-control" value={password2} onChange={handleInputChange} />
                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
				<button type="submit" className="btn btn-primary" onClick={createUser}>Submit</button>
                </div>
			</form>

		</div>
		
	);
};