import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
   
    const [registrationStatus, setRegistrationStatus] = useState({
        message: 'Registration Successful',
        visible: false
    });

    // Access the history object from React Router
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = () => {
        // Simulated registration logic
        // After successful registration, show the status message for 2 seconds
        setRegistrationStatus({ message: 'Registration Successful', visible: true });
        setTimeout(() => {
            setRegistrationStatus({ ...registrationStatus, visible: false });
            // Redirect to the home page after successful registration
            navigate('/');
        }, 2000);
    };

    return (
        <>
            <div className="register-container">
                <div className="register-border">
                    <h1 className="header-label">REGISTER ACCOUNT</h1>
                    <div className="input-container">
                        <div className="input-row">
                            <label htmlFor="username" className="label">USERNAME</label>
                            <input type="text" className="input-value" id="username" placeholder="username" autoComplete="off"/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="password" className="label">PASSWORD</label>
                            <input type="password" className="input-value" id="password" placeholder="password" autoComplete="off"/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="role" className="label">ROLE</label>
                            <input type="text" className="input-value" id="role" placeholder="role" autoComplete="off"/>
                        </div>
                    </div>
                    <button id="submit-btn" onClick={handleSubmit}>SUBMIT</button>
                    <div id="status" className={registrationStatus.visible ? '' : 'hidden'}>
                            {registrationStatus.message}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;