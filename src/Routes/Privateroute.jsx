import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privateroute = () => {

    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return 
    }
    
    
    return <Navigate to="/login"></Navigate>;
};

export default Privateroute;