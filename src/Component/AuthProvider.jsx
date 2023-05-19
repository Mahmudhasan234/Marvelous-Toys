import React, { createContext, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [loading, setLoading]= useState(true)


/*Signup Section*/ 
    const signUpUser = (email, password, name, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl)
    }

    /*SignUp google Section*/ 
const signInWithGoogle =()=>{
    return signInWithPopup (auth, googleProvider)
}



    const authInfo = {
        signUpUser,
        signInWithGoogle,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;