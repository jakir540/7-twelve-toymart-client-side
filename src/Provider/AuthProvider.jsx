import React, { createContext } from 'react';
// import { getAuth } from "firebase/auth";

export const AuthContext =createContext()


const AuthProvider = () => {

    const AuthInfo ={

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;