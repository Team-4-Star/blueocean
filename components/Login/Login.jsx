import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';



const Login = () => {

    const [loginStatus, setLoginStatus] = useState({
        message: 'Login Successful', 
        visible: false
    })

    const navigate = useNavigate();


    const handleSubmit = () => {
     // Simulated registration logic
        // After successful registration, show the status message for 2 seconds
        setLoginStatus({ message: 'Login Successful', visible: true });
        setTimeout(() => {
            setLoginStatus({ ...loginStatus, visible: false });
            navigate('/');
        }, 2000);
    }
    

  return (
    <div className="login-container">
        <div className="login-border">
        <h1 className="header-label">LOGIN</h1>
            <div className="input-container">
                <div className="input-row">
                    <label htmlFor="username" className="label">USERNAME</label>
                    <input type="text" className="input-value" id="username" placeholder="username" autoComplete="off"/>
                </div>
                <div className="input-row">
                    <label htmlFor="password" className="label">PASSWORD</label>
                    <input type="password" className="input-value" id="password" placeholder="password" autoComplete="off"/>
                </div>
            </div>
            <button id="submit-btn" onClick={handleSubmit}>SUBMIT</button>
             <div id="status" className={loginStatus.visible ? '' : 'hidden'}>
                        {loginStatus.message}
            </div>
        </div>
        
    </div>
  )
}

export default Login
