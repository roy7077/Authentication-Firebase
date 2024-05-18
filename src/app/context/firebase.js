"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCM24Iyu2gbB4Ge5CXL9cbTB_7KZ1K70qQ",
    authDomain: "internshipauth.firebaseapp.com",
    databaseURL: "https://internshipauth-default-rtdb.firebaseio.com",
    projectId: "internshipauth",
    storageBucket: "internshipauth.appspot.com",
    messagingSenderId: "110542091351",
    appId: "1:110542091351:web:987b2e26a6db8e987e5f12",
    measurementId: "G-MEASUREMENT_ID" // Add measurement ID if available
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user,settUser]=useState(null);

    //create user - email and pass auth
    const setUser=(email,password)=>{
        // console.log(email);
        // console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
      }

    // login user 
    const emailLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Wrong email and password');
        });
    }

    //google auth
    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log("Authentication successful:", user);
                return user;
            })
            .catch((error) => {
                console.error("Error during authentication", error);
                console.error("Error code:", error.code);
                console.error("Error message:", error.message);
                console.error("Email:", error.customData?.email);
                console.error("Credential:", GoogleAuthProvider.credentialFromError(error));
            });
    }

    //signOut 
    const logout=()=>{
        signOut(auth);
    }
    
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(currentUser)=>{
            settUser(currentUser);
        });
        return ()=>unsub();
    },[user])

    return (
        <FirebaseContext.Provider value={{ setUser, googleAuth, emailLogin ,user ,logout}}>
            {props.children}
        </FirebaseContext.Provider>
    );
}
