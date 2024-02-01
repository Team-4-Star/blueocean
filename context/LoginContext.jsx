import React, { createContext, useState} from 'react';

export const LoginContext = createContext(undefined);

function LoginContextProvider ({ children }) {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [registrationStatus, setRegistrationStatus] = useState({
        message: 'Registration Successful',
        visible: false
    });

    return (
        <LoginContext.Provider value={{
            username,
            setUsername,
            password,
            setPassword,
            role,
            setRole,
            registrationStatus,
            setRegistrationStatus
        }} >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;

