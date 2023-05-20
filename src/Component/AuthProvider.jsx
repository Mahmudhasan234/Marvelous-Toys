import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
const [user, setUser]= useState([])
    const [loading, setLoading]= useState(true)


/*Signup Section*/ 
    const signUpUser = (email, password, name, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl)
    }

    /*SignUp google Section*/ 
const signInWithGoogle =()=>{
    setLoading(true)
    return signInWithPopup (auth, googleProvider)
}

/*Signin using email*/
const signInWithEmail =(email, password)=> {
    return signInWithEmailAndPassword(auth, email, password)
} 

/*Sign Out User*/

const signOutUser =()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return(()=>{
        unsubscribe();
    })
})
    const authInfo = {
        signUpUser,
        signInWithGoogle,
        user,
        signOutUser,
        signInWithEmail,
        loading
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