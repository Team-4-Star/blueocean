import React, { createContext, useState} from 'react';

export const LoginContext = createContext(undefined);

export function LoginContextProvider({ children}){

    const [loginState, setLoginState] = useState({
        login: false,
        user_id: null,
        role: null,
    })

    return (
        <LoginContext.Provider value={{

        }} >
            {children}
        </LoginContext.Provider>
    );
}