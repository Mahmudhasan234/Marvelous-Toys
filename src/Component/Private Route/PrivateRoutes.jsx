import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user){
       return children
    }
    
    return (
        <Navigate state={{from: location}} to='/login' replace></Navigate>
    );
    
    }
export default PrivateRoutes;