import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState({
    message: '',
    visible: false
  });

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: credentials.username,
        password_hash: credentials.password
      })
    };

    try {
      const response = await fetch('https://solidfy.onrender.com/login', requestOptions);
      const data = await response.json();

      if (response.ok) {

        //successful login
        setLoginStatus({ message: 'Login Successful', visible: true });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {

        //login failure
        setLoginStatus({ message: data.message || 'Login Failed', visible: true });
      }
    } catch (error) {
      console.error('Login error:', error);

      setLoginStatus({ message: 'Login Failed - Network error', visible: true });
    }
  };

  // based on loginstatus, set the message class
  const messageClass = `status-message ${loginStatus.visible ? '' : 'hidden'} ${loginStatus.message.includes("Successful") ? 'success-message' : 'failure-message'}`;

  return (
    <div className="login-container">
      <div className="login-border">
        <h1 className="header-label">LOGIN</h1>
        <form onSubmit={handleSubmit} className="input-container">
          <div className="input-row">
            <label htmlFor="username" className="label">USERNAME</label>
            <input type="text" className="input-value" id="username" placeholder="username" autoComplete="off" value={credentials.username} onChange={handleInputChange}/>
          </div>
          <div className="input-row">
            <label htmlFor="password" className="label">PASSWORD</label>
            <input type="password" className="input-value" id="password" placeholder="password" autoComplete="off" value={credentials.password} onChange={handleInputChange}/>
          </div>
          <button type="submit" id="submit-btn">SUBMIT</button>
        </form>
        <div id="status" className={messageClass}>
          {loginStatus.message}
        </div>
      </div>
    </div>
  );
}

export default Login;
