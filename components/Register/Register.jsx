import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { LoginContext } from '../../context/LoginContext.jsx';

const Register = () => {
    const navigate = useNavigate();
    const { username, setUsername, password, setPassword, role, setRole, registrationStatus, setRegistrationStatus } = useContext(LoginContext);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        try {
            const response = await fetch('https://solidfy.onrender.com/register', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ username, password_hash: password, role }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setRegistrationStatus({ message: 'Registration Successful', visible: true });
                setTimeout(() => {
                    setRegistrationStatus({ ...registrationStatus, visible: false });
                    navigate('/');
                }, 2000);
            } else {
                setRegistrationStatus({ message: data.message || 'Registration Failed', visible: true });
                setTimeout(() => {
                    setRegistrationStatus({ ...registrationStatus, visible: false });
                }, 2000);
            }
        } catch (error) {
            console.error('Registration error:', error);
            setRegistrationStatus({ message: 'Registration Failed - Network Error', visible: true });
            setTimeout(() => {
                setRegistrationStatus({ ...registrationStatus, visible: false });
            }, 2000);
        }
    };
    

    return (
        <>
            <div className="register-container">
                <div className="register-border">
                    <h1 className="header-label">REGISTER ACCOUNT</h1>
                    <form className="input-form" onSubmit={handleSubmit}>
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
                        <button type="submit" id="submit-btn">SUBMIT</button>
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