
import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// create context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // data from use firebase
    const allContext = useFirebase();

    return (
        <AuthContext.Provider value={allContext} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;