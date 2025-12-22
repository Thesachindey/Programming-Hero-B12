import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUserWithEmailAndPasswordFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogleFunc = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithubFunc = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const  sendPasswordResetEmailFunc = (email) => {
        return  sendPasswordResetEmail(auth, email)
    }
    const  signOutFunc = () => {
        return  signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithGoogleFunc,
        signInWithGithubFunc,
        sendPasswordResetEmailFunc,
        signOutFunc
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;