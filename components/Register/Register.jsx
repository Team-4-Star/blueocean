import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { LoginContext } from '../../context/LoginContext.jsx'

const Register = () => {

    const navigate = useNavigate();
    const { username, setUsername, password, setPassword, role, setRole, registrationStatus, setRegistrationStatus } = useContext(LoginContext);
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        const fetchCsrfToken = async () => {
            const response = await fetch('https://blue-ocean-back-end.onrender.com/csrf-token', {
                /* credentials: 'include', */
            });
            const data = await response.json();
            setCsrfToken(data.csrf_token);
        };

        fetchCsrfToken();
    }, []);

    // temp faked register data
    // // access the history object from React Router
    // const navigate = useNavigate();

    // //function to handle form submission
    // const handleSubmit = () => {
    //     // simulated registration logic
    //     // after successful registration, show the status message for 2 seconds
    //     setRegistrationStatus({ message: 'Registration Successful', visible: true });
    //     setTimeout(() => {
    //         setRegistrationStatus({ ...registrationStatus, visible: false });
    //         // redirect to the home page after successful registration
    //         navigate('/');
    //     }, 2000);
    // };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('https://blue-ocean-back-end.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'CSRF-Token': csrfToken,
            },
            body: JSON.stringify({ username, password, role }),
            credentials: 'include',
        });
        
        const data = await response.json();

        if (data.status === 'ok') {
            setRegistrationStatus({ message: 'Registration Successful', visible: true });
            setTimeout(() => {
                setRegistrationStatus({ ...registrationStatus, visible: false });
                navigate('/');
            }, 2000);
        } else {
            setRegistrationStatus({ message: 'Registration Failed', visible: true });
            setTimeout(() => {
                setRegistrationStatus({ ...registrationStatus, visible: false });
            }, 2000);
        }
    }

    return (
        <>
            <div className="register-container">
                <div className="register-border">
                    <h1 className="header-label">REGISTER ACCOUNT</h1>
                    <form className="input-form">
                    <div className="input-container">
                        <div className="input-row">
                            <label htmlFor="username" className="label">USERNAME</label>
                            <input type="text" className="input-value" id="username" placeholder="username" autoComplete="off"
                            value={username} onChange = {(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="password" className="label">PASSWORD</label>
                            <input type="password" className="input-value" id="password" placeholder="password" autoComplete="off"
                            value={password} onChange = {(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="role" className="label">ROLE</label>
                            <input type="text" className="input-value" id="role" placeholder="role" autoComplete="off"
                            value={role} onChange = {(e) => setRole(e.target.value)}/>   
                        </div>
                    </div>
                    <button id="submit-btn" onClick={handleSubmit}>SUBMIT</button>
                    <div id="status" className={registrationStatus.visible ? '' : 'hidden'}>
                        
                            {registrationStatus.message}

                    </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
