import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])

    const [loading, setLoading] = useState(true)
    const authInfo = {
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;